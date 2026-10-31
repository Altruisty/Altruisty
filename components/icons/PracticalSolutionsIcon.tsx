'use client';

import React from 'react';

export const PracticalSolutionsIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="psGrad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Reticle Target */}
      <circle cx="32" cy="32" r="22" stroke="url(#psGrad)" strokeWidth="2" fill="rgba(114, 208, 227, 0.06)" />
      <circle cx="32" cy="32" r="14" stroke="#4A7DB8" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="32" cy="32" r="6" fill="#2F4A9F" />
      <circle cx="32" cy="32" r="2" fill="#72D0E3" />
      {/* Target Reticles */}
      <line x1="32" y1="6" x2="32" y2="12" stroke="url(#psGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="52" x2="32" y2="58" stroke="url(#psGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="32" x2="12" y2="32" stroke="url(#psGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="52" y1="32" x2="58" y2="32" stroke="url(#psGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
