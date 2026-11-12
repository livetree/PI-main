// One runnable check, no framework: `npm run check`.
// Each assertion holds a decision that is expensive to get wrong, and its
// message says what broke rather than what was expected. See LOOP_SYSTEM.md §5.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { SITE, accept, applyOverrides, at } from './src/content/site.mjs';
import { SECTIONS, TIERS, QUESTIONS, MAX_SCORE, POINTS_PER_ANSWER, scoreToTier, sectionScores } from './src/lib/diagnostic.mjs';
import { TEAM, REGIONS, titleOf } from './src/lib/people.mjs';

const answersScoring = (total) => {
  // Build a real answer array summing to `total`, the way the page does.
  const out = [];
  let left = total;
  for (let i = 0; i < QUESTIONS.length; i++) {
    const v = Math.min(POINTS_PER_ANSWER, left);
    out.push(v);
    left -= v;
  }
  assert.equal(left, 0, `cannot express ${total} with ${QUESTIONS.length} answers`);
  return out;
};

// --- Diagnostic: the tier boundaries, at the point, not the middle ----------
// The copy on screen promises three stages; a shifted boundary tells a church
// it is multiplying when it is not.
assert.equal(scoreToTier(0).label, 'Establishing Foundations', 'a score of 0 must read as Establishing Foundations');
assert.equal(scoreToTier(12).label, 'Establishing Foundations', '12 is the top of Establishing Foundations');
assert.equal(scoreToTier(13).label, 'Developing Leaders', '13 is the first Developing Leaders score');
assert.equal(scoreToTier(22).label, 'Developing Leaders', '22 is the top of Developing Leaders');
assert.equal(scoreToTier(23).label, 'Multiplying Leaders', '23 is the first Multiplying Leaders score');
assert.equal(scoreToTier(MAX_SCORE).label, 'Multiplying Leaders', 'a perfect score must read as Multiplying Leaders');

// The screen prints "N / 32". That 32 must come from the questions that exist.
assert.equal(MAX_SCORE, 32, `the results screen promises a denominator of 32, questions currently allow ${MAX_SCORE}`);
assert.equal(QUESTIONS.length, 16, `the home page advertises a 16-point diagnostic, SECTIONS holds ${QUESTIONS.length}`);

// Section slicing must follow each section's own length. This is the guard for
// the previous hardcoded `sIdx * 4` / `max: 8`, which misaligned every later
// section the moment one section changed size.
{
  const perfect = sectionScores(answersScoring(MAX_SCORE));
  assert.equal(perfect.length, SECTIONS.length, 'every section needs a bar on the results screen');
  for (const s of perfect) {
    assert.equal(s.score, s.max, `section ${s.id} scored ${s.score}/${s.max} on an all-yes run — slicing is misaligned`);
  }
  const totalMax = perfect.reduce((a, s) => a + s.max, 0);
  assert.equal(totalMax, MAX_SCORE, `section maxima sum to ${totalMax}, the headline score is out of ${MAX_SCORE}`);

  // A partial run must not credit sections the person never reached.
  const half = sectionScores([2, 2, 2, 2]);
  assert.equal(half[0].score, 8, 'the first section should hold the first four answers');
  assert.equal(half[3].score, 0, 'an unanswered section must score 0, not inherit earlier answers');
}

// Every tier the lookup can return needs the fields the results screen reads.
for (const [key, tier] of Object.entries(TIERS)) {
  for (const field of ['color', 'label', 'means', 'experiencing', 'nextStepTitle', 'nextStepDesc', 'focusArea']) {
    assert.ok(tier[field], `TIERS.${key} is missing ${field}, which the results screen renders`);
  }
}

// --- People: one roster, and no chip that silently renders nothing ----------
for (const r of REGIONS) {
  assert.ok(titleOf(r.lead), `the connect page shows ${r.name}'s lead "${r.lead}" with a title, but nobody by that name is in TEAM`);
}
assert.equal(new Set(TEAM.map((m) => m.name)).size, TEAM.length, 'TEAM has a duplicate name');
for (const m of TEAM) {
  assert.ok(m.title, `${m.name} has no title; both /about and /give render one`);
  assert.ok(m.image === null || m.image.startsWith('https://'), `${m.name}'s image must be an https URL or an explicit null placeholder`);
}

// --- Blog: every post carries what the index and the article render ---------
for (const file of readdirSync('src/posts')) {
  const src = readFileSync(`src/posts/${file}`, 'utf8');
  for (const field of ['title', 'date', 'excerpt']) {
    assert.ok(new RegExp(`^${field}:`, 'm').test(src), `${file} has no ${field}; the blog index renders it`);
  }
}

// --- Giving: a donor must always land somewhere real ------------------------
// /give once shipped as four <button>s with no action; nobody could give.
const read = (dir) => readdirSync(dir, { withFileTypes: true, recursive: true })
  .filter((f) => f.isFile() && /\.(js|mjs|css)$/.test(f.name))
  .map((f) => [`${f.parentPath}/${f.name}`, readFileSync(`${f.parentPath}/${f.name}`, 'utf8')]);
const SRC = read('src');

assert.ok(!/<button/.test(readFileSync('src/app/give/page.js', 'utf8')), '/give has a <button>; every way to give must be a link to a giving page');
const funds = [...SITE.ways.items, ...SITE.give.team.funds, ...SITE.give.projects.funds];
for (const f of funds) {
  assert.ok(f.name && /^https:\/\/\S+$/.test(f.href), `"${f.name}" on /give has no https giving link (got ${f.href})`);
}
assert.equal(new Set(funds.map((f) => f.href)).size, funds.length, 'two giving options share one link; a gift would land in the wrong fund');

// Every photo the content names must be in public/, or the page ships a hole.
JSON.stringify(SITE, (k, v) => {
  if (k === 'src') assert.ok(existsSync(`public${v}`), `content names ${v}, which is not in public/`);
  return v;
});

// --- On-page edits: allow what an editor does, refuse everything else --------
{
  const edited = applyOverrides(SITE, {
    'hero.title': 'Train *one million* people',
    'today.items.0.n': '2,600',
    'hero.photo.src': '/img/abc123def456',
    'hero.photo.alt': 'https://evil.example/x.jpg',   // alt is words; any words are fine
    'family.photo.src': 'https://evil.example/x.jpg', // a photo off this site
    'ways.items.2.href': 'https://evil.example/give', // a giving link
    'hero.nope': 'new key',
    'vision.steps': 'not a list any more',
    'closing.title': '   ',
  });
  assert.equal(edited.hero.title, 'Train *one million* people', 'a saved headline edit did not reach the page');
  assert.equal(edited.today.items[0].n, 2600, 'a number typed as "2,600" must be stored as 2600, or the count-up breaks');
  assert.equal(edited.hero.photo.src, '/img/abc123def456', 'an uploaded photo did not replace the old one');
  assert.equal(edited.family.photo.src, SITE.family.photo.src, 'an edit pointed a photo at another website');
  assert.equal(edited.ways.items[2].href, SITE.ways.items[2].href, 'an edit changed where a gift goes');
  assert.equal(edited.hero.nope, undefined, 'an edit added a key that is not in site.mjs');
  assert.ok(Array.isArray(edited.vision.steps), 'an edit replaced a list with text');
  assert.equal(edited.closing.title, SITE.closing.title, 'an empty edit blanked a heading');
  assert.equal(SITE.hero.title, 'What will it take to train *1 million* people?', 'applying edits changed the committed copy itself');
  assert.equal(accept('today.items.0.n', 'lots'), undefined, 'words were accepted where a number is counted up');
}

// Every element the editor can change must name a real entry, or the edit
// saves to nowhere and silently never appears.
for (const [file, text] of SRC) {
  for (const [, raw] of text.matchAll(/data-k(?:-img)?=(?:"([^"]+)"|\{`([^`]+)`\})/g).map((m) => [0, m[1] ?? m[2]])) {
    if (raw.includes('${k}')) continue; // FundList: the two lists are checked by name below
    // A list item may hold the entry at any position (a stat has `n` or `text`).
    const found = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((i) => at(SITE, raw.replaceAll(/\$\{\w+\}/g, i)) !== undefined);
    assert.ok(found, `${file} marks "${raw}" as editable, but site.mjs has no such entry`);
  }
}
for (const k of ['give.team', 'give.projects']) {
  assert.ok(at(SITE, `${k}.title`) && at(SITE, `${k}.funds.0.name`), `/give lists ${k}, which site.mjs does not hold`);
}

// --- One palette: the old gold must not come back ---------------------------
for (const [file, text] of SRC) {
  assert.ok(!/d4af37|212,\s?175,\s?55/i.test(text), `${file} still uses the old gold; the accent is var(--brand-primary)`);
  // The diagnostic is on the back burner: reachable by URL, linked from nowhere.
  if (!file.includes('diagnostic')) assert.ok(!/href=["'{]+\/diagnostic/.test(text), `${file} links to /diagnostic, which is parked`);
}

console.log('checks passed');
