import React, { useRef, useEffect, useState } from 'react';

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
      const width = el.offsetWidth || 500;
      const height = el.offsetHeight || 300;

      const points: string[] = [];

      // Top edge with subtle paper tearing
      for (let x = 0; x <= width; x += step) {
        const offset = (Math.random() - 0.5) * (jitter * 0.7);
        points.push(`${x}px ${Math.max(0, offset).toFixed(1)}px`);
      }

      // Right edge with jagged fiber rips
      for (let y = 0; y <= height; y += step) {
        const offset = width - Math.random() * jitter;
        points.push(`${offset.toFixed(1)}px ${y}px`);
      }

      // Bottom edge
      for (let x = width; x >= 0; x -= step) {
        const offset = height - Math.random() * jitter;
        points.push(`${x}px ${offset.toFixed(1)}px`);
      }

      // Left edge
      for (let y = height; y >= 0; y -= step) {
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
      className={`relative max-w-[620px] w-full mx-auto filter drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)] transition-transform duration-300 ${className}`}
      style={style}
    >
      {/* Authentic Scotch Masking Tape across top center */}
      {tapeTop && (
        <img
          src="/tape.webp"
          alt="tape"
          style={{ transform: `rotate(${tapeRotate})` }}
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-[110px] z-20 pointer-events-none drop-shadow-sm"
        />
      )}

      {/* Torn paper container with SVG noise texture */}
      <div
        ref={paperRef}
        className="relative bg-[#f4f1ea] p-8 sm:p-10 text-[#2d2a26] transition-all min-h-[280px]"
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
          className="absolute inset-0 pointer-events-none opacity-60 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 font-patrick text-[1.3rem] sm:text-[1.4rem] leading-[1.65] text-[#2d2a26]">
          {children}
        </div>
      </div>
    </div>
  );
};
