/**
 * Slide content for the FixedGap Go-To-Market deck.
 * Photo-heavy layout: each phase shows the real people and hospitals behind it.
 * Source: FixedGap Go-To-Market Strategy + team brief.
 */

export interface Person {
  name: string;
  role: string;
  img: string;
}

export interface Phase {
  window: string;
  title: string;
  points: string[];
}

export const PHASES: Phase[] = [
  {
    window: 'Months 1–3',
    title: 'Pilot scope & readiness',
    points: [
      'File regulatory submission',
      'MVP to pilot-ready (healthy-user testing)',
      'Incorporate + close pre-seed',
    ],
  },
  {
    window: 'Months 3–5',
    title: 'Regulatory & legal green light',
    points: [
      'First regulatory phase passed',
      'Classification roadmap in progress',
      'GDPR/DPIA, consent & claims pack',
    ],
  },
  {
    window: 'Months 6–8',
    title: 'First pilot — Gregorio Marañón',
    points: [
      'LOI signed by Head of Neurology',
      '30 patients, on-site then at home',
      'Biomarker validation vs FMA-UE',
    ],
  },
  {
    window: 'Months 9–15',
    title: 'Second site & seed readiness',
    points: [
      'La Paz (public) + Ruber (private)',
      'Commercial pipeline: LOIs & pilots',
      'Positioned for Seed round',
    ],
  },
];

// People behind the Gregorio Marañón pilot (Months 1–3 / 6–8)
export const MARANON_PEOPLE: Person[] = [
  { name: 'Dr. Andrés García Pastor', role: 'Head of Stroke Dept.', img: '/images/andres-garcia.webp' },
  { name: 'Dr. Gustavo Arrieta', role: 'Neurorehabilitation', img: '/images/gustavo-arrieta.webp' },
];

// Second-site + commercial channels (Months 9–15)
export const CHANNEL_PEOPLE: Person[] = [
  { name: 'Dr. Exuperio Díez-Tejedor', role: 'Head of Neurology · La Paz (public)', img: '/images/exuperio.jpg' },
  { name: 'Dr. Mónica Kurtis', role: 'Ruber Internacional (private)', img: '/images/monica-kurtis.jpg' },
];

// Pharma track
export const PHARMA_PERSON: Person = {
  name: 'Cecilia Guzmán',
  role: '15 years at Pfizer · CNS trials',
  img: '/images/cecilia.jpg',
};

// Simulated-pilot benchmarks (Guillermo Arroyo)
export const BENCHMARK_PERSON: Person = {
  name: 'Guillermo Arroyo',
  role: 'MIT post-doc · pilot modeling',
  img: '/images/guillermo.jpg',
};

export const BENCHMARKS = [
  { value: '> 80%', label: 'Adherence' },
  { value: '> 90%', label: 'Usable sessions' },
  { value: '> 90%', label: 'Tracking reliability' },
];

// Finance + US expansion (closing section)
export const FINANCE_PERSON: Person = {
  name: 'Álvaro Jiménez',
  role: 'Financial modeling',
  img: '/images/alvaro-jimenez.jpg',
};

export const US_PEOPLE: Person[] = [
  { name: 'Dr. Leyre Zubiri', role: 'Massachusetts General Hospital', img: '/images/leyre.jpg' },
  { name: 'Rifat Atun · Che Reddy', role: 'Harvard T.H. Chan School', img: '/images/harvard-advisors.jpg' },
];

export interface TeamMember {
  name: string;
  role: string;
}

export const CORE_TEAM: TeamMember[] = [
  { name: 'Mateo Pérez & Marco García', role: 'Product & tech' },
  { name: 'Helene Weinberg', role: 'Clinical coordination' },
  { name: 'Luis Molina & Álvaro Gil', role: 'Corporate & fundraising' },
  { name: 'Dr. José Antonio López-Martín', role: 'Medical advisor' },
];

export const PARTNERS: TeamMember[] = [
  { name: 'AWS Spain', role: 'Cloud architecture' },
  { name: 'Saturno Labs', role: 'AI robustness' },
  { name: 'Oakley Capital', role: 'Financial structuring' },
  { name: 'Harvard / MIT', role: 'US groundwork' },
];

export const EXPANSION = ['Stroke', 'Parkinson\u2019s', 'MS', 'Post-surgical', 'Fall-risk'];
