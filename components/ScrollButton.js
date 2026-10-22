// ScrollButton.js - Client component wrapper for scroll interaction
'use client';

import { useCallback } from 'react';
import { AnimatedButton } from './AnimatedButton';

export function ScrollButton({ targetId, children }) {
  const handleClick = useCallback(() => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, [targetId]);

  return <AnimatedButton onClick={handleClick}>{children}</AnimatedButton>;
}
