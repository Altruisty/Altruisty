'use client';

/**
 * CONTACT US SECTION
 * Source of truth: Page 7 of PDF
 * Card with travelling border beam on hover.
 */

import React from 'react';
import { contactContent } from '@/content/contact';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 md:py-24 bg-brand-ice/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={contactContent.sectionTitle}
          subtitle={contactContent.subtitle}
          eyebrow="Get In Touch"
          highlightWords={['Contact', 'Us']}
        />

        <div className="max-w-3xl mx-auto text-center mb-14">
          <AnimatedText
            as="p"
            text={contactContent.paragraph}
            className="fluid-body text-slate-600 leading-relaxed font-normal"
            delay={0.08}
          />
        </div>

        <Reveal effect="slide-right" delay={0.1} className="max-w-4xl mx-auto">
          <BorderBeamCard>
            <div className="p-8 sm:p-12">
            <div className="text-center mb-8 pb-5 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-mid">
                Technology Partner
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {contactContent.company}
              </h3>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {/* Email */}
              <div className="p-4 rounded-xl bg-brand-ice/50 border border-brand-cyan/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-brand-sky flex items-center justify-center text-brand-deep shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {contactContent.details.email.label}
                  </span>
                  {contactContent.details.email.value ? (
                    <a
                      href={`mailto:${contactContent.details.email.value}`}
                      className="text-sm font-semibold text-brand-deep hover:underline"
                    >
                      {contactContent.details.email.value}
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      {contactContent.details.email.placeholder}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-brand-ice/50 border border-brand-cyan/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-brand-sky flex items-center justify-center text-brand-deep shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {contactContent.details.phone.label}
                  </span>
                  {contactContent.details.phone.value ? (
                    <a
                      href={`tel:${contactContent.details.phone.value}`}
                      className="text-sm font-semibold text-brand-deep hover:underline"
                    >
                      {contactContent.details.phone.value}
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      {contactContent.details.phone.placeholder}
                    </span>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-brand-ice/50 border border-brand-cyan/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-brand-sky flex items-center justify-center text-brand-deep shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {contactContent.details.location.label}
                  </span>
                  {contactContent.details.location.value ? (
                    <span className="text-sm font-semibold text-slate-800">
                      {contactContent.details.location.value}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      {contactContent.details.location.placeholder}
                    </span>
                  )}
                </div>
              </div>

              {/* Website */}
              <div className="p-4 rounded-xl bg-brand-ice/50 border border-brand-cyan/20 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-brand-sky flex items-center justify-center text-brand-deep shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {contactContent.details.website.label}
                  </span>
                  <a
                    href={contactContent.details.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-deep hover:underline flex items-center gap-1"
                  >
                    <span>{contactContent.details.website.value}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                {contactContent.social.title}
              </span>

              <div className="flex items-center gap-3">
                {contactContent.social.links.map((link) => (
                  <div
                    key={link.platform}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700"
                  >
                    {link.platform === 'LinkedIn' ? (
                      <Linkedin className="w-3.5 h-3.5 text-brand-deep" />
                    ) : (
                      <Instagram className="w-3.5 h-3.5 text-brand-mid" />
                    )}
                    <span>{link.label}</span>
                    {link.value ? (
                      <a
                        href={link.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-deep hover:underline font-bold"
                      >
                        Visit
                      </a>
                    ) : (
                      <span className="text-slate-400 font-normal">
                        {link.placeholder}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </BorderBeamCard>
        </Reveal>
      </div>
    </section>
  );
};
