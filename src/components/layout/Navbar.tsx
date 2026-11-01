'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownItems = [
    { name: 'Clients', href: '#clients' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partners', href: '#partners' },
    { name: 'Past event', href: '#college-events' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'services', 'clients', 'gallery', 'partners', 'college-events', 'internships', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

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

  const isDropdownActive = ['clients', 'gallery', 'partners', 'college-events'].includes(activeSection);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5'
            : 'bg-white/90 backdrop-blur-sm py-3 border-b border-slate-100/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: decreased size to view correctly and proportionally */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 group focus:outline-none"
              title="Altruisty Innovation"
            >
              <div className="relative h-7 w-32 sm:h-8 sm:w-36 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="Altruisty Innovation"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Home */}
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeSection === 'hero'
                    ? 'bg-[#233877] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#233877] hover:bg-slate-100/80'
                }`}
              >
                Home
              </a>

              {/* About */}
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeSection === 'about'
                    ? 'bg-[#233877] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#233877] hover:bg-slate-100/80'
                }`}
              >
                About
              </a>

              {/* Services */}
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeSection === 'services'
                    ? 'bg-[#233877] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#233877] hover:bg-slate-100/80'
                }`}
              >
                Services
              </a>

              {/* Dropdown: Clients, Gallery, Partners, Past event */}
              <div
                ref={dropdownRef}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                    isDropdownActive || isDropdownOpen
                      ? 'bg-[#233877] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#233877] hover:bg-slate-100/80'
                  }`}
                  aria-expanded={isDropdownOpen}
                >
                  <span>Explore</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu Box */}
                <div
                  className={`absolute top-full left-0 mt-1 w-44 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 z-50 transition-all duration-200 ${
                    isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                  }`}
                >
                  {dropdownItems.map((item) => {
                    const isItemActive = activeSection === item.href.substring(1);
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-4 py-2 text-xs uppercase tracking-wider font-bold transition-colors ${
                          isItemActive
                            ? 'text-[#233877] bg-[#F0F7FB] font-extrabold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#233877]'
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Internships */}
              <a
                href="#internships"
                onClick={(e) => handleNavClick(e, '#internships')}
                className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeSection === 'internships' || activeSection === 'register'
                    ? 'bg-[#233877] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#233877] hover:bg-slate-100/80'
                }`}
              >
                Internships
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  activeSection === 'contact'
                    ? 'bg-[#233877] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#233877] hover:bg-slate-100/80'
                }`}
              >
                Contact
              </a>
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#233877] px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 transition-colors"
                title="Call Altruisty Innovation"
              >
                <Phone className="w-3.5 h-3.5 text-[#3B72AF]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#register"
                onClick={(e) => handleNavClick(e, '#register')}
                className="theme-btn theme-fill !text-xs !py-2.5 !px-5 !min-w-0"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 inline-block" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-xl text-slate-700 hover:text-[#233877] hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="relative h-7 w-28">
                  <Image
                    src="/logo.png"
                    alt="Altruisty Innovation"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 flex flex-col space-y-1">
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className={`px-3 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    activeSection === 'hero' ? 'bg-[#233877] text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className={`px-3 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    activeSection === 'about' ? 'bg-[#233877] text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  About
                </a>

                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className={`px-3 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    activeSection === 'services' ? 'bg-[#233877] text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Services
                </a>

                {/* Mobile Dropdown Options */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs uppercase tracking-wider font-bold text-slate-700 hover:bg-slate-50"
                  >
                    <span>Dropdown Options</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileDropdownOpen && (
                    <div className="pl-4 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-100">
                      {dropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block px-3 py-1.5 text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-[#233877]"
                        >
                          • {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#internships"
                  onClick={(e) => handleNavClick(e, '#internships')}
                  className={`px-3 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    activeSection === 'internships' ? 'bg-[#233877] text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Internships
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className={`px-3 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
                    activeSection === 'contact' ? 'bg-[#233877] text-white' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-[#3B72AF]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="#register"
                onClick={(e) => handleNavClick(e, '#register')}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full bg-gradient-to-r from-[#1B2E5A] to-[#3B72AF] text-white text-xs font-bold uppercase tracking-wider shadow"
              >
                <span>Apply for Internship</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
