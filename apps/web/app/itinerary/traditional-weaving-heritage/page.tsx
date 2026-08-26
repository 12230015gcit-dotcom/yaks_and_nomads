'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function ItineraryHero() {
  return (
    <section className="relative h-[85vh] min-h-[550px] bg-slate-900 flex items-center justify-center text-center text-white overflow-hidden z-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/fonts/images/merak women.webp')` }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 px-4 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-[66px] tracking-wide font-normal">
            Traditional Weaving Heritage
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

function TripOverviewSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbfa] text-slate-800 font-serif">
      <div className="max-w-6xl mx-auto space-y-16">
        <FadeIn className="max-w-3xl ml-auto space-y-6 text-[18px] text-slate-700 leading-relaxed">
          <div style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
            <p>
              Discover Bhutan's extraordinary textile tradition, where weaving is not merely a craft but a profound expression of cultural identity. From the intricate brocades of eastern Bhutan to the raw silk fabrics of Lhuentse, each region boasts unique patterns and techniques passed down through generations.
            </p>
            <p>
              Meet master weavers in their workshops, try your hand at the loom, and learn about the symbolic meanings woven into every thread. Take home authentic handwoven souvenirs that carry centuries of Himalayan heritage.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150} className="max-w-3xl ml-auto pt-6 space-y-6">
          <div className="space-y-1">
            <span className="text-[21px] uppercase tracking-widest block text-[#5B3231]/80" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              ADVENTURE AWAITS
            </span>
            <h2 className="text-[42px] text-slate-900 font-normal" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              Trip Overview
            </h2>
          </div>

          <div className="divide-y divide-black/70 text-[16px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif', color: 'rgba(91, 50, 49, 0.7)' }}>
            <div className="py-4 flex justify-between items-center">
              <span>Duration</span>
              <span className="font-medium">9 Days / 8 Nights</span>
            </div>
            <div className="py-4 flex justify-between items-center">
              <span>Next Dates</span>
              <span className="font-medium">20 – 28 September, 2026</span>
            </div>
            <div className="py-4 flex justify-between items-center">
              <span>Physical Rating</span>
              <span className="font-medium">Easy</span>
            </div>
          </div>

          <a href="/contact?trip=Traditional%20Weaving%20Heritage" className="inline-flex items-center justify-center tracking-widest rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-xs md:text-sm px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 font-[--font-seasons]">
            Let's Talk
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-12 px-6 md:px-16 bg-[#fcfbfa]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-6">
          <FadeIn className="flex justify-center overflow-hidden group">
            <img
              src="/fonts/images/merak women.webp"
              alt="Traditional weaving"
              className="w-[724px] max-w-full h-[1041px] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </FadeIn>
          <FadeIn className="flex justify-center overflow-hidden group">
            <img
              src="/fonts/images/Snowman Race28.webp"
              alt="Eastern Bhutan landscape"
              className="w-[724px] max-w-full h-[1041px] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </FadeIn>
        </div>
        <FadeIn delay={150} className="flex justify-center overflow-hidden group">
          <img
            src="/fonts/images/Mask dance .webp"
            alt="Cultural performances"
            className="w-[724px] max-w-full h-[1041px] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>
    </section>
  );
}

function FeaturesGridSection() {
  const features = [
    { title: 'Tour Features', desc: "An immersive textile journey visiting weaving villages, artisan workshops, and textile museums across Bhutan's eastern and central valleys." },
    { title: 'Accommodation', desc: "Boutique hotels and traditional farmstays offering authentic Bhutanese hospitality." },
    { title: 'Meals', desc: "Farm-to-table meals featuring local organic ingredients paired with traditional weaving demonstrations." },
    { title: 'Transportation', desc: "Private vehicle covering the eastern textile heartland with comfortable rest stops." },
    { title: 'Prior Training', desc: "No special training needed. Suitable for all ages with a passion for textiles and culture." },
    { title: 'Customization', desc: "Add extended weaving workshops, fabric shopping tours, or combine with a cultural festival." },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#fcfbfa] text-slate-800 font-serif border-t border-slate-100">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="md:w-2/3 ml-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((item, i) => (
            <FadeIn key={i} className="space-y-3 pt-4 border-t border-black/70" style={{ borderTopWidth: '0.5px' }}>
              <h3 className="text-[#8B5A52] font-semibold text-[21px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>{item.title}</h3>
              <p className="text-[16px] text-slate-600 leading-relaxed" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItineraryAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const days = [
    { day: 'Day 1: Arrival in Paro', content: 'Welcome at Paro airport. Transfer to hotel. Evening textile museum visit.' },
    { day: 'Day 2: Paro to Thimphu', content: 'Drive to Thimphu. Visit the Royal Textile Academy and local weaving shops.' },
    { day: 'Day 3: Thimphu Weaving District', content: 'Full day visiting Thimphu weaving communities and the royal textile workshop.' },
    { day: 'Day 4: Thimphu to Bumthang', content: 'Scenic drive to Bumthang. Visit local yathra wool weaving in Chumey valley.' },
    { day: 'Day 5: Bumthang Textiles', content: 'Morning weaving workshop. Afternoon visit to local fiber processing and dyeing centers.' },
    { day: 'Day 6: Bumthang to Lhuentse', content: 'Drive to Lhuentse, the ancient weaving heartland of Bhutan.' },
    { day: 'Day 7: Lhuentse Weaving Villages', content: 'Full day with master weavers. Learn about kishuthara brocade weaving techniques.' },
    { day: 'Day 8: Lhuentse to Trashigang', content: 'Drive through scenic valleys. Visit Trashigang market and textile shops.' },
    { day: 'Day 9: Departure', content: 'Transfer to Trashigang airport or return to Paro for departure.' },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-black/60 text-white font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl text-white font-normal mb-8" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>Itinerary</h2>
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {days.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-8">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left text-[16px] font-medium hover:text-amber-200 transition-colors focus:outline-none"
                  >
                    <span className="pr-4" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>{item.day}</span>
                    <span className="relative w-4 h-4 shrink-0">
                      <Plus className={`w-4 h-4 text-white/70 absolute inset-0 transition-all duration-300 ease-out ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                      <Minus className={`w-4 h-4 text-white/70 absolute inset-0 transition-all duration-300 ease-out ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-opacity motion-reduce:duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="mt-3 text-[16px] text-white/80 whitespace-pre-line leading-relaxed pl-1">{item.content}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-4">
            <a href="/contact?trip=Traditional%20Weaving%20Heritage" className="inline-flex items-center justify-center tracking-widest rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-xs md:text-sm px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 font-[--font-seasons]">Let&apos;s Talk</a>
          </div>
        </div>
        <FadeIn className="lg:col-span-5 space-y-6 sticky top-28">
          <div className="overflow-hidden group">
            <img src="/fonts/images/Snowman Race36.webp" alt="Highland Trekking" className="w-[782px] max-w-full h-[1124px] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
          </div>
          <div className="overflow-hidden group">
            <img src="/fonts/images/Royal Highland Festival-6.webp" alt="Festival" className="w-[782px] max-w-full h-[1124px] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function OtherToursSection() {
  const tours = [
    { slug: 'royal-highland-festival', title: 'The Royal Highland Festival', heroImage: '/fonts/images/473598770_1140754640754809_6851098014737525736_n.webp' },
    { slug: 'cultural-mask-dances', title: 'Cultural Mask Dances', heroImage: '/fonts/images/Mask dance .webp' },
    { slug: 'bhutan-monastery-tour', title: 'Bhutan Monastery Tour', heroImage: '/fonts/images/Trongsa by Matt Dutile10.webp' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tours.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tours.length]);

  const prev = () => setCurrentIndex((currentIndex - 1 + tours.length) % tours.length);
  const next = () => setCurrentIndex((currentIndex + 1) % tours.length);

  return (
    <section className="py-24 px-6 md:px-16 bg-[#E3E1DC] text-slate-900 font-serif">
      <FadeIn className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-normal">Other Tours</h2>
        <div className="relative h-[420px] md:h-[560px] overflow-hidden rounded-sm">
          {tours.map((tour, idx) => (
            <div key={tour.slug} className={`group absolute inset-0 overflow-hidden transition-opacity duration-700 ease-out motion-reduce:transition-none ${idx === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <img src={tour.heroImage} alt={tour.title} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-white text-2xl md:text-3xl mb-4">{tour.title}</h3>
                <a href={`/itinerary/${tour.slug}`} className="inline-flex items-center justify-center tracking-widest rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-xs md:text-sm px-5 md:px-6 py-2.5 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 font-[--font-seasons]">View This Trip</a>
              </div>
            </div>
          ))}
          <button onClick={prev} aria-label="Previous tour" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#8B5A52] bg-white text-[#8B5A52] flex items-center justify-center hover:bg-[#5B3231] hover:text-white transition-[background-color,border-color,color]"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={next} aria-label="Next tour" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#8B5A52] bg-white text-[#8B5A52] flex items-center justify-center hover:bg-[#5B3231] hover:text-white transition-[background-color,border-color,color]"><ChevronRight className="w-5 h-5" /></button>
        </div>
        <div className="flex justify-center gap-2">
          {tours.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentIndex(idx)} aria-label={`Go to tour ${idx + 1}`} className={`h-2 rounded-full transition-[width,background-color] duration-300 ${idx === currentIndex ? 'w-6 bg-[#8B5A52]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

// Footer is imported from @/components/layout/Footer

export default function TraditionalWeavingHeritagePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />
      <main>
        <ItineraryHero />
        <TripOverviewSection />
        <GallerySection />
        <FeaturesGridSection />
        <ItineraryAccordionSection />
        <OtherToursSection />
      </main>
      <Footer />
    </div>
  );
}
