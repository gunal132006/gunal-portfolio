import React from 'react';

interface PencilShavingsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PencilShavings: React.FC<PencilShavingsProps> = ({
  className = '',
  style,
}) => {
  return (
    <div
      className={`pointer-events-none select-none drop-shadow-md ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Outer Fluted Wood Shaving Fan */}
        <path
          d="M30 90 C 35 50, 70 25, 115 30 C 135 32, 145 50, 140 70 C 135 88, 115 95, 95 90 C 70 85, 55 95, 50 115 C 48 122, 38 125, 32 118 C 26 110, 27 98, 30 90 Z"
          fill="#edd6b6"
          stroke="#9a6f47"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Fluted Serrated Wood Edges */}
        <path
          d="M115 30 C 122 34, 126 31, 132 37 C 137 42, 142 41, 144 48 C 146 55, 142 61, 140 70"
          stroke="#9a6f47"
          strokeWidth="2"
          fill="none"
        />

        {/* Colored Pencil Lacquer Rim (Red/Coral Rim) */}
        <path
          d="M112 28 C 124 30, 140 44, 142 66 C 143 78, 132 88, 120 92"
          stroke="#e44242"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner Dark Lead/Graphite Core Fan */}
        <ellipse
          cx="90"
          cy="68"
          rx="18"
          ry="14"
          fill="#3f3f46"
          stroke="#27272a"
          strokeWidth="1.5"
        />

        {/* Concentric Curl Lines */}
        <path
          d="M48 85 C 65 60, 95 50, 120 58"
          stroke="#c49a6c"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M58 98 C 72 80, 95 75, 110 82"
          stroke="#c49a6c"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Stray tiny wood flake */}
        <polygon
          points="25,45 35,40 38,48 28,52"
          fill="#edd6b6"
          stroke="#9a6f47"
          strokeWidth="1.2"
        />
        <line x1="30" y1="40" x2="38" y2="48" stroke="#e44242" strokeWidth="2" />
      </svg>
    </div>
  );
};
