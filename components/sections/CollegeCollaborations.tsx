'use client';

/**
 * COLLEGE EVENT COLLABORATIONS SECTION
 * Source of truth: Page 4 & Page 5 of PDF
 * Cards use travelling border beam with generous inner padding and optically aligned icons.
 */

import React from 'react';
import Image from 'next/image';
import { collaborationsContent } from '@/content/collaborations';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { MentorshipIcon } from '@/components/icons/MentorshipIcon';
import { JuryIcon } from '@/components/icons/JuryIcon';
import { InternshipAwardIcon } from '@/components/icons/InternshipAwardIcon';
import { ProductSupportIcon } from '@/components/icons/ProductSupportIcon';
import { FundingIcon } from '@/components/icons/FundingIcon';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { GraduationCap, PhoneCall, ArrowUpRight, Image as ImageIcon } from 'lucide-react';

export const CollegeCollaborations: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MentorshipIcon size={26} />;
      case 1:
        return <JuryIcon size={26} />;
      case 2:
        return <InternshipAwardIcon size={26} />;
      case 3:
        return <ProductSupportIcon size={26} />;
      case 4:
      default:
        return <FundingIcon size={26} />;
    }
  };

  return (
    <section id="college-collaborations" className="relative py-20 md:py-24 bg-brand-ice/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={collaborationsContent.sectionTitle}
          subtitle={collaborationsContent.subtitle}
          eyebrow="Academic Partnerships"
          highlightWords={['College', 'Collaborations']}
        />

        {/* Intro Paragraphs from PDF */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          {collaborationsContent.paragraphs.map((p, idx) => (
            <AnimatedText
              key={idx}
              as="p"
              text={p}
              className="fluid-body text-slate-700 leading-relaxed font-normal"
              delay={idx * 0.08}
            />
          ))}
        </div>

        {/* How We Support College Events (01 - 05) with travelling border beam */}
        <div className="mb-20">
          <Reveal effect="fade-up" delay={0.1} className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 inline-block relative">
              {collaborationsContent.supportTitle}
              <span className="block h-1 w-20 bg-brand-gradient mx-auto mt-3 rounded-full" />
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {collaborationsContent.supportSteps.map((step, idx) => (
              <Reveal key={step.number} effect="scale-in" delay={idx * 0.06}>
                <BorderBeamCard className="h-full">
                  <div className="p-7 sm:p-9 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-brand-sky">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-2xl bg-brand-sky/60 border border-brand-cyan/35 flex items-center justify-center shrink-0 shadow-sm">
                          {getStepIcon(idx)}
                        </div>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                        {step.title}
                      </h4>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-mid">
                      <span>Industry Support</span>
                      <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    </div>
                  </div>
                </BorderBeamCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Past Collaborations with Photos */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {collaborationsContent.pastCollaborationsTitle}
              </h3>
              <p className="text-xs font-mono text-brand-mid mt-1">
                {collaborationsContent.placeholderText}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-deep bg-white px-4 py-2 rounded-full border border-brand-cyan/25 shadow-sm">
              <ImageIcon className="w-4 h-4" />
              <span>Campus Events & Expos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {collaborationsContent.pastPhotos.map((photo, idx) => (
              <Reveal key={photo.id} effect="scale-in" delay={idx * 0.06}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-brand-cyan/20 shadow-sm">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold drop-shadow-sm">
                    {photo.title}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Page 5 Banner: "Let's Create Opportunities for Student Innovators" */}
        <Reveal effect="scale-in" delay={0.15} className="max-w-4xl mx-auto">
          <BorderBeamCard>
            <div className="p-8 sm:p-12 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-sky flex items-center justify-center text-brand-deep mb-5 shadow-sm">
                <GraduationCap className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 max-w-2xl">
                {collaborationsContent.ctaBanner.heading}
              </h3>

              <div className="space-y-3 mb-8 max-w-2xl text-slate-600">
                {collaborationsContent.ctaBanner.paragraphs.map((p, idx) => (
                  <p key={idx} className="fluid-body leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
              </div>

              <PremiumButton
                href={`tel:${collaborationsContent.ctaBanner.phone}`}
                variant="primary"
                className="px-8 py-3.5 sm:px-9 sm:py-4 text-base font-bold"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{collaborationsContent.ctaBanner.contactText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </PremiumButton>
            </div>
          </BorderBeamCard>
        </Reveal>
      </div>
    </section>
  );
};
