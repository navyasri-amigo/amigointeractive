import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CrownIcon, Dice5Icon, Gamepad2Icon, SparklesIcon, TrophyIcon, ZapIcon } from 'lucide-react';
import { igamingCapabilities } from '../../data/home';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowButton } from '../ui/ArrowButton';
import { EASE } from '../../utils/motion';

const tiles = [
{ Icon: Dice5Icon, bg: 'bg-sky-deep', fg: 'text-brand' },
{ Icon: TrophyIcon, bg: 'bg-violet-tint', fg: 'text-violet' },
{ Icon: Gamepad2Icon, bg: 'bg-mint-soft', fg: 'text-mint' },
{ Icon: CrownIcon, bg: 'bg-violet-tint', fg: 'text-violet' },
{ Icon: ZapIcon, bg: 'bg-sky-deep', fg: 'text-brand' },
{ Icon: SparklesIcon, bg: 'bg-mint-soft', fg: 'text-mint' }];


export function IGaming() {
  return (
    <section id="igaming" className="relative overflow-hidden bg-lavender py-24 lg:py-36">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-violet">Specialized solution</span>
          </Reveal>
          <RevealText
            className="display-lg mt-6 text-ink"
            lines={['Elevate your', <span key="i" className="text-violet">iGaming</span>, 'experience.']} />
          
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-body">
              Power your iGaming platform with tailored digital marketing strategies designed to increase player acquisition, engagement and growth.
            </p>
          </Reveal>
          <ul className="mt-10 border-t border-violet/15">
            {igamingCapabilities.map((c, i) =>
            <Reveal key={c.title} delay={0.1 + i * 0.05}>
                <li className="grid grid-cols-12 gap-4 border-b border-violet/15 py-5">
                  <span className="col-span-5 text-lg font-bold text-ink sm:col-span-4">{c.title}</span>
                  <span className="col-span-7 text-[15px] leading-relaxed text-body sm:col-span-8">{c.text}</span>
                </li>
              </Reveal>
            )}
          </ul>
          <Reveal delay={0.25}>
            <div className="mt-10">
              <ArrowButton to="/contact" size="lg">
                Talk to Our iGaming Team
              </ArrowButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <GamingVisual />
        </div>
      </div>
    </section>);

}

function GamingVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-[5/5] w-full max-w-[560px]" aria-hidden data-cursor="view">
      <motion.div
        className="absolute left-[22%] top-[4%] w-[56%] rounded-[32px] border border-white bg-white p-4 shadow-[0_40px_80px_-30px_rgba(124,58,237,0.45)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}>
        
        <div className="flex items-center justify-between">
          <p className="text-sm font-extrabold text-ink">Lobby</p>
          <span className="rounded-full bg-violet px-2.5 py-1 text-[10px] font-bold text-white">New</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {tiles.map(({ Icon, bg, fg }, i) =>
          <motion.div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-2xl ${bg}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.04, ease: EASE }}>
            
              <Icon className={`h-6 w-6 ${fg}`} />
            </motion.div>
          )}
        </div>
        <div className="mt-4 rounded-2xl bg-brand p-3 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">Featured</p>
          <p className="mt-1 text-sm font-extrabold">Welcome offer for new players</p>
        </div>
        <div className="mt-3 flex h-10 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">Play now</div>
      </motion.div>

      <Floating className="left-0 top-[18%] w-[36%]" delay={0.3} reduce={!!reduce}>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Player acquisition</p>
        <div className="mt-3 space-y-1.5">
          {['100%', '76%', '54%'].map((w, i) =>
          <div key={w} className="mx-auto h-3 rounded-full bg-brand" style={{ width: w, opacity: 1 - i * 0.25 }} />
          )}
        </div>
      </Floating>

      <Floating className="right-0 top-[44%] w-[34%]" delay={0.4} reduce={!!reduce}>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Engagement</p>
        <svg viewBox="0 0 60 60" className="mx-auto mt-2 h-16 w-16">
          <circle cx="30" cy="30" r="24" fill="none" stroke="#E9E1FD" strokeWidth="7" />
          <motion.circle
            cx="30" cy="30" r="24" fill="none" stroke="#7C3AED" strokeWidth="7" strokeLinecap="round"
            transform="rotate(-90 30 30)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 0.72 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }} />
          
        </svg>
      </Floating>

      <Floating className="bottom-[2%] left-[8%] w-[46%]" delay={0.5} reduce={!!reduce}>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Analytics</p>
        <div className="mt-3 flex h-14 items-end gap-1.5">
          {[30, 45, 38, 60, 52, 75, 90].map((h, i) =>
          <motion.div
            key={i}
            className={`flex-1 rounded-t-md ${i === 6 ? 'bg-violet' : 'bg-brand/30'}`}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.04, ease: EASE }} />

          )}
        </div>
      </Floating>
    </div>);

}

function Floating({ children, className, delay, reduce }: {children: React.ReactNode;className: string;delay: number;reduce: boolean;}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: EASE, delay }}>
      
      <motion.div
        className="rounded-2xl border border-white bg-white/90 p-4 shadow-[0_24px_50px_-24px_rgba(23,32,51,0.35)] backdrop-blur"
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}>
        
        {children}
      </motion.div>
    </motion.div>);

}