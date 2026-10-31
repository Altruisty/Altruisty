'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

const lines = [
  "Turning Ideas into Intelligent Digital Solutions",
  "Software Solutions, Skill Development, and Innovation",
  "Practical Problem-Solving with Modern Technologies",
  "Empowering Students with Industry-Relevant Skills",
  "Technology Accessible, Practical, and Impactful",
  "Empowering People, Businesses, and Communities"
];

export const InfiniteGlowingLines: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lines.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 p-6 sm:p-8 text-white shadow-glass-md border border-brand-cyan/30 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-deep/30 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-brand-cyan" />
          <span className="text-slate-300 font-semibold tracking-wider uppercase">
            Altruisty Innovation Core Stream
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
        </div>
      </div>

      {/* Line by line glowing infinite list */}
      <div className="space-y-4 font-mono text-xs sm:text-sm">
        {lines.map((line, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = (idx < activeIndex) || (activeIndex === 0 && idx === lines.length - 1);

          return (
            <motion.div
              key={line}
              animate={{
                opacity: isActive ? 1 : isPassed ? 0.45 : 0.22,
                x: isActive ? 8 : 0,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-500 ${
                isActive
                  ? 'bg-slate-800/80 border border-brand-cyan/40 shadow-[0_0_20px_rgba(114,208,227,0.2)]'
                  : 'border border-transparent'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {isActive ? (
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-glow-cyan" />
                ) : (
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-700" />
                )}
              </div>

              <div className="flex-1">
                <span
                  className={`transition-colors duration-500 ${
                    isActive
                      ? 'text-brand-cyan font-bold drop-shadow-[0_0_8px_rgba(114,208,227,0.4)]'
                      : 'text-slate-400'
                  }`}
                >
                  {line}
                </span>
              </div>

              {isActive && (
                <Sparkles className="w-4 h-4 text-brand-cyan shrink-0 animate-pulse" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom status bar */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="text-brand-cyan/90 font-medium">STATUS: ACTIVE & STREAMING</span>
        <span>0{activeIndex + 1} / 0{lines.length}</span>
      </div>
    </div>
  );
};

