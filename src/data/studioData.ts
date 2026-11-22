export interface StillPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  collection: 'Maasai Mara & Hospitality' | 'Zanzibar & Luxury' | 'Automotive & Nairobi' | 'Behind the Frame';
  location: string;
  projectSlug?: string;
  projectTitle?: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface FilmProject {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Brand Film' | 'Short Film';
  sector: 'Hospitality' | 'Luxury' | 'Automotive';
  tags: string[];
  client: string;
  location: string;
  year: string;
  role: string;
  credits: string;
  logline: string;
  storyParagraphs: string[];
  driveId: string;
  watchUrl: string;
  embedUrl: string;
  cardImage: string;
  heroImage: string;
  stills: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const STUDIO_INFO = {
  name: 'TNBNU Media',
  legalCopyright: '© 2026 TNBNU MEDIA. All rights reserved.',
  founder: 'Japheth Tanabanu',
  founderRole: 'Founder & Lead Cinematographer',
  base: 'Between Nairobi & the Maasai Mara, East Africa',
  heroKicker: 'FILM & PHOTOGRAPHY STUDIO · NAIROBI & MAASAI MARA',
  heroHeadline: 'We make films you feel before you understand them.',
  heroSubheadline:
    'TNBNU Media is a film studio based between Nairobi and the Maasai Mara. We don’t keep to one kind of story. From a city street to the stillness of the Mara, if there’s something worth feeling, we’ll find a way to film it.',
  commitmentNote:
    'We only take on three clients at a time. It keeps our focus where it belongs and lets us give every project our best work.',
  closingHeadline: 'Somewhere in your brand is a story worth telling. Let’s find it.',
  contactHeroImage: 'https://framerusercontent.com/images/5SdsQngT1R2PoxjiERZ9fmKd8.png',
  emailPrimary: 'japheth@tnbnu.media',
  emailSecondary: 'tnbnumedia@gmail.com',
  whatsappUrl: 'https://wa.me/254793635942',
  whatsappDisplay: '+254 793 635 942',
  instagramUrl: 'https://www.instagram.com/j.tanabanu/',
  instagramHandle: '@j.tanabanu',
  linkedinUrl: 'https://linkedin.com/in/tnbnu-',
  linkedinHandle: 'linkedin.com/in/tnbnu-',
  responseWindow: 'We read every message ourselves and reply within 48 hours.',
};

export const HOW_WE_WORK_TENETS = [
  {
    number: '01',
    title: 'We start with the founder.',
    description:
      'Most of the people we work with are building something they believe in. Before we film anything, we sit with that vision until we understand it, then we bring it to the screen.',
  },
  {
    number: '02',
    title: 'Every shot is intentional.',
    description:
      'Nothing goes in by accident. We want to make films that stay with people long after they’ve watched them, the kind they come back to.',
  },
  {
    number: '03',
    title: 'We work with natural light.',
    description:
      'Golden hour does something no lighting rig can. We shoot in natural light wherever we can, and bring in a studio setup only when the story needs it.',
  },
];

export const PRODUCTION_SERVICES = [
  {
    phase: 'STAGE I · CONCEPT',
    subtitle: 'WHERE STORIES BEGIN',
    title: 'Narrative & Creative Direction',
    summary:
      'Every project begins with one question: what should people feel before they have ever walked through your door? We sit with founders to uncover the story underneath the brand.',
    deliverables: [
      'Founder vision sessions & story architecture',
      'Original pitch briefs & narrative scriptwriting',
      'Advance location scouting across East Africa',
      'Natural-light & golden-hour shooting itineraries',
    ],
  },
  {
    phase: 'STAGE II · CRAFT',
    subtitle: 'WHERE IDEAS COME TO LIFE',
    title: 'Cinema & Still Photography',
    summary:
      'From the stillness of the Maasai Mara at sunrise to the tides of Zanzibar and city streets of Nairobi, we craft cinema-grade films and campaign stills built to endure.',
    deliverables: [
      'Signature brand films for camps, lodges & luxury houses',
      'Character-led short documentaries & experiential films',
      'Automotive, product & campaign cinematography',
      'Editorial still photography & campaign frames',
    ],
  },
  {
    phase: 'STAGE III · POST & STUDIO',
    subtitle: 'WHERE THE FEELING LIVES',
    title: 'Editorial, Score & Studio Systems',
    summary:
      'Pacing, colour and sound carry half the emotion of a film. Beyond single productions, we also help select properties build lasting internal storytelling systems.',
    deliverables: [
      'Intentional narrative editing & cinema colour grading',
      'Bespoke musical direction & textured sound design',
      'In-house camp & brand studio architecture (e.g. Pearl Mara Studios)',
      'Multi-format masters for web, screenings & campaign launches',
    ],
  },
];

export const FILM_PROJECTS: FilmProject[] = [
  {
    slug: 'pearl-mara',
    title: 'Beyond the Wild',
    subtitle: 'Pearl Mara: Beyond the Wild',
    category: 'Brand Film',
    sector: 'Hospitality',
    tags: ['Cinematography', 'Brand Film', 'Luxury', 'Hospitality'],
    client: 'Pearl Mara',
    location: 'Maasai Mara, Kenya',
    year: '2026',
    role: 'Concept, script, location scouting, direction and cinematography',
    credits: 'Produced by Pearl Mara Studios',
    logline:
      'Pearl Mara wanted to stand apart from every camp in Kenya selling the same thing: the Big Five, the sundowner, the checklist. I wanted to make a film that showed what most safari films leave out.',
    storyParagraphs: [
      'Beyond the wildlife, there’s a world of stillness. Guests arrive from cities where everything is moving, and the Mara asks them to stop. To be still, to pay attention, to let themselves be held by what’s around them. The film had to do the same thing to the viewer. Into the wild, and into yourself.',
      'A slow, cinematic film, planned shot by shot. I built a full shooting itinerary around the concept and scouted every location in advance with a colleague. We shot only at the edges of the day, at sunrise and sunset, when the light is soft and golden, and nothing in between. In post, we built the score from an unusual starting point: ethereal African vocal textures opening the film, giving way to a more epic orchestral sound. It’s an experience to sink into, not a highlight reel.',
      'Alongside the work on screen, I helped build Pearl Mara Studios: an in-house production studio inside the camp, with its own team, systems and content pillars, so the camp can keep telling its story long after a single film.',
    ],
    driveId: '1_6Eh7t4dWyEUzaAAgNzA-lDZ5ITyaAeK',
    watchUrl: 'https://drive.google.com/file/d/1_6Eh7t4dWyEUzaAAgNzA-lDZ5ITyaAeK/view?usp=drive_link',
    embedUrl: 'https://drive.google.com/file/d/1_6Eh7t4dWyEUzaAAgNzA-lDZ5ITyaAeK/preview',
    cardImage: 'https://framerusercontent.com/images/ThNjzcDgnU3luwMP3Eztxk108wE.jpg',
    heroImage: 'https://framerusercontent.com/images/g7EGZHrpvMpWAMPF6w5lsQRiS2I.jpg',
    stills: [
      {
        src: 'https://framerusercontent.com/images/g7EGZHrpvMpWAMPF6w5lsQRiS2I.jpg',
        alt: 'Beyond the Wild — Golden hour stillness across the Maasai Mara',
        caption: 'First light across the Mara plains — shot strictly at the edges of the day.',
      },
      {
        src: 'https://framerusercontent.com/images/lMdweRtyPP8PP84Dah5qh24LSks.jpg',
        alt: 'Beyond the Wild — Intimate safari hospitality moment at Pearl Mara',
        caption: 'Stillness inside Pearl Mara — inviting guests to pause and pay attention.',
      },
      {
        src: 'https://framerusercontent.com/images/ThNjzcDgnU3luwMP3Eztxk108wE.jpg',
        alt: 'Beyond the Wild — Horizon frame in the Maasai Mara',
        caption: 'Into the wild, and into yourself — natural golden-hour cinematography.',
      },
      {
        src: 'https://framerusercontent.com/images/XQQqOxxDtW9x2FrLi3LxRq2oxF0.jpg',
        alt: 'Beyond the Wild — Evening dusk light at Pearl Mara',
        caption: 'Last light in the Mara — crafted with Pearl Mara Studios.',
      },
    ],
  },
  {
    slug: 'elias-jewellers',
    title: 'Heart of the Ocean',
    subtitle: 'Elias Jewellers: The Heart of the Ocean',
    category: 'Brand Film',
    sector: 'Luxury',
    tags: ['Commercial', 'Campaign', 'Luxury', 'Brand Film'],
    client: 'Elias Jewelers',
    location: 'Zanzibar, Tanzania',
    year: '2025',
    role: 'Lead cinematographer',
    credits: 'Produced by Akatsuki Studios, with Akira Digital',
    logline:
      'Elias Jewelers was unveiling Heart of the Ocean, a centrepiece of tanzanite set in diamonds. The film had to be made in Zanzibar, where the house began, and it had to carry the weight of a stone found in only one place on earth.',
    storyParagraphs: [
      'One film, built around a single idea: the stone and the ocean at first light. We chased sunrise over the Indian Ocean two mornings running. The first, we missed it. The second gave us everything. Even the tides worked against logic that week, running high in the small hours, so we read the water and shot with it rather than against it.',
      'Before we shot a frame, we were shown a short film on tanzanite: where it comes from, and what it means to Tanzanians. That changed everything. This wasn’t a product to light well. It was a national stone, and the film had to feel like it belonged to the sea and the light of the place it came from.',
      'After the screening, the founder told us this was the standard of work he had been looking for.',
    ],
    driveId: '10KOhA2gKq9epSF6pWhHbehVdRoivBEmQ',
    watchUrl: 'https://drive.google.com/file/d/10KOhA2gKq9epSF6pWhHbehVdRoivBEmQ/view?usp=drive_link',
    embedUrl: 'https://drive.google.com/file/d/10KOhA2gKq9epSF6pWhHbehVdRoivBEmQ/preview',
    cardImage: 'https://framerusercontent.com/images/XLgxorbotdc1RNc2Y2oJJBJJ5g.png',
    heroImage: 'https://framerusercontent.com/images/XLgxorbotdc1RNc2Y2oJJBJJ5g.png',
    stills: [
      {
        src: 'https://framerusercontent.com/images/XLgxorbotdc1RNc2Y2oJJBJJ5g.png',
        alt: 'Heart of the Ocean — Portrait campaign frame in Zanzibar',
        caption: 'The stone and the Indian Ocean at first light — Zanzibar, Tanzania.',
      },
      {
        src: 'https://framerusercontent.com/images/Fxz81yolTiKEkTegPNb6Go9ht9E.png',
        alt: 'Heart of the Ocean — Tanzanite & diamond centrepiece in morning light',
        caption: 'High tide in the small hours — reading the water and shooting with it.',
      },
      {
        src: 'https://framerusercontent.com/images/Mw1ICQO1cbGx2q5DQt8bD4Ael0.png',
        alt: 'Heart of the Ocean — Coastal horizon frame in Zanzibar',
        caption: 'Second-morning sunrise over Zanzibar — capturing a national stone in its native light.',
      },
      {
        src: 'https://framerusercontent.com/images/EAs8pjid0VlE16dYTPaPkpZpEl0.png',
        alt: 'Heart of the Ocean — Elias Jewelers luxury campaign frame',
        caption: 'Elias Jewelers unveiling — lead cinematography by TNBNU Media.',
      },
    ],
  },
  {
    slug: 'eleven-motors',
    title: 'Me and My Friend',
    subtitle: 'Me and My Friend: A Short Film for Eleven Motors',
    category: 'Brand Film',
    sector: 'Automotive',
    tags: ['Commercial', 'Product', 'Luxury', 'Automotive'],
    client: 'Eleven Motors',
    location: 'Nairobi, Kenya',
    year: '2026',
    role: 'Concept, script, direction and cinematography',
    credits: 'Made by TNBNU Media with Jasmine (Lead Model)',
    logline:
      'There wasn’t a brief. We pitched Eleven Motors on a simple question: what if a car film sold the relationship instead of the machine? The owner said yes and asked for a brief. We went away and wrote one.',
    storyParagraphs: [
      'Every car gets sold like a product: angles, features, a voiceover listing what it does. But nobody buys a car for the spec sheet. They buy it for the life they picture in it: the drive with nowhere to be, the place it takes them, the company it keeps. The script came to me in a coffee shop, waiting for a friend. The car as a companion you can take anywhere.',
      'There wasn’t a brief at the start. We pitched Eleven Motors on a simple question: what if a car film sold the relationship instead of the machine? The owner said yes and asked for a brief. We went away and wrote one.',
      'A short, simple film about a driver and her car. She stops. She looks at the sun. She laughs. The film lingers on the moments in between, because that’s where the feeling lives.',
    ],
    driveId: '1041FQIF3JBUKTNwb_qDqFrfW8Yu5s2mi',
    watchUrl: 'https://drive.google.com/file/d/1041FQIF3JBUKTNwb_qDqFrfW8Yu5s2mi/view?usp=drive_link',
    embedUrl: 'https://drive.google.com/file/d/1041FQIF3JBUKTNwb_qDqFrfW8Yu5s2mi/preview',
    cardImage: 'https://framerusercontent.com/images/iHImKeuPfYmSzjCp30JQJZgXSLo.jpg',
    heroImage: 'https://framerusercontent.com/images/mVz7jMpEMVgVhZwKj8M1me2JSk.jpg',
    stills: [
      {
        src: 'https://framerusercontent.com/images/mVz7jMpEMVgVhZwKj8M1me2JSk.jpg',
        alt: 'Me and My Friend — Hero frame with Jasmine in warm sunlight',
        caption: 'Selling the relationship rather than the spec sheet — Nairobi, Kenya.',
      },
      {
        src: 'https://framerusercontent.com/images/iHImKeuPfYmSzjCp30JQJZgXSLo.jpg',
        alt: 'Me and My Friend — Automotive campaign portrait',
        caption: 'The drive with nowhere to be — lingering on the quiet moments in between.',
      },
      {
        src: 'https://framerusercontent.com/images/dWxQUp3fo8rWSqkU2WxMLT05it4.jpg',
        alt: 'Me and My Friend — Interior & natural light study',
        caption: 'Natural golden sun across steel and glass.',
      },
      {
        src: 'https://framerusercontent.com/images/1mrsauO9SUbiGYpSYz7JnC0DSkI.jpg',
        alt: 'Me and My Friend — Open road companion frame',
        caption: 'Concept, script, direction and cinematography by TNBNU Media.',
      },
      {
        src: 'https://framerusercontent.com/images/ihzZoSWYLnfWr0SBeXp43XyMfC0.jpg',
        alt: 'Me and My Friend — Closing sunlit frame',
        caption: 'She stops. She looks at the sun. She laughs.',
      },
    ],
  },
  {
    slug: 'endurance-and-beyond',
    title: 'Endurance and Beyond',
    subtitle: 'Pearl Mara: Endurance and Beyond',
    category: 'Short Film',
    sector: 'Hospitality',
    tags: ['Cinematography', 'Short Film', 'Luxury', 'Hospitality'],
    client: 'Pearl Mara',
    location: 'Maasai Mara, Kenya',
    year: '2026',
    role: 'Script, cinematography and editing',
    credits: 'In collaboration with Pearl Mara Studios',
    logline:
      'A guest who had run marathons and triathlons around the world was staying at the camp, and planned a long run through the surrounding land with the camp’s fitness instructor. The idea was simple: film it, and bring fitness and the wild together.',
    storyParagraphs: [
      'Fitness depends on who’s talking. Some train to look good, some to live longer, some for the challenge. None of those are the wrong reason. So the film couldn’t just show a run. It had to be about perspective. I wrote the script straight after the run itself, while the feeling was still fresh.',
      'A guest who had run marathons and triathlons around the world was staying at the camp, and planned a long run through the surrounding land with the camp’s fitness instructor. The idea was simple: film it, and bring fitness and the wild together.',
    ],
    driveId: '1BVxTr0paYX2O8GpRpBm0VSK3Bw1V9rMO',
    watchUrl: 'https://drive.google.com/file/d/1BVxTr0paYX2O8GpRpBm0VSK3Bw1V9rMO/view?usp=drive_link',
    embedUrl: 'https://drive.google.com/file/d/1BVxTr0paYX2O8GpRpBm0VSK3Bw1V9rMO/preview',
    cardImage: 'https://framerusercontent.com/images/YQB1AP2caGbmR9kAdXwz0V5UfU.png',
    heroImage: 'https://framerusercontent.com/images/Vs8Py2Z7CVDcwNlCHIiPPOEjkVo.png',
    stills: [
      {
        src: 'https://framerusercontent.com/images/Vs8Py2Z7CVDcwNlCHIiPPOEjkVo.png',
        alt: 'Endurance and Beyond — Runner crossing the open Maasai Mara landscape',
        caption: 'Bringing human endurance and the open Mara wilderness into a single frame.',
      },
      {
        src: 'https://framerusercontent.com/images/YQB1AP2caGbmR9kAdXwz0V5UfU.png',
        alt: 'Endurance and Beyond — Wide horizon frame in the Mara',
        caption: 'Scripted straight after the run itself, while the feeling was still fresh.',
      },
      {
        src: 'https://framerusercontent.com/images/egZi6BWVLDRVqsKQkRSFmX2anGw.png',
        alt: 'Endurance and Beyond — Stride and terrain study',
        caption: 'Morning pace across the conservancy — Maasai Mara, Kenya.',
      },
      {
        src: 'https://framerusercontent.com/images/C9zTJyVFXHjavBAqu4zAuEKy7Ds.png',
        alt: 'Endurance and Beyond — Portraits in motion',
        caption: 'Perspective on why we move — filmed in natural morning light.',
      },
      {
        src: 'https://framerusercontent.com/images/1Dev5DlQqW8dPtmSRcVLyotTmA.png',
        alt: 'Endurance and Beyond — Closing frame in collaboration with Pearl Mara Studios',
        caption: 'In collaboration with Pearl Mara Studios.',
      },
    ],
  },
];

export const PHOTOGRAPHY_ARCHIVE: StillPhoto[] = [
  {
    id: 'mara-01',
    src: 'https://framerusercontent.com/images/g7EGZHrpvMpWAMPF6w5lsQRiS2I.jpg',
    alt: 'First light across the Maasai Mara — Beyond the Wild',
    caption: 'Sunrise stillness in the Maasai Mara — shot strictly at the edges of the day.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'pearl-mara',
    projectTitle: 'Beyond the Wild',
    aspect: 'landscape',
  },
  {
    id: 'zanzibar-01',
    src: 'https://framerusercontent.com/images/XLgxorbotdc1RNc2Y2oJJBJJ5g.png',
    alt: 'Heart of the Ocean campaign frame — Zanzibar',
    caption: 'Chasing sunrise over the Indian Ocean for Elias Jewelers.',
    collection: 'Zanzibar & Luxury',
    location: 'Zanzibar, Tanzania',
    projectSlug: 'elias-jewellers',
    projectTitle: 'Heart of the Ocean',
    aspect: 'landscape',
  },
  {
    id: 'nairobi-01',
    src: 'https://framerusercontent.com/images/iHImKeuPfYmSzjCp30JQJZgXSLo.jpg',
    alt: 'Me and My Friend — Eleven Motors campaign frame',
    caption: 'The car as a companion you can take anywhere — Nairobi.',
    collection: 'Automotive & Nairobi',
    location: 'Nairobi, Kenya',
    projectSlug: 'eleven-motors',
    projectTitle: 'Me and My Friend',
    aspect: 'landscape',
  },
  {
    id: 'mara-02',
    src: 'https://framerusercontent.com/images/Vs8Py2Z7CVDcwNlCHIiPPOEjkVo.png',
    alt: 'Endurance and Beyond — Long run across the Mara',
    caption: 'Endurance and the wild brought together at Pearl Mara.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'endurance-and-beyond',
    projectTitle: 'Endurance and Beyond',
    aspect: 'landscape',
  },
  {
    id: 'mara-03',
    src: 'https://framerusercontent.com/images/lMdweRtyPP8PP84Dah5qh24LSks.jpg',
    alt: 'Pearl Mara luxury camp atmosphere',
    caption: 'Quiet sanctuary between game drives — Pearl Mara.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'pearl-mara',
    projectTitle: 'Beyond the Wild',
    aspect: 'landscape',
  },
  {
    id: 'zanzibar-02',
    src: 'https://framerusercontent.com/images/Fxz81yolTiKEkTegPNb6Go9ht9E.png',
    alt: 'Tanzanite set in diamonds — Zanzibar coastal frame',
    caption: 'A stone found in only one place on earth, filmed where the house began.',
    collection: 'Zanzibar & Luxury',
    location: 'Zanzibar, Tanzania',
    projectSlug: 'elias-jewellers',
    projectTitle: 'Heart of the Ocean',
    aspect: 'landscape',
  },
  {
    id: 'nairobi-02',
    src: 'https://framerusercontent.com/images/mVz7jMpEMVgVhZwKj8M1me2JSk.jpg',
    alt: 'Jasmine in natural golden hour light — Eleven Motors',
    caption: 'Moments in between on the open road — Eleven Motors.',
    collection: 'Automotive & Nairobi',
    location: 'Nairobi, Kenya',
    projectSlug: 'eleven-motors',
    projectTitle: 'Me and My Friend',
    aspect: 'landscape',
  },
  {
    id: 'mara-04',
    src: 'https://framerusercontent.com/images/egZi6BWVLDRVqsKQkRSFmX2anGw.png',
    alt: 'Morning stride in the Maasai Mara',
    caption: 'Perspective in motion — Endurance and Beyond.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'endurance-and-beyond',
    projectTitle: 'Endurance and Beyond',
    aspect: 'square',
  },
  {
    id: 'mara-05',
    src: 'https://framerusercontent.com/images/ThNjzcDgnU3luwMP3Eztxk108wE.jpg',
    alt: 'Golden dusk over the Mara conservancy',
    caption: 'Golden hour does something no lighting rig can.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'pearl-mara',
    projectTitle: 'Beyond the Wild',
    aspect: 'landscape',
  },
  {
    id: 'zanzibar-03',
    src: 'https://framerusercontent.com/images/Mw1ICQO1cbGx2q5DQt8bD4Ael0.png',
    alt: 'Indian Ocean tide & light — Zanzibar',
    caption: 'Reading the high tide in the small hours over the Indian Ocean.',
    collection: 'Zanzibar & Luxury',
    location: 'Zanzibar, Tanzania',
    projectSlug: 'elias-jewellers',
    projectTitle: 'Heart of the Ocean',
    aspect: 'landscape',
  },
  {
    id: 'nairobi-03',
    src: 'https://framerusercontent.com/images/dWxQUp3fo8rWSqkU2WxMLT05it4.jpg',
    alt: 'Detail & sunlight frame — Me and My Friend',
    caption: 'Crafted in natural sunlight without artificial studio rigs.',
    collection: 'Automotive & Nairobi',
    location: 'Nairobi, Kenya',
    projectSlug: 'eleven-motors',
    projectTitle: 'Me and My Friend',
    aspect: 'landscape',
  },
  {
    id: 'mara-06',
    src: 'https://framerusercontent.com/images/C9zTJyVFXHjavBAqu4zAuEKy7Ds.png',
    alt: 'Endurance portrait in the Mara',
    caption: 'Human rhythm against the stillness of the savanna.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'endurance-and-beyond',
    projectTitle: 'Endurance and Beyond',
    aspect: 'square',
  },
  {
    id: 'zanzibar-04',
    src: 'https://framerusercontent.com/images/EAs8pjid0VlE16dYTPaPkpZpEl0.png',
    alt: 'Heart of the Ocean closing luxury still',
    caption: 'Luxury campaign frame for Elias Jewelers in Zanzibar.',
    collection: 'Zanzibar & Luxury',
    location: 'Zanzibar, Tanzania',
    projectSlug: 'elias-jewellers',
    projectTitle: 'Heart of the Ocean',
    aspect: 'landscape',
  },
  {
    id: 'nairobi-04',
    src: 'https://framerusercontent.com/images/1mrsauO9SUbiGYpSYz7JnC0DSkI.jpg',
    alt: 'Eleven Motors road study',
    caption: 'A short film about a driver and her car.',
    collection: 'Automotive & Nairobi',
    location: 'Nairobi, Kenya',
    projectSlug: 'eleven-motors',
    projectTitle: 'Me and My Friend',
    aspect: 'landscape',
  },
  {
    id: 'mara-07',
    src: 'https://framerusercontent.com/images/XQQqOxxDtW9x2FrLi3LxRq2oxF0.jpg',
    alt: 'Evening stillness at Pearl Mara',
    caption: 'Planned shot by shot across sunrise and sunset.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'pearl-mara',
    projectTitle: 'Beyond the Wild',
    aspect: 'landscape',
  },
  {
    id: 'bts-01',
    src: 'https://framerusercontent.com/images/5SdsQngT1R2PoxjiERZ9fmKd8.png',
    alt: 'TNBNU Media atmospheric field frame',
    caption: 'Between Nairobi and the Maasai Mara — field cinematography.',
    collection: 'Behind the Frame',
    location: 'East Africa',
    aspect: 'landscape',
  },
  {
    id: 'nairobi-05',
    src: 'https://framerusercontent.com/images/ihzZoSWYLnfWr0SBeXp43XyMfC0.jpg',
    alt: 'Sunlit laughter — Me and My Friend',
    caption: 'Where the feeling lives — Eleven Motors.',
    collection: 'Automotive & Nairobi',
    location: 'Nairobi, Kenya',
    projectSlug: 'eleven-motors',
    projectTitle: 'Me and My Friend',
    aspect: 'landscape',
  },
  {
    id: 'mara-08',
    src: 'https://framerusercontent.com/images/1Dev5DlQqW8dPtmSRcVLyotTmA.png',
    alt: 'Horizon stride — Endurance and Beyond',
    caption: 'Produced in collaboration with Pearl Mara Studios.',
    collection: 'Behind the Frame',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'endurance-and-beyond',
    projectTitle: 'Endurance and Beyond',
    aspect: 'landscape',
  },
  {
    id: 'mara-09',
    src: 'https://framerusercontent.com/images/YQB1AP2caGbmR9kAdXwz0V5UfU.png',
    alt: 'Endurance and Beyond title frame',
    caption: 'Wide-angle natural light study in the Maasai Mara.',
    collection: 'Maasai Mara & Hospitality',
    location: 'Maasai Mara, Kenya',
    projectSlug: 'endurance-and-beyond',
    projectTitle: 'Endurance and Beyond',
    aspect: 'landscape',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What do you actually make?',
    answer:
      'Brand films, short documentaries and stills, and the story underneath them. Every project starts with one question: what should people feel before they’ve ever walked through your door? The film is how we answer it.',
  },
  {
    question: 'Do you only work with camps and lodges?',
    answer:
      'No. We’ve made films for a jeweller in Zanzibar, a car dealership in Nairobi and a safari camp in the Maasai Mara. The subject changes. The work doesn’t: we make films for things people buy with their hearts first.',
  },
  {
    question: 'How are projects priced?',
    answer:
      'By the story, not by the minute of footage. After a first conversation, we send a clear proposal covering what we’ll make, how and when, with one fee and no surprises.',
  },
  {
    question: 'What happens after I get in touch?',
    answer:
      'We reply within two working days to set up a short call. We listen first: your brand, what you want people to feel, and your timing. Then we send a clear proposal.',
  },
  {
    question: 'How far ahead should we plan?',
    answer:
      'The earlier the better. We shoot in natural light, so the right season, the right week and the right hour all matter. Give us time to plan, and the light does the rest.',
  },
  {
    question: 'Do you travel?',
    answer:
      'Yes. We’re based between Nairobi and the Maasai Mara, and we’ve shot across East Africa. Travel is planned into the proposal from the start.',
  },
  {
    question: 'Why only three clients at a time?',
    answer:
      'Because good stories take attention. Working with three clients means we know each brand well enough to tell its story honestly, and each one gets our full focus rather than a slot in a queue.',
  },
  {
    question: 'Do you manage social media?',
    answer:
      'Only alongside a production engagement, never on its own. Our work is the story and the film. Social media is one of the places it lives.',
  },
];
