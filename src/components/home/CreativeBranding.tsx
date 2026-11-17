import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../data/brand';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { FlowVisual } from '../ui/FlowVisual';
import { ArrowButton } from '../ui/ArrowButton';
import { EASE } from '../../utils/motion';

export function CreativeBranding() {
  return (
    <section id="creative-branding" className="relative overflow-hidden bg-sky py-24 lg:py-36">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12">
        <div className="relative lg:col-span-6" data-cursor="view">
          <motion.div
            className="aspect-[4/5] overflow-hidden rounded-[32px] bg-white sm:aspect-[5/4] lg:aspect-[4/5]"
            initial={{ clipPath: 'inset(10% 10% 10% 10% round 32px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 32px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: EASE }}>
            
            <motion.img
              src={images.editorialTeam}
              alt="Creative team reviewing brand campaign layouts"
              loading="lazy"
              className="h-full w-full object-cover"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: EASE }} />
            
          </motion.div>
          <motion.div
            className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_50px_-24px_rgba(23,32,51,0.3)] sm:left-auto sm:right-[-24px] sm:w-[360px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.3 }}>
            
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">How brands connect</p>
            <FlowVisual steps={['Brand', 'Creative', 'Audience', 'Connection']} size="sm" />
          </motion.div>
        </div>

        <div className="mt-10 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <RevealText
            className="display-lg text-ink"
            lines={['Make your', <span key="b" className="text-brand">brand</span>, 'impossible', 'to ignore.']} />
          
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed text-body">
              Stand out in the crowded digital space with innovative branding solutions that create a unique identity and meaningful customer connections.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ArrowButton to="/services/brand-strategy" size="lg">
                Explore Brand Strategy
              </ArrowButton>
              <ArrowButton to="/services/video-content-creation" size="lg" variant="secondary">
                Video Content
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}