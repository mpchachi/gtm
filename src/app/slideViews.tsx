'use client';

import { motion } from 'framer-motion';
import { Slide, Overline, Title } from './SlideChrome';
import { ImageSlot, PersonSlot } from './ImageSlot';
import {
  MARANON_PEOPLE, AWS_PEOPLE, SATURNO_PERSON, GUILLERMO,
  CHANNEL_PEOPLE, PHARMA_PERSON, FINANCE_PERSON, US_PEOPLE,
  BENCHMARKS, OUTPUT_M3, OUTPUT_M5, OUTPUT_M8, KEY_GOALS_M15,
  FUND_ALLOCATION, REVENUE_STREAMS,
} from './slides';
import type { Person } from './slides';

function Bullet({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-baseline gap-3 text-base sm:text-lg text-[#1A1F3C]"
    >
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F4C9C]" />
      <span>{children}</span>
    </motion.li>
  );
}

function PhaseTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
      className="inline-block rounded-full bg-[#1F4C9C] px-4 py-1 text-sm font-semibold text-white mb-4"
    >
      {children}
    </motion.div>
  );
}

function People({ people, size = 'sm' }: { people: Person[]; size?: 'sm' | 'md' }) {
  return (
    <div className="flex flex-wrap gap-6">
      {people.map((p, i) => (
        <motion.div key={p.name}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}>
          <PersonSlot src={p.img} name={p.name} role={p.role} size={size} />
        </motion.div>
      ))}
    </div>
  );
}

// ═══ COVER ════════════════════════════════════════════════════════════════════
function CoverSlide() {
  return (
    <Slide>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-sm text-[#6B7689] mb-6">
            2nd worldwide — Harvard Health Systems Innovation Lab
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1F3C] leading-[1.05]">
            Go-To-Market
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl text-[#1F4C9C] font-semibold">
            12–15 Month Stakeholder-Backed Execution Plan
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 text-sm text-[#6B7689]">
            FixedGap · 2026
          </motion.p>
        </div>
        <ImageSlot src="/images/harvard.png" label="Harvard Demo Day — 2nd worldwide" className="h-[60%] lg:h-[70%] w-full self-center" />
      </div>
    </Slide>
  );
}

// ═══ POSITIONING (intro line from the GTM) ════════════════════════════════════
function PositioningSlide() {
  return (
    <Slide>
      <Overline>The scope that drives every decision</Overline>
      <Title>Monitoring support — not diagnosis</Title>
      <ul className="mt-10 space-y-4 max-w-3xl">
        <Bullet delay={0.2}>Upper-limb recovery monitoring between visits</Bullet>
        <Bullet delay={0.3}>Objective kinematic biomarkers from a standard webcam</Bullet>
        <Bullet delay={0.4}>No video, no install, on-device compute</Bullet>
      </ul>
    </Slide>
  );
}

// ═══ 1. MONTHS 1-3 — title slide ══════════════════════════════════════════════
function M13TitleSlide() {
  return (
    <Slide>
      <PhaseTag>1 · Months 1–3</PhaseTag>
      <Title>Pilot Scope and Company Readiness</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4">
          <Bullet delay={0.2}>Confirmed pilot site: Gregorio Marañón, Stroke Dept.</Bullet>
          <Bullet delay={0.3}>Prepare the CEIm/AEMPS pathway early</Bullet>
          <Bullet delay={0.4}>Harden the MVP via internal & healthy-user testing</Bullet>
        </ul>
        <div className="flex flex-col gap-5">
          <ImageSlot src="/images/gregorio-maranon.jpeg" label="Hospital Gregorio Marañón" className="h-40 w-full" />
          <People people={MARANON_PEOPLE} />
        </div>
      </div>
    </Slide>
  );
}

// ═══ 1. MONTHS 1-3 — LOI + regulatory help ════════════════════════════════════
function M13LoiSlide() {
  return (
    <Slide>
      <PhaseTag>1 · Months 1–3</PhaseTag>
      <Title>A signed commitment, and a guide through regulation</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <ul className="space-y-4">
            <Bullet delay={0.2}>LOI signed by the Head of Neurology</Bullet>
            <Bullet delay={0.3}>Timeline validated with Dr. David García Lou&apos;s healthtech experience</Bullet>
            <Bullet delay={0.4}>Positioned as investigational, non-diagnostic monitoring support</Bullet>
          </ul>
        </div>
        <ImageSlot src="/images/loi.jpg" label="Letter of Intent — Gregorio Marañón" className="h-64 lg:h-72 w-full" />
      </div>
    </Slide>
  );
}

// ═══ 1. MONTHS 1-3 — technical partners ═══════════════════════════════════════
function M13PartnersSlide() {
  return (
    <Slide>
      <PhaseTag>1 · Months 1–3</PhaseTag>
      <Title>Technical partners securing the foundation</Title>
      <div className="mt-8 flex flex-wrap items-start gap-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <ImageSlot src="/images/aws.png" label="AWS" className="h-10 w-20 bg-white" fit="contain" />
            <span className="text-sm text-[#6B7689]">Cloud architecture</span>
          </div>
          <People people={AWS_PEOPLE} />
        </div>
        <div className="border-l border-[#EDE7DB] pl-12">
          <div className="flex items-center gap-3 mb-5">
            <ImageSlot src="/images/saturno.png" label="Saturno Labs" className="h-10 w-24 bg-white" fit="contain" />
            <span className="text-sm text-[#6B7689]">AI feasibility & robustness</span>
          </div>
          <People people={[SATURNO_PERSON]} />
        </div>
      </div>
    </Slide>
  );
}

// ═══ 1. MONTHS 1-3 — expected output ══════════════════════════════════════════
function M13OutputSlide() {
  return (
    <Slide>
      <PhaseTag>1 · Months 1–3</PhaseTag>
      <Title>Expected output by end of Month 3</Title>
      <ul className="mt-8 space-y-3 max-w-3xl">
        {OUTPUT_M3.map((o, i) => <Bullet key={o} delay={0.15 + i * 0.08}>{o}</Bullet>)}
      </ul>
    </Slide>
  );
}

// ═══ 2. MONTHS 3-5 — title + AEMPS stage 1 ════════════════════════════════════
function M35TitleSlide() {
  return (
    <Slide>
      <PhaseTag>2 · Months 3–5</PhaseTag>
      <Title>Regulatory, Legal, and Data Readiness</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-block rounded-lg bg-[#E7F5EC] px-4 py-2 text-sm font-semibold text-[#2E7D4F] mb-5">
            ✓ Stage 1 completed — now Stage 2
          </div>
          <ul className="space-y-4">
            <Bullet delay={0.3}>AEMPS first process approved</Bullet>
            <Bullet delay={0.4}>Patient-ready product to start the pilot</Bullet>
            <Bullet delay={0.5}>Legal & data pack in progress</Bullet>
          </ul>
        </div>
        <ImageSlot src="/images/aemps-approved.jpg" label="AEMPS — first process approved" className="h-64 lg:h-72 w-full" />
      </div>
    </Slide>
  );
}

// ═══ 2. MONTHS 3-5 — expected output ══════════════════════════════════════════
function M35OutputSlide() {
  return (
    <Slide>
      <PhaseTag>2 · Months 3–5</PhaseTag>
      <Title>Expected output by end of Month 5</Title>
      <ul className="mt-8 space-y-3 max-w-3xl">
        {OUTPUT_M5.map((o, i) => <Bullet key={o} delay={0.15 + i * 0.08}>{o}</Bullet>)}
      </ul>
      <div className="mt-8 rounded-xl border border-[#1F4C9C]/20 bg-[#1F4C9C]/5 p-5 max-w-3xl">
        <span className="text-sm text-[#1A1F3C]">
          <strong className="text-[#1F4C9C]">Regulation is the moat:</strong> anyone can run computer
          vision in a weekend; no one replicates clinical validation in a tertiary hospital without this path.
        </span>
      </div>
    </Slide>
  );
}

// ═══ 3. MONTHS 6-8 — title (begins pilot) ═════════════════════════════════════
function M68TitleSlide() {
  return (
    <Slide>
      <PhaseTag>3 · Months 6–8</PhaseTag>
      <Title>First Clinical Pilot with Gregorio Marañón</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4">
          <Bullet delay={0.2}>Begins pilot with 30 clinically stable patients</Bullet>
          <Bullet delay={0.3}>On-site or semi-supervised, then home-based</Bullet>
          <Bullet delay={0.4}>Versioned, controlled updates for traceability</Bullet>
        </ul>
        <ImageSlot src="/images/gregorio-maranon.jpeg" label="Hospital Gregorio Marañón" className="h-64 lg:h-72 w-full" />
      </div>
    </Slide>
  );
}

// ═══ 3. MONTHS 6-8 — Guillermo + benchmarks ═══════════════════════════════════
function M68BenchmarksSlide() {
  return (
    <Slide>
      <PhaseTag>3 · Months 6–8</PhaseTag>
      <Title>Benchmarks grounded in a simulated pilot</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <People people={[GUILLERMO]} size="md" />
          <p className="mt-4 max-w-sm text-sm text-[#4A5266] leading-relaxed">
            Guillermo Arroyo (MIT) modeled session flows, adherence and capture conditions —
            grounding these targets in a realistic study design.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5">
          {BENCHMARKS.map((b, i) => (
            <motion.div key={b.label}
              initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-5 rounded-xl border border-[#E8E0D0] bg-white p-4">
              <div className="text-3xl font-extrabold text-[#1F4C9C] w-24 shrink-0">{b.value}</div>
              <div>
                <div className="font-semibold text-[#1A1F3C]">{b.label}</div>
                <div className="text-sm text-[#6B7689]">{b.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

// ═══ 3. MONTHS 6-8 — expected output ══════════════════════════════════════════
function M68OutputSlide() {
  return (
    <Slide>
      <PhaseTag>3 · Months 6–8</PhaseTag>
      <Title>Expected output by end of Month 8</Title>
      <ul className="mt-8 space-y-3 max-w-3xl">
        {OUTPUT_M8.map((o, i) => <Bullet key={o} delay={0.15 + i * 0.08}>{o}</Bullet>)}
      </ul>
    </Slide>
  );
}

// ═══ 4. MONTHS 9-15 — title + channels ════════════════════════════════════════
function M915TitleSlide() {
  return (
    <Slide>
      <PhaseTag>4 · Months 9–15</PhaseTag>
      <Title>Second Site, Commercial Pipeline &amp; Seed Readiness</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <ImageSlot src="/images/la-paz.jpeg" label="Hospital La Paz" className="h-32 w-full" />
            <ImageSlot src="/images/ruber.jpg" label="Ruber Internacional" className="h-32 w-full" />
          </div>
          <People people={CHANNEL_PEOPLE} />
        </div>
        <ul className="space-y-4">
          <Bullet delay={0.2}>La Paz — public pathway (Dr. Díez-Tejedor)</Bullet>
          <Bullet delay={0.3}>Ruber — private, buys internally without procurement</Bullet>
          <Bullet delay={0.4}>Repeatable model at near-zero marginal cost</Bullet>
        </ul>
      </div>
    </Slide>
  );
}

// ═══ 4. MONTHS 9-15 — pharma ══════════════════════════════════════════════════
function PharmaSlide() {
  return (
    <Slide>
      <PhaseTag>4 · Months 9–15</PhaseTag>
      <Title>Pharma: a separate strategic track</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4 max-w-lg">
          <Bullet delay={0.2}>Objective motor-outcome measurement in CNS trials</Bullet>
          <Bullet delay={0.3}>Continuous at-home functional data, not clinic-only scales</Bullet>
          <Bullet delay={0.4}>B2B revenue independent of hospital budgets</Bullet>
        </ul>
        <div className="flex items-center gap-8">
          <PersonSlot src={PHARMA_PERSON.img} name={PHARMA_PERSON.name} role={PHARMA_PERSON.role} />
          <ImageSlot src="/images/pfizer.svg" label="Pfizer" className="h-16 w-40 bg-white" fit="contain" />
        </div>
      </div>
    </Slide>
  );
}

// ═══ 4. MONTHS 9-15 — US groundwork ═══════════════════════════════════════════
function USExpansionSlide() {
  return (
    <Slide>
      <PhaseTag>4 · Months 9–15</PhaseTag>
      <Title>U.S. expansion groundwork via Harvard &amp; Boston</Title>
      <div className="mt-10 flex flex-wrap gap-12 items-start">
        <People people={US_PEOPLE} />
        <div className="border-l border-[#EDE7DB] pl-12">
          <div className="text-sm text-[#6B7689] mb-4">Financial modeling</div>
          <People people={[FINANCE_PERSON]} />
        </div>
      </div>
    </Slide>
  );
}

// ═══ KEY GOALS BY MONTH 15 ════════════════════════════════════════════════════
function KeyGoalsSlide() {
  return (
    <Slide>
      <Overline>The window</Overline>
      <Title>Key goals by Month 15</Title>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 max-w-4xl">
        {KEY_GOALS_M15.map((g, i) => (
          <motion.div key={g}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.12 + i * 0.06 }}
            className="flex items-baseline gap-3 text-base text-[#1A1F3C]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F4C9C]" />
            <span>{g}</span>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

// ═══ ALLOCATION OF FUNDS ══════════════════════════════════════════════════════
function FundsSlide() {
  return (
    <Slide>
      <Overline>Allocation of funds</Overline>
      <Title>Capital clears the clinical & regulatory path</Title>
      <div className="mt-8 max-w-3xl">
        {FUND_ALLOCATION.map((f, i) => (
          <motion.div key={f.category}
            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="flex items-baseline gap-6 py-4 border-b border-[#EDE7DB] last:border-0">
            <div className="w-24 shrink-0 text-[#1F4C9C] font-semibold">{f.weight}</div>
            <div>
              <div className="font-semibold text-[#1A1F3C]">{f.category}</div>
              <div className="text-sm text-[#6B7689]">{f.focus}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-sm text-[#6B7689] max-w-3xl">
        The team builds the product. The capital clears the clinical, regulatory and commercial path.
      </p>
    </Slide>
  );
}

// ═══ CLOSING ══════════════════════════════════════════════════════════════════
function ClosingSlide() {
  return (
    <Slide>
      <Overline>The decision point</Overline>
      <motion.h2
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1A1F3C] leading-tight max-w-3xl">
        By Month 15, the evidence decides the next move.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.15 }}
        className="mt-6 flex flex-wrap gap-2 max-w-3xl">
        {REVENUE_STREAMS.map((r) => (
          <span key={r} className="rounded-full border border-[#E8E0D0] bg-white px-4 py-1.5 text-sm font-medium text-[#1A1F3C]">{r}</span>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.3 }}
        className="mt-8 max-w-2xl text-lg text-[#4A5266]">
        Raise Seed · confirm clinical validation · sign paid pilots.
      </motion.p>
    </Slide>
  );
}

export const SLIDES: { id: string; render: () => React.ReactNode }[] = [
  { id: 'cover', render: () => <CoverSlide /> },
  { id: 'positioning', render: () => <PositioningSlide /> },
  // 1 · Months 1-3
  { id: 'm13-title', render: () => <M13TitleSlide /> },
  { id: 'm13-loi', render: () => <M13LoiSlide /> },
  { id: 'm13-partners', render: () => <M13PartnersSlide /> },
  { id: 'm13-output', render: () => <M13OutputSlide /> },
  // 2 · Months 3-5
  { id: 'm35-title', render: () => <M35TitleSlide /> },
  { id: 'm35-output', render: () => <M35OutputSlide /> },
  // 3 · Months 6-8
  { id: 'm68-title', render: () => <M68TitleSlide /> },
  { id: 'm68-benchmarks', render: () => <M68BenchmarksSlide /> },
  { id: 'm68-output', render: () => <M68OutputSlide /> },
  // 4 · Months 9-15
  { id: 'm915-title', render: () => <M915TitleSlide /> },
  { id: 'pharma', render: () => <PharmaSlide /> },
  { id: 'us', render: () => <USExpansionSlide /> },
  // Wrap-up
  { id: 'key-goals', render: () => <KeyGoalsSlide /> },
  { id: 'funds', render: () => <FundsSlide /> },
  { id: 'closing', render: () => <ClosingSlide /> },
];
