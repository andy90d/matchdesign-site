// components/ui/Button.tsx
'use client'; // necessario: accetta onClick, quindi va eseguito lato client

import type { ReactNode, MouseEventHandler } from 'react';

type ButtonProps = {
  children: ReactNode;      // il testo
  icon?: ReactNode;         // opzionale — qualunque icona
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  variant?: 'fill' | 'line';
  href?: string;             // se presente → <a>, altrimenti → <button>
  onClick?: MouseEventHandler;
  type?: 'button' | 'submit';
  className?: string;
};

const base =
  'inline-flex items-center gap-2 font-bold text-[0.98rem] px-[26px] py-[14px] ' +
  'rounded-[2px] border-[1.5px] transition-colors duration-150';

const variants = {
  fill: 'bg-brand-red border-brand-red text-brand-paper hover:bg-[#c23a33] hover:border-[#c23a33]',
  line: 'bg-transparent border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-brand-paper',
};

export function Button({
  children,
  icon,
  iconStart,
  iconEnd,
  variant = 'fill',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  const startIcon = iconStart || (!iconEnd ? icon : null);

  const content = (
    <>
      {startIcon}
      <span>{children}</span>
      {iconEnd}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}