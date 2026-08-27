import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "../styles/globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Yaks & Nomads | Bhutan Travel Reimagined",
  description:
    "Private Bhutan travel experiences. Step into the Kingdom of Happiness with Yaks & Nomads.",
  icons: {
    icon: "/fonts/images/logo/logo_favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable}`} suppressHydrationWarning>
      <head>
        {[
          "/fonts/images/landingHero1.webp",
          "/fonts/images/landingHero2.webp",
          "/fonts/images/LandingHero3.webp",
          "/fonts/images/AdventuresAwaits1.webp",
          "/fonts/images/AdventuresAwaits2.webp",
          "/fonts/images/AdventuresAwaits3.webp",
          "/fonts/images/adventure_awaitsbg.webp",
          "/fonts/images/logo/dorji.webp",
          "/fonts/images/GameofArchery.webp",
          "/fonts/images/monastry.webp",
          "/fonts/images/stamps.webp",
          "/fonts/images/Astrology.webp",
          "/fonts/images/Ema.webp",
          "/fonts/images/Yoga.webp",
          "/fonts/images/stoneBath.webp",
          "/fonts/images/village.webp",
          "/fonts/images/landingRoyalhighlandfestivalsection.webp",
          "/fonts/images/Thimphu.webp",
          "/fonts/images/ParoDzong.webp",
          "/fonts/images/Hiking.webp",
          "/fonts/images/Trek.webp",
          "/fonts/images/logo/logo_only.webp",
          "/fonts/images/RedPanda.webp",
          "/fonts/images/clay%20pot.webp",
          "/fonts/images/person/Lisa G.webp",
          "/fonts/images/person/Pamela W.webp",
          "/fonts/images/person/Susumu T.webp",
          "/fonts/images/person/Linda C.webp",
          "/fonts/images/ChatGPT Image May 5, 2026, 05_19_17 PM.webp",
        ].map((src) => (
          <link key={src} rel="preload" href={src} as="image" />
        ))}
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}



