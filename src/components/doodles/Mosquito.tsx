import React, { useState } from 'react';

interface MosquitoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Mosquito: React.FC<MosquitoProps> = ({ className = '', style }) => {
  const [swatted, setSwatted] = useState(false);

  const handleClick = () => {
    if (!swatted) {
      setSwatted(true);
    }
  };

  return (
    <div
      className={`select-none transition-transform duration-200 ${className}`}
      style={style}
      onClick={handleClick}
      title={swatted ? 'Swatted! (Easter Egg)' : 'Click to swat the mosquito!'}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {!swatted ? (
        <div className="group cursor-pointer animate-pulse hover:scale-125 transition-transform">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-sm filter"
          >
            {/* Mosquito Wings */}
            <ellipse
              cx="16"
              cy="16"
              rx="12"
              ry="5"
              transform="rotate(-30 16 16)"
              fill="#e0f2fe"
              fillOpacity="0.75"
              stroke="#2f2f2f"
              strokeWidth="1.5"
            />
            <ellipse
              cx="32"
              cy="16"
              rx="12"
              ry="5"
              transform="rotate(30 32 16)"
              fill="#e0f2fe"
              fillOpacity="0.75"
              stroke="#2f2f2f"
              strokeWidth="1.5"
            />
            
            {/* Slender Body */}
            <path
              d="M24 16 C22 22, 22 30, 24 38 C25 30, 25 22, 24 16 Z"
              fill="#27272a"
              stroke="#18181b"
              strokeWidth="1.2"
            />
            {/* Head */}
            <circle cx="24" cy="14" r="3.5" fill="#18181b" />
            {/* Proboscis / Needle */}
            <line x1="24" y1="11" x2="24" y2="4" stroke="#18181b" strokeWidth="1.5" strokeLinecap="round" />
            {/* Eyes */}
            <circle cx="22.5" cy="13.5" r="0.8" fill="#ef4444" />
            <circle cx="25.5" cy="13.5" r="0.8" fill="#ef4444" />
            {/* Long Jointed Legs */}
            <path d="M22 20 L12 22 L8 32" stroke="#2f2f2f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M26 20 L36 22 L40 32" stroke="#2f2f2f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M22 26 L14 32 L10 44" stroke="#2f2f2f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M26 26 L34 32 L38 44" stroke="#2f2f2f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </svg>
          <span className="font-sketch text-[10px] text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity block text-center -mt-1">
            *bzzz*
          </span>
        </div>
      ) : (
        <div className="relative cursor-default animate-ping-once">
          {/* Blood Splat Ink Stamp */}
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-sm"
          >
            {/* Central splat */}
            <path
              d="M25 15 C32 14, 38 18, 37 26 C36 34, 30 38, 24 37 C17 36, 13 31, 14 24 C15 17, 19 16, 25 15 Z"
              fill="#dc2626"
              fillOpacity="0.8"
            />
            {/* Droplets */}
            <circle cx="39" cy="14" r="2.5" fill="#dc2626" fillOpacity="0.75" />
            <circle cx="43" cy="28" r="2" fill="#dc2626" fillOpacity="0.7" />
            <circle cx="28" cy="42" r="3" fill="#dc2626" fillOpacity="0.7" />
            <circle cx="10" cy="35" r="2" fill="#dc2626" fillOpacity="0.7" />
            <circle cx="11" cy="18" r="1.8" fill="#dc2626" fillOpacity="0.7" />
            {/* Flattened bug silhouette */}
            <ellipse cx="25" cy="26" rx="4" ry="2.5" fill="#18181b" />
            <line x1="22" y1="23" x2="18" y2="20" stroke="#18181b" strokeWidth="1" />
            <line x1="28" y1="23" x2="32" y2="20" stroke="#18181b" strokeWidth="1" />
            <line x1="21" y1="28" x2="16" y2="31" stroke="#18181b" strokeWidth="1" />
            <line x1="29" y1="28" x2="34" y2="31" stroke="#18181b" strokeWidth="1" />
          </svg>
          <span className="font-reenie text-xs text-marker-red font-bold block text-center -mt-1">
            splat!
          </span>
        </div>
      )}
    </div>
  );
};
