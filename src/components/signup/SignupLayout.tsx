import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Logo } from '../Logo';
import { Label } from '../ui/Label';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { FlowVisual } from '../ui/FlowVisual';

type SignupLayoutProps = {
  label: string;
  titleLines: React.ReactNode[];
  supporting: string;
  flow: string[];
  benefitsTitle: string;
  benefits: {title: string;text: string;}[];
  formTitle: string;
  formIntro: string;
  form: React.ReactNode;
  tone: 'brand' | 'violet';
};

export function SignupLayout({ label, titleLines, supporting, flow, benefitsTitle, benefits, formTitle, formIntro, form, tone }: SignupLayoutProps) {
  return (
    <div className="relative min-h-screen bg-white">
      <div aria-hidden className={`absolute inset-y-0 left-0 hidden w-1/2 lg:block ${tone === 'brand' ? 'bg-sky' : 'bg-lavender'}`} />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 opacity-60 lg:block" />

      <header className="relative z-10">
        <div className="container-site flex h-20 items-center justify-between lg:h-24">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              aria-label="Back to website"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink sm:hidden">
              
              <ArrowLeftIcon className="h-4 w-4" />
            </Link>
            <Link to="/" aria-label="Amigo Interactive — home">
              <Logo size="md" />
            </Link>
          </div>
          <Link to="/" className="group hidden items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand sm:inline-flex">
            Back to Website
            <ArrowRightIcon aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </header>

      <div className="container-site relative grid gap-12 pb-24 pt-8 lg:grid-cols-2 lg:gap-0 lg:pt-12">
        <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 lg:pr-16">
          <Reveal immediate delay={0.05}>
            <Label tone={tone}>{label}</Label>
          </Reveal>
          <RevealText as="h1" immediate delay={0.12} lines={titleLines} className="display-lg mt-6 text-ink" />
          <Reveal immediate delay={0.4}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">{supporting}</p>
          </Reveal>
          <Reveal immediate delay={0.5}>
            <div className="mt-10 rounded-[20px] border border-white bg-white/70 p-5 backdrop-blur" aria-hidden>
              <FlowVisual steps={flow} size="sm" />
            </div>
          </Reveal>
        </div>

        <section aria-labelledby="benefits-title" className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 lg:pr-16">
          <h2 id="benefits-title" className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-ink lg:mt-16">
            {benefitsTitle}
          </h2>
          <ol className="mt-6 border-t border-ink/10">
            {benefits.map((b, i) =>
            <Reveal key={b.title} delay={i * 0.05}>
                <li className="grid grid-cols-12 gap-4 border-b border-ink/10 py-6">
                  <span className={`col-span-2 text-sm font-bold tabular-nums ${tone === 'brand' ? 'text-brand' : 'text-violet'}`}>0{i + 1}</span>
                  <div className="col-span-10">
                    <p className="text-2xl font-extrabold tracking-tight text-ink">{b.title}</p>
                    <p className="mt-1.5 text-base leading-relaxed text-body">{b.text}</p>
                  </div>
                </li>
              </Reveal>
            )}
          </ol>
        </section>

        <div className="order-2 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pl-16">
          <Reveal immediate delay={0.3} className="lg:sticky lg:top-8">
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-[0_40px_90px_-50px_rgba(23,32,51,0.4)] sm:p-10">
              <p className="text-2xl font-extrabold tracking-tight text-ink">{formTitle}</p>
              <p className="mb-8 mt-1.5 text-sm text-muted">{formIntro}</p>
              {form}
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="relative border-t border-line bg-white">
        <div className="container-site flex flex-col justify-between gap-2 py-6 text-sm text-muted sm:flex-row">
          <p>© 2026 Amigo Interactive. All Rights Reserved.</p>
          <Link to="/contact" className="transition-colors hover:text-brand">
            Questions? Contact us
          </Link>
        </div>
      </footer>
    </div>);

}