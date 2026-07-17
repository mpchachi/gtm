'use client';

import { motion } from 'framer-motion';
import { Slide, Overline, Title } from './SlideChrome';
import { ImageSlot, PersonSlot } from './ImageSlot';
import {
  PHASES, CORE_TEAM, PARTNERS, EXPANSION,
  MARANON_PEOPLE, CHANNEL_PEOPLE, PHARMA_PERSON,
  BENCHMARK_PERSON, BENCHMARKS, FINANCE_PERSON, US_PEOPLE,
} from './slides';

function Bullet({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="flex items-baseline gap-3 text-lg sm:text-xl text-[#1A1F3C]"
    >
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F4C9C]" />
      <span>{children}</span>
    </motion.li>
  );
}

function PeopleRow({ people, size = 'md' }: { people: { name: string; role: string; img: string }[]; size?: 'sm' | 'md' }) {
  return (
    <div className="flex flex-wrap gap-8">
      {people.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
        >
          <PersonSlot src={p.img} name={p.name} role={p.role} size={size} />
        </motion.div>
      ))}
    </div>
  );
}

// ─── 1. Cover ────────────────────────────────────────────────────────────────
function CoverSlide() {
  return (
    <Slide>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-sm text-[#6B7689] mb-6"
          >
            2nd worldwide — Harvard Health Systems Innovation Lab
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1F3C] leading-[1.05]"
          >
            Go-To-Market
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl text-[#1F4C9C] font-semibold"
          >
            A 12–15 month execution plan
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 text-sm text-[#6B7689]"
          >
            FixedGap · 2026
          </motion.p>
        </div>
        <ImageSlot src="/images/harvard.png" label="Harvard Demo Day — 2nd worldwide" className="h-[60%] lg:h-[70%] w-full self-center" />
      </div>
    </Slide>
  );
}

// ─── 2. Positioning ──────────────────────────────────────────────────────────
function PositioningSlide() {
  return (
    <Slide>
      <Overline>What we do</Overline>
      <Title>We monitor recovery. We don&apos;t diagnose.</Title>
      <ul className="mt-10 space-y-4 max-w-3xl">
        <Bullet delay={0.2}>Upper-limb recovery, monitored between visits</Bullet>
        <Bullet delay={0.3}>A webcam and a browser — no hardware, no install</Bullet>
        <Bullet delay={0.4}>Software-only: every new site scales at near-zero cost</Bullet>
      </ul>
    </Slide>
  );
}

// ─── 3. Product ──────────────────────────────────────────────────────────────
function ProductSlide() {
  return (
    <Slide>
      <Overline>The product</Overline>
      <Title>Movement, turned into clinical data</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4">
          <Bullet delay={0.2}>Games patients play at home</Bullet>
          <Bullet delay={0.3}>Pinch, grip, speed & hand kinematics captured live</Bullet>
          <Bullet delay={0.4}>A dashboard the clinician actually uses</Bullet>
        </ul>
        <ImageSlot src="/images/product.png" label="Product / dashboard screenshot" className="h-64 lg:h-80 w-full" />
      </div>
    </Slide>
  );
}

// ─── 4. Roadmap ──────────────────────────────────────────────────────────────
function RoadmapSlide() {
  return (
    <Slide>
      <Overline>The plan at a glance</Overline>
      <Title>From signed LOI to Seed</Title>
      <div className="mt-10 max-w-4xl">
        {PHASES.map((phase, i) => (
          <motion.div
            key={phase.window}
            initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="flex items-baseline gap-6 py-4 border-b border-[#EDE7DB] last:border-0"
          >
            <div className="w-28 shrink-0 text-[#1F4C9C] font-semibold">{phase.window}</div>
            <div className="text-lg text-[#1A1F3C]">{phase.title}</div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

// ─── 5. Phase 1 (Months 1-3) — with Marañón people + hospital ────────────────
function Phase1Slide() {
  const phase = PHASES[0];
  return (
    <Slide>
      <Overline>{phase.window}</Overline>
      <Title>{phase.title}</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4">
          {phase.points.map((p, i) => <Bullet key={p} delay={0.2 + i * 0.1}>{p}</Bullet>)}
        </ul>
        <div className="flex flex-col gap-6">
          <ImageSlot src="/images/gregorio-maranon.jpeg" label="Hospital Gregorio Marañón" className="h-40 w-full" />
          <PeopleRow people={MARANON_PEOPLE} size="sm" />
        </div>
      </div>
    </Slide>
  );
}

// ─── 6. Phase 2 (Months 3-5) — regulatory ─────────────────────────────────────
function Phase2Slide() {
  const phase = PHASES[1];
  return (
    <Slide>
      <Overline>{phase.window}</Overline>
      <Title>{phase.title}</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4">
          {phase.points.map((p, i) => <Bullet key={p} delay={0.2 + i * 0.1}>{p}</Bullet>)}
        </ul>
        <div className="rounded-2xl border border-[#1F4C9C]/20 bg-[#1F4C9C]/5 p-6">
          <div className="text-sm font-semibold text-[#1F4C9C]">Regulation is the moat</div>
          <p className="mt-2 text-base text-[#1A1F3C] leading-relaxed">
            Anyone can run computer vision in a weekend. No one replicates clinical
            validation in a tertiary hospital without walking this path.
          </p>
        </div>
      </div>
    </Slide>
  );
}

// ─── 7. Phase 3 (Months 6-8) — pilot + benchmarks (Guillermo) ─────────────────
function Phase3Slide() {
  const phase = PHASES[2];
  return (
    <Slide>
      <Overline>{phase.window}</Overline>
      <Title>{phase.title}</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <ul className="space-y-4">
            {phase.points.map((p, i) => <Bullet key={p} delay={0.2 + i * 0.1}>{p}</Bullet>)}
          </ul>
          <div className="mt-8 flex items-center gap-6">
            <PersonSlot src={BENCHMARK_PERSON.img} name={BENCHMARK_PERSON.name} role={BENCHMARK_PERSON.role} size="sm" />
            <div className="flex gap-6">
              {BENCHMARKS.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-extrabold text-[#1F4C9C]">{b.value}</div>
                  <div className="text-xs text-[#6B7689]">{b.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <ImageSlot src="/images/gregorio-maranon.jpeg" label="Hospital Gregorio Marañón" className="h-64 lg:h-80 w-full" />
      </div>
    </Slide>
  );
}

// ─── 8. Phase 4 (Months 9-15) — channels with people ─────────────────────────
function Phase4Slide() {
  const phase = PHASES[3];
  return (
    <Slide>
      <Overline>{phase.window}</Overline>
      <Title>{phase.title}</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4">
          {phase.points.map((p, i) => <Bullet key={p} delay={0.2 + i * 0.1}>{p}</Bullet>)}
        </ul>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <ImageSlot src="/images/la-paz.jpeg" label="Hospital La Paz" className="h-36 w-full" />
            <ImageSlot src="/images/ruber.jpg" label="Ruber Internacional" className="h-36 w-full" />
          </div>
          <PeopleRow people={CHANNEL_PEOPLE} size="sm" />
        </div>
      </div>
    </Slide>
  );
}

// ─── 9. Pharma track (Cecilia) ────────────────────────────────────────────────
function PharmaSlide() {
  return (
    <Slide>
      <Overline>A revenue stream of its own</Overline>
      <Title>Pharma: objective motor endpoints</Title>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <ul className="space-y-4 max-w-lg">
          <Bullet delay={0.2}>Objective motor-outcome measurement in CNS trials</Bullet>
          <Bullet delay={0.3}>Sponsors pay per data, not per patient</Bullet>
          <Bullet delay={0.4}>Revenue independent of hospital budgets</Bullet>
        </ul>
        <div className="flex items-center gap-6">
          <PersonSlot src={PHARMA_PERSON.img} name={PHARMA_PERSON.name} role={PHARMA_PERSON.role} />
          <ImageSlot src="/images/pfizer.jpeg" label="Pfizer" className="h-16 w-40" />
        </div>
      </div>
    </Slide>
  );
}

// ─── 10. Expansion ─────────────────────────────────────────────────────────
function ExpansionSlide() {
  return (
    <Slide>
      <Overline>Where it goes</Overline>
      <Title>Start narrow, then widen</Title>
      <div className="mt-12 flex flex-wrap items-center gap-4 max-w-4xl">
        {EXPANSION.map((e, i) => (
          <motion.div
            key={e}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: 0.2 + i * 0.12 }}
            className={`rounded-full px-6 py-3 text-lg font-semibold ${i === 0 ? 'bg-[#1F4C9C] text-white' : 'border border-[#E8E0D0] text-[#6B7689]'}`}
          >
            {e}
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-sm text-[#6B7689]">Same measurement layer, one condition at a time.</p>
    </Slide>
  );
}

// ─── 11. Team & partners ──────────────────────────────────────────────────────
function TeamSlide() {
  return (
    <Slide>
      <Overline>Who&apos;s behind it</Overline>
      <Title>Team &amp; partners</Title>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <div className="text-sm text-[#6B7689] mb-3">Core team</div>
            <div className="space-y-2">
              {CORE_TEAM.map((m) => (
                <div key={m.name} className="text-sm">
                  <span className="font-semibold text-[#1A1F3C]">{m.name}</span>
                  <span className="text-[#4A5266]"> — {m.role}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm text-[#6B7689] mb-3">Partners</div>
            <div className="space-y-2">
              {PARTNERS.map((m) => (
                <div key={m.name} className="text-sm">
                  <span className="font-semibold text-[#1A1F3C]">{m.name}</span>
                  <span className="text-[#4A5266]"> — {m.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ImageSlot src="/images/team.jpg" label="Foto del equipo completo" className="h-64 lg:h-80 w-full" />
      </div>
    </Slide>
  );
}

// ─── 12. US expansion + finance ───────────────────────────────────────────────
function USExpansionSlide() {
  return (
    <Slide>
      <Overline>US groundwork</Overline>
      <Title>Building the Boston bridge early</Title>
      <div className="mt-10 flex flex-wrap gap-10 items-start">
        <PeopleRow people={US_PEOPLE} size="sm" />
        <div className="border-l border-[#EDE7DB] pl-10">
          <div className="text-sm text-[#6B7689] mb-4">Financial modeling</div>
          <PersonSlot src={FINANCE_PERSON.img} name={FINANCE_PERSON.name} role={FINANCE_PERSON.role} size="sm" />
        </div>
      </div>
    </Slide>
  );
}

// ─── 13. Closing ─────────────────────────────────────────────────────────────
function ClosingSlide() {
  return (
    <Slide>
      <Overline>The decision point</Overline>
      <motion.h2
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1A1F3C] leading-tight max-w-3xl"
      >
        By Month 15, the evidence decides the next move.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.15 }}
        className="mt-6 max-w-2xl text-lg text-[#4A5266]"
      >
        Seed round · clinical validation · first paid pilots.
      </motion.p>
    </Slide>
  );
}

export const SLIDES: { id: string; render: () => React.ReactNode }[] = [
  { id: 'cover', render: () => <CoverSlide /> },
  { id: 'positioning', render: () => <PositioningSlide /> },
  { id: 'product', render: () => <ProductSlide /> },
  { id: 'roadmap', render: () => <RoadmapSlide /> },
  { id: 'phase-1', render: () => <Phase1Slide /> },
  { id: 'phase-2', render: () => <Phase2Slide /> },
  { id: 'phase-3', render: () => <Phase3Slide /> },
  { id: 'phase-4', render: () => <Phase4Slide /> },
  { id: 'pharma', render: () => <PharmaSlide /> },
  { id: 'expansion', render: () => <ExpansionSlide /> },
  { id: 'team', render: () => <TeamSlide /> },
  { id: 'us', render: () => <USExpansionSlide /> },
  { id: 'closing', render: () => <ClosingSlide /> },
];
