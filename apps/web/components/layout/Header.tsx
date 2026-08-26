"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import NavigationDrawer from "@/components/common/NavigationDrawer";
// Import Next.js Image component
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 sm:gap-3 transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        } py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8`}
      >
        <button
          className={`p-2 shrink-0 transition-colors duration-300 hover:opacity-70 active:scale-95 ${
            scrolled ? "text-[#5B3231]" : "text-[#1C1B1F]"
          }`}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        <a
          href="/"
          aria-label="Yaks & Nomads home"
          className="relative flex-1 min-w-0 flex items-center justify-center h-9 sm:h-11 md:h-14"
        >
          {/* Replaced <img> with Next.js <Image /> */}
          <Image
            src="/fonts/images/logo/logo1.webp"
            alt="Yaks & Nomads"
            width={300} // Add reasonable base dimensions
            height={100} // Next.js requires width/height for layout calculation
            priority // Forces the logo to load instantly without lazy-load delays
            className={`h-full w-auto max-w-[30vw] sm:max-w-none object-contain transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
              scrolled ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          />
          <span
            className={`absolute inset-0 flex items-center justify-center whitespace-nowrap text-[clamp(18px,5.5vw,21px)] md:text-[22px] tracking-widest font-semibold text-[#5B3231] transition-[opacity,transform] duration-500 motion-reduce:transition-none ${
              scrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
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
