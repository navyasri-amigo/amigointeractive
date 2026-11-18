
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { AboutFeature, aboutItems } from '../../data/megaMenu';
import { images } from '../../data/brand';
import { processSteps } from '../../data/home';
import { WorldMap } from '../locations/WorldMap';
import { ArrowLink } from '../ui/ArrowLink';
import { EASE } from '../../utils/motion';

export function AboutPanel() {
  const [feature, setFeature] = useState<AboutFeature>('company');

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 flex flex-col justify-between border-r border-line p-10">
        <p className="text-[2.6rem] font-extrabold leading-[0.95] tracking-[-0.04em] text-ink xl:text-5xl">
          We are
          <br />
          Amigo
          <br />
          <span className="text-brand">Interactive.</span>
        </p>
        <ArrowLink to="/about" className="mt-10">
          Explore About Us
        </ArrowLink>
      </div>

      <ul className="col-span-5 p-5">
        {aboutItems.map((item) => {
          const isOn = feature === item.id;

          return (
            <li key={item.id}>
              <Link
                to={item.to}
                onMouseEnter={() => setFeature(item.id)}
                onFocus={() => setFeature(item.id)}
                className={`group flex gap-5 rounded-2xl p-4 transition-colors duration-200 ${
                  isOn ? 'bg-sky' : ''
                }`}
              >
                <span className="pt-1 text-xs font-bold tabular-nums text-muted">
                  {item.n}
                </span>

                <span className="flex-1">
                  <span
                    className={`block text-lg font-bold tracking-tight transition-colors ${
                      isOn ? 'text-brand' : 'text-ink'
                    }`}
                  >
                    {item.title}
                  </span>

                  <span className="mt-1 block text-[13px] leading-relaxed text-body">
                    {item.desc}
                  </span>

                  <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand">
                    {item.cta}
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="col-span-4 p-5 pl-0">
        <div className="relative h-full min-h-[400px] overflow-hidden rounded-[20px] bg-sky">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={feature}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <FeatureVisual feature={feature} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function FeatureVisual({ feature }: { feature: AboutFeature }) {
  if (feature === 'company') {
    return (
      <>
        <img
          src={images.editorialTeam}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 backdrop-blur">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Company
          </p>
          <p className="mt-1 text-sm font-semibold text-ink">
            Digital experiences that resonate with your audience.
          </p>
        </div>
      </>
    );
  }

  if (feature === 'locations') {
    return (
      <div className="flex h-full flex-col justify-center p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
          Global presence
        </p>
        <WorldMap selected={null} interactive={false} className="mt-4" />
      </div>
    );
  }

  if (feature === 'how') {
    return (
      <div className="flex h-full flex-col justify-center p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
          Our process
        </p>
        <ol className="mt-5">
          {processSteps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: EASE, delay: i * 0.05 }}
              className="flex gap-4"
            >
              <span className="flex flex-col items-center">
                <span
                  className={`mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 ${
                    i === processSteps.length - 1
                      ? 'border-violet bg-violet'
                      : 'border-brand bg-white'
                  }`}
                />
                {i < processSteps.length - 1 && (
                  <span className="my-1 w-px flex-1 bg-brand/30" />
                )}
              </span>
              <span className="pb-4 text-base font-bold text-ink">
                {s.title}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    );
  }

  if (feature === 'what') {
    return (
      <>
        <img
          src={images.heroObject}
          alt=""
          className="h-full w-full object-cover mix-blend-multiply"
        />
        <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
          {['Advertising', 'SEO', 'Brand', 'Video', 'Content'].map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink"
            >
              {t}
            </span>
          ))}
        </div>
      </>
    );
  }

  if (feature === 'why') {
    return (
      <>
        <img
          src={images.heroObject}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-5 backdrop-blur">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Why Amigo
          </p>
          <p className="mt-2 text-lg font-extrabold text-ink">
            Ideas that connect. Strategies that perform.
          </p>
        </div>
      </>
    );
  }

  if (feature === 'life') {
    return (
      <>
        <img
          src={images.careersCulture}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-5 backdrop-blur">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
            Life at Amigo
          </p>
          <p className="mt-2 text-lg font-extrabold text-ink">
            Together we create, collaborate and grow.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <img
        src={images.editorialTeam}
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-5 backdrop-blur">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
          Our Culture
        </p>
        <p className="mt-2 text-lg font-extrabold text-ink">
          Creative. Collaborative. Curious. Driven. Human.
        </p>
      </div>
    </>
  );
}
