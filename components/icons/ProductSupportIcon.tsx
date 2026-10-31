'use client';

import React from 'react';

export const ProductSupportIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="prdGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Isometric Architecture Box */}
      <path d="M24 10L37 17.5V32.5L24 40L11 32.5V17.5L24 10Z" stroke="url(#prdGrad)" strokeWidth="1.75" fill="rgba(114, 208, 227, 0.06)" />
      <path d="M24 10V25" stroke="url(#prdGrad)" strokeWidth="1.5" />
      <path d="M24 25L37 17.5" stroke="url(#prdGrad)" strokeWidth="1.5" />
      <path d="M24 25L11 17.5" stroke="url(#prdGrad)" strokeWidth="1.5" />
      <circle cx="24" cy="25" r="2.5" fill="#72D0E3" />
    </svg>
  );
};
