import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowRightIcon } from 'lucide-react';
import { Article } from '../../data/insights';

type ArticleCardProps = {
  article: Article;
  variant?: 'feature' | 'standard' | 'compact';
  className?: string;
};

export function formatDate(date: string) {
  return format(new Date(`${date}T12:00:00`), 'MMM d, yyyy');
}

export function ArticleCard({ article, variant = 'standard', className = '' }: ArticleCardProps) {
  if (variant === 'compact') {
    return (
      <Link to="/news#latest" className={`group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-sky ${className}`}>
        <div className="h-[72px] w-[96px] shrink-0 overflow-hidden rounded-xl bg-sky">
          <img
            src={article.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
          
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">{article.category}</p>
          <p className="mt-1 line-clamp-2 text-[15px] font-bold leading-snug text-ink transition-transform duration-200 group-hover:translate-x-0.5">
            {article.title}
          </p>
          <p className="mt-1 text-xs text-muted">{formatDate(article.date)}</p>
        </div>
        <ArrowRightIcon aria-hidden className="h-4 w-4 shrink-0 text-muted transition-[transform,color] group-hover:translate-x-1 group-hover:text-brand" />
      </Link>);

  }

  const isFeature = variant === 'feature';
  return (
    <Link to="/news#latest" className={`group flex flex-col ${className}`} data-cursor="view">
      <div className={`overflow-hidden rounded-[24px] bg-sky ${isFeature ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        
      </div>
      <div className="mt-5 flex items-center gap-3 text-[12px]">
        <span className="font-bold uppercase tracking-[0.14em] text-brand">{article.category}</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
        <span className="text-muted">{formatDate(article.date)}</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
        <span className="text-muted">{article.readTime}</span>
      </div>
      <h3
        className={`mt-3 font-extrabold tracking-tight text-ink transition-colors duration-200 group-hover:text-brand ${
        isFeature ? 'text-3xl leading-[1.08] lg:text-[2.6rem]' : 'text-xl leading-snug'}`
        }>
        
        {article.title}
      </h3>
      {isFeature && <p className="mt-4 max-w-xl text-base leading-relaxed text-body">{article.excerpt}</p>}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
        Read article
        <ArrowRightIcon aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>);

}