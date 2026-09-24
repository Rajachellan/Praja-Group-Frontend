'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export interface BlogFaqItem {
  question: string;
  answer: string;
}

interface BlogFaqAccordionProps {
  faqs: BlogFaqItem[];
  title?: string;
  subtitle?: string;
}

export default function BlogFaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Publication Clarifications & Details"
}: BlogFaqAccordionProps) {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 space-y-6 shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#f37924] tracking-wider mb-1">
          <Sparkles className="w-4 h-4 text-[#f37924]" /> {subtitle}
        </div>
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-[#166534]" /> {title}
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const numStr = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden ${
                isOpen
                  ? 'border-[#166534] shadow-md ring-2 ring-[#166534]/15'
                  : 'border-slate-200/90 hover:border-[#166534]/40 shadow-xs'
              }`}
            >
              {/* Trigger Button */}
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-xs transition-colors ${
                      isOpen
                        ? 'bg-[#166534] text-white shadow-xs'
                        : 'bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white'
                    }`}
                  >
                    {numStr}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#166534] transition-colors leading-snug">
                    {faq.question}
                  </h3>
                </div>

                {/* Chevron Toggle Icon */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#166534] text-white rotate-180 shadow-xs'
                      : 'bg-emerald-50 text-[#166534] group-hover:bg-emerald-100'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-1 sm:pl-16">
                    <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
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
    </section>
  );
}
