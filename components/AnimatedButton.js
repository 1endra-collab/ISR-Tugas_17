// AnimatedButton.js - Premium button with hover/press interactions
// Use Motion for UI micro-interactions
'use client';

import { motion } from 'framer-motion';
import { useCallback, memo } from 'react';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255, 140, 60, 0.4)' },
  active: { scale: 0.95, boxShadow: '0 4px 10px -3px rgba(255, 140, 60, 0.3)' },
};

const buttonTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
  mass: 0.6,
};

export function AnimatedButton({
  children,
  className = '',
  onClick,
  ...props
}) {
  const handleClick = useCallback((e) => {
    onClick?.(e);
  }, [onClick]);

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="active"
      transition={buttonTransition}
      onClick={handleClick}
      className={`btn-primary ${className}`}
      style={{
        padding: '12px 24px',
        border: 'none',
        borderRadius: '12px',
        backgroundColor: '#ff8c3c',
        color: 'white',
        fontWeight: '600',
        cursor: 'pointer',
        outline: 'none',
        overflow: 'hidden',
        position: 'relative',
      }}
      {...props}
    >
      <span
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        {children}
      </span>
      <motion.div
        className="btn-ripple"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 0.4, 0], scale: [0, 1.5, 2] }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200%',
          height: '200%',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          zIndex: 1,
        }}
      />
    </motion.button>
  );
}
