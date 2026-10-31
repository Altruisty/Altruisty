'use client';

import React from 'react';

export const MentorshipIcon: React.FC<{ size?: number; className?: string }> = ({
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
        <linearGradient id="menGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F4A9F" />
          <stop offset="0.5" stopColor="#4A7DB8" />
          <stop offset="1" stopColor="#72D0E3" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="16" r="4.5" fill="#2F4A9F" />
      <path d="M12 28C12 24 15.5 23 20 23C24.5 23 28 24 28 28" stroke="#2F4A9F" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="34" cy="20" r="3.5" fill="#72D0E3" />
      <path d="M29 31C29 28 31.5 27 34 27C36.5 27 39 28 39 31" stroke="#72D0E3" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="36" x2="34" y2="36" stroke="url(#menGrad)" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
};
