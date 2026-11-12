// Every word, number, photo and giving link on the home and give pages.
// Edit here; the pages only lay it out. check.mjs guards the links and photos.
// Story photos are the Lead40 cards cropped to the photograph (720x520).
// In headings, *asterisks* mark the word shown in the accent colour.

const tithely = (fund) =>
  `https://tithe.ly/give_new/www/#/tithely/give-one-time/67965?giving_to=${encodeURIComponent(fund)}`;

export const SITE = {
  hero: {
    photo: { src: '/photos/hero.jpg', alt: 'A PI trainer in conversation with church leaders in Africa' },
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
    title: 'Where we are *today.*',
    // The dot grid: `now` of `goal` movements lit.
    movements: { now: 50, goal: 1000, caption: 'About 50 of 1,000 movements are growing today.' },
    stats: [
      { n: 2500, label: 'students in PI schools' },
      { n: 400, suffix: '+', label: 'churches and organisations' },
      { text: '50–60,000', label: 'homes hearing about Jesus each week' },
      { n: 5, label: 'continents' },
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
