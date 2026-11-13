# ADOPT — PI-main becomes the donor-first Prepare International site

Stage 1/5 of the app-forge loop (`01_adopt`). No app code changed in this stage.
Written 2026-11-12 from running the site at 375px and desktop, the live
prepareinternational.org, and `../pi-momentum` (PI Momentum + Lead40).

## The brief

- PI-main is the main PI site and sets the look for everything.
- Primary audience: **givers and donors**, not people looking for training.
- Inspiration: PI Momentum and Lead40.
- Josiah checks look and design, and signs off before anything goes live.
  Everything else runs without asking (see `AGENTS.md` § Autonomy).

## 1. Map

```
STACK    Next 16.2.1 (App Router), React 19, framer-motion, lucide-react, plain CSS + inline styles. npm.
ENTRY    src/app/layout.js → Navbar + page + footer
ROUTES   /  /about  /training  /diagnostic  /give  /connect  /blog  /blog/[slug]
DATA     none. Static content in src/lib/people.mjs, src/lib/diagnostic.mjs, src/posts/*.md
AUTH     none
DEPLOY   git remote github.com/livetree/PI-main → Vercel project `pi-nations` (team Livetree's projects). A push to main deploys to https://pi-nations.vercel.app. Note: pi-main.vercel.app is NOT ours; it is a stranger's site.
TESTS    npm run check (assert-based, passes). eslint: 0 errors, the 2 known <img> warnings.
```

## 2. Baseline (today)

- `npm run check` passes. `npx eslint` 0 errors / 2 known warnings. No console errors on `/` or `/give`.
- Every route loads. No horizontal overflow at 375px.
- Diagnostic flow is covered by `check.mjs`; not re-walked here.
- Not verified: `npm run build` (not run this stage), and scroll-in sections on a
  visible tab — the preview pane renders hidden, so `whileInView` sections looked
  blank in screenshots. That is the harness (AGENTS.md), not recorded as a defect.

## 3. Verbs

The site has one verb that matters to a donor: **give**. It does not exist.

| Object | Verb | Where | State |
|---|---|---|---|
| Gift | give to PI | `/give` "Fuel PI Global" | dead `<button>`, no handler |
| Gift | give to a field leader | `/give` leader rows | arrow, no link |
| Gift | give to a project | `/give` "Explore Projects" | dead `<button>` |
| eBook | download | `/give` "Get the Free eBook" | dead `<button>` |
| Contact | email a region | `/connect` | works (`mailto:`) |
| Diagnostic | take / reset | `/diagnostic` | works |

## 4. Empty case

No accounts, scopes or roles. Nothing to construct.

## 5. Work list

**BROKEN**
1. Nobody can give. Every button on `/give` is a `<button>` with no action. The
   real destination already exists: the Tithe.ly link used by pi-momentum
   (`tithe.ly/give?f=67e1cdac…&l=9c633e5d…`, plus a `fund=` variant).
2. `viewport.maximumScale: 1` in `layout.js` blocks pinch-zoom. Remove it.

**MISSING**
3. No reason to give anywhere on the site: no impact numbers, no stories, no
   photographs of real people, no "where the money goes".
4. The home page never mentions giving. Its only calls to action are "Start a
   Conversation" and "Identify Your Gaps" — both for pastors.
5. No link to Lead40 or PI Momentum.

**UGLY** (compared against pi-momentum / Lead40, which are the design reference)
6. Whole home page speaks to a church leader with a problem ("The Real Gap",
   "Where are your leaders growing next?"). A donor has no place in it.
7. Abstract wave-grid backgrounds where the reference sites use photography.
8. Muddy gold `#d4af37` with glow shadows, a red-boxed heading, skewed
   clip-path buttons. None of it appears in either reference.
9. Fly-in physics on every block; the reference uses one calm reveal.

## 6. The plan

### Look — taken from the references, nothing invented

| Token | Value | Source |
|---|---|---|
| Background | navy `#151b29`, surfaces `#1e2536` / `#283144` | `pi-momentum/src/style.css` (already what PI-main uses) |
| Accent | yellow `#ffe63b` (replaces gold `#d4af37`) | PI Momentum logo yellow |
| Lead40 accent | lime `#d4ff3a` on forest `#0f1a14`, **only** on Lead40's own card | `pi-momentum/src/lead40.css` |
| Display type | Outfit 800, uppercase, tight | Momentum (already loaded) |
| Body | Inter | both |
| Buttons | pill, solid accent, dark text | Lead40 `.btn` |
| Emphasis | one accent-coloured word per heading | Lead40 `<mark>` |
| Imagery | real field photos, full-bleed with a navy scrim | Momentum hero, Lead40 story scenes |
| Motion | fade-up reveal once; count-up on numbers; nothing else | Momentum `.reveal` |

The main site is the calm parent: navy + one yellow. Lead40's lime and its
mountain walk-in stay on Lead40. That is what makes PI-main read as the
umbrella rather than a third campaign.

### Home page — a donor's story, top to bottom

Each section names the frame it is built from.

1. **Hero** — full-bleed field photo. "Multiplying **Leaders.**" / "The momentum
   of multiplying leaders that can create lasting impact around the globe."
   Buttons: *Give monthly* · *Give yearly*. (Momentum hero + Lead40 Monthly/Yearly switch)
2. **PI today, in numbers** — ~50 movements · 2,400+ students · 400+ churches
   and organisations · 50–60,000 homes hearing about Jesus each week · 5
   continents · 25 years. (Momentum "PI Today"; Lead40 `.cells`)
3. **One leader at a time** — three photo stories with a quote each: Zimbabwe,
   Poltava, Mozambique. (Lead40 `.story` scenes, same photos and words)
4. **Where your gift goes** — Trainer deployment · Relational investment ·
   Training delivery. (Momentum "Mission Briefing")
5. **Where we work** — Africa · Asia · Latin & South America · Europe · USA.
   (Momentum "Regional Momentum")
6. **Two ways to multiply leaders** — two doors side by side: Lead40 ($40 a
   month funds one leader) and PI Momentum (yearly major gifts). (pi-momentum `index.html`)
7. **Who is behind it** — 25 years, the team strip, link to About. (existing `/about` + `people.mjs`)
8. **Final give band** + footer. Footer carries the small line the live site
   already uses: "Looking for training? Visit the Learning Hub."

### Routes

| Route | What happens |
|---|---|
| `/` | Rebuilt as above |
| `/give` | Rebuilt: three real ways to give (PI Global via Tithe.ly, Lead40, Momentum). Dead buttons gone. |
| `/about` | Kept. Restyled by the token change only. |
| `/training`, `/diagnostic`, `/connect` | Kept as they are, moved behind one "For leaders" nav item |
| `/blog` | Kept |
| Nav | About · For leaders · Blog · **Give** (the button; replaces "Connect") |

Skipped on purpose (ponytail): a separate `/impact` page, a CMS, a donation
form of our own, a region map. The home page carries impact; Tithe.ly carries
payment. Add them when a donor asks for something the home page cannot show.

### Guards to leave in `check.mjs`

- Every give call-to-action in shipped source is an `<a>` with an `https://` href — no `<button>` under `/give`.
- The old gold `#d4af37` / `212,175,55` appears nowhere in `src/`.
- The numbers in section 2 come from one exported object, and the home page renders every key.

## 7. NOT TOUCHING

- The stack. No re-stacking, no new dependencies.
- `src/lib/diagnostic.mjs` and the diagnostic flow.
- `/training` pathway logic and `/connect` region data.
- `src/lib/people.mjs` roster and the `/about` photo URLs.
- Blog posts and `src/lib/api.js`.
- The two known `<img>` warnings (deliberate deferral).
- `../pi-momentum` — read from, never edited. Photos are copied, not moved.
- Hosting and domain.

## ONE CLICK (only Josiah can do these — none block the build)

1. Confirm the Tithe.ly link above is the right general-fund destination for the main site.
2. Confirm the headline numbers (50 movements, 2,400 students, 400+ churches, 50–60k homes) are current.
3. Say where PI-main is hosted, so "going live" is a known step.

---

## Revision 2 — 2026-11-12, after Josiah's answers

**Changed by him**
- **The driving question is "What will it take to train 1 million people?"** It is
  now the hero, and the page answers it: 1,000 movements → 10,000 trainers →
  1,000,000 trained, then where PI is today (about 50 of 1,000 movements lit on a dot grid).
- **Diagnostic is on the back burner.** Unlinked from nav, footer, home and
  `/training`. The route and its code are untouched and still load by URL.
- **Students: 2,500.** Other numbers confirmed current.
- **Giving links come from prepareinternational.org/give-now**, not pi-momentum.
  General fund, eight team members and three projects are wired. One fund on the
  live page ("AR Support") has no name beside it, so it is left out.
- **Hosting: Vercel.** No project exists for this repo yet.

**Built (stages 02–03, local only)**
- `src/content/site.mjs` holds every word, number, photo and link on `/` and `/give`.
- `/` and `/give` rebuilt from it; palette moved from gold to Momentum yellow site-wide.
- Found and fixed on the way: `.btn-primary` labels turned yellow-on-yellow on
  hover (`a:hover` outranked the button); phone menu button had no name; pinch-zoom was blocked.
- Story photos are the Lead40 cards cropped to the photograph, so each photo
  still matches its country.
- Guards added to `check.mjs`: no `<button>` on `/give`, every fund has a unique
  https link, every named photo exists, old gold cannot return, nothing links to `/diagnostic`.

**Editing text and graphics — the decision**
Step 1 (done): all content in one file, so there is exactly one place to change.
Step 2 (after the design is approved): edit on the page itself. Sign in with
Google, click any text to change it, click any photo to replace it, press Save.
It reuses what pi-momentum already runs — the same Firebase project for sign-in
and saved text, Vercel Blob for photos — so there is no new account and no new
bill. Not built yet on purpose: an editor built against a design that may still
change gets built twice.

Rejected: a hosted CMS (another login, another bill), and editing through
GitHub (not simple for photos).

**ONE CLICK, updated**
1. Tell me who "AR Support" is, or confirm it stays off the page.
2. When the look is approved: create the Vercel project for `livetree/PI-main`
   (or say go and I will, through the Vercel connection).

---

## Revision 3 — 2026-11-12, look approved, editor built

Josiah approved the look (graduation hall as the top photo) and asked for the editor.

**How editing works**
1. Open the home or give page with `?edit` on the end of the address (the footer has an "Edit" link).
2. Sign in with Google.
3. Click any text and type. `*Stars*` around a word make it yellow. Click a photo to replace it; "Change top photo" handles the one behind the headline.
4. Press Save. The page reloads as visitors see it.

**How it is built**
- `site.mjs` stays the committed copy. Saved edits are a small map laid over it, kept in the Firebase project pi-momentum already uses (`content/main`).
- Only an entry that already exists in `site.mjs` can be changed, and only to the same kind of value. Giving links cannot be edited on the page. A photo can only point at this site.
- Who may save is decided by pi-momentum's existing `firestore.rules` (the two admin emails there). Anonymous writes were tested and are refused (403).
- Uploaded photos are shrunk in the browser and stored in Firestore, served from `/img/<id>`. `ponytail:` 1 MB a photo; move to Vercel Blob if full-size originals are ever needed.
- Visitors do not download Firebase. It loads only with `?edit`.
- If the store cannot be reached, pages show the committed copy and log why.

**Verified**: guards pass (edits allowed, eight kinds of bad edit refused), build passes, the edit bar appears only with `?edit`, nothing is editable before sign-in, `/img/<unknown>` is 404, refresh route answers 204.

**Not verified — needs Josiah's Google account**: signing in, saving a text edit, replacing a photo. These have never been run.

**Not editable on the page (edit `site.mjs`)**: giving links, the number of lit dots, adding or removing a story, fund or stat. The about, training, connect and blog pages.

**ONE CLICK, updated**
1. Try the editor: open `localhost:3000/?edit`, sign in, change a line, save.
2. When the site goes to Vercel, its address must be added to Firebase → Authentication → Authorized domains, or Google sign-in will refuse to open there.
3. "AR Support" is still off the give page.

---

## Revision 4 — 2026-11-12

- **"Where we are today" replaced.** Josiah found the dot grid vague. The section is
  now "What we are doing right now": four activity cards (running schools, walking
  with movements, equipping churches, reaching homes), each with its number. The
  homes line reads "from leaders trained", as he asked.
- **Pushing is allowed.** He asked for this to go to the existing
  https://pi-nations.vercel.app and to finish the editor (CMS) afterwards. The hard
  stop is now the real domain only; see `AGENTS.md` § Autonomy.
- **No closing questions.** He was getting too many requests for input.
- **Deployed.** Commit 6c3f971 is live at https://pi-nations.vercel.app (Vercel project
  `pi-nations`). Checked on the live address: home and give serve the new content,
  the hero photo optimises, `/diagnostic` still loads by URL.
- **ONE CLICK for the editor on the live site:** add `pi-nations.vercel.app` to
  Firebase → Authentication → Settings → Authorized domains (project `pi-momentum-site`).

---

## Revision 5 — 2026-11-12: about page rebuilt, blog plan

**About page (live).** Rebuilt in the donor look from `site.mjs`: history as a
timeline using PI Momentum's wording, "How we train" (impartation, five marks),
plain-language guiding principles, "The Mission Vector" renamed "The vision",
colour team portraits. Faith Arredondo removed from the roster. AR Support stays
off `/give` by Josiah's decision. The on-page editor covers the page.

### Blog plan

**What exists**
- This repo: one placeholder post, written by a machine, with claims nobody
  made ("over 60% of our global network interacts with us on phones"). Old styling.
- prepareinternational.org: **141 published posts** (WordPress), mostly teaching
  and devotional pieces — "The Dance of the Crab", "Learning the Ways of
  Barnabas", "Cross-Cultural Ministry" — roughly one or two a month through July 2025.
- pi-momentum: six field stories with photos and quotes (Zimbabwe, Guatemala,
  Poltava, Mozambique, Warsaw, Matambú). Three are already on the home page.

**The decision: one section, two kinds of writing**
| Kind | For | Shape | Source |
|---|---|---|---|
| Field stories | donors | short, photo first, place, one quote, ends with Give | the six Lead40 stories, then new ones |
| Teaching | leaders | long read, no photo required | the 141 WordPress posts |

The nav says **Stories**; the address stays `/blog` so nothing breaks. The index
opens on field stories, because that is what a donor came for, with a second
tab for Teaching.

**Pages**
- Index: the newest field story large across the top, then photo cards
  (place, title, date). Tabs: Field stories · Teaching. 12 to a page.
- Post: photo across the top, one readable column, pull quote, author and date,
  a Give band at the end, previous / next.
- Home: each of the three stories links to its full story.

**Build order**
1. Restyle index and post pages; add `kind`, `place`, `photo` to a post; write
   the six field stories from the Lead40 material; delete the placeholder.
2. Migrate the 141 posts: one script reads the WordPress API, writes markdown
   with the same slugs, and copies each featured image. Same slugs means old
   links can be redirected when the domain moves.
3. Posting from the browser: a "New story" form in the editor (title, place,
   photo, text). After the editor's sign-in and save have been proven.

Until step 3, a new story is: send the words and a photo, it is added as a file.

**Guards**: every post has title, date, excerpt, kind; a field story has a photo
that exists; slugs are unique; a migrated post keeps its WordPress slug.

**Skipped on purpose**: comments, tags, search, related posts. Add search when
the Teaching tab is long enough that people ask for it.

**ONE CLICK**
1. If any of the 141 posts should not come across, name them; otherwise all do.
2. "Join PI's Epistle" (July 2025) looks like a newsletter. If it is still
   running, send the sign-up link and it goes at the foot of every story.

---

## Revision 6 — 2026-11-12: leaders page rebuilt around customization

Josiah liked the look but wanted the stages gone and the message to be: highly
customizable training, 6 to 8 hours of teaching, follow-up sessions in between
that guide local leaders through practical conversations, all built on one
topic (the Kingdom of God) and shaped to the vision and requirements of the
leaders in their nation.

- `/training` now runs: the promise → one topic → how it works (listen, teach,
  follow up, next course) → what is shaped around you (courses, language,
  teachers, setting) → the course list → start a conversation.
- Wording for "how it works" and "built to fit" is taken from
  prepareinternational.org/global/training, except the teaching hours, which are
  his (the live page says 8–12; he said 6 to 8).
- The 26 courses are kept, grouped under six plain headings in native
  `<details>`. "Stage 01–04", "pathway" and the click-to-spotlight widget are gone.
- The page reads from `site.mjs`, so the on-page editor covers it.

---

## Revision 7 — 2026-11-13: leaders page back to the original design

Revision 6 replaced the stage cards with blocks. Josiah preferred the original:
six cards that open their courses when chosen. Restored from history, with:

- **Stages renamed to what each one is about**, so they read as choices rather
  than a sequence: Foundation, Identity, Power, Everyday life, Leadership, Multiplication.
- **His message in the opening**: highly customizable, 6 to 8 hours of teaching,
  follow-up sessions in between, one topic (the Kingdom of God), shaped to the
  leaders in their nation.
- "Pathway" wording and the filler in the course descriptions stay removed.

Lesson: "get away from the stages" meant the naming, not the layout. He had said
he liked how the page looked. When a brief says it likes the look, change words
before structure.

The page is a client component again, so the on-page editor does not cover it.
