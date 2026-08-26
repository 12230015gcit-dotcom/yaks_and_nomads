'use client';

import React from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  scrolled?: boolean;
}

export default function HamburgerButton({ isOpen, onClick, scrolled = false }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 shrink-0 transition-colors duration-300 hover:opacity-70 active:scale-95 ${
        scrolled ? 'text-[#5B3231]' : 'text-[#1C1B1F]'
      }`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="mobile-drawer"
    >
      <svg
        className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* Top line - rotates to form X */}
        <path
          className={`transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16"
        />
        {/* Middle line - fades out */}
        <path
          className={`transition-all duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 12h16"
        />
        {/* Bottom line - rotates to form X */}
        <path
          className={`transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 18h16"
        />
      </svg>
    </button>
  );
}