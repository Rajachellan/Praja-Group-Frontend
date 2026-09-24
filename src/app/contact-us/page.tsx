'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Globe,
  Share2,
  MessageCircle,
  User,
  Building2,
  ShieldCheck,
  ArrowRight,
  Headphones,
  Check,
  MessageSquare
} from 'lucide-react';
import AdvancedFaqSection, { FaqItem } from '../components/AdvancedFaqSection';

import api from '../../../services/api'
import { AxiosError } from 'axios';

const contactFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Response Time',
    question: 'How quickly will Prajha Group respond to my inquiry?',
    answer:
      'Our customer assistance team reviews all submissions continuously. You will receive a direct phone call or detailed email within 2 to 4 business hours.',
  },
  {
    id: 'faq-2',
    category: 'Site Visits',
    question: 'Can I schedule an in-person site visit for construction or plots?',
    answer:
      'Yes! We arrange complimentary site visits across Chennai with dedicated civil engineers to inspect plot boundaries, structural work, or project layouts.',
  },
  {
    id: 'faq-3',
    category: 'BOQ Estimates',
    question: 'Do you provide itemized BOQ quotes before project kickoff?',
    answer:
      'Absolutely. We prepare a transparent, locked Bill of Quantities (BOQ) detailing structural materials, civil costs, and delivery timelines upfront.',
  },
  {
    id: 'faq-4',
    category: 'NRI Services',
    question: 'How do you assist Non-Resident Indians (NRIs)?',
    answer:
      'We handle 100% remote consultations for NRIs, including virtual video site inspections, legal document scrutiny, and dedicated caretaking services.',
  },
  {
    id: 'faq-5',
    category: 'Approvals',
    question: 'Does Prajha Group assist with CMDA and DTCP plan sanction processing?',
    answer:
      'Yes, we manage complete government documentation, architect floor plan submissions, and bank loan approvals (SBI, HDFC, ICICI).',
  },
];

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactUsPage() {

 
  const [name,setName]=useState<string>("")
  const [email,setEmail]=useState<string>("")
  const [message,setMessage]=useState<string>("")
  const [phNo,setPhno]=useState<number>()

  const [propertyLocation,setPropertyLocation]=useState<string>('')


  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.contact-badge',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
        .fromTo(
          '.contact-title',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35 },
          '-=0.15'
        )
        .fromTo(
          '.contact-card',
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.05,
            scrollTrigger: {
              trigger: '.contact-grid',
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
    },
    { scope: containerRef }
  );


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
    const res=  await api.post('/add/contact', {
        name,
        email,
        message,
        phNo,propertyLocation
      });
      alert(res.data.message)
      setSubmitted(true);
    } catch (err) {
       const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F37924] selection:text-white overflow-x-hidden">
      
      {/* 1. Hero Header Section */}
      <section className="relative py-10 lg:py-20 bg-gradient-to-b from-[#F4F8F6] via-white to-slate-50 border-b border-slate-200/80 overflow-hidden">
        {/* Background Ambient Soft Meshes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-20 w-[450px] h-[450px] rounded-full bg-[#F37924]/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15, 45, 36, 0.06) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6 justify-center">
            <Link href="/" className="hover:text-[#166534] transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F37924] font-bold">Contact Us</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-5">
            {/* Tagline Badge */}
            <div className="contact-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F2D24]">
                PRAJHA CONNECT • 24/7 ENQUIRY DESK
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-black leading-[1.12]">
              Get in Touch With <br className="hidden sm:inline" />
              <span className="text-[#166534] relative inline-block">
                Prajha Group
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Have a query regarding real estate development, civil construction, property management, or joint venture land opportunities in Chennai? Our senior civil engineers and project advisors are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Interactive Workspace Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#166534] mb-1">
                    <Sparkles className="w-4 h-4 text-[#F37924]" />
                    <span>Direct Consultation Form</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Select your interest area and provide details. We respond within 2 to 4 business hours.
                  </p>
                </div>

                {/* Success Confirmation Notification */}
                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-emerald-300 space-y-4 text-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto shadow-md">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F2D24]">
                      Message Delivered Successfully!
                    </h3>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                        setPhno(undefined);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-[#166534] text-white text-xs font-bold hover:bg-[#0F2D24] transition-colors inline-flex items-center gap-2"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  /* Main Form */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#166534]" /> Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Kumar"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#166534]" /> Mobile Number *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            placeholder="94999 33461"
                            value={phNo ?? ''}
                            onChange={(e) => {
                              const digits = e.target.value.replace(/\D/g, '');
                              setPhno(digits ? Number(digits) : undefined);
                            }}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#166534]" /> Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all"
                        />
                      </div>

                      {/* Subject Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#166534]" /> Project / Property Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. OMR / Velachery / Chennai"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all"  onChange={(e)=>setPropertyLocation(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Requirement Message Box */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#166534]" /> Detailed Requirement / Query *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your project requirements, plot extent, construction budget, or property management needs..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all resize-none"
                      />
                    </div>

                    {error && (
                      <p role="alert" className="text-sm font-medium text-red-600">
                        {error}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Enquiry</span>
                          <Send className="w-4 h-4 text-[#F37924]" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Direct Channels & HQ Info Cards (5  cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Head Office Card */}
              <div className="bg-[#0F2D24] text-white rounded-3xl p-7 sm:p-8 shadow-xl relative overflow-hidden border border-emerald-900">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-800">
                      Corporate Office
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#F37924]" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      Prajha Group Headquarters
                    </h3>
                    <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider mt-1">
                      Chennai, Tamil Nadu
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-emerald-900/80 text-xs sm:text-sm text-emerald-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#F37924] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        Plot No.18, First Avenue, Pallava Garden, Old Pallavaram, Chennai - 600 117, Tamil Nadu, India.
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#F37924] shrink-0" />
                      <a href="tel:+919499933461" className="hover:text-white font-bold">
                        +91 94999 33461
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#F37924] shrink-0" />
                      <a href="mailto:prajhaconnect@gmail.com" className="hover:text-white font-bold">
                        prajhaconnect@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#F37924] shrink-0" />
                      <span>10.00 AM - 06.00 PM (Monday - Saturday)</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Pallava+Garden+Old+Pallavaram+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/15"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowRight className="w-4 h-4 text-[#F37924]" />
                  </a>
                </div>
              </div>

              {/* Direct Support Desk Card */}
              <div className="bg-[#F0FDF4] rounded-3xl p-7 border border-emerald-200/80 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0F2D24]">
                      Fast Response Guarantee
                    </h4>
                    <p className="text-xs text-slate-600">
                      Direct hotline access for urgent property enquiries
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-2 border-t border-emerald-200/60">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                    <span>Instant WhatsApp Reply</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                    <span>Free BOQ Estimates</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                    <span>Dedicated Civil Team</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                    <span>On-Site Consultations</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Bar */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 space-y-3 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Connect With Prajha Group Socials:
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100075918745331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-50 hover:bg-[#166534] text-slate-700 hover:text-white border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/prajhagroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-50 hover:bg-[#166534] text-slate-700 hover:text-white border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/69127920/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-50 hover:bg-[#166534] text-slate-700 hover:text-white border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Embedded Interactive Google Map Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#166534]">
              OFFICE LOCATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Visit Prajha Group Headquarters
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Pallava Garden, Old Pallavaram, Chennai, Tamil Nadu
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-96 relative bg-slate-200">
            <iframe
              title="Prajha Group Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.085815615712!2d80.1702!3d12.9663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e4c0d000001%3A0x123456789abcdef!2sPallava%20Garden%2C%20Old%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600117!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Old Pallavaram, Chennai</p>
                <p className="text-[11px] text-slate-500">First Avenue, Pallava Garden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Advanced FAQ Section */}
      <AdvancedFaqSection
        title="Frequently Asked Contact Questions"
        subtitle="Everything you need to know about reaching Prajha Group, site visits, BOQ estimates, and project consultations."
        faqs={contactFaqs}
      />
    </div>
  );
}
