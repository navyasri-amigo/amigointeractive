
import React from 'react';
import { Hero } from '../components/home/Hero';
import { PartnerMarquee } from '../components/home/PartnerMarquee';
import { ServicesExperience } from '../components/services/ServicesExperience';
// import { IGaming } from '../components/home/IGaming';
import { DataDrivenMarketing } from '../components/home/DataDrivenMarketing';
import { CreativeBranding } from '../components/home/CreativeBranding';
import { Impact } from '../components/home/Impact';

import { OurTeam } from '../components/home/OurTeam';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { FinalCTA } from '../components/home/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <PartnerMarquee />
      <ServicesExperience />

      {/* Optional iGaming section */}
      {/* <IGaming /> */}

      <DataDrivenMarketing />
      <CreativeBranding />
      <Impact />

      {/* Our Team */}
      <OurTeam />

      {/* Client testimonials */}
      <TestimonialsSection />

      {/* Final call to action */}
      <FinalCTA />
    </>
  );
}