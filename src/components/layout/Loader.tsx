import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../Logo';
import { EASE } from '../../utils/motion';

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      aria-label="Loading Amigo Interactive"
      role="status">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}>
        
        <Logo size="lg" />
      </motion.div>
      <div className="mt-10 h-px w-28 overflow-hidden bg-line">
        <motion.div
          className="h-full w-full origin-left bg-brand"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: EASE }} />
        
      </div>
    </motion.div>);

}