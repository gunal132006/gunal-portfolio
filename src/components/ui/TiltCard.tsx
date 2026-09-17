import React, { useRef, useEffect } from 'react';

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  baseRotate?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  style = {},
  maxTilt = 14,
  perspective = 1000,
  scale = 1.03,
  baseRotate = '0deg',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const animFrame = useRef<number | null>(null);
  const state = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    hovered: false,
  });

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const s = state.current;

    const loop = () => {
      const factor = s.hovered ? 0.12 : 0.08;
      s.currentX += (s.targetX - s.currentX) * factor;
      s.currentY += (s.targetY - s.currentY) * factor;

      const currentScale = s.hovered ? scale : 1;
      inner.style.transform = `perspective(${perspective}px) rotate(${baseRotate}) rotateX(${s.currentX.toFixed(
        3
      )}deg) rotateY(${s.currentY.toFixed(3)}deg) scale3d(${currentScale}, ${currentScale}, ${currentScale})`;

      if (
        s.hovered ||
        Math.abs(s.targetX - s.currentX) > 0.01 ||
        Math.abs(s.targetY - s.currentY) > 0.01
      ) {
        animFrame.current = requestAnimationFrame(loop);
      } else {
        animFrame.current = null;
      }
    };

    const startLoop = () => {
      if (!animFrame.current) {
        animFrame.current = requestAnimationFrame(loop);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;

      s.targetX = ((halfH - y) / halfH) * maxTilt;
      s.targetY = ((x - halfW) / halfW) * maxTilt;

      if (!s.hovered) {
        s.hovered = true;
        startLoop();
      }
    };

    const handleMouseLeave = () => {
      s.hovered = false;
      s.targetX = 0;
      s.targetY = 0;
      startLoop();
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrame.current) {
        cancelAnimationFrame(animFrame.current);
      }
    };
  }, [maxTilt, perspective, scale, baseRotate]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={style}>
      <div
        ref={innerRef}
        style={{
          transform: `rotate(${baseRotate})`,
          transformStyle: 'preserve-3d',
          transition: 'box-shadow 0.2s ease',
          willChange: 'transform',
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
};
