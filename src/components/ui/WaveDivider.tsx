import React from 'react';
import { OrigamiBoat } from '../doodles/OrigamiBoat';

interface WaveDividerProps {
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-full overflow-hidden my-16 sm:my-20 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Floating Origami Boat */}
      <div className="relative w-full max-w-4xl mx-auto h-28 flex items-end justify-center">
        <div className="animate-boat-float transform -translate-y-2 z-20">
          <OrigamiBoat className="w-24 sm:w-32" />
        </div>
      </div>

      {/* Layered Hand-Drawn Waves */}
      <div className="relative w-full h-16 overflow-hidden">
        {/* Background Wave Layer */}
        <div
          className="absolute inset-0 w-[200%] h-full opacity-40 animate-wave-slow pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 20' fill='none'%3E%3Cpath d='M0 10 Q 30 0 60 10 T 120 10 L 120 20 L 0 20 Z' fill='%2360a5fa' stroke='%232f2f2f' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '160px 24px',
          }}
        />

        {/* Foreground Wave Layer */}
        <div
          className="absolute inset-0 w-[200%] h-full opacity-80 animate-wave-fast pointer-events-none -mt-1"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 20' fill='none'%3E%3Cpath d='M0 12 Q 30 2 60 12 T 120 12 L 120 20 L 0 20 Z' fill='%2393c5fd' stroke='%232f2f2f' stroke-width='1.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '130px 24px',
          }}
        />

        {/* Bottom wave base line */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#93c5fd] border-t border-[#2f2f2f] opacity-85" />
      </div>
    </div>
  );
};
