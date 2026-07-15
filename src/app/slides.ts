/**
 * Slide content for the FixedGap Go-To-Market deck.
 * Kept intentionally short — the deck is support, the team speaks around it.
 * Source: FixedGap Go-To-Market Strategy, June 2026.
 */

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
      'File CEIm/AEMPS submission',
      'MVP to pilot-ready via healthy-user testing',
      'Incorporate + close pre-seed',
    ],
  },
  {
    window: 'Months 3–5',
    title: 'Regulatory & legal green light',
    points: [
      'CEIm + AEMPS approval',
      'GDPR/DPIA, consent & claims pack',
      'CE-marking pathway started',
    ],
  },
  {
    window: 'Months 6–8',
    title: 'First pilot — Gregorio Marañón',
    points: [
      '30 patients, on-site then at home',
      'Reliable biomarker capture',
      'Evidence package compiled',
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

export const CHANNELS = [
  {
    tag: 'Public',
    name: 'Hospital La Paz',
    line: 'Dr. Exuperio Díez-Tejedor · repeat the Gregorio Marañón model',
  },
  {
    tag: 'Private',
    name: 'Ruber Internacional',
    line: 'Dr. Mónica Kurtis · buys internally, no procurement cycle',
  },
  {
    tag: 'Pharma',
    name: 'CNS trials',
    line: 'Cecilia Guzmán (ex-Pfizer) · revenue independent of hospital budgets',
  },
];

export const EXPANSION = ['Stroke', 'Parkinson\u2019s', 'MS', 'Post-surgical', 'Fall-risk'];
