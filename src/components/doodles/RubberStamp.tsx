import React from 'react';

interface RubberStampProps {
  text?: string;
  subtext?: string;
  className?: string;
  rotate?: string;
  color?: string;
  style?: React.CSSProperties;
}

export const RubberStamp: React.FC<RubberStampProps> = ({
  text = 'APPROVED',
  subtext = 'PORTFOLIO 2026',
  className = '',
  rotate = '-18deg',
  color = '#e44242',
  style,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center p-2 select-none pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        border: `3px dashed ${color}`,
        borderRadius: '50%',
        width: '110px',
        height: '110px',
        color: color,
        opacity: 0.85,
        maskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full rounded-full border border-dashed flex flex-col items-center justify-center p-1 text-center"
        style={{ borderColor: color }}
      >
        <span className="font-marker text-[10px] tracking-widest uppercase">{subtext}</span>
        <span className="font-marker text-sm font-bold tracking-wider my-0.5 border-y border-dashed py-0.5 w-full text-center" style={{ borderColor: color }}>
          {text}
        </span>
        <span className="font-sketch text-[9px] tracking-tight">★ VERIFIED ★</span>
      </div>
    </div>
  );
};
