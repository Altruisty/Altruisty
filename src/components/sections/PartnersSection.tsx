'use client';

import React from 'react';
import { PARTNERS_CONTENT } from '@/data/content';
import { Building2, School, Rocket, Users, Phone, ArrowUpRight } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partnerTypes = [
    {
      icon: <Building2 className="w-6 h-6 text-[#233877]" />,
      title: 'Technology Companies',
      desc: 'Collaborative development, cross-platform integration, and talent exchange.',
    },
    {
      icon: <School className="w-6 h-6 text-[#3B72AF]" />,
      title: 'Educational Institutions',
      desc: 'Curriculum enhancement, campus hackathons, and technical jury mentorship.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#4DA8DA]" />,
      title: 'High-Growth Startups',
      desc: 'MVP prototyping, agile sprints, and emerging technology adoption.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#233877]" />,
      title: 'Community Organizations',
      desc: 'Joint workshops, innovation challenges, and inclusive skill building.',
    },
  ];

  return (
    <section id="partners" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title text-center mb-12">
          <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
            Our Partners
          </h6>
          <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[90%]">
            GROWING TOGETHER <span className="text-[#4DA8DA]">THROUGH COLLABORATION</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
            {PARTNERS_CONTENT.description}
          </p>
        </div>

        {/* 4 Partner Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerTypes.map((pt, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-50/70 p-7 border border-slate-200/80 hover:bg-white hover:border-[#3B72AF] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  {pt.icon}
                </div>
                <h4 className="font-teko uppercase font-bold text-2xl text-slate-900 group-hover:text-[#233877] transition-colors mb-2">
                  {pt.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-mono font-semibold text-[#3B72AF] uppercase">
                Collaboration Track #{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Interested in Partnering CTA Box with Template Button */}
        <div className="rounded-[36px] bg-gradient-to-r from-[#1B2E5A] via-[#233877] to-[#3B72AF] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#4DA8DA]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#BAE6FD] px-3 py-1 rounded-full bg-white/10 inline-block font-sans">
                Partnership Ecosystem
              </span>
              <h3 className="font-teko uppercase font-bold text-3xl sm:text-5xl tracking-tight leading-tight">
                {PARTNERS_CONTENT.ctaTitle}
              </h3>
              <p className="text-slate-200 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
                {PARTNERS_CONTENT.ctaText}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={`tel:${PARTNERS_CONTENT.contactPhone}`}
                className="theme-btn border-white !bg-white !text-[#233877] hover:!bg-[#F0F7FB] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#3B72AF]" />
                <span>Call {PARTNERS_CONTENT.contactPhone}</span>
              </a>

              <a
                href="#contact"
                className="theme-btn border-white flex items-center justify-center"
              >
                <span>Partner With Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
