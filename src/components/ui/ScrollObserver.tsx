'use client';

import React, { useEffect } from 'react';

export const ScrollObserver: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const selector =
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .tp_reveal_anim, .title-anim, .img-custom-anim-left, .img-custom-anim-right, .service-items, .case-study-box-items-2, .about-items';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in initial view, reveal it promptly
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('is-revealed');
        }
        observer.observe(el);
      });
    };

    observeAll();

    // Re-check on load and resize
    window.addEventListener('resize', observeAll, { passive: true });

    return () => {
      window.removeEventListener('resize', observeAll);
      observer.disconnect();
    };
  }, []);

  return null;
};
