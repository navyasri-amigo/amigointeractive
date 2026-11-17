import React from 'react';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowButton } from '../ui/ArrowButton';

export function ReadyToGrow() {
  return (
    <section className="px-3 py-6 sm:px-5">
      <div className="relative mx-auto grid max-w-site gap-10 overflow-hidden rounded-[36px] bg-sky px-6 py-20 sm:px-12 lg:grid-cols-12 lg:items-end lg:px-16 lg:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative lg:col-span-7">
          <RevealText className="display-lg text-ink" lines={['Ready', <span key="g" className="text-brand">to grow?</span>]} />
        </div>
        <Reveal delay={0.15} className="relative lg:col-span-5">
          <p className="text-xl leading-relaxed text-body">Let’s build a digital strategy designed around your goals.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowButton to="/advertiser-signup" size="lg">
              Advertiser Signup
            </ArrowButton>
            <ArrowButton to="/contact" size="lg" variant="secondary">
              Contact Us
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>);

}