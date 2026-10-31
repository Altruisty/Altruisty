'use client';

import React, { useRef, useState } from 'react';

interface PremiumButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  variant = 'primary',
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setCursorPos((prev) => ({ ...prev, opacity: 0 }));
  };

  const baseStyles =
    variant === 'primary'
      ? 'bg-brand-deep text-white shadow-sm hover:shadow-blue-glow'
      : variant === 'secondary'
      ? 'bg-brand-sky/70 text-brand-deep border border-brand-cyan/40 hover:bg-brand-sky'
      : 'bg-white text-slate-800 border border-brand-mid/30 hover:border-brand-deep';

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 rounded-full cursor-pointer select-none ${baseStyles} ${className}`}
    >
      {/* Dynamic Cursor Light Sheen (no movement, just color & light following cursor) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: cursorPos.opacity,
          background:
            variant === 'primary'
              ? `radial-gradient(circle 90px at ${cursorPos.x}% ${cursorPos.y}%, #72D0E3, transparent 75%)`
              : `radial-gradient(circle 90px at ${cursorPos.x}% ${cursorPos.y}%, rgba(114, 208, 227, 0.4), transparent 75%)`,
          mixBlendMode: variant === 'primary' ? 'screen' : 'multiply',
        }}
      />
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return <div className="inline-block">{content}</div>;
};

