'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ABOUT_IMAGES = [
  '/fonts/images/AboutUsHero.webp',
  '/fonts/images/localpersonalefficient.webp',
  '/fonts/images/logo/White%20Transparent.webp',
  '/fonts/images/person/IMG_8823.JPG.webp',
  '/fonts/images/person/Dorji%20Pelzang.webp',
  '/fonts/images/person/Karma%20Tshewang.jpg.webp',
  '/fonts/images/person/Karma%20Dechen_1.webp',
  '/fonts/images/person/Rinchen%20Dorji%20.webp',
  '/fonts/images/person/Rinzin%20Tsheten%20.webp',
  '/fonts/images/person/Yonten%20Wangchuk.webp',
  '/fonts/images/person/Ugyen%20Wangchuk.webp',
  '/fonts/images/Work%20with%20Us_1.webp',
  '/fonts/images/Work%20with%20Us.webp',
];

function preloadImages(srcs: string[]) {
  srcs.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}

// --- Section 1: About Hero ---
function AboutHero() {
  return (
    <section className="relative h-[60vh] md:h-[85vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('/fonts/images/AboutUsHero.webp')`, backgroundPosition: 'center calc(50% - 100px)' }}/>

      <div className="relative z-10 px-6">
        <FadeIn>
          <h1 className="text-[66px] tracking-wide font-normal" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
            About Us
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

// --- Section 2: The Heart of Yaks & Nomads ---
function HeartSection() {
  return (
    <section className="py-24 px-6 md:px-[130px] text-slate-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Text */}
        <FadeIn className="lg:col-span-6 space-y-6">
          <span className="text-[20px] uppercase tracking-widest text-[#5B3231]/80 font-semibold font-sans" style={{ fontFamily: 'var(--font-seasons), serif' }}>
            LOCAL. PERSONAL. EFFICIENT.
          </span>
          <h2 className="font-serif text-[32px] text-black/80 leading-tight" style={{ fontFamily: 'var(--font-seasons), serif' }}>
            The Heart of <br /> Yaks & Nomads
          </h2>

          <div className="space-y-4 text-[16px] text-black/70 leading-relaxed pt-2" style={{ fontFamily: 'var(--font-merriweather), serif' }}>
            <p>
              Yaks & Nomads was born with a big heart and a clear purpose to create meaningful travel experiences that truly benefit the people and places we are connected to.
            </p>
            <p>
              At our core, we act as a bridge between our customers and the communities around us. We carefully connect visitors with authentic local experiences, ensuring that every journey is not only memorable for the traveler but also valuable for the people who host them.
            </p>
            <p>
              We strongly believe in the trickle-down impact of tourism. Rather than concentrating benefits in a few hands, we design our trips so that income, opportunities, and growth reach deeper into the community, supporting local families, small businesses, artisans, and guides.
            </p>
            <p>
              Every itinerary we create is thoughtfully designed to benefit the locals and the destinations our travelers visit.
            </p>
            <p>
              We proudly stand as champions of community-based tourism, committed to preserving culture, empowering people, and shaping a more responsible and inclusive travel industry.
            </p>
          </div>
        </FadeIn>

        {/* Right Column: Image with Brand Overlay */}
        <FadeIn delay={150} className="lg:col-span-6 relative">
          <div className="aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-full">
            <img
              src="/fonts/images/localpersonalefficient.webp"
              alt="Bhutanese Nomad"
              className="w-full h-full object-cover"
              decoding="async"
            />
          </div>
          {/* Logo Watermark Overlay */}
          <div className="absolute -bottom-10 -left-6 md:-left-10 hidden sm:block bg-white">
            <img
              src="/fonts/images/logo/White Transparent.webp"
              alt="Yaks & Nomads"
              className="h-[198px] md:h-[214px] w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- Section 3: CEO Profile ---
function CeoSection() {
  return (
    <section className="py-24 px-6 md:px-[130px] bg-[#D9D9D9] text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <FadeIn>
          <h2 className="font-serif text-[32px] text-black/80" style={{ fontFamily: 'var(--font-seasons), serif' }}>
            Tsheten Chophel
          </h2>
          <span className="text-[20px] uppercase tracking-widest text-[#8B5A52]/80 font-semibold font-sans mt-1 block" style={{ fontFamily: 'var(--font-seasons), serif' }}>
            CEO
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* CEO Photo */}
          <FadeIn className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/fonts/images/person/IMG_8823.JPG.webp"
                alt="Tsheten Chophel - CEO"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>

          {/* CEO Biography */}
          <FadeIn delay={150} className="lg:col-span-7 text-[16px] text-slate-700 leading-relaxed">
            <div className="space-y-5" style={{ fontFamily: 'var(--font-merriweather), serif' }}>
              <p>
              Sending Tsheten to school was the furthest thing from his mother’s mind. As the youngest of seven siblings, he was naturally the most cherished, and his late mother found it difficult to imagine being away from him. However, his brothers, who had missed the opportunity for education themselves, were determined that he should not face the same fate. With their encouragement, he was enrolled in a boarding school that required a three-hour trek from his village</p>
              <p>
                His love for adventure dates back to his formative years. As a child, he was fascinated by the tourists who visited his hometown—a remote corner in eastern Bhutan and a renowned birding haven known for hornbills and many other species. This early exposure sparked his passion for guiding.
              </p>
              <p>
                His career in travel began shortly after graduation. Over the following decade, he gained extensive experience leading expeditions for discerning travelers across every corner of Bhutan.
              </p>
              <p>
                Before founding Yaks &amp; Nomads, he served as General Manager at a reputable tour company for ten years. This experience has enabled him to design distinctive itineraries that highlight the many wonders of the country. He places a strong emphasis on personalized service, a quality that truly sets him apart.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// --- Section 4: Guide Ambassadors ---
function AmbassadorsSection() {
  const guides = [
    { name: "Dorji Pelzang", image: "/fonts/images/person/Dorji%20Pelzang.webp", position: "50% 25%" },
    { name: "Karma Tshewang", image: "/fonts/images/person/Karma%20Tshewang.jpg.webp" },
    { name: "Karma Dechen", image: "/fonts/images/person/Karma%20Dechen_1.webp", position: "50% 15%" },
    { name: "Rinchen Dorji", image: "/fonts/images/person/Rinchen%20Dorji%20.webp", position: "50% 25%" },
    { name: "Rinzin Tsheten", image: "/fonts/images/person/Rinzin%20Tsheten%20.webp" },
    { name: "Yonten Wangchuk", image: "/fonts/images/person/Yonten%20Wangchuk.webp", position: "50% 0%" },
    { name: "Ugyen Wangchuk", image: "/fonts/images/person/Ugyen%20Wangchuk.webp", position: "50% 60%" },
  ];

  return (
    <section className="py-24 px-6 md:px-[130px] bg-[#fcfbfa]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <FadeIn className="lg:col-span-4 space-y-4 flex flex-col justify-center h-full">
          <h2 className="font-serif text-[32px] text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-seasons), serif' }}>
            Meet <br />
            Our <br />
            Guide Ambassadors
          </h2>
          <p className="text-[16px] text-black/70 leading-relaxed pt-2 max-w-xs" style={{ fontFamily: 'var(--font-merriweather), serif' }}>
            Government-certified and highly knowledgeable, our guides are among Bhutan's finest travel companions.
          </p>
        </FadeIn>

        {/* Right Column Grid */}
        <FadeIn delay={150} className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className={`group relative aspect-square overflow-hidden bg-slate-200 cursor-pointer ${
                [
                  "sm:col-start-1 sm:row-start-1",
                  "sm:col-start-2 sm:row-start-1",
                  "sm:col-start-1 sm:row-start-2",
                  "sm:col-start-2 sm:row-start-2",
                  "sm:col-start-3 sm:row-start-2",
                  "sm:col-start-2 sm:row-start-3",
                  "sm:col-start-3 sm:row-start-3",
                ][idx]
              }`}
            >
              <img
                src={guide.image}
                alt={guide.name}
                style={guide.position ? { objectPosition: guide.position } : undefined}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-10 pb-3 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-white text-[16px] font-medium" style={{ fontFamily: 'var(--font-merriweather), serif' }}>
                  {guide.name}
                </span>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

// --- Section 5: Partner Accordion ---
function PartnerSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const partners = [
    {
      title: "Small local businesses",
      content:
        "Local communities, guides, artisans, homestay owners, and small businesses can take advantage of the opportunity to collaborate with us.",
    },
    {
      title: "Bloggers & Travel Influencers",
      content:
        "Create a mutually beneficial travel partnership with us. You can be a local or international partner.",
    },
    {
      title: "Off-shore travel agents",
      content:
        "We can host a FAM trip for CEOs to help promote Bhutan, with us serving as your ground operator.",
    },
    {
      title: "Build career with us",
      content:
        "Young minds with a passion for tourism are invited to join our team as interns or full-time employees.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-[130px] bg-[#D9D9D9] text-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Composition Images */}
          <FadeIn className="lg:col-span-5 relative">
            <div className="w-3/4 aspect-3/4 overflow-hidden">
              <img
                src="/fonts/images/Work with Us_1.webp"
                alt="Artisan at work"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-3/4 aspect-4/3 overflow-hidden absolute right-10 -bottom-20">
              <img
                src="/fonts/images/Work with Us.webp"
                alt="Mask carving"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeIn>

        {/* Right Accordion Content */}
        <FadeIn delay={150} className="lg:col-span-7 space-y-6 mt-12 lg:mt-0">
          <h2 className="font-serif text-[32px] text-slate-900 leading-tight" style={{ fontFamily: 'var(--font-seasons), serif' }}>
            Become our <br />
            Partner Today.
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-merriweather), serif' }}>
            At Yaks &amp; Nomads, we grow through collaboration with local communities and travel experts who share our values. We welcome partners who believe in our ethos and aim to create mutually beneficial travel experiences.
          </p>

          <div className="pt-4 divide-y divide-slate-400/50 border-t border-b border-slate-400/50">
            {partners.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left text-[18px] font-medium text-slate-800 hover:text-[#8B5A52] transition-colors"
                    style={{ fontFamily: 'var(--font-merriweather), serif', color: 'rgba(91, 50, 49, 0.7)' }}
                  >
                    <span>{item.title}</span>
                    <span className="relative w-4 h-4 flex-shrink-0">
                      <Plus
                        className={`w-4 h-4 text-slate-600 absolute inset-0 transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                        }`}
                      />
                      <Minus
                        className={`w-4 h-4 text-slate-600 absolute inset-0 transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity motion-reduce:duration-200 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-2 text-[16px] text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-merriweather), serif', color: 'rgba(0, 0, 0, 0.7)' }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
      </div>
    </section>
  );
}

// --- Main About Page Entry Point ---
export default function AboutPage() {
  useEffect(() => {
    preloadImages(ABOUT_IMAGES);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />
      <main>
        <AboutHero />
        <HeartSection />
        <CeoSection />
        <AmbassadorsSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}



