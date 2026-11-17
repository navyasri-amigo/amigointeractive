import React from 'react';
import { motion } from 'framer-motion';
import { ArrowButton } from '../ui/ArrowButton';
import { EASE } from '../../utils/motion';

type SuccessStateProps = {
  title?: string;
  text: string;
};

export function SuccessState({ title = 'Thank you.', text }: SuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="flex flex-col items-start py-8"
      role="status"
      aria-live="polite">
      
      <svg width="76" height="76" viewBox="0 0 76 76" aria-hidden>
        <motion.circle
          cx="38" cy="38" r="35" fill="#EAF3FF" stroke="#2563EB" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: EASE }} />
        
        <motion.path
          d="M24 39l9.5 9.5L53 29"
          fill="none" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, ease: EASE, delay: 0.35 }} />
        
      </svg>
      <h3 className="display-md mt-8 text-ink">{title}</h3>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-body">{text}</p>
      <div className="mt-10">
        <ArrowButton to="/" size="lg">
          Back to Home
        </ArrowButton>
      </div>
    </motion.div>);

}