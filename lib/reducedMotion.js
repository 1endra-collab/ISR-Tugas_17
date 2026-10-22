// Detect prefers-reduced-motion for accessibility
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Global GSAP setup with reduced-motion support
let gsapReady = false;
export function initGSAP() {
  if (gsapReady || prefersReducedMotion()) return;
  
  // GSAP imports handled in components to avoid SSR issues
  gsapReady = true;
}

// Anime.js setup
let animeReady = false;
export function initAnime() {
  if (animeReady || prefersReducedMotion()) return;
  animeReady = true;
}
