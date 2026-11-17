import React from 'react';
import { motion } from 'framer-motion';
import { Footer } from './Footer';
import { EASE } from '../../utils/motion';

type PageTransitionProps = {
  children: React.ReactNode;
  withFooter?: boolean;
};

export function PageTransition({ children, withFooter = true }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: EASE }}>
      
      <main>{children}</main>
      {withFooter && <Footer />}
    </motion.div>);

}