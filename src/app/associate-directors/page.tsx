'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building2,
  Landmark,
  ArrowRight,
  PhoneCall,
  Mail,
  CheckCircle2,
  Briefcase,
  Users,
  Award,
  Globe,
  Handshake,
} from 'lucide-react';

interface ProgramHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  highlights: string[];
}

const PROGRAM_HIGHLIGHTS: ProgramHighlight[] = [
  {
    id: 'strategic-partnership',
    title: 'Strategic Leadership Partnership',
    subtitle: 'Co-Lead High-Yield Property Ventures',
    description:
      'As an Associate Director, you collaborate with Prajha Group leadership to identify, evaluate, and direct premium residential and commercial developments across Chennai and Tamil Nadu.',
    badge: 'Executive Level',
    icon: Handshake,
    highlights: [
      'Direct involvement in project acquisition & strategic decision-making',
      'Attractive equity & revenue-sharing partnership models',
      'Access to Prajha Group’s 15+ years of operational & EPC expertise',
    ],
  },
  {
    id: 'deal-structuring',
    title: 'Joint Venture & Deal Structuring',
    subtitle: 'Maximize Land & Project Capital Potential',
    description:
      'Structure high-value Joint Venture (JV) deals with landowners, investors, and corporate clients, backed by CMDA/DTCP legal approvals and transparent BOQ project management.',
    badge: 'High Value Ventures',
    icon: Briefcase,
    highlights: [
      'Structured JV agreements with legal & financial transparency',
      'Co-brand and manage premier residential layouts & commercial hubs',
      'End-to-end execution support from architecture to handover',
    ],
  },
  {
    id: 'network-expansion',
    title: 'Network & Portfolio Expansion',
    subtitle: 'Scale Real Estate Operations Rapidly',
    description:
      'Leverage Prajha Group’s brand legacy, marketing ecosystem, and investor network to scale your real estate footprint and achieve substantial financial growth.',
    badge: 'Growth Ecosystem',
    icon: Users,
    highlights: [
      'Dedicated marketing, sales, and lead-generation support',
      'Exclusive access to pre-launch layouts and prime land banks',
      'Long-term asset building and recurring portfolio yields',
    ],
  },
];

export default function AssociateDirectorsPage() {
  const [activeHighlight, setActiveHighlight] = useState<string>(PROGRAM_HIGHLIGHTS[0].id);
  const selectedHighlightData = PROGRAM_HIGHLIGHTS.find((h) => h.id === activeHighlight) || PROGRAM_HIGHLIGHTS[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F37924] selection:text-white overflow-x-hidden">
      
      {/* 1. Hero Section & Breadcrumb */}
      <section className="relative py-10 lg:py-20 bg-gradient-to-b from-[#F4F8F6] via-white to-[#F8FAFC] border-b border-slate-100 overflow-hidden">
        {/* Ambient Glow Meshes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-20 w-[450px] h-[450px] rounded-full bg-[#F37924]/5 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15, 45, 36, 0.05) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-[#166534] transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">Joint Ventures</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F37924] font-bold">Associate Directors</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Badge Tagline */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F2D24]">
                  ASSOCIATE DIRECTORS PROGRAM • PRAJHA GROUP
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-black leading-[1.25]">
                Become an <span className="text-[#166534]">Associate Director</span> <br className="hidden sm:inline" />
                in Real Estate Excellence
              </h1>

              {/* Sub-headline Pill */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-emerald-50/30 border-l-4 border-[#F37924] bg-white shadow-sm">
                <Sparkles className="w-5 h-5 text-[#F37924] shrink-0" />
                <h2 className="text-[14px] sm:text-[15px] font-bold text-slate-800 italic">
                  Leadership Partnership • Revenue Sharing • High-Value Projects
                </h2>
              </div>

              {/* Overview Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Prajha Group invites visionary leaders, real estate professionals, and business strategists to join us as Associate Directors. Partner with an established brand with 15+ years of experience and 106+ completed projects, and drive landmark developments across Tamil Nadu.
              </p>

              {/* Quick Key Highlights Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-all flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 leading-snug">Executive Leadership</p>
                    <p className="text-[11px] text-slate-500 font-medium">Co-direct strategic projects</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-all flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#F37924] flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 leading-snug">Profit & Revenue Share</p>
                    <p className="text-[11px] text-slate-500 font-medium">Lucrative return models</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 leading-snug">Proven Brand Legacy</p>
                    <p className="text-[11px] text-slate-500 font-medium">106+ Projects Delivered</p>
                  </div>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 w-full">
                <Link
                  href="#contact-director-desk"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider text-center w-full sm:w-auto shrink-0"
                  style={{ letterSpacing: '1px' }}
                >
                  <span>Apply for Associate Directorship</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924] shrink-0" />
                </Link>

                <a
                  href="tel:+919499933461"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm text-center w-full sm:w-auto shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Call Director Desk</span>
                </a>
              </div>

            </div>

            {/* Right Hero Visual Image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/commercial-invest.png"
                  alt="Prajha Group Associate Directors Leadership"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D24] via-[#0F2D24]/30 to-transparent opacity-90" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#166534]">
                      EXECUTIVE PARTNERSHIP
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F37924] animate-ping" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Lead Regional Real Estate Expansion
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Collaborate directly with Prajha Group to co-develop residential, commercial, and land ventures.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Pillars / Benefits Section */}
      <section className="py-10 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
                PROGRAM ADVANTAGES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Why Join as an <span className="text-[#166534]">Associate Director?</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We empower our Associate Directors with complete operational support, industry authority, and exceptional growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Established Brand Credibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Benefit from Prajha Group’s strong goodwill, CMDA/DTCP approvals, and 15+ years reputation in property development.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>106+ Completed Projects</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  High Revenue Share
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Earn competitive commission, profit margins, and equity stakes on joint venture developments and project acquisitions.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>Lucrative ROI</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Full Operational Backing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Our in-house architecture, legal, EPC construction, and marketing teams execute your projects seamlessly.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>End-to-End Execution</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Regional Leadership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Lead development initiatives in prime high-growth corridors across Chennai, Kanchipuram, Chengalpattu, and beyond.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>Prime TN Corridors</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Program Highlights Tabs Section */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-white via-[#F0FDF4]/40 to-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
                ENGAGEMENT MODELS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Associate Director <span className="text-[#166534]">Collaboration Focus</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how you can partner with Prajha Group to structure deals, expand networks, and build high-value assets.
            </p>
          </div>

          {/* Model Selection Tabs */}
          <div className="flex flex-nowrap sm:flex-wrap items-center sm:justify-center justify-start gap-3 mb-10 lg:mb-12 overflow-x-auto pb-3 sm:pb-0 scrollbar-none px-2 max-w-full">
            {PROGRAM_HIGHLIGHTS.map((item) => {
              const isSelected = activeHighlight === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveHighlight(item.id)}
                  className={`px-6 py-3 rounded-2xl text-[14px] font-bold transition-all duration-300 cursor-pointer flex items-center gap-2.5 shrink-0 whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#166534] text-white shadow-lg shadow-[#166534]/25 scale-105'
                      : 'bg-white text-slate-700 hover:text-[#166534] border border-slate-200 hover:border-emerald-300 shadow-sm'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F37924]' : 'text-[#166534]'}`} />
                  <span style={{ letterSpacing: '1px' }}>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Model Card */}
          <div className="bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] rounded-3xl p-8 sm:p-12 border border-emerald-200/90 shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#166534] text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
                  <span style={{ letterSpacing: '1px' }}>Category: {selectedHighlightData.title}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-black">
                  {selectedHighlightData.title}
                </h3>

                <p className="text-[13px] font-bold text-[#F37924]" style={{ letterSpacing: '1px' }}>
                  {selectedHighlightData.subtitle}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {selectedHighlightData.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="#contact-director-desk"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                    style={{ letterSpacing: '1px' }}
                  >
                    <span>Enquire About Directorship</span>
                    <ArrowRight className="w-4 h-4 text-[#F37924]" />
                  </Link>
                </div>
              </div>

              {/* Right Features */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" /> Key Responsibilities & Benefits
                </h4>

                <div className="space-y-3">
                  {selectedHighlightData.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 leading-snug font-semibold">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Contact & Application Section */}
      <section id="contact-director-desk" className="py-10 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] border border-emerald-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20" style={{ alignSelf: 'flex-start' }}>
                <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
                <span>Join Executive Leadership</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D24] leading-snug">
                Ready to Join Prajha Group as an Associate Director?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Connect directly with our board of directors to discuss partnership criteria, revenue-sharing models, and upcoming project portfolios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+919499933461"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider"
                style={{ letterSpacing: '1px' }}
              >
                <span>Call +91 94999 33461</span>
                <ArrowRight className="w-4 h-4 text-[#F37924]" />
              </a>

              <a
                href="mailto:prajhaconnect@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#166534]" />
                <span>Email Director Desk</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
