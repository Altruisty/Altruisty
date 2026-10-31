'use client';

import React from 'react';

export const FundingIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="fndGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      {/* Precision Seed Growth & Growth Vector */}
      <circle cx="24" cy="18" r="6" stroke="url(#fndGrad)" strokeWidth="1.75" fill="#FFFFFF" />
      <path d="M24 15V21" stroke="#2F4A9F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 18H27" stroke="#2F4A9F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 24V36" stroke="url(#fndGrad)" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 29C20 27 16 25 15 20" stroke="#4A7DB8" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M24 27C28 25 32 23 33 18" stroke="#72D0E3" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="16" y1="36" x2="32" y2="36" stroke="url(#fndGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
