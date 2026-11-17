import React from 'react';
import { LOGO_SRC, company } from '../data/brand';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const heights = { sm: 30, md: 38, lg: 64 };

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const h = heights[size];
  if (LOGO_SRC) {
    return (
      <img
        src={LOGO_SRC}
        alt={company.name}
        draggable={false}
        className={`block w-auto max-w-none select-none object-contain ${className}`}
        style={{ height: h }} />);


  }
  // Neutral placeholder shown only until the official logo URL is set in data/brand.ts
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap font-extrabold tracking-tight text-ink ${className}`}
      style={{ height: h, fontSize: Math.round(h * 0.5) }}>
      
      {company.name}
    </span>);

}