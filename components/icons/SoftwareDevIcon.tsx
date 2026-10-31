'use client';

import React from 'react';

export const SoftwareDevIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="sdGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Window Frame */}
      <rect x="8" y="10" width="48" height="38" rx="8" stroke="url(#sdGrad)" strokeWidth="2" fill="rgba(114, 208, 227, 0.05)" />
      {/* Top Header Rule */}
      <line x1="8" y1="20" x2="56" y2="20" stroke="url(#sdGrad)" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="16" cy="15" r="1.75" fill="#2F4A9F" />
      <circle cx="22" cy="15" r="1.75" fill="#4A7DB8" />
      <circle cx="28" cy="15" r="1.75" fill="#72D0E3" />
      {/* Elegant Code Brackets */}
      <path d="M22 28L17 33L22 38" stroke="url(#sdGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 28L47 33L42 38" stroke="url(#sdGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="34" y1="26" x2="30" y2="40" stroke="url(#sdGrad)" strokeWidth="2" strokeLinecap="round" />
      {/* Clean Stand */}
      <path d="M26 48L24 54H40L38 48" stroke="url(#sdGrad)" strokeWidth="2" strokeLinejoin="round" />
      <line x1="20" y1="54" x2="44" y2="54" stroke="url(#sdGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
