import React from 'react';
import { AsteriskIcon } from './AsteriskIcon';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  showAsterisk?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  highlight,
  subtitle,
  centered = false,
  className = '',
  showAsterisk = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {kicker && (
        <div className="mb-4">
          <span className="section-kicker">
            <span className="w-1.5 h-1.5 rounded-full bg-[#233877]" />
            {kicker}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="inline-flex items-center gap-2">
            {showAsterisk && <AsteriskIcon className="w-7 h-7 sm:w-9 sm:h-9 text-[#4DA8DA] inline-block animate-pulse" />}
            <span className="bg-gradient-to-r from-[#233877] via-[#3B72AF] to-[#4DA8DA] bg-clip-text text-transparent">
              {highlight}
            </span>
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

