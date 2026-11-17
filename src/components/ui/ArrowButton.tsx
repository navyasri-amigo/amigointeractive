import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'soft' | 'ghost';

type ArrowButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: boolean;
};

const base =
'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/25 disabled:pointer-events-none disabled:opacity-70';

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark hover:shadow-[0_14px_30px_-14px_rgba(37,99,235,0.75)]',
  secondary: 'border border-line bg-white text-ink hover:border-brand/40 hover:text-brand hover:shadow-[0_12px_30px_-16px_rgba(23,32,51,0.3)]',
  soft: 'bg-sky-deep text-brand hover:bg-brand-tint',
  ghost: 'text-ink hover:text-brand'
};

const sizes = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-[15px]'
};

export function ArrowButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  icon = true
}: ArrowButtonProps) {
  const cls = `${base} ${variants[variant]} ${variant === 'ghost' ? 'h-auto px-0' : sizes[size]} ${className}`;
  const content =
  <>
      <span>{children}</span>
      {icon &&
    <ArrowRightIcon
      aria-hidden
      className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-1" />

    }
    </>;

  if (to) {
    return (
      <Link to={to} className={cls} data-cursor="go">
        {content}
      </Link>);

  }
  if (href) {
    return (
      <a href={href} className={cls} data-cursor="go" target="_blank" rel="noreferrer">
        {content}
      </a>);

  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} data-cursor="go">
      {content}
    </button>);

}