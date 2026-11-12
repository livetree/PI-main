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
DEPLOY   git remote github.com/livetree/PI-main. Host not recorded in the repo — FINDING (assume a push to main deploys; treat it as going live)
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
