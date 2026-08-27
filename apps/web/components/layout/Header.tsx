'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import NavigationDrawer from '@/components/common/NavigationDrawer';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Base header - always visible, transparent */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 sm:gap-3 py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-[130px] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? '-translate-y-full pointer-events-none' : 'translate-y-0'
        }`}
        style={{ transitionProperty: 'translate' }}
      >
        <button
          className="p-2 shrink-0 text-[#1C1B1F] hover:opacity-70 active:scale-95 transition-colors duration-300"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <a href="/" aria-label="Yaks & Nomads home" className="relative flex-1 min-w-0 flex items-center justify-center h-9 sm:h-11 md:h-14">
          <img
            src="/fonts/images/logo/header.webp"
            alt="Yaks & Nomads"
            className="h-full w-auto max-w-[30vw] sm:max-w-none object-contain"
          />
        </a>

        <a
          href="/contact"
          className="shrink-0 whitespace-nowrap flex items-center justify-center tracking-widest rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-[16px] px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 font-[--font-seasons]"
        >
          Enquire Now
        </a>
      </header>

      {/* Scrolled header - slides down from top */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 sm:gap-3 bg-white shadow-sm py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-[130px] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ transitionProperty: 'translate' }}
      >
        <button
          className="p-2 shrink-0 text-[#5B3231] hover:opacity-70 active:scale-95 transition-colors duration-300"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <a href="/" aria-label="Yaks & Nomads home" className="relative flex-1 min-w-0 flex items-center justify-center h-9 sm:h-11 md:h-14">
          <span
            className="whitespace-nowrap text-[clamp(18px,5.5vw,21px)] md:text-[22px] tracking-widest font-semibold text-[#5B3231]"
            style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}
          >
            Yaks & Nomads
          </span>
        </a>

        <a
          href="/contact"
          className="shrink-0 whitespace-nowrap flex items-center justify-center tracking-widest rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-[16px] px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 font-[--font-seasons]"
        >
          Enquire Now
        </a>
      </header>

      <NavigationDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
