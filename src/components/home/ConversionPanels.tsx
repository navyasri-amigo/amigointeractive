
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlowVisual } from '../ui/FlowVisual';
import { EASE } from '../../utils/motion';

type PanelId = 'advertiser' | 'publisher';

const panels: {
  id: PanelId;
  label: string;
  title: string;
  text: string;
  flow: string[];
  bg: string;
  bgHover: string;
  accent: string;
}[] = [
  {
    id: 'advertiser',
    label: 'For advertisers',
    title: 'Advertiser',
    text: 'Grow your reach and connect with the right audience.',
    flow: ['Audience', 'Targeting', 'Advertising', 'Engagement', 'Conversion'],
    bg: '#F2F7FF',
    bgHover: '#EAF3FF',
    accent: 'text-brand',
  },
  {
    id: 'publisher',
    label: 'For publishers',
    title: 'Publisher',
    text: 'Monetize your audience with smarter digital opportunities.',
    flow: ['Audience', 'Content', 'Traffic', 'Opportunity', 'Growth'],
    bg: '#F5F2FF',
    bgHover: '#EFE9FF',
    accent: 'text-violet',
  },
];

export function ConversionPanels() {
  const [hover, setHover] = useState<PanelId | null>(null);

  return (
    <section
      className="bg-white py-16 lg:py-24"
      aria-label="Partner with Amigo Interactive"
    >
      <div
        className="container-site flex flex-col gap-4 lg:flex-row"
        onMouseLeave={() => setHover(null)}
      >
        {panels.map((p) => {
          const isOn = hover === p.id;

          return (
            <motion.div
              key={p.id}
              onMouseEnter={() => setHover(p.id)}
              className="relative flex min-h-[420px] flex-1 basis-0 overflow-hidden rounded-[32px]"
              animate={{
                flexGrow: isOn ? 1.3 : 1,
                backgroundColor: isOn ? p.bgHover : p.bg,
              }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="group flex w-full flex-col p-8 sm:p-12 lg:p-14">
                <span
                  className={`text-[12px] font-bold uppercase tracking-[0.16em] ${p.accent}`}
                >
                  {p.label}
                </span>

                <h2 className="mt-6 text-[clamp(2.75rem,5vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-ink">
                  {p.title}
                </h2>

                <p className="mt-4 max-w-sm text-lg leading-relaxed text-body">
                  {p.text}
                </p>

                <motion.div
                  className="mt-8"
                  animate={{
                    opacity: isOn ? 1 : 0.35,
                    y: isOn ? 0 : 6,
                  }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <FlowVisual steps={p.flow} size="sm" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
