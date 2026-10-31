'use client';

/**
 * INTERNSHIP REGISTRATION FORM COMPONENT
 * Source of truth: Page 6 & Page 7 of PDF
 * Card with travelling border beam on hover.
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import { formContent } from '@/content/form';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Reveal } from '@/components/ui/Reveal';
import { BorderBeamCard } from '@/components/ui/BorderBeamCard';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { Check, CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  college: z.string().optional(),
  degree: z.string().optional(),
  yearOfStudy: z.string().optional(),
  domains: z.array(z.string()).min(1, 'Please select at least one preferred domain'),
  mode: z.enum(['Online', 'In-person', 'Hybrid'], {
    errorMap: () => ({ message: 'Please select a preferred mode' }),
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the processing of your information' }),
  }),
});

type FormData = z.infer<typeof formSchema>;

export const InternshipForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      college: '',
      degree: '',
      yearOfStudy: '1st Year',
      domains: [],
      mode: 'Online',
      consent: false as any,
    },
  });

  const selectedDomains = watch('domains') || [];
  const selectedMode = watch('mode');
  const selectedYear = watch('yearOfStudy');

  const toggleDomain = (domain: string) => {
    if (selectedDomains.includes(domain)) {
      setValue(
        'domains',
        selectedDomains.filter((d) => d !== domain),
        { shouldValidate: true }
      );
    } else {
      setValue('domains', [...selectedDomains, domain], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/internship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        setSubmitSuccess(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#2F4A9F', '#4A7DB8', '#72D0E3'],
        });
        reset();
      } else {
        setServerError(res.message || 'Submission failed. Please check your information.');
      }
    } catch (err) {
      setServerError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="internship-registration" className="relative py-20 md:py-24 bg-brand-ice/40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title={formContent.sectionTitle}
          subtitle={formContent.subtitle}
          eyebrow="Application Portal"
          highlightWords={['Internship', 'Registration']}
        />

        <Reveal effect="slide-left" delay={0.1}>
          <BorderBeamCard>
            <div className="p-7 sm:p-11 md:p-13">
            {submitSuccess ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-sky flex items-center justify-center text-brand-deep mb-5 shadow-sm">
                  <CheckCircle className="w-10 h-10 text-brand-deep" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Registration Received!
                </h3>
                <p className="fluid-body text-slate-600 max-w-lg mb-8 text-sm sm:text-base">
                  Thank you for registering your interest in an internship at Altruisty Innovation Pvt Ltd. Our team will review your application and get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-gradient shadow-glass-md hover:shadow-blue-glow transition-all"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-9">
                {serverError && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* 1. PERSONAL DETAILS */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-deep" />
                    {formContent.personalDetailsTitle}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        {formContent.fields.fullName}
                      </label>
                      <input
                        type="text"
                        {...register('fullName')}
                        placeholder="Your Full Name"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        } focus:border-brand-deep focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        {formContent.fields.email}
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="you@email.com"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        } focus:border-brand-deep focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        {formContent.fields.phone}
                      </label>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+91 9876543210"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        } focus:border-brand-deep focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. ACADEMIC DETAILS */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-mid" />
                    {formContent.academicDetailsTitle}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* College */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        {formContent.fields.college}
                      </label>
                      <input
                        type="text"
                        {...register('college')}
                        placeholder="Name of your College or Institution"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-deep focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm"
                      />
                    </div>

                    {/* Degree */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                        {formContent.fields.degree}
                      </label>
                      <input
                        type="text"
                        {...register('degree')}
                        placeholder="e.g. B.Tech / B.E. / BCA / MCA"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-deep focus:ring-2 focus:ring-brand-cyan/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Year of Study Radio Group */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2.5">
                      {formContent.fields.yearOfStudy}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                      {formContent.yearOptions.map((year) => {
                        const isChecked = selectedYear === year;
                        return (
                          <label
                            key={year}
                            className={`flex items-center justify-center p-2.5 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                              isChecked
                                ? 'bg-brand-sky border-brand-deep text-brand-deep shadow-sm'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              value={year}
                              {...register('yearOfStudy')}
                              className="sr-only"
                            />
                            <span>{year}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. PREFERRED INTERNSHIP DOMAIN (SELECT ONE OR MORE) */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                      {formContent.preferredDomainTitle}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {formContent.domainOptions.map((domain) => {
                      const isSelected = selectedDomains.includes(domain);
                      return (
                        <div
                          key={domain}
                          onClick={() => toggleDomain(domain)}
                          className={`p-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-brand-sky border-brand-deep text-brand-deep shadow-sm font-semibold'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-brand-mid/40'
                          }`}
                        >
                          <span className="leading-snug">{domain}</span>
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ml-2 ${
                              isSelected
                                ? 'bg-brand-deep border-brand-deep text-white'
                                : 'border-slate-300'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.domains && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.domains.message}</p>
                  )}
                </div>

                {/* 4. PREFERRED INTERNSHIP MODE */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-deep" />
                    {formContent.preferredModeTitle}
                  </h4>

                  <div className="grid grid-cols-3 gap-3">
                    {formContent.modeOptions.map((mode) => {
                      const isSelected = selectedMode === mode;
                      return (
                        <label
                          key={mode}
                          className={`p-3 rounded-xl border text-center font-bold text-xs sm:text-sm cursor-pointer transition-all flex flex-col items-center justify-center ${
                            isSelected
                              ? 'bg-brand-sky border-brand-deep text-brand-deep shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            value={mode}
                            {...register('mode')}
                            className="sr-only"
                          />
                          <span>{mode}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.mode && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.mode.message}</p>
                  )}
                </div>

                {/* 5. CONSENT CHECKBOX */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('consent')}
                      className="mt-1 w-4 h-4 rounded text-brand-deep border-slate-300 focus:ring-brand-cyan"
                    />
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {formContent.consentText}
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-xs text-red-500">{errors.consent.message}</p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-3 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[260px] px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-brand-deep hover:bg-brand-gradient shadow-glass-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60 mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>{formContent.submitButtonText}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
            </div>
          </BorderBeamCard>
        </Reveal>
      </div>
    </section>
  );
};
