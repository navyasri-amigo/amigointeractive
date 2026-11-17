import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

type ArrowLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  tone?: 'ink' | 'brand';
};

export function ArrowLink({ to, children, className = '', tone = 'brand' }: ArrowLinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors duration-200 ${
      tone === 'brand' ? 'text-brand hover:text-brand-dark' : 'text-ink hover:text-brand'} ${
      className}`}>
      
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100" />
        
      </span>
      <ArrowRightIcon aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>);

}