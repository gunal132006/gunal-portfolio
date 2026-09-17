import React from 'react';

interface OrigamiBoatProps {
  className?: string;
  style?: React.CSSProperties;
}

export const OrigamiBoat: React.FC<OrigamiBoatProps> = ({
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
        viewBox="0 0 140 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Main Tall Sail (Folded Triangle - Cream/White) */}
        <polygon
          points="68,10 68,75 105,75"
          fill="#ffffff"
          stroke="#2f2f2f"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Jib / Front Sail (Folded Triangle - Light Shaded) */}
        <polygon
          points="66,22 66,75 32,75"
          fill="#f4f4f5"
          stroke="#2f2f2f"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Sail Fold Crease Shadow */}
        <polygon
          points="66,45 66,75 48,75"
          fill="#e4e4e7"
          stroke="#2f2f2f"
          strokeWidth="1.2"
        />

        {/* Origami Hull (Trapezoid Boat Body) */}
        <polygon
          points="15,75 125,75 100,102 40,102"
          fill="#fafafa"
          stroke="#2f2f2f"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Origami Center Hull Fold Line */}
        <polygon
          points="15,75 70,102 40,102"
          fill="#e4e4e7"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />
        <polygon
          points="125,75 70,102 100,102"
          fill="#d4d4d8"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />
        <line x1="15" y1="75" x2="70" y2="102" stroke="#2f2f2f" strokeWidth="2" />
        <line x1="125" y1="75" x2="70" y2="102" stroke="#2f2f2f" strokeWidth="2" />

        {/* Small Red Mast Flag / Pennant */}
        <polygon
          points="68,10 82,15 68,20"
          fill="#e44242"
          stroke="#2f2f2f"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
