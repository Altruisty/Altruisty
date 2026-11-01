'use client';

import React, { useState } from 'react';
import { INTERNSHIPS_CONTENT, INTERNSHIP_DOMAINS } from '@/data/content';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const InternshipsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Emerging Tech', 'Software Engineering', 'Design & Business'];

  const filteredDomains =
    selectedCategory === 'All'
      ? INTERNSHIP_DOMAINS
      : INTERNSHIP_DOMAINS.filter((d) => d.category === selectedCategory || d.category === 'Specialized');

  const handleApplyClick = () => {
    const el = document.getElementById('register');
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
    <section id="internships" className="py-20 md:py-28 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title-area flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 scroll-reveal">
          <div className="section-title mb-0">
            <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
              Internships Program
            </h6>
            <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[90%]">
              LEARN. BUILD. <span className="text-[#4DA8DA]">GROW.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
              {INTERNSHIPS_CONTENT.description}
            </p>
          </div>

          <button
            type="button"
            onClick={handleApplyClick}
            className="theme-btn theme-fill shrink-0 self-start lg:self-end"
          >
            <span className="icon-1">
              <img src="/assets/img/icon/10.svg" alt="icon" />
            </span>
            APPLY FOR INTERNSHIP
            <span className="icon-2">
              <img src="/assets/img/icon/11.svg" alt="icon" />
            </span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 scroll-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#233877] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 13 Internship Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {filteredDomains.map((domain, idx) => (
            <div
              key={domain.id}
              onClick={handleApplyClick}
              className={`group cursor-pointer rounded-3xl bg-slate-50/70 p-6 border border-slate-200/80 hover:bg-white hover:border-[#3B72AF] hover:shadow-lg transition-all duration-300 flex flex-col justify-between scroll-reveal-scale delay-${((idx % 4) + 1) * 100}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  {domain.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EBF5FA] text-[#233877] border border-[#BAE6FD] font-sans">
                      Popular
                    </span>
                  )}
                </div>
                <h4 className="font-teko uppercase font-bold text-2xl text-slate-900 group-hover:text-[#233877] transition-colors leading-tight">
                  {domain.title}
                </h4>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#3B72AF]">
                <span>Register domain</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Why Apply for an Internship? */}
        <div className="rounded-[36px] bg-gradient-to-br from-[#F0F7FB] via-white to-slate-50 p-8 sm:p-12 border border-[#BAE6FD] shadow-md scroll-reveal">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#233877] px-3 py-1 rounded-full bg-[#EBF5FA] border border-[#BAE6FD] inline-flex items-center gap-1.5 mb-3 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#3B72AF]" />
              Career Acceleration
            </span>
            <h3 className="font-teko uppercase font-bold text-3xl sm:text-5xl text-slate-900 leading-tight">
              Why Apply for an Internship at Altruisty Innovation?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTERNSHIPS_CONTENT.whyApply.map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs"
              >
                <div className="w-7 h-7 rounded-full bg-[#EBF5FA] text-[#233877] flex items-center justify-center shrink-0 border border-[#BAE6FD] mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3B72AF]" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-snug font-sans">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
