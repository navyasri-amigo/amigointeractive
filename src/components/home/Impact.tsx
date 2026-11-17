import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { impactMetrics } from '../../data/home';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { EASE } from '../../utils/motion';

export function Impact() {
  const [active, setActive] = useState(impactMetrics.length - 1);
  const metric = impactMetrics[active];

  return (
    <section className="relative bg-white py-24 lg:py-36">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <RevealText className="display-lg text-ink" lines={['Engagement', <span key="p" className="text-violet">with purpose.</span>]} />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-body">
              Every campaign is planned around the outcomes that matter to you — from first reach to lasting growth.
            </p>
          </Reveal>
          <div className="mt-10 min-h-[96px] border-l-2 border-brand pl-6" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: EASE }}>
                
                <p className="text-2xl font-extrabold tracking-tight text-ink">{metric.label}</p>
                <p className="mt-2 text-base text-body">{metric.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative rounded-[32px] border border-line bg-canvas p-6 sm:p-10">
            <div aria-hidden className="bg-grid absolute inset-0 rounded-[32px] opacity-60" />
            <div className="relative flex h-[340px] items-end gap-3 sm:h-[400px] sm:gap-5">
              {impactMetrics.map((m, i) => {
                const isOn = i === active;
                return (
                  <button
                    key={m.label}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isOn}
                    className="group flex h-full flex-1 flex-col items-center justify-end">
                    
                    <motion.span
                      className={`w-full rounded-t-[18px] transition-colors duration-200 ${
                      isOn ? i === impactMetrics.length - 1 ? 'bg-violet' : 'bg-brand' : 'bg-brand-tint group-hover:bg-[#C9DBFF]'}`
                      }
                      initial={{ height: 0 }}
                      whileInView={{ height: `${m.level * 82}%` }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.06 }} />
                    
                    <span className={`mt-4 whitespace-nowrap text-[12px] font-bold sm:text-sm ${isOn ? 'text-ink' : 'text-muted'}`}>
                      {m.label}
                    </span>
                  </button>);

              })}
            </div>
          </div>
          <p className="mt-4 text-[13px] text-muted">Illustrative view — every campaign is measured against its own goals.</p>
        </div>
      </div>
    </section>);

}