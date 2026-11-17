import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { NewsSectionId, newsSections } from '../../data/megaMenu';
import { articles, insightTopics, portalTabs, researchTopics } from '../../data/insights';
import { ArticleCard, formatDate } from '../news/ArticleCard';
import { ArrowLink } from '../ui/ArrowLink';
import { EASE } from '../../utils/motion';

export function NewsPanel() {
  const [section, setSection] = useState<NewsSectionId>('news');
  const current = newsSections.find((s) => s.id === section) ?? newsSections[0];
  const featured = articles[0];

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 border-r border-line p-8 xl:p-10">
          <p className="text-[2.6rem] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink xl:text-5xl">
            News
            <br />
            <span className="text-violet">&amp;</span>
            <br />
            Views
          </p>
          <ul className="mt-8 space-y-1">
            {newsSections.map((s) =>
            <li key={s.id}>
                <Link
                to={s.to}
                onMouseEnter={() => setSection(s.id)}
                onFocus={() => setSection(s.id)}
                className={`flex items-baseline gap-3 rounded-xl px-3 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                section === s.id ? 'bg-sky text-brand' : 'text-ink hover:text-brand'}`
                }>
                
                  <span className="text-[11px] tabular-nums text-muted">{s.n}</span>
                  {s.title}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="relative col-span-5 p-8 xl:p-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: EASE }}>
              
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                {section === 'portal' ? 'Amigo News Portal' : current.title}
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-body">{current.desc}</p>
              <div className="mt-6">
                <SectionBody id={section} />
              </div>
              <ArrowLink to={current.to} className="mt-6">
                {current.cta}
              </ArrowLink>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="col-span-4 p-6 pl-0">
          <div className="h-full rounded-[20px] bg-sky p-5">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-violet">Latest article</p>
            <ArticleCard article={featured} variant="standard" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-line px-10 py-4">
        <p className="text-[13px] text-muted">Perspectives on advertising, marketing, data and growth.</p>
        <ArrowLink to="/news">View All Insights</ArrowLink>
      </div>
    </div>);

}

function SectionBody({ id }: {id: NewsSectionId;}) {
  if (id === 'news') {
    return (
      <div className="-mx-2 space-y-1">
        {articles.slice(1, 3).map((a) =>
        <ArticleCard key={a.id} article={a} variant="compact" />
        )}
      </div>);

  }
  if (id === 'research') {
    return (
      <ul className="border-t border-line">
        {researchTopics.map((t) =>
        <li key={t.title} className="border-b border-line">
            <Link to="/news#research" className="group flex items-center justify-between py-3.5">
              <span>
                <span className="block text-[15px] font-bold text-ink transition-colors group-hover:text-brand">{t.title}</span>
                <span className="block text-[13px] text-muted">{t.text}</span>
              </span>
              <ArrowRightIcon aria-hidden className="h-4 w-4 text-muted transition-[transform,color] group-hover:translate-x-1 group-hover:text-brand" />
            </Link>
          </li>
        )}
      </ul>);

  }
  if (id === 'insights') {
    return (
      <ul className="flex flex-wrap gap-2">
        {insightTopics.map((t) =>
        <li key={t}>
            <Link
            to="/news#insights"
            className="inline-flex h-9 items-center rounded-full border border-line bg-white px-4 text-[13px] font-semibold text-ink transition-colors hover:border-brand/40 hover:bg-sky hover:text-brand">
            
              {t}
            </Link>
          </li>
        )}
      </ul>);

  }
  return (
    <ul className="border-t border-line">
      {portalTabs.map((tab, i) => {
        const a = articles[i + 2];
        return (
          <li key={tab} className="border-b border-line">
            <Link to="/news#portal" className="group flex items-center justify-between gap-4 py-3.5">
              <span className="min-w-0">
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-brand">{tab}</span>
                <span className="mt-0.5 block truncate text-[14px] font-semibold text-ink group-hover:text-brand">{a.title}</span>
              </span>
              <span className="shrink-0 text-xs text-muted">{formatDate(a.date)}</span>
            </Link>
          </li>);

      })}
    </ul>);

}