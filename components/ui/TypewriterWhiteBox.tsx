'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface Statement {
  id: number;
  label: string;
  text: string;
  darkenWords: string[];
}

const statements: Statement[] = [
  {
    id: 1,
    label: "Core Focus",
    text: "Altruisty Innovation is a technology-driven company focused on software solutions, skill development, and innovation. We bring together technology, creativity, and learning to help businesses grow and aspiring professionals build their future.",
    darkenWords: [
      "Altruisty",
      "Innovation",
      "technology-driven",
      "company",
      "software",
      "solutions,",
      "skill",
      "development,",
      "innovation.",
      "technology,",
      "creativity,",
      "learning",
      "businesses",
      "grow",
      "aspiring",
      "professionals",
      "future."
    ],
  },
  {
    id: 2,
    label: "Practical Problem-Solving",
    text: "Our approach combines practical problem-solving with modern technologies to create solutions that make a difference.",
    darkenWords: [
      "approach",
      "practical",
      "problem-solving",
      "modern",
      "technologies",
      "solutions",
      "difference."
    ],
  },
  {
    id: 3,
    label: "Opportunities For Growth",
    text: "Whether you are a business looking to build a digital product, a student ready to develop industry-relevant skills, or an aspiring entrepreneur with a new idea, we aim to help you take the next step.",
    darkenWords: [
      "business",
      "digital",
      "product,",
      "student",
      "industry-relevant",
      "skills,",
      "entrepreneur",
      "idea,",
      "next",
      "step."
    ],
  },
];

export const TypewriterWhiteBox: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [statementIndex, setStatementIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentStatement = statements[statementIndex];

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setCharIndex(0);
        setStatementIndex((prev) => (prev + 1) % statements.length);
      }, 4200);
      return () => clearTimeout(pauseTimer);
    }

    if (charIndex < currentStatement.text.length) {
      const typeTimer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 32); // Slow, smooth character-by-character appearance
      return () => clearTimeout(typeTimer);
    } else {
      setIsPaused(true);
    }
  }, [charIndex, isPaused, currentStatement]);

  const visibleText = currentStatement.text.slice(0, charIndex);
  const words = visibleText.split(/(\s+)/);

  return (
    <div
      className={`relative rounded-3xl bg-white border border-brand-cyan/35 p-7 sm:p-9 shadow-glass-md flex flex-col justify-between ${className}`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-sky flex items-center justify-center text-brand-deep shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-deep" />
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-brand-deep">
                {currentStatement.label}
              </span>
              <span className="block text-[11px] font-medium text-slate-400">
                Altruisty Innovation Pvt Ltd
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sky/60 border border-brand-cyan/25 text-[11px] font-semibold text-brand-deep">
            <span className="w-2 h-2 rounded-full bg-brand-deep" />
            <span>0{currentStatement.id} / 0{statements.length}</span>
          </div>
        </div>

        {/* Character-by-character typed paragraph with words in darken blue */}
        <div className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal min-h-[140px] sm:min-h-[160px]">
          {words.map((word, wIdx) => {
            if (/^\s+$/.test(word)) {
              return <span key={wIdx}>{word}</span>;
            }

            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
            const isDarkened = currentStatement.darkenWords.some(
              (dw) =>
                dw.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') === cleanWord.toLowerCase() ||
                (cleanWord.length > 2 && dw.toLowerCase().startsWith(cleanWord.toLowerCase()))
            );

            return (
              <span
                key={wIdx}
                className={
                  isDarkened
                    ? 'font-bold text-[#1E3A8A] transition-colors duration-200'
                    : 'text-slate-700'
                }
              >
                {word}
              </span>
            );
          })}
          {/* Subtle cursor at current typing position */}
          <span className="inline-block w-1.5 h-4 ml-1 bg-brand-deep align-middle animate-pulse" />
        </div>
      </div>

      {/* Bottom Footer Indicators */}
      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          {statements.map((st, sIdx) => (
            <button
              key={st.id}
              onClick={() => {
                setStatementIndex(sIdx);
                setCharIndex(0);
                setIsPaused(false);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                sIdx === statementIndex
                  ? 'w-8 bg-brand-deep'
                  : 'w-2 bg-slate-200 hover:bg-brand-mid'
              }`}
              aria-label={`View statement ${st.id}`}
            />
          ))}
        </div>
        <span className="text-[11px] tracking-wider uppercase text-brand-mid font-semibold">
          Continuous Stream
        </span>
      </div>
    </div>
  );
};
