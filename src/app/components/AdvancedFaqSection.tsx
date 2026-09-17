'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FaqItem {
  id: string;
  category?: string;
  question: string;
  answer: string;
}

interface AdvancedFaqProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  categories?: string[];
}

export default function AdvancedFaqSection({
  title = "Got Questions? We've Got Answers.",
  subtitle = "Everything you need to know about our construction services, plan approvals, BOQ pricing, and structural guarantees.",
  faqs = [],
  categories
}: AdvancedFaqProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  // Derive categories automatically if not supplied
  const categoryList = useMemo(() => {
    if (categories && categories.length > 0) {
      return ['All', ...categories.filter((c) => c !== 'All Questions' && c !== 'All')];
    }
    const set = new Set<string>();
    faqs.forEach((f) => {
      if (f.category) set.add(f.category);
    });
    return ['All', ...Array.from(set)];
  }, [categories, faqs]);

  // Filter items based on selected category
  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'All') return faqs;
    return faqs.filter((f) => f.category === selectedCategory);
  }, [faqs, selectedCategory]);

  // Category badge color styling palette
  const getBadgeStyle = (cat?: string) => {
    switch (cat?.toLowerCase()) {
      case 'general':
      case 'services':
        return 'bg-emerald-100/80 text-[#166534] border-emerald-200';
      case 'pricing':
      case 'pricing & boq':
      case 'pricing & process':
        return 'bg-purple-100/80 text-purple-800 border-purple-200';
      case 'sanctions':
      case 'approvals & sanctions':
      case 'legal & approvals':
        return 'bg-amber-100/80 text-amber-800 border-amber-200';
      default:
        return 'bg-[#E6F4ED] text-[#166534] border-emerald-200';
    }
  };

  return (
    <section id="faq-section" className="py-20 sm:py-28 bg-[#F8FCFA] relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle Background Grid Lines */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(22, 101, 52, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 101, 52, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-poppins">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4 font-poppins">
          {/* FAQ Pill Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E6F4ED] border border-[#166534]/20 text-[#166534] text-xs font-bold uppercase tracking-wider font-poppins">
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
            <span>FAQ</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-poppins">
            Got <span className="text-[#166534] italic font-semibold">Questions?</span> We've Got Answers.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium font-poppins">
            {subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        {categoryList.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 font-poppins">
            {categoryList.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-poppins transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#166534] text-white shadow-md shadow-[#166534]/20'
                      : 'bg-white text-slate-600 hover:text-[#166534] border border-slate-200/80 hover:border-emerald-300'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="space-y-4 font-poppins">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const itemNum = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={faq.id || index}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 bg-white overflow-hidden ${
                  isOpen
                    ? 'border-[#166534]/40 shadow-lg ring-1 ring-[#166534]/15'
                    : 'border-slate-200/80 hover:border-emerald-300 shadow-sm'
                }`}
              >
                {/* Trigger Header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                    {/* Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#166534] text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-sm font-poppins">
                      {itemNum}
                    </div>

                    <div className="space-y-1">
                      {/* Category Pill */}
                      {faq.category && (
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border font-poppins ${getBadgeStyle(faq.category)}`}>
                          {faq.category}
                        </span>
                      )}

                      {/* Question */}
                      <h3 className="text-base sm:text-lg font-bold text-[#166534] leading-snug font-poppins">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Chevron Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#E6F4ED] text-[#166534] flex items-center justify-center shrink-0 transition-transform duration-300">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 sm:pl-18">
                      <div className="border-l-2 border-[#166534]/40 pl-4 py-1">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium font-poppins">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
