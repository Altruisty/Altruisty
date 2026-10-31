'use client';

/**
 * OUR GALLERY SECTION
 * Source of truth: Page 3 of PDF
 * Smooth gallery cards with travelling border line.
 */

import React from 'react';
import Image from 'next/image';
import { galleryContent } from '@/content/gallery';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="relative py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={galleryContent.sectionTitle}
          subtitle={galleryContent.subtitle}
          eyebrow="Visual Journey"
          highlightWords={['Gallery']}
        />

        {/* Supporting Paragraphs */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          {galleryContent.paragraphs.map((p, idx) => (
            <AnimatedText
              key={idx}
              as="p"
              text={p}
              className="fluid-body text-slate-600 leading-relaxed font-normal"
              delay={idx * 0.08}
            />
          ))}

          {/* PDF Placeholder indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/60 border border-brand-cyan/30 text-xs font-semibold text-brand-mid mt-2">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{galleryContent.placeholderText}</span>
          </div>
        </div>

        {/* Responsive Grid with smooth BorderBeamCard appearance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {galleryContent.items.map((item, idx) => (
            <Reveal
              key={item.id}
              effect={idx % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={idx * 0.06}
            >
              <BorderBeamCard className="overflow-hidden aspect-[4/3] cursor-pointer">
                <div className="relative w-full h-full overflow-hidden rounded-[calc(1.5rem-1px)]">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Brand Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 transition-opacity" />

                  {/* Badge & Caption */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                    <div className="self-start">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-brand-deep shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-white text-base sm:text-lg font-bold drop-shadow-sm">
                        {item.caption}
                      </h4>
                    </div>
                  </div>
                </div>
              </BorderBeamCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
