import React from 'react';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowLink } from '../ui/ArrowLink';
import { FeaturedTestimonial } from './FeaturedTestimonial';
import { TestimonialCarousel } from './TestimonialCarousel';

export function TestimonialsSection() {
  return (
    <section className="bg-white pt-24 lg:pt-36" aria-labelledby="testimonials-heading">
      <div className="container-site grid gap-8 lg:grid-cols-12 lg:items-end">
        <div id="testimonials-heading" className="lg:col-span-7">
          <RevealText className="display-lg text-ink" lines={['What our clients', <span key="s" className="text-brand">are saying.</span>]} />
        </div>
        <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-relaxed text-body">Real perspectives from the brands and partners we work with.</p>
          <ArrowLink to="/testimonials" className="mt-5">
            All testimonials
          </ArrowLink>
        </Reveal>
      </div>
      <FeaturedTestimonial />
      <TestimonialCarousel />
    </section>);

}