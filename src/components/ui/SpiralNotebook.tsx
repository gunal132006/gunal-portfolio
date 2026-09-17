import React from 'react';
import { SpiralRing } from '../doodles/SpiralRing';
import { TiltCard } from './TiltCard';
import { HandDrawnButton } from './HandDrawnButton';

export interface SpiralNotebookProps {
  title?: string;
  description?: string;
  tags?: string[];
  image?: string | null;
  repoUrl?: string | null;
  liveUrl?: string | null;
  onRepoClick?: (e: React.MouseEvent) => void;
  onLiveClick?: (e: React.MouseEvent) => void;
  baseRotate?: string;
  children?: React.ReactNode;
  className?: string;
  ringCount?: number;
  isUpcoming?: boolean;
  style?: React.CSSProperties;
}

export const SpiralNotebook: React.FC<SpiralNotebookProps> = ({
  title,
  description,
  tags = [],
  image,
  repoUrl,
  liveUrl,
  onRepoClick,
  onLiveClick,
  baseRotate = '0deg',
  children,
  className = '',
  ringCount = 18,
  isUpcoming = false,
  style,
}) => {
  return (
    <TiltCard
      baseRotate={baseRotate}
      maxTilt={10}
      scale={1.03}
      className={`relative inline-block ${className}`}
      style={style}
    >
      <div
        className="relative w-full max-w-[340px] sm:w-[370px] min-h-[460px] bg-white pt-6 pb-6 px-6 pl-11 rounded-sm shadow-paper text-ink transition-transform duration-300 notebook-ruled flex flex-col"
        style={{
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.10), 0 2px 6px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Repeating Wire Spiral Rings along the left edge */}
        <div className="absolute top-4 left-1 flex flex-col gap-[14px] pointer-events-none z-20">
          {Array.from({ length: ringCount }).map((_, i) => (
            <SpiralRing key={i} className="w-7 h-4 -ml-4" />
          ))}
        </div>

        {/* Notebook Content */}
        <div className="relative z-10 flex flex-col h-full text-center flex-grow">
          
          {/* Optional Project Screenshot Area */}
          {image && (
            <div className="w-full h-36 mb-3 rounded border border-stone-300 overflow-hidden bg-stone-100 shadow-sm">
              <img
                src={image}
                alt={title || 'Project preview'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Project Title (Red Marker Font) */}
          {title && (
            <h3
              className={`font-marker tracking-wide mb-3 leading-snug ${
                isUpcoming ? 'text-ink-dark text-xl sm:text-2xl' : 'text-marker-redDark text-2xl sm:text-3xl'
              }`}
            >
              {title}
            </h3>
          )}

          {/* Project Description */}
          {description && (
            <p className="font-hand text-lg sm:text-xl text-ink leading-relaxed px-1 mb-4">
              {description}
            </p>
          )}

          {/* Technology Highlighter Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 my-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="highlighter font-sketch text-xs tracking-wider text-ink font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {children}

          {/* Action Buttons */}
          {(repoUrl || liveUrl) && (
            <div className="mt-auto pt-5 flex items-center justify-center gap-3">
              {repoUrl && (
                <HandDrawnButton
                  asAnchor
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  onClick={onRepoClick}
                  className="w-28 text-center text-lg"
                >
                  Repository
                </HandDrawnButton>
              )}
              {liveUrl && (
                <HandDrawnButton
                  asAnchor
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  onClick={onLiveClick}
                  className="w-24 text-center text-lg"
                >
                  Live
                </HandDrawnButton>
              )}
            </div>
          )}
        </div>
      </div>
    </TiltCard>
  );
};
