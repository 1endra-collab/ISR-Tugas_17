// AnimatedBackground.js - Ambient motion background with SVG geometry
// Use Anime.js for subtle decorative animations
'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

// Detect prefers-reduced-motion for accessibility
function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * AnimatedBackground - Ambient motion background with SVG geometry
 * Use Anime.js for subtle decorative animations
 */
export default function AnimatedBackground() {
  const svgRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (prefersReducedMotion()) return;

    // Ambient floating shapes animation
    ctxRef.current = anime({
      targets: '.bg-geometry path',
      translateX: [
        { value: 50, easing: 'easeInOutSine', duration: 2000 },
        { value: -50, easing: 'easeInOutSine', duration: 2000 },
      ],
      translateY: [
        { value: 30, easing: 'easeInOutSine', duration: 2500 },
        { value: -30, easing: 'easeInOutSine', duration: 2500 },
      ],
      rotate: [
        { value: 15, easing: 'easeInOutSine', duration: 3000 },
        { value: -15, easing: 'easeInOutSine', duration: 3000 },
      ],
      direction: 'alternate',
      loop: true,
      delay: anime.stagger(200),
    });

    return () => ctxRef.current.pause();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="bg-geometry"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.15,
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M0 50 Q 25 20 50 50 T 100 50" fill="none" stroke="#ff8c3c" strokeWidth="0.5" />
      <circle cx="20" cy="30" r="5" fill="#ff8c3c" />
      <circle cx="80" cy="70" r="8" fill="#ff8c3c" />
      <circle cx="50" cy="85" r="3" fill="#ff8c3c" />
    </svg>
  );
}
