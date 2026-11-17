import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowButton } from '../ui/ArrowButton';

export function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="px-3 py-6 sm:px-5" aria-labelledby="final-cta-heading">
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-deep via-[#EEF1FF] to-lavender px-6 py-24 text-center sm:px-12 lg:py-32">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <motion.svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute -left-16 -top-16 h-72 w-72"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
          
          <circle cx="100" cy="100" r="90" fill="none" stroke="#2563EB" strokeOpacity="0.18" strokeDasharray="3 8" />
          <circle cx="100" cy="10" r="5" fill="#2563EB" />
        </motion.svg>
        <motion.svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute -bottom-20 -right-10 h-80 w-80"
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}>
          
          <circle cx="100" cy="100" r="90" fill="none" stroke="#7C3AED" strokeOpacity="0.2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#7C3AED" strokeOpacity="0.12" />
          <circle cx="190" cy="100" r="6" fill="#7C3AED" />
        </motion.svg>

        <div className="relative mx-auto max-w-4xl">
          <div id="final-cta-heading">
  <RevealText
    className="display-lg text-ink"
    lines={[
      'Your next level of',
      <span key="p">
        <span className="text-brand">growth</span> starts here.
      </span>,
    ]}
  />
</div>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-body">
              Sign up with Amigo Interactive today and let’s create a strategy that drives real results.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ArrowButton to="/contact" size="lg">
                Contact Our Team
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}