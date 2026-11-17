import React from 'react';
import { articles } from '../../data/insights';
import { ArticleCard } from '../news/ArticleCard';
import { RevealText } from '../ui/RevealText';
import { Reveal } from '../ui/Reveal';
import { ArrowLink } from '../ui/ArrowLink';

export function NewsPreview() {
  const [lead, ...rest] = articles;
  return (
    <section className="bg-white py-24 lg:py-36" aria-labelledby="news-preview-heading">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 sm:flex-row sm:items-end">
          <div id="news-preview-heading">
            <RevealText className="display-lg text-ink" lines={['News', <span key="v"><span className="text-violet">&amp;</span> views.</span>]} />
          </div>
          <ArrowLink to="/news">View All News &amp; Views</ArrowLink>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ArticleCard article={lead} variant="feature" />
          </Reveal>
          <div className="flex flex-col gap-10 lg:col-span-5">
            {rest.slice(0, 2).map((a, i) =>
            <Reveal key={a.id} delay={0.1 + i * 0.06}>
                <ArticleCard article={a} variant="standard" />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}