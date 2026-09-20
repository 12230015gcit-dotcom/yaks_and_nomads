"use client";

import Link from "next/link";

export default function Footer() {
  const headingStyle = {
    fontFamily: "var(--font-merriweather), Georgia, serif",
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
  };

  const linkStyle = {
    fontFamily: "var(--font-merriweather), Georgia, serif",
    fontSize: "12px",
  };

  return (
    <footer className="relative bg-white py-16 px-6 md:pl-[50px] md:pr-6 lg:pr-[30px] xl:pr-[50px]">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-[0.25px] bg-black/10"
      />

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-20 gap-y-10 lg:gap-x-24">
        <div className="space-y-4">
          <Link href="/">
            <img
              src="/fonts/images/logo/Logo_Small.webp"
              alt="Yaks & Nomads"
              className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <p
            className="text-black/60 leading-relaxed mt-6"
            style={{
              fontFamily: "var(--font-merriweather), Georgia, serif",
              fontSize: "10px",
            }}
          >
            Yaks & Nomads @ 2026 <br />
            Few Photos and Videos Department of Tourism, Bhutan
          </p>
        </div>

        <div className="space-y-3">
          <p style={headingStyle}>COMPANY</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/booking-terms"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Booking Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p style={headingStyle}>SOCIALS</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Tiktok
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p style={headingStyle}>CONTACTS</p>
          <ul className="space-y-2">
            <li>
              <a
                href="tel:+97517000000"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                (+975) 17000000
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@yaksandnomads.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                className="text-black/60 hover:text-[#5B3231] transition-colors"
              >
                hello@yaksandnomads.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
