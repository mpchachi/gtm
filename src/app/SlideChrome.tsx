'use client';

import { motion } from 'framer-motion';

function cx(...classes: (string | false | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function Slide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        'w-full h-full flex flex-col justify-center px-8 py-16 sm:px-16 lg:px-28',
        className
      )}
    >
      {children}
    </div>
  );
}

/** Small overline label — phase window or section name. Plain, no pill. */
export function Overline({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-sm font-medium text-[#1F4C9C] mb-3"
    >
      {children}
    </motion.div>
  );
}

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05 }}
      className={cx(
        'text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#1A1F3C] leading-[1.12]',
        className
      )}
    >
      {children}
    </motion.h2>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.12 }}
      className="mt-5 max-w-3xl text-lg sm:text-xl text-[#4A5266] leading-relaxed"
    >
      {children}
    </motion.p>
  );
}

export function StaggerList({ children }: { children: React.ReactNode }) {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
      }}
      className="mt-8 space-y-4 max-w-3xl"
    >
      {children}
    </motion.ul>
  );
}

/** Editorial bullet: a thin rule + text, no check icons. */
export function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.35 }}
      className="border-l-2 border-[#1F4C9C]/30 pl-4 text-base sm:text-lg text-[#1A1F3C] leading-snug"
    >
      {children}
    </motion.li>
  );
}
