'use client';

import React from 'react';

export const InnovationIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 52,
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
        <linearGradient id="inGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Bulb Contour */}
      <path
        d="M32 12C23.16 12 16 19.16 16 28C16 33.6 18.88 38.54 23.2 41.36V46C23.2 47.1 24.1 48 25.2 48H38.8C39.9 48 40.8 47.1 40.8 46V41.36C45.12 38.54 48 33.6 48 28C48 19.16 40.84 12 32 12Z"
        stroke="url(#inGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="rgba(114, 208, 227, 0.08)"
      />
      {/* Core filament spark */}
      <path d="M28 28L32 24L36 28" stroke="url(#inGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="30" r="2.5" fill="#72D0E3" />
      {/* Base contact */}
      <line x1="26" y1="52" x2="38" y2="52" stroke="url(#inGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
