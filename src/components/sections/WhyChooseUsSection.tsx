'use client';

import React from 'react';
import Image from 'next/image';
import { WHY_CHOOSE_DATA } from '@/data/content';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="choose-us-section py-24 md:py-32 bg-cover bg-center relative overflow-hidden text-white"
      style={{ backgroundImage: "url('/assets/img/choous-us-bg.jpg')" }}
    >
      {/* Dark Brand Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/96 via-[#1B2E5A]/92 to-[#0F172A]/95 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Side Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[36px] overflow-hidden border border-white/15 shadow-2xl h-80 sm:h-[450px]">
              <Image
                src="/assets/img/choose-us-img.jpg"
                alt="Why Altruisty Innovation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <p className="text-[#4DA8DA] font-teko uppercase text-lg font-bold">
                  Core Value System
                </p>
                <p className="text-xs text-slate-200">
                  Driving measurable digital impact through innovation & practical technology.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Title + 4 Pillars Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="section-title mb-0">
              <h6 className="text-[#4DA8DA] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
                Why Choose Us
              </h6>
              <h2 className="text-white font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl leading-[90%]">
                WHY ALTRUISTY <br />
                <span className="text-[#4DA8DA]">INNOVATION?</span>
              </h2>
            </div>

            {/* 4 Pillars Counter Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {WHY_CHOOSE_DATA.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white/5 border border-white/15 p-6 backdrop-blur-md hover:bg-white/10 hover:border-[#4DA8DA] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-teko text-3xl font-bold text-[#4DA8DA]">
                      {item.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#4DA8DA] group-hover:scale-150 transition-transform" />
                  </div>
                  <h3 className="font-teko uppercase font-bold text-2xl text-white group-hover:text-[#4DA8DA] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
