'use client';

import React from 'react';

export const AiTechIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="aiGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Central Matrix Core */}
      <rect x="24" y="24" width="16" height="16" rx="4" stroke="url(#aiGrad)" strokeWidth="2" fill="rgba(114, 208, 227, 0.12)" />
      <circle cx="32" cy="32" r="3" fill="#2F4A9F" />
      {/* Precision Node Network */}
      <circle cx="32" cy="12" r="3.5" stroke="url(#aiGrad)" strokeWidth="1.75" fill="#FFFFFF" />
      <circle cx="32" cy="52" r="3.5" stroke="url(#aiGrad)" strokeWidth="1.75" fill="#FFFFFF" />
      <circle cx="12" cy="32" r="3.5" stroke="url(#aiGrad)" strokeWidth="1.75" fill="#FFFFFF" />
      <circle cx="52" cy="32" r="3.5" stroke="url(#aiGrad)" strokeWidth="1.75" fill="#FFFFFF" />

      {/* Diagonal Nodes */}
      <circle cx="18" cy="18" r="2.5" fill="#72D0E3" />
      <circle cx="46" cy="18" r="2.5" fill="#4A7DB8" />
      <circle cx="18" cy="46" r="2.5" fill="#4A7DB8" />
      <circle cx="46" cy="46" r="2.5" fill="#72D0E3" />

      {/* Traces */}
      <line x1="32" y1="15.5" x2="32" y2="24" stroke="url(#aiGrad)" strokeWidth="1.75" />
      <line x1="32" y1="40" x2="32" y2="48.5" stroke="url(#aiGrad)" strokeWidth="1.75" />
      <line x1="15.5" y1="32" x2="24" y2="32" stroke="url(#aiGrad)" strokeWidth="1.75" />
      <line x1="40" y1="32" x2="48.5" y2="32" stroke="url(#aiGrad)" strokeWidth="1.75" />

      <line x1="20" y1="20" x2="26" y2="26" stroke="url(#aiGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="44" y1="20" x2="38" y2="26" stroke="url(#aiGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="20" y1="44" x2="26" y2="38" stroke="url(#aiGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="44" y1="44" x2="38" y2="38" stroke="url(#aiGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
};
