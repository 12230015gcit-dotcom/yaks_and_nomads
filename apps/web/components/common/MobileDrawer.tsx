'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/booking-terms', label: 'Booking Terms' },
];

export default function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
      aria-hidden="true"
      onClick={onClose}
    />
  );

  const drawer = (
    <div
      ref={drawerRef}
      className="fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform translate-x-0"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <Link
            href="/"
            onClick={onClose}
            className="text-[22px] tracking-wide text-[#5B3231] font-semibold"
            style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}
            aria-label="Yaks & Nomads - Home"
          >
            Yaks & Nomads
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5A52]"
            aria-label="Close menu"
            aria-expanded="true"
          >
            <svg
              className="w-6 h-6 text-[#5B3231]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
          <ul className="space-y-3" role="list">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg text-[18px] font-medium transition-colors ${
                      active
                        ? 'bg-[#8B5A52]/10 text-[#8B5A52] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#8B5A52]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">
            Yaks & Nomads @ 2026
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(
    <div className="fixed inset-0 z-40">
      {overlay}
      {drawer}
    </div>,
    document.body
  );
}