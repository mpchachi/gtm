'use client';

import { motion } from 'framer-motion';
import { Slide, Overline, Title } from './SlideChrome';
import { ImageSlot } from './ImageSlot';
import { PHASES, CORE_TEAM, PARTNERS, CHANNELS, EXPANSION } from './slides';

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

// ─── 1. Cover ────────────────────────────────────────────────────────────────
function CoverSlide() {
  return (
    <Slide>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-[#6B7689] mb-6"
          >
            2nd worldwide — Harvard Health Systems Innovation Lab
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
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 text-sm text-[#6B7689]"
          >
            FixedGap · 2026
          </motion.p>
        </div>
        <ImageSlot
          src="/images/harvard.png"
          label="Harvard Demo Day — 2nd worldwide"
          className="h-[60%] lg:h-[70%] w-full self-center"
        />
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
        <ImageSlot
          src="/images/product.png"
          label="Product / dashboard screenshot"
          className="h-64 lg:h-80 w-full"
        />
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
    </Slide>
  );
}

// ─── 5-8. Phase detail ───────────────────────────────────────────────────────
function PhaseSlide({ index, imageSrc, imageLabel }: { index: number; imageSrc?: string; imageLabel?: string }) {
  const phase = PHASES[index];
  return (
    <Slide>
      <Overline>{phase.window}</Overline>
      <Title>{phase.title}</Title>
      <div className={`mt-8 grid grid-cols-1 gap-10 items-center ${imageSrc ? 'lg:grid-cols-2' : ''}`}>
        <ul className="space-y-4">
          {phase.points.map((p, i) => (
            <Bullet key={p} delay={0.2 + i * 0.1}>{p}</Bullet>
          ))}
        </ul>
        {imageSrc && (
          <ImageSlot src={imageSrc} label={imageLabel ?? ''} className="h-64 lg:h-80 w-full" />
        )}
      </div>
    </Slide>
  );
}

// ─── 9. Channels ─────────────────────────────────────────────────────────────
function ChannelsSlide() {
  return (
    <Slide>
      <Overline>How we go to market</Overline>
      <Title>Three ways in</Title>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {CHANNELS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
          >
            <div className="text-sm text-[#6B7689]">{c.tag}</div>
            <div className="mt-1 text-2xl font-bold text-[#1A1F3C]">{c.name}</div>
            <div className="mt-2 text-sm text-[#4A5266] leading-relaxed">{c.line}</div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}

// ─── 10. Expansion ───────────────────────────────────────────────────────────
function ExpansionSlide() {
  return (
    <Slide>
      <Overline>Where it goes</Overline>
      <Title>Start narrow, then widen</Title>
      <div className="mt-12 flex flex-wrap items-center gap-4 max-w-4xl">
        {EXPANSION.map((e, i) => (
          <motion.div
            key={e}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.2 + i * 0.12 }}
            className={`rounded-full px-6 py-3 text-lg font-semibold ${
              i === 0
                ? 'bg-[#1F4C9C] text-white'
                : 'border border-[#E8E0D0] text-[#6B7689]'
            }`}
          >
            {e}
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-sm text-[#6B7689]">Same measurement layer, one condition at a time.</p>
    </Slide>
  );
}

// ─── 11. Team ────────────────────────────────────────────────────────────────
function TeamSlide() {
  return (
    <Slide>
      <Overline>Who&apos;s behind it</Overline>
      <Title>Team &amp; partners</Title>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
        <div>
          <div className="text-sm text-[#6B7689] mb-4">Core team</div>
          <div className="space-y-3">
            {CORE_TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
              >
                <span className="font-semibold text-[#1A1F3C]">{m.name}</span>
                <span className="text-[#4A5266]"> — {m.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm text-[#6B7689] mb-4">Partners</div>
          <div className="space-y-3">
            {PARTNERS.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
              >
                <span className="font-semibold text-[#1A1F3C]">{m.name}</span>
                <span className="text-[#4A5266]"> — {m.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

// ─── 12. Closing ─────────────────────────────────────────────────────────────
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
  { id: 'phase-1', render: () => <PhaseSlide index={0} /> },
  { id: 'phase-2', render: () => <PhaseSlide index={1} /> },
  {
    id: 'phase-3',
    render: () => (
      <PhaseSlide index={2} imageSrc="/images/gregorio-maranon.jpeg" imageLabel="Hospital Gregorio Marañón" />
    ),
  },
  {
    id: 'phase-4',
    render: () => (
      <PhaseSlide index={3} imageSrc="/images/la-paz.jpeg" imageLabel="Hospital La Paz" />
    ),
  },
  { id: 'channels', render: () => <ChannelsSlide /> },
  { id: 'expansion', render: () => <ExpansionSlide /> },
  { id: 'team', render: () => <TeamSlide /> },
  { id: 'closing', render: () => <ClosingSlide /> },
];
