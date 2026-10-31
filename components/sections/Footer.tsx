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
    <footer className="relative bg-white border-t border-brand-cyan/25 pt-28 pb-20 md:pt-36 md:pb-28 min-h-[460px] flex flex-col justify-between overflow-hidden">
      {/* Section Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/each_section_bg/footer-section.png"
          alt="Footer Background"
          fill
          priority={false}
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-white/45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
          {/* Brand & Tagline */}
          <div className="max-w-md">
            <div className="relative w-52 h-12 mb-5">
              <Image
                src="/logo/altruisty-logo.png"
                alt="Altruisty Innovation Pvt Ltd"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-mid mb-2.5">
              {footerContent.tagline}
            </p>
            <p className="text-xs font-medium text-slate-600 leading-relaxed">
              {footerContent.domainsSummary}
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              {footerContent.exploreLabel}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-3 max-w-lg">
              {footerContent.exploreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  }}
                  className="text-sm font-medium text-slate-700 hover:text-brand-deep hover-underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links & Back to Top */}
          <div className="flex flex-col items-start lg:items-end gap-5">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                {footerContent.legalLabel}
              </span>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
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
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-cyan/40 bg-white/90 text-xs font-semibold text-brand-deep hover:bg-brand-sky hover:border-brand-deep transition-all shadow-sm cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
          <p>{footerContent.copyright}</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            <span>Altruisty Innovation Pvt Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
