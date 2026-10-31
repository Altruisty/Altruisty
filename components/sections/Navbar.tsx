'use client';

/**
 * NAVBAR COMPONENT
 * Transparent-to-glass sticky navigation with background-removed logo.
 * Premium color-reactive CTA button.
 */

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { footerContent } from '@/content/footer';
import { PremiumButton } from '@/components/ui/PremiumButton';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/90 backdrop-blur-md border-b border-brand-cyan/20 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Background-Removed Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="relative w-44 sm:w-52 h-10 sm:h-12">
              <Image
                src="/logo/altruisty-logo.png"
                alt="Altruisty Innovation Pvt Ltd"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {footerContent.exploreLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs sm:text-sm font-medium text-slate-700 hover:text-brand-deep hover-underline transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button: Cursor color shift, no movement */}
          <div className="hidden lg:block">
            <PremiumButton
              href="#internship-registration"
              variant="primary"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold"
            >
              <span>Apply for Internship</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </PremiumButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-brand-deep hover:bg-brand-sky/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 lg:hidden bg-white/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-4">
              {footerContent.exploreLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-lg font-bold text-slate-800 hover:text-brand-deep transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="pt-5 border-t border-brand-cyan/20">
              <a
                href="#internship-registration"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#internship-registration');
                }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-brand-deep shadow-sm"
              >
                <span>Apply for Internship</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
