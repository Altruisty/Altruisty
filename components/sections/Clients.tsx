'use client';

/**
 * OUR CLIENTS SECTION
 * Source of truth: Page 3 of PDF
 * Background: /each_section_bg/Our-Clients.png
 * Equal section spacing and smooth entrance.
 */

import React from 'react';
import Image from 'next/image';
import { clientsContent } from '@/content/clients';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { Marquee } from '@/components/ui/Marquee';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { Building2 } from 'lucide-react';

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="relative py-20 md:py-24 overflow-hidden bg-brand-ice/20">
      {/* Section Background Image - Full uncropped corner-to-corner design */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/each_section_bg/Our-Clients.png"
          alt="Our Clients Background"
          fill
          priority={false}
          className="object-fill w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={clientsContent.sectionTitle}
          subtitle={clientsContent.subtitle}
          eyebrow="Client Trust"
          highlightWords={['Clients']}
        />

        {/* 3 Paragraphs from PDF */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          {clientsContent.paragraphs.map((p, idx) => (
            <AnimatedText
              key={idx}
              as="p"
              text={p}
              className="fluid-body text-slate-600 leading-relaxed font-normal"
              delay={idx * 0.08}
            />
          ))}
        </div>

        {/* "Past Clients :" Label with styled placeholder badge */}
        <Reveal effect="fade-up" delay={0.15} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-brand-mid/20 shadow-sm">
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              {clientsContent.pastClientsLabel}
            </span>
            <span className="text-xs font-mono text-brand-mid px-2 py-0.5 rounded bg-brand-sky">
              {clientsContent.placeholderText}
            </span>
          </div>
        </Reveal>

        {/* Infinite Logo Marquee with BorderBeamCard */}
        <div className="py-4">
          <Marquee speed={30} pauseOnHover={true}>
            {clientsContent.logos.map((logo) => (
              <div key={logo.id} className="min-w-[240px]">
                <BorderBeamCard>
                  <div className="p-5 sm:p-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-sky flex items-center justify-center text-brand-deep shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs sm:text-sm font-bold text-slate-800">
                        {logo.placeholder}
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        {logo.name}
                      </span>
                    </div>
                  </div>
                </BorderBeamCard>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
