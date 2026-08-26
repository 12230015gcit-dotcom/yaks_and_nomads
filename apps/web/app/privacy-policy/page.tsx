'use client';

import React, { useState, useEffect } from 'react';
import FadeIn from '@/components/common/FadeIn';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// --- Privacy Policy Main Content ---
function PolicyContent() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-16 bg-[#ffffff] text-slate-800 font-serif">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Page Heading */}
        <FadeIn className="text-center pb-6">
          <h1 className="text-[32px] text-slate-900 font-normal" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
            Privacy policy
          </h1>
        </FadeIn>

        {/* Policy Points */}
        <div className="space-y-10 text-[16px] leading-relaxed text-slate-700">

          {/* Section 1 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              1. Statement
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              This Privacy Policy outlines how we collect, store, process, and use personal information relating to individuals who travel to Bhutan through our services. By booking a trip with us, you acknowledge and expressly consent to the collection, use, and processing of your personal data in accordance with this Privacy Policy.
            </p>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              This privacy statement describes the way we collect, hold and use information about persons who travel Bhutan through us. By booking trip with us, you consent to the collection and use information as mentioned in this Privacy Policy.
            </p>
          </FadeIn>

          {/* Section 2 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              2. Pledge on privacy
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              We shall not sell, disclose, or otherwise transfer your personal information to any third party, except as expressly permitted or required under this Privacy Policy.
            </p>
          </FadeIn>

          {/* Section 3 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              3. Intended use of personal information
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              We collect personal data from you, including but not limited to your name, telephone number, nationality, and email address, when you submit an enquiry through our website. In addition, you may be required to provide passport details and other relevant identification information, which are necessary for travel-related arrangements, including airline bookings and the processing of visas, route permits, and special permits with the relevant governmental authorities.
            </p>
          </FadeIn>

          {/* Section 4 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              4. Personal preferences
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              We endeavor to provide a high standard of personalized service. Any special requests or preferences communicated by you at the time of booking, including but not limited to dietary requirements, physical conditions, or health-related information, may be disclosed to relevant third-party service providers, such as guides and accommodation providers, solely for the purpose of facilitating your travel arrangements and enhancing your experience. By providing such information, you consent to its use and disclosure for these purposes.
            </p>
          </FadeIn>

          {/* Section 5 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              5. Right to make changes in Privacy Policy
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              Yaks & Nomads reserves the right, at its sole discretion, to amend, modify, or update this Privacy Policy at any time without prior notice.
            </p>
          </FadeIn>

          {/* Section 6 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
              6. Complaints
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              If you have any concerns regarding our compliance with this Privacy Policy, or if you have any suggestions for its improvement, you may contact us at info@yaksandnomads.com. Upon receipt of a complaint, Yaks & Nomads shall review the matter and, where deemed valid or admissible, take appropriate and reasonable measures to address such concerns.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

// --- Privacy Policy Page Entry Point ---
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />
      <main>
        <PolicyContent />
      </main>
      <Footer />
    </div>
  );
}



