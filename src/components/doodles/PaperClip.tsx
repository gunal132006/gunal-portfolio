import React from 'react';

interface PaperClipProps {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

export const PaperClip: React.FC<PaperClipProps> = ({
  className = '',
  color = '#71717a',
  style,
}) => {
  return (
    <svg
      viewBox="0 0 50 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block pointer-events-none drop-shadow-sm ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Paperclip wire loop paths */}
      <path
        d="M20 90 L20 30 C20 16 38 16 38 30 L38 78 C38 88 12 88 12 78 L12 18 C12 4 46 4 46 18 L46 65"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Subtle metallic reflection highlight */}
      <path
        d="M19 88 L19 32 C19 18 37 18 37 32"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};
