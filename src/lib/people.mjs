// The staff roster, in display order. Single source for /about and /give —
// keeping two copies is what produced the wrong-photo and wrong-title fixes in
// commits 9dd41ed and ff8826d.
export const TEAM = [
  { name: "Randy and Callie Boyd", title: "Founders", image: "https://prepareinternational.org/wp-content/uploads/2023/12/BD1A8624-scaled.jpg" },
  { name: "Josiah and Brandi Boyd", title: "Executive Director", image: "https://prepareinternational.org/wp-content/uploads/2023/11/BD1A8661-scaled.jpg" },
  { name: "Volkert Muijs", title: "Africa Director", image: "https://prepareinternational.org/wp-content/uploads/2024/07/449445656_777107667942496_1489593464660978311_n.jpg" },
  { name: "Hannah Dockery", title: "Homebase Director & Prayground", image: "https://prepareinternational.org/wp-content/uploads/2023/11/BD1A8688-scaled.jpg" },
  { name: "Boone and Bethany Tyson", title: "Costa Rica and South Texas Coordinator", image: "https://prepareinternational.org/wp-content/uploads/2023/12/tyson-staff-picture.jpeg" },
  { name: "Maci Dean", title: "Financial Coordinator", image: "https://prepareinternational.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-11-at-18.11.01-2.jpeg" },
  { name: "Anna Aleksieieva", title: "European Coordinator", image: null },
  { name: "Daniel Caballero", title: "Latin America Director", image: "https://prepareinternational.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-16-at-06.40.52-e1760046790269.jpeg" },
  { name: "Patrick Kisia", title: "East Africa Director", image: "https://prepareinternational.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-09-at-20.37.47.jpeg" },
  { name: "David Morgan", title: "Director of Development", image: "https://prepareinternational.org/wp-content/uploads/2025/10/IMG_2598.jpg" }
];

// Regional inboxes. `lead` must name somebody in TEAM — check.mjs enforces it.
export const REGIONS = [
  { name: 'Africa', lead: 'Patrick Kisia', email: 'africa@prepareinternational.org' },
  { name: 'Europe', lead: 'Anna Aleksieieva', email: 'europe@prepareinternational.org' },
  { name: 'Latin America', lead: 'Daniel Caballero', email: 'latam@prepareinternational.org' },
  { name: 'Global Support', lead: 'Hannah Dockery', email: 'office@pinations.org' }
];

export const titleOf = (name) => TEAM.find((m) => m.name === name)?.title ?? null;
