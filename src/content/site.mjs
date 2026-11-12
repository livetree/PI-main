// Every word, number, photo and giving link on the home and give pages.
// Edit here; the pages only lay it out. check.mjs guards the links and photos.
// Story photos are the Lead40 cards cropped to the photograph (720x520).
// In headings, *asterisks* mark the word shown in the accent colour.

const tithely = (fund) =>
  `https://tithe.ly/give_new/www/#/tithely/give-one-time/67965?giving_to=${encodeURIComponent(fund)}`;

export const SITE = {
  hero: {
    photo: { src: '/photos/hero-graduation.jpg', alt: 'A PI trainer facing a hall of graduates in caps and gowns' },
    eyebrow: '25 years · 5 continents',
    title: 'What will it take to train *1 million* people?',
    text: 'Leaders who multiply leaders. Your gift trains them.',
    primary: { label: 'Give now', href: '/give' },
    secondary: { label: 'See what it takes', href: '#vision' },
  },

  vision: {
    eyebrow: 'The vision',
    title: 'Not one big event. *Multiplication.*',
    text: 'Our first dream was 10,000 leaders trained. It turned out to be the tip of the iceberg. One million people are trained when movements raise trainers, and trainers raise leaders.',
    steps: [
      { n: 1000, label: 'Kingdom movements' },
      { n: 10000, label: 'trainers' },
      { n: 1000000, label: 'people trained' },
    ],
  },

  today: {
    eyebrow: 'PI today',
    title: 'What we are doing *right now.*',
    // One card per activity. A card shows `n` (counted up) or `text`, then its label.
    items: [
      { title: 'Running schools', n: 2500, label: 'students', text: 'Leaders are in class at PI schools from Warsaw and Poltava to Matambú, Costa Rica.' },
      { title: 'Walking with movements', n: 50, label: 'growing movements', text: 'Trainers teach for one or two intensive days, then keep coaching as local leaders disciple their own students.' },
      { title: 'Equipping churches', n: 400, suffix: '+', label: 'churches and organisations', text: 'Churches, ministries, schools and businesses are training their own people with PI.' },
      { title: 'Reaching homes', figure: '50–60,000', label: 'homes', text: 'Homes hearing about Jesus each week from leaders trained.' },
    ],
  },

  gift: {
    eyebrow: 'Where your gift goes',
    title: 'What it takes to reach *the nations.*',
    items: [
      { title: 'Trainer deployment', text: 'Travel, transport, housing and hospitality for the trainers and mentors who go.' },
      { title: 'Relational investment', text: 'Long-term friendship and coaching with local leaders, across cultures, year after year.' },
      { title: 'Training delivery', text: 'Courses, printed resources, translation and the technology that carries them further.' },
    ],
  },

  stories: {
    eyebrow: 'One leader at a time',
    title: 'Then *nations.*',
    items: [
      {
        photo: { src: '/photos/zimbabwe.jpg', alt: 'A pastor teaching outdoors in Zimbabwe, holding the Kingdom of God manual' },
        place: 'Zimbabwe',
        title: 'Years of theology. Then the gospel of the *Kingdom.*',
        text: 'He has been a leader for years and was trained well in theology. He says it was only through PI that he understood the gospel of the Kingdom. Now he teaches alongside our team.',
        quote: 'It was as if the people finally got it and a new ‘true’ hunger developed.',
      },
      {
        photo: { src: '/photos/poltava.jpg', alt: 'Students smiling in a classroom in Poltava, Ukraine' },
        place: 'Poltava, Ukraine',
        title: '“How long we waited for *this.*”',
        text: 'Students in our Poltava school spent a full day on Spiritual Fatherhood and Discipleship. They left wanting to serve as true fathers, mentors and ministers.',
      },
      {
        photo: { src: '/photos/mozambique.jpg', alt: 'Church leaders worshipping together in Mozambique' },
        place: 'Mozambique · 25 church leaders',
        title: 'When pastors asked each other for *forgiveness.*',
        quote: 'A Pastor came and hugged me in tears, and everyone started hugging, crying asking for forgiveness to each other for how they treated one another as pastors in the land.',
      },
    ],
  },

  ways: {
    eyebrow: 'Give',
    title: 'Three ways to multiply *leaders.*',
    items: [
      { name: 'Lead40', when: 'Monthly', text: '$40 a month funds the training of one leader at a PI school.', label: 'Partner with a leader', href: 'https://pi-momentum.vercel.app/lead40' },
      { name: 'PI Momentum', when: 'Yearly', text: 'Major gifts that fund trainers and schools across whole regions.', label: 'Invest in leaders', href: 'https://pi-momentum.vercel.app/momentum' },
      { name: 'PI Global', when: 'Any amount', text: 'The general fund. It goes wherever the work needs it most.', label: 'Give to PI Global', href: tithely('General Donation') },
    ],
  },

  family: {
    photo: { src: '/photos/family.jpg', alt: 'The Prepare International family gathered in an alpine meadow' },
    eyebrow: 'Who we are',
    title: '25 years of *partnership.*',
    text: 'PI began 25 years ago training church planters in Central Europe after the fall of communism. A handful of pastors has become a family of leaders on five continents.',
    link: { label: 'Meet the team', href: '/about' },
  },

  closing: {
    title: 'Help train the next *leader.*',
    primary: { label: 'Give now', href: '/give' },
  },

  about: {
    eyebrow: 'About',
    title: '25 years of multiplying *leaders.*',
    text: 'We exist to raise leaders who reflect the character of Jesus, equip others, multiply movements and transform communities through the power of the Gospel.',
    history: {
      eyebrow: 'Our history',
      title: 'From a handful of pastors to *five continents.*',
      photo: { src: '/photos/trainer.jpg', alt: 'A PI trainer in conversation with church leaders in Africa' },
      steps: [
        { when: '2001', title: 'A beginning in Central Europe', text: 'PI is formed to train church planters in Central Europe after the fall of communism.' },
        { when: '2003', title: 'Randy and Callie Boyd', text: 'Randy Boyd becomes Director. He and his wife Callie set a course to train and equip leaders for life and mission within their own nation.' },
        { when: 'The first schools', title: 'Czech Republic and Slovakia', text: 'Small efforts serving a handful of pastors.' },
        { when: 'The dream', title: '10,000 leaders trained', text: 'A goal once thought impossible. It turned out to be the tip of the iceberg.' },
        { when: 'Today', title: 'A family on five continents', text: 'Schools and relationships in Africa, Asia, Latin America, Europe and the United States, with leaders in every sphere of society.' },
      ],
    },
    how: {
      eyebrow: 'How we train',
      title: 'More than *information.*',
      text: 'True transformation requires more than information transfer. It requires impartation: the passing on of vision, wisdom, character and spiritual leadership.',
      marksTitle: 'We build Kingdom men and women, marked by',
      marks: [
        'Devotion to Jesus and His mission',
        'Identity in Christ, lived out',
        'A sacrificial and generous life',
        'A supernatural life',
        'A love for the global body of Christ',
      ],
    },
    principles: {
      eyebrow: 'Guiding principles',
      title: 'What we *hold to.*',
      items: [
        { title: 'Advance the Kingdom', text: 'We carry the message of Jesus and His Kingdom to leaders across the world.' },
        { title: 'Multiply leaders', text: 'Jesus poured deeply into a few leaders who then changed the world. We train the same way.' },
        { title: 'Disciple nations', text: 'We help local leaders reach the vision God has given them, so movements grow from within their own nation.' },
      ],
    },
    vision: {
      eyebrow: 'The vision',
      title: 'Where this is *going.*',
      items: [
        { n: 1000, label: 'movements' },
        { n: 10000, label: 'trainers' },
        { n: 1000000, label: 'people trained' },
        { n: 1000000, label: 'souls saved' },
      ],
    },
    team: { eyebrow: 'The team', title: 'The people behind *the work.*' },
  },

  give: {
    eyebrow: 'Give',
    title: 'One leader at a time. *Then nations.*',
    text: 'Every gift trains leaders who train others. Choose how you would like to give.',
    // Names and funds as listed on prepareinternational.org/give-now.
    team: {
      title: 'Support a *team member.*',
      funds: [
        { name: 'Randy Boyd', href: tithely('RB Support') },
        { name: 'Callie Boyd', href: tithely('CB Support') },
        { name: 'Josiah and Brandi Boyd', href: tithely('JB Boyd-Poland') },
        { name: 'Hannah Dockery', href: tithely('HD Support') },
        { name: 'Drew Brown', href: tithely('DB Support') },
        { name: 'Beth White', href: tithely('BW Support') },
        { name: 'Ryan and Kelsea Harris', href: tithely('RH Support') },
        { name: 'David Morgan', href: 'https://give.tithe.ly/?formId=67e1cdac-5d42-11ee-90fc-1260ab546d11&locationId=9c633e5d-5645-4bdc-bea2-0ed80d411dfd&fundId=3decde0d-b08e-4691-acc8-a5d1cee61efe' },
      ],
    },
    projects: {
      title: 'Give to a *project.*',
      funds: [
        { name: 'Poland Deaf Ministry', href: tithely('POSITIVE SIGNS Deaf Ministry in Poland') },
        { name: 'Macedonia Missions', href: tithely('Macedonia') },
        { name: 'Legacy Ministry (Friede Taylor)', href: tithely('Exodus 14:14 - Taylor Ministry') },
      ],
    },
  },
};

// ---- Edits made on the page -------------------------------------------------
// The editor saves a flat map of { 'hero.title': 'New words' } over this file.
// Only a path that already exists here can be changed, and only to the same
// kind of value, so a stray or malicious entry cannot add anything to a page.

export const at = (obj, path) => path.split('.').reduce((o, key) => o?.[key], obj);

// The value to store for `path`, or undefined when it must be refused.
export function accept(path, value) {
  const was = at(SITE, path);
  if (typeof was === 'number') {
    const digits = String(value).replace(/[^0-9.]/g, '');
    return digits && Number.isFinite(Number(digits)) ? Number(digits) : undefined;
  }
  if (typeof was !== 'string' || typeof value !== 'string') return undefined;
  const text = value.trim();
  if (!text || text.length > 2000) return undefined;
  // A photo may only point at this site's own files or an uploaded image.
  if (path.endsWith('.src') && !/^\/(photos|img)\/[\w.-]+$/.test(text)) return undefined;
  // Links are not editable on the page: a typo there sends a gift nowhere.
  if (path.endsWith('.href')) return undefined;
  return text;
}

export function applyOverrides(site, map) {
  const out = structuredClone(site);
  for (const [path, value] of Object.entries(map ?? {})) {
    const ok = accept(path, value);
    if (ok === undefined) continue;
    const keys = path.split('.');
    at(out, keys.slice(0, -1).join('.'))[keys.at(-1)] = ok;
  }
  return out;
}
