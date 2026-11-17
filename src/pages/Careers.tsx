import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { Label } from '../components/ui/Label';
import { ArrowButton } from '../components/ui/ArrowButton';
import { images } from '../data/brand';
import { careersSections } from '../data/megaMenu';
import { cultureValues, lifeAtAmigo } from '../data/home';
import { EASE } from '../utils/motion';

export function Careers() {
  return (
    <>
      <PageHero
        label="Careers"
        lines={['Build', <span key="n">what’s <span className="text-brand">next.</span></span>]}
        intro="Join a team combining creativity, technology, data and marketing to build meaningful digital experiences."
        aside={
        <motion.div
          className="overflow-hidden rounded-[32px]"
          initial={{ clipPath: 'inset(6% 6% 6% 6% round 32px)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 32px)', opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          data-cursor="view">
          
            <img src={images.careersCulture} alt="Team brainstorming at a whiteboard" className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]" />
          </motion.div>
        }>
        
        <ArrowButton to="#positions">View Careers</ArrowButton>
      </PageHero>

      {/* Why Amigo */}
      <section id="why" className="bg-white py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>Why Amigo</Label>
          </div>
          <Reveal className="lg:col-span-8">
            <p className="text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-ink">
              {careersSections.why}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Life at Amigo */}
      <section id="life" className="bg-sky py-24 lg:py-32">
        <div className="container-site">
          <RevealText className="display-md text-ink" lines={['Life at', <span key="a" className="text-brand">Amigo.</span>]} />
          <ol className="mt-14 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {lifeAtAmigo.map((l, i) =>
            <Reveal key={l.title} delay={i * 0.06}>
                <li className={`h-full border-b border-ink/10 py-8 sm:pr-8 lg:border-b-0 ${i > 0 ? 'lg:border-l lg:pl-8' : ''}`}>
                  <p className="text-xs font-bold tabular-nums text-brand">0{i + 1}</p>
                  <p className="mt-4 text-3xl font-extrabold tracking-tight text-ink">{l.title}</p>
                  <p className="mt-3 text-base leading-relaxed text-body">{l.text}</p>
                </li>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="bg-white py-24 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label tone="violet">Our culture</Label>
            <p className="mt-8 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink">
              Create.
              <br />
              <span className="text-brand">Collaborate.</span>
              <br />
              <span className="text-violet">Grow.</span>
            </p>
          </div>
          <ul className="lg:col-span-8">
            {cultureValues.map((v, i) =>
            <Reveal key={v.title} delay={i * 0.04}>
                <li className="group flex flex-col justify-between gap-2 border-b border-line py-6 sm:flex-row sm:items-baseline">
                  <span className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-none tracking-[-0.045em] text-ink transition-colors duration-200 group-hover:text-brand">
                    {v.title}
                  </span>
                  <span className="max-w-xs text-base text-body sm:text-right">{v.text}</span>
                </li>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      {/* Open positions */}
      <section id="positions" className="px-3 pb-10 sm:px-5">
        <div className="relative mx-auto max-w-site overflow-hidden rounded-[36px] bg-lavender px-6 py-20 sm:px-12 lg:px-16 lg:py-24">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Label tone="violet">Open positions</Label>
              <RevealText className="display-md mt-6 text-ink" lines={['Current', <span key="o" className="text-violet">opportunities.</span>]} />
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="rounded-[24px] border border-white bg-white p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-tint text-violet">
                  <BriefcaseIcon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-xl font-extrabold tracking-tight text-ink">No open positions are listed right now.</p>
                <p className="mt-2 text-base leading-relaxed text-body">
                  We’re always glad to hear from curious, driven people. Introduce yourself and tell us what you’d love to build.
                </p>
                <div className="mt-6">
                  <ArrowButton to="/contact">Introduce Yourself</ArrowButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>);

}