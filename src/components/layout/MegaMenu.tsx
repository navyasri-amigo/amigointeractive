import React, { useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuKey, navItems } from '../../data/navigation';
import { EASE } from '../../utils/motion';
import { AboutPanel } from '../megamenu/AboutPanel';
import { ServicesPanel } from '../megamenu/ServicesPanel';
import { NewsPanel } from '../megamenu/NewsPanel';
import { CareersPanel } from '../megamenu/CareersPanel';
import { LocationsPanel } from '../megamenu/LocationsPanel';

type MegaMenuProps = {
  active: MenuKey | null;
};

const panels: Record<MenuKey, React.ReactNode> = {
  about: <AboutPanel />,
  services: <ServicesPanel />,
  news: <NewsPanel />,
  careers: <CareersPanel />,
  locations: <LocationsPanel />
};

export function MegaMenu({ active }: MegaMenuProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-full hidden justify-center px-3 pt-2 lg:flex">
      <AnimatePresence>
        {active &&
        <motion.div
          key="mega-shell"
          className="pointer-events-auto w-[88vw] max-w-[1360px] overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-40px_rgba(23,32,51,0.35)]"
          initial={{ opacity: 0, y: -10, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.985 }}
          transition={{ duration: 0.28, ease: EASE }}
          role="region"
          aria-label={`${navItems.find((n) => n.key === active)?.label} menu`}>
          
            <PanelSwitcher active={active} />
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}

function PanelSwitcher({ active }: {active: MenuKey;}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>('auto');
  const order = navItems.map((n) => n.key);
  const prev = useRef(active);
  const direction = order.indexOf(active) >= order.indexOf(prev.current) ? 1 : -1;
  prev.current = active;

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setHeight(entry.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <motion.div
      animate={{ height }}
      transition={{ duration: 0.38, ease: EASE }}
      className="relative max-h-[calc(100vh-150px)] overflow-y-auto overflow-x-hidden no-scrollbar">
      
      <div ref={innerRef} className="relative">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: 28 * d }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: -28 * d })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: EASE }}>
            
            {panels[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>);

}