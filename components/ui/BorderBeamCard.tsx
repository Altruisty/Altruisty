'use client';

import React, { useState } from 'react';

interface BorderBeamCardProps {
  children: React.ReactNode;
  className?: string;
  beamDuration?: number; // duration in seconds
}

export const BorderBeamCard: React.FC<BorderBeamCardProps> = ({
  children,
  className = '',
  beamDuration = 3.5,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl border border-slate-200/90 bg-white shadow-glass-sm transition-all duration-300 hover:shadow-glass-md overflow-hidden ${className}`}
    >
      {/* Precision SVG Border Beam (Exact 1.5px laser line travelling on the border curve) */}
      <svg
        className={`pointer-events-none absolute inset-0 h-full w-full rounded-3xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#72D0E3" />
            <stop offset="50%" stopColor="#4A7DB8" />
            <stop offset="100%" stopColor="#2F4A9F" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="24"
          fill="none"
          stroke="url(#beamGrad)"
          strokeWidth="2"
          pathLength="100"
          strokeDasharray="22 78"
          style={{
            strokeDashoffset: isHovered ? undefined : 0,
            animation: isHovered ? `beamRun ${beamDuration}s linear infinite` : 'none',
          }}
        />
      </svg>

      {/* Internal Content Container with Guaranteed Generous Padding */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>

      <style jsx>{`
        @keyframes beamRun {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};
