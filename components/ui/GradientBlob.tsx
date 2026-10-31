'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientBlobProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'deep' | 'mid' | 'cyan' | 'mixed';
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  className = '',
  size = 'md',
  variant = 'mixed',
}) => {
  const sizeMap = {
    sm: 'w-64 h-64 blur-2xl',
    md: 'w-96 h-96 blur-3xl',
    lg: 'w-[32rem] h-[32rem] blur-[80px]',
    xl: 'w-[42rem] h-[42rem] blur-[100px]',
  };

  const gradientMap = {
    deep: 'from-brand-deep/15 to-transparent',
    mid: 'from-brand-mid/20 to-transparent',
    cyan: 'from-brand-cyan/25 to-brand-mid/10',
    mixed: 'from-brand-cyan/20 via-brand-mid/15 to-brand-deep/10',
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.12, 0.95, 1],
        x: [0, 25, -20, 0],
        y: [0, -30, 20, 0],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none absolute rounded-full bg-gradient-to-tr ${gradientMap[variant]} ${sizeMap[size]} ${className}`}
    />
  );
};

