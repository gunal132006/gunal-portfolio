import React from 'react';
import { TiltCard } from './TiltCard';

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
  ringCount = 20,
  isUpcoming = false,
  style,
}) => {
  return (
    <TiltCard
      baseRotate={baseRotate}
      maxTilt={12}
      scale={1.04}
      className={`Flip-Parent relative inline-block ${className}`}
      style={style}
    >
      <div className="Flip-Notebook relative flex flex-col">
        {/* Authentic 18 Wire Spiral Loops from Reference */}
        {Array.from({ length: ringCount }).map((_, a) => (
          <img
            key={a}
            src="/spiral.webp"
            className="Spiral"
            style={{ top: `${a * 22}px` }}
            loading="lazy"
            decoding="async"
            alt="spiral"
          />
        ))}

        {/* Inner Project Content */}
        <div className="Project1 flex flex-col h-full justify-between px-3">
          <div>
            {/* Project Screenshot if provided */}
            {image && (
              <div className="w-full h-32 mb-2 rounded border border-stone-300 overflow-hidden bg-stone-100">
                <img
                  src={image}
                  alt={title || 'Project preview'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Project Title */}
            {title && (
              <h3
                className={`${isUpcoming ? '!text-[#2f2f2f]' : ''} ${
                  title.length > 35 ? '!text-[22px] !leading-[1.15] !mb-2' : ''
                }`}
              >
                {title}
              </h3>
            )}

            {/* Project Description in Reenie Beanie font */}
            {description && (
              <p className="Project1-Desc text-[#2f2f2f]">
                {description}
              </p>
            )}

            {/* Technology Highlights */}
            {tags.length > 0 && (
              <div className="Project-Highlights flex-wrap">
                {tags.map((tag, idx) => (
                  <p key={idx}>
                    <span className="Project-Marker">{tag}</span>
                  </p>
                ))}
              </div>
            )}

            {children}
          </div>

          {/* Hand-Drawn Action Buttons */}
          {(repoUrl || liveUrl) && (
            <div className="Project1-Button mb-3">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Project1-Repo"
                  onClick={onRepoClick}
                >
                  <p>Repository</p>
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Project1-Live"
                  onClick={onLiveClick}
                >
                  <p>Live</p>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </TiltCard>
  );
};
