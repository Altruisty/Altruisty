'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENTS_CONTENT } from '@/data/content';
import { Handshake, Award, ShieldCheck } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const commitments = [
    {
      icon: <Handshake className="w-5 h-5 text-[#233877]" />,
      title: 'Long-term Collaboration',
      desc: 'Building enduring relationships founded on mutual trust and transparent execution.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#3B72AF]" />,
      title: 'Commitment to Quality',
      desc: 'Delivering scalable architectures, robust security, and refined digital interfaces.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#4DA8DA]" />,
      title: 'Creating Lasting Value',
      desc: 'Focused on solving actual operational bottlenecks and driving technological impact.',
    },
  ];

  const brandLogos = [
    '/assets/img/brand/01.png',
    '/assets/img/brand/02.png',
    '/assets/img/brand/03.png',
    '/assets/img/brand/04.png',
    '/assets/img/brand/05.png',
    '/assets/img/brand/06.png',
    '/assets/img/brand/07.png',
    '/assets/img/brand/08.png',
    '/assets/img/brand/09.png',
  ];

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
    <section id="clients" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Client Philosophy */}
          <div className="lg:col-span-7 space-y-6 scroll-reveal-left">
            <div className="section-title mb-4">
              <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
                Our Clients
              </h6>
              <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl leading-[90%]">
                TRUSTED RELATIONSHIPS. <br />
                <span className="text-[#4DA8DA]">MEANINGFUL SOLUTIONS.</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              <p className="text-slate-900 font-semibold">{CLIENTS_CONTENT.paragraph1}</p>
              <p>{CLIENTS_CONTENT.paragraph2}</p>
              <p className="text-slate-700">{CLIENTS_CONTENT.paragraph3}</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="theme-btn theme-fill"
              >
                <span className="icon-1">
                  <img src="/assets/img/icon/10.svg" alt="icon" />
                </span>
                CONNECT WITH OUR TEAM
                <span className="icon-2">
                  <img src="/assets/img/icon/11.svg" alt="icon" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Commitment Cards */}
          <div className="lg:col-span-5 space-y-4 scroll-reveal-right">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-2xs hover:border-[#3B72AF] hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F0F7FB] border border-[#BAE6FD] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-teko uppercase font-bold text-xl text-slate-900 group-hover:text-[#233877] transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Moving Brand Logo Slider (Template Brand-Slider) */}
        <div className="mt-20 pt-12 border-t border-slate-200/80 scroll-reveal">
          <div className="text-center mb-8">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-slate-400">
              TRUSTED BY INDUSTRY PARTNERS & INNOVATION ECOSYSTEMS
            </p>
          </div>

          {/* Marquee Wrapper with fading edge gradients */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-16 py-4">
              {/* Set 1 */}
              {brandLogos.map((logo, idx) => (
                <div
                  key={`brand-1-${idx}`}
                  className="w-32 h-14 sm:w-40 sm:h-16 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all shrink-0 flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt={`Client Brand ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
              {/* Set 2 (Duplicated for seamless loop) */}
              {brandLogos.map((logo, idx) => (
                <div
                  key={`brand-2-${idx}`}
                  className="w-32 h-14 sm:w-40 sm:h-16 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all shrink-0 flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt={`Client Brand ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
