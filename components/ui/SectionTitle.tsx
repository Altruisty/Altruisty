'use client';

import React from 'react';
import { AnimatedText } from './AnimatedText';
import { Reveal } from './Reveal';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  highlightWords?: string[];
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  highlightWords = [],
}) => {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
      ? 'text-right ml-auto'
      : 'text-left';

  return (
    <div className={`max-w-4xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal effect="fade-up" delay={0.05}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full bg-brand-sky/60 border border-brand-cyan/30 text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-deep shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-deep to-brand-cyan" />
            {eyebrow}
          </div>
        </Reveal>
      )}

      <AnimatedText
        as="h2"
        text={title}
        highlightWords={highlightWords}
        className="fluid-title font-extrabold tracking-tight text-slate-900 leading-[1.08]"
        stagger={0.04}
      />

      {subtitle && (
        <Reveal effect="fade-up" delay={0.2} className="mt-4">
          <p className="fluid-subtitle font-medium text-brand-mid max-w-2xl mx-auto">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
};

