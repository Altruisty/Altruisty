'use client';

import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/content';
import { Check } from 'lucide-react';

export const ServicesSection: React.FC = () => {
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

  return (
    <section id="services" className="service-section fix py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Section Title Area from index-2.html */}
        <div className="section-title-area bor-bottom flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

        {/* Exact service-wrapper-2 alternating layout from index-2.html */}
        <div className="service-wrapper-2">
          {/* Row 1: Left col-lg-8 (Services 01 & 02) + Right col-lg-4 (3D Thumb 01) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-slate-200/80 pb-12 mb-12">
            <div className="lg:col-span-8 space-y-8">
              {/* Service 01: Software Development */}
              <div className="service-items flex flex-col md:flex-row md:items-end justify-between gap-6 group hover:translate-x-1 transition-transform">
                <div className="content">
                  <div className="icon w-16 h-16 rounded-full bg-[#F0F7FB] border border-[#BAE6FD] flex items-center justify-center mb-4 group-hover:bg-[#4DA8DA] group-hover:border-[#4DA8DA] transition-all">
                    <img src="/assets/img/icon/05.svg" alt="Software Development" className="w-6 h-6 group-hover:brightness-0 transition-all" />
                  </div>
                  <h3 className="font-teko uppercase font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 group-hover:text-[#233877] transition-colors leading-none">
                    01. SOFTWARE <br />
                    <span className="text-[#3B72AF] font-light">DEVELOPMENT</span>
                  </h3>
                </div>
                <div className="text max-w-md">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                    {softwareDev.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {softwareDev.features.map((feat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Check className="w-3 h-3 text-[#3B72AF]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service 02: AI & Emerging Tech */}
              <div className="service-items flex flex-col md:flex-row md:items-end justify-between gap-6 group hover:translate-x-1 transition-transform pt-6 border-t border-slate-100">
                <div className="content">
                  <div className="icon w-16 h-16 rounded-full bg-[#F0F7FB] border border-[#BAE6FD] flex items-center justify-center mb-4 group-hover:bg-[#4DA8DA] group-hover:border-[#4DA8DA] transition-all">
                    <img src="/assets/img/icon/06.svg" alt="Artificial Intelligence" className="w-6 h-6 group-hover:brightness-0 transition-all" />
                  </div>
                  <h3 className="font-teko uppercase font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 group-hover:text-[#233877] transition-colors leading-none">
                    02. ARTIFICIAL <br />
                    <span className="text-[#4DA8DA] font-light">INTELLIGENCE</span>
                  </h3>
                </div>
                <div className="text max-w-md">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                    {aiEmerging.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {aiEmerging.features.map((feat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Check className="w-3 h-3 text-[#4DA8DA]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Thumb 01 */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="service-thumb relative w-64 h-64 sm:w-80 sm:h-80 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/img/service/01.png"
                  alt="Software & AI"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Alternating: Left col-lg-4 (3D Thumb 02) + Right col-lg-8 (Service 03) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Thumb 02 */}
            <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center">
              <div className="service-thumb relative w-64 h-64 sm:w-80 sm:h-80 hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/img/service/02.png"
                  alt="Digital Transformation"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right col-lg-8: Service 03 */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="service-items flex flex-col md:flex-row md:items-end justify-between gap-6 group hover:translate-x-1 transition-transform">
                <div className="content">
                  <div className="icon w-16 h-16 rounded-full bg-[#F0F7FB] border border-[#BAE6FD] flex items-center justify-center mb-4 group-hover:bg-[#4DA8DA] group-hover:border-[#4DA8DA] transition-all">
                    <img src="/assets/img/icon/05.svg" alt="Digital Transformation" className="w-6 h-6 group-hover:brightness-0 transition-all" />
                  </div>
                  <h3 className="font-teko uppercase font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 group-hover:text-[#233877] transition-colors leading-none">
                    03. DIGITAL <br />
                    <span className="text-[#3B72AF] font-light">TRANSFORMATION</span>
                  </h3>
                </div>
                <div className="text max-w-md">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans mb-3">
                    {digitalTrans.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {digitalTrans.features.map((feat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Check className="w-3 h-3 text-[#3B72AF]" />
                        {feat}
                      </span>
                    ))}
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
