import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { LightbulbIcon, MousePointerClickIcon, RadarIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';
import { attentionStages } from '../../data/home';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { EASE } from '../../utils/motion';

const icons = [RadarIcon, MousePointerClickIcon, LightbulbIcon, TargetIcon, TrendingUpIcon];

export function AttentionToAction() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(attentionStages.length - 1, Math.floor(v * attentionStages.length));
    setActive((prev) => prev === next ? prev : next);
  });
  const bg = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['#FFFFFF', '#F2F7FF', '#F5F2FF', '#EFFBF7', '#F2F7FF']);
  const stage = attentionStages[active];
  const Icon = icons[active];

  const heading =
  <RevealText
    className="display-lg text-ink"
    lines={['From', <span key="a" className="text-brand">attention</span>, <span key="t">to <span className="text-violet">action.</span></span>]} />;



  return (
    <section aria-label="From attention to action">
      {/* Desktop sticky storytelling */}
      <div ref={ref} className="relative hidden h-[420vh] lg:block">
        <motion.div style={{ backgroundColor: bg }} className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="container-site grid grid-cols-12 items-center gap-12">
            <div className="col-span-5">
              {heading}
              <ol className="relative mt-12 pl-6">
                <span aria-hidden className="absolute bottom-1 left-0 top-1 w-px bg-ink/10" />
                <motion.span aria-hidden className="absolute left-0 top-1 w-px origin-top bg-brand" style={{ height: 'calc(100% - 8px)', scaleY: scrollYProgress }} />
                {attentionStages.map((s, i) =>
                <li key={s.title} className="flex items-baseline gap-4 py-2">
                    <span className={`text-xs font-bold tabular-nums transition-colors duration-200 ${i === active ? 'text-brand' : 'text-muted'}`}>{s.n}</span>
                    <span className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${i === active ? 'text-ink' : 'text-ink/25'}`}>{s.title}</span>
                  </li>
                )}
              </ol>
            </div>

            <div className="relative col-span-7 h-[520px]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4, ease: EASE }}>
                  
                  <StageOrb Icon={Icon} index={active} />
<p className="mt-10 text-[clamp(3rem,6vw,6rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.06em] text-ink">                    {stage.title}
                    <span className="text-brand">.</span>
                  </p>
                  <p className="mt-6 max-w-lg text-xl leading-relaxed text-body">{stage.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile stacked */}
      <div className="bg-sky py-24 lg:hidden">
        <div className="container-site">
          {heading}
          <ol className="mt-12 border-t border-ink/10">
            {attentionStages.map((s, i) => {
              const StageIcon = icons[i];
              return (
                <Reveal key={s.title} delay={i * 0.04}>
                  <li className="flex gap-5 border-b border-ink/10 py-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                      <StageIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold tabular-nums text-brand">{s.n}</p>
<p className="text-xl font-extrabold tracking-tight text-ink">{s.title}</p>
                      <p className="mt-1 text-base leading-relaxed text-body">{s.text}</p>
                    </div>
                  </li>
                </Reveal>);

            })}
          </ol>
        </div>
      </div>
    </section>);

}

function StageOrb({ Icon, index }: {Icon: typeof RadarIcon;index: number;}) {
  return (
    <div className="relative h-40 w-40" aria-hidden>
      {[0, 1, 2].map((r) =>
      <motion.span
        key={r}
        className="absolute rounded-full border border-brand/20"
        style={{ inset: -r * 22 }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1 - r * 0.25, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.05 + r * 0.06 }} />

      )}
      {Array.from({ length: index + 1 }).map((_, d) =>
      <span
        key={d}
        className="absolute h-2.5 w-2.5 rounded-full bg-violet"
        style={{
          left: `${50 + 62 * Math.cos(d / 5 * Math.PI * 2 - Math.PI / 2)}%`,
          top: `${50 + 62 * Math.sin(d / 5 * Math.PI * 2 - Math.PI / 2)}%`,
          transform: 'translate(-50%, -50%)'
        }} />

      )}
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-brand text-white shadow-[0_30px_60px_-24px_rgba(37,99,235,0.7)]">
        <Icon className="h-14 w-14" strokeWidth={1.6} />
      </div>
    </div>);

}