'use client';

/**
 * LET'S BUILD SOMETHING MEANINGFUL (CTA)
 * Source of truth: Page 7 of PDF
 * Premium color-reactive buttons.
 */

import React from 'react';
import { ctaContent } from '@/content/cta';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const LetsBuild: React.FC = () => {
  const handleScrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal effect="fade-up" delay={0.05}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky/60 border border-brand-cyan/30 text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-deep shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-deep" />
            <span>Collaboration & Growth</span>
          </div>
        </Reveal>

        <AnimatedText
          as="h2"
          text={ctaContent.sectionTitle}
          highlightWords={['Meaningful', 'Build']}
          className="fluid-title font-extrabold tracking-tight text-slate-900 mb-4"
          stagger={0.03}
        />

        <Reveal effect="fade-up" delay={0.15}>
          <p className="fluid-subtitle font-medium text-brand-mid mb-8 max-w-2xl mx-auto">
            {ctaContent.subtitle}
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-4 mb-10">
          {ctaContent.paragraphs.map((p, idx) => (
            <AnimatedText
              key={idx}
              as="p"
              text={p}
              className="fluid-body text-slate-600 font-normal leading-relaxed"
              delay={0.2 + idx * 0.08}
            />
          ))}
        </div>

        {/* Buttons: no movement on hover, only cursor color/glow interaction */}
        <Reveal effect="scale-in" delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {ctaContent.buttons.map((btn) =>
              btn.primary ? (
                <PremiumButton
                  key={btn.label}
                  variant="primary"
                  onClick={() => handleScrollTo(btn.href)}
                  className="px-8 py-3.5 sm:px-9 sm:py-4 text-base font-bold"
                >
                  <span>{btn.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </PremiumButton>
              ) : (
                <PremiumButton
                  key={btn.label}
                  variant="outline"
                  onClick={() => handleScrollTo(btn.href)}
                  className="px-8 py-3.5 sm:px-9 sm:py-4 text-base font-bold"
                >
                  <span>{btn.label}</span>
                </PremiumButton>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
