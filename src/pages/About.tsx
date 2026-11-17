import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { Label } from '../components/ui/Label';
import { ArrowButton } from '../components/ui/ArrowButton';
import { AmigoDifference } from '../components/home/AmigoDifference';
import { LocationFinder } from '../components/locations/LocationFinder';
import { FinalCTA } from '../components/home/FinalCTA';
import { images } from '../data/brand';
import { processSteps, cultureValues } from '../data/home';
import { services } from '../data/services';
import { EASE } from '../utils/motion';

export function About() {
  return (
    <>
      <PageHero
        label="About us"
        lines={['We are', 'Amigo', <span key="i" className="text-brand">Interactive.</span>]}
        intro="A digital advertising and marketing company helping brands drive engagement through targeted, data-driven strategies, creative branding and performance-focused execution.">
        
        <ArrowButton to="/services">Explore Services</ArrowButton>
        <ArrowButton to="/contact" variant="secondary">
          Contact Us
        </ArrowButton>
      </PageHero>

      {/* Company information */}
      <section id="company" className="bg-white py-20 lg:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <motion.div
            className="overflow-hidden rounded-[32px] lg:col-span-7"
            initial={{ clipPath: 'inset(8% 8% 8% 8% round 32px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 32px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            data-cursor="view">
            
            <img src={images.editorialTeam} alt="The Amigo Interactive team collaborating" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </motion.div>
          <div className="lg:col-span-5">
            <Label>Company information</Label>
            <RevealText className="display-md mt-6 text-ink" lines={['Unforgettable digital', 'experiences that', <span key="r" className="text-brand">resonate.</span>]} />
            <Reveal delay={0.15}>
              <p className="mt-8 text-lg leading-relaxed text-body">
                Amigo Interactive partners with brands, advertisers and publishers to craft digital experiences that resonate with their audiences. We combine mobile advertising, affiliate partnerships, SEO, brand strategy, video and content into strategies tailored to each client’s goals.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-body">
                From iGaming platforms looking to grow their player base to brands seeking a distinctive identity, our work is grounded in data and driven by creativity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <AmigoDifference />

      {/* How we work */}
      <section id="how" className="bg-white py-24 lg:py-36">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <RevealText className="display-lg text-ink lg:col-span-7" lines={['How', <span key="w" className="text-brand">we work.</span>]} />
            <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg leading-relaxed text-body">Our approach to strategy, creativity, technology and performance — five steps, one continuous loop.</p>
            </Reveal>
          </div>
          <ol className="relative mt-16 grid gap-0 lg:mt-24 lg:grid-cols-5">
            <motion.span
              aria-hidden
              className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-brand lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE }} />
            
            {processSteps.map((s, i) =>
            <Reveal key={s.title} delay={0.1 + i * 0.06}>
                <li className="relative border-l border-line pb-10 pl-8 lg:border-l-0 lg:pb-0 lg:pl-0 lg:pr-8">
                  <span
                  className={`absolute -left-[12px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white lg:static ${
                  i === processSteps.length - 1 ? 'border-violet' : 'border-brand'}`
                  }>
                  
                    <span className={`h-2 w-2 rounded-full ${i === processSteps.length - 1 ? 'bg-violet' : 'bg-brand'}`} />
                  </span>
                  <p className="mt-0 text-xs font-bold tabular-nums text-muted lg:mt-8">0{i + 1}</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight text-ink">{s.title}</p>
                  <p className="mt-3 text-base leading-relaxed text-body">{s.text}</p>
                </li>
              </Reveal>
            )}
          </ol>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-sky py-24 lg:py-32">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText className="display-md text-ink" lines={['What', <span key="w" className="text-brand">we do.</span>]} />
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-body">Tailored digital strategies to elevate your brand and maximize your online presence.</p>
            </Reveal>
          </div>
          <ul className="grid border-t border-ink/10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {services.map((s, i) =>
            <li key={s.slug} className="border-b border-ink/10 sm:odd:pr-6 sm:even:pl-6">
                <Link to={`/services/${s.slug}`} className="group flex items-center justify-between gap-4 py-5" data-cursor="explore">
                  <span className="flex items-baseline gap-3">
                    <span className="text-xs font-bold tabular-nums text-brand">0{i + 1}</span>
                    <span className="text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">{s.title}</span>
                  </span>
                  <ArrowRightIcon aria-hidden className="h-4 w-4 shrink-0 text-muted transition-[transform,color] group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="bg-white py-24 lg:py-32">
        <div className="container-site">
          <LocationFinder
            heading={
            <div>
                <Label>Our locations</Label>
                <RevealText className="display-md mt-6 text-ink" lines={['Where we', <span key="o" className="text-brand">operate.</span>]} />
              </div>
            } />
          
        </div>
      </section>

      {/* Culture */}
      <section className="bg-lavender py-24 lg:py-32">
        <div className="container-site">
          <Label tone="violet">Culture</Label>
          <ul className="mt-10">
            {cultureValues.map((v, i) =>
            <Reveal key={v.title} delay={i * 0.04}>
                <li className="group flex flex-col justify-between gap-2 border-b border-violet/15 py-6 sm:flex-row sm:items-baseline">
                  <span className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-[-0.045em] text-ink transition-colors duration-200 group-hover:text-violet">
                    {v.title}
                  </span>
                  <span className="max-w-xs text-base text-body sm:text-right">{v.text}</span>
                </li>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <div className="py-6">
        <FinalCTA />
      </div>
    </>);

}