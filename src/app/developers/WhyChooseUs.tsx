'use client';

import React, { useState } from 'react';
import {
  Layers,
  Eye,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Award,
  FileCheck,
  Building2,
  HardHat,
} from 'lucide-react';
import Link from 'next/link';

interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: React.ElementType;
  badgeBg: string;
  iconColor: string;
  hoverBorder: string;
  details: string[];
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: 'end-to-end-expertise',
    title: 'End-to-End Expertise',
    subtitle: 'Ground-Up Project Care',
    description:
      'From the ground up, we provide all the services you need, from land acquisition and design to construction and final inspection.',
    tag: 'Turnkey Coverage',
    icon: Layers,
    badgeBg: 'bg-emerald-100/80',
    iconColor: 'text-[#166534]',
    hoverBorder: 'hover:border-[#166534]',
    details: [
      'Complete land acquisition, legal due diligence & feasibility guidance',
      'Architectural planning, 3D floor plans & structural engineering',
      'Turnkey civil construction & rigorous multi-tier quality control',
    ],
  },
  {
    id: 'cost-control-transparency',
    title: 'Cost Control & Transparency',
    subtitle: '100% Budget Clarity',
    description:
      'We offer detailed project costing, transparent budgets, and regular updates, so you always know where your project stands.',
    tag: 'Zero Hidden Costs',
    icon: Eye,
    badgeBg: 'bg-blue-100/80',
    iconColor: 'text-blue-700',
    hoverBorder: 'hover:border-blue-500',
    details: [
      'Itemized Bill of Quantities (BOQ) locked before project kickoff',
      'Contractual civil rates with no unexpected price escalations',
      'Regular financial reports and digital progress updates',
    ],
  },
  {
    id: 'timely-project-delivery',
    title: 'Timely Project Delivery',
    subtitle: 'On-Schedule Completion',
    description:
      'We understand the importance of deadlines in development. Our team is committed to delivering projects on schedule and within budget.',
    tag: 'On-Time Project Focus',
    icon: Clock3,
    badgeBg: 'bg-orange-100/80',
    iconColor: 'text-[#F37924]',
    hoverBorder: 'hover:border-[#F37924]',
    details: [
      'Structured project schedules with strict milestone tracking',
      'Proactive material procurement and labor resource management',
      'Contractual milestone commitments for rapid hand-over',
    ],
  },
  {
    id: 'strong-vendor-network',
    title: 'Strong Vendor Network',
    subtitle: 'Top Tier Materials & Labor',
    description:
      'With an extensive network of trusted suppliers, contractors, and subcontractors, we ensure that you get the best materials and the most skilled tradespeople for your project.',
    tag: 'Tier-1 Material Quality',
    icon: HeartHandshake,
    badgeBg: 'bg-[#F0FDF4]',
    iconColor: 'text-[#166534]',
    hoverBorder: 'hover:border-[#166534]',
    details: [
      'Direct procurement from Tata Tiscon, Ultratech & JSW Steel',
      'Vetted network of master civil tradesmen and subcontractors',
      'Competitive material rates and verified structural durability',
    ],
  },
  {
    id: 'compliance-permitting',
    title: 'Compliance & Permitting',
    subtitle: '100% Government Clearances',
    description:
      'We handle all necessary permits, licenses, and compliance issues, ensuring your project stays within regulatory boundaries without delay.',
    tag: 'CMDA / DTCP Sanctions',
    icon: ShieldCheck,
    badgeBg: 'bg-purple-100/80',
    iconColor: 'text-purple-700',
    hoverBorder: 'hover:border-purple-500',
    details: [
      'Complete handling of CMDA, DTCP & local body layout permits',
      'In-house legal advocate panel for title scrutiny & patta transfer',
      'RERA registration and environmental compliance management',
    ],
  },
];

export default function WhyChooseUs() {
  const [activePillar, setActivePillar] = useState<string>(PILLARS_DATA[0].id);

  const selectedItem = PILLARS_DATA.find((p) => p.id === activePillar) || PILLARS_DATA[0];

  return (
    <section id="why-choose-us" className="py-10 lg:py-20 bg-gradient-to-b from-white via-[#F0FDF4]/40 to-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Decorative Soft Background Meshes */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#F37924]/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(22, 101, 52, 0.08) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:gap-14 gap-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col lg:gap-6 gap-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto" style={{ alignSelf: 'center' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
              DEVELOPER ADVANTAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ letterSpacing: '1px', lineHeight: '58px' }}>
            Why Partner With <span className="text-[#166534]">Prajha Group?</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We empower developers and landowners through end-to-end expertise, strict cost controls, on-time delivery, top-tier vendor networks, and seamless government compliance.
          </p>
        </div>

        {/* 5 Core Developer Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS_DATA.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className='p-6 rounded-3xl bg-white border border-slate-200 
transition-all duration-300 ease-out 
hover:-translate-y-2 hover:shadow-xl hover:border-[#166534]/40
cursor-pointer flex flex-col justify-between relative group'>
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className='w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5'>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-wider border border-slate-200">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F2D24] mb-2 group-hover:text-[#166534] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-bold text-[#F37924] mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Deep-Dive Highlight Box */}
        <div className="bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] rounded-3xl p-8 sm:p-10 border border-emerald-200/90 shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#166534] text-white text-xs font-bold uppercase" style={{ letterSpacing: '2px' }}>
                <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
                <span>Pillar Breakdown: {selectedItem.title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                How We Deliver <span className="text-[#166534]">{selectedItem.title}</span>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg uppercase" style={{letterSpacing:"1px"}}
                >
                  <span>Discuss Your Project With Us</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924]" />
                </Link>
              </div>
            </div>

            {/* Right Column Checklist */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#166534]" /> Standard Commitments for [{selectedItem.title}]
              </h4>

              <div className="space-y-3">
                {selectedItem.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 leading-snug font-medium">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
