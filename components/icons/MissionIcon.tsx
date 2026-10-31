'use client';

import React from 'react';

export const MissionIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ${className}`}
    >
      <defs>
        <linearGradient id="mGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="19" stroke="url(#mGrad)" strokeWidth="1.75" fill="rgba(114, 208, 227, 0.06)" />
      {/* Precision Compass Needle */}
      <polygon points="24,9 29,22 24,20 19,22" fill="#2F4A9F" />
      <polygon points="24,39 29,26 24,28 19,26" fill="#72D0E3" />
      <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" stroke="#4A7DB8" strokeWidth="1.5" />
    </svg>
  );
};
