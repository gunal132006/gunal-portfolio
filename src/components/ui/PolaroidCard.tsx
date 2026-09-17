import React from 'react';
import { Tape } from '../doodles/Tape';
import { RubberStamp } from '../doodles/RubberStamp';
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
  tapeRotate = '-12deg',
  showStamp = true,
  stampText = 'GUNAL S',
  children,
  style,
}) => {
  return (
    <TiltCard
      baseRotate={rotate}
      maxTilt={12}
      scale={1.03}
      className={`relative inline-block ${className}`}
      style={style}
    >
      <div
        className="relative bg-white w-full max-w-[290px] sm:w-80 p-5 pb-16 shadow-polaroid rounded-sm transition-transform duration-200"
        style={{
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Angled Scotch Tape at top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <Tape rotate={tapeRotate} width="130px" />
        </div>

        {/* Rubber Stamp mark */}
        {showStamp && (
          <div className="absolute -bottom-4 -right-4 z-20 pointer-events-none">
            <RubberStamp text={stampText} subtext="VERIFIED DEV" rotate="-15deg" />
          </div>
        )}

        {/* Inner Photo Area */}
        <div className="relative w-full aspect-[4/5] bg-[#e4dfd5] overflow-hidden rounded-[4px] border border-[#d6d0c4] flex items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
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
                <span className="font-sketch text-stone-500 text-sm">
                  [Photo Placeholder]
                </span>
              </div>
            )
          )}
        </div>

        {/* Handwritten Polaroid Caption */}
        {caption && (
          <div className="text-center mt-4">
            <p className="font-reenie text-3xl sm:text-4xl text-marker-blue tracking-wide">
              {caption}
            </p>
          </div>
        )}
      </div>
    </TiltCard>
  );
};
