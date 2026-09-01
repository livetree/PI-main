# The loop — how software gets built here

**If you are a session that has just started: read this file top to bottom
before touching anything. It is the operating manual, and it is enough.** You
do not need the previous conversation.

## Start here

1. **Adopt section 3 as standing rules.** They are not advice. Each one is a
   defect that already shipped once, and following them is the job.
2. **Adopt section 4 (ponytail) as the default posture** unless told otherwise.
3. **Before judging any screen or fixing any bug, run the type checker and get
   it to zero**, then reproduce the problem at the real data scale.
4. **Before saying something works, exercise it.** Reading code, reading a rule,
   or reading a successful deploy message are all insufficient. Section 3 says
   why, three separate ways.
5. **When you fix something, leave the guard behind** — the check that makes the
   whole class impossible, not just this instance. Then write the lesson down
   (section 6).

Two habits that matter more than they sound:

- **State what you verified and what you did not.** "Deployed" and "working" are
  different claims. Say which one you have.
- **A correction is cheap; a confident wrong answer is not.** If a number, a
  test result or a diagnosis turns out wrong, say so plainly in one line and
  move on.

---

This describes a **working system**, not an aspiration. Every rule below exists
because something specific broke, and each one names the failure that produced
it. That is the whole method: a defect is not finished when it is fixed, only
when it cannot recur.

---

## 1. What the pipeline is

`app-forge` turns a design package into a deployed offline PWA. Five stages,
each a standalone prompt in `agents/`. There is no orchestration script — the
model runs the stages itself from the launch package pasted into the session.

```
forge.html   → launch package (spec + design + open questions resolved)
01_architect → architecture.md            (a NEW app)
01_adopt     → ADOPT.md                   (a site that already exists; skips 02)
02_builder   → the app
03_review    → evidence, specialist passes, fixes
04_ship      → GitHub, then Vercel
05_learn     → wiki/ ingest; promotes repeat findings into agents/
```

**Three layers, and only one is mutable by each actor:**

| Layer | What | Who may edit |
|---|---|---|
| Sources | `production/<slug>/review.md`, evidence, the launch package | nobody — never edit evidence |
| Wiki | `wiki/*.md`, interlinked pages of accumulated learning | `05_learn` only |
| Agents | `agents/*.md`, the prompts themselves | `05_learn` only |

**The single-writer rule matters.** If any stage could edit `agents/`, the
prompts drift and nobody can say why a rule is there. `05_learn` is the only
writer, and every promoted rule carries the wiki page that explains it.

**The promotion threshold: a defect seen in three builds stops being a wiki
entry and becomes a rule inside an agent prompt**, so the defect cannot be
produced again. A wiki that only accumulates is a diary. A wiki that rewrites
the agents is a system that gets smarter.

---

## 2. The measure

Not "is the wiki large". **Does the same class of bug cost less the second
time.**

---

## 3. The working agreements

These came out of real failures. They are listed with the failure, because a
rule without its cause gets argued away.

### It is never the user's device

A person could not sign in on a new phone. Tokens, preferences, timezone,
payload and membership were all checked against production and all fine, so the
conclusion drawn was that their device was the problem. It was
`Cross-Origin-Opener-Policy: same-origin`, added in a security pass four days
earlier, which severs the channel a sign-in popup returns its credential
through. Broken for everybody, on every device, silently.

**When it works for you and not for them, the difference is something you
shipped.** List what changed, including config and headers. "Their device" is
not a diagnosis.

Corollary: a terminal probe has no service worker, no storage partitioning, no
popup blocker, no COOP, no cache and no PWA. It proves the server, and the
server is rarely the part that broke.

### Zero errors, or the list becomes camouflage

A type checker nobody runs is not a check. It is a list of things you have
decided to ignore, and it grows until real defects are indistinguishable from
noise — at which point "filtered out as pre-existing" becomes a defensible
reason to skip a line naming a live bug.

Twice a live defect sat in compiler output and was dismissed. The first cost a
message composer its Enter key for weeks. The second, once the list was
actually read, contained eleven live defects among the noise — including a
platform API deleted in a minor release (`StyleSheet.absoluteFillObject`, gone
in RN 0.86) whose absence spread as `undefined`, leaving modal scrims with no
position: no dimming, no tap-to-dismiss, nothing thrown.

**Run the type checker first, and get to zero.** Zero, not fewer — a standing
baseline is where the next defect hides. Clear config-caused errors first;
they are the camouflage. Never file a compiler error as pre-existing.

### A rule is proved by exercising it, never by reading it

Security rules are the one artefact where reading it is what makes it look
correct. A rule can state the intended restriction in the intended words,
deploy successfully, and restrict nothing.

Two in one file: `allow update: if false` never fired, because Cloud Storage
evaluates an overwrite as a *create*; and a `firestore.get()` cross-service call
denied every request because a service-account grant the CLI only prompts for
interactively had never been made.

Seven of eight assertions were green. The eighth was green **because nothing
worked at all** — a deny-everything failure makes a deny test pass.

For every rule: two identities (one inside the boundary, one outside), every
verb (create, read, overwrite, delete), one case per constraint (size, type,
path), and **at least one case that must be ALLOWED.** That last one is what
separates a working rule from a rule that refuses everybody.

Where an emulator cannot evaluate part of a rule, **skip that case with its
reason written in the test file** and prove it against the real service after
deploy. A deleted test looks like a property nobody wanted; a passing one is a
lie.

### Deploy succeeded ≠ the thing works

A collection-group rule was written, tested, committed — and never published.
Every read was denied and the dashboard rendered a confident set of zeroes.
The CLI later reported "already up to date", which was true and useless.

**Verify by reading the released artefact back** and diffing it against the
repository. Not the deploy message.

### A refusal is not an empty result

The same outage was invisible because the failure handler returned an empty
list. Denied and empty look identical on screen.

**Never hand back a neutral value on error.** Surface it, name the cause, and
say what it is not: the money is not zero, it is unknown.

(This is easy to preach and easy to breach. It recurred in a throwaway
diagnostic script inside the same session — a swallowed 401 printed as "0
members" and briefly looked like data loss.)

### Every field the logic reads needs a screen that writes it

`next_action` was in the type, in the sort function, in its own passing
assertions, and named in a warning on screen — *"nobody has decided anything
about any of these prospects"* — which was permanently true because **no screen
could set it.** A warning about the app, worded as though it were about the
data, which is worse than absent because it looks like information.

This is the one defect class a well-tested core makes *easier* to ship: a
pure-function check cannot tell that nothing in the product produces its input,
so the green check reads as coverage.

**Walk the fields, not just the objects.** For each field the logic reads, name
the screen that sets it. Leave a check behind that fails when one has no writer.

### Review at the size and shape that exists

Five donors became 233 and the screens went from fine to unusable without
anything breaking: a list with no search, the answer behind a link, a monthly
job that needed a terminal, a chart with one bar. All render, all pass, all look
correct in a screenshot of the fixture.

Then a subtler version of the same thing: a local seed with **the right row
count and the wrong provenance** produced a confident, impossible number — "233
new donors", because the seed wrote ordinary dated gifts where production had
opening-figure imports.

**Seed the real count and the real distribution, and reproduce how each record
actually got there**, including the flags the real import sets. Three questions
at that scale: what is the first thing on the screen; can you find one row; who
does this job, and on what.

### A silent fallback turns a typo into a mystery

A picker offered `accent2`; the palette called it `sage`; the lookup ended
`?? colours.accent`. Every project marked Sage drew the accent colour, on every
screen, in both themes. Nothing logged, nothing threw, no test failed.

**A fallback is a decision.** Where a value comes from a fixed set, the fallback
must be provably in that set or the mismatch must be loud. And **a permission
never defaults to "everything"** — an empty scope is an empty scope.

### There is no way to edit it

An absent verb is the defect that cannot fail a test: no error, no console line,
no red screen. It is found by a person trying to do the thing, after shipping.

Take the object-lifecycle table and **prove each cell in the running app**.
Rename it, delete it, remove a person, archive it and check what hung off it
went too. Any cell you cannot perform is a finding, named as a verb and an
object — "a wiki page cannot be deleted from anywhere in the app" — not "the
wiki needs work".

### Debugging is not the user's job

A video integration went four rounds of: change a setting, tap a diagnostic,
paste the result back, get told the key is probably wrong. Same screen four
times. The user was doing the debugging loop by hand while the agent watched.

Every round of that was avoidable:

- **The credential could not be read, and that was known early.** `vercel env
  pull` returns empty strings for encrypted values. Once that is established,
  stop designing checks that need the value and change the approach.
- **A browser was available the whole time.** The user was signed in. The
  diagnostic button could have been tapped by the agent from the first round.
  **If a check can be run, run it — do not narrate it to somebody else to run.**
- **The guess was repeated instead of eliminated.** Four rounds each proposed
  one more candidate format. Probing every candidate at once was the same code
  and one round.

**Rules:**

1. **Run the check yourself.** Browser, CLI, API, deployed endpoint — whatever
   reaches it. Asking a person to read a screen back is the last resort, not the
   first.
2. **Never ask the same question twice.** A second identical request means the
   approach is wrong, not that the answer was unclear.
3. **When something cannot be verified, say so and change the plan** — do not
   build a check that needs what is unavailable and hand it over.
4. **Eliminate the whole space, not one candidate per round.** If there are
   seven possible formats, try seven.
5. **Prefer the path that removes the dependency.** Turning a blocking feature
   off to prove the rest of the pipeline beats debugging it first. Hardest part
   first is not thoroughness, it is bad sequencing.

The measure: **how many times did the user have to look at the same screen?**
More than once is a defect in the loop, not in their patience.

### Answer the question, then stop

Replies had turned into essays — hash formulas, CSP directive lists, minified
bundle excerpts, cost tables nobody asked for — with the actual answer buried in
the middle of them. It reads as thoroughness and it is the opposite: it costs
money every turn and hides the one line that matters.

**Asked whether something works, open with yes, no, or unknown — then what to do
about it.** Nothing goes above that line.

- **Mechanism belongs in the commit message and the wiki**, not the reply. That
  is where whoever needs it will look, and they will look once.
- **No progress narration.** Not what is being read, not what is about to be
  tried. The result is the message.
- **A number appears only if a decision turns on it**, and then just the number.
- **Do not summarise what was just done in a summary of what was just done.**

If the useful content is "deployed, it works, nothing needed from you", that is
the whole message.

Exception: when the reasoning IS the deliverable — a plan, a decision, a
comparison that was asked for. Then give it in full and drop the apparatus
around it.

### Never remove the path that works

A sign-in fix replaced a popup with an untested redirect and locked out a user
who could previously get in. **A fix you cannot test may ADD a route, never
replace one.**

---

## 4. Ponytail: the laziest thing that actually works

A persistent mode, not a one-off. Before writing code, stop at the first rung
that holds:

1. Does this need to exist at all?
2. Does the standard library do it?
3. Does a native platform feature cover it?
4. Does an already-installed dependency solve it?
5. Can it be one line?
6. Only then: the minimum that works.

No abstractions nobody asked for. No avoidable dependencies. Deletion over
addition. Boring over clever.

**Mark intentional shortcuts with a `ponytail:` comment that names the ceiling
and the upgrade path.** Example: arrows instead of drag-and-drop on a board —
the ceiling is that dragging is what a desk user expects; the upgrade is a drag
library behind the same `onMove(stage)` call, with the arrows kept as the
accessible route.

**Never simplify away:** input validation at trust boundaries, error handling
that prevents data loss, security measures, accessibility basics, or the
calibration real hardware needs. Non-trivial logic leaves **one runnable check**
behind — an assert-based file, no framework.

---

## 5. What a check is for

Checks in this system are not coverage. Each one holds a specific decision that
was expensive to learn, and its message says what went wrong rather than what
was expected. Patterns worth copying:

- **Boundaries, not middles.** Test the tier threshold at the cent, the day the
  fiscal year turns, the row exactly at the size limit.
- **Assert the absence of a thing you deliberately did not build**, so nobody
  adds it by accident. (`lapsed()` is asserted absent because nobody has defined
  what lapsed means.)
- **Assert the wording** where the wording is the feature: no flag may contain
  "should", "recommend" or "ask them", because a screen that dispenses opinions
  gets trusted for the ones it gets wrong.
- **Grep the shipped source** for structural properties a unit test cannot see —
  every field the logic reads has a writer; every swatch a picker offers exists
  in the palette; no fixture id survives into a shipped file.
- **Drive the real script as a subprocess** rather than re-implementing it: a
  preview produced by different code is not a preview.

---

## 6. Running the loop in a session

1. **Read the checks before the code.** They encode decisions the code assumes.
2. **Type-check first, to zero.**
3. **Reproduce at production's scale and shape** before judging a screen.
4. **Fix, then leave the guard behind** — the check that makes the class
   impossible, not just this instance.
5. **Verify by exercising the real thing**, and read released artefacts back.
6. **Write the lesson into the wiki**; promote it into an agent prompt on the
   third occurrence.

Commit messages carry the reasoning. They are the record of why a rule exists,
and they are written for the person who finds the code in a year.

---

## 7. The wiki, as it stands

| Page | The class it holds |
|---|---|
| `it-works-from-here` | A terminal probe proves the server, not the thing that broke |
| `never-remove-the-path-that-works` | A fix you cannot test may add a route, never replace one |
| `a-silent-fallback-turns-a-typo-into-a-mystery` | A fallback is a decision; permissions never default to yes |
| `the-compiler-already-told-you` | Zero errors, or the list becomes camouflage |
| `a-field-no-screen-can-write` | Present, correct-looking, unreachable |
| `built-at-fixture-size` | Right count, wrong scale — or right count, wrong provenance |
| `a-rule-that-reads-right-and-does-nothing` | Assert the allows as hard as the denies |
| `there-is-no-way-to-edit-it` | The absent verb no test can fail |
| `day-one-is-the-real-first-screen` | Empty states are the first thing anybody sees |
| `the-design-file-is-the-spec-at-every-width` | Parity means at every designed width |
| `a-service-worker-fix-is-not-deployed` | `skipWaiting` + `clients.claim`, or the fix never activates |
| `verifiable-instructions-win` | An instruction that cannot be checked is a wish |
| `firebase-on-expo-web` | Platform specifics learned the hard way |

---

## 8. Using the forge on another project

**One session per repository.** The forge session is for editing the pipeline;
a product session runs in the product's own repo with its own `CLAUDE.md`. A
session that spans both ends up editing the wrong tree.

- **A new app:** paste the launch package, run `01_architect` → `02_builder` →
  `03_review` → `04_ship` → `05_learn`.
- **A site that already exists:** `01_adopt` produces `ADOPT.md` — an inventory
  of what is there, what it depends on, and what is safe to change — and skips
  the builder. The review, ship and learn stages then apply unchanged.

The wiki travels with the pipeline. A lesson learned on one product is a rule
the next one inherits, which is the point of the whole apparatus.
