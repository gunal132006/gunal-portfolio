import React, { useRef, useEffect, useState } from 'react';
import { Tape } from '../doodles/Tape';

export interface TornPaperProps {
  children: React.ReactNode;
  className?: string;
  tapeTop?: boolean;
  tapeRotate?: string;
  jitter?: number;
  step?: number;
  style?: React.CSSProperties;
}

export const TornPaper: React.FC<TornPaperProps> = ({
  children,
  className = '',
  tapeTop = true,
  tapeRotate = '1deg',
  jitter = 3.5,
  step = 6,
  style,
}) => {
  const paperRef = useRef<HTMLDivElement>(null);
  const [clipPolygon, setClipPolygon] = useState<string>(
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  );

  useEffect(() => {
    const el = paperRef.current;
    if (!el) return;

    const generateJaggedEdge = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (w === 0 || h === 0) return;

      const points: string[] = [];

      // Top edge (left to right)
      for (let x = 0; x <= w; x += step) {
        const offset = Math.random() * jitter;
        points.push(`${x}px ${offset.toFixed(1)}px`);
      }

      // Right edge (top to bottom)
      for (let y = 0; y <= h; y += step) {
        const offset = w - Math.random() * jitter;
        points.push(`${offset.toFixed(1)}px ${y}px`);
      }

      // Bottom edge (right to left)
      for (let x = w; x >= 0; x -= step) {
        const offset = h - Math.random() * jitter;
        points.push(`${x}px ${offset.toFixed(1)}px`);
      }

      // Left edge (bottom to top)
      for (let y = h; y >= 0; y -= step) {
        const offset = Math.random() * jitter;
        points.push(`${offset.toFixed(1)}px ${y}px`);
      }

      setClipPolygon(`polygon(${points.join(', ')})`);
    };

    generateJaggedEdge();
    window.addEventListener('resize', generateJaggedEdge);
    return () => window.removeEventListener('resize', generateJaggedEdge);
  }, [jitter, step]);

  return (
    <div
      className={`relative filter drop-shadow-[4px_6px_14px_rgba(0,0,0,0.18)] ${className}`}
      style={style}
    >
      {/* Optional frosted scotch tape on top */}
      {tapeTop && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <Tape rotate={tapeRotate} width="110px" />
        </div>
      )}

      {/* Torn paper container with SVG noise texture */}
      <div
        ref={paperRef}
        className="relative bg-[#f4f1ea] p-8 text-ink-dark transition-all"
        style={{
          clipPath: clipPolygon,
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        {/* Subtle paper grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};
