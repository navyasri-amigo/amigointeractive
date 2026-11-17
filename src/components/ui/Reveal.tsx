import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  immediate?: boolean;
};

export function Reveal({ children, delay = 0, y = 18, className = '', immediate = false }: RevealProps) {
  const reduce = useReducedMotion();
  const target = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      {...immediate ? { animate: target } : { whileInView: target, viewport: { once: true, margin: '-60px' } }}
      transition={{ duration: 0.45, ease: EASE, delay }}>
      
      {children}
    </motion.div>);

}