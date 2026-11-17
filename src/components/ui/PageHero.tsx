import React from 'react';
import { RevealText } from './RevealText';
import { Reveal } from './Reveal';
import { Label } from './Label';

type PageHeroProps = {
  label: string;
  lines: React.ReactNode[];
  intro?: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
  tone?: 'white' | 'sky' | 'lavender';
};

const tones = {
  white: 'bg-white',
  sky: 'bg-sky',
  lavender: 'bg-lavender'
};

export function PageHero({ label, lines, intro, children, aside, tone = 'white' }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden pb-16 pt-36 lg:pb-24 lg:pt-52 ${tones[tone]}`}>
      <div aria-hidden className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-80" />
      <div className="container-site relative grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal immediate delay={0.05}>
            <Label>{label}</Label>
          </Reveal>
          <RevealText as="h1" immediate delay={0.12} lines={lines} className="display-xl mt-6 text-ink" />
        </div>
        {(intro || children) &&
        <Reveal immediate delay={0.4} className="lg:col-span-4">
            {intro && <p className="text-lg leading-relaxed text-body">{intro}</p>}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </Reveal>
        }
      </div>
      {aside && <div className="container-site relative mt-16">{aside}</div>}
    </section>);

}