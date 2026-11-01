import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  showArrow?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  showArrow = true,
  disabled = false,
  ariaLabel,
}) => {
  const sizeClasses = {
    sm: 'text-xs py-2 px-4',
    md: 'text-sm py-3 px-6',
    lg: 'text-base py-4 px-8',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#1B2E5A] via-[#233877] to-[#3B72AF] text-white hover:from-[#152347] hover:to-[#2B5292] shadow-sm hover:shadow-md border border-[#233877]',
    secondary:
      'bg-white text-[#1B2E5A] border-2 border-[#233877] hover:bg-[#F0F7FB] hover:border-[#3B72AF]',
    outline:
      'bg-transparent text-slate-800 border border-slate-300 hover:border-[#233877] hover:text-[#233877]',
    white:
      'bg-white text-[#1B2E5A] border border-white/80 hover:bg-slate-50 shadow-md',
  };

  const baseClasses = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="w-5 h-5 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

