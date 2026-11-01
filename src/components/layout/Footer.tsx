'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { COMPANY_INFO, NAV_LINKS } from '@/data/content';
import { ArrowUp, ArrowUpRight, Shield, FileText, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <>
      {/* Exact Footer Design from index-3.html */}
      <footer className="footer-section fix footer-bg relative overflow-hidden bg-[#070B14] text-white pt-24 pb-10 border-t border-slate-800/80">
        {/* Circle Shape from index-3.html */}
        <div className="footer-circle-shape absolute -top-24 -right-24 pointer-events-none opacity-20 w-[420px] h-[420px]">
          <Image
            src="/assets/img/footer-circle.png"
            alt="Decorative Circle"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Upper Newsletter Items (.footer-newsletter-items from index-3.html) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
            {/* Left Area: Get started now + Contact button */}
            <div className="lg:col-span-6 space-y-6 scroll-reveal-left">
              <div className="space-y-3">
                <h2 className="font-teko uppercase font-bold text-5xl sm:text-7xl md:text-8xl leading-[88%] text-white">
                  GET STARTED <br />
                  <span className="text-[#4DA8DA]">NOW</span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed max-w-lg">
                  Whether you&apos;re interested in collaborating with us on next-gen technology solutions,
                  curriculum development, or talent acceleration, we&apos;d love to hear from you.
                </p>
              </div>

              <div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="contact-btn inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-[#4DA8DA] hover:border-[#4DA8DA] text-white hover:text-slate-950 font-teko uppercase text-xl tracking-wider transition-all duration-300 group shadow-lg"
                >
                  CONTACT OUR TEAM
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Area: Office locations & Newsletter Subscribe */}
            <div className="lg:col-span-6 space-y-8 scroll-reveal-right">
              {/* Location & Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="block text-[#4DA8DA] font-teko uppercase text-lg tracking-wider mb-1">
                    Headquarters
                  </span>
                  <p className="text-slate-300 font-sans leading-relaxed">
                    Chennai, Tamil Nadu, India
                  </p>
                  <p className="text-xs text-slate-500 font-sans mt-1">Tech Corridor</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="block text-[#4DA8DA] font-teko uppercase text-lg tracking-wider mb-1">
                    Inquiries
                  </span>
                  <p className="text-slate-300 font-sans">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 font-sans mt-1">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Newsletter Form (.footer-input from index-3.html) */}
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-medium mb-3">
                  SUBSCRIBE FOR INNOVATION INSIGHTS
                </p>
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white/[0.06] border border-white/15 focus:border-[#4DA8DA] rounded-full py-3.5 pl-6 pr-14 text-sm text-white placeholder-slate-400 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 w-10 h-10 rounded-full bg-[#4DA8DA] hover:bg-[#3B72AF] flex items-center justify-center transition-colors shrink-0 shadow-md"
                    title="Subscribe"
                  >
                    <Image
                      src="/assets/img/icon/09.svg"
                      alt="Submit"
                      width={18}
                      height={18}
                      className="brightness-0"
                    />
                  </button>
                </form>
                {subscribed && (
                  <p className="text-xs text-emerald-400 mt-2 font-sans">
                    Thank you! You are subscribed to Altruisty Innovation updates.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Bar Row */}
          <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 text-xs sm:text-sm">
            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-[#4DA8DA] uppercase font-medium tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#3B72AF] hover:border-[#3B72AF] transition-all"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#4DA8DA] hover:border-[#4DA8DA] transition-all"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full bg-[#4DA8DA] hover:bg-[#3B72AF] text-white flex items-center justify-center transition-colors shrink-0 shadow-md"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Colossal Brand Name Typography (Exact Layout from index-3.html .exolax-text) */}
          <div className="pt-10 pb-4 text-center overflow-hidden">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block w-full font-teko uppercase font-bold text-5xl sm:text-7xl md:text-9xl lg:text-[130px] xl:text-[160px] leading-[82%] tracking-tight text-center select-none text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/50 to-white/10 hover:from-[#4DA8DA] hover:via-[#3B72AF] hover:to-white/40 transition-all duration-700 cursor-pointer"
            >
              ALTRUISTY INNOVATION
            </a>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
            <p>© {new Date().getFullYear()} Altruisty Innovation Pvt Ltd. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'privacy' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3B72AF] flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-teko uppercase text-2xl text-slate-900">Privacy Policy</h3>
                    <p className="text-xs text-slate-500">Altruisty Innovation Pvt Ltd</p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed font-sans pt-2">
                  <p>
                    Altruisty Innovation respects your privacy and is dedicated to protecting personal information collected through our official digital touchpoints and internship registration forms.
                  </p>
                  <p>
                    Any details submitted (name, email, phone number, college, and branch) are solely utilized for educational communications, corporate inquiries, and program coordination. We do not sell or lease user information to third-party advertisers.
                  </p>
                  <p>
                    For inquiries regarding data privacy or to request the deletion of your records, reach out directly to contact@altruisty.org.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3B72AF] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-teko uppercase text-2xl text-slate-900">Terms of Service</h3>
                    <p className="text-xs text-slate-500">Altruisty Innovation Pvt Ltd</p>
                  </div>
                </div>
                <div className="text-xs text-slate-600 space-y-3 leading-relaxed font-sans pt-2">
                  <p>
                    By engaging with Altruisty Innovation&apos;s website and technology services, you agree to comply with standard corporate guidelines and ethical conduct.
                  </p>
                  <p>
                    All original software frameworks, educational curricula, and brand materials displayed are proprietary assets of Altruisty Innovation Pvt Ltd.
                  </p>
                  <p>
                    Internship participants and project partners are expected to adhere to intellectual property agreements and non-disclosure standards outlined during registration.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-6 py-2 rounded-full bg-[#1B2E5A] text-white text-xs font-semibold hover:bg-[#3B72AF] transition-colors"
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
