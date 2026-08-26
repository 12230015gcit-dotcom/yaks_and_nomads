'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
];

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const [present, setPresent] = useState(false);
  const [shown, setShown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setPresent(true);
      document.body.style.overflow = 'hidden';
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShown(true))
      );
      return () => cancelAnimationFrame(raf);
    }
    document.body.style.overflow = '';
    setShown(false);
    const timer = setTimeout(() => setPresent(false), 800);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!present) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [present, onClose]);

      if (!present) return null;

  const overlay = (
    <div
      className={`fixed inset-0 z-[100] flex min-h-screen transition-opacity duration-800 ease-out motion-reduce:transition-none ${
        shown ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`relative z-[101] w-[85vw] max-w-sm bg-[#fcfbfa] h-full shadow-2xl transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          shown ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="fixed top-3 sm:top-4 md:top-5 left-4 sm:left-6 md:left-8 z-20 p-3 text-[#8B5A52] hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="Close menu"
        >
          <X className="w-8 h-8 stroke-[1.25]" />
        </button>

        <div className="absolute inset-0 flex flex-col px-10 md:px-14" style={{ paddingTop: '188px' }}>
          <Link
            href="/"
            onClick={onClose}
            className={`inline-block w-fit text-[22px] tracking-wide text-[#5B3231] font-medium transition-[opacity,transform,color] duration-500 ease-out delay-100 motion-reduce:transition-none ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}
          >
            Yaks &amp; Nomads
          </Link>

          <nav className="flex flex-col space-y-[18px] mt-9 text-[18px] text-[#9a9a9a]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
            {NAV_LINKS.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  style={{ transitionDelay: shown ? `${200 + index * 70}ms` : '0ms' }}
                  className={`inline-block w-fit hover:text-[#8B5A52] transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                    active ? 'text-[#5B3231] font-semibold' : 'text-[#9a9a9a]'
                  } ${
                    shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
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

  if (typeof document === 'undefined') return overlay;
  return createPortal(overlay, document.body);
}



