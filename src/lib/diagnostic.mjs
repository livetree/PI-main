// Diagnostic content and scoring. Kept out of the page component so `check.mjs`
// can exercise the thresholds directly — see LOOP_SYSTEM.md §5.
// .mjs so plain `node check.mjs` can import it without a package-wide type change.

export const SECTIONS = [
  {
    id: 'foundations',
    title: 'FOUNDATIONS',
    subtitle: 'Jesus-Centered Leadership',
    questions: [
      'Our leaders spend consistent time with Jesus and prioritize their relationship with Him',
      'Our leaders recognize and respond to God’s voice in their daily lives',
      'Our leaders are confident in their identity in Christ',
      'Our leaders model the life they are calling others to live'
    ]
  },
  {
    id: 'activation',
    title: 'ACTIVATION',
    subtitle: 'Living the Kingdom',
    questions: [
      'Our leaders regularly apply what they learn in real-life situations',
      'Our leaders step out in faith and obedience, even when it’s uncomfortable',
      'Ministry happens beyond structured meetings and services',
      'Our leaders grow through practice—not just teaching'
    ]
  },
  {
    id: 'multiplication',
    title: 'MULTIPLICATION',
    subtitle: 'Reproducing Leaders',
    questions: [
      'Our leaders are intentionally discipling others',
      'Our leaders know how to develop and train new leaders',
      'Leadership responsibility is spreading across many people',
      'New leaders are consistently emerging'
    ]
  },
  {
    id: 'culture',
    title: 'CULTURE',
    subtitle: 'Environment for Growth',
    questions: [
      'Multiplication is expected, not optional',
      'There is a clear pathway to develop leaders',
      'People are moving from attendee → disciple → leader',
      'The leadership culture is simple and reproducible'
    ]
  }
];

export const TIERS = {
  foundation: {
    max: 12,
    color: '#ef4444',
    label: 'Establishing Foundations',
    means: 'You have vision and people in place. The opportunity now is to strengthen the foundation so leaders can grow and develop consistently.',
    experiencing: [
      'Leadership is carried by a smaller group',
      'People are engaged, but not yet stepping into leadership',
      'Development happens, but without a clear pathway'
    ],
    nextStepTitle: 'Build a strong, reproducible foundation for leadership development.',
    nextStepDesc: 'This creates clarity, consistency, and the ability to grow leaders over time.',
    focusArea: 'Establishing strong Jesus-centered foundations, Building a clear leadership pathway'
  },
  momentum: {
    max: 22,
    color: '#f59e0b',
    label: 'Developing Leaders',
    means: 'You are seeing leaders grow and take steps forward. The next stage is creating consistency so leaders can begin developing others.',
    experiencing: [
      'Some leaders are actively growing',
      'Discipleship is happening, but unevenly',
      'Leadership development depends on key individuals'
    ],
    nextStepTitle: 'Strengthen your pathway so leadership development becomes consistent and reproducible.',
    nextStepDesc: 'This is where growth begins to turn into multiplication.',
    focusArea: 'Clarifying your leadership pipeline, Strengthening activation and discipleship'
  },
  multiplication: {
    max: Infinity,
    color: '#10b981',
    label: 'Multiplying Leaders',
    means: 'You have strong leadership development already in place. Leaders are growing—and beginning to develop others.',
    experiencing: [
      'Leaders are investing in others',
      'Responsibility is spreading',
      'Momentum is building across your team'
    ],
    nextStepTitle: 'Refine and accelerate multiplication.',
    nextStepDesc: 'With focused input, you can expand what’s already working and increase long-term impact.',
    focusArea: 'Advanced leadership training, Focused equipping in key areas'
  }
};

// Answers are 0 (no), 1 (sometimes), 2 (yes).
export const POINTS_PER_ANSWER = 2;

export const QUESTIONS = SECTIONS.flatMap((s) =>
  s.questions.map((q) => ({ text: q, sectionTitle: s.title, sectionSubtitle: s.subtitle, sectionId: s.id }))
);

export const MAX_SCORE = QUESTIONS.length * POINTS_PER_ANSWER;

export const scoreToTier = (total) =>
  total <= TIERS.foundation.max ? TIERS.foundation
    : total <= TIERS.momentum.max ? TIERS.momentum
      : TIERS.multiplication;

// Slices `answers` per section by that section's own question count, so adding a
// question to one section cannot silently misalign the rest.
export function sectionScores(answers) {
  let offset = 0;
  return SECTIONS.map((section) => {
    const scores = answers.slice(offset, offset + section.questions.length);
    offset += section.questions.length;
    return {
      id: section.id,
      title: section.title,
      score: scores.reduce((a, b) => a + b, 0),
      max: section.questions.length * POINTS_PER_ANSWER
    };
  });
}
