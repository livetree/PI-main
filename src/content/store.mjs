// Where on-page edits are kept: the Firebase project pi-momentum already uses.
// This web config is public by design; firestore.rules there decide who may write.
import { SITE, applyOverrides } from './site.mjs';

export const FIREBASE = {
  projectId: 'pi-momentum-site',
  appId: '1:802778158607:web:db7d27fa248b56e134f57a',
  apiKey: 'AIzaSyD_Pa5roqggnWQoOpc-9m0FgDje7atPg-8',
  authDomain: 'pi-momentum-site.firebaseapp.com',
};

const docUrl = (path) =>
  `https://firestore.googleapis.com/v1/projects/${FIREBASE.projectId}/databases/(default)/documents/${path}?key=${FIREBASE.apiKey}`;

// One string field of one document, or null when the document does not exist.
export async function readField(path, field, init) {
  const res = await fetch(docUrl(path), init);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`content store answered ${res.status} for ${path}`);
  return (await res.json()).fields?.[field]?.stringValue ?? null;
}

export const readOverrides = async (init) => JSON.parse((await readField('content/main', 'json', init)) ?? '{}');

// What the pages render: this file's copy with the saved edits on top. If the
// store cannot be reached the committed copy is shown, and the reason is logged.
export async function getSite() {
  try {
    return applyOverrides(SITE, await readOverrides({ next: { revalidate: 300 } }));
  } catch (err) {
    console.error('Saved edits unavailable, showing the committed copy:', err);
    return SITE;
  }
}
