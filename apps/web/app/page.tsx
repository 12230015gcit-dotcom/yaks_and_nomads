"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Minus,
  X,
  Quote,
  Clock,
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  useCarouselAPI,
} from "@/components/core/carousel";
import FadeIn from "@/components/common/FadeIn";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PRELOAD_IMAGES = [
  "/fonts/images/RedPanda.webp",
  "/fonts/images/clay%20pot.webp",
  "/fonts/images/GameofArchery.webp",
  "/fonts/images/monastry.webp",
  "/fonts/images/stamps.webp",
  "/fonts/images/Astrology.webp",
  "/fonts/images/Ema.webp",
  "/fonts/images/Yoga.webp",
  "/fonts/images/stoneBath.webp",
  "/fonts/images/village.webp",
];

function preloadImages(srcs: string[]) {
  srcs.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}

// --- Section 1: Hero ---
const HERO_TAGLINES = [
  {
    image: "/fonts/images/landingHero1.webp",
    line1: "Bhutan Travel: Step Into the",
    line2: " Kingdom of Happiness.",
  },
  {
    image: "/fonts/images/landingHero2.webp",
    line1: "Your Once-in-a-Lifetime Bhutan ",
    line2: "Journey,100% Tailored to You.",
  },
  {
    image: "/fonts/images/LandingHero3.webp",
    line1: "Travel Slowly. Connect Deeply.",
    line2: "Experience Bhutan. Take Memories Home.",
  },
];

function BhutanClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dayName = now
    ? new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Thimphu",
        weekday: "long",
      }).format(now)
    : "";

  const time = now
    ? new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Thimphu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)
    : "";

  const date = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Thimphu",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(now)
    : "";

  return (
    <div
      className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 px-4 text-white/90 text-xs sm:text-sm lg:text-[16px] uppercase"
      style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
    >
      <Clock className="w-4 h-4 lg:w-[17px] lg:h-[17px]" />
      {now
        ? `${time} (BHUTAN TIME) ${dayName} ${date}`
        : "00:00:00 (BHUTAN TIME) MONDAY 00/00/0000"}
    </div>
  );
}

function HeroSection() {
  const [tagline, setTagline] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const taglineRef = useRef(0);

  useEffect(() => {
    taglineRef.current = tagline;
  }, [tagline]);

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(taglineRef.current);
      setTagline((t) => (t + 1) % HERO_TAGLINES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (prev === null) return;
    const id = setTimeout(() => setPrev(null), 1500);
    return () => clearTimeout(id);
  }, [prev]);

  const h1Classes =
    "tracking-wide leading-tight text-3xl sm:text-5xl lg:text-[52px]";

  return (
    <section className="relative min-h-screen bg-slate-900 flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden">
      {/* Auto-changing Backgrounds - Ease Out transition */}
      {HERO_TAGLINES.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
            i === tagline ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition:
                i === 0 ? "center calc(50% - 60px)" : undefined,
              animation:
                i === tagline ? "ken-burns 8s ease-out forwards" : "none",
            }}
          />
        </div>
      ))}

      <FadeIn className="relative z-10 max-w-5xl mx-auto">
        <div className="relative">
          {prev !== null && (
            <h1
              aria-hidden
              className={`${h1Classes} animate-tagline-out pointer-events-none select-none absolute inset-x-0 top-0`}
              style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
            >
              {HERO_TAGLINES[prev].line1}
              <br />
              <span className="block mt-2 lg:whitespace-nowrap">
                {HERO_TAGLINES[prev].line2}
              </span>
            </h1>
          )}
          <h1
            key={tagline}
            className={`${h1Classes} animate-tagline-in`}
            style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
          >
            {HERO_TAGLINES[tagline].line1}
            <br />
            <span className="block mt-2 lg:whitespace-nowrap">
              {HERO_TAGLINES[tagline].line2}
            </span>
          </h1>
        </div>

        <BhutanClock />
      </FadeIn>
    </section>
  );
}

// --- Section 2: Adventure Awaits ---
const ABOUT_SLIDES = [
  { image: "/fonts/images/AdventuresAwaits1.webp", alt: "Bhutan landscape" },
  { image: "/fonts/images/AdventuresAwaits2.webp", alt: "Bhutan landscape" },
  { image: "/fonts/images/AdventuresAwaits3.webp", alt: "Bhutan landscape" },
];

function AdventureCarousel() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const count = ABOUT_SLIDES.length;
  const scrollAnimRef = useRef(0);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const animateTo = (frame: HTMLDivElement, targetLeft: number) => {
    cancelAnimationFrame(scrollAnimRef.current);
    if (reduced) {
      frame.scrollTo({ left: targetLeft, behavior: "instant" });
      return;
    }
    const startLeft = frame.scrollLeft;
    const delta = targetLeft - startLeft;
    const duration = 2500;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    frame.style.scrollSnapType = "none";
    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      frame.scrollLeft = startLeft + delta * easeOut(t);
      if (t < 1) {
        scrollAnimRef.current = requestAnimationFrame(step);
      } else {
        frame.style.scrollSnapType = "";
      }
    };
    scrollAnimRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const id = setInterval(() => {
      const next = (index + 1) % count;
      animateTo(frame, next * frame.clientWidth);
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, [index, count, reduced]);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const onScroll = () => {
      const i = Math.round(frame.scrollLeft / frame.clientWidth);
      if (i !== index) setIndex(((i % count) + count) % count);
    };
    frame.addEventListener("scroll", onScroll, { passive: true });
    return () => frame.removeEventListener("scroll", onScroll);
  }, [index, count]);

  const goTo = (i: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const target = ((i % count) + count) % count;
    setIndex(target);
    animateTo(frame, target * frame.clientWidth);
  };

  return (
    <div className="relative">
      <div
        ref={frameRef}
        className="aspect-4/3 overflow-x-auto snap-x snap-mandatory bg-slate-200 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex h-full">
          {ABOUT_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="h-full w-full shrink-0 snap-start overflow-hidden"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
                style={
                  idx === index && !reduced
                    ? { animation: "carousel-zoom 3s ease-out forwards" }
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2 pr-2">
        {ABOUT_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === index ? "bg-[#8B5A52]" : "bg-transparent border border-[#5B3231]"}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- Section: Intro Statement ---
function IntroStatementSection() {
  return (
    <FadeIn>
      <section className="bg-white py-16 md:py-20 px-6 sm:px-8 md:px-[50px] text-[#5B3231]">
        <p
          className="max-w-3xl mx-auto text-center leading-relaxed text-[#000000]/90"
          style={{
            fontFamily: "var(--font-merriweather), Georgia, serif",
            fontSize: "21px",
            fontWeight: "200",
          }}
        >
          We are a boutique, government-registered travel company based in
          Bhutan, dedicated to crafting authentic and personalized journeys. We
          curate immersive experiences that take you far beyond the usual
          tourist trails.
        </p>
      </section>
    </FadeIn>
  );
}

function AboutSection() {
  return (
    <FadeIn>
      <section className="relative pt-30 pb-30 md:pb-75 pl-4 sm:pl-6 md:pl-[50px] pr-4 sm:pr-6 md:pr-[0px] text-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 will-change-transform"
          style={{
            backgroundImage: "url('/fonts/images/adventure_awaitsbg.webp')",
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-sky-100/30 via-sky-50/20 to-blue-100/30" />
        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
            <FadeIn className="space-y-4 text-black/70 font-serif leading-relaxed text-[16px]">
              <div
                style={{
                  fontFamily: "var(--font-merriweather), Georgia, serif",
                }}
              >
                <span
                  className="block w-fit text-[21px] uppercase tracking-widest text-[#5B3231]/80 font-semibold"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  Adventure Awaits
                </span>
                <h2
                  className="font-serif text-[36px] text-black/80 leading-tight pt-2 tracking-wide"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  Travel to Bhutan.
                  <br />
                  Return Rewritten.
                </h2>

                <p className="leading-normal pt-[26px] pr-0 md:pr-30">
                  Here, travel is more than simply visiting a destination—it is
                  an immersion into a different way of being. In this majestic
                  Himalayan Kingdom, wealth isn't measured in material
                  possessions, but in the quality of life itself.
                  <br />
                  <br />
                  As a proudly carbon-negative nation, Bhutan has fiercely
                  guarded its pristine forests and ecosystems for generations.
                  Here, the pioneering philosophy of Gross National Happiness
                  ensures that progress never comes at the cost of well-being or
                  sustainability.
                  <br />
                  <br />
                  Beyond the fresh mountain air and dramatic landscapes lies a
                  deeply rooted cultural heritage waiting to be discovered.
                  <br />
                  <br />
                  Yaks & Nomads invites you to experience Bhutan travel. Come
                  see the world differently, and find a deeper kind of
                  happiness.
                </p>

                <div className="pt-[26px]">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center tracking-widest rounded-one border border-[#5B3231]  text-[#5B3231] text-[16px] px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95"
                    style={{
                      fontFamily: "var(--font-merriweather), Georgia, serif",
                    }}
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Image collage, replaces AdventureCarousel — hidden on phones, visible from tablet (md) up */}
            <FadeIn delay={150} className="relative hidden md:block">
              <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
                {/* Large image, top-right */}
                <div className="absolute top-0 right-0 w-[99%] h-[100%] rounded-one overflow-hidden shadow-lg">
                  <img
                    src="/fonts/images/AdventuresAwaits1.webp"
                    alt="A peaceful river flows between green and yellow terraced fields, framed by lush mountains."
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Smaller image, bottom-left, overlapping and bleeding outward */}
                <div className="absolute bottom-[-30%] left-[-8%] sm:left-[-24%] w-[67%] h-[55%] rounded-one overflow-hidden shadow-xl">
                  <img
                    src="/fonts/images/aaron-santelices-WvZa770TvXo-unsplash.webp"
                    alt="A sacred Himalayan monastery set against dramatic mountain scenery above a forested valley."
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
// --- Section 3: Out-Of-The-Box Experiences ---
const EXPERIENCES = [
  {
    image: "/fonts/images/GameofArchery.webp",
    title: "A Game of Archery",
    description:
      "Try your hand at this traditional sport and experience the thrill of hitting the target.",
  },
  {
    image: "/fonts/images/monastry.webp",
    title: "Monastery Stay",
    description:
      "Step into the shoes of monks—join prayer sessions, sleep in their modest quarters, and share meals with them.",
  },
  {
    image: "/fonts/images/stamps.webp",
    title: "Make Your Own Stamps",
    description:
      "Imagine the joy of having your photo on a stamp and sending a postcard to your loved ones.",
  },
  {
    image: "/fonts/images/Astrology.webp",
    title: "Astrology Reading",
    description:
      "Consult a Buddhist astrologer for insights into your past life and guidance for your future.",
  },
  {
    image: "/fonts/images/Ema.webp",
    title: "Learn to Cook Ema Datshi",
    description:
      "Ema Datshi, a chili and cheese dish, is the national dish of the country. If prepared correctly, you will enjoy it.",
  },
  {
    image: "/fonts/images/Yoga.webp",
    title: "Yoga & Meditation",
    description:
      "Whether you are an intermediate or an avid practitioner, our trained yoga and meditation teacher will guide you.",
  },
  {
    image: "/fonts/images/stoneBath.webp",
    title: "Hot Stone Bath",
    description:
      "Pamper yourself with a traditional hot stone bath at the end of your day hike.",
  },
  {
    image: "/fonts/images/village.webp",
    title: "Village Stay",
    description:
      "Enjoy engaging conversations with your host, farm-to-table meals, warm hospitality, and much more.",
  },
];

function ExperienceDots() {
  const { selectedIndex, scrollTo } = useCarouselAPI();

  return (
    <div className="flex justify-center gap-2 pt-4">
      {EXPERIENCES.map((exp, i) => (
        <button
          key={exp.title}
          onClick={() => scrollTo(i)}
          aria-label={`Go to experience ${i + 1}`}
          aria-current={selectedIndex === i}
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
            selectedIndex === i
              ? "bg-[#8B5A52]"
              : "bg-transparent border border-[#5B3231]"
          }`}
        />
      ))}
    </div>
  );
}

function ExperiencesSection() {
  return (
    <FadeIn>
      <section className="py-32 pl-4 sm:pl-6 md:pl-[50px] pr-4 sm:pr-6 md:pr-[45px] bg-[#D9D9D9] overflow-hidden">
        <div>
          <Carousel
            opts={{ duration: 75, loop: true } as any}
            autoplay
            autoplayInterval={4000}
          >
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <FadeIn className="lg:col-span-4 min-w-0 space-y-4">
                <span
                  className="block w-fit text-[21px] uppercase tracking-widest text-[#5B3231]/80 font-semibold"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  Our Advantage
                </span>
                <h2
                  className="font-serif text-[36px] text-black/80 leading-tight"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  Out-Of-The-Box <br /> Activities.
                </h2>
                <p
                  className="text-[16px] text-black/70 font-serif leading-relaxed max-w-xs pt-[12px]"
                  style={{
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                  }}
                >
                  Go beyond conventional travel with private journeys that
                  immerse you in innovative, out-of-the-box experiences.
                  Discover hidden gems, connect with local communities, and
                  enjoy bespoke adventures tailored to your interests.
                </p>

                <CarouselNavigation
                  className="static gap-2 pt-[12px]"
                  classNameButton="relative overflow-hidden border border-[#8B5A52] bg-transparent text-[#8B5A52] *:relative *:z-10 *:stroke-[#8B5A52] before:absolute before:inset-0 before:rounded-full before:bg-[#8B5A52] before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition-[transform,opacity] before:duration-300 before:ease-out hover:*:stroke-[#D9D9D9]"
                  alwaysShow
                />
              </FadeIn>

              <FadeIn delay={150} className="lg:col-span-8 min-w-0">
                <CarouselContent className="-ml-2 -mr-2">
                  {EXPERIENCES.map((exp) => (
                    <CarouselItem
                      key={exp.title}
                      className="basis-full sm:basis-1/2 pr-4"
                    >
                      <a
                        href={`/contact?trip=${encodeURIComponent(exp.title)}`}
                        className="block bg-white shadow-sm overflow-hidden h-full group transition-[transform,box-shadow] duration-300 ease-out"
                      >
                        <div className="aspect-4/5 bg-slate-200 overflow-hidden">
                          <img
                            src={exp.image}
                            alt={exp.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>
                        <div className="p-6 md:p-8">
                          <h3
                            className="font-serif text-[18px] text-[#8B5A52] group-hover:text-[#5B3231] transition-colors"
                            style={{
                              fontFamily:
                                "var(--font-merriweather), Georgia, serif",
                            }}
                          >
                            {exp.title}
                          </h3>
                          <p
                            className="text-[16px] text-black mt-3 font-serif leading-relaxed"
                            style={{
                              fontFamily:
                                "var(--font-merriweather), Georgia, serif",
                            }}
                          >
                            {exp.description}
                          </p>
                        </div>
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </FadeIn>
            </div>
          </Carousel>
        </div>
      </section>
    </FadeIn>
  );
}

// --- Section 4: Featured Adventure / Festival ---
function FeaturedSection() {
  return (
    <FadeIn>
      <section className="relative py-20 md:py-28 pl-4 sm:pl-6 md:pl-[50px] pr-4 sm:pr-6 md:pr-[45px] text-white bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom will-change-transform"
          style={{
            backgroundImage: `url('/fonts/images/landingRoyalhighlandfestivalsection.webp')`,
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(102, 102, 102, 0) 100%)",
          }}
        />

        <FadeIn className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-5 lg:col-span-5">
              <span
                className="block w-fit text-[21px] uppercase tracking-widest text-[ #background: #FFFFFF]/80 font-semibold"
                style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
              >
                FEATURED ADVENTURE
              </span>
              <h2
                className="font-serif text-[36px] text-[#FFFFFF]/80 leading-tight"
                style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
              >
                The Royal Highland <br /> Festival
              </h2>
              <p
                className="text-[16px] text-[#FFFFFF]/70 font-serif leading-relaxed max-w-[400px] pt-[12px]"
                style={{
                  fontFamily: "var(--font-merriweather), Georgia, serif",
                }}
              >
                Held at 4,000 meters above sea level, the festival showcases the
                rich traditions, resilience, and lifestyle of highland herders.
              </p>
              <div>
                <a
                  href="/itinerary/royal-highland-festival"
                  className="inline-flex items-center justify-center tracking-widest rounded-one border border-[#FFFFFF]  text-[#FFFFFF] text-[16px] px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-[#5B3231] hover:text-white active:scale-95"
                  style={{
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                  }}
                >
                  View This Trip
                </a>
              </div>
            </div>

            {/* Press Card - Fixed alignment */}
            <div className="lg:col-span-7 flex justify-end">
              <div className="bg-[#A8735D]/50 w-full max-w-[600px] px-6 pt-6 pb-5 md:px-[75px] md:pt-[100px] md:pb-[80px] space-y-6 md:space-y-8 min-h-[300px] md:min-h-[400px] lg:min-h-[768px] items-center flex flex-col justify-center">
                <div className="space-y-3 text-center">
                  <h3
                    className="font-serif text-[28px] text-white"
                    style={{
                      fontFamily: "var(--font-seasons), Georgia, serif",
                    }}
                  >
                    <a
                      href="https://www.nationalgeographic.com/travel/article/royal-highland-festival-laya-bhutans-remote-spiritual-side"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline hover:text-white/80 transition-colors"
                    >
                      National Geographic
                    </a>
                  </h3>
                  <p
                    className="font-serif text-[16px] text-white/80 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-merriweather), Georgia, serif",
                    }}
                  >
                    Find Bhutan's spiritual side at this remote highland
                    festival
                  </p>
                  <p
                    className="font-serif text-[16px] text-white/70"
                    style={{
                      fontFamily: "var(--font-merriweather), Georgia, serif",
                    }}
                  >
                    By Angela Locatelli <br /> Published August 24, 2025
                  </p>
                </div>

                <div className="space-y-3 text-center pt-10 md:pt-8">
                  <h3
                    className="font-serif text-[28px] text-white"
                    style={{
                      fontFamily: "var(--font-seasons), Georgia, serif",
                    }}
                  >
                    <a
                      href="https://www.scmp.com/lifestyle/travel-leisure/article/3259043/bhutans-royal-highland-festival-colourful-high-altitude-mix-music-dance-and-sport"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline hover:text-white/80 transition-colors"
                    >
                      South China Morning Post
                    </a>
                  </h3>
                  <p
                    className="font-serif text-[16px] text-white/80 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-merriweather), Georgia, serif",
                    }}
                  >
                    Bhutan's Royal Highland Festival is a mix of music, dance
                    and sport — but it's the altitude that takes your breath
                    away.
                  </p>
                  <p
                    className="font-serif text-[16px] text-white/70"
                    style={{
                      fontFamily: "var(--font-merriweather), Georgia, serif",
                    }}
                  >
                    By Julian Ryall <br /> Published April 15, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </FadeIn>
  );
}

// --- Section 5: Top-Rated Tours ---
interface Tour {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
}

const toursData: Tour[] = [
  {
    id: 1,
    title: "Western Bhutan Highlights Tour",
    subtitle: "PRIVATE JOURNEYS",
    description:
      "Explore Bhutan’s cultural highlights in Thimphu, Punakha, and Phobjikha Valley, discovering sacred sites, historic landmarks, local traditions, and stunning mountain landscapes. The journey culminates with a hike to the iconic Tiger’s Nest Monastery.",
    image: "/fonts/images/Thimphu.webp",
    slug: "western-bhutan-highlights-tour",
  },
  {
    id: 2,
    title: "Eastern Bhutan: The Untouched Journey",
    subtitle: "PRIVATE JOURNEYS",
    description:
      "Enter Bhutan through Samdrup Jongkhar and explore its eastern and central regions, discovering village life and the unique Brokpa culture of Merak. Continue through Mongar and Bumthang to Phobjikha, Punakha, Thimphu, and Haa Valley, before returning to Paro via Chele La Pass. The journey concludes with a hike to the Tiger’s Nest Monastery.",
    image: "/fonts/images/ParoDzong.webp",
    slug: "eastern-bhutan-untouched-journey",
  },
  {
    id: 3,
    title: "Cultural Exploration Through Day Hikes",
    subtitle: "PRIVATE JOURNEYS",
    description:
      "Explore the cultural heart of western Bhutan, from Paro and Punakha to Thimphu and Haa Valley. Discover historic dzongs, sacred monasteries, villages, and scenic hiking trails, culminating in a memorable hike to the Tiger’s Nest Monastery.",
    image: "/fonts/images/Hiking.webp",
    slug: "cultural-exploration-day-hikes",
  },
  {
    id: 4,
    title: "Jumolhari Trek",
    subtitle: "PRIVATE JOURNEYS",
    description:
      "Trek from Paro’s Tiger’s Nest through Jigme Dorji Wangchuck National Park, crossing remote landscapes and the 4,820-meter Yeli La Pass, with stunning views of Mount Jumolhari. A thrilling journey combining Himalayan wilderness, culture, and adventure.",
    image: "/fonts/images/Trek.webp",
    slug: "jumolhari-trek",
  },
];

function ToursCarousel({ tours }: { tours: typeof toursData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const count = tours.length;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const animateToIndex = (toIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (reduced) {
      setCurrentIndex(toIndex);
      setIsAnimating(false);
      return;
    }
    setTimeout(() => {
      setCurrentIndex(toIndex);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    const next = currentIndex === 0 ? count - 1 : currentIndex - 1;
    animateToIndex(next);
  };

  const handleNext = () => {
    const next = currentIndex === count - 1 ? 0 : currentIndex + 1;
    animateToIndex(next);
  };

  useEffect(() => {
    const id = setInterval(handleNext, 4000);
    return () => clearInterval(id);
  }, [currentIndex, count, reduced]);

  return (
    <div className="relative">
      {/* Grey background - separate, right-aligned, shorter height
          Mobile/tablet only (max-lg): full width, auto height, starts 130px
          down so the image pokes above it, stops above the nav row.
          Desktop (lg+): unchanged — inline style still wins. */}
      <div
        className="absolute right-0 bg-[#D9D9D9]/70 rounded-none -z-10
                   max-lg:!left-1/2 max-lg:!-translate-x-1/2 max-lg:!w-[110%] max-lg:!max-w-[700px] max-lg:!h-auto
                   max-lg:!top-[130px] max-lg:!bottom-20"
        style={{
          width: "calc(97%)",
          left: "90px",
          height: "650px",
        }}
      />

      <div className="relative z-10 p-8 md:p-12 lg:p-16 h-auto lg:h-[650px] flex flex-col justify-center">
        <div className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            {/* Image - now takes 5 columns instead of 6
                Mobile/tablet only (max-lg): centred, smaller, no top pull.
                Desktop (lg+): unchanged. */}
            <div
              className="lg:col-span-5 lg:-ml-[160px] z-20 relative
                max-lg:mx-auto max-lg:w-[92%] max-lg:max-w-[380px]"
            >
              <div className="overflow-hidden aspect-[4/3] w-full relative">
                {tours.map((tour, idx) => (
                  <img
                    key={tour.id}
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out"
                    style={{ opacity: idx === currentIndex ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>

            {/* Content - now takes 7 columns instead of 6 for more width */}
            <div className="lg:col-span-6 lg:pl-12 text-slate-800 relative flex flex-col justify-center">
              {tours.map((tour, idx) => (
                <div
                  key={tour.id}
                  className="transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: idx === currentIndex ? 1 : 0,
                    position: idx === currentIndex ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    pointerEvents: idx === currentIndex ? "auto" : "none",
                  }}
                >
                  <h3
                    className="text-[24px] text-black/80 font-normal leading-snug mb-4"
                    style={{
                      fontFamily: "var(--font-seasons), Georgia, serif",
                    }}
                  >
                    {tour.title}
                  </h3>
                  <p
                    className="text-[16px] text-black/70 leading-relaxed font-serif font-light mb-6"
                    style={{
                      fontFamily: "var(--font-merriweather), Georgia, serif",
                    }}
                  >
                    {tour.description}
                  </p>
                  <div>
                    <a
                      key={currentIndex}
                      href={`/itinerary/${tour.slug}`}
                      className="animate-fade-in inline-flex items-center justify-center tracking-widest rounded-one border border-[#5B3231] text-[#5B3231] text-[14px] px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 "
                      style={{
                        fontFamily: "var(--font-merriweather), Georgia, serif",
                      }}
                    >
                      View This Trip
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons - outside grey background, right-aligned */}
      <div className="relative z-10">
        <div className="flex justify-end items-center space-x-3 pt-6 pb-4 -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-[50px]">
          <button
            onClick={handlePrev}
            aria-label="Previous tour"
            className="relative overflow-hidden w-10 h-10 rounded-full border border-[#8B5A52] bg-transparent text-[#8B5A52] flex items-center justify-center *:relative *:z-10 *:stroke-[#8B5A52] before:absolute before:inset-0 before:rounded-full before:bg-[#8B5A52] before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition-[transform,opacity] before:duration-300 before:ease-out hover:*:stroke-[#D9D9D9] focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4 stroke-[1.5]" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next tour"
            className="relative overflow-hidden w-10 h-10 rounded-full border border-[#8B5A52] bg-transparent text-[#8B5A52] flex items-center justify-center *:relative *:z-10 *:stroke-[#8B5A52] before:absolute before:inset-0 before:rounded-full before:bg-[#8B5A52] before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition-[transform,opacity] before:duration-300 before:ease-out hover:*:stroke-[#D9D9D9] focus:outline-none"
          >
            <ChevronRight className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ToursSection() {
  return (
    <FadeIn>
      <section className="relative overflow-hidden font-serif select-none">
        <div
          className="absolute top-1/2 -right-1 opacity-5 pointer-events-none"
          style={{
            transform: "translateY(calc(-50% - 160px)) translateX(350px)",
          }}
        >
          <img
            src="/fonts/images/logo/logo_only.webp"
            alt=""
            className="w-[1459px] h-[1275px] object-contain"
          />
        </div>

        {/* Content wrapper - move this independently */}
        <div className="relative z-10 pl-4 sm:pl-6 md:pl-[50px] pr-4 sm:pr-6 md:pr-[0px]">
          {/* Add padding/margin to move content down */}
          <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-24">
            <div className="space-y-8 px-4 sm:px-8 md:px-12 lg:px-24">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <span
                  className="block w-fit mx-auto text-[21px] tracking-widest text-[#5B3231]/80 font-sans font-semibold"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  PRIVATE JOURNEYS
                </span>
                <h2
                  className="text-[36px] text-black/80 font-normal"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  Our Top-Rated Tours
                </h2>
                <p
                  className="text-black/70 text-[16px] font-normal leading-relaxed"
                  style={{
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                  }}
                >
                  Our carefully designed Bhutan tour packages offer exceptional
                  value, giving you an unforgettable journey filled with
                  lifelong memories.
                </p>
              </div>

              <div className="relative  md:pt-12">
                <ToursCarousel tours={toursData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

// --- Reel Overlay ---
function ReelOverlay({
  reelNumber,
  onClose,
}: {
  reelNumber: number;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      setIsPaused(false);
      setIsEnded(false);
    };
    const onPause = () => {
      setIsPaused(true);
    };
    const onEnded = () => {
      setIsEnded(true);
      setIsPaused(true);
    };
    const onLoadedMetadata = () => {
      setDuration(video.duration);
    };
    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress(
        video.duration ? (video.currentTime / video.duration) * 100 : 0,
      );
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isEnded) {
      video.currentTime = 0;
      video.play();
      setIsEnded(false);
      return;
    }
    if (video.paused) {
      video.play();
      setShowIcon(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setShowIcon(false), 1500);
    } else {
      video.pause();
      setShowIcon(true);
    }
  };

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsEnded(false);
    setShowIcon(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowIcon(false), 1500);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar) return;
    const rect = bar.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = x / rect.width;
    video.currentTime = percent * video.duration;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-[85vh] w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={`/fonts/videos/reel${reelNumber}.webm`}
          className="h-full w-auto object-contain rounded-xl"
          autoPlay
          muted
          playsInline
          onClick={togglePlay}
        />

        {isEnded ? (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={restart}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-md">
              <RotateCcw className="h-7 w-7 text-white" />
            </div>
          </div>
        ) : isPaused ? (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-md transition-opacity duration-300">
              <Play className="h-7 w-7 fill-white text-white translate-x-0.5" />
            </div>
          </div>
        ) : showIcon ? (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer pointer-events-none"
            onClick={togglePlay}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-md animate-fade-out">
              <Pause className="h-7 w-7 fill-white text-white" />
            </div>
          </div>
        ) : null}

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl">
          <div
            ref={progressRef}
            className="w-full h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span
              className="text-white text-[16px]"
              style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
            >
              {formatTime(currentTime)}
            </span>
            <span
              className="text-white text-[16px]"
              style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
            >
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Section 6: Products in Reels ---
function ReelsSection() {
  const [activeReel, setActiveReel] = useState<number | null>(null);

  return (
    <>
      <FadeIn>
        <section className="pt-24 pb-50 pl-4 sm:pl-6 md:pl-[50px] pr-4 sm:pr-6 md:pr-[45px] bg-white">
          <div className="space-y-16">
            <FadeIn className="flex justify-between items-end">
              <div className="space-y-3">
                <span
                  className="block w-fit text-[21px] uppercase tracking-widest text-[#5B3231]/80 font-semibold"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  Travel Inspiration
                </span>
                <h2
                  className="font-serif text-[36px] text-black/80"
                  style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
                >
                  Products in Reels
                </h2>
                <p
                  className="text-[16px] font-serif text-black/70 max-w-md"
                  style={{
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                  }}
                >
                  Get inspired by these reels showcasing a variety of our travel
                  experiences and tourism offerings.
                </p>
              </div>
            </FadeIn>

            {/* Removed px-4 to eliminate left gap */}
            <FadeIn delay={150} className="relative w-full">
              <Carousel
                opts={{ duration: 100, loop: true } as any}
                autoplay
                autoplayInterval={6000}
              >
                {/* Removed -ml-4 to eliminate left gap */}
                <CarouselContent className="">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <CarouselItem
                      key={item}
                      className="basis-full md:basis-1/3 pl-4"
                    >
                      <div
                        className="group relative aspect-[9/13] rounded-xl shadow-md overflow-hidden bg-teal-900 cursor-pointer"
                        onClick={() => setActiveReel(item)}
                      >
                        <video
                          src={`/fonts/videos/reel${item}.webm`}
                          className="h-full w-full object-cover transition-[filter,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.04] [@media(hover:hover)_and_(pointer:fine)]:group-hover:blur-[2px]"
                          loop
                          muted
                          playsInline
                        />
                        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-slate-950/0 opacity-0 transition-[background-color,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-slate-950/20 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-sm backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105">
                            <Play className="h-5 w-5 fill-white stroke-white translate-x-0.5" />
                          </span>
                        </div>
                        <p
                          className="absolute bottom-6 left-6 text-white text-[20px] font-medium opacity-0 transition-opacity duration-300 pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100"
                          style={{
                            fontFamily:
                              "var(--font-merriweather), Georgia, serif",
                          }}
                        >
                          Reel {item}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNavigation
                  className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
                  classNameButtonPrev="relative overflow-hidden w-10 h-10 rounded-full border border-[#8B5A52] bg-transparent text-[#8B5A52] *:relative *:z-10 *:stroke-[#8B5A52] before:absolute before:inset-0 before:rounded-full before:bg-[#8B5A52] before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition-[transform,opacity] before:duration-300 before:ease-out hover:*:stroke-white"
                  classNameButtonNext="relative overflow-hidden w-10 h-10 rounded-full border border-[#8B5A52] bg-transparent text-[#8B5A52] *:relative *:z-10 *:stroke-[#8B5A52] before:absolute before:inset-0 before:rounded-full before:bg-[#8B5A52] before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition-[transform,opacity] before:duration-300 before:ease-out hover:*:stroke-white"
                  alwaysShow
                />
              </Carousel>
            </FadeIn>
          </div>
        </section>
      </FadeIn>

      {activeReel !== null && (
        <ReelOverlay
          key={activeReel}
          reelNumber={activeReel}
          onClose={() => setActiveReel(null)}
        />
      )}
    </>
  );
}

// --- Section 7: Impact & Accordion ---
function ImpactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Royal Society for Protection of Nature (RSPN)",
      content:
        "We support the RSPN in its mission to conserve Bhutan's rich biodiversity by protecting endangered species and preserving critical habitats.",
    },
    {
      title: "Leave nothing but footprints, Take nothing but memories",
      content:
        "Our guests travel responsibly—minimizing plastic use and reducing waste while respecting the natural and cultural environments they visit.",
    },
    {
      title: "Monastic Food Support Project",
      content:
        "Here, tourism benefits truly trickle down to the grassroots level. We provide essential food supplies to monks in a remote village.",
    },
    {
      title: "Bhutan Stroke Foundation",
      content:
        "This foundation raises awareness and provides post-stroke care services to survivors. We contribute our part in support of its work.",
    },
    {
      title: "Nakulu Dog Shelter",
      content:
        "As part of our community support, we try to do our small bit for a dog shelter by sharing food for the dogs and helping with their daily care.",
    },
    {
      title: "School for the Blind: Muenselling Institute",
      content:
        "Support the purchase of musical instruments and provide a wholesome education for blind students.",
    },
  ];

  return (
    <FadeIn>
      <section className="py-16 sm:py-20 md:py-28 lg:py-50 pl-4 sm:pl-6 md:pl-[50px] pr-4 sm:pr-6 md:pr-[0px] bg-[#D9D9D9] text-slate-800">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Images Collage */}
          <FadeIn className="hidden sm:block lg:col-span-5 relative mb-20 sm:mb-24 lg:mb-0">
            <div className="w-3/4 aspect-3/4 overflow-hidden mx-auto lg:mx-0">
              <img
                src="/fonts/images/RedPanda.webp"
                alt="Artisan at work"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-3/4 aspect-4/3 overflow-hidden mx-auto mt-6 relative lg:absolute lg:right-10 lg:-bottom-50 lg:mt-0 lg:mx-0">
              <img
                src="/fonts/images/clay pot.webp"
                alt="Mask carving"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>

          {/* Text & Accordion */}
          <FadeIn
            delay={150}
            className="lg:col-span-7 space-y-6 mt-0 sm:mt-12 lg:mt-0 pl-4 sm:pl-6 md:pl-6 lg:pl-[50px] pr-4 sm:pr-6 md:pr-6 lg:pr-[45px]"
          >
            <span
              className="block w-fit text-[16px] sm:text-[18px] lg:text-[21px] uppercase tracking-widest text-[#5B3231]/80 font-semibold"
              style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
            >
              Giving Back
            </span>
            <h2
              className="font-serif text-[26px] sm:text-[30px] lg:text-[36px] text-[#000000]/80 leading-tight"
              style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
            >
              Beyond Travel, <br /> We Create Impact
            </h2>
            <p
              className="text-[15px] sm:text-[16px] font-serif text-[#000000]/70 leading-relaxed"
              style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
            >
              A love for people, the world, humanity, and the environment, along{" "}
              <br className="hidden sm:inline" />
              with a thoughtful perspective on money and generosity.
            </p>

            <div className="pt-10 divide-y divide-slate-400/50 border-b border-slate-400/50">
              {items.map((item, index) => (
                <div key={index} className="py-6">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    aria-expanded={openIndex === index}
                    className="w-full flex items-center justify-between text-left font-serif text-[15px] sm:text-[16px] font-medium text-[#5B3231]/70 gap-4"
                    style={{
                      fontFamily: "var(--font-merriweather), Georgia, serif",
                    }}
                  >
                    <span>{item.title}</span>
                    <span className="relative w-4 h-4 shrink-0">
                      <Plus
                        className={`w-4 h-4 text-[#5B3231]/70 absolute inset-0 transition-transform duration-300 ease-out ${
                          openIndex === index
                            ? "rotate-90 opacity-0"
                            : "rotate-0 opacity-100"
                        }`}
                      />
                      <Minus
                        className={`w-4 h-4 text-[#5B3231]/70 absolute inset-0 transition-transform duration-300 ease-out ${
                          openIndex === index
                            ? "rotate-0 opacity-100"
                            : "-rotate-90 opacity-0"
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity motion-reduce:duration-200 ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="mt-2 text-[15px] sm:text-[16px] text-black/70 font-serif leading-relaxed"
                        style={{
                          fontFamily:
                            "var(--font-merriweather), Georgia, serif",
                        }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </FadeIn>
  );
}

// --- Section 8: Testimonials ---
const TESTIMONIALS = [
  {
    image: "/fonts/images/person/Lisa G.webp",
    name: "Lisa G",
    location: "United States",
    paragraphs: [
      "We just returned from an incredible 10-day private trip to Bhutan with Yaks & Nomads, and we're still on cloud nine! We booked just a couple of months out — including during the busy Paro Tsechu festival — and they pulled it all together seamlessly, accommodations and all.",
      "Our guide Karma was an absolute gem: knowledgeable, patient, and wonderfully flexible. She made the whole journey feel effortless and personal. If Bhutan is on your bucket list, don't hesitate — Yaks & Nomads will take care of everything!",
    ],
  },
  {
    image: "/fonts/images/person/Pamela W.webp",
    name: "Pamela W",
    location: "United States",
    paragraphs: [
      "The best solo trip I ever had! Yaks & Nomads arranged my 6-day tour with amazing itineraries, guide Rinzin and driver Tashi are the best! Nothing can top their hospitality, service, and warm hearts! My last day end with Tshechu festival. No words can express my gratitude to Yaks & Nomads. It is definitely once in a lifetime experience. They are the best!",
    ],
  },
  {
    image: "/fonts/images/person/Susumu T.webp",
    name: "Susumu T",
    location: "Japan",
    paragraphs: [
      "This trip was more than just sightseeing – it was a deep Bhutan Buddhism and spiritual experience at Bhutan. One of the most impressive parts was learning about Bhutan's GNH (Gross National Happiness) philosophy by our guide. It really helped me understand what kind of country Bhutan is🇧🇹. It's not just beautiful, it has a strong sense of kindness and economy balance.",
      "Our guide was extremely knowledgeable and passionate, and both the guide and driver made the whole journey fun with great conversations. We laughed a lot throughout the trip!",
    ],
  },
  {
    image: "/fonts/images/person/Linda C.webp",
    name: "Linda C",
    location: "Australia",
    paragraphs: [
      "Our trip to Bhutan was focused on attending the marathon. We then took the opportunity to go trekking and take in the sights. Every step was meticulously organised by Yaks & Nomads. The hotels they chose were excellent, the driver and guide were excellent and the trekking crew were excellent. I would highly recommend trusting this organization for Bhutan travel.",
    ],
  },
];

function TestimonialDots() {
  const { selectedIndex, scrollTo } = useCarouselAPI();

  return (
    <div className="flex justify-center gap-2 pt-8">
      {TESTIMONIALS.map((t, i) => (
        <button
          key={t.name}
          onClick={() => scrollTo(i)}
          aria-label={`Go to testimonial ${i + 1}`}
          aria-current={selectedIndex === i}
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
            selectedIndex === i
              ? "bg-[#8B5A52]"
              : "bg-transparent border border-[#5B3231]"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialsSection() {
  return (
    <FadeIn>
      <section className="relative py-24 pl-4 sm:pl-6 md:pl-[50px] pr-4 sm:pr-6 md:pr-[50px] bg-[#f4f2ed] text-slate-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('/fonts/images/ChatGPT Image May 5, 2026, 05_19_17 PM.webp')",
          }}
        />
        <div className="relative space-y-12">
          <FadeIn className="text-center max-w-[700px] mx-auto space-y-3">
            <span
              className="block w-fit mx-auto text-[21px] uppercase tracking-widest text-[#8B5A52] font-semibold"
              style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
            >
              Happy Travelers
            </span>
            <h2
              className="font-serif text-[36px] text-slate-900"
              style={{ fontFamily: "var(--font-seasons), Georgia, serif" }}
            >
              In Their Own Words
            </h2>
            <p
              className="text-[16px] font-serif text-slate-600 leading-relaxed"
              style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
            >
              Nothing speaks louder than the words of our happy guests and their
              unforgettable
              <br></br>
              Bhutan experiences.
            </p>
          </FadeIn>

          {/* Review Card */}
          <FadeIn
            delay={150}
            className="bg-white/50 max-w-[1220px] mx-auto p-8 md:p-16 rounded-sm shadow-sm relative text-center"
          >
            <Carousel
              opts={{ duration: 75 } as any}
              autoplay={true}
              autoplayInterval={5000}
            >
              <span
                className="block text-[190px] text-[#8B5A52]/30 mb-[-70] mx-auto leading-none font-merriweather"
                style={{
                  fontFamily: "var(--font-merriweather), Georgia, serif",
                  fontStyle: "light",
                  fontWeight: "300",
                }}
              >
                &ldquo;
              </span>

              <CarouselContent className="-ml-4">
                {TESTIMONIALS.map((t) => (
                  <CarouselItem key={t.name}>
                    <div
                      className="space-y-4 font-serif text-[18px] text-slate-700 leading-relaxed max-w-2xl mx-auto"
                      style={{
                        fontFamily: "var(--font-merriweather), Georgia, serif",
                      }}
                    >
                      {t.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <div className="pt-10 flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300 shrink-0">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p
                          className="font-serif font-bold text-[#5B3231] text-[14px]"
                          style={{
                            fontFamily: "var(--font-seasons), Georgia, serif",
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="font-serif font-bold text-[#5B3231] text-[14px]"
                          style={{
                            fontFamily: "var(--font-seasons), Georgia, serif",
                          }}
                        >
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselNavigation
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-1"
                classNameButton="relative overflow-hidden border border-[#8B5A52] bg-transparent text-[#8B5A52] *:relative *:z-10 *:stroke-[#8B5A52] before:absolute before:inset-0 before:rounded-full before:bg-[#8B5A52] before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100 before:transition-[transform,opacity] before:duration-300 before:ease-out hover:*:stroke-white"
                alwaysShow
              />

              <TestimonialDots />
            </Carousel>
          </FadeIn>
        </div>
      </section>
    </FadeIn>
  );
}

// --- Main Page Component ---
export default function Home() {
  useEffect(() => {
    preloadImages(PRELOAD_IMAGES);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <IntroStatementSection />
        <AboutSection />
        <ExperiencesSection />
        <FeaturedSection />
        <ToursSection />
        <ReelsSection />
        <ImpactSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
