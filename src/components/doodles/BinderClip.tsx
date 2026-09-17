import React from 'react';

interface BinderClipProps {
  className?: string;
  style?: React.CSSProperties;
}

export const BinderClip: React.FC<BinderClipProps> = ({
  className = '',
  style,
}) => {
  return (
    <div
      className={`pointer-events-none select-none drop-shadow-sm ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 44 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Silver wire arms */}
        <path
          d="M12 28 L12 10 C12 6, 32 6, 32 10 L32 28"
          stroke="#a1a1aa"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M16 28 L16 14 C16 12, 28 12, 28 14 L28 28"
          stroke="#d4d4d8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Black clamp body */}
        <path
          d="M6 28 L38 28 L34 50 L10 50 Z"
          fill="#18181b"
          stroke="#27272a"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Metallic clamp highlight */}
        <line x1="8" y1="31" x2="36" y2="31" stroke="#52525b" strokeWidth="1.2" />
        <line x1="12" y1="46" x2="32" y2="46" stroke="#3f3f46" strokeWidth="1" />
      </svg>
    </div>
  );
};
