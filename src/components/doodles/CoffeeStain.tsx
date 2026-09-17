import React from 'react';

interface CoffeeStainProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const CoffeeStain: React.FC<CoffeeStainProps> = ({
  className = '',
  size = 140,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none opacity-25 ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Outer irregular coffee ring */}
      <path
        d="M50 8 C72 7 92 26 91 50 C90 73 71 92 48 91 C24 90 8 72 9 49 C10 25 27 9 50 8"
        stroke="#8b5a2b"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="14 3 8 4 20 2"
        fill="#c49a6c"
        fillOpacity="0.08"
      />
      {/* Concentric inner coffee drip */}
      <path
        d="M48 14 C66 13 84 29 83 48 C82 67 66 83 47 82 C27 81 14 66 15 48 C16 28 30 15 48 14"
        stroke="#a06d3b"
        strokeWidth="1.5"
        strokeDasharray="6 8 12 4"
        opacity="0.6"
      />
      {/* Spatter dots */}
      <circle cx="94" cy="42" r="1.5" fill="#8b5a2b" opacity="0.4" />
      <circle cx="86" cy="80" r="2" fill="#8b5a2b" opacity="0.3" />
      <circle cx="12" cy="30" r="1" fill="#8b5a2b" opacity="0.4" />
      <circle cx="34" cy="94" r="1.5" fill="#8b5a2b" opacity="0.35" />
    </svg>
  );
};
