import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { serviceCategories } from '../../data/serviceCategories';
import { dataFlow } from '../../data/home';
import { FlowVisual } from '../ui/FlowVisual';
import { ArrowButton } from '../ui/ArrowButton';
import { EASE } from '../../utils/motion';

export function ServicesPanel() {
  const [category, setCategory] = useState(serviceCategories[3].id);
  const current = serviceCategories.find((c) => c.id === category) ?? serviceCategories[0];

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 p-8 xl:p-10">
        <div className="flex items-end justify-between gap-8 border-b border-line pb-6">
          <p className="text-4xl font-extrabold tracking-[-0.04em] text-ink">What we do</p>
          <p className="max-w-md text-sm leading-relaxed text-body">
            Connecting creativity, technology, data and marketing to create meaningful digital experiences and measurable growth.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 2xl:grid-cols-4">
          {serviceCategories.map((cat) =>
          <div key={cat.id} onMouseEnter={() => setCategory(cat.id)}>
              <p className={`px-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${category === cat.id ? 'text-brand' : 'text-muted'}`}>
                {cat.title}
              </p>
              <ul className="mt-3 space-y-0.5">
                {cat.items.map((item) =>
              <li key={item.title}>
                    <Link
                  to={item.to}
                  onFocus={() => setCategory(cat.id)}
                  className="group block rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-sky">
                  
                      <span className="flex items-center justify-between gap-2">
                        <span className="whitespace-nowrap text-[14px] font-semibold text-ink transition-colors group-hover:text-brand">
                          {item.title}
                        </span>
                        <ArrowRightIcon
                      aria-hidden
                      className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-brand opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    
                      </span>
                      {/* <span className="mt-0.5 block truncate text-[12px] text-muted">{item.desc}</span> */}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-4 flex flex-col border-l border-line bg-sky p-8 xl:p-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-violet">Featured solution</p>
        <p className="mt-3 text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] text-ink">
          Data-driven
          <br />
          <span className="text-brand">marketing.</span>
        </p>
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl bg-white">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={current.id}
              src={current.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }} />
            
          </AnimatePresence>
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-ink">
            {current.title}
          </span>
        </div>
        <FlowVisual steps={dataFlow} size="sm" className="mt-6" />
        <div className="mt-auto pt-8">
          <ArrowButton to="/services">Explore Our Solutions</ArrowButton>
        </div>
      </div>
    </div>);

}