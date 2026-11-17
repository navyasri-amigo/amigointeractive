import React from 'react';
import { ContactSection } from '../components/contact/ContactSection';
import { Reveal } from '../components/ui/Reveal';
import { Label } from '../components/ui/Label';

const business = [
  {
    title: 'General inquiries',
    text: 'Use the form above — our team reviews every message and responds directly.',
  },
];

export function Contact() {
  return (
    <>
      <ContactSection asPage />

      <section
        className="border-y border-line bg-canvas py-20 lg:py-24"
        aria-label="Business information"
      >
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>Business information</Label>
          </div>

          <ul className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {business.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <li>
                  <p className="text-xl font-extrabold tracking-tight text-ink">
                    {b.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">
                    {b.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}