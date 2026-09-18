'use client';

import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Sparkles,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import Link from 'next/link';

export interface FaqItem {
  id: string;
  category: 'Legal & Approvals' | 'Pricing & BOQ' | 'Services' | 'Joint Venture' | 'Quality & Timelines';
  question: string;
  answer: string;
  highlights?: string[];
}

const DEVELOPER_FAQS_DATA: FaqItem[] = [
  {
    id: 'legal-approvals-1',
    category: 'Legal & Approvals',
    question: 'Does Prajha Group handle CMDA / DTCP plan sanctions and government clearances?',
    answer:
      'Yes, we manage 100% end-to-end plan approvals, layout sanctions (CMDA & DTCP), RERA registrations, environmental clearances, and Patta transfer services through our specialized legal panel to ensure your project stays fully compliant without regulatory delays.',
    highlights: [
      'Complete CMDA & DTCP plan sanction processing',
      'RERA project registration and documentation',
      'In-house legal advocate panel for Patta transfer & title scrutiny',
    ],
  },
  {
    id: 'pricing-boq-1',
    category: 'Pricing & BOQ',
    question: 'How does Prajha Group guarantee budget control and zero hidden costs?',
    answer:
      'Before project kickoff, we prepare an itemized Bill of Quantities (BOQ) with fixed contractual civil rates. This locked pricing model ensures total transparency with no unexpected price escalations or hidden charges throughout the development lifecycle.',
    highlights: [
      'Itemized Bill of Quantities (BOQ) locked upfront',
      'Contractual civil rates with no escalation surprises',
      'Transparent milestone payment schedules',
    ],
  },
  {
    id: 'services-1',
    category: 'Services',
    question: 'What types of real estate development projects do you handle in Chennai?',
    answer:
      'Prajha Group specializes in a wide spectrum of property development across Chennai, including luxury residential flats, independent villas, secure gated communities, prime residential plots, farm lands, and modern community living apartments.',
    highlights: [
      'Turnkey residential flats & luxury villas',
      'Gated community infrastructure & master planning',
      'CMDA/DTCP approved residential plot layouts',
    ],
  },
  {
    id: 'joint-venture-1',
    category: 'Joint Venture',
    question: 'Can land owners collaborate with Prajha Group for Joint Venture (JV) developments?',
    answer:
      'Yes! We offer highly attractive Joint Venture (JV) partnerships for landowners looking to monetize prime property. We handle 100% of the planning, design, civil construction, government sanctions, and sales marketing while providing transparent revenue/space sharing ratios.',
    highlights: [
      'Competitive profit or built-up area sharing ratios',
      'Zero financial stress for land owners',
      'Complete project funding, construction, and marketing support',
    ],
  },
  {
    id: 'quality-timelines-1',
    category: 'Quality & Timelines',
    question: 'What materials and quality control standards do you enforce on site?',
    answer:
      'We strictly procure Tier-1 branded materials including Tata Tiscon / JSW TMT steel, Ultratech / ACC cement, standard red brick or AAC block masonry, and branded sanitaryware. Every project undergoes multi-stage structural audits by qualified civil engineers.',
    highlights: [
      'Tier-1 materials: Tata Tiscon, JSW Steel & Ultratech Cement',
      'Strict multi-tier civil structural engineering audits',
      '10-Year structural guarantee on all civil developments',
    ],
  },
  {
    id: 'quality-timelines-2',
    category: 'Quality & Timelines',
    question: 'What is the typical completion timeframe for a real estate development project?',
    answer:
      'Completion timelines depend on project scale and approval requirements. Residential developments typically range between 12 to 18 months from ground break. We follow strict milestone-driven schedules supported by daily progress monitoring.',
    highlights: [
      'Milestone-driven project delivery schedules',
      'Regular HD photo and digital video progress reports',
      'Contractual penalty-backed delivery commitments',
    ],
  },
  {
    id: 'services-2',
    category: 'Services',
    question: 'How do you support Non-Resident Indians (NRIs) investing or developing in Chennai?',
    answer:
      'We offer dedicated NRI remote management services including digital document execution, legal title verification, power of attorney guidance, live video site inspections, and hassle-free rental or resale management once the project is handed over.',
    highlights: [
      'Dedicated remote video inspection updates',
      'Complete legal title scrutiny & Patta assistance',
      'Post-completion property & rental management support',
    ],
  },
];

export default function Faqs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>(DEVELOPER_FAQS_DATA[0].id);

  const categories = useMemo(() => {
    return ['All', 'Legal & Approvals', 'Pricing & BOQ', 'Services', 'Joint Venture', 'Quality & Timelines'];
  }, []);

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'All') return DEVELOPER_FAQS_DATA;
    return DEVELOPER_FAQS_DATA.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case 'Legal & Approvals':
        return 'bg-amber-100/80 text-amber-900 border-amber-200';
      case 'Pricing & BOQ':
        return 'bg-purple-100/80 text-purple-900 border-purple-200';
      case 'Services':
        return 'bg-emerald-100/80 text-[#166534] border-emerald-200';
      case 'Joint Venture':
        return 'bg-blue-100/80 text-blue-900 border-blue-200';
      case 'Quality & Timelines':
        return 'bg-orange-100/80 text-[#F37924] border-orange-200';
      default:
        return 'bg-[#F0FDF4] text-[#166534] border-emerald-200';
    }
  };

  return (
    <section id="developer-faqs" className="py-24 bg-gradient-to-b from-slate-50 via-white to-[#F0FDF4]/30 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F37924]/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(22, 101, 52, 0.06) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
              DEVELOPER KNOWLEDGE BASE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{ letterSpacing: '1px', lineHeight: '58px' }}>
            Frequently Asked <span className="text-[#166534]">Questions</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Get comprehensive answers regarding plan sanctions, BOQ pricing transparency, material standards, Joint Venture options, and property development timelines with Prajha Group.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#166534] text-white shadow-lg shadow-[#166534]/25 scale-105'
                    : 'bg-white text-slate-700 hover:text-[#166534] border border-slate-200 hover:border-emerald-300 shadow-sm'
                }`}
              >
                {isActive && <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion Cards List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const itemNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all duration-300 bg-white overflow-hidden ${
                  isOpen
                    ? 'border-[#166534] shadow-xl ring-2 ring-[#166534]/15'
                    : 'border-slate-200/90 hover:border-[#166534]/40 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Index Number Badge */}
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-extrabold text-xs transition-colors ${
                        isOpen
                          ? 'bg-[#166534] text-white shadow-md'
                          : 'bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white'
                      }`}
                    >
                      {itemNumber}
                    </div>

                    <div className="space-y-1.5">
                      {/* Category Pill Tag */}
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryBadgeClass(
                          faq.category
                        )}`}
                      >
                        {faq.category}
                      </span>

                      {/* Question Text */}
                      <h3 className="text-base sm:text-lg font-bold text-black group-hover:text-[#166534] transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator Chevron */}
                  <div
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#166534] text-white rotate-180 shadow-sm'
                        : 'bg-emerald-50 text-[#166534] group-hover:bg-emerald-100'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Expanded Answer Section */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 sm:pl-20 space-y-4">
                      <div className="p-4 rounded-2xl bg-[#F0FDF4]/60 border border-emerald-100">
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>

                      {/* Highlights Checklist */}
                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                            Key Project Assurance Highlights:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {faq.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold bg-white p-2.5 rounded-xl border border-slate-200/80">
                                <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner - Light Theme */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] border border-emerald-200 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          {/* <div className="absolute right-0 bottom-0 opacity-[0.06] pointer-events-none">
            <Building2 className="w-72 h-72 text-[#166534]" />
          </div> */}

          <div className="flex flex-col gap-5 text-center md:text-left relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20" style={{alignSelf:"flex-start"}}>
              <MessageSquare className="w-3.5 h-3.5 text-[#F37924]" />
              <span>Have a Specific Development Query?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D24]">
              Speak Directly With Our Real Estate Project Experts
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Schedule a free consultation to review land potential, CMDA layout approvals, estimate BOQ costs, or explore Joint Venture terms.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="#enquiry-form"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase hover:scale-105" style={{letterSpacing:"1px"}}
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#F37924]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
