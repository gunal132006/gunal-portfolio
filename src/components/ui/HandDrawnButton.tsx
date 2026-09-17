import React from 'react';

export interface HandDrawnButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const HandDrawnButton: React.FC<HandDrawnButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-lg px-3 py-1',
    md: 'text-2xl px-5 py-2',
    lg: 'text-3xl px-7 py-3',
  }[size];

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-reenie text-ink bg-white
    border-2 border-ink rounded-hand-2 select-none cursor-pointer
    transition-all duration-200 shadow-sm
    hover:bg-ink hover:text-white hover:rounded-hand-3 hover:scale-105 active:scale-95
    ${sizeClasses} ${className}
  `;

  if (asAnchor && href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={baseClasses}
      >
        {icon && <span className="inline-block">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
