import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ArrowButton } from '../components/ui/ArrowButton';
import { ServicesExperience } from '../components/services/ServicesExperience';
import { AmigoDifference } from '../components/home/AmigoDifference';
import { serviceCategories } from '../data/serviceCategories';

export function Services() {
  return (
    <>
      <PageHero
        label="What we do"
        lines={['What', <span key="w" className="text-brand">we do.</span>]}
        intro="Connecting creativity, technology, data and marketing to create meaningful digital experiences and measurable growth.">
        
        <ArrowButton to="/contact" variant="secondary">
          Talk to Our Team
        </ArrowButton>
      </PageHero>

      {/* Overview */}
      <section className="border-y border-line bg-canvas py-16 lg:py-20" aria-label="Service categories">
        <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {serviceCategories.map((cat, i) =>
          <Reveal key={cat.id} delay={i * 0.05} className={`lg:px-8 ${i > 0 ? 'lg:border-l lg:border-line' : 'lg:pl-0'}`}>
              <p className="text-xs font-bold tabular-nums text-brand">0{i + 1}</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">{cat.title}</h2>
              <p className="mt-2 text-sm text-body">{cat.summary}</p>
              <ul className="mt-5 space-y-2">
                {cat.items.map((item) =>
              <li key={item.title}>
                    <Link to={item.to} className="text-[15px] text-body transition-colors hover:text-brand">
                      {item.title}
                    </Link>
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      <ServicesExperience
        headingLines={['Tailored', <span key="d" className="text-brand">digital strategies.</span>]}
        showAllLink={false} />
      

      <AmigoDifference />

      
    </>);

}