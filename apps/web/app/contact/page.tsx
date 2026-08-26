'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// --- Styled Input with floating label ---
function StyledInput({ label, bracket, error, ...props }: { label: string; bracket: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  const value = props.value ?? '';
  const isActive = focused || !!value;

  return (
    <div
      className="relative pt-5 pb-2"
      style={{ borderBottom: `0.5px solid ${error ? 'rgba(179, 38, 30, 0.9)' : focused ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'}` }}
    >
      <label
        htmlFor={props.id}
        className="absolute left-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          fontFamily: 'var(--font-merriweather), serif',
          top: isActive ? '0px' : '20px',
          fontSize: isActive ? '11px' : '18px',
          color: isActive ? 'rgba(91, 50, 49, 0.5)' : 'rgba(91, 50, 49, 0.7)',
        }}
      >
        <span>{label}</span>
        {!isActive && <span style={{ color: 'rgba(91, 50, 49, 0.4)', fontSize: '16px', fontFamily: 'var(--font-merriweather), serif' }}>{bracket}</span>}
      </label>
      <input
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        className="w-full bg-transparent text-slate-800 focus:outline-none font-serif"
        style={{ fontFamily: 'var(--font-merriweather), serif' }}
      />
      {error && (
        <p className="mt-2 text-[12px]" style={{ fontFamily: 'var(--font-seasons), serif', color: 'rgba(179, 38, 30, 0.95)' }}>
          {error}
        </p>
      )}
    </div>
  );
}

function StyledTextarea({ label, bracket, ...props }: { label: string; bracket: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false);
  const value = props.value ?? '';
  const isActive = focused || !!value;

  return (
    <div
      className="relative pt-5 pb-2"
      style={{ borderBottom: `0.5px solid ${focused ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'}` }}
    >
      <label
        htmlFor={props.id}
        className="absolute left-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          fontFamily: 'var(--font-merriweather), serif',
          top: isActive ? '0px' : '20px',
          fontSize: isActive ? '11px' : '18px',
          color: isActive ? 'rgba(91, 50, 49, 0.5)' : 'rgba(91, 50, 49, 0.7)',
        }}
      >
        <span>{label}</span>
        {!isActive && <span style={{ color: 'rgba(91, 50, 49, 0.4)', fontSize: '16px', fontFamily: 'var(--font-merriweather), serif' }}>{bracket}</span>}
      </label>
      <textarea
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        className="w-full bg-transparent text-slate-800 focus:outline-none resize-none font-serif"
        style={{ fontFamily: 'var(--font-merriweather), serif' }}
      />
    </div>
  );
}


// --- Section 1: Contact Hero ---
function ContactHero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] bg-slate-900 flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/fonts/images/ContactUsHero.webp')` }}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10">
        <FadeIn>
          <h1 className="text-[66px] tracking-wide font-normal" style={{ fontFamily: 'var(--font-seasons), Georgia, serif' }}>
            Contact Us
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

// --- Section 2: Contact Form Content ---
function ContactFormContent() {
  const searchParams = useSearchParams();
  const tripParam = searchParams ? searchParams.get('trip') : null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [modal, setModal] = useState<{ type: 'incomplete' | 'invalid'; detail: string } | null>(null);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();
    if (!trimmed) return '';
    switch (name) {
      case 'name':
        return /^[A-Za-z\u00C0-\u024F\s]+$/.test(trimmed) ? '' : 'Name can only contain letters.';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed) ? '' : 'Enter a valid email address (e.g. name@example.com).';
      case 'phone':
        return /^[0-9+\-\s()]{7,}$/.test(trimmed) ? '' : 'Phone can only contain digits (+, -, spaces).';
      case 'country':
        return /^[A-Za-z\u00C0-\u024F\s]+$/.test(trimmed) ? '' : 'Country can only contain letters.';
      default:
        return '';
    }
  };

  useEffect(() => {
    if (tripParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Hello Yaks & Nomads team,\n\nI am interested in learning more about the "${tripParam}" journey. Please send me details and availability.`,
      }));
    }
  }, [tripParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const msg = validateField(name, value);
      if (msg) return { ...prev, [name]: msg };
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fieldLabels: Record<string, string> = { name: 'Name', email: 'Email', phone: 'Phone Number', country: 'Country' };

    const missing = (['name', 'email', 'country'] as const)
      .filter((field) => !formData[field].trim())
      .map((field) => fieldLabels[field]);
    if (!formData.message.trim()) missing.push('Message');

    if (missing.length > 0) {
      setModal({ type: 'incomplete', detail: missing.join(', ') });
      return;
    }

    const newErrors: Record<string, string> = {};
    (['name', 'email', 'phone', 'country'] as const).forEach((field) => {
      const msg = validateField(field, formData[field]);
      if (msg) newErrors[field] = msg;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setModal({
        type: 'invalid',
        detail: Object.keys(newErrors).map((field) => fieldLabels[field]).join(', '),
      });
      return;
    }
    setErrors({});
    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
    }, 800);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-[#fcfbfa] text-slate-800">
      {modal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/50" onClick={() => setModal(null)} />
          <div
            role="alertdialog"
            aria-modal="true"
            className="relative bg-white rounded-sm shadow-xl w-full max-w-md p-8 text-center animate-fade-in"
          >
            <AlertCircle className="w-10 h-10 mx-auto mb-4 text-[#B3261E]" />
            <h3 className="text-[24px] leading-tight mb-3" style={{ fontFamily: 'var(--font-seasons), Georgia, serif', color: '#5B3231' }}>
              {modal.type === 'incomplete' ? 'Form Incomplete' : 'Check Your Details'}
            </h3>
            <p className="font-serif text-[14px] leading-relaxed text-slate-600 mb-6" style={{ fontFamily: 'var(--font-seasons), serif' }}>
              {modal.type === 'incomplete'
                ? `Your form is incomplete. Please fill in: ${modal.detail}.`
                : `Please correct the following before sending: ${modal.detail}.`}
            </p>
            <button
              onClick={() => setModal(null)}
              className="rounded-full bg-[#8B5A52] text-white text-xs uppercase tracking-widest px-8 py-3 hover:bg-[#592A22] transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto space-y-12">
        <FadeIn>
          <h2 className="font-serif text-[26px] text-slate-900 font-normal" style={{ fontFamily: 'var(--font-seasons), serif', color: 'rgba(0, 0, 0, 0.8)' }}>
            {tripParam ? `Enquiry: ${tripParam}` : 'Contact Us Now'}
          </h2>
        </FadeIn>

        {status === 'submitted' ? (
          <FadeIn className="bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-sm text-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-slate-900 font-semibold">Message Sent</h3>
            </div>
            <button
              onClick={() => {
                setStatus('idle');
                setErrors({});
                setFormData({ name: '', email: '', phone: '', country: '', message: '' });
              }}
              className="mt-4 inline-block border border-[#8B5A52] bg-[#8B5A52] text-white font-serif text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-[#592A22] transition-[background-color,border-color,color,transform] active:scale-95"
            >
              Send Another Message
            </button>
          </FadeIn>
        ) : (
          <FadeIn delay={150}>
            <form onSubmit={handleSubmit} noValidate className="space-y-8 font-serif text-sm">
              <StyledInput
                label="Name "
                bracket="(Required)"
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <StyledInput
                label="Email "
                bracket="(Required)"
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <StyledInput
                label="Phone Number "
                bracket="(Optional)"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              <StyledInput
                label="Country "
                bracket="(Required)"
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                error={errors.country}
              />

              <StyledTextarea
                label="Message"
                bracket=" (Required)"
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-full border border-[#5B3231] bg-white/30 text-[#5B3231] text-[16px] px-8 py-3 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:bg-[#5B3231] hover:border-white hover:text-white active:scale-95 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

// --- Contact Page Entry Point ---
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#8B5A52] selection:text-white">
      <Header />
      <main>
        <ContactHero />
        <Suspense fallback={<div className="py-24 text-center font-serif text-slate-500">Loading form...</div>}>
          <ContactFormContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}



