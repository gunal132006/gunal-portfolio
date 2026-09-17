import React from 'react';

interface PushPinProps {
  className?: string;
  color?: string; // red, blue, brass, black
  style?: React.CSSProperties;
}

export const PushPin: React.FC<PushPinProps> = ({
  className = '',
  color = '#e44242',
  style,
}) => {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block pointer-events-none drop-shadow-md ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Pin Shadow */}
      <ellipse cx="20" cy="44" rx="10" ry="3" fill="#000000" fillOpacity="0.25" />
      {/* Pin Needle */}
      <path d="M19 26L20 42L21 26Z" fill="#71717a" stroke="#27272a" strokeWidth="0.75" />
      {/* Pin Lower Body */}
      <path
        d="M14 26C14 23 26 23 26 26L24 29C24 30 16 30 16 29L14 26Z"
        fill="#b91c1c"
        stroke="#27272a"
        strokeWidth="1"
      />
      {/* Pin Main Head */}
      <path
        d="M12 10C12 5 28 5 28 10L25 24C25 25 15 25 15 24L12 10Z"
        fill={color}
        stroke="#27272a"
        strokeWidth="1.2"
      />
      {/* Pin Top Disc */}
      <ellipse cx="20" cy="9" rx="8.5" ry="3.5" fill={color} stroke="#27272a" strokeWidth="1.2" />
      {/* Highlight Glare */}
      <path
        d="M16 8C17 6.8 22 6.8 23 8"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M16 12L17 21"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
};
