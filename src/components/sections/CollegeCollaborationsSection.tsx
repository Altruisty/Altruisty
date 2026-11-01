'use client';

import React from 'react';
import Image from 'next/image';
import { COLLEGE_COLLABORATIONS_CONTENT } from '@/data/content';
import { GraduationCap, Phone, CheckCircle, Sparkles } from 'lucide-react';

export const CollegeCollaborationsSection: React.FC = () => {
  const eventPhotos = [
    { title: 'Campus Hackathons & Code Sprints', img: '/assets/img/case-study/04.jpg', tag: 'Hackathon' },
    { title: 'Project Expos & Jury Evaluations', img: '/assets/img/case-study/05.jpg', tag: 'Evaluation' },
    { title: 'Technical Workshops & Keynotes', img: '/assets/img/case-study/06.jpg', tag: 'Symposium' },
  ];

  return (
    <section id="college-events" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title mb-10">
          <h6 className="text-[#3B72AF] font-teko uppercase text-xl tracking-widest font-semibold block mb-2">
            College Event Collaborations & Past Events
          </h6>
          <h2 className="text-slate-950 font-teko uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[90%]">
            YOUR CAMPUS. YOUR IDEAS. <br />
            <span className="text-[#4DA8DA]">OUR INNOVATION.</span>
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
            {COLLEGE_COLLABORATIONS_CONTENT.description}
          </p>
        </div>

        {/* 5 Support Tracks Grid */}
        <div className="mt-12">
          <h3 className="font-teko uppercase font-bold text-3xl sm:text-4xl text-slate-900 mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#233877]" />
            <span>How We Support College Events</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLEGE_COLLABORATIONS_CONTENT.supportCategories.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-2xs hover:border-[#3B72AF] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-teko text-3xl font-bold text-slate-300 group-hover:text-[#233877] transition-colors">
                      {item.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#F0F7FB] border border-[#BAE6FD] text-[#3B72AF] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4" />
                    </span>
                  </div>

                  <h4 className="font-teko uppercase font-bold text-2xl text-slate-900 group-hover:text-[#233877] transition-colors mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono font-bold uppercase tracking-wider text-[#3B72AF]">
                  Official Industry Partner Track
                </div>
              </div>
            ))}

            {/* 6th Card: Symposium / Hackathon Direct Callout */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1B2E5A] to-[#233877] text-white p-7 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#BAE6FD] px-3 py-1 rounded-full bg-white/10 inline-block mb-3 font-sans">
                  For Student Bodies & Faculties
                </span>
                <h4 className="font-teko uppercase font-bold text-3xl mb-2">
                  Organizing a Technical Symposium?
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  Hackathons, project expos, startup challenges, and symposiums — partner with Altruisty Innovation for jury panels, prizes, and direct mentorship.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={`tel:${COLLEGE_COLLABORATIONS_CONTENT.contactPhone}`}
                  className="theme-btn border-white !bg-white !text-[#233877] hover:!bg-[#F0F7FB] w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#3B72AF]" />
                  <span>Call {COLLEGE_COLLABORATIONS_CONTENT.contactPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Past Collaborations Visual Preview */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h3 className="font-teko uppercase font-bold text-3xl sm:text-4xl text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#4DA8DA]" />
            <span>Past Collaborations & Campus Events</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventPhotos.map((ep, idx) => (
              <div key={idx} className="case-study-box-items-2 group">
                <div className="thumb relative h-60 rounded-[28px] overflow-hidden bg-slate-100">
                  <Image
                    src={ep.img}
                    alt={ep.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider font-sans">
                    {ep.tag}
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="font-teko uppercase font-bold text-xl text-slate-900 group-hover:text-[#233877] transition-colors">
                    {ep.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans">
                    Mentorship, jury support & internship awards for winning student innovators.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
