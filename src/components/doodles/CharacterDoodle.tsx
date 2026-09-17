import React from 'react';

interface CharacterDoodleProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CharacterDoodle: React.FC<CharacterDoodleProps> = ({
  className = '',
  style,
}) => {
  return (
    <svg
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Horns */}
      <path
        d="M18 35 C14 20, 10 10, 8 6 C16 12, 22 22, 25 32"
        fill="#ffffff"
        stroke="#2f2f2f"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 35 C46 20, 50 10, 52 6 C44 12, 38 22, 35 32"
        fill="#ffffff"
        stroke="#2f2f2f"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Head */}
      <ellipse
        cx="30"
        cy="40"
        rx="18"
        ry="16"
        fill="#ffffff"
        stroke="#2f2f2f"
        strokeWidth="2.5"
      />

      {/* Eyes */}
      <ellipse cx="23" cy="40" rx="4" ry="6" fill="#2f2f2f" transform="rotate(-5 23 40)" />
      <ellipse cx="37" cy="40" rx="4" ry="6" fill="#2f2f2f" transform="rotate(5 37 40)" />

      {/* Cloak/Neck Collar */}
      <path
        d="M20 54 C25 58, 35 58, 40 54 L44 66 C38 68, 22 68, 16 66 Z"
        fill="#52525b"
        stroke="#2f2f2f"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
