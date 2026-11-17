import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { Label } from '../ui/Label';
import { Reveal } from '../ui/Reveal';
import { EASE } from '../../utils/motion';

export function FeaturedTestimonial({ index = 2 }: {index?: number;}) {
  const t = testimonials[index];
  return (
    <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
      <div className="lg:col-span-8">
        <motion.span
          aria-hidden
          className="block text-[180px] font-extrabold leading-[0.55] text-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE }}>
          
          “
        </motion.span>
        <Reveal delay={0.1}>
         <blockquote className="mt-8 text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl lg:text-4xl">
  {t.quote}
</blockquote>
        </Reveal>
      </div>
      <div className="flex flex-col justify-end lg:col-span-3 lg:col-start-10">
        <Reveal delay={0.2}>
          <Label tone="violet">Client voice</Label>
          <div className="relative mt-8 h-40 w-40" aria-hidden>
            {[0, 1, 2, 3].map((r) =>
            <span key={r} className="absolute rounded-full border border-brand/20" style={{ inset: r * 16 }} />
            )}
            <span className="absolute inset-[64px] rounded-full bg-violet" />
          </div>
          <p className="mt-8 text-xl font-bold text-ink">{t.name}</p>
          <p className="mt-1 text-sm text-muted">{t.handle}</p>
        </Reveal>
      </div>
    </div>);

}