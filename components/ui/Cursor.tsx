'use client';

import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.25;
      currentY += (targetY - currentY) * 0.25;
      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(updatePosition);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision Micro Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-glow-cyan mix-blend-multiply"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
          willChange: 'transform',
        }}
      />
      {/* Soft Cyan Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-40 w-7 h-7 rounded-full border border-brand-cyan/50 bg-brand-cyan/10"
        style={{
          transform: `translate3d(${position.x - 14}px, ${position.y - 14}px, 0)`,
          willChange: 'transform',
          transition: 'transform 0.08s ease-out',
        }}
      />
    </>
  );
};
