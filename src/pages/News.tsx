import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { RevealText } from '../components/ui/RevealText';
import { Reveal } from '../components/ui/Reveal';
import { Label } from '../components/ui/Label';
import { ArticleCard, formatDate } from '../components/news/ArticleCard';
import { FinalCTA } from '../components/home/FinalCTA';
import { PortalTab, articles, insightTopics, portalTabs, researchTopics, trendingIds } from '../data/insights';
import { EASE } from '../utils/motion';

export function News() {
  const [topic, setTopic] = useState<string>('All');
  const [tab, setTab] = useState<PortalTab>('Latest');
  const [lead, second, third] = articles;

  const filtered = useMemo(
    () => topic === 'All' ? articles.filter((a) => a.section === 'insights') : articles.filter((a) => a.tags.includes(topic) || a.category === topic),
    [topic]
  );

  const portalList = useMemo(() => {
    if (tab === 'Trending') return trendingIds.map((id) => articles.find((a) => a.id === id)!).filter(Boolean);
    if (tab === 'Industry News') return articles.filter((a) => a.section === 'research');
    return [...articles].sort((a, b) => b.date.localeCompare(a.date));
  }, [tab]);

  return (
    <>
      <PageHero
        label="News & Views"
        lines={['News', <span key="v"><span className="text-violet">&amp;</span> views.</span>]}
        intro="Explore the latest news, perspectives, ideas and developments from Amigo Interactive." />
      

      {/* Latest */}
      <section id="latest" className="bg-white pb-24 lg:pb-32">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <ArticleCard article={lead} variant="feature" />
          </Reveal>
          <div className="flex flex-col gap-10 border-line lg:col-span-4 lg:border-l lg:pl-10">
            <Label tone="violet">Featured</Label>
            {[second, third].map((a, i) =>
            <Reveal key={a.id} delay={0.1 + i * 0.06}>
                <ArticleCard article={a} variant="standard" />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Research & Intelligence */}
      <section id="research" className="bg-sky py-24 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>Research &amp; Intelligence</Label>
            <RevealText className="display-md mt-6 text-ink" lines={['Insight that', <span key="s" className="text-brand">shapes strategy.</span>]} />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-body">
                Discover research, data and insights shaping digital advertising, marketing and audience engagement.
              </p>
            </Reveal>
            <ul className="mt-10 border-t border-ink/10">
              {researchTopics.map((t, i) =>
              <Reveal key={t.title} delay={0.1 + i * 0.05}>
                  <li className="border-b border-ink/10 py-5">
                    <p className="text-xl font-bold tracking-tight text-ink">{t.title}</p>
                    <p className="mt-1 text-[15px] text-body">{t.text}</p>
                  </li>
                </Reveal>
              )}
            </ul>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            {articles.
            filter((a) => a.section === 'research').
            map((a, i) =>
            <Reveal key={a.id} delay={i * 0.06}>
                  <ArticleCard article={a} />
                </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Marketing Insights */}
      <section id="insights" className="bg-white py-24 lg:py-32">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Label tone="violet">Marketing Insights</Label>
              <RevealText className="display-md mt-6 text-ink" lines={['Perspectives on', <span key="m" className="text-violet">modern marketing.</span>]} />
            </div>
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:justify-end lg:px-0" role="tablist" aria-label="Filter insights by topic">
              {['All', ...insightTopics].map((t) =>
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={topic === t}
                onClick={() => setTopic(t)}
                className={`inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors duration-200 ${
                topic === t ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink hover:border-brand/40 hover:text-brand'}`
                }>
                
                  {t}
                </button>
              )}
            </div>
          </div>
          <div className="mt-14 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={topic}
                className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: EASE }}>
                
                {filtered.length > 0 ?
                filtered.map((a) => <ArticleCard key={a.id} article={a} />) :

                <p className="text-lg text-body sm:col-span-2 lg:col-span-3">
                    New perspectives on {topic} are on the way. <button type="button" onClick={() => setTopic('All')} className="font-semibold text-brand underline-offset-4 hover:underline">See all insights</button>
                  </p>
                }
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* News Portal */}
      <section id="portal" className="bg-canvas py-24 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>News Portal</Label>
            <RevealText className="display-md mt-6 text-ink" lines={['Amigo', <span key="n" className="text-brand">News Portal.</span>]} />
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-body">Stay connected with the latest developments, industry updates and perspectives.</p>
            </Reveal>
            <div className="mt-10 inline-flex rounded-full border border-line bg-white p-1" role="tablist" aria-label="Portal categories">
              {portalTabs.map((t) =>
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className="relative h-10 whitespace-nowrap rounded-full px-4 text-sm font-semibold">
                
                  {tab === t && <motion.span layoutId="portal-pill" className="absolute inset-0 rounded-full bg-sky-deep" transition={{ duration: 0.25, ease: EASE }} />}
                  <span className={`relative ${tab === t ? 'text-brand' : 'text-body'}`}>{t}</span>
                </button>
              )}
            </div>
          </div>
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.ol
                key={tab}
                className="border-t border-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}>
                
                {portalList.map((a, i) =>
                <motion.li
                  key={a.id}
                  className="border-b border-line"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE, delay: i * 0.04 }}>
                  
                    <Link to="/news#latest" className="group grid grid-cols-12 items-center gap-4 py-6">
                      <span className="col-span-2 text-sm font-bold tabular-nums text-muted sm:col-span-1">0{i + 1}</span>
                      <span className="col-span-10 sm:col-span-8">
                        <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-brand">{a.category}</span>
                        <span className="mt-1 block text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">{a.title}</span>
                      </span>
                      <span className="col-span-10 col-start-3 flex items-center justify-between text-sm text-muted sm:col-span-3 sm:col-start-auto sm:justify-end sm:gap-4">
                        {formatDate(a.date)}
                        <ArrowRightIcon aria-hidden className="h-4 w-4 transition-[transform,color] group-hover:translate-x-1 group-hover:text-brand" />
                      </span>
                    </Link>
                  </motion.li>
                )}
              </motion.ol>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="py-6">
        <FinalCTA />
      </div>
    </>);

}