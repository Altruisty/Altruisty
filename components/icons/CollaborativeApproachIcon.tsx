'use client';

import React from 'react';

export const CollaborativeApproachIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="caGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Synergy Network */}
      <circle cx="32" cy="18" r="4.5" fill="#2F4A9F" />
      <path d="M24 30C24 26 27.5 25 32 25C36.5 25 40 26 40 30" stroke="#2F4A9F" strokeWidth="2" strokeLinecap="round" />

      <circle cx="18" cy="42" r="4" fill="#4A7DB8" />
      <path d="M11 52C11 48 14 47 18 47C22 47 25 48 25 52" stroke="#4A7DB8" strokeWidth="1.75" strokeLinecap="round" />

      <circle cx="46" cy="42" r="4" fill="#72D0E3" />
      <path d="M39 52C39 48 42 47 46 47C50 47 53 48 53 52" stroke="#72D0E3" strokeWidth="1.75" strokeLinecap="round" />

      {/* Modern Center Hub */}
      <circle cx="32" cy="38" r="4" stroke="url(#caGrad)" strokeWidth="1.75" fill="#FFFFFF" />
      <line x1="28" y1="36" x2="22" y2="40" stroke="url(#caGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="36" y1="36" x2="42" y2="40" stroke="url(#caGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="32" y1="28" x2="32" y2="34" stroke="url(#caGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
};
