import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { EASE } from '../../utils/motion';

const tints = ['#F2F7FF', '#F5F2FF', '#EFFBF7'];
const GAP = 24;

export function TestimonialCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const n = testimonials.length;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setInterval(next, 6500);
    return () => window.clearInterval(t);
  }, [paused, reduce, next]);

  const slideW = width >= 900 ? width * 0.6 : width * 0.88;
  const x = (width - slideW) / 2 - index * (slideW + GAP);

  return (
    <motion.div
      className="relative py-16 lg:py-20"
      animate={{ backgroundColor: tints[index % tints.length] }}
      transition={{ duration: 0.5, ease: EASE }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}>
      
      <div
        ref={viewportRef}
        className="overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') next();
          if (e.key === 'ArrowLeft') prev();
        }}>
        
        {width > 0 &&
        <motion.div
          className="flex cursor-grab touch-pan-y active:cursor-grabbing"
          style={{ gap: GAP }}
          animate={{ x }}
          transition={{ type: 'spring', stiffness: 260, damping: 34 }}
          drag="x"
          dragConstraints={{ left: x, right: x }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60 || info.velocity.x < -500) next();else
            if (info.offset.x > 60 || info.velocity.x > 500) prev();
          }}>
          
            {testimonials.map((t, i) => {
            const isActive = i === index;
            return (
              <motion.article
                key={t.handle}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}`}
                aria-hidden={!isActive}
                onClick={() => setIndex(i)}
                className="flex shrink-0 select-none flex-col rounded-[28px] border border-white bg-white p-8 shadow-[0_30px_70px_-40px_rgba(23,32,51,0.35)] sm:p-12 lg:p-14"
                style={{ width: slideW, minHeight: 380 }}
                animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.94 }}
                transition={{ duration: 0.3, ease: EASE }}>
                
                  <span aria-hidden className="text-[96px] font-extrabold leading-[0.6] text-brand">“</span>
                  <blockquote className="mt-6 text-base font-normal italic leading-relaxed tracking-wide text-ink sm:text-lg lg:text-xl">
  {t.quote}
</blockquote>
                  <footer className="mt-auto flex items-center gap-4 pt-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-deep text-sm font-extrabold text-brand">
                      {t.name.
                    split(' ').
                    map((p) => p[0]).
                    join('')}
                    </span>
                    <span>
                      <span className="block text-base font-bold text-ink">{t.name}</span>
                      <span className="block text-sm text-muted">{t.handle}</span>
                    </span>
                  </footer>
                </motion.article>);

          })}
          </motion.div>
        }
      </div>

      <div className="container-site mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold tabular-nums text-ink">
            {String(index + 1).padStart(2, '0')} <span className="text-muted">/ {String(n).padStart(2, '0')}</span>
          </span>
          <div className="hidden gap-1.5 sm:flex" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((t, i) =>
            <button
              key={t.handle}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${i === index ? 'w-8 bg-brand' : 'w-3 bg-ink/15 hover:bg-ink/30'}`} />

            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition-[color,border-color,transform] duration-200 hover:border-brand/40 hover:text-brand active:scale-95">
            
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-[background-color,transform] duration-200 hover:bg-brand-dark active:scale-95">
            
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>);

}