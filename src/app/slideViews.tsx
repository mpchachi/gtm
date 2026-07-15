'use client';

import { motion } from 'framer-motion';
import { Slide, Overline, Title, Lead, StaggerList, StaggerItem } from './SlideChrome';
import {
  PHASES, CORE_TEAM, PARTNERS, REVENUE_STREAMS,
  KEY_GOALS, FUND_ALLOCATION,
} from './slides';

// ─── Slide 1: Cover ──────────────────────────────────────────────────────────
function CoverSlide() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-[#6B7689] mb-6"
      >
        2nd worldwide — Harvard Health Systems Innovation Lab Demo Day
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1F3C] leading-[1.05]"
      >
        Go-To-Market
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="mt-4 text-xl sm:text-2xl text-[#1F4C9C] font-semibold"
      >
        A 12–15 month execution plan
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="mt-6 max-w-2xl text-base sm:text-lg text-[#4A5266] leading-relaxed"
      >
        Turning the MVP into a clinically tested, legally prepared, and technically
        reliable monitoring product. The first use case we validate is upper-limb
        recovery monitoring between visits.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.5 }}
        className="mt-12 text-sm text-[#6B7689]"
      >
        FixedGap · June 2026
      </motion.p>
    </Slide>
  );
}

// ─── Slide 2: Positioning ────────────────────────────────────────────────────
function PositioningSlide() {
  return (
    <Slide>
      <Overline>The scope we chose</Overline>
      <Title>We monitor recovery. We don&apos;t diagnose.</Title>
      <Lead>
        We validate one thing first: upper-limb recovery monitoring between visits, for
        patients whose neurological condition affects daily movement. Narrowing the scope
        this far is what keeps the regulatory, legal, and clinical path realistic.
      </Lead>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6 max-w-4xl">
        {[
          { label: 'Non-diagnostic', text: 'An investigational monitoring-support tool, positioned deliberately outside diagnosis or treatment decisions.' },
          { label: 'One use case', text: 'Upper-limb motor recovery after stroke — the entry point, not the ceiling.' },
          { label: 'Software-only', text: 'No hardware to ship. Every validated site is repeatable at close to zero marginal cost.' },
        ].map(({ label, text }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          >
            <div className="text-lg font-semibold text-[#1A1F3C]">{label}</div>
            <div className="mt-2 text-sm text-[#4A5266] leading-relaxed">{text}</div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

// ─── Slide 3: Roadmap overview ───────────────────────────────────────────────
function RoadmapSlide() {
  return (
    <Slide>
      <Overline>The plan at a glance</Overline>
      <Title>From confirmed pilot to Seed readiness</Title>
      <div className="mt-10 max-w-4xl">
        {PHASES.map((phase, i) => (
          <motion.div
            key={phase.window}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="flex items-baseline gap-6 py-4 border-b border-[#EDE7DB] last:border-0"
          >
            <div className="w-28 shrink-0 text-[#1F4C9C] font-semibold">{phase.window}</div>
            <div className="text-lg text-[#1A1F3C]">{phase.title}</div>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-[#4A5266] leading-relaxed">
        Stroke is the entry point. The same measurement layer extends later to
        Parkinson&apos;s, MS, post-surgical recovery, and fall-risk in aging populations.
      </p>
    </Slide>
  );
}

// ─── Slides 4-7: Phase detail ────────────────────────────────────────────────
function PhaseSlide({ index }: { index: number }) {
  const phase = PHASES[index];
  return (
    <Slide>
      <Overline>{phase.window}</Overline>
      <Title>{phase.title}</Title>
      <Lead>{phase.objective}</Lead>
      <StaggerList>
        {phase.outputs.map((o) => (
          <StaggerItem key={o}>{o}</StaggerItem>
        ))}
      </StaggerList>
    </Slide>
  );
}

// ─── Slide 8: Second site & commercial ───────────────────────────────────────
function CommercialSlide() {
  return (
    <Slide>
      <Overline>Months 9–15 · Scaling</Overline>
      <Title>Two pathways, one repeatable model</Title>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="text-sm text-[#6B7689]">Public pathway</div>
          <div className="mt-1 text-2xl font-bold text-[#1A1F3C]">Hospital La Paz</div>
          <p className="mt-3 text-sm text-[#4A5266] leading-relaxed">
            Through Dr. Exuperio Díez-Tejedor. Lets us re-run the Gregorio Marañón
            structure inside another leading Spanish public hospital.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="text-sm text-[#6B7689]">Private pathway</div>
          <div className="mt-1 text-2xl font-bold text-[#1A1F3C]">Ruber Internacional</div>
          <p className="mt-3 text-sm text-[#4A5266] leading-relaxed">
            Through Dr. Mónica Kurtis. Private hospitals buy internally, so the clinician
            who validates the product can also drive the purchase — no procurement cycle.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 max-w-4xl border-t border-[#EDE7DB] pt-6">
        <p className="text-sm text-[#4A5266] leading-relaxed">
          Once the regulatory milestones land, validated interest converts into paid
          deployments: {REVENUE_STREAMS.join(', ')}. Pharma runs as a separate track,
          led by Cecilia Guzmán (15 years at Pfizer): objective motor-outcome measurement
          in CNS trials, a B2B stream independent of hospital budgets.
        </p>
      </div>
    </Slide>
  );
}

// ─── Slide 9: Team ───────────────────────────────────────────────────────────
function TeamSlide() {
  return (
    <Slide>
      <Overline>Execution</Overline>
      <Title>The team builds the product. Capital clears the path.</Title>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
        <div>
          <div className="text-sm text-[#6B7689] mb-4">Core team</div>
          <div className="space-y-4">
            {CORE_TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
              >
                <div className="font-semibold text-[#1A1F3C]">{m.name}</div>
                <div className="text-sm text-[#4A5266]">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm text-[#6B7689] mb-4">Technical &amp; strategic partners</div>
          <div className="space-y-4">
            {PARTNERS.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
              >
                <div className="font-semibold text-[#1A1F3C]">{m.name}</div>
                <div className="text-sm text-[#4A5266]">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

// ─── Slide 10: Fund allocation ───────────────────────────────────────────────
function FundsSlide() {
  return (
    <Slide>
      <Overline>Allocation of funds</Overline>
      <Title>Capital clears the clinical and regulatory path</Title>
      <Lead>
        We&apos;re not raising to outsource what we do in-house. The round exists to clear
        the path toward clinical and commercial readiness.
      </Lead>
      <div className="mt-8 max-w-3xl">
        {FUND_ALLOCATION.map((f, i) => (
          <motion.div
            key={f.category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
            className="flex items-baseline gap-6 py-4 border-b border-[#EDE7DB] last:border-0"
          >
            <div className="w-24 shrink-0 text-[#1F4C9C] font-semibold">{f.weight}</div>
            <div>
              <div className="font-semibold text-[#1A1F3C]">{f.category}</div>
              <div className="text-sm text-[#4A5266]">{f.focus}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

// ─── Slide 11: Key goals by month 15 ─────────────────────────────────────────
function GoalsSlide() {
  return (
    <Slide>
      <Overline>Where we stand by Month 15</Overline>
      <Title>What we can credibly reach</Title>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
        {KEY_GOALS.map((g, i) => (
          <motion.div
            key={g}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
            className="text-base text-[#1A1F3C] leading-snug"
          >
            {g}
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

// ─── Slide 12: Closing ───────────────────────────────────────────────────────
function ClosingSlide() {
  return (
    <Slide>
      <Overline>The decision point</Overline>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1A1F3C] leading-tight max-w-3xl"
      >
        By Month 15, the evidence decides the next move.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="mt-6 max-w-2xl text-lg sm:text-xl text-[#4A5266] leading-relaxed"
      >
        Raise a Seed round, confirm clinical validation, sign paid pilots or deployment
        agreements, pursue strategic partnerships — all anchored in real pilot evidence
        from Gregorio Marañón, not projections.
      </motion.p>
    </Slide>
  );
}

export const SLIDES: { id: string; render: () => React.ReactNode }[] = [
  { id: 'cover', render: () => <CoverSlide /> },
  { id: 'positioning', render: () => <PositioningSlide /> },
  { id: 'roadmap', render: () => <RoadmapSlide /> },
  { id: 'phase-1', render: () => <PhaseSlide index={0} /> },
  { id: 'phase-2', render: () => <PhaseSlide index={1} /> },
  { id: 'phase-3', render: () => <PhaseSlide index={2} /> },
  { id: 'phase-4', render: () => <PhaseSlide index={3} /> },
  { id: 'commercial', render: () => <CommercialSlide /> },
  { id: 'team', render: () => <TeamSlide /> },
  { id: 'funds', render: () => <FundsSlide /> },
  { id: 'goals', render: () => <GoalsSlide /> },
  { id: 'closing', render: () => <ClosingSlide /> },
];
