import React from 'react';

type LabelProps = {
  children: React.ReactNode;
  tone?: 'brand' | 'violet' | 'muted';
  className?: string;
};

const tones = {
  brand: 'text-brand',
  violet: 'text-violet',
  muted: 'text-muted'
};

export function Label({ children, tone = 'brand', className = '' }: LabelProps) {
  return (
    <span className={`inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] ${tones[tone]} ${className}`}>
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>);

}