import React from 'react';
import { motion } from 'framer-motion';
import { differencePillars } from '../../data/home';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { EASE } from '../../utils/motion';

const accents = ['text-brand', 'text-violet', 'text-ink'];

export function AmigoDifference() {
  return (
    <section className="relative overflow-hidden bg-sky py-24 lg:py-36">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-40">
            <RevealText
              lines={['Discover', 'the Amigo', <span key="d" className="text-brand">difference.</span>]}
              className="display-lg text-ink" />
            
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-body">
                Partner with us to craft unforgettable digital experiences that resonate with your audience.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {differencePillars.map((p, i) =>
          <li key={p.title} className="relative py-10 first:pt-0 lg:py-14">
              <motion.span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px origin-left bg-ink/15"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE }} />
            
              <motion.div
              className="grid grid-cols-12 items-baseline gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.05 }}>
              
                <span className="col-span-2 text-sm font-bold tabular-nums text-muted">{p.n}</span>
                <div className="col-span-10">
<h3 className={`text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] ${accents[i]}`}>                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-md text-xl leading-relaxed text-body">{p.text}</p>
                </div>
              </motion.div>
            </li>
          )}
        </ol>
      </div>
    </section>);

}