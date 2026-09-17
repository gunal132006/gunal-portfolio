import React from 'react';

interface CloudProps {
  className?: string;
  variant?: 1 | 2;
  style?: React.CSSProperties;
}

export const Cloud: React.FC<CloudProps> = ({
  className = '',
  variant = 1,
  style,
}) => {
  if (variant === 2) {
    return (
      <svg
        viewBox="0 0 160 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none drop-shadow-sm ${className}`}
        style={style}
        aria-hidden="true"
      >
        {/* Soft blue interior fill */}
        <path
          d="M30 65 C18 65 10 55 12 43 C14 31 25 25 35 27 C40 16 54 10 68 14 C78 7 94 9 102 18 C112 14 126 18 130 28 C144 30 152 42 148 54 C144 65 133 67 122 65 Z"
          fill="#d0ebff"
          fillOpacity="0.75"
        />
        {/* Sketch ink outline with hand-drawn wobble */}
        <path
          d="M30 65 C18 65 10 55 12 43 C14 31 25 25 35 27 C40 16 54 10 68 14 C78 7 94 9 102 18 C112 14 126 18 130 28 C144 30 152 42 148 54 C144 65 133 67 122 65 Z"
          stroke="#2f2f2f"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Internal sketch contour lines */}
        <path
          d="M45 42 C50 36 62 38 66 45"
          stroke="#2f2f2f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M85 36 C92 32 104 35 108 42"
          stroke="#2f2f2f"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 200 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none drop-shadow-sm ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Cloud main fill */}
      <path
        d="M40 85 C22 85 10 72 12 55 C14 38 30 30 42 34 C48 20 66 12 84 18 C96 9 118 11 128 22 C140 16 158 22 164 36 C182 38 192 54 186 70 C182 85 168 87 154 85 Z"
        fill="#bae6fd"
        fillOpacity="0.8"
      />
      {/* Sketch ink outline */}
      <path
        d="M40 85 C22 85 10 72 12 55 C14 38 30 30 42 34 C48 20 66 12 84 18 C96 9 118 11 128 22 C140 16 158 22 164 36 C182 38 192 54 186 70 C182 85 168 87 154 85 Z"
        stroke="#2f2f2f"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Whimsical sketch shading */}
      <path
        d="M55 55 C62 48 76 50 82 60"
        stroke="#2f2f2f"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M105 48 C115 42 130 45 136 56"
        stroke="#2f2f2f"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M70 75 C85 70 110 72 125 75"
        stroke="#2f2f2f"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
