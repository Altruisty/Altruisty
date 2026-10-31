'use client';

/**
 * HERO SECTION
 * Source of truth: Page 1 of PDF
 * Interactive dot vortex canvas background reacting to cursor.
 * Buttons with smooth color/sheen reaction.
 */

import React from 'react';
import { heroContent } from '@/content/hero';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { InteractiveDotVortex } from '@/components/ui/InteractiveDotVortex';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
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
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center overflow-hidden bg-white"
    >
      {/* Interactive Cursor-Driven Radial Star Vortex Background */}
      <InteractiveDotVortex />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow badge with PVT LTD */}
        <Reveal effect="fade-up" delay={0.05}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-brand-cyan/40 shadow-glass-sm backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-deep" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-deep">
              {heroContent.eyebrow}
            </span>
          </div>
        </Reveal>

        {/* Tagline */}
        <Reveal effect="fade-up" delay={0.12}>
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase text-brand-mid mb-4">
            {heroContent.tagline}
          </p>
        </Reveal>

        {/* Main Huge Title */}
        <div className="mb-6 max-w-4xl">
          <AnimatedText
            as="h1"
            text={heroContent.title}
            highlightWords={['Intelligent', 'Digital', 'Solutions']}
            className="fluid-hero font-extrabold tracking-tight text-slate-900"
            stagger={0.03}
          />
        </div>

        {/* Supporting Paragraphs from PDF */}
        <div className="max-w-3xl space-y-3 mb-10 text-slate-600">
          {heroContent.paragraphs.map((p, idx) => (
            <AnimatedText
              key={idx}
              as="p"
              text={p}
              className="fluid-body text-slate-600 font-normal leading-relaxed"
              delay={0.15 + idx * 0.1}
              stagger={0.015}
            />
          ))}
        </div>

        {/* Buttons: no movement on hover, only cursor color/glow interaction */}
        <Reveal effect="scale-in" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {heroContent.buttons.map((btn) =>
              btn.primary ? (
                <PremiumButton
                  key={btn.label}
                  variant="primary"
                  onClick={() => handleScrollTo(btn.href)}
                  className="px-8 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-semibold"
                >
                  <span>{btn.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </PremiumButton>
              ) : (
                <PremiumButton
                  key={btn.label}
                  variant="outline"
                  onClick={() => handleScrollTo(btn.href)}
                  className="px-8 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-semibold"
                >
                  <span>{btn.label}</span>
                </PremiumButton>
              )
            )}
          </div>
        </Reveal>

        {/* Clean, Non-Bouncy Scroll Indicator */}
        <Reveal effect="fade-up" delay={0.4} className="mt-14 hidden md:block">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('#about');
            }}
            className="flex flex-col items-center gap-2 text-xs font-medium text-slate-500 hover:text-brand-deep transition-colors"
          >
            <span className="tracking-widest uppercase text-[11px]">Scroll to explore</span>
            <div className="w-5 h-9 rounded-full border-2 border-brand-cyan/40 flex items-start justify-center p-1 bg-white/80">
              <span className="w-1.5 h-2 rounded-full bg-brand-deep" />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
