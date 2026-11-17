import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, ChevronDownIcon, GlobeIcon } from 'lucide-react';
import { globalRegions } from '../../data/navigation';
import { EASE } from '../../utils/motion';

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState('Global');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex items-center gap-1.5 whitespace-nowrap text-[12px] font-medium text-muted transition-colors hover:text-brand">
        
        <GlobeIcon aria-hidden className="h-3.5 w-3.5" />
        <span>{region}</span>
        <span aria-hidden className="text-line">|</span>
        <span>English</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDownIcon aria-hidden className="h-3 w-3" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open &&
        <motion.div
          role="dialog"
          aria-label="Region and language"
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.18, ease: EASE }}
          className="absolute right-0 top-full z-[70] mt-3 w-64 origin-top-right rounded-2xl border border-line bg-white p-4 text-left shadow-[0_24px_50px_-20px_rgba(23,32,51,0.25)]">
          
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">Global</p>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-sky px-3 py-2.5 text-sm font-semibold text-ink">
              English
              <CheckIcon aria-hidden className="h-4 w-4 text-brand" />
            </div>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Select region</p>
            <ul className="mt-2 space-y-0.5">
              {globalRegions.map((r) =>
            <li key={r}>
                  <button
                type="button"
                onClick={() => {
                  setRegion(r);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                region === r ? 'font-semibold text-brand' : 'text-body hover:bg-sky hover:text-ink'}`
                }>
                
                    {r}
                    {region === r && <CheckIcon aria-hidden className="h-4 w-4" />}
                  </button>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}