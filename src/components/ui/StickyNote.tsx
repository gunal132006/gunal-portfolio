import React from 'react';
import { PushPin } from '../doodles/PushPin';
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
  pinColor = '#e44242',
  pinPosition = 'left',
  style,
}) => {
  const bgColor = COLOR_MAP[color] || color;

  return (
    <TiltCard
      baseRotate={rotate}
      maxTilt={14}
      scale={1.05}
      className={`relative inline-block ${className}`}
      style={style}
    >
      <div
        className="relative w-64 min-h-[250px] p-6 text-center font-sketch shadow-note transition-transform duration-200"
        style={{
          backgroundColor: bgColor,
          borderRadius: '2px',
          boxShadow: '3px 8px 20px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* PushPin on top */}
        <div
          className={`absolute -top-3.5 z-20 ${
            pinPosition === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-3'
          }`}
        >
          <PushPin color={pinColor} className="w-8 h-8" />
        </div>

        {/* Optional Title with Wavy Underline */}
        {title && (
          <h3 className="font-bold text-xl text-ink tracking-wide mb-3 mt-2 wavy-underline inline-block">
            {title}
          </h3>
        )}

        {/* Content */}
        <div className="text-ink text-lg leading-relaxed">{children}</div>
      </div>
    </TiltCard>
  );
};
