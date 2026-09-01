// One runnable check, no framework: `npm run check`.
// Each assertion holds a decision that is expensive to get wrong, and its
// message says what broke rather than what was expected. See LOOP_SYSTEM.md §5.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
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

console.log('checks passed');
