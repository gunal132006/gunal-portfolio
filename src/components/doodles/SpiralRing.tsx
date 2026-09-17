import React from 'react';

interface SpiralRingProps {
  className?: string;
  style?: React.CSSProperties;
}

export const SpiralRing: React.FC<SpiralRingProps> = ({
  className = '',
  style,
}) => {
  return (
    <svg
      viewBox="0 0 36 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none drop-shadow-sm ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Hole punch cutout shadow */}
      <circle cx="10" cy="10" r="4.5" fill="#2d2a26" fillOpacity="0.75" />
      
      {/* Wire loop behind and coming through hole */}
      <path
        d="M6 10 C6 3, 28 3, 30 10 C32 17, 10 17, 10 10"
        stroke="#4a4a4a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Wire highlight */}
      <path
        d="M8 8 C9 4, 25 4, 28 8"
        stroke="#d4d4d8"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
