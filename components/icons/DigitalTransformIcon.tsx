'use client';

import React from 'react';

export const DigitalTransformIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ${className}`}
    >
      <defs>
        <linearGradient id="dtGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Circular Flow Vectors */}
      <path
        d="M32 10C44.15 10 54 19.85 54 32C54 37.5 51.98 42.53 48.66 46.4"
        stroke="url(#dtGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polygon points="52,47 48,51 44,46" fill="#72D0E3" />

      <path
        d="M32 54C19.85 54 10 44.15 10 32C10 26.5 12.02 21.47 15.34 17.6"
        stroke="url(#dtGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polygon points="12,17 16,13 20,18" fill="#2F4A9F" />

      {/* Central Modern Transform Diamond */}
      <rect x="25" y="25" width="14" height="14" rx="3" stroke="url(#dtGrad)" strokeWidth="2" transform="rotate(45 32 32)" fill="rgba(114, 208, 227, 0.12)" />
      <circle cx="32" cy="32" r="2.5" fill="#2F4A9F" />
    </svg>
  );
};
