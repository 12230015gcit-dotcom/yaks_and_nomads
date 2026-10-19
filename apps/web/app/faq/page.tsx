"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/common/FadeIn";

// --- FAQ Hero ---
function FaqHero() {
  return (
    <section className="relative h-[60vh] md:h-[85vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fonts/images/FaqHero.webp')" }}
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 px-6">
        <FadeIn>
          <h1
            className="text-[52px] tracking-wide font-normal"
            style={{
              fontFamily: "var(--font-seasons), Georgia, serif",
            }}
          >
            FAQ
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

// --- FAQ Category Data ---
interface FaqCategory {
  number: string;
  title: string;
  items: {
    question: string;
    answer: string;
  }[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    number: "01",
    title: "Visa & Entry",
    items: [
      {
        question: "Do I need Visa to enter Bhutan?",
        answer:
          "Yes, you will need a visa to travel to Bhutan. Indian nationals require a permit instead of a visa. Both the visa and the permit must be obtained prior to travel, and we will arrange this for you seamlessly.",
      },
      {
        question: "Are there any visa restrictions for certain nationalities?",
        answer: "No",
      },
      {
        question: "How long does it take to obtain a visa?",
        answer:
          "The Department of Immigration approves visa within 5-7 working days.",
      },
      {
        question: "How can I get to Bhutan?",
        answer:
          "Drukair and Bhutan Airlines operate flights from Bangkok, Delhi, Dubai, Kolkata, Bagdogra, Dhaka, Kathmandu, Guwahati, and Singapore. You can also enter and exit Bhutan overland via Phuentsholing and Samdrup Jongkhar.",
      },
      {
        question: "How can I arrange my flights to Bhutan?",
        answer:
          "You can arrange your flights to Bhutan yourself, or you can have them organized by your tour operator as part of your overall trip arrangement.",
      },
    ],
  },
  {
    number: "02",
    title: "Money",
    items: [
      {
        question: "How much does it cost to travel to Bhutan?",
        answer:
          "The cost of traveling to Bhutan includes several components. The visa fee is US $40. The Sustainable Development Fee (SDF) is US $100 per person per night for most nationalities and INR 1,200 for Indian nationals. Land costs vary depending on your choice of hotels and the activities included in your itinerary.",
      },
      {
        question: "How can I make the payment?",
        answer: "You can make the payment via wire transfer or credit card.",
      },
      {
        question: "Where can I exchange money?",
        answer:
          "You can exchange money at the currency exchange counter when you arrive at the airport, or at money exchange shops in the towns.",
      },
      {
        question:
          "What is the maximum amount of cash I am allowed to carry when entering Bhutan?",
        answer:
          "The maximum amount of cash you are allowed to bring into Bhutan equivalent to US $10,000 per person.",
      },
      {
        question: "Can I use my credit card and ATM card in Bhutan?",
        answer:
          "Yes, you can use credit cards and ATM cards in Bhutan, but with some limitations.\nCredit cards (like Visa and Mastercard) are accepted in major hotels, some restaurants, and larger shops, especially in cities such as Thimphu and Paro. However, many smaller shops and rural areas only accept cash.\nATM cards can be used at ATMs in major towns to withdraw cash, but ATMs may not always work reliably, and not all international cards are accepted.\nIt is a good idea to carry some cash (especially US dollars or Indian rupees) for places where card payments are not available.\nAnother option is to download a local bank's digital wallet app, link it to your international credit card, and use it for payments.",
      },
    ],
  },
  {
    number: "03",
    title: "General",
    items: [
      {
        question: "Is travel insurance mandatory?",
        answer:
          "Travel insurance is not mandatory for visiting Bhutan. However, it is strongly recommended to have comprehensive coverage for medical emergencies, trip cancellations, and unexpected situations during your travel.",
      },
      {
        question: "Do I need a guide to travel around Bhutan?",
        answer:
          "Yes, you need a guide to travel around Bhutan. This is required to ensure you have a well-organized trip and a high-quality travel experience.",
      },
      {
        question: "What types of accommodation are available in Bhutan?",
        answer:
          "Bhutan offers a range of accommodation options, including homestays, 3-star hotels, 4-star hotels, and luxury 5-star hotels.",
      },
      {
        question: "Is it safe to travel to Bhutan?",
        answer:
          "Bhutan is a very safe destination to travel to, even for solo female travelers.",
      },
      {
        question: "How is the climate like in Bhutan?",
        answer:
          "Bhutan has four seasons: summer, autumn, winter, and spring. The south has a consistent humid subtropical climate, while central regions experience warm summers and cool, dry winters. The north is much colder, with snow-covered peaks year-round due to high altitude.\nSummer brings the Indian monsoon (late June to September), mainly affecting the south. Autumn follows with clear skies and occasional early snowfall at higher elevations. Winter (late November to March) is cold, with frost and frequent snowfall above 3,000 meters. Spring (March to mid-April) is generally dry and marked by blooming vegetation, transitioning into early summer with occasional showers.",
      },
      {
        question: "Is tap water safe for drinking?",
        answer:
          "We advise visitors to drink only bottled or boiled water, avoid ice, and eat properly cooked or peeled food to prevent any risk of diarrhea or stomach-related illness.",
      },
      {
        question: "Are there hospitals in Bhutan?",
        answer:
          "Bhutan has a good healthcare system, with hospitals available in all district headquarters. Healthcare services in Bhutan are free, including for tourists.",
      },
      {
        question: "Where can I get local SIM Card?",
        answer:
          "Both Bhutan Telecom and TashiCell counters are usually available right after you exit customs at Paro Airport. You can also get a SIM card from their service centers or retail shops in the cities.",
      },
      {
        question: "How is internet connection in Bhutan?",
        answer:
          "Internet connectivity in Bhutan is generally good in urban areas but less reliable in remote regions. Wi-Fi in hotels is common, but speeds can vary depending on location and demand.",
      },
      {
        question: "Are there any restrictions on dress?",
        answer:
          "There are no specific rules regarding what visitors should wear. However, when visiting religious sites, it is recommended to dress in respectful smart-casual clothing that covers the shoulders and knees.\nRemove your shoes and hats before entering temples and some indoor religious spaces.",
      },
      {
        question: "Can I use a drone for photography in Bhutan?",
        answer:
          "No, you are not allowed to use a drone for photography in Bhutan.",
      },
      {
        question: "What type of power plug is used in Bhutan?",
        answer:
          "Bhutan mainly uses Type D, Type F, and Type G power plugs. Type D has three round pins, Type F has two round pins with side grounding clips, and Type G has three rectangular pins similar to the UK standard. Since different hotels and buildings may use different socket types, it is recommended to carry a universal travel adapter.",
      },
      {
        question: "Which languages are spoken in Bhutan?",
        answer:
          "The official language of Bhutan is Dzongkha. English is also widely used, as it is taught in schools across the country. In towns and tourist areas, most people can communicate in English comfortably. However, in rural villages, especially among older people, English may not be commonly spoken.",
      },
      {
        question: "Is there nightlife in Bhutan?",
        answer:
          "Yes, there is some nightlife in Bhutan, but it is quite low-key compared to many other countries. In cities like Thimphu and Paro, you can find a few bars, karaoke lounges, and nightclubs that stay open late, especially on weekends. Hotels and restaurants also offer relaxed evening dining and drinks.",
      },
      {
        question: "Are LGBTQ+ travellers welcomed?",
        answer:
          "In Bhutan, visitors are treated with respect and hospitality, and all travelers are welcomed regardless of background or identity. LGBTQ+ travelers experience the same warm and respectful treatment as other visitors.",
      },
    ],
  },
];

// --- FAQ Accordion ---
function FaqAccordion({ items }: { items: FaqCategory["items"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-slate-400/50 border-t border-b border-slate-400/50">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-6">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left font-serif text-[16px] text-[#5B3231]/70"
              style={{
                fontFamily: "var(--font-merriweather), serif",
              }}
            >
              <span className="pr-4 text-[#5B3231]/70">{item.question}</span>

              <span className="relative w-4 h-4 flex-shrink-0">
                <Plus
                  className={`w-4 h-4 text-[#5B3231]/70 absolute inset-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />

                <Minus
                  className={`w-4 h-4 text-[#5B3231]/70 absolute inset-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
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
                    fontFamily: "var(--font-merriweather), Georgia, serif",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Sticky FAQ Sections ---
function FaqSections() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);

  // Track viewport height so Section 3 knows how much to translate
  useEffect(() => {
    const update = () => setViewportHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const PADDING_TOP = 120;
  const PADDING_BOTTOM = 120;
  const QUESTION_HEIGHT = 80;

  // Height per category — ALL THREE, including General
  const categoryHeights = FAQ_CATEGORIES.map((category) => {
    const questionHeight = category.items.length * QUESTION_HEIGHT;
    return PADDING_TOP + questionHeight + PADDING_BOTTOM;
  });

  const totalHeight = categoryHeights.reduce((a, b) => a + b, 0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollPosition = latest * totalHeight;

    let accumulatedHeight = 0;
    let newIndex = 0;

    for (let i = 0; i < categoryHeights.length; i++) {
      accumulatedHeight += categoryHeights[i];
      if (scrollPosition <= accumulatedHeight) {
        newIndex = i;
        break;
      }
    }

    setActiveIndex(newIndex);
  });

  // ---------- Section 3 scroll-reveal ----------
  // Progress through Section 3's own portion of the sticky scroll
  const section3Start = (categoryHeights[0] + categoryHeights[1]) / totalHeight;

  const section3Progress = useTransform(
    scrollYProgress,
    [section3Start, 1],
    [0, 1],
  );

  // How far Section 3's content must slide up so the bottom becomes visible
  const section3Overflow = Math.max(0, categoryHeights[2] - viewportHeight);

  const section3Y = useTransform(
    section3Progress,
    [0, 0.15, 1],
    [0, 0, -section3Overflow],
  );
  // ----------------------------------------------

  const activeCategory = FAQ_CATEGORIES[activeIndex];
  const isTallSection = activeIndex === 2;

  return (
    <>
      <section
        ref={sectionRef}
        className="relative px-6 md:px-[50px] text-black/80"
        style={{ height: `${totalHeight}px` }}
      >
        <div
          className={`sticky top-0 h-screen overflow-hidden flex ${
            isTallSection ? "items-start pt-[120px]" : "pt-[120px]"
          }`}
        >
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.number}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full"
              >
                {/* Inner wrapper handles Section 3's scroll reveal */}
                <motion.div
                  className="w-full"
                  style={isTallSection ? { y: section3Y } : undefined}
                >
                  <div className="grid lg:grid-cols-12 gap-2">
                    {/* Desktop Category Title */}
                    <div className="hidden lg:block lg:col-span-12">
                      <div className="space-y-3">
                        <span
                          className="text-[22px] font-normal block text-[#5B3231]/80"
                          style={{
                            fontFamily: "var(--font-seasons), Georgia, serif",
                          }}
                        >
                          {activeCategory.number}
                        </span>

                        <h2
                          className="text-[36px] leading-tight"
                          style={{
                            fontFamily: "var(--font-seasons), Georgia, serif",
                            color: "rgba(0, 0, 0, 0.7)",
                          }}
                        >
                          {activeCategory.title}
                        </h2>
                      </div>
                    </div>

                    {/* Empty Left Column */}
                    <div className="lg:col-span-5"></div>

                    {/* FAQ */}
                    <div className="lg:col-span-7">
                      <div data-faq-list>
                        {/* Mobile Heading */}
                        <div className="lg:hidden space-y-3 mb-8">
                          <span
                            className="text-[20px] font-semibold block text-[#5B3231]/80"
                            style={{
                              fontFamily: "var(--font-seasons), Georgia, serif",
                            }}
                          >
                            {activeCategory.number}
                          </span>

                          <h2
                            className="text-[32px] text-black/70 leading-tight"
                            style={{
                              fontFamily: "var(--font-seasons), Georgia, serif",
                            }}
                          >
                            {activeCategory.title}
                          </h2>
                        </div>

                        <FaqAccordion items={activeCategory.items} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Space before support section */}
      <div className="h-[100px]" />
    </>
  );
}
// --- Section: Still Have Questions Box ---
function SupportCalloutSection() {
  return (
    <section className="py-40 px-6 md:px-[50px] bg-[#D9D9D9] text-slate-800 text-center">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div>
            <h2
              className="font-serif text-[36px] font-normal"
              style={{
                fontFamily: "var(--font-seasons), serif",
                color: "rgba(0, 0, 0, 0.8)",
              }}
            >
              Still have questions?
            </h2>

            <p
              className="font-serif text-[16px] leading-relaxed mt-10"
              style={{
                fontFamily: "var(--font-merriweather), serif",
                color: "#000000",
              }}
            >
              If you cannot find answer to your question in our FAQ, you can
              always contact us.
              <br />
              We will answer to you shortly! Meet our Support team
            </p>

            <div
              className="pt-8 font-serif text-[16px] space-y-2"
              style={{
                fontFamily: "var(--font-seasons), serif",
                color: "rgba(0, 0, 0, 0.8)",
              }}
            >
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@yaksandnomads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@yaksandnomads.com
                </a>
              </p>

              <p>
                <a href="tel:+97517000000">(+975) 17000000</a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- FAQ Page Entry Point ---
export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-black/80 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />

      <main>
        <FaqHero />

        <FaqSections />

        <SupportCalloutSection />
      </main>

      <Footer />
    </div>
  );
}
