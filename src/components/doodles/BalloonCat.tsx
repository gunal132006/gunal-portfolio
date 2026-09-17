import React from 'react';

interface BalloonCatProps {
  className?: string;
  style?: React.CSSProperties;
}

export const BalloonCat: React.FC<BalloonCatProps> = ({
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
        viewBox="0 0 130 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* ================= BALLOONS ================= */}
        {/* Balloon 1: Cherry Red (Left) */}
        <ellipse
          cx="42"
          cy="38"
          rx="22"
          ry="28"
          fill="#f87171"
          stroke="#2f2f2f"
          strokeWidth="2"
        />
        {/* Balloon 1 Highlight */}
        <path
          d="M30 24 C34 18, 42 18, 46 22"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Balloon 1 Knot */}
        <polygon points="40,66 44,66 42,70" fill="#f87171" stroke="#2f2f2f" strokeWidth="1.2" />

        {/* Balloon 2: Sky Blue (Right) */}
        <ellipse
          cx="88"
          cy="42"
          rx="24"
          ry="30"
          fill="#60a5fa"
          stroke="#2f2f2f"
          strokeWidth="2"
        />
        {/* Balloon 2 Highlight */}
        <path
          d="M78 26 C84 20, 94 20, 98 24"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Balloon 2 Knot */}
        <polygon points="86,72 90,72 88,76" fill="#60a5fa" stroke="#2f2f2f" strokeWidth="1.2" />

        {/* Balloon 3: Sunny Yellow (Center Top) */}
        <ellipse
          cx="65"
          cy="28"
          rx="20"
          ry="26"
          fill="#fde047"
          stroke="#2f2f2f"
          strokeWidth="2"
        />
        {/* Balloon 3 Highlight */}
        <path
          d="M56 16 C60 12, 68 12, 72 16"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Balloon 3 Knot */}
        <polygon points="63,54 67,54 65,58" fill="#fde047" stroke="#2f2f2f" strokeWidth="1.2" />

        {/* ================= BALLOON STRINGS ================= */}
        <path d="M42 70 Q 52 88 65 105" stroke="#52525b" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M88 76 Q 78 92 65 105" stroke="#52525b" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M65 58 Q 65 80 65 105" stroke="#52525b" strokeWidth="1.2" strokeLinecap="round" />

        {/* ================= HANGING CAT ================= */}
        {/* Cat Tail (Curling up) */}
        <path
          d="M80 145 C95 142, 105 130, 98 120 C92 112, 85 120, 88 128"
          stroke="#2f2f2f"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cat Body */}
        <ellipse
          cx="65"
          cy="142"
          rx="18"
          ry="22"
          fill="#71717a"
          stroke="#2f2f2f"
          strokeWidth="2"
        />
        {/* White belly patch */}
        <ellipse cx="65" cy="144" rx="10" ry="14" fill="#f4f4f5" />

        {/* Cat Head */}
        <circle
          cx="65"
          cy="118"
          r="16"
          fill="#71717a"
          stroke="#2f2f2f"
          strokeWidth="2"
        />

        {/* Cat Ears */}
        <polygon points="52,110 50,96 60,105" fill="#71717a" stroke="#2f2f2f" strokeWidth="2" strokeLinejoin="round" />
        <polygon points="53,108 52,100 58,105" fill="#fca5a5" />
        <polygon points="78,110 80,96 70,105" fill="#71717a" stroke="#2f2f2f" strokeWidth="2" strokeLinejoin="round" />
        <polygon points="77,108 78,100 72,105" fill="#fca5a5" />

        {/* Eyes (Happy Closed Arcs) */}
        <path d="M57 116 Q 60 112 63 116" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M67 116 Q 70 112 73 116" stroke="#18181b" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Pink Nose & Mouth */}
        <polygon points="64,120 66,120 65,122" fill="#f43f5e" />
        <path d="M62 123 Q 65 125 68 123" stroke="#18181b" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* Whiskers */}
        <line x1="50" y1="120" x2="42" y2="118" stroke="#2f2f2f" strokeWidth="1" strokeLinecap="round" />
        <line x1="50" y1="123" x2="40" y2="125" stroke="#2f2f2f" strokeWidth="1" strokeLinecap="round" />
        <line x1="80" y1="120" x2="88" y2="118" stroke="#2f2f2f" strokeWidth="1" strokeLinecap="round" />
        <line x1="80" y1="123" x2="90" y2="125" stroke="#2f2f2f" strokeWidth="1" strokeLinecap="round" />

        {/* Paws Clinging to String */}
        <ellipse cx="61" cy="105" rx="4" ry="4.5" fill="#ffffff" stroke="#2f2f2f" strokeWidth="1.5" />
        <ellipse cx="69" cy="105" rx="4" ry="4.5" fill="#ffffff" stroke="#2f2f2f" strokeWidth="1.5" />

        {/* Back Feet */}
        <ellipse cx="55" cy="162" rx="4" ry="3.5" fill="#ffffff" stroke="#2f2f2f" strokeWidth="1.5" />
        <ellipse cx="75" cy="162" rx="4" ry="3.5" fill="#ffffff" stroke="#2f2f2f" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
