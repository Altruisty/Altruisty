'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/content';
import { Check, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through section (0 to 1)
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalHeight = rect.height + windowHeight;
        const currentProgress = (windowHeight - rect.top) / totalHeight;
        setScrollProgress(Math.max(0, Math.min(1, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const softwareDev = SERVICES_DATA[0];
  const aiEmerging = SERVICES_DATA[1];
  const digitalTrans = SERVICES_DATA[2];

  // Template scroll-hide calculation:
  // As user scrolls down past each row, the image smoothly hides (fades out and gently recedes) without any bobbing
  const thumb1Opacity = scrollProgress > 0.6 ? Math.max(0, 1 - (scrollProgress - 0.6) * 3.5) : 1;
  const thumb1Transform = scrollProgress > 0.6 ? `scale(${Math.max(0.88, 1 - (scrollProgress - 0.6) * 0.3)})` : 'scale(1)';

  const thumb2Opacity = scrollProgress > 0.85 ? Math.max(0, 1 - (scrollProgress - 0.85) * 4) : 1;
  const thumb2Transform = scrollProgress > 0.85 ? `scale(${Math.max(0.88, 1 - (scrollProgress - 0.85) * 0.3)})` : 'scale(1)';

  return (
    <section ref={sectionRef} id="services" className="service-section fix py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Area matching index.html & index-2.html */}
        <div className="section-title-area bor-bottom flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 scroll-reveal">
          <div className="section-title mb-0">
            <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
              Our Services
            </h6>
            <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[90%] flex flex-wrap items-center">
              WHAT WE&apos;RE{' '}
              <img
                src="/assets/img/asterisk-2.svg"
                alt="Asterisk"
                className="inline-block w-8 h-8 sm:w-12 sm:h-12 mx-3 my-auto"
              />
              <span className="text-[#4DA8DA]">GOOD AT</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => handleScrollTo('contact')}
            className="theme-btn theme-color-2 shrink-0 self-start md:self-end"
          >
            <span className="icon-1">
              <img src="/assets/img/icon/10.svg" alt="icon" />
            </span>
            INQUIRE FOR SERVICES
            <span className="icon-2">
              <img src="/assets/img/icon/11.svg" alt="icon" />
            </span>
          </button>
        </div>

        {/* Services Showcase: Alternating 2-Row Layout with Smooth Scroll Hide (NO bobbing) */}
        <div className="service-wrapper-2 space-y-16">
          {/* Row 1: Left Services (01 & 02) + Right Image (01.png) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-slate-200/80 pb-16">
            <div className="lg:col-span-8 space-y-12 scroll-reveal-left">
              {/* Service 001: Software Development */}
              <div className="service-items flex flex-col md:flex-row md:items-start justify-between gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="content">
                  <span className="font-teko font-bold text-3xl sm:text-4xl text-[#3B72AF] block mb-1">
                    001
                  </span>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0F7FB] border border-[#BAE6FD] flex items-center justify-center shrink-0 group-hover:bg-[#4DA8DA] transition-colors">
                      <img
                        src="/assets/img/icon/05.svg"
                        alt="Software Development"
                        className="w-6 h-6 group-hover:brightness-0 transition-all"
                      />
                    </div>
                    <h3 className="font-teko uppercase font-bold text-3xl sm:text-5xl md:text-6xl text-slate-900 group-hover:text-[#233877] transition-colors leading-none">
                      SOFTWARE <br />
                      <span className="text-[#3B72AF] font-light">DEVELOPMENT</span>
                    </h3>
                  </div>
                </div>

                <div className="text max-w-md pt-2">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                    {softwareDev.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {softwareDev.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                      >
                        <Check className="w-3 h-3 text-[#3B72AF]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service 002: Artificial Intelligence */}
              <div className="service-items flex flex-col md:flex-row md:items-start justify-between gap-6 group hover:translate-x-2 transition-transform duration-300 pt-6 border-t border-slate-100">
                <div className="content">
                  <span className="font-teko font-bold text-3xl sm:text-4xl text-[#4DA8DA] block mb-1">
                    002
                  </span>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0F7FB] border border-[#BAE6FD] flex items-center justify-center shrink-0 group-hover:bg-[#4DA8DA] transition-colors">
                      <img
                        src="/assets/img/icon/06.svg"
                        alt="Artificial Intelligence"
                        className="w-6 h-6 group-hover:brightness-0 transition-all"
                      />
                    </div>
                    <h3 className="font-teko uppercase font-bold text-3xl sm:text-5xl md:text-6xl text-slate-900 group-hover:text-[#233877] transition-colors leading-none">
                      ARTIFICIAL <br />
                      <span className="text-[#4DA8DA] font-light">INTELLIGENCE</span>
                    </h3>
                  </div>
                </div>

                <div className="text max-w-md pt-2">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                    {aiEmerging.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {aiEmerging.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                      >
                        <Check className="w-3 h-3 text-[#4DA8DA]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Thumb 01: Stationary with smooth scroll-hide transition (NO bobbing) */}
            <div className="lg:col-span-4 flex justify-center scroll-reveal-right">
              <div
                className="service-thumb relative w-64 h-64 sm:w-80 sm:h-80 transition-all duration-500 ease-out"
                style={{
                  opacity: thumb1Opacity,
                  transform: thumb1Transform,
                }}
              >
                <Image
                  src="/assets/img/service/01.png"
                  alt="Software & AI Solutions"
                  fill
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Row 2: Alternating: Left Image (02.png) + Right Service (003) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Thumb 02: Stationary with smooth scroll-hide transition (NO bobbing) */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center scroll-reveal-left">
              <div
                className="service-thumb relative w-64 h-64 sm:w-80 sm:h-80 transition-all duration-500 ease-out"
                style={{
                  opacity: thumb2Opacity,
                  transform: thumb2Transform,
                }}
              >
                <Image
                  src="/assets/img/service/02.png"
                  alt="Digital Transformation"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right col-lg-8: Service 003 */}
            <div className="lg:col-span-8 order-1 lg:order-2 scroll-reveal-right">
              <div className="service-items flex flex-col md:flex-row md:items-start justify-between gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="content">
                  <span className="font-teko font-bold text-3xl sm:text-4xl text-[#233877] block mb-1">
                    003
                  </span>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0F7FB] border border-[#BAE6FD] flex items-center justify-center shrink-0 group-hover:bg-[#4DA8DA] transition-colors">
                      <img
                        src="/assets/img/icon/05.svg"
                        alt="Digital Transformation"
                        className="w-6 h-6 group-hover:brightness-0 transition-all"
                      />
                    </div>
                    <h3 className="font-teko uppercase font-bold text-3xl sm:text-5xl md:text-6xl text-slate-900 group-hover:text-[#233877] transition-colors leading-none">
                      DIGITAL <br />
                      <span className="text-[#233877] font-light">TRANSFORMATION</span>
                    </h3>
                  </div>
                </div>

                <div className="text max-w-md pt-2">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                    {digitalTrans.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {digitalTrans.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                      >
                        <Check className="w-3 h-3 text-[#233877]" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleScrollTo('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#233877] hover:text-[#4DA8DA] uppercase tracking-wider transition-colors"
                  >
                    Discuss your project
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
