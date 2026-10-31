'use client';

/**
 * SERVICES SECTION
 * Source of truth: Page 2 of PDF
 * Smooth left & right box entrance, equal section spacing.
 */

import React from 'react';
import { servicesContent } from '@/content/services';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { SoftwareDevIcon } from '@/components/icons/SoftwareDevIcon';
import { AiTechIcon } from '@/components/icons/AiTechIcon';
import { DigitalTransformIcon } from '@/components/icons/DigitalTransformIcon';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <SoftwareDevIcon size={30} />;
      case 1:
        return <AiTechIcon size={30} />;
      case 2:
      default:
        return <DigitalTransformIcon size={30} />;
    }
  };

  const getEntranceEffect = (index: number) => {
    if (index === 0) return 'slide-left';
    if (index === 1) return 'fade-up';
    return 'slide-right';
  };

  return (
    <section id="services" className="relative py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={servicesContent.sectionTitle}
          subtitle={servicesContent.subtitle}
          eyebrow="What We Do"
          highlightWords={['Services']}
        />

        {/* 3 Column Grid for Services with smooth Left / Center / Right slide */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {servicesContent.services.map((service, idx) => (
            <Reveal
              key={service.number}
              effect={getEntranceEffect(idx)}
              delay={idx * 0.1}
              className="h-full"
            >
              <BorderBeamCard className="h-full">
                <div className="p-8 sm:p-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Header: Number + Centered Icon Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-sky select-none">
                        {service.number}
                      </span>
                      <div className="w-13 h-13 min-w-[52px] min-h-[52px] rounded-2xl bg-brand-sky/60 border border-brand-cyan/35 flex items-center justify-center shrink-0 shadow-sm">
                        {getIcon(idx)}
                      </div>
                    </div>

                    {/* Title from PDF */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3.5 leading-snug">
                      {service.title}
                    </h3>

                    {/* Intro description from PDF */}
                    <AnimatedText
                      as="p"
                      text={service.description}
                      className="text-slate-600 leading-relaxed font-normal mb-7 text-sm sm:text-base"
                      delay={0.1}
                    />

                    {/* Bullet points from PDF */}
                    <div className="pt-6 border-t border-slate-100 space-y-3.5">
                      {service.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                          <span className="text-sm font-medium text-slate-700 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-8 pt-5 flex items-center justify-between text-xs font-semibold text-brand-mid border-t border-slate-100">
                    <span className="uppercase tracking-wider">Altruisty Innovation Pvt Ltd</span>
                    <div className="w-10 h-1 rounded-full bg-brand-gradient" />
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
