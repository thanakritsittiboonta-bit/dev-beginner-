// TOKYO BLUE — vanilla JavaScript only. Edit the arrays to update your content.
const image = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

// Editorial photos are illustrative placeholders, not verified photos of the named vehicles.
// Replace image URLs with your own licensed showroom photography before launch.
const stories = [
  {
    id: 'midnight-run', category: 'culture', categoryLabel: 'CULTURE', date: 'NOV 08, 2026', read: '6 MIN READ',
    title: 'THE ART OF THE MIDNIGHT RUN',
    excerpt: 'Neon, empty expressways, and the unspoken code of Japan’s after-dark driving culture.',
    image: image('photo-1503376780353-7e6692767b70', 1400),
    body: [
      'There is a certain feeling that only arrives after midnight. The city softens, the lights stretch into ribbons, and every mechanical sound seems more alive.',
      'For a generation of enthusiasts, the Japanese car scene of the 1990s represented far more than speed. It was a culture built around details: the right wheels, the right exhaust note, the perfect route, and friends who understood why the drive mattered.',
      'Today, the scene lives on through carefully preserved cars, sympathetic restorations, and a new generation discovering the romance of analog driving. The roads have changed, but the feeling remains.'
    ]
  },
  {
    id: 'skyline-story', category: 'legends', categoryLabel: 'LEGENDS', date: 'OCT 21, 2026', read: '5 MIN READ',
    title: 'WHY THE R32 CHANGED EVERYTHING',
    excerpt: 'The Skyline GT-R did more than win races. It reset the rules for a generation.',
    image: image('photo-1544829099-b9a0c07fad1a'),
    body: [
      'The Nissan Skyline GT-R R32 arrived in 1989, carrying technology that would define an era of Japanese performance cars.',
      'Its RB26DETT straight-six and sophisticated all-wheel-drive system helped create an extraordinary motorsport legacy. But figures alone do not explain its enduring appeal.',
      'Compact proportions, subtle aggression, and an intensely purposeful character made the R32 a machine people still talk about decades later. The legend was never just about lap times.'
    ]
  },
  {
    id: 'rotary-heart', category: 'garage', categoryLabel: 'GARAGE NOTES', date: 'OCT 10, 2026', read: '4 MIN READ',
    title: 'THE ROTARY HEARTBEAT',
    excerpt: 'Living with the unmistakable quirks and rewards of Mazda’s rotary-powered icon.',
    image: image('photo-1492144534655-ae79c964c9d7'),
    body: [
      'Few engines inspire the same mixture of fascination and devotion as Mazda’s rotary. Compact, smooth, and wonderfully unconventional, it became part of the RX-7’s identity.',
      'Owning a rotary-powered classic rewards attention. Consistent maintenance, proper warm-up routines, and careful mechanical evaluation make all the difference.',
      'For the enthusiast willing to learn its character, the reward is a driving experience that feels unlike almost anything else from the era.'
    ]
  },
  {
    id: 'tuner-era', category: 'culture', categoryLabel: 'CULTURE', date: 'SEP 29, 2026', read: '7 MIN READ',
    title: 'WHEN TUNING WAS AN ART FORM',
    excerpt: 'An ode to the workshops, magazines, and builders who shaped 90s JDM style.',
    image: image('photo-1507136566006-cfc505b114fc'),
    body: [
      'Before every build was posted online, inspiration traveled through magazines, shop windows, car meets, and conversations between enthusiasts.',
      'Japan’s tuning culture gave the world an unmistakable visual language. Wheel fitment, aerodynamic experiments, mechanical craftsmanship, and bold individuality turned ordinary streets into rolling galleries.',
      'That spirit is worth preserving: build with intention, respect the machine, and make something that feels personally yours.'
    ]
  },
  {
    id: 'supra-legend', category: 'legends', categoryLabel: 'LEGENDS', date: 'SEP 14, 2026', read: '5 MIN READ',
    title: 'THE SUPRA THAT BECAME A MYTH',
    excerpt: 'The A80 Supra and the enduring appeal of an over-engineered grand tourer.',
    image: image('photo-1549317661-bd32c8ce0db2'),
    body: [
      'The fourth-generation Toyota Supra arrived in 1993 with rounded lines, rear-wheel drive, and a remarkable straight-six platform.',
      'Its 2JZ engine family became synonymous with durability and tuning potential, while the car’s design made an impression that has lasted for decades.',
      'Whether stock and lovingly preserved or thoughtfully modified, the A80 shows why some sports cars never really leave the spotlight.'
    ]
  },
  {
    id: 'buyers-guide', category: 'garage', categoryLabel: 'GARAGE NOTES', date: 'AUG 30, 2026', read: '8 MIN READ',
    title: 'YOUR FIRST 90s JDM CLASSIC',
    excerpt: 'The essential checklist for buying an analog-era Japanese performance car.',
    image: image('photo-1486325212027-8081e485255e'),
    body: [
      'Buying a 1990s Japanese performance car is exciting, but condition and documentation should matter more than hype.',
      'Look closely for rust, accident repairs, incomplete service records, worn suspension components, and modifications that were not installed or documented correctly. Consider arranging an independent pre-purchase inspection by a specialist.',
      'Budget for the first round of preventative maintenance and make sure replacement parts are obtainable. The best purchase is the one you can enjoy confidently for years to come.'
    ]
  }
];

const cars = [
  {year:'1994', name:'NISSAN SKYLINE GT-R', code:'R32 / RB26DETT', badge:'THE LEGEND', image:image('photo-1544829099-b9a0c07fad1a'), note:'ATTESA E-TS · TWIN TURBO'},
  {year:'1996', name:'TOYOTA SUPRA', code:'A80 / 2JZ-GTE', badge:'CULT CLASSIC', image:image('photo-1549317661-bd32c8ce0db2'), note:'INLINE-SIX · REAR-WHEEL DRIVE'},
  {year:'1993', name:'MAZDA RX-7', code:'FD3S / 13B-REW', badge:'ROTARY ICON', image:image('photo-1492144534655-ae79c964c9d7'), note:'TWIN ROTARY · LIGHTWEIGHT'}
];

const grid = document.querySelector('#storiesGrid');
const emptyState = document.querySelector('#emptyState');
const searchInput = document.querySelector('#searchInput');
let activeCategory = 'all';

function makeStoryCard(story, index) {
  const card = document.createElement('article');
  card.className = 'story-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Read article: ${story.title}`);
  card.innerHTML = `
    <div class="story-visual"><img class="story-image" src="${story.image}" alt="Automotive editorial photograph" loading="lazy" onerror="this.style.opacity='.15'" /><span class="story-index">0${index + 1} / 06</span></div>
    <div class="story-info"><div class="story-meta"><span class="tag">${story.categoryLabel}</span><span>•</span><span>${story.date}</span></div>
      <h3 class="story-title">${story.title}</h3><p class="story-excerpt">${story.excerpt}</p><span class="read-more">READ THE STORY <span>↗</span></span></div>`;
  card.addEventListener('click', () => openStory(story));
  card.addEventListener('keydown', e => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();openStory(story);}});
  return card;
}

function renderStories() {
  const query = searchInput.value.toLowerCase().trim();
  const visible = stories.filter(s => (activeCategory === 'all' || s.category === activeCategory) &&
    [s.title, s.excerpt, s.categoryLabel, ...s.body].join(' ').toLowerCase().includes(query));
  grid.replaceChildren(...visible.map((story, index) => makeStoryCard(story, index)));
  emptyState.hidden = visible.length !== 0;
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(b => {
      const selected = b === button;
      b.classList.toggle('active', selected);
      b.setAttribute('aria-pressed', String(selected));
    });
    renderStories();
  });
});

const dialog = document.querySelector('#articleDialog');
function openStory(story) {
  const content = document.querySelector('#articleContent');
  content.replaceChildren();
  const photo = document.createElement('img');
  photo.src = story.image;
  photo.alt = 'Automotive editorial photograph';
  photo.className = 'dialog-image';
  const body = document.createElement('div');
  body.className = 'dialog-body';
  const meta = document.createElement('div');
  meta.className = 'story-meta';
  meta.textContent = `${story.categoryLabel}  /  ${story.date}  /  ${story.read}`;
  const title = document.createElement('h2');
  title.id = 'dialogTitle';
  title.textContent = story.title;
  const lede = document.createElement('p');
  lede.className = 'dialog-lede';
  lede.textContent = story.excerpt;
  body.append(meta, title, lede);
  for (const text of story.body) {
    const p = document.createElement('p'); p.textContent = text; body.append(p);
  }
  const tail = document.createElement('div');
  tail.className = 'dialog-tail';
  tail.textContent = 'TOKYO BLUE  /  EVERY MILE HAS A STORY';
  body.append(tail);
  content.append(photo, body);
  dialog.showModal();
}
document.querySelector('#dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {if (e.target === dialog) dialog.close();});

const carGrid = document.querySelector('#carGrid');
cars.forEach((car, index) => {
  const card = document.createElement('article');
  card.className = 'car-card';
  card.innerHTML = `<div class="car-visual"><img class="car-image" src="${car.image}" alt="Editorial placeholder for ${car.name}" loading="lazy" onerror="this.style.opacity='.12'" /><span class="car-number">0${index + 1} / COLLECTION</span><span class="car-badge">${car.badge}</span></div><div class="car-info"><span class="car-year">${car.year} — JAPAN</span><h3>${car.name}</h3><p>${car.code} · ${car.note}</p><div class="car-bottom"><span>SHOWCASE MODEL</span><a href="mailto:hello@tokyoblue.example?subject=${encodeURIComponent('Enquiry: ' + car.name)}">ENQUIRE ↗</a></div></div>`;
  carGrid.append(card);
});

const searchBar = document.querySelector('#searchBar');
function showSearch() {searchBar.hidden = false;searchInput.focus();document.querySelector('#stories').scrollIntoView({behavior:'smooth'});}
function hideSearch() {searchBar.hidden = true;searchInput.value = '';renderStories();}
document.querySelector('#searchToggle').addEventListener('click', () => searchBar.hidden ? showSearch() : hideSearch());
document.querySelector('#closeSearch').addEventListener('click', hideSearch);
searchInput.addEventListener('input', renderStories);
document.querySelector('#resetSearch').addEventListener('click', () => {searchInput.value='';document.querySelector('.filter[data-filter="all"]').click();});

const menu = document.querySelector('#mainNav');
const menuToggle = document.querySelector('#menuToggle');
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');menuToggle.setAttribute('aria-expanded', 'false');
}));

// Front-end demo only: replace with your email platform API before publishing.
document.querySelector('#newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = document.querySelector('#emailInput');
  if (!emailInput.reportValidity()) return;
  document.querySelector('#formMessage').textContent = 'THANK YOU! THIS IS A DEMO FORM — MAILING-LIST DELIVERY IS NOT YET CONNECTED.';
  emailInput.value = '';
});

document.querySelector('#year').textContent = new Date().getFullYear();
renderStories();
