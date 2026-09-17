import React from 'react';

interface PenDoodleProps {
  className?: string;
  rotate?: string;
  style?: React.CSSProperties;
}

export const PenDoodle: React.FC<PenDoodleProps> = ({
  className = '',
  rotate = '-35deg',
  style,
}) => {
  return (
    <div
      className={`pointer-events-none select-none drop-shadow-md ${className}`}
      style={{ transform: `rotate(${rotate})`, ...style }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Ballpoint Pen Nib */}
        <polygon points="17,165 23,165 20,178" fill="#a1a1aa" stroke="#27272a" strokeWidth="1" />
        <circle cx="20" cy="178" r="1.2" fill="#2f2f2f" />

        {/* Nib Grip Cone */}
        <polygon points="14,140 26,140 23,165 17,165" fill="#3f3f46" stroke="#27272a" strokeWidth="1.2" />

        {/* Grip Rings */}
        <line x1="15" y1="145" x2="25" y2="145" stroke="#71717a" strokeWidth="1" />
        <line x1="16" y1="152" x2="24" y2="152" stroke="#71717a" strokeWidth="1" />

        {/* Main Pen Barrel (Classic Navy Blue ink pen) */}
        <rect
          x="13"
          y="30"
          width="14"
          height="110"
          rx="2"
          fill="#1e3a8a"
          stroke="#27272a"
          strokeWidth="1.5"
        />

        {/* White Barrel Highlight */}
        <line x1="15" y1="35" x2="15" y2="135" stroke="#ffffff" strokeWidth="1.2" opacity="0.4" />

        {/* Top Clicker / Cap */}
        <rect
          x="14"
          y="18"
          width="12"
          height="12"
          rx="1"
          fill="#d4d4d8"
          stroke="#27272a"
          strokeWidth="1.2"
        />
        <rect
          x="16"
          y="10"
          width="8"
          height="8"
          rx="1"
          fill="#a1a1aa"
          stroke="#27272a"
          strokeWidth="1"
        />

        {/* Pen Pocket Clip */}
        <path
          d="M27 30 L32 32 L32 75 L27 75"
          stroke="#a1a1aa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="27" cy="75" r="2" fill="#a1a1aa" />
      </svg>
    </div>
  );
};
