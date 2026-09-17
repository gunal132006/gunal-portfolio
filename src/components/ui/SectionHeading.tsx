import React from 'react';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  color?: 'black' | 'red' | 'blue';
  rotate?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  color = 'black',
  rotate = '-2deg',
  className = '',
}) => {
  const colorMap = {
    black: 'text-ink',
    red: 'text-marker-red',
    blue: 'text-marker-blue',
  };

  return (
    <div
      className={`text-center my-8 ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <h2
        className={`font-marker text-4xl sm:text-5xl tracking-wide inline-block ${colorMap[color]}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-sketch text-lg sm:text-xl text-ink-muted mt-2 tracking-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
