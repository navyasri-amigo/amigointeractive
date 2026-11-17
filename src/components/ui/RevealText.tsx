import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../utils/motion';

type RevealTextProps = {
  lines: React.ReactNode[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  immediate?: boolean;
};

export function RevealText({ lines, as = 'h2', className = '', delay = 0, immediate = false }: RevealTextProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: delay } }
  };
  const line = {
    hidden: { y: reduce ? 0 : '108%', opacity: reduce ? 0 : 1 },
    show: { y: '0%', opacity: 1, transition: { duration: 0.5, ease: EASE } }
  };
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      {...immediate ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, margin: '-60px' } }}>
      
      {lines.map((content, i) =>
      <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
          <motion.span className="block will-change-transform" variants={line}>
            {content}
          </motion.span>
        </span>
      )}
    </Tag>);

}