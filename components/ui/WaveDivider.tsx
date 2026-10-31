'use client';

import React from 'react';

interface WaveDividerProps {
  inverted?: boolean;
  fill?: string;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  inverted = false,
  fill = '#F4F9FD',
  className = '',
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none relative z-10 ${
        inverted ? 'rotate-180' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-20 lg:h-24 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill={fill}
        />
        <path
          d="M0,45C240,15 480,95 720,55C960,15 1200,85 1440,40"
          stroke="url(#wave-gradient)"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F4A9F" />
            <stop offset="0.5" stopColor="#4A7DB8" />
            <stop offset="1" stopColor="#72D0E3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

