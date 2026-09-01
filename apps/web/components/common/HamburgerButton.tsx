'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  scrolled?: boolean;
}

export default function HamburgerButton({ isOpen, onClick, scrolled = false }: HamburgerButtonProps) {
  const [slideLeft, setSlideLeft] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSlideLeft(true);
    } else {
      const timer = setTimeout(() => setSlideLeft(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClick = () => {
    setSlideLeft(true);
    setTimeout(() => onClick(), 200);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`p-2 shrink-0 transition-colors duration-300 hover:opacity-70 active:scale-95 ${
        scrolled ? 'text-[#5B3231]' : 'text-[#1C1B1F]'
      }`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-drawer"
      animate={{ x: slideLeft ? -72 : 0 }}
      transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
    >
      <svg
        className="w-6 h-6 md:w-7 md:h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <motion.line
          x1="4"
          y1="6"
          x2="20"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? { x1: 5, y1: 7, x2: 19, y2: 19 } : { x1: 4, y1: 6, x2: 20, y2: 6 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        />
        <motion.line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        />
        <motion.line
          x1="4"
          y1="18"
          x2="20"
          y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? { x1: 5, y1: 19, x2: 19, y2: 7 } : { x1: 4, y1: 18, x2: 20, y2: 18 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        />
      </svg>
    </motion.button>
  );
}
