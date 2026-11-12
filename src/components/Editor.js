'use client';

// The on-page editor. Add ?edit to the address of the home or give page, sign
// in with Google, click any text or photo, press Save. Nothing here loads for
// ordinary visitors: Firebase is only fetched once ?edit is in the address.
// Who may save is decided by pi-momentum's firestore.rules, not by this file.

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { SITE, accept, applyOverrides, at } from '@/content/site.mjs';
import { FIREBASE, readOverrides } from '@/content/store.mjs';

const MAX_PHOTO_CHARS = 900_000; // base64, under Firestore's 1 MB document limit

// Shrink a chosen photo in the browser until it fits one Firestore document.
async function shrink(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
  const canvas = Object.assign(document.createElement('canvas'), {
    width: Math.round(bitmap.width * scale),
    height: Math.round(bitmap.height * scale),
  });
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  for (let quality = 0.85; quality > 0.3; quality -= 0.1) {
    const url = canvas.toDataURL('image/jpeg', quality);
    if (url.length < MAX_PHOTO_CHARS) return url;
  }
  throw new Error('That photo is too detailed to store. Try a smaller one.');
}

export default function Editor() {
  const on = useSearchParams().has('edit');
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState('');
  const fb = useRef(null);
  const saved = useRef({}); // what the store holds
  const edits = useRef({}); // what changed in this sitting

  // Load Firebase and watch who is signed in.
  useEffect(() => {
    if (!on) return;
    let stop = () => {};
    let live = true;
    (async () => {
      const [{ initializeApp, getApps }, auth, store] = await Promise.all([
        import('firebase/app'), import('firebase/auth'), import('firebase/firestore'),
      ]);
      if (!live) return;
      const app = getApps()[0] ?? initializeApp(FIREBASE);
      fb.current = { auth, store, session: auth.getAuth(app), db: store.getFirestore(app) };
      stop = auth.onAuthStateChanged(fb.current.session, (u) => { setUser(u); setReady(true); });
    })().catch((err) => setStatus(`Could not start the editor: ${err.message}`));
    return () => { live = false; stop(); };
  }, [on]);

  // Signed in: make every named element editable, showing the saved words
  // rather than the cached page, with *stars* visible so they can be moved.
  useEffect(() => {
    if (!on || !user) return;
    const controller = new AbortController();
    const { signal } = controller;
    (async () => {
      saved.current = await readOverrides({ cache: 'no-store' });
      if (signal.aborted) return;
      const site = applyOverrides(SITE, saved.current);

      for (const el of document.querySelectorAll('[data-k]')) {
        const k = el.dataset.k;
        if (at(site, k) === undefined) continue;
        el.textContent = String(at(site, k));
        el.contentEditable = 'plaintext-only';
        el.classList.add('editable');
        el.addEventListener('input', () => { edits.current[k] = el.textContent; setStatus('Unsaved changes'); }, { signal });
        el.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); el.blur(); } }, { signal });
      }
      for (const img of document.querySelectorAll('[data-k-img]')) {
        img.classList.add('editable');
        img.addEventListener('click', () => pickPhoto(img), { signal });
      }
      setStatus('Click any text or photo to change it.');
    })().catch((err) => setStatus(`Could not load the saved edits: ${err.message}`));

    // While editing, links and buttons must not navigate away from unsaved work.
    document.addEventListener('click', (e) => {
      if (e.target.closest('main a')) e.preventDefault();
    }, { capture: true, signal });

    return () => {
      controller.abort();
      for (const el of document.querySelectorAll('.editable')) {
        el.classList.remove('editable');
        el.removeAttribute('contenteditable');
      }
    };
    // pickPhoto only reads refs, so it is safe to leave out.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, user, pathname]);

  function pickPhoto(img) {
    const k = img.dataset.kImg;
    const input = Object.assign(document.createElement('input'), { type: 'file', accept: 'image/*' });
    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;
      try {
        setStatus('Uploading photo…');
        const url = await shrink(file);
        const id = crypto.randomUUID().replaceAll('-', '').slice(0, 20);
        const { store, db } = fb.current;
        await store.setDoc(store.doc(db, 'images', id), { data: url.split(',')[1] });
        const alt = window.prompt('Describe the photo in a few words, for people who cannot see it:', img.alt);
        edits.current[`${k}.src`] = `/img/${id}`;
        if (alt?.trim()) { edits.current[`${k}.alt`] = alt; img.alt = alt.trim(); }
        img.removeAttribute('srcset');
        img.src = url;
        setStatus('Unsaved changes');
      } catch (err) {
        setStatus(denied(err) ?? `Photo not changed: ${err.message}`);
      }
    };
    input.click();
  }

  const denied = (err) => (err?.code === 'permission-denied' ? 'This Google account is not allowed to edit this site.' : null);

  async function save() {
    const next = { ...saved.current };
    for (const [k, value] of Object.entries(edits.current)) {
      const ok = accept(k, value);
      if (ok === undefined) return setStatus(`Not saved: "${String(value).slice(0, 30)}" cannot go in ${k}. An entry cannot be empty.`);
      // An edit back to the committed wording is not an edit; drop it.
      if (ok === at(SITE, k)) delete next[k]; else next[k] = ok;
    }
    try {
      setStatus('Saving…');
      const { store, db } = fb.current;
      await store.setDoc(store.doc(db, 'content', 'main'), { json: JSON.stringify(next), updatedAt: store.serverTimestamp() });
      await fetch('/api/revalidate', { method: 'POST' });
      window.location.assign(pathname); // leave edit mode and show the result as visitors see it
    } catch (err) {
      setStatus(denied(err) ?? `Not saved: ${err.message}`);
    }
  }

  async function signIn() {
    try {
      const { auth, session } = fb.current;
      await auth.signInWithPopup(session, new auth.GoogleAuthProvider());
    } catch (err) {
      setStatus(`Sign-in did not finish: ${err.message}`);
    }
  }

  if (!on) return null;
  // The top photo sits behind the words, so it gets its own button.
  const heroImg = () => document.querySelector('.hero [data-k-img]');
  return (
    <div className="edit-bar" role="region" aria-label="Site editor">
      <span role="status">{status || (ready ? (user ? '' : 'Sign in to edit this page.') : 'Starting the editor…')}</span>
      {ready && !user && <button className="btn btn-primary" onClick={signIn}>Sign in with Google</button>}
      {user && (
        <>
          {pathname === '/' && <button className="btn btn-ghost" onClick={() => pickPhoto(heroImg())}>Change top photo</button>}
          <button className="btn btn-primary" onClick={save}>Save</button>
          <button className="btn btn-ghost" onClick={() => window.location.assign(pathname)}>Done</button>
          <button className="btn btn-ghost" onClick={() => fb.current.auth.signOut(fb.current.session)}>Sign out</button>
        </>
      )}
    </div>
  );
}
