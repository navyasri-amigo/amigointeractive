
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealText } from '../ui/RevealText';
import { ArrowButton } from '../ui/ArrowButton';
import { EASE } from '../../utils/motion';

const pillars = [
  'Digital Advertising',
  'Data',
  'Creativity',
  'Performance',
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
    className="relative isolate flex min-h-[680px] flex-col overflow-hidden bg-[#061536] pb-8 pt-28 sm:min-h-[750px] lg:min-h-[100svh] lg:pb-10 lg:pt-44"
    >
      {/* Background Video - Desktop, Android and iOS */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        disablePictureInPicture
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/vdd.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#061536]/35 via-transparent to-[#061536]/10" />

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/4 bg-gradient-to-t from-[#061536]/60 to-transparent" />

      {/* Hero Content */}
      <div className="container-site relative z-10 grid flex-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">

          {/* Service Pillars */}
          <motion.ul
            className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-semibold text-white"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: EASE,
              delay: 0.25,
            }}
            aria-label="What Amigo Interactive brings together"
          >
            {pillars.map((p, i) => (
              <li
                key={p}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                {i > 0 && (
                  <span aria-hidden className="text-purple-400">
                    +
                  </span>
                )}
                {p}
              </li>
            ))}
          </motion.ul>

          {/* Main Heading */}
          <RevealText
            as="h1"
            immediate
            delay={0.35}
            className="display-xl mt-7 text-white"
            lines={[
              'Drive',
              <span key="e" className="text-[#D6E9FF]">
                engagement
              </span>,
              <span key="f" className="text-[#B9D8FF]">
                effortlessly.
              </span>,
            ]}
          />

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: EASE,
              delay: 0.9,
            }}
          >
            <ArrowButton to="/advertiser-signup" size="lg">
              Start for Free
            </ArrowButton>

            <ArrowButton
              to="/services"
              size="lg"
              variant="secondary"
            >
              Explore Our Solutions
            </ArrowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
