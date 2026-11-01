'use client';

import React from 'react';
import Image from 'next/image';
import { ABOUT_CONTENT } from '@/data/content';

export const AboutSection: React.FC = () => {
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
      id="about"
      className="about-section fix py-24 md:py-32 my-8 md:my-16 mx-3 sm:mx-6 lg:mx-8 rounded-[36px] sm:rounded-[50px] lg:rounded-[60px] bg-cover bg-center overflow-hidden relative shadow-2xl scroll-reveal"
      style={{ backgroundImage: "url('/assets/img/about/about-bg-1.jpg')" }}
    >
      {/* Brand Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#1B2E5A]/90 to-[#0F172A]/92 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="about-wrapper">
          {/* Header Bar */}
          <div className="section-title-area flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/15 scroll-reveal">
            <div className="section-title mb-0">
              <h6 className="text-[#4DA8DA] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
                About Us
              </h6>
              <h2 className="text-white font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[90%]">
                EMPOWERING INNOVATION <br />
                <span className="text-[#4DA8DA]">THROUGH TECHNOLOGY</span>
              </h2>
            </div>

            <button
              type="button"
              onClick={() => handleScrollTo('services')}
              className="theme-btn border-white shrink-0 self-start md:self-end"
            >
              <span className="icon-1">
                <img src="/assets/img/icon/10.svg" alt="icon" />
              </span>
              EXPLORE SERVICES
              <span className="icon-2">
                <img src="/assets/img/icon/11.svg" alt="icon" />
              </span>
            </button>
          </div>

          {/* Main 2-Column Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-12 items-center">
            {/* Left Column: Mission, Vision, Approach Lists */}
            <div className="lg:col-span-5 scroll-reveal-left">
              <div className="about-content space-y-8">
                {/* 01. Mission */}
                <div className="flex items-start gap-5 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#4DA8DA] transition-all duration-300">
                    <img
                      src="/assets/img/icon/02.svg"
                      alt="Mission"
                      className="w-7 h-7 brightness-200 group-hover:brightness-0 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="font-teko uppercase font-bold text-2xl sm:text-3xl text-white group-hover:text-[#4DA8DA] transition-colors">
                      {ABOUT_CONTENT.mission.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1 font-sans">
                      {ABOUT_CONTENT.mission.description}
                    </p>
                  </div>
                </div>

                {/* 02. Vision */}
                <div className="flex items-start gap-5 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#4DA8DA] transition-all duration-300">
                    <img
                      src="/assets/img/icon/03.svg"
                      alt="Vision"
                      className="w-7 h-7 brightness-200 group-hover:brightness-0 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="font-teko uppercase font-bold text-2xl sm:text-3xl text-white group-hover:text-[#4DA8DA] transition-colors">
                      {ABOUT_CONTENT.vision.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1 font-sans">
                      {ABOUT_CONTENT.vision.description}
                    </p>
                  </div>
                </div>

                {/* 03. Approach */}
                <div className="flex items-start gap-5 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#4DA8DA] transition-all duration-300">
                    <img
                      src="/assets/img/icon/04.svg"
                      alt="Approach"
                      className="w-7 h-7 brightness-200 group-hover:brightness-0 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="font-teko uppercase font-bold text-2xl sm:text-3xl text-white group-hover:text-[#4DA8DA] transition-colors">
                      OUR APPROACH
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1 font-sans">
                      {ABOUT_CONTENT.paragraphs[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Staggered Image Showcase from template */}
            <div className="lg:col-span-7 scroll-reveal-right">
              <div className="about-image-items">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  {/* First item: Image + Paragraph */}
                  <div className="about-items space-y-4">
                    <div className="thumb overflow-hidden rounded-3xl border border-white/15 relative h-64 sm:h-72">
                      <Image
                        src="/assets/img/about/01.jpg"
                        alt="Altruisty Innovation"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                      {ABOUT_CONTENT.paragraphs[0]}
                    </p>
                  </div>

                  {/* Second item: Tall Image + Highlights */}
                  <div className="about-thumb space-y-4">
                    <div className="overflow-hidden rounded-3xl border border-white/15 relative h-72 sm:h-96">
                      <Image
                        src="/assets/img/about/02.jpg"
                        alt="Digital Technology"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans italic">
                      {ABOUT_CONTENT.paragraphs[2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
