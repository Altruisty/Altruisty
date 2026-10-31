'use client';

/**
 * ABOUT US SECTION
 * Background: /each_section_bg/about-us-bg.png
 * Equal spacing, equal height columns, and smooth left & right box entrance.
 */

import React from 'react';
import Image from 'next/image';
import { aboutContent } from '@/content/about';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { TypewriterWhiteBox } from '@/components/ui/TypewriterWhiteBox';
import { MissionIcon } from '@/components/icons/MissionIcon';
import { VisionIcon } from '@/components/icons/VisionIcon';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-24 overflow-hidden bg-brand-ice/20">
      {/* Section Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/each_section_bg/about-us-bg.png"
          alt="About Us Background"
          fill
          priority={false}
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={aboutContent.sectionTitle}
          subtitle={aboutContent.subtitle}
          eyebrow="Who We Are"
          highlightWords={['About', 'Us']}
        />

        {/* Narrative & Typewriter Split: Equal Height Grid with Left & Right Glide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12 md:mb-16">
          {/* Left Column: 3 Paragraphs coming smoothly from the left */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5 h-full">
            {aboutContent.paragraphs.map((p, idx) => (
              <Reveal key={idx} effect="slide-left" delay={idx * 0.08} className="flex-1 flex flex-col">
                <BorderBeamCard className="h-full flex-1">
                  <div className="p-6 sm:p-7 flex flex-col justify-center h-full">
                    <AnimatedText
                      as="p"
                      text={p}
                      className="fluid-body text-slate-700 leading-relaxed font-normal"
                      delay={idx * 0.08}
                    />
                  </div>
                </BorderBeamCard>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Image + Typewriter White Box coming smoothly from the right */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5 h-full">
            <Reveal effect="slide-right" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-slate-200/90 shadow-sm shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Altruisty Innovation Pvt Ltd Collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal effect="slide-right" delay={0.2} className="flex-1 flex flex-col min-h-0">
              <TypewriterWhiteBox className="h-full flex-1" />
            </Reveal>
          </div>
        </div>

        {/* Mission & Vision Cards: Left and Right Glide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Mission from Left */}
          <Reveal effect="slide-left" delay={0.1}>
            <BorderBeamCard className="h-full">
              <div className="p-8 sm:p-9 flex flex-col justify-center h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-sky/60 border border-brand-cyan/35 flex items-center justify-center shrink-0 shadow-sm">
                    <MissionIcon size={24} />
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-deep">
                      {aboutContent.mission.title}
                    </h3>
                    <AnimatedText
                      as="p"
                      text={aboutContent.mission.description}
                      className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base"
                      delay={0.15}
                    />
                  </div>
                </div>
              </div>
            </BorderBeamCard>
          </Reveal>

          {/* Vision from Right */}
          <Reveal effect="slide-right" delay={0.15}>
            <BorderBeamCard className="h-full">
              <div className="p-8 sm:p-9 flex flex-col justify-center h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-sky/60 border border-brand-cyan/35 flex items-center justify-center shrink-0 shadow-sm">
                    <VisionIcon size={24} />
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-deep">
                      {aboutContent.vision.title}
                    </h3>
                    <AnimatedText
                      as="p"
                      text={aboutContent.vision.description}
                      className="text-slate-600 leading-relaxed font-normal text-sm sm:text-base"
                      delay={0.2}
                    />
                  </div>
                </div>
              </div>
            </BorderBeamCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
