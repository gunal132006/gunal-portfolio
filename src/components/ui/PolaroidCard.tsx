import React from 'react';
import { TiltCard } from './TiltCard';

export interface PolaroidCardProps {
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  className?: string;
  rotate?: string;
  tapeRotate?: string;
  showStamp?: boolean;
  stampText?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageSrc,
  imageAlt = 'Polaroid snapshot',
  caption = 'Me :)',
  className = '',
  rotate = '-2deg',
  showStamp = true,
  children,
  style,
}) => {
  return (
    <TiltCard
      baseRotate={rotate}
      maxTilt={10}
      scale={1.02}
      className={`relative inline-block ${className}`}
      style={style}
    >
      <div
        className="relative bg-white w-[270px] sm:w-[310px] lg:w-[350px] h-[370px] sm:h-[410px] lg:h-[450px] p-4 sm:p-5 pb-14 sm:pb-20 transition-transform duration-200"
        style={{
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Authentic Scotch Masking Tape across top */}
        <img
          src="/tape.webp"
          alt="tape"
          className="absolute -top-5 left-1/2 -translate-x-1/2 -rotate-[15deg] w-[160px] sm:w-[200px] pointer-events-none z-10"
        />

        {/* Rubber Stamp mark in bottom right corner */}
        {showStamp && (
          <img
            src="/Stamp.webp"
            alt="Stamp"
            className="absolute w-[75px] sm:w-[90px] lg:w-[100px] left-[62%] sm:left-[66%] top-[78%] sm:top-[79%] -rotate-[19deg] z-20 pointer-events-none"
          />
        )}

        {/* Inner Photo Area */}
        <div className="relative w-full h-full bg-[#f3efe6] overflow-hidden rounded-[6px] border border-[#e2ddd3] flex items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-[6px]"
              loading="eager"
            />
          ) : (
            children || (
              <div className="flex flex-col items-center justify-center p-4 text-center">
                <svg
                  className="w-12 h-12 text-stone-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-architect text-stone-500 text-sm">
                  [Photo Placeholder]
                </span>
              </div>
            )
          )}
        </div>

        {/* Handwritten Polaroid Caption */}
        {caption && (
          <div className="text-center mt-2 sm:mt-3">
            <p className="font-reenie text-3xl sm:text-[40px] text-[#264de4] tracking-wide leading-none">
              {caption}
            </p>
          </div>
        )}
      </div>
    </TiltCard>
  );
};
