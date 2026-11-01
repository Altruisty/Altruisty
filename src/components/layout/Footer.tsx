'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COMPANY_INFO, NAV_LINKS } from '@/data/content';
import { ArrowUp, Phone, Globe, Shield, FileText, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <footer className="footer-section bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-8 w-36 sm:h-9 sm:w-40 bg-white/95 rounded-xl px-2 py-1">
                <Image
                  src="/logo.png"
                  alt="Altruisty Innovation Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="font-teko uppercase text-xl text-[#4DA8DA] tracking-widest font-semibold pt-1">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-sans leading-relaxed">
                Empowering businesses, students, and innovators with intelligent software solutions, practical skill development, and industry-grade digital experiences.
              </p>
              <div className="pt-2 text-xs font-mono text-slate-400">
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full font-sans">
                  {COMPANY_INFO.servicesSummary}
                </span>
              </div>
            </div>

            {/* Quick Explore Links */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-teko uppercase text-2xl font-bold tracking-wider text-white">
                Explore Altruisty
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-semibold font-sans">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-slate-400 hover:text-[#4DA8DA] transition-colors py-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-teko uppercase text-2xl font-bold tracking-wider text-white">
                Get Connected
              </h3>
              <div className="space-y-2 text-xs font-sans">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#4DA8DA] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#4DA8DA]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={COMPANY_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#4DA8DA] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#4DA8DA]" />
                  <span className="truncate">{COMPANY_INFO.website}</span>
                </a>
              </div>

              <div className="pt-4 flex items-center gap-3 font-sans">
                <button
                  type="button"
                  onClick={() => setLegalModal('privacy')}
                  className="text-xs text-slate-400 hover:text-[#4DA8DA] flex items-center gap-1 underline underline-offset-2"
                >
                  <Shield className="w-3 h-3" />
                  Privacy Policy
                </button>
                <span className="text-slate-600">•</span>
                <button
                  type="button"
                  onClick={() => setLegalModal('terms')}
                  className="text-xs text-slate-400 hover:text-[#4DA8DA] flex items-center gap-1 underline underline-offset-2"
                >
                  <FileText className="w-3 h-3" />
                  Terms & Conditions
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
            <div>
              <p>{COMPANY_INFO.copyright}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-500 font-teko uppercase text-base">Altruisty Innovation Pvt Ltd</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:border-[#4DA8DA] transition-all"
                title="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Privacy Policy / Terms */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 font-sans"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-teko uppercase text-2xl font-bold text-slate-900">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>Altruisty Innovation</strong> respects and protects your personal privacy. Information collected through our contact and internship registration forms is used solely for communicating regarding technology services, partnerships, and internship applications.
                  </p>
                  <p>
                    We do not sell, rent, or distribute personal information to third parties. All submitted data is handled in strict compliance with applicable confidentiality and data protection standards.
                  </p>
                  <p className="text-xs text-slate-400 pt-2 font-mono">
                    Official Reference: Altruisty Innovation Privacy Framework (2026).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to <strong>Altruisty Innovation</strong>. By accessing our website, services, and educational programs, you acknowledge and agree to comply with our terms of service and acceptable usage policies.
                  </p>
                  <p>
                    All content, materials, course outlines, and project specifications remain the intellectual property of Altruisty Innovation Pvt Ltd unless explicitly stated otherwise.
                  </p>
                  <p className="text-xs text-slate-400 pt-2 font-mono">
                    Official Reference: Altruisty Innovation Terms & Conditions (2026).
                  </p>
                </>
              )}
            </div>
            <div className="pt-4 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="theme-btn theme-fill !text-xs !py-2 !px-5 !min-w-0"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
