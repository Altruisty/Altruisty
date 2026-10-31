'use client';

import React from 'react';

export const ModernTechnologiesIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="mtGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Silicon Chip Package */}
      <rect x="16" y="16" width="32" height="32" rx="6" stroke="url(#mtGrad)" strokeWidth="2" fill="rgba(114, 208, 227, 0.08)" />
      {/* Central Core Die */}
      <rect x="25" y="25" width="14" height="14" rx="3" fill="#2F4A9F" />
      <circle cx="32" cy="32" r="2.5" fill="#72D0E3" />
      {/* Pins */}
      <line x1="24" y1="10" x2="24" y2="16" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="32" y1="10" x2="32" y2="16" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="40" y1="10" x2="40" y2="16" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />

      <line x1="24" y1="48" x2="24" y2="54" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="32" y1="48" x2="32" y2="54" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="40" y1="48" x2="40" y2="54" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />

      <line x1="10" y1="24" x2="16" y2="24" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="10" y1="32" x2="16" y2="32" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="10" y1="40" x2="16" y2="40" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />

      <line x1="48" y1="24" x2="54" y2="24" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="48" y1="32" x2="54" y2="32" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="48" y1="40" x2="54" y2="40" stroke="url(#mtGrad)" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
};
