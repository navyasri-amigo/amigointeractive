import React, { useEffect } from 'react';
import { motion, MotionValue, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { HeartIcon, MessageCircleIcon, SendIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
import { images } from '../../data/brand';
import { EASE } from '../../utils/motion';

const indicators = [
{ label: 'CTR', w: '62%' },
{ label: 'Reach', w: '84%' },
{ label: 'ROI', w: '74%' }];


export function HeroVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my, reduce]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px]" data-cursor="view" aria-hidden>
      {/* Brand object */}
      <Layer depth={-14} sx={sx} sy={sy} delay={0.9} className="absolute inset-[4%]">
        <img src={images.heroObject} alt="" className="h-full w-full object-contain mix-blend-multiply" />
      </Layer>

      {/* Fine orbit lines */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}>
        
        <circle cx="200" cy="200" r="168" fill="none" stroke="#DCE5F5" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#E4E9F2" />
        <motion.path
          d="M60 300 C 120 250, 160 300, 210 230 S 300 120, 350 90"
          fill="none"
          stroke="#2563EB"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.2 }} />
        
      </motion.svg>

      {/* Phone */}
      <Layer depth={8} sx={sx} sy={sy} delay={0.95} className="absolute left-[29%] top-[7%] w-[42%]">
        <div className="aspect-[9/18.5] rounded-[34px] border border-line bg-white p-2 shadow-[0_40px_80px_-30px_rgba(37,99,235,0.45)]">
          <div className="flex h-full flex-col overflow-hidden rounded-[26px] bg-canvas">
            <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-line" />
            <div className="m-2.5 mt-3 rounded-2xl bg-brand p-3 text-white">
              <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/80">Sponsored</p>
              <p className="mt-1.5 text-[13px] font-extrabold leading-tight">Your next campaign, seen by the right people.</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-bold text-brand">Learn more</span>
                <span className="h-5 w-5 rounded-full bg-violet" />
              </div>
            </div>
            <div className="mx-2.5 flex items-center gap-3 px-1 text-muted">
              <HeartIcon className="h-3 w-3 fill-violet text-violet" />
              <MessageCircleIcon className="h-3 w-3" />
              <SendIcon className="h-3 w-3" />
            </div>
            <div className="mx-2.5 mt-3 space-y-1.5">
              <div className="h-1.5 w-4/5 rounded-full bg-line" />
              <div className="h-1.5 w-3/5 rounded-full bg-line" />
            </div>
            <div className="m-2.5 mt-3 flex-1 rounded-2xl bg-lavender" />
          </div>
        </div>
      </Layer>

      {/* Audience */}
      <Layer depth={22} sx={sx} sy={sy} delay={1.05} float={0} className="absolute left-0 top-[12%] w-[38%] sm:left-[2%]">
        <Card>
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand sm:text-[11px]">
            <UsersIcon className="h-3.5 w-3.5" /> Audience
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1">
            {['Mobile-first', 'High intent', 'iGaming'].map((t) =>
            <span key={t} className="rounded-full bg-sky px-2 py-0.5 text-[9px] font-semibold text-ink sm:text-[10px]">
                {t}
              </span>
            )}
          </div>
        </Card>
      </Layer>

      {/* Indicators */}
      <Layer depth={28} sx={sx} sy={sy} delay={1.12} float={1} className="absolute right-0 top-[6%] hidden w-[34%] sm:block">
        <Card>
          <ul className="space-y-2.5">
            {indicators.map((m, i) =>
            <li key={m.label}>
                <div className="flex items-center justify-between text-[11px] font-semibold text-ink">
                  {m.label}
                  <TrendingUpIcon className="h-3 w-3 text-mint" />
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-sky-deep">
                  <motion.div
                  className={`h-full rounded-full ${i === 2 ? 'bg-violet' : 'bg-brand'}`}
                  initial={{ width: 0 }}
                  animate={{ width: m.w }}
                  transition={{ duration: 0.8, ease: EASE, delay: 1.4 + i * 0.1 }} />
                
                </div>
              </li>
            )}
          </ul>
        </Card>
      </Layer>

      {/* Engagement */}
      <Layer depth={18} sx={sx} sy={sy} delay={1.2} float={2} className="absolute right-0 top-[52%] w-[38%] sm:right-[1%]">
        <Card>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted sm:text-[11px]">Engagement</p>
          <svg viewBox="0 0 120 40" className="mt-2 h-8 w-full sm:h-10">
            <motion.path
              d="M2 34 L20 28 L36 30 L52 20 L70 22 L88 10 L118 4"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 1.5 }} />
            
          </svg>
          <p className="mt-1 text-[10px] font-semibold text-mint sm:text-[11px]">Trending up</p>
        </Card>
      </Layer>

      {/* Conversion path */}
      <Layer depth={26} sx={sx} sy={sy} delay={1.28} float={1} className="absolute bottom-[4%] left-[2%] w-[52%] sm:left-[6%]">
        <Card>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted sm:text-[11px]">Conversion path</p>
          <div className="mt-3 flex items-center">
            {['Impression', 'Click', 'Install', 'Convert'].map((s, i, arr) =>
            <React.Fragment key={s}>
                <div className="flex flex-col items-center gap-1">
                  <span className={`h-2.5 w-2.5 rounded-full ${i === arr.length - 1 ? 'bg-violet' : 'bg-brand'}`} />
                  <span className="text-[8px] font-semibold text-ink sm:text-[9px]">{s}</span>
                </div>
                {i < arr.length - 1 && <span className="mb-3.5 h-px flex-1 bg-brand/30" />}
              </React.Fragment>
            )}
          </div>
        </Card>
      </Layer>
    </div>);

}

type LayerProps = {
  children: React.ReactNode;
  depth: number;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  delay: number;
  float?: number;
  className?: string;
};

function Layer({ children, depth, sx, sy, delay, float, className = '' }: LayerProps) {
  const reduce = useReducedMotion();
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay }}>
        
        {float !== undefined && !reduce ?
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5 + float, repeat: Infinity, ease: 'easeInOut', delay: float * 0.6 }}>
          
            {children}
          </motion.div> :

        children
        }
      </motion.div>
    </motion.div>);

}

function Card({ children }: {children: React.ReactNode;}) {
  return (
    <div className="rounded-2xl border border-white bg-white/85 p-3 shadow-[0_20px_40px_-24px_rgba(23,32,51,0.35)] backdrop-blur-md sm:p-4">
      {children}
    </div>);

}