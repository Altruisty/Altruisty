'use client';

import React from 'react';

export const JuryIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="jurGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Balance Scale */}
      <line x1="24" y1="12" x2="24" y2="36" stroke="url(#jurGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="18" x2="34" y2="18" stroke="url(#jurGrad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 26C11 29 13.5 31 16.5 31C19.5 31 22 29 22 26H11Z" fill="#2F4A9F" />
      <line x1="14" y1="18" x2="11" y2="26" stroke="#2F4A9F" strokeWidth="1.25" />
      <line x1="19" y1="18" x2="22" y2="26" stroke="#2F4A9F" strokeWidth="1.25" />

      <path d="M26 26C26 29 28.5 31 31.5 31C34.5 31 37 29 37 26H26Z" fill="#72D0E3" />
      <line x1="29" y1="18" x2="26" y2="26" stroke="#72D0E3" strokeWidth="1.25" />
      <line x1="34" y1="18" x2="37" y2="26" stroke="#72D0E3" strokeWidth="1.25" />
      <path d="M18 36H30" stroke="url(#jurGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
