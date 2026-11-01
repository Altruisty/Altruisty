'use client';

import React from 'react';
import Image from 'next/image';
import { HERO_CONTENT, COMPANY_INFO } from '@/data/content';

export const HeroSection: React.FC = () => {
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
    <section
      id="hero"
      className="hero-section hero-1 relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36 lg:pt-56 lg:pb-44 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/hero/hero-1.jpg')" }}
    >
      {/* Background Image Visibility: reduced overlay so image is vividly visible (>50% visibility) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/50 via-[#1B2E5A]/40 to-[#0F172A]/48 z-0" />

      {/* Decorative ambient subtle glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#4DA8DA]/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3B72AF]/25 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container-fluid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="row">
          <div className="col-xl-8 max-w-4xl">
            <div className="hero-content space-y-4">
              <p className="text-1 tracking-widest text-[#BAE6FD] uppercase text-xs sm:text-sm font-bold drop-shadow-sm">
                {COMPANY_INFO.tagline}
              </p>

              <p className="text-2 text-white uppercase text-base sm:text-xl font-bold tracking-wide drop-shadow-md">
                {COMPANY_INFO.name}
              </p>

              <h1 className="text-white mt-3 font-teko uppercase font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[112px] leading-[88%] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                TURNING IDEAS INTO <br />
                INTELLIGENT DIGITAL <br />
                <span className="text-[#4DA8DA] drop-shadow-[0_4px_12px_rgba(77,168,218,0.5)]">SOLUTIONS</span>
                <span className="text-[#3B72AF]">.</span>
              </h1>

              <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed pt-2 font-medium font-sans drop-shadow-md">
                {HERO_CONTENT.paragraph1}
              </p>

              {/* Action Buttons with .theme-btn */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => handleScrollTo('services')}
                  className="theme-btn theme-fill"
                >
                  <span className="icon-1">
                    <img src="/assets/img/icon/10.svg" alt="icon" />
                  </span>
                  {HERO_CONTENT.ctaPrimary}
                  <span className="icon-2">
                    <img src="/assets/img/icon/11.svg" alt="icon" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollTo('register')}
                  className="theme-btn border-white !border-white/80"
                >
                  <span className="icon-1">
                    <img src="/assets/img/icon/10.svg" alt="icon" />
                  </span>
                  {HERO_CONTENT.ctaSecondary}
                  <span className="icon-2">
                    <img src="/assets/img/icon/11.svg" alt="icon" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements (Responsive in grid / stack) */}
        <div className="mt-14 pt-8 border-t border-white/20 flex flex-wrap items-center justify-between gap-6">
          {/* Circular Help Icon with correct, sharp arrow icon */}
          <div className="icon-text flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
              className="icon w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:border-white transition-all group shrink-0 shadow-lg"
              title="Contact Us"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#233877] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <div>
              <p className="text-white text-xs uppercase tracking-wider font-bold drop-shadow-sm">
                How Can We Help You?
              </p>
              <p className="text-slate-200 text-xs font-sans drop-shadow-sm">Reach out for projects & partnerships</p>
            </div>
          </div>

          {/* Hero List: Key Focus Domains */}
          <ul className="hero-list flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wider font-semibold text-slate-100 drop-shadow-sm">
            <li className="relative pl-3.5 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#4DA8DA]">
              Software Development
            </li>
            <li className="relative pl-3.5 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#4DA8DA]">
              Artificial Intelligence
            </li>
            <li className="relative pl-3.5 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#4DA8DA]">
              Digital Transformation
            </li>
            <li className="relative pl-3.5 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#4DA8DA]">
              Career Internships
            </li>
          </ul>

          {/* Client Info Pill */}
          <div className="client-info rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-6 py-2.5 flex items-center gap-3 shadow-lg">
            <div className="relative w-20 h-7">
              <Image
                src="/assets/img/hero/client-img.png"
                alt="Community"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-white font-teko text-lg uppercase font-medium leading-none m-0 drop-shadow-sm">
              100% <span className="text-[#BAE6FD]">Practical Focus</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
