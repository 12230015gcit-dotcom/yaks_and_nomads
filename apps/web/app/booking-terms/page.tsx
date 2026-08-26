'use client';

import React, { useState, useEffect } from 'react';
import FadeIn from '@/components/common/FadeIn';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// --- Main Content Section ---
function TermsContent() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-16 bg-[#ffffff] text-slate-800 font-serif">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Page Title */}
        <FadeIn className="text-center pb-6">
          <h1 className="text-[32px] text-slate-900 font-normal" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
            Booking Terms & Conditions
          </h1>
        </FadeIn>

        {/* Terms Items List */}
        <div className="space-y-10 text-[16px] leading-relaxed text-slate-700">

          {/* Section 1 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              1. Definitions and Acceptance of Terms
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              For the purposes of these Terms and Conditions, the terms 'we', 'us', and 'our' shall refer to Yaks & Nomads, a tour operator duly registered with the Royal Government of Bhutan under registration number 50000866. The term 'you' shall refer to the individual making the booking and/or any other participants on whose behalf the booking is made. By making a booking with us or participating in any tour organized by us, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </FadeIn>

          {/* Section 2 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              2. Deposits & Final Payment
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              A deposit equal to thirty percent (30%) of the total tour cost shall be payable at the time of booking. The remaining balance shall be paid no later than sixty (60) days prior to the scheduled date of arrival. In the event that we are engaged to arrange flight tickets on your behalf, full payment of the applicable airfare shall be required at the time of booking.
            </p>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              If the tour package includes accommodation at luxury hotels, full payment shall be required no later than ninety (90) days prior to the scheduled date of travel, in accordance with the payment and cancellation policies imposed by such hotels.
            </p>
          </FadeIn>

          {/* Section 3 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              3. Trip cancellation policy
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              The Client may cancel the tour by providing written notice to the Company. Upon receipt of such notice, cancellation charges shall be applied as follows, based on the number of days prior to the scheduled date of travel:
            </p>
            <ul className="pl-4 space-y-1 text-slate-600" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              <li>– Forty-five (45) days or more: 100% refund of the total trip cost</li>
              <li>– Thirty (30) to forty-four (44) days: 80% refund of the total trip cost</li>
              <li>– Twenty (20) to twenty-nine (29) days: 50% refund of the total trip cost</li>
              <li>– Fifteen (15) to nineteen (19) days: 30% refund of the total trip cost</li>
              <li>– Fourteen (14) days or less: 100% of the total trip cost shall be retained as a cancellation fee</li>
            </ul>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              The Client shall be responsible for any bank charges, transfer fees, or other financial costs incurred in processing the refund. Notwithstanding the above, certain luxury hotels included in the tour package may be subject to separate and more stringent cancellation policies. In such cases, the relevant hotel's cancellation terms shall prevail to the extent applicable.
            </p>
          </FadeIn>

          {/* Section 4 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              4. Flight cancellation policy
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              Air carriers constitute independent third parties and are subject to their own terms, conditions, and cancellation policies. Accordingly, any cancellation or amendment of air tickets shall be governed by the applicable airline's rules and fare conditions. Subject to the airline's policies, refunds for issued tickets may be applied as follows:
            </p>
            <ul className="pl-4 space-y-1 text-slate-600" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              <li>– 90 percent refund if you cancel the issued ticket before 30 days of departure.</li>
              <li>– 75 percent refund before 9 days of date of departure.</li>
              <li>– 50 percent refund before 4 days of date of departure.</li>
              <li>– No refund permitted for rescheduled ticket.</li>
            </ul>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              Date change charges shall apply where amendments are made less than four (4) days prior to the scheduled date of departure (excluding the date of travel). All refunds shall be calculated strictly in accordance with the applicable airline's terms, conditions, and fare rules (excluding the date of travel), and the Company shall not be held liable for any variations therein.
            </p>
          </FadeIn>

          {/* Section 5 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              5. Changes to the Itineraries
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              The Company reserves the right to make reasonable modifications to the itinerary of any tour in the event of unforeseen or unavoidable circumstances that materially affect the safe and efficient operation of the planned trip. In such circumstances, the Company shall use reasonable endeavors to notify the affected Client(s) as soon as practicable.
            </p>
          </FadeIn>

          {/* Section 6 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              6. Special requirements
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              The Client shall notify the Company of any special requirements at the time of booking or during the formulation of the tour itinerary. Such requirements may include, but are not limited to, food allergies, dietary restrictions, additional room arrangements, or other specific needs. The Company shall use reasonable efforts to accommodate such special requirements; however, no guarantee is given that all requests can be fulfilled.
            </p>
          </FadeIn>

          {/* Section 7 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              7. Travel documents
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              The Company shall arrange and process the necessary visas and permits required for travel within Bhutan. However, the Client shall be solely responsible for obtaining all visas, permits, and other travel documentation required for entry into or transit through any other country before or after travel to Bhutan. The Company shall not be liable for any costs, losses, damages, or expenses incurred as a result of the Client's failure to obtain the requisite travel documentation, including but not limited to denial of entry, deportation, delays, or disruption to travel arrangements.
            </p>
          </FadeIn>

          {/* Section 8 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              8. Insurance
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              The tour cost does not include any form of travel or medical insurance. The Client is strongly advised to obtain comprehensive insurance coverage, at their own expense, from their country of residence prior to departure. Such insurance should adequately cover, inter alia, risks associated with loss or damage to personal property, personal injury, medical expenses, emergency evacuation (including airlift), travel delays, and any inconvenience arising from unforeseen or unavoidable circumstances.
            </p>
          </FadeIn>

          {/* Section 9 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              9. Force Majeure
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              While the Company shall take all reasonable measures to ensure the safety and comfort of the Client, the Client acknowledges and accepts that certain risks are inherent in travel and activities associated therewith. THE COMPANY SHALL NOT BE LIABLE FOR ANY LOSS, INJURY, DAMAGE, DELAY, OR INCONVENIENCE ARISING FROM CIRCUMSTANCES BEYOND ITS REASONABLE CONTROL, INCLUDING BUT NOT LIMITED TO TRAVEL BY AUTOMOBILE OR AIRCRAFT, HORSEBACK RIDING, ACTS OF NATURE, ACCIDENTS, OR ILLNESS.
            </p>
          </FadeIn>

          {/* Section 10 */}
          <FadeIn className="space-y-3">
            <h2 className="text-[#8B5A52] font-semibold text-[18px]" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              10. Intellectual Property Rights
            </h2>
            <p style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              All materials contained on this website, including but not limited to text, artwork, photographs, graphics, data, audio clips, video clips, and logos, are the exclusive property of Yaks & Nomads and are protected by applicable copyright, trademark, and other intellectual property laws of the Royal Government of Bhutan, as well as relevant international laws and treaties. Such materials shall not be copied, reproduced, distributed, displayed, or otherwise used in any form or by any means, whether in whole or in part, without the prior written consent of Yaks & Nomads.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

// --- Page Component Entry Point ---
export default function BookingTermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />
      <main>
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}



