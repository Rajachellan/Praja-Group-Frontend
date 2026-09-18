'use client';

import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Sparkles,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  PhoneCall
} from 'lucide-react';
import Link from 'next/link';

export interface PropertyFaqItem {
  id: string;
  category: 'Tenant Management' | 'Maintenance & Repairs' | 'Financials & Rent' | 'Legal & Leases' | 'NRI Property Care';
  question: string;
  answer: string;
  highlights?: string[];
}

const PROPERTY_MANAGEMENT_FAQS_DATA: PropertyFaqItem[] = [
  {
    id: 'tenant-1',
    category: 'Tenant Management',
    question: 'How does Prajha Group screen and verify prospective tenants for residential & luxury properties?',
    answer:
      'We conduct thorough background checks including official police verification, government ID validation (Aadhaar & PAN card), employment status & income verification, and previous landlord references before executing any tenancy agreement.',
    highlights: [
      '100% Police background verification process',
      'Government ID & salary slip validation',
      'Previous landlord reference & rental track check',
    ],
  },
  {
    id: 'financials-1',
    category: 'Financials & Rent',
    question: 'When and how do property owners receive their monthly rent remittances?',
    answer:
      'Rent collected from tenants is directly remitted into the owner’s designated bank account on or before the 5th of every month, accompanied by an itemized digital monthly financial statement detailing all utility payments and maintenance logs.',
    highlights: [
      'Guaranteed rent remittance by the 5th of every month',
      'Direct NEFT/RTGS bank transfer to owner account',
      'Itemized digital monthly accounting ledger',
    ],
  },
  {
    id: 'maintenance-1',
    category: 'Maintenance & Repairs',
    question: 'How do you handle routine maintenance requests and 24/7 emergency repairs?',
    answer:
      'We operate a dedicated technical repair desk. For routine repairs (plumbing, electrical, painting), we inspect the issue, provide a transparent cost estimate to the owner, and coordinate verified technicians. Emergency repair calls are dispatched immediately 24/7.',
    highlights: [
      '24/7 Technical emergency repair response desk',
      'Pre-approved transparent owner cost estimates',
      'Licensed electrical, plumbing & civil technicians',
    ],
  },
  {
    id: 'nri-1',
    category: 'NRI Property Care',
    question: 'How do you support Non-Resident Indians (NRIs) managing vacant plots, villas, or flats in Chennai?',
    answer:
      'We provide 100% remote caretaking for NRIs including anti-encroachment guarding for vacant plots, periodic key management, deep cleaning before owner visits, utility bill filings, and live virtual HD video walkthroughs of your real estate.',
    highlights: [
      '100% Remote hands-off caretaking for NRI property owners',
      'Live HD video walkthroughs & bi-monthly photo updates',
      'Vacant land anti-encroachment guarding & boundary care',
    ],
  },
  {
    id: 'legal-1',
    category: 'Legal & Leases',
    question: 'What legal assistance does Prajha Group provide for lease drafting and agreements?',
    answer:
      'Our legal team drafts legally binding 11-month or multi-year rental agreements, manages official stamp duty registration, oversees security deposit escrow terms, and conducts formal move-in and exit inventory handover audits.',
    highlights: [
      'Advocate-drafted legal lease agreements',
      'Official stamp duty & sub-registrar registration assistance',
      'Documented move-in & exit inventory audits',
    ],
  },
  {
    id: 'maintenance-2',
    category: 'Maintenance & Repairs',
    question: 'How often are physical property inspections conducted and documented?',
    answer:
      'We conduct scheduled bi-monthly or monthly physical inspections. Owners receive detailed digital photo and video audit reports covering structural condition, cleanliness, plumbing sanity, and utility system functionality.',
    highlights: [
      'Bi-monthly physical site visits & audits',
      'HD photo & video digital inspection reports',
      'Immediate damage or wear-and-tear alerts',
    ],
  },
  {
    id: 'financials-2',
    category: 'Financials & Rent',
    question: 'Do you handle municipal property tax filings and utility bill payments for owners?',
    answer:
      'Yes! We manage complete utility bill tracking and payments including Greater Chennai Corporation property tax, TNEB electricity bills, CMWSSB water tax, and gated society maintenance charges.',
    highlights: [
      'Greater Chennai Corporation property tax filing & payment',
      'TNEB electricity & water bill tracking',
      'Digital receipt archival for annual tax records',
    ],
  },
  {
    id: 'tenant-2',
    category: 'Tenant Management',
    question: 'What happens if a tenant delays rent payment or breaches lease terms?',
    answer:
      'We enforce strict lease guidelines with automated payment reminders, follow-ups, and formal legal notices if needed. We handle complete tenant communication and legal dispute resolution so property owners never face stress.',
    highlights: [
      'Automated rent reminder notifications',
      'Professional legal notice escalation workflow',
      'Complete hands-off owner dispute management',
    ],
  },
];

export default function Faqs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openId, setOpenId] = useState<string | null>(PROPERTY_MANAGEMENT_FAQS_DATA[0].id);

  const categories = useMemo(() => {
    return ['All', 'Tenant Management', 'Maintenance & Repairs', 'Financials & Rent', 'Legal & Leases', 'NRI Property Care'];
  }, []);

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'All') return PROPERTY_MANAGEMENT_FAQS_DATA;
    return PROPERTY_MANAGEMENT_FAQS_DATA.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case 'Tenant Management':
        return 'bg-emerald-100/80 text-[#166534] border-emerald-200';
      case 'Maintenance & Repairs':
        return 'bg-[#F0FDF4] text-[#166534] border-emerald-300';
      case 'Financials & Rent':
        return 'bg-purple-100/80 text-purple-900 border-purple-200';
      case 'Legal & Leases':
        return 'bg-amber-100/80 text-amber-900 border-amber-200';
      case 'NRI Property Care':
        return 'bg-orange-100/80 text-[#F37924] border-orange-200';
      default:
        return 'bg-[#F0FDF4] text-[#166534] border-emerald-200';
    }
  };

  return (
    <section id="property-faqs" className="py-24 bg-gradient-to-b from-slate-50 via-white to-[#F0FDF4]/30 relative overflow-hidden border-t border-slate-200">
      
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
              PROPERTY MANAGEMENT KNOWLEDGE BASE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{ letterSpacing: '1px', lineHeight: '58px' }}>
            Frequently Asked <span className="text-[#166534]">Questions</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Get comprehensive answers regarding tenant background screening, automated rent remittance, 24/7 property maintenance, legal leases, and NRI property caretaking with Prajha Group.
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
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider border ${getCategoryBadgeClass(
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
                            Key Service Assurance Highlights:
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
          <div className="flex flex-col gap-5 text-center md:text-left relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20" style={{ alignSelf: "flex-start" }}>
              <MessageSquare className="w-3.5 h-3.5 text-[#F37924]" />
              <span>Have a Specific Property Management Query?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D24]">
              Speak Directly With Our Estate Care Specialists
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Schedule a free consultation to review tenant placement, maintenance schedules, legal leases, or NRI caretaking packages in Chennai.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase hover:scale-105"
              style={{ letterSpacing: "1px" }}
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
