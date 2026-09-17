import React from 'react';

interface PaperPlaneProps {
  className?: string;
  rotate?: string;
  showTrail?: boolean;
  style?: React.CSSProperties;
}

export const PaperPlane: React.FC<PaperPlaneProps> = ({
  className = '',
  rotate = '15deg',
  showTrail = true,
  style,
}) => {
  return (
    <div
      className={`inline-block pointer-events-none select-none ${className}`}
      style={{ transform: `rotate(${rotate})`, ...style }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        {/* Optional dashed contrail / loop */}
        {showTrail && (
          <path
            d="M5 80 C 15 85, 30 65, 20 45 C 10 25, 40 20, 60 35"
            stroke="#545454"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        )}

        {/* Paper Plane Fold Faces */}
        {/* Left Wing */}
        <polygon
          points="60,35 110,12 85,75"
          fill="#ffffff"
          stroke="#2f2f2f"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Right Underbody Fold */}
        <polygon
          points="60,35 110,12 88,48"
          fill="#e5e5e5"
          stroke="#2f2f2f"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Center Spine Fold */}
        <polygon
          points="88,48 110,12 85,75"
          fill="#f4f4f5"
          stroke="#2f2f2f"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Inner Wing Shadow */}
        <polygon
          points="60,35 88,48 78,54"
          fill="#d4d4d8"
          stroke="#2f2f2f"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
