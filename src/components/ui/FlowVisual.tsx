import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../utils/motion';

type FlowVisualProps = {
  steps: string[];
  direction?: 'row' | 'column';
  size?: 'sm' | 'md';
  className?: string;
};

export function FlowVisual({ steps, direction = 'row', size = 'md', className = '' }: FlowVisualProps) {
  const reduce = useReducedMotion();
  const pill = size === 'sm' ? 'h-8 px-3 text-[12px]' : 'h-10 px-4 text-[13px]';
  const isRow = direction === 'row';

  return (
    <motion.ol
      className={`flex ${isRow ? 'flex-wrap items-center gap-y-3' : 'flex-col items-start'} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      aria-label={steps.join(' to ')}>
      
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <motion.li
            key={step}
            className={`flex ${isRow ? 'items-center' : 'flex-col items-start'}`}
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } } }}>
            
            <span
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border font-semibold shadow-[0_6px_18px_-12px_rgba(23,32,51,0.35)] ${pill} ${
              last ? 'border-violet bg-violet text-white' : i === 0 ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink'}`
              }>
              
              <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${last || i === 0 ? 'bg-white' : 'bg-brand'}`} />
              {step}
            </span>
            {!last &&
            <span
              aria-hidden
              className={`relative overflow-hidden bg-brand/25 ${isRow ? 'mx-1.5 h-px w-6' : 'ml-5 my-1 h-5 w-px'}`}>
              
                {!reduce &&
              <motion.span
                className={`absolute rounded-full bg-brand ${isRow ? 'top-[-1.5px] h-1 w-1' : 'left-[-1.5px] h-1 w-1'}`}
                animate={isRow ? { x: [-4, 26] } : { y: [-4, 22] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: i * 0.2 }} />

              }
              </span>
            }
          </motion.li>);

      })}
    </motion.ol>);

}