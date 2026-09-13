"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

function AnimatedCloseButton({ isOpen }: { isOpen: boolean }) {
  return (
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
        animate={
          isOpen
            ? { x1: 6, y1: 6, x2: 18, y2: 18 }
            : { x1: 4, y1: 6, x2: 20, y2: 6 }
        }
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
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
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        animate={
          isOpen
            ? { x1: 18, y1: 6, x2: 6, y2: 18 }
            : { x1: 4, y1: 18, x2: 20, y2: 18 }
        }
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      />
    </svg>
  );
}

export default function NavigationDrawer({
  isOpen,
  onClose,
}: NavigationDrawerProps) {
  const [present, setPresent] = useState(false);
  const [shown, setShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setPresent(true);
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShown(true)),
      );
      return () => cancelAnimationFrame(raf);
    }
    document.body.style.overflow = "";
    setShown(false);
    const timer = setTimeout(() => setPresent(false), 800);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!present) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [present, onClose]);

  if (!present) return null;

  const overlay = (
    <div
      className={`fixed inset-0 z-[100] flex min-h-screen transition-opacity duration-800 ease-out motion-reduce:transition-none ${
        shown ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div className="fixed top-2 left-0 right-0 z-[110] flex items-center py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-[40px] pointer-events-none">
        <button
          onClick={onClose}
          className="p-2 pointer-events-auto text-[#5B3231] hover:opacity-70 transition-colors"
          aria-label="Close menu"
        >
          <AnimatedCloseButton isOpen={shown} />
        </button>
      </div>
      <div
        className={`relative z-[101] w-[85vw] max-w-sm bg-[#fcfbfa] h-full shadow-2xl transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          shown ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 flex flex-col px-10 md:px-14"
          style={{ paddingTop: "200px" }}
        >
          <Link
            href="/"
            onClick={onClose}
            className={`inline-block w-fit text-[22px] tracking-wide text-[#5B3231] font-medium transition-[opacity,transform,color] duration-500 ease-out delay-100 motion-reduce:transition-none ${
              shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
          >
            Yaks &amp; Nomads
          </Link>

          <nav
            className="flex flex-col space-y-[18px] mt-9 text-[18px] text-[#9a9a9a]"
            style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
          >
            {NAV_LINKS.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  style={{
                    transitionDelay: shown ? `${200 + index * 70}ms` : "0ms",
                  }}
                  className={`inline-block w-fit hover:text-[#8B5A52] transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                    active ? "text-[#5B3231] font-semibold" : "text-[#9a9a9a]"
                  } ${
                    shown
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return overlay;
  return createPortal(overlay, document.body);
}
