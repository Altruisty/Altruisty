'use client';

import React from 'react';
import { CLIENTS_CONTENT } from '@/data/content';
import { Handshake, Award, ShieldCheck, ArrowRight } from 'lucide-react';

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
    <section id="clients" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
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
          <div className="lg:col-span-5 space-y-4">
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
      </div>
    </section>
  );
};
