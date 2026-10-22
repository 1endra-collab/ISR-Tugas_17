// AnimatedReveal.js - GSAP-based entrance animations
// Use GSAP for smooth, high-performance entrance animations
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function AnimatedReveal({ children, delay = 0, duration = 0.8, className = '' }) {
  const ref = useRef(null);
  const ctx = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion()) return;

    ctx.current?.kill();
    
    ctx.current = gsap.to(ref.current, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      overwrite: true,
    });

    return () => ctx.current?.kill();
  }, [delay, duration]);

  return (
    <div
      ref={ref}
      className={`animated-reveal ${className}`}
      style={{ opacity: 0, transform: 'translateY(30px)' }}
    >
      {children}
    </div>
  );
}
