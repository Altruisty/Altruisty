'use client';

import React from 'react';
import { CONTACT_CTA_CONTENT } from '@/data/content';

export const ContactCTASection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="cta-section fix py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="cta-wrapper rounded-[36px] sm:rounded-[50px] bg-cover bg-center p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8"
          style={{ backgroundImage: "url('/assets/img/cta/cta-bg.jpg')" }}
        >
          {/* Brand dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1B2E5A]/85 to-[#0F172A]/85 z-0" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4DA8DA] font-sans">
              {CONTACT_CTA_CONTENT.subheading}
            </span>
            <h2 className="text-white font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl leading-[90%]">
              LET&apos;S BUILD SOMETHING <br />
              <span className="text-[#4DA8DA]">MEANINGFUL TOGETHER</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base font-sans leading-relaxed">
              {CONTACT_CTA_CONTENT.description}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="theme-btn border-white !bg-white !text-[#233877] hover:!bg-[#F0F7FB]"
            >
              <span className="icon-1">
                <img src="/assets/img/icon/10.svg" alt="icon" />
              </span>
              {CONTACT_CTA_CONTENT.btnPrimary}
              <span className="icon-2">
                <img src="/assets/img/icon/11.svg" alt="icon" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo('register')}
              className="theme-btn border-white"
            >
              <span className="icon-1">
                <img src="/assets/img/icon/10.svg" alt="icon" />
              </span>
              {CONTACT_CTA_CONTENT.btnSecondary}
              <span className="icon-2">
                <img src="/assets/img/icon/11.svg" alt="icon" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
