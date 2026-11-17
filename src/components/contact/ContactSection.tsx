
import React from 'react';
import { contactFields } from '../../data/forms';
import { InquiryForm } from '../forms/InquiryForm';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { Label } from '../ui/Label';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

type ContactSectionProps = {
  asPage?: boolean;
};

const services = [
  'AI solutions and integration',
  'Intelligent automation',
  'AI-powered digital experiences',
];

export function ContactSection({ asPage = false }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-white ${
        asPage ? 'pb-24 pt-28 lg:pb-32 lg:pt-36' : 'py-20 lg:py-28'
      }`}
    >
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />

      <div className="container-site relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">
            <Reveal immediate={asPage}>
              <Label>CONTACT US</Label>
            </Reveal>

            <RevealText
              as={asPage ? 'h1' : 'h2'}
              immediate={asPage}
              delay={0.1}
              className={`${
                asPage
                  ? 'text-5xl sm:text-6xl lg:text-7xl'
                  : 'text-4xl sm:text-5xl lg:text-6xl'
              } mt-7 font-semibold leading-[0.98] tracking-[-0.055em] text-ink`}
              lines={[
                'Let’s create',
                'something',
                <span key="ai" className="text-brand">
                  extraordinary.
                </span>,
              ]}
            />

            <Reveal delay={0.15} immediate={asPage}>
              <p className="mt-8 max-w-lg text-base leading-8 text-body sm:text-lg">
                Have an idea, a challenge, or a vision for your business?
                Let’s turn it into a digital experience that makes an impact.
              </p>
            </Reveal>

            {/* Services */}
            <Reveal delay={0.2} immediate={asPage}>
              <div className="mt-10 max-w-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Sparkles size={19} />
                  </div>
                  <p className="text-sm font-semibold text-ink">
                    How we can help
                  </p>
                </div>

                <ul className="mt-6 space-y-4">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-3 text-sm text-body sm:text-base"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Contact CTA */}
            <Reveal delay={0.25} immediate={asPage}>
              <div className="mt-10 inline-flex items-center gap-3 border-t border-line pt-6 text-sm font-medium text-body">
                Let’s bring your vision to life
                <ArrowRight className="h-4 w-4 text-brand" />
              </div>
            </Reveal>
          </div>

          {/* RIGHT FORM */}
          <Reveal
            delay={0.15}
            immediate={asPage}
            className="lg:col-span-7 min-w-0"
          >
            <div className="relative rounded-3xl border border-line bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-9 lg:p-10">

              {/* Form Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  START A PROJECT
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Tell us what you have in mind.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-body sm:text-base">
                  Share a few details about your project. Our team will
                  connect with you to explore the possibilities.
                </p>
              </div>

              {/* Existing Form */}
              <InquiryForm
                formId={asPage ? 'contact-page' : 'contact-home'}
                fields={contactFields}
                submitLabel="Send Message"
                successText="Thank you for contacting Amigo Interactive. Our team will review your inquiry and get back to you."
              />

              {/* Privacy */}
              <div className="mt-7 border-t border-line pt-5">
                <p className="text-center text-xs leading-6 text-muted">
                  Your information is kept private and used only to respond
                  to your inquiry.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
