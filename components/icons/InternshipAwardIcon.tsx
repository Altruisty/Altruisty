'use client';

import React from 'react';

export const InternshipAwardIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 44,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="awdGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      <path
        d="M16 14H32V22C32 26.4 28.4 30 24 30C19.6 30 16 26.4 16 22V14Z"
        stroke="url(#awdGrad)"
        strokeWidth="1.75"
        fill="rgba(114, 208, 227, 0.08)"
      />
      <path d="M16 16H12C10.9 16 10 16.9 10 18V19C10 21.2 11.8 23 14 23H16" stroke="#2F4A9F" strokeWidth="1.5" />
      <path d="M32 16H36C37.1 16 38 16.9 38 18V19C38 21.2 36.2 23 34 23H32" stroke="#72D0E3" strokeWidth="1.5" />
      <line x1="24" y1="30" x2="24" y2="35" stroke="url(#awdGrad)" strokeWidth="2" />
      <line x1="18" y1="35" x2="30" y2="35" stroke="url(#awdGrad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="20" r="2.5" fill="#72D0E3" />
    </svg>
  );
};
