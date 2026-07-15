'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES } from './slideViews';

export default function DeckPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const total = SLIDES.length;

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDirection(clamped >= index ? 1 : -1);
      setIndex(clamped);
    },
    [index, total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        goTo(0);
      } else if (e.key === 'End') {
        goTo(total - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, goTo, total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <main
      className="fixed inset-0 bg-white overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-[#F5F0E8]">
        <motion.div
          className="h-full bg-[#1F4C9C]"
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Slide area */}
      <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={SLIDES[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="h-full w-full"
          >
            {SLIDES[index].render()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Click zones */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute inset-y-0 left-0 z-20 w-1/4 cursor-w-resize focus:outline-none"
        tabIndex={-1}
      />
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute inset-y-0 right-0 z-20 w-1/2 cursor-e-resize focus:outline-none"
        tabIndex={-1}
      />

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-3 text-sm font-medium text-[#6B7689]">
          <span className="font-bold text-[#1A1F3C]">FixedGap</span>
          <span className="text-[#E8E0D0]">·</span>
          <span>Go-To-Market</span>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-[#1F4C9C]' : 'w-2 bg-[#E8E0D0] hover:bg-[#6B7689]'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm tabular-nums text-[#6B7689]">
            {index + 1} / {total}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous"
              className="rounded-full border border-[#E8E0D0] p-2 text-[#1A1F3C] transition hover:bg-[#F5F0E8] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              disabled={index === total - 1}
              aria-label="Next"
              className="rounded-full border border-[#E8E0D0] p-2 text-[#1A1F3C] transition hover:bg-[#F5F0E8] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
