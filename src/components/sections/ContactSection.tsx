'use client';

import React, { useState } from 'react';
import { CONTACT_CONTENT, COMPANY_INFO } from '@/data/content';
import { Phone, Globe, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSent, setFormSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!contactForm.name.trim()) errors.name = 'Please provide your name.';
    if (!contactForm.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!contactForm.message.trim()) errors.message = 'Please enter a brief message.';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormSent(true);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title mb-12">
          <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
            Contact Us
          </h6>
          <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[90%]">
            WE&apos;D LOVE TO <span className="text-[#4DA8DA]">HEAR FROM YOU</span>
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm font-sans max-w-2xl">
            {CONTACT_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start font-sans">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[36px] bg-white p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="font-teko uppercase text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                {CONTACT_CONTENT.companyName}
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_CONTENT.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-[#F0F7FB] border border-slate-200/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#233877] flex items-center justify-center shrink-0 group-hover:border-[#BAE6FD] group-hover:bg-[#4DA8DA] transition-all">
                    <Phone className="w-5 h-5 text-[#3B72AF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-[#233877]">
                      {CONTACT_CONTENT.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Website */}
                <a
                  href={CONTACT_CONTENT.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-[#F0F7FB] border border-slate-200/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#233877] flex items-center justify-center shrink-0 group-hover:border-[#BAE6FD] group-hover:bg-[#4DA8DA] transition-all">
                    <Globe className="w-5 h-5 text-[#3B72AF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Official Website
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#233877] break-all">
                      {CONTACT_CONTENT.website}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-[#F0F7FB] border border-slate-200/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#233877] flex items-center justify-center shrink-0 group-hover:border-[#BAE6FD] group-hover:bg-[#4DA8DA] transition-all">
                    <Mail className="w-5 h-5 text-[#3B72AF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Email Inquiries
                    </span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-[#233877]">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-[#233877] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#3B72AF]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Operating Location
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {CONTACT_CONTENT.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Follow Us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#233877] hover:text-white text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={COMPANY_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#233877] hover:text-white text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[36px] bg-white p-8 sm:p-10 border border-slate-200/90 shadow-sm">
              <h3 className="font-teko uppercase text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Tell us about your project, partnership inquiry, or technical requirement.
              </p>

              {formSent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-teko uppercase text-2xl font-bold text-slate-900">Message Received</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{contactForm.name}</strong>. Our team has received your communication and will respond promptly via <strong>{contactForm.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setContactForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
                      setFormSent(false);
                    }}
                    className="theme-btn theme-color-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={contactForm.name}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          formErrors.name
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                            : 'border-slate-300 focus:border-[#233877] focus:ring-[#BAE6FD]'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={contactForm.email}
                        onChange={(e) => {
                          setContactForm({ ...contactForm, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          formErrors.email
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                            : 'border-slate-300 focus:border-[#233877] focus:ring-[#BAE6FD]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#233877] focus:ring-2 focus:ring-[#BAE6FD]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Software Development">Software Development Project</option>
                      <option value="AI & Emerging Tech">AI & Emerging Tech Prototype</option>
                      <option value="College Event Collaboration">College Event Collaboration</option>
                      <option value="Industry Partnership">Industry Partnership</option>
                      <option value="Internship Question">Internship Questions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please share details about your inquiry or project requirements..."
                      value={contactForm.message}
                      onChange={(e) => {
                        setContactForm({ ...contactForm, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        formErrors.message
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                          : 'border-slate-300 focus:border-[#233877] focus:ring-[#BAE6FD]'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="theme-btn theme-fill !text-sm !py-3.5 !px-8"
                  >
                    <span className="icon-1">
                      <img src="/assets/img/icon/10.svg" alt="icon" />
                    </span>
                    SEND MESSAGE
                    <span className="icon-2">
                      <img src="/assets/img/icon/11.svg" alt="icon" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
