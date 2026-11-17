import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { BadgeCheckIcon, CrosshairIcon, LightbulbIcon, MegaphoneIcon, MousePointerClickIcon, UsersIcon } from 'lucide-react';
import { dataFlow } from '../../data/home';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { EASE } from '../../utils/motion';

const icons = [UsersIcon, LightbulbIcon, CrosshairIcon, MegaphoneIcon, MousePointerClickIcon, BadgeCheckIcon];
const chips = ['Segments', 'Signals', 'Intent', 'Context'];

export function DataDrivenMarketing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="data-driven" className="relative overflow-hidden bg-white py-24 lg:py-36">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <RevealText
            className="display-lg text-ink lg:col-span-7"
            lines={['Data', <span key="m" className="text-brand">that moves</span>, 'marketing.']} />
          
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-body">
              Leverage the power of data to craft personalized campaigns that resonate with your audience. Our analytics-driven approach is built to make every budget work harder.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20 lg:mt-28">
          {/* Floating data chips */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10 hidden h-10 lg:block">
            {chips.map((c, i) =>
            <motion.span
              key={c}
              className="absolute rounded-full border border-line bg-white px-3 py-1 text-[12px] font-semibold text-body shadow-[0_8px_20px_-14px_rgba(23,32,51,0.4)]"
              style={{ left: `${10 + i * 24}%` }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}>
              
                {c}
              </motion.span>
            )}
          </div>

          {/* Desktop horizontal flow */}
          <div className="relative hidden lg:block">
            <svg className="absolute left-0 right-0 top-[44px] h-2 w-full" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden>
              <line x1="0" y1="1" x2="100" y2="1" stroke="#E4E9F2" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <motion.line
                x1="0" y1="1" x2="100" y2="1" stroke="#2563EB" strokeWidth="2" vectorEffect="non-scaling-stroke"
                style={{ pathLength: progress }} />
              
            </svg>
            <ol className="relative grid grid-cols-6 gap-4">
              {dataFlow.map((step, i) =>
              <FlowNode key={step} step={step} index={i} progress={progress} />
              )}
            </ol>
          </div>

          {/* Mobile vertical flow */}
          <ol className="relative lg:hidden">
            <span aria-hidden className="absolute bottom-6 left-7 top-6 w-px bg-line" />
            {dataFlow.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step} delay={i * 0.04}>
                  <li className="relative flex items-center gap-5 py-3">
                    <span className={`relative flex h-14 w-14 items-center justify-center rounded-full border ${i === dataFlow.length - 1 ? 'border-violet bg-violet text-white' : 'border-line bg-white text-brand'}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xl font-bold text-ink">{step}</span>
                  </li>
                </Reveal>);

            })}
          </ol>
        </div>
      </div>
    </section>);

}

function FlowNode({ step, index, progress }: {step: string;index: number;progress: MotionValue<number>;}) {
  const Icon = icons[index];
  const threshold = index / (dataFlow.length - 1);
  const active = useTransform(progress, (v) => v >= threshold - 0.02 ? 1 : 0);
  const bg = useTransform(active, [0, 1], ['#FFFFFF', index === dataFlow.length - 1 ? '#7C3AED' : '#2563EB']);
  const color = useTransform(active, [0, 1], ['#2563EB', '#FFFFFF']);
  return (
    <motion.li
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: EASE, delay: index * 0.05 }}>
      
      <motion.span
        className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-line shadow-[0_18px_40px_-24px_rgba(37,99,235,0.6)]"
        style={{ backgroundColor: bg, color }}>
        
        <Icon className="h-7 w-7" />
      </motion.span>
      <span className="mt-5 text-[11px] font-bold tabular-nums text-muted">0{index + 1}</span>
      <span className="mt-1 text-xl font-bold tracking-tight text-ink">{step}</span>
    </motion.li>);

}