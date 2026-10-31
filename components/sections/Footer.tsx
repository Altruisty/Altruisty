'use client';

/**
 * FOOTER COMPONENT
 * Source of truth: Page 7 & Page 8 of PDF
 * Background: /each_section_bg/footer-section.png
 * Increased luxurious height with generous vertical spacing.
 */

import React from 'react';
import Image from 'next/image';
import { footerContent } from '@/content/footer';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
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

  const scrollToTop = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white border-t border-brand-cyan/30 pt-36 pb-24 md:pt-48 md:pb-36 min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
      {/* Section Background Image - Full uncropped corner-to-corner design */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/each_section_bg/footer-section.png"
          alt="Footer Background"
          fill
          priority={false}
          className="object-fill w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 mb-20">
          {/* Brand & Tagline */}
          <div className="max-w-xl">
            <div className="relative w-64 h-16 sm:w-80 sm:h-20 lg:w-96 lg:h-24 mb-6">
              <Image
                src="/logo/altruisty-logo.png"
                alt="Altruisty Innovation Pvt Ltd"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-brand-deep mb-3.5">
              {footerContent.tagline}
            </p>
            <p className="text-sm sm:text-base md:text-lg font-medium text-slate-700 leading-relaxed max-w-lg">
              {footerContent.domainsSummary}
            </p>
          </div>

          {/* Explore Links */}
          <div className="min-w-[280px]">
            <span className="block text-sm sm:text-base font-extrabold uppercase tracking-widest text-brand-deep mb-6">
              {footerContent.exploreLabel}
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-md">
              {footerContent.exploreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  }}
                  className="group flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-800 hover:text-brand-deep transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 group-hover:bg-brand-deep group-hover:scale-125 transition-all" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links & Back to Top */}
          <div className="flex flex-col items-start lg:items-end justify-between gap-8">
            <div>
              <span className="block text-sm sm:text-base font-extrabold uppercase tracking-widest text-brand-deep mb-6">
                {footerContent.legalLabel}
              </span>
              <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base font-semibold text-slate-700">
                {footerContent.legalLinks.map((legal) => (
                  <a
                    key={legal.label}
                    href={legal.href}
                    className="hover:text-brand-deep hover:underline transition-colors"
                  >
                    {legal.label}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-brand-cyan/60 bg-white/95 text-sm sm:text-base font-bold text-brand-deep hover:bg-brand-deep hover:text-white hover:border-brand-deep transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-10 pb-4 border-t border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-slate-700 font-medium">
          <p>{footerContent.copyright}</p>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-sky/40 border border-brand-cyan/40 text-xs sm:text-sm font-bold text-brand-deep tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>Altruisty Innovation Pvt Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
