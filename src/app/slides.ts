/**
 * Slide content for the FixedGap Go-To-Market investor deck.
 * A condensed, visual VC-facing summary of the full GTM document.
 * Source: FixedGap Go-To-Market Strategy, June 2026.
 */

export interface Phase {
  window: string;
  title: string;
  objective: string;
  outputs: string[];
}

export const PHASES: Phase[] = [
  {
    window: 'Months 1–3',
    title: 'Pilot Scope & Company Readiness',
    objective:
      'Turn the confirmed Gregorio Marañón pilot into an execution-ready clinical investigation, bring the MVP to pilot-ready stage, and put the company on solid corporate footing.',
    outputs: [
      'CEIm/AEMPS submission filed — critical path to first patient sessions',
      'Pilot-ready MVP hardened via internal & healthy-user testing',
      'Defined pilot scope: profiles, inclusion/exclusion, workflow',
      'Compliance framework: non-diagnostic positioning, GDPR/DPIA, AI consent',
      'Corporate setup: incorporated, pre-seed closing',
    ],
  },
  {
    window: 'Months 3–5',
    title: 'Regulatory, Legal & Data Readiness',
    objective:
      'Clear the regulatory gate and finalize the legal and data foundations required before any patient session.',
    outputs: [
      'Regulatory approval secured or in final stage (CEIm + AEMPS)',
      'Patient-ready product validated through healthy-user testing',
      'Legal & data pack complete: intended use, claims, GDPR/DPIA, consent',
      'CE-marking pathway initiated as a long-term track',
    ],
  },
  {
    window: 'Months 6–8',
    title: 'First Clinical Pilot — Gregorio Marañón',
    objective:
      'Run the first supervised pilot with 30 clinically stable patients with neurological conditions affecting upper-limb movement.',
    outputs: [
      'Feasibility demonstrated on-site and at home',
      'Reliable biomarker extraction (pinch, grip, speed, kinematics)',
      'Investor-grade evidence package compiled',
      'Second-site pipeline opened: La Paz & Ruber Internacional',
    ],
  },
  {
    window: 'Months 9–15',
    title: 'Second Site, Commercial Pipeline & Seed Readiness',
    objective:
      'Turn the Gregorio Marañón pilot into a repeatable model and move FixedGap from pre-seed validation to Seed readiness.',
    outputs: [
      'Second-site strategy: La Paz (public) + Ruber (private)',
      'CE-marking pathway significantly more defined',
      'Commercial pipeline: LOIs, pilot agreements, partnerships',
      'Pharma track opened for objective motor-outcome measurement',
      'Positioned for Seed round with stronger evidence base',
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
}

export const CORE_TEAM: TeamMember[] = [
  { name: 'Mateo Pérez & Marco García', role: 'MVP to pilot-ready, internal & healthy-user testing' },
  { name: 'Helene Weinberg', role: 'Clinical feedback loop & protocol coordination' },
  { name: 'Luis Molina & Álvaro Gil', role: 'Incorporation, pre-seed, investor materials, regulatory' },
  { name: 'Dr. José Antonio López-Martín', role: 'Medical Advisor — clinical validation & claims discipline' },
];

export const PARTNERS: TeamMember[] = [
  { name: 'AWS Spain', role: 'Cloud architecture (Iñaki Bilbao, Ignacio Gilart)' },
  { name: 'Saturno Labs', role: 'AI feasibility & robustness (Ramón Martínez)' },
  { name: 'Oakley Capital', role: 'Financial structuring (Javier Echávarri)' },
  { name: 'Harvard / MIT ecosystem', role: 'RCC Harvard, MGH, Chan School — US groundwork' },
];

export const REVENUE_STREAMS = [
  'Per-patient license',
  'Per-site annual license',
  'Pharma study fee',
  'Insurer contract',
];

export const KEY_GOALS = [
  'Pilot evidence consolidated: feasibility, usability, reliability, clinician fit',
  'Product direction validated for larger-scale deployment',
  'Second-site pathway active (La Paz + Ruber)',
  'CE marking pathway advanced and moving forward',
  'Commercial pipeline created: LOIs, pilots, partnerships',
  'Revenue plan prepared for future paid deployments',
  'Seed-readiness narrative established',
  'U.S. expansion groundwork started',
];

export const FUND_ALLOCATION = [
  { category: 'Regulatory, GDPR & Clinical Compliance', focus: 'Primary allocation for market readiness', weight: 'Primary' },
  { category: 'Clinical Pilot Execution', focus: 'Gregorio Marañón, La Paz & Ruber Internacional', weight: 'Major' },
  { category: 'Infrastructure & Operations', focus: 'Sustained with minimal external expenditure', weight: 'Lean' },
];
