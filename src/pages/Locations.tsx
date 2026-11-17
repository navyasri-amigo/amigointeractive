
import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { LocationFinder } from '../components/locations/LocationFinder';
import { Reveal } from '../components/ui/Reveal';
import { Label } from '../components/ui/Label';
import { ContactSection } from '../components/contact/ContactSection';

const offices = [
  {
    id: 'india',
    title: 'Amigo Interactive Inc',
    location: 'India Office',
    address:
      'First Floor, Dwaraka Summit, Plot no. 83, Kavuri Hills, Jubilee Hills, Hyderabad, Telangana 500033',
  },
  {
    id: 'usa',
    title: 'Amigo Interactive Inc',
    location: 'USA Office',
    address:
      '16192 Coastal Highway, Lewes, Delaware 19958, USA',
  },
];

export function Locations() {
  return (
    <>
      <PageHero
        label="Office locations"
        lines={[
          'Our',
          <span key="l" className="text-brand">
            locations.
          </span>,
        ]}
        intro="Connect with Amigo Interactive. Find our offices in India and the USA."
      />

      <section
        className="bg-white pb-24 lg:pb-32"
        aria-label="Location finder"
      >
        <div className="container-site">
          <LocationFinder />
        </div>
      </section>

      <section
        className="border-y border-line bg-canvas py-20 lg:py-24"
        aria-label="Office addresses"
      >
        <div className="container-site grid min-w-0 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>Our offices</Label>
          </div>

          <ul className="grid min-w-0 gap-10 sm:grid-cols-2 lg:col-span-8">
            {offices.map((office, index) => (
              <Reveal key={office.id} delay={index * 0.05}>
                <li className="min-w-0">
                  <p className="text-xl font-extrabold tracking-tight text-ink">
                    {office.title}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-brand">
                    {office.location}
                  </p>

                  <p className="mt-2 max-w-full whitespace-normal break-words text-[15px] leading-7 text-body">
                    {office.address}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}