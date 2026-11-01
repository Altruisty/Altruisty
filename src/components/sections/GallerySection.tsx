'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_CONTENT } from '@/data/content';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Technology Projects', 'Events & Challenges', 'Skill Development', 'Collaborative Initiatives', 'Team Activities'];

  const galleryImages = [
    '/assets/img/case-study/03.jpg',
    '/assets/img/case-study/04.jpg',
    '/assets/img/case-study/05.jpg',
    '/assets/img/case-study/06.jpg',
    '/assets/img/case-study/07.jpg',
    '/assets/img/case-study/03.jpg',
  ];

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_CONTENT.items
      : GALLERY_CONTENT.items.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="case-study-section-2 py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Area matching template case study */}
        <div className="section-title text-center mb-10 scroll-reveal">
          <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
            Our Gallery
          </h6>
          <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[90%]">
            MOMENTS THAT INSPIRE <span className="text-[#4DA8DA]">INNOVATION</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
            {GALLERY_CONTENT.description}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 scroll-reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-[#233877] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Grid with Correct Shape & Sized Arrow Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className="case-study-box-items-2 group scroll-reveal-scale">
              <div className="thumb relative h-64 sm:h-72 rounded-[28px] overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src={galleryImages[idx % galleryImages.length]}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Floating Circle Button with Correct Shape Arrow Icon */}
                <div
                  className="icon w-12 h-12 rounded-full bg-white flex items-center justify-center absolute top-4 right-4 shadow-lg group-hover:bg-[#4DA8DA] transition-all duration-300 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 text-slate-900 group-hover:text-white transition-all transform group-hover:scale-110"
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
                </div>
              </div>

              <div className="content mt-4 space-y-1">
                <p className="text-[#3B72AF] font-teko uppercase text-sm tracking-wider font-semibold">
                  {item.category} • {item.badge}
                </p>
                <h3 className="font-teko uppercase font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-[#233877] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
