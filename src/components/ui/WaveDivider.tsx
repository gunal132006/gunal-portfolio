import React from 'react';

interface WaveDividerProps {
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ className = '' }) => {
  return (
    <div className={`wave-parent relative w-full overflow-visible mt-28 sm:mt-36 mb-12 ${className}`} aria-hidden="true">
      {/* Floating & Drifting Paper Ship from Reference */}
      <img
        src="/Ship.webp"
        className="ship pointer-events-none"
        alt="ship"
        loading="lazy"
        decoding="async"
      />
      {/* Continuous Scrolling Blue Wavy Band */}
      <div className="wave-container" />
    </div>
  );
};
