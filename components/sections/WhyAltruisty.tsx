'use client';

/**
 * WHY ALTRUISTY INNOVATION SECTION
 * Source of truth: Page 3 of PDF
 * Background: /each_section_bg/Why-Altruisty-Innovation.png
 * Smooth alternating left & right box entrance, equal section spacing.
 */

import React from 'react';
import Image from 'next/image';
import { whyContent } from '@/content/why';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { InnovationIcon } from '@/components/icons/InnovationIcon';
import { PracticalSolutionsIcon } from '@/components/icons/PracticalSolutionsIcon';
import { ModernTechnologiesIcon } from '@/components/icons/ModernTechnologiesIcon';
import { CollaborativeApproachIcon } from '@/components/icons/CollaborativeApproachIcon';

export const WhyAltruisty: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <InnovationIcon size={28} />;
      case 1:
        return <PracticalSolutionsIcon size={28} />;
      case 2:
        return <ModernTechnologiesIcon size={28} />;
      case 3:
      default:
        return <CollaborativeApproachIcon size={28} />;
    }
  };

  return (
    <section id="why" className="relative py-20 md:py-24 overflow-hidden bg-brand-ice/20">
      {/* Section Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/each_section_bg/Why-Altruisty-Innovation.png"
          alt="Why Altruisty Innovation Background"
          fill
          priority={false}
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-white/45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={whyContent.sectionTitle}
          eyebrow="Our Value Proposition"
          highlightWords={['Altruisty', 'Innovation?']}
        />

        {/* 4 Cards in 2x2 Grid with smooth Left and Right Slide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {whyContent.cards.map((card, idx) => {
            const effect = idx % 2 === 0 ? 'slide-left' : 'slide-right';
            return (
              <Reveal key={card.title} effect={effect} delay={idx * 0.08} className="h-full">
                <BorderBeamCard className="h-full">
                  <div className="p-8 sm:p-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-13 h-13 min-w-[52px] min-h-[52px] rounded-2xl bg-brand-sky/60 border border-brand-cyan/35 flex items-center justify-center shrink-0 shadow-sm">
                          {getIcon(idx)}
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 leading-snug">
                            {card.title}
                          </h3>
                          <div className="w-12 h-1 rounded-full bg-brand-gradient" />
                        </div>
                      </div>

                      <AnimatedText
                        as="p"
                        text={card.description}
                        className="fluid-body text-slate-600 leading-relaxed font-normal"
                        delay={0.1 + idx * 0.04}
                      />
                    </div>
                  </div>
                </BorderBeamCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
