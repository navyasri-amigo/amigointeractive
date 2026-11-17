import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { EASE } from '../../utils/motion';

const LABELS: Record<string, string> = {
  explore: 'Explore',
  view: 'View',
  go: 'Go →'
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 600, damping: 45, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine) and (hover: hover)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduce.matches) return;
    setEnabled(true);
    document.documentElement.classList.add('cursor-hidden');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      const el = target?.closest ? target.closest('[data-cursor]') : null;
      const value = el?.getAttribute('data-cursor') ?? null;
      setLabel((prev) => prev === value ? prev : value);
    };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.documentElement.classList.remove('cursor-hidden');
    };
  }, [x, y]);

  if (!enabled) return null;
  const text = label ? LABELS[label] : null;

  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[200]" style={{ x: sx, y: sy }}>
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: text ? 78 : 12,
          height: text ? 78 : 12,
          backgroundColor: text ? '#2563EB' : '#172033',
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.2, ease: EASE }}>
        
        {text &&
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-white">
          
            {text}
          </motion.span>
        }
      </motion.div>
    </motion.div>);

}