'use client';

import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds for full cycle
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 28,
  reverse = false,
  pauseOnHover = true,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden flex select-none ${className} ${
        pauseOnHover ? 'group' : ''
      }`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 sm:gap-14 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 sm:gap-14 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
};

