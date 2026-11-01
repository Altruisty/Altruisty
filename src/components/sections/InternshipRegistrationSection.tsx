'use client';

import React, { useState } from 'react';
import { REGISTRATION_CONTENT, INTERNSHIP_DOMAINS, COMPANY_INFO } from '@/data/content';
import { Check, AlertCircle, CheckCircle2, User, School, BookOpen, Clock, RotateCcw } from 'lucide-react';

export const InternshipRegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    yearOfStudy: '3rd Year',
    domains: [] as string[],
    mode: 'Hybrid',
    consent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');

  const toggleDomain = (domainTitle: string) => {
    setFormData((prev) => {
      const exists = prev.domains.includes(domainTitle);
      const newDomains = exists
        ? prev.domains.filter((d) => d !== domainTitle)
        : [...prev.domains, domainTitle];
      return { ...prev, domains: newDomains };
    });
    if (errors.domains) {
      setErrors((prev) => ({ ...prev, domains: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (formData.domains.length === 0) {
      newErrors.domains = 'Please select at least one preferred internship domain.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the processing of your submitted information.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const refId = `ALT-${new Date().getFullYear()}-${randomCode}`;
      setSubmissionRef(refId);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      college: '',
      degree: '',
      yearOfStudy: '3rd Year',
      domains: [],
      mode: 'Hybrid',
      consent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="register" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title text-center mb-10">
          <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
            Registration
          </h6>
          <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl leading-[90%]">
            INTERNSHIP REGISTRATION <span className="text-[#4DA8DA]">FORM</span>
          </h2>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm font-sans max-w-xl mx-auto">
            {REGISTRATION_CONTENT.subheading}
          </p>
        </div>

        <div className="rounded-[36px] bg-white border border-slate-200/90 shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          {isSubmitted ? (
            /* Success confirmation card */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                  Application Logged
                </span>
                <h3 className="font-teko uppercase font-bold text-3xl sm:text-4xl text-slate-900">
                  Registration Successfully Logged
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto font-sans">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your internship interest has been registered. Our coordination team will follow up via email with domain batch schedules and onboarding instructions.
                </p>
              </div>

              {/* Summary Details */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-left max-w-md mx-auto space-y-2.5 text-xs sm:text-sm font-sans">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Reference ID:</span>
                  <span className="font-mono font-bold text-[#233877]">{submissionRef}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-medium text-slate-800">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-medium text-slate-800">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Mode:</span>
                  <span className="font-medium text-slate-800">{formData.mode}</span>
                </div>
                <div className="pt-1">
                  <span className="text-slate-500 block mb-1">Selected Domains:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.domains.map((d) => (
                      <span key={d} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-[#233877]">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="theme-btn theme-color-2"
                >
                  <RotateCcw className="w-4 h-4 mr-2 inline-block" />
                  <span>Register Another</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="theme-btn theme-fill"
                >
                  <span>Inquire: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8 font-sans">
              {/* Personal Details */}
              <div>
                <h4 className="font-teko uppercase text-xl font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#3B72AF]" />
                  <span>Personal Details</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Rivera"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                          : 'border-slate-300 focus:border-[#233877] focus:ring-[#BAE6FD]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@domain.edu"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                          : 'border-slate-300 focus:border-[#233877] focus:ring-[#BAE6FD]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                          : 'border-slate-300 focus:border-[#233877] focus:ring-[#BAE6FD]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Academic Details */}
              <div>
                <h4 className="font-teko uppercase text-xl font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <School className="w-4 h-4 text-[#3B72AF]" />
                  <span>Academic Details</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      College / Institution
                    </label>
                    <input
                      type="text"
                      placeholder="University / Institute Name"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#233877] focus:ring-2 focus:ring-[#BAE6FD]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Degree / Course
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. B.Tech Computer Science"
                      value={formData.degree}
                      onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#233877] focus:ring-2 focus:ring-[#BAE6FD]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Current Year of Study
                    </label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#233877] focus:ring-2 focus:ring-[#BAE6FD]"
                    >
                      {REGISTRATION_CONTENT.yearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferred Internship Domain */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h4 className="font-teko uppercase text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#3B72AF]" />
                    <span>Preferred Internship Domain</span>
                    <span className="text-rose-500">*</span>
                  </h4>
                  <span className="text-xs text-slate-500">
                    (Select one or more)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-4">
                  {INTERNSHIP_DOMAINS.map((domain) => {
                    const isSelected = formData.domains.includes(domain.title);
                    return (
                      <button
                        key={domain.id}
                        type="button"
                        onClick={() => toggleDomain(domain.title)}
                        className={`text-left p-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-[#F0F7FB] border-[#233877] text-[#233877] shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className="truncate">{domain.title}</span>
                        <span
                          className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? 'bg-[#233877] border-[#233877] text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.domains && (
                  <p className="mt-2 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.domains}
                  </p>
                )}
              </div>

              {/* Mode */}
              <div>
                <h4 className="font-teko uppercase text-xl font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#3B72AF]" />
                  <span>Preferred Internship Mode</span>
                </h4>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  {REGISTRATION_CONTENT.modeOptions.map((mode) => (
                    <label
                      key={mode}
                      className={`cursor-pointer p-3 rounded-2xl border text-center transition-all ${
                        formData.mode === mode
                          ? 'bg-[#233877] border-[#233877] text-white shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mode"
                        value={mode}
                        checked={formData.mode === mode}
                        onChange={() => setFormData({ ...formData, mode })}
                        className="sr-only"
                      />
                      <span className="text-xs sm:text-sm font-bold uppercase">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => {
                      setFormData({ ...formData, consent: e.target.checked });
                      if (errors.consent) setErrors({ ...errors, consent: '' });
                    }}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#233877] focus:ring-[#3B72AF]"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    {REGISTRATION_CONTENT.consentText}
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit Button with .theme-btn styling */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="theme-btn theme-fill !text-sm !py-3.5 !px-8"
                >
                  <span className="icon-1">
                    <img src="/assets/img/icon/10.svg" alt="icon" />
                  </span>
                  SUBMIT REGISTRATION
                  <span className="icon-2">
                    <img src="/assets/img/icon/11.svg" alt="icon" />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
