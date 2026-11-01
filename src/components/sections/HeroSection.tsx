'use client';

import React from 'react';
import Image from 'next/image';
import { HERO_CONTENT, COMPANY_INFO } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

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
      {/* Brand Overlay strictly following template visual structure */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/92 via-[#1B2E5A]/85 to-[#0F172A]/90 z-0" />

      {/* Decorative ambient logo glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#4DA8DA]/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3B72AF]/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container-fluid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="row">
          <div className="col-xl-8 max-w-4xl">
            <div className="hero-content space-y-4">
              <p className="text-1 tracking-widest text-[#94A3B8] uppercase text-xs sm:text-sm font-semibold">
                {COMPANY_INFO.tagline}
              </p>

              <p className="text-2 text-white uppercase text-base sm:text-xl font-bold tracking-wide">
                {COMPANY_INFO.name}
              </p>

              <h1 className="text-white mt-3 font-teko uppercase font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[88%] tracking-tight">
                TURNING IDEAS INTO <br />
                INTELLIGENT DIGITAL <br />
                <span className="text-[#4DA8DA]">SOLUTIONS</span>
                <span className="text-[#3B72AF]">.</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed pt-2 font-normal font-sans">
                {HERO_CONTENT.paragraph1}
              </p>

              {/* Action Buttons */}
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
                  className="theme-btn border-white"
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
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          {/* Circular Help Icon */}
          <div className="icon-text flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('contact');
              }}
              className="icon w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all group"
              title="Contact Us"
            >
              <img
                src="/assets/img/icon/01.svg"
                alt="Help"
                className="w-5 h-5 group-hover:brightness-0 transition-all"
              />
            </a>
            <div>
              <p className="text-white text-xs uppercase tracking-wider font-bold">
                How Can We Help You?
              </p>
              <p className="text-slate-400 text-xs">Reach out for projects & partnerships</p>
            </div>
          </div>

          {/* Hero List: Key Focus Domains */}
          <ul className="hero-list flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wider font-semibold text-slate-300">
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
          <div className="client-info rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2.5 flex items-center gap-3">
            <div className="relative w-20 h-7">
              <Image
                src="/assets/img/hero/client-img.png"
                alt="Community"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-white font-teko text-lg uppercase font-medium leading-none m-0">
              100% <span className="text-[#94A3B8]">Practical Focus</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
