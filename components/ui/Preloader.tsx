'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 450);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 10);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle background ambient mesh */}
          <div className="absolute inset-0 bg-mesh-hero opacity-70 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Logo container with gradient sheen */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-64 sm:w-80 h-24 mb-6 flex items-center justify-center"
            >
              <Image
                src="/logo/altruisty-logo.png"
                alt="Altruisty Innovation Pvt Ltd"
                width={320}
                height={100}
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Gradient Loading Bar */}
            <div className="w-56 sm:w-64 h-1.5 bg-brand-sky/80 rounded-full overflow-hidden p-0.5 border border-brand-cyan/20">
              <motion.div
                className="h-full bg-brand-gradient rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-mid">
              <span>Innovate</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span>Build</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-deep" />
              <span>Transform</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

