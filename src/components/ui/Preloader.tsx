'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const Preloader: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Start opening shutter after 1.2s
    const loadTimer = setTimeout(() => {
      setLoaded(true);
    }, 1200);

    // Remove from DOM after transition completes (2.0s)
    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 2100);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div id="preloader" className={`preloader ${loaded ? 'loaded' : ''}`}>
      <div className="animation-preloader">
        {/* Official Altruisty Innovation Logo */}
        <div className="mb-6 relative w-48 sm:w-56 h-12">
          <Image
            src="/logo.png"
            alt="Altruisty Innovation"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Circular Spinner */}
        <div className="spinner"></div>

        {/* 3D Flip Letters: A L T R U I S T Y */}
        <div className="txt-loading">
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="L" className="letters-loading">
            L
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="R" className="letters-loading">
            R
          </span>
          <span data-text-preloader="U" className="letters-loading">
            U
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="S" className="letters-loading">
            S
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="Y" className="letters-loading">
            Y
          </span>
        </div>

        <p className="text-center font-medium">INNOVATION &bull; LOADING</p>
      </div>

      {/* 4 Shutter Panels Parting from Center */}
      <div className="loader">
        <div className="row">
          <div className="loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

