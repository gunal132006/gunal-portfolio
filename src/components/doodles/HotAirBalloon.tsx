import React from 'react';

interface HotAirBalloonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const HotAirBalloon: React.FC<HotAirBalloonProps> = ({
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
        viewBox="0 0 160 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* ================= BALLOON ENVELOPE ================= */}
        {/* Outer Contour */}
        <path
          d="M80 15 C35 15 15 50 20 85 C25 120 60 148 70 155 L90 155 C100 148 135 120 140 85 C145 50 125 15 80 15 Z"
          fill="#fdfbf7"
          stroke="#2f2f2f"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Center Vertical Strip (Pastel Orange) */}
        <path
          d="M80 15 C70 45 68 115 70 155 L90 155 C92 115 90 45 80 15 Z"
          fill="#FFD6A5"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />

        {/* Left Side Strip (Soft Sky Blue) */}
        <path
          d="M48 24 C30 50 32 105 45 140 C52 146 62 151 70 155 C68 115 70 45 80 15 C68 16 56 19 48 24 Z"
          fill="#A7E6FF"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />

        {/* Right Side Strip (Soft Sky Blue) */}
        <path
          d="M112 24 C130 50 128 105 115 140 C108 146 98 151 90 155 C92 115 90 45 80 15 C92 16 104 19 112 24 Z"
          fill="#A7E6FF"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />

        {/* Far Left Edge Fill (Pale Cream / Mint) */}
        <path
          d="M48 24 C30 50 32 105 45 140 C35 130 25 105 20 85 C15 50 35 15 80 15 C68 16 56 19 48 24 Z"
          fill="#C8F7C5"
          fillOpacity="0.7"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />

        {/* Far Right Edge Fill (Pale Cream / Mint) */}
        <path
          d="M112 24 C130 50 128 105 115 140 C125 130 135 105 140 85 C145 50 125 15 80 15 C92 16 104 19 112 24 Z"
          fill="#C8F7C5"
          fillOpacity="0.7"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />

        {/* Horizontal Garland / Bunting on Balloon */}
        <path
          d="M24 75 Q 50 88 80 88 Q 110 88 136 75"
          stroke="#e44242"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 3"
        />
        <path
          d="M32 105 Q 56 118 80 118 Q 104 118 128 105"
          stroke="#2f2f2f"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Burner Collar */}
        <rect
          x="68"
          y="155"
          width="24"
          height="6"
          rx="2"
          fill="#52525b"
          stroke="#2f2f2f"
          strokeWidth="1.5"
        />

        {/* Rigging Ropes */}
        <line x1="70" y1="161" x2="66" y2="182" stroke="#2f2f2f" strokeWidth="1.5" />
        <line x1="76" y1="161" x2="72" y2="182" stroke="#2f2f2f" strokeWidth="1.2" />
        <line x1="84" y1="161" x2="88" y2="182" stroke="#2f2f2f" strokeWidth="1.2" />
        <line x1="90" y1="161" x2="94" y2="182" stroke="#2f2f2f" strokeWidth="1.5" />

        {/* ================= BASKET ================= */}
        <rect
          x="64"
          y="182"
          width="32"
          height="24"
          rx="3"
          fill="#d4a373"
          stroke="#2f2f2f"
          strokeWidth="2"
        />

        {/* Basket Wicker Texture Lines */}
        <line x1="64" y1="190" x2="96" y2="190" stroke="#8b5a2b" strokeWidth="1.2" />
        <line x1="64" y1="198" x2="96" y2="198" stroke="#8b5a2b" strokeWidth="1.2" />
        <line x1="72" y1="182" x2="72" y2="206" stroke="#8b5a2b" strokeWidth="1.2" />
        <line x1="80" y1="182" x2="80" y2="206" stroke="#8b5a2b" strokeWidth="1.2" />
        <line x1="88" y1="182" x2="88" y2="206" stroke="#8b5a2b" strokeWidth="1.2" />

        {/* Small Mascot in the Basket */}
        <circle cx="80" cy="177" r="5" fill="#ffffff" stroke="#2f2f2f" strokeWidth="1.2" />
        <circle cx="78" cy="176" r="0.8" fill="#2f2f2f" />
        <circle cx="82" cy="176" r="0.8" fill="#2f2f2f" />

        {/* Small hanging sandbags */}
        <circle cx="61" cy="192" r="3.5" fill="#edd6b6" stroke="#2f2f2f" strokeWidth="1" />
        <circle cx="99" cy="192" r="3.5" fill="#edd6b6" stroke="#2f2f2f" strokeWidth="1" />
      </svg>
    </div>
  );
};
