import React from 'react';

interface TapeProps {
  className?: string;
  width?: string;
  rotate?: string;
  style?: React.CSSProperties;
}

export const Tape: React.FC<TapeProps> = ({
  className = '',
  width = '140px',
  rotate = '-15deg',
  style,
}) => {
  return (
    <div
      className={`absolute pointer-events-none z-20 ${className}`}
      style={{
        width,
        height: '32px',
        backgroundColor: 'rgba(255, 255, 255, 0.62)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        borderLeft: '2px dashed rgba(210, 205, 195, 0.6)',
        borderRight: '2px dashed rgba(210, 205, 195, 0.6)',
        transform: `rotate(${rotate})`,
        ...style,
      }}
      aria-hidden="true"
    />
  );
};
