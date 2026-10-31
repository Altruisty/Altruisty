'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  stagger?: number;
  delay?: number;
  by?: 'word' | 'char' | 'line';
  once?: boolean;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  as = 'div',
  className = '',
  stagger = 0.025,
  delay = 0,
  by = 'word',
  once = true,
  highlightWords = [],
  highlightClassName = 'text-gradient font-bold',
}) => {
  let units: string[] = [];
  if (by === 'char') {
    units = Array.from(text);
  } else if (by === 'line') {
    units = text.split('\n');
  } else {
    units = text.split(/(\s+)/);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  // High-performance smooth reveal without GPU-stalling blur filter
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionComponent = motion[as] as React.ComponentType<HTMLMotionProps<any>>;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-20px' }}
      variants={containerVariants}
      className={className}
    >
      {units.map((unit, index) => {
        if (/^\s+$/.test(unit)) {
          return <span key={index}>{unit}</span>;
        }

        const cleanUnit = unit.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanUnit || unit.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <motion.span
            key={index}
            variants={itemVariants}
            className={`inline-block ${
              isHighlighted ? highlightClassName : ''
            }`}
          >
            {unit}
          </motion.span>
        );
      })}
    </MotionComponent>
  );
};
