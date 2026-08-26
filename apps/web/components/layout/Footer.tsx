'use client';

import Link from 'next/link';

export default function Footer() {
  const headingStyle = { fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '12px', color: 'rgba(0, 0, 0, 0.5)' };
  const linkStyle = { fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '14px', color: 'rgba(0, 0, 0, 0.6)' };

  return (
    <footer className="relative bg-white py-16 px-6 md:px-16">
      <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[0.25px] bg-black/10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <img
            src="/fonts/images/logo/White Transparent.webp"
            alt="Yaks & Nomads"
            className="h-26 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
          <p className="text-black/60 leading-relaxed"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', fontSize: '12px' }}>
            Yaks & Nomads @ 2026 <br />
            Photos and Videos Department of Tourism, Bhutan
          </p>
        </div>

        <div className="space-y-3">
          <p style={headingStyle}>Company</p>
          <ul className="space-y-2">
            <li><Link href="/" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">Home</Link></li>
            <li><Link href="/about" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">About Us</Link></li>
            <li><Link href="/faq" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">FAQ</Link></li>
            <li><Link href="/contact" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy-policy" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/booking-terms" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">Booking Terms and Conditions</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <p style={headingStyle}>Socials</p>
          <ul className="space-y-2">
            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">TikTok</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">Youtube</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">Instagram</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <p style={headingStyle}>Contacts</p>
          <ul className="space-y-2">
            <li><a href="tel:+97517000000" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">(+975) 17000000</a></li>
            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@yaksandnomads.com" target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:text-[#8B5A52] transition-colors">hello@yaksandnomads.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}