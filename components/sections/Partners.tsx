'use client';

/**
 * OUR PARTNERS SECTION
 * Source of truth: Page 4 of PDF
 * Card with travelling border beam on hover and generous padding.
 * Premium color-reactive button.
 */

import React from 'react';
import { partnersContent } from '@/content/partners';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { Handshake, PhoneCall, ArrowUpRight } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="relative py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={partnersContent.sectionTitle}
          subtitle={partnersContent.subtitle}
          eyebrow="Ecosystem"
          highlightWords={['Partners']}
        />

        {/* 2 Paragraphs from PDF */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          {partnersContent.paragraphs.map((p, idx) => (
            <AnimatedText
              key={idx}
              as="p"
              text={p}
              className="fluid-body text-slate-600 leading-relaxed font-normal"
              delay={idx * 0.08}
            />
          ))}
        </div>

        {/* Partnership Callout Card with Travelling Border Beam */}
        <Reveal effect="slide-left" delay={0.15} className="max-w-3xl mx-auto">
          <BorderBeamCard>
            <div className="p-8 sm:p-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-sky flex items-center justify-center text-brand-deep mb-5 shadow-sm">
                <Handshake className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                {partnersContent.partnershipCard.title}
              </h3>

              <AnimatedText
                as="p"
                text={partnersContent.partnershipCard.description}
                className="fluid-body text-slate-600 font-normal mb-8 max-w-xl"
                delay={0.1}
              />

              {/* Premium Button with color-shift under cursor */}
              <PremiumButton
                href={`tel:${partnersContent.partnershipCard.phone}`}
                variant="primary"
                className="px-8 py-3.5 sm:px-9 sm:py-4 text-base font-bold"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{partnersContent.partnershipCard.contactText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </PremiumButton>
            </div>
          </BorderBeamCard>
        </Reveal>
      </div>
    </section>
  );
};
