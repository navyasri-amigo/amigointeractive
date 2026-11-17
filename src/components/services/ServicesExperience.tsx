import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import { Service, services } from '../../data/services';
import { ServiceVisual } from './ServiceVisual';
import { RevealText } from '../ui/RevealText';
import { ArrowLink } from '../ui/ArrowLink';
import { EASE } from '../../utils/motion';

type ServicesExperienceProps = {
  headingLines?: React.ReactNode[];
  intro?: string;
  showAllLink?: boolean;
};

const pad = (n: number) => String(n).padStart(2, '0');

export function ServicesExperience({
  headingLines = ['What', <span key="w" className="text-brand">we do.</span>],
  intro = 'Discover our diverse range of services designed to elevate your brand and maximize your online presence.',
  showAllLink = true
}: ServicesExperienceProps) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const current = hovered ?? active;

  return (
    <section id="what-we-do" className="relative bg-white py-24 lg:py-36">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <RevealText lines={headingLines} className="display-lg text-ink lg:col-span-7" />
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-body">{intro}</p>
            {showAllLink &&
            <ArrowLink to="/services" className="mt-5">
                All services
              </ArrowLink>
            }
          </div>
        </div>

        {/* Desktop: sticky editorial index */}
        <div className="mt-20 hidden gap-16 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-36">
              <div className="relative h-[150px] overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.p
                    key={current}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="absolute inset-0 text-[100px] font-extrabold leading-none tracking-[-0.06em] text-brand tabular-nums">
                    
                    {pad(current + 1)}
                  </motion.p>
                </AnimatePresence>
              </div>
              <ul className="mt-8 border-b border-line">
                {services.map((s, i) => {
                  const isOn = current === i;
                  return (
                    <li key={s.slug} className="border-t border-line">
                      <Link
                        to={`/services/${s.slug}`}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(i)}
                        onBlur={() => setHovered(null)}
                        data-cursor="explore"
                        className="group flex items-center justify-between gap-4 py-4">
                        
                        <span className="flex items-baseline gap-4">
                          <span className={`text-xs font-bold tabular-nums transition-colors ${isOn ? 'text-brand' : 'text-muted'}`}>{pad(i + 1)}</span>
                          <span
                           className={`whitespace-nowrap text-xl font-bold tracking-tight transition-colors duration-200 xl:text-2xl ${
  isOn ? 'text-brand' : 'text-ink/30'
}`}>
                            
                            {s.title}
                          </span>
                        </span>
                        <ArrowRightIcon
                          aria-hidden
                          className={`h-5 w-5 shrink-0 text-brand transition-[transform,opacity] duration-200 ${
                          isOn ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`
                          } />
                        
                      </Link>
                    </li>);

                })}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            {services.map((s, i) =>
            <ServiceBlock key={s.slug} service={s} index={i} isActive={current === i} onActive={() => setActive(i)} />
            )}
          </div>
        </div>

        {/* Mobile: accordion */}
        <ul className="mt-14 border-b border-line lg:hidden">
          {services.map((s, i) => {
            const isOpen = openMobile === i;
            return (
              <li key={s.slug} className="border-t border-line">
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left">
                  
                  <span className="flex items-baseline gap-3">
                    <span className="text-xs font-bold tabular-nums text-brand">{pad(i + 1)}</span>
                    <span className={`text-2xl font-bold tracking-tight ${isOpen ? 'text-brand' : 'text-ink'}`}>{s.title}</span>
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <PlusIcon aria-hidden className="h-5 w-5 text-ink" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden">
                    
                      <div className="pb-8">
                        <div className="aspect-[4/3] overflow-hidden rounded-[22px]">
                          <ServiceVisual kind={s.visual} />
                        </div>
                        <p className="mt-5 text-xl font-bold text-ink">{s.tagline}</p>
                        <p className="mt-2 text-base leading-relaxed text-body">{s.description}</p>
                        <ArrowLink to={`/services/${s.slug}`} className="mt-4">
                          Explore {s.title}
                        </ArrowLink>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}

type ServiceBlockProps = {
  service: Service;
  index: number;
  isActive: boolean;
  onActive: () => void;
};

function ServiceBlock({ service, index, isActive, onActive }: ServiceBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <div ref={ref} className="flex min-h-[82vh] flex-col justify-center py-10">
      <Link to={`/services/${service.slug}`} className="group block" data-cursor="explore">
        <motion.div
          className="aspect-[4/3] overflow-hidden rounded-[28px]"
          initial={{ clipPath: 'inset(8% 8% 8% 8% round 28px)', opacity: 0.4 }}
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 28px)', opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: EASE }}>
          
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <ServiceVisual kind={service.visual} />
          </div>
        </motion.div>
        <div className={`mt-8 grid grid-cols-12 gap-6 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
          <p className="col-span-2 text-sm font-bold tabular-nums text-brand">{pad(index + 1)}</p>
          <div className="col-span-10">
            <h3 className="text-3xl font-extrabold tracking-tight text-ink">{service.tagline}</h3>
            <p className="mt-3 max-w-lg text-lg leading-relaxed text-body">{service.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Explore {service.title}
              <ArrowRightIcon aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>);

}