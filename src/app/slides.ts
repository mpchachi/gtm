/**
 * Slide content for the FixedGap Go-To-Market deck.
 * Structured to follow the GTM document's exact timeline and section titles,
 * so the investor recognizes it as the same document — just visual and short.
 * Source: FixedGap Go-To-Market Strategy.
 */

export interface Person {
  name: string;
  role: string;
  img: string;
}

// ─── People & orgs (photos live in /public/images) ───────────────────────────

export const MARANON_PEOPLE: Person[] = [
  { name: 'Dr. Andrés García Pastor', role: 'Head of Stroke Dept.', img: '/images/andres-garcia.webp' },
  { name: 'Dr. Gustavo Arrieta', role: 'Neurorehabilitation', img: '/images/gustavo-arrieta.webp' },
];

export const AWS_PEOPLE: Person[] = [
  { name: 'Iñaki Bilbao Estrada', role: 'AWS Spain', img: '/images/inaki.jpg' },
  { name: 'Ignacio Gilart', role: 'AWS Spain', img: '/images/ignacio.jpg' },
];

export const SATURNO_PERSON: Person = {
  name: 'Ramón Martínez Jiménez',
  role: 'Saturno Labs · AI feasibility & robustness',
  img: '/images/ramon.jpg',
};

export const GUILLERMO: Person = {
  name: 'Guillermo Arroyo',
  role: 'MIT post-doc · simulated pilot design',
  img: '/images/guillermo.jpg',
};

export const CHANNEL_PEOPLE: Person[] = [
  { name: 'Dr. Exuperio Díez-Tejedor', role: 'Head of Neurology · La Paz (public)', img: '/images/exuperio.jpg' },
  { name: 'Dr. Mónica Kurtis', role: 'Ruber Internacional (private)', img: '/images/monica-kurtis.jpg' },
];

export const PHARMA_PERSON: Person = {
  name: 'Cecilia Guzmán',
  role: '15 years at Pfizer · CNS trials',
  img: '/images/cecilia.jpg',
};

export const FINANCE_PERSON: Person = {
  name: 'Álvaro Jiménez',
  role: 'Financial modeling',
  img: '/images/alvaro-jimenez.jpg',
};

export const US_PEOPLE: Person[] = [
  { name: 'Dr. Leyre Zubiri', role: 'Massachusetts General Hospital', img: '/images/leyre.jpg' },
  { name: 'Rifat Atun · Che Reddy', role: 'Harvard T.H. Chan School', img: '/images/harvard-advisors.jpg' },
];

// ─── Pilot benchmarks (Guillermo's simulated pilot) ──────────────────────────

export const BENCHMARKS = [
  { value: '> 80%', label: 'Adherence', detail: 'Sessions completed between visits' },
  { value: '> 90%', label: 'Usable sessions', detail: 'Clean, analyzable movement data' },
  { value: '> 90%', label: 'Tracking reliability', detail: 'Webcam capture across home environments' },
];

// ─── Expected outputs (verbatim from the GTM) ────────────────────────────────

export const OUTPUT_M3 = [
  'CEIm/AEMPS submission filed',
  'Pilot-ready MVP',
  'Defined pilot scope',
  'Compliance framework (non-diagnostic, GDPR/DPIA, AI consent)',
  'Corporate setup: incorporated, pre-seed closing',
];

export const OUTPUT_M5 = [
  'Regulatory approval secured or in final stage',
  'Patient-ready product',
  'Legal & data pack complete',
  'CE-marking pathway initiated',
];

export const OUTPUT_M8 = [
  'Feasibility demonstrated (on-site and at home)',
  'Reliable movement data',
  'Investor-grade evidence package',
  'Second-site pipeline opened (La Paz & Ruber)',
];

export const KEY_GOALS_M15 = [
  'Pilot evidence consolidated',
  'Product direction validated',
  'Second-site pathway active',
  'CE marking pathway advanced',
  'Commercial pipeline created',
  'Revenue plan prepared',
  'Seed-readiness narrative',
  'U.S. expansion groundwork started',
];

export const FUND_ALLOCATION = [
  { weight: 'Primary', category: 'Regulatory, GDPR & Clinical Compliance', focus: 'Primary allocation for market readiness' },
  { weight: 'Major', category: 'Clinical Pilot Execution', focus: 'Gregorio Marañón, La Paz & Ruber Internacional' },
  { weight: 'Lean', category: 'Infrastructure & Operations', focus: 'Sustained with minimal external expenditure' },
];

export const REVENUE_STREAMS = ['Per-patient license', 'Per-site annual license', 'Pharma study fee', 'Insurer contract'];
