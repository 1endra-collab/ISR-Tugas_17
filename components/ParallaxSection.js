'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxSection - Creates a parallax effect on scroll
 * Use GSAP ScrollTrigger for scroll-based storytelling
 */
export default function ParallaxSection({ children, speed = 0.3, className = '' }) {
  const ref = useRef(null);
  const ctx = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const { prefersReducedMotion } = require('@/lib/reducedMotion');
    if (prefersReducedMotion()) return;

    ctx.current = gsap.to(ref.current, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => ctx.current?.scrollTrigger?.kill();
  }, [speed]);

  return (
    <section ref={ref} className={`parallax-section ${className}`}>
      {children}
    </section>
  );
}
