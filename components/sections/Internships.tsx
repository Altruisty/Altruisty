'use client';

/**
 * INTERNSHIPS SECTION
 * Source of truth: Page 5 & Page 6 of PDF
 * Background: /each_section_bg/internships-section.png
 * Smooth alternating left & right box entrance, equal section spacing.
 */

import React from 'react';
import Image from 'next/image';
import { internshipsContent } from '@/content/internships';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { CheckCircle2, Rocket, ArrowDown } from 'lucide-react';

export const Internships: React.FC = () => {
  return (
    <section id="internships" className="relative py-20 md:py-24 overflow-hidden bg-brand-ice/20">
      {/* Section Background Image - Full uncropped corner-to-corner design */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/each_section_bg/internship-section-bg.png"
          alt="Internships Background"
          fill
          priority={false}
          className="object-fill w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={internshipsContent.sectionTitle}
          subtitle={internshipsContent.subtitle}
          eyebrow="Student Programs"
          highlightWords={['Internships']}
        />

        {/* Intro Paragraphs from PDF */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          {internshipsContent.paragraphs.map((p, idx) => (
            <AnimatedText
              key={idx}
              as="p"
              text={p}
              className="fluid-body text-slate-600 leading-relaxed font-normal"
              delay={idx * 0.08}
            />
          ))}
        </div>

        {/* Explore Our Internship Domains with smooth chips */}
        <div className="mb-16">
          <Reveal effect="fade-up" delay={0.1} className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 inline-block">
              {internshipsContent.domainsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-brand-mid mt-2">
              Industry-aligned technical learning paths designed for real-world impact
            </p>
          </Reveal>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {internshipsContent.domains.map((domain, idx) => {
              const effect = idx % 2 === 0 ? 'slide-left' : 'slide-right';
              return (
                <Reveal key={domain} effect={effect} delay={idx * 0.025}>
                  <div className="group relative px-5 py-3 rounded-2xl bg-white border border-brand-mid/20 hover:border-brand-deep hover:bg-brand-sky/30 shadow-glass-sm transition-all duration-300 cursor-pointer flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-brand-deep transition-colors">
                      {domain}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Why Apply for an Internship? & Past Photos: Left & Right Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16">
          {/* Why Apply List from Left */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal effect="slide-left" delay={0.1} className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {internshipsContent.whyApplyTitle}
              </h3>
            </Reveal>

            <div className="space-y-3.5">
              {internshipsContent.whyApplyReasons.map((reason, idx) => (
                <Reveal
                  key={idx}
                  effect="slide-left"
                  delay={0.1 + idx * 0.04}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/90 border border-brand-cyan/20 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium text-sm sm:text-base">
                    {reason}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Past Internship Photos from Right */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal effect="slide-right" delay={0.15} className="h-full">
              <BorderBeamCard className="h-full">
                <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {internshipsContent.pastInternshipTitle}
                    </h4>
                    <span className="text-xs font-mono text-brand-mid">
                      {internshipsContent.placeholderText}
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {internshipsContent.pastPhotos.map((photo) => (
                      <div
                        key={photo.id}
                        className="group relative rounded-2xl overflow-hidden aspect-[16/9] border border-brand-cyan/20"
                      >
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-70" />
                        <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                          {photo.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </BorderBeamCard>
            </Reveal>
          </div>
        </div>

        {/* Ready to Start Your Journey? Prompt */}
        <Reveal effect="scale-in" delay={0.15} className="text-center max-w-3xl mx-auto">
          <BorderBeamCard>
            <div className="p-8 sm:p-10 text-center flex flex-col items-center">
              <Rocket className="w-8 h-8 text-brand-deep mb-3" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                {internshipsContent.readyToStart.title}
              </h3>
              <p className="fluid-body text-slate-600 mb-6 max-w-xl text-sm sm:text-base">
                {internshipsContent.readyToStart.description}
              </p>
              <a
                href="#internship-registration"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-brand-deep bg-white border border-brand-deep/30 hover:bg-brand-deep hover:text-white transition-all shadow-sm"
              >
                <span>Scroll to Application Form</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </BorderBeamCard>
        </Reveal>
      </div>
    </section>
  );
};
