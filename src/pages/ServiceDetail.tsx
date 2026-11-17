import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../data/services';
import { ServiceVisual } from '../components/services/ServiceVisual';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { Label } from '../components/ui/Label';
import { ArrowButton } from '../components/ui/ArrowButton';
import { FlowVisual } from '../components/ui/FlowVisual';
import { EASE } from '../utils/motion';

const sections = [
{ id: 'overview', label: 'Overview' },
{ id: 'how-it-works', label: 'How It Works' },
{ id: 'benefits', label: 'Benefits' },
{ id: 'strategy', label: 'Strategy' },
{ id: 'performance', label: 'Performance' }];


export function ServiceDetail() {
  const { slug } = useParams();
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) return <Navigate to="/services" replace />;
  const service = services[index];
  const next = services[(index + 1) % services.length];
  const words = service.title.split(' ');

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-16 pt-36 lg:pb-24 lg:pt-52">
        <div aria-hidden className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" />
        <div className="container-site relative grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal immediate>
              <Link to="/services" className="text-sm font-semibold text-muted transition-colors hover:text-brand">
                What we do <span aria-hidden>/</span> <span className="text-brand">{String(index + 1).padStart(2, '0')}</span>
              </Link>
            </Reveal>
            <RevealText
              as="h1"
              immediate
              delay={0.12}
              className="display-xl mt-6 text-ink"
              lines={words.map((w, i) => i === words.length - 1 ? <span key={w} className="text-brand">{w}.</span> : w)} />
            
            <Reveal immediate delay={0.4}>
              <p className="mt-8 text-2xl font-bold tracking-tight text-ink">{service.tagline}</p>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-body">{service.description}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ArrowButton to="/contact" size="lg">
                  Talk to Our Team
                </ArrowButton>
                {/* <ArrowButton to="/advertiser-signup" size="lg" variant="secondary">
                  Advertiser Signup
                </ArrowButton> */}
              </div>
            </Reveal>
          </div>
          <motion.div
            className="aspect-[4/3] overflow-hidden rounded-[32px] lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
            data-cursor="view">
            
            <ServiceVisual kind={service.visual} />
          </motion.div>
        </div>
      </section>

      <nav aria-label="On this page" className="sticky top-[84px] z-30 border-y border-line bg-white/90 backdrop-blur lg:top-[96px]">
        <ul className="container-site no-scrollbar flex gap-1 overflow-x-auto py-3">
          {sections.map((s) =>
          <li key={s.id}>
              <a
              href={`#${s.id}`}
              className="inline-flex h-9 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold text-body transition-colors hover:bg-sky hover:text-brand">
              
                {s.label}
              </a>
            </li>
          )}
        </ul>
      </nav>

      <section id="overview" className="bg-white py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>Overview</Label>
          </div>
          <Reveal className="lg:col-span-8">
            <p className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-bold leading-[1.25] tracking-tight text-ink">{service.overview}</p>
          </Reveal>
        </div>
      </section>

      <section id="how-it-works" className="bg-sky py-20 lg:py-28">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <RevealText className="display-md text-ink lg:col-span-6" lines={['How it', <span key="w" className="text-brand">works.</span>]} />
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="rounded-[20px] border border-white bg-white/80 p-5">
                <FlowVisual steps={service.flow} />
              </div>
            </Reveal>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {service.howItWorks.map((step, i) =>
            <li key={step.title} className="bg-white p-8">
                <p className="text-xs font-bold tabular-nums text-brand">0{i + 1}</p>
                <p className="mt-4 text-xl font-extrabold tracking-tight text-ink">{step.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{step.text}</p>
              </li>
            )}
          </ol>
        </div>
      </section>

      <section id="benefits" className="bg-white py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>Benefits</Label>
          </div>
          <ul className="border-t border-line lg:col-span-8">
            {service.benefits.map((b, i) =>
            <Reveal key={b.title} delay={i * 0.05}>
                <li className="grid gap-2 border-b border-line py-8 sm:grid-cols-12 sm:gap-6">
                  <p className="text-3xl font-extrabold tracking-tight text-ink sm:col-span-6">{b.title}</p>
                  <p className="text-lg leading-relaxed text-body sm:col-span-6">{b.text}</p>
                </li>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <section className="bg-canvas py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div id="strategy">
              <Label>Strategy</Label>
              <p className="mt-6 text-2xl font-bold leading-snug tracking-tight text-ink">{service.strategy}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div id="performance">
              <Label tone="violet">Performance</Label>
              <p className="mt-6 text-2xl font-bold leading-snug tracking-tight text-ink">{service.performance}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <Link to={`/services/${next.slug}`} className="group block border-b border-line" data-cursor="explore">
          <div className="container-site flex items-center justify-between gap-6 py-16 lg:py-20">
            <div>
              <p className="text-sm font-semibold text-muted">Next service</p>
              <p className="mt-2 text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-0.045em] text-ink transition-colors duration-200 group-hover:text-brand">
                {next.title}
              </p>
            </div>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform duration-200 group-hover:translate-x-2">
              <ArrowRightIcon className="h-6 w-6" />
            </span>
          </div>
        </Link>
      </section>

      
    </>);

}