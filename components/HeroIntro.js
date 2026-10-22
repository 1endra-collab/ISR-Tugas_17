// HeroIntro.js - Cinematic page entrance animation
// Use GSAP for smooth, high-performance entrance animations
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Detect prefers-reduced-motion for accessibility
function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * HeroIntro - Cinematic page entrance animation
 * First impression with layered reveal and smooth typography
 */
export default function HeroIntro({ children }) {
  const containerRef = useRef(null);
  const ctx = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (prefersReducedMotion()) return;

    // Ensure GSAP is registered
    if (!window.gsapReady) {
      gsap.registerPlugin();
      window.gsapReady = true;
    }

    const ctxVal = gsap.context(() => {
      // Hide all elements initially
      gsap.set('.hero-layer', { opacity: 0, y: 50 });
      
      // Sequence: background first, then content
      gsap.to('.hero-bg', {
        opacity: 1,
        duration: 1.5,
        ease: 'power4.inOut',
      });

      // Staggered text reveal
      gsap.to('.hero-text', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.3,
      });

      // Subtle floating effect for hero elements
      gsap.to('.hero-float', {
        y: [-10, 10, -10],
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    }, containerRef);

    ctx.current = ctxVal;

    return () => ctx.current.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-intro"
      style={{ overflow: 'hidden' }}
    >
      {children}
    </div>
  );
}
