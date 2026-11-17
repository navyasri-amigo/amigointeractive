import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { RevealText } from '../components/ui/RevealText';
import { FeaturedTestimonial } from '../components/testimonials/FeaturedTestimonial';
import { TestimonialCarousel } from '../components/testimonials/TestimonialCarousel';
import { ConversionPanels } from '../components/home/ConversionPanels';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <>
      <PageHero
        label="Testimonials"
        lines={['What our clients', <span key="s" className="text-brand">are saying.</span>]}
        intro="Discover how Amigo Interactive has transformed our clients’ digital experiences — in their own words." />
      

      <section className="bg-white">
        <FeaturedTestimonial index={0} />
      </section>

      <TestimonialCarousel />

      {/* Client stories */}
      <section className="bg-white py-24 lg:py-32" aria-labelledby="stories-heading">
        <div className="container-site">
          <div id="stories-heading">
            <RevealText className="display-md text-ink" lines={['Client', <span key="v" className="text-violet">stories.</span>]} />
          </div>
          <ul className="mt-16 grid gap-x-16 md:grid-cols-2">
            {testimonials.map((t, i) =>
            <Reveal key={t.handle} delay={i % 2 * 0.08} className={i % 2 === 1 ? 'md:mt-24' : ''}>
                <li className="border-t border-line py-12">
                  <span aria-hidden className="block text-6xl font-extrabold leading-[0.6] text-brand">“</span>
                  <blockquote className="mt-6 text-2xl font-bold leading-snug tracking-tight text-ink lg:text-[1.75rem]">{t.quote}</blockquote>
                  <p className="mt-8 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-deep text-xs font-extrabold text-brand">
                      {t.name.
                    split(' ').
                    map((p) => p[0]).
                    join('')}
                    </span>
                    <span>
                      <span className="block font-bold text-ink">{t.name}</span>
                      <span className="block text-sm text-muted">{t.handle}</span>
                    </span>
                  </p>
                </li>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <ConversionPanels />
    </>);

}