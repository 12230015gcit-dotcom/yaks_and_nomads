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
      <body className="font-sans">{children}</body>
    </html>
  );
}



