import React from 'react';
import { TiltCard } from './TiltCard';

export type StickyColor = 'orange' | 'blue' | 'green' | 'purple' | 'yellow';

const COLOR_MAP: Record<StickyColor, string> = {
  orange: '#FFD6A5',
  blue: '#A7E6FF',
  green: '#C8F7C5',
  purple: '#E8C4F7',
  yellow: '#ffeb7f',
};

export interface StickyNoteProps {
  title?: string;
  color?: StickyColor;
  children: React.ReactNode;
  className?: string;
  rotate?: string;
  pinColor?: string;
  pinPosition?: 'center' | 'left';
  style?: React.CSSProperties;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  title,
  color = 'yellow',
  children,
  className = '',
  rotate = '-1.5deg',
  style,
}) => {
  const bgColor = COLOR_MAP[color] || color;

  return (
    <TiltCard
      baseRotate={rotate}
      maxTilt={16}
      scale={1.06}
      className={`relative inline-block ${className}`}
      style={style}
    >
      <div
        className="relative w-[250px] h-[250px] p-[30px_20px] text-center font-architect transition-all duration-300"
        style={{
          backgroundColor: bgColor,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Authentic 3D PushPin in top-left */}
        <img
          src="/Push-Pin.webp"
          alt="Pushpin"
          className="absolute -top-3.5 -left-2.5 w-[42px] z-10 pointer-events-none"
        />

        {/* Title with wavy underline */}
        {title && (
          <h3 className="font-bold text-2xl text-[#2f2f2f] mb-4 mt-1 wavy-underline inline-block">
            {title}
          </h3>
        )}

        {/* Content list */}
        <div className="text-[#2f2f2f] text-xl leading-relaxed">{children}</div>
      </div>
    </TiltCard>
  );
};
