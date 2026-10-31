'use client';

import React from 'react';
import { motion } from 'framer-motion';

type RevealEffect = 'fade-up' | 'scale-in' | 'slide-left' | 'slide-right' | 'clip-up';

interface RevealProps {
  children: React.ReactNode;
  effect?: RevealEffect;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  effect = 'fade-up',
  delay = 0,
  duration = 0.65,
  className = '',
  once = true,
}) => {
  const getVariants = () => {
    switch (effect) {
      case 'scale-in':
        return {
          hidden: { opacity: 0, scale: 0.96 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -45 },
          visible: { opacity: 1, x: 0 },
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 45 },
          visible: { opacity: 1, x: 0 },
        };
      case 'clip-up':
        return {
          hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          visible: { opacity: 1, clipPath: 'inset(0% 0 0 0)' },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-20px' }}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
