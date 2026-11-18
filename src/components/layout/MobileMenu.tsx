import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GlobeIcon, PlusIcon, XIcon } from 'lucide-react';
import { Logo } from '../Logo';
import { ArrowButton } from '../ui/ArrowButton';
import { MenuKey, navItems } from '../../data/navigation';
import { EASE } from '../../utils/motion';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<MenuKey | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-[80] flex flex-col bg-white lg:hidden"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: EASE }}>
        
          <div className="flex h-20 shrink-0 items-center justify-between px-5">
            <Link to="/" onClick={onClose} aria-label="Home">
              <Logo size="sm" />
            </Link>
            <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink">
            
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5">
            {navItems.map((item, i) => {
            const isOpen = expanded === item.key;
            return (
              <motion.div
                key={item.key}
                className="border-b border-line"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE, delay: 0.05 + i * 0.04 }}>
                
                  <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : item.key)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between py-5 text-left text-[22px] font-extrabold uppercase tracking-tight transition-colors ${
                  isOpen ? 'text-brand' : 'text-ink'}`
                  }>
                  
                    {item.label}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2, ease: EASE }}>
                      <PlusIcon aria-hidden className="h-6 w-6" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    className="overflow-hidden">
                    
                        <li>
                          <Link to={item.to} onClick={onClose} className="block py-2.5 text-base font-semibold text-brand">
                            Overview
                          </Link>
                        </li>
                        {item.links.map((link) =>
                    <li key={link.label}>
                            <Link to={link.to} onClick={onClose} className="block py-2.5 text-base text-body">
                              {link.label}
                            </Link>
                          </li>
                    )}
                        <li className="h-4" />
                      </motion.ul>
                  }
                  </AnimatePresence>
                </motion.div>);

          })}
            <div className="flex gap-6 py-6 text-base font-semibold">
              <Link to="/testimonials" onClick={onClose} className="text-ink">
                Testimonials
              </Link>
              <Link to="/contact" onClick={onClose} className="text-ink">
                Contact
              </Link>
            </div>
          </nav>

          <div className="shrink-0 space-y-3 border-t border-line bg-sky px-5 pb-8 pt-5">
            {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ArrowButton to="/advertiser-signup" size="lg" className="w-full">
                Advertiser Signup
              </ArrowButton>
              <ArrowButton to="/publisher-signup" size="lg" variant="secondary" className="w-full">
                Publisher Signup
              </ArrowButton>
            </div> */}
            <p className="flex items-center justify-center gap-2 pt-1 text-sm text-muted">
              <GlobeIcon aria-hidden className="h-4 w-4" /> Global | English
            </p>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}