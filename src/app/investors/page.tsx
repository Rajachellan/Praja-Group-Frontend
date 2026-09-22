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
  PieChart,
  Landmark,
  ArrowRight,
  PhoneCall,
  Mail,
  CheckCircle2,
  DollarSign,
  Briefcase,
  Layers,
  Award,
  Globe,
  Coins,
} from 'lucide-react';
import Footer from '../components/Footer';

interface InvestmentModel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  highlights: string[];
}

const INVESTMENT_MODELS: InvestmentModel[] = [
  {
    id: 'land-investments',
    title: 'Land Investments',
    subtitle: 'High-Appreciation Land & Joint Ventures',
    description:
      'Partner with us on strategic land acquisition, CMDA/DTCP layout approvals, and prime parcel developments across rapidly expanding corridors in Chennai and Tamil Nadu.',
    badge: 'High Land Equity',
    icon: Landmark,
    highlights: [
      'Strategic land acquisition in high-growth Chennai corridors',
      'Joint Venture (JV) partnership models with clear profit sharing',
      'CMDA / DTCP approved residential & commercial land layouts',
    ],
  },
  {
    id: 'buildings-projects',
    title: 'Buildings & Projects',
    subtitle: 'Residential Flats, Villas & Commercial Towers',
    description:
      'Invest directly into active residential flat developments, luxury independent villas, gated communities, and commercial corporate parks with pre-launch pricing advantages.',
    badge: 'Pre-Launch & Ready Units',
    icon: Building2,
    highlights: [
      'Pre-launch pricing discounts on premium residential flats',
      'Luxury villa developments with rapid rental yield potential',
      'Commercial corporate hubs in prime Chennai business districts',
    ],
  },
  {
    id: 'project-funding',
    title: 'Project Funding',
    subtitle: 'Capital Partnership & Debt/Equity Funding',
    description:
      'Provide project capital backing for large-scale EPC infrastructure developments. Benefit from structured return rates, locked timelines, and asset-backed security.',
    badge: 'Structured Capital Returns',
    icon: Coins,
    highlights: [
      'Asset-backed project funding with contractual return rates',
      'Structured milestone disbursement & transparent BOQ audits',
      'Flexible equity & debt investment structures for angel investors',
    ],
  },
];

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InvestorsPage() {
  const [activeModel, setActiveModel] = useState<string>(INVESTMENT_MODELS[0].id);
  const selectedModelData = INVESTMENT_MODELS.find((m) => m.id === activeModel) || INVESTMENT_MODELS[0];
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.inv-badge',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
        .fromTo(
          '.inv-title',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35 },
          '-=0.15'
        )
        .fromTo(
          '.inv-sub',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3 },
          '-=0.15'
        )
        .fromTo(
          '.inv-card',
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            stagger: 0.05,
            scrollTrigger: {
              trigger: '.inv-grid',
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F37924] selection:text-white overflow-x-hidden">
      
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
            <span className="text-[#F37924] font-bold">Investors</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Badge Tagline */}
              <div className="inv-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F2D24]">
                  PARTNER WITH PRAJHA GROUP • REAL ESTATE CAPITAL
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="inv-title text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-black leading-[1.25]">
                Invest with Us: <br className="hidden sm:inline" />
                <span className="text-[#166534]">Unlock Lucrative Opportunities</span> in Property Development
              </h1>

              {/* Sub-headline Pill */}
              <div className="inv-sub inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-emerald-50/30 border-l-4 border-[#F37924] bg-white shadow-sm">
                <Sparkles className="w-5 h-5 text-[#F37924] shrink-0" />
                <h2 className="text-[14px] sm:text-[15px] font-bold text-slate-800 italic">
                  Angel Investors • Project Funding • Joint Ventures • High ROI
                </h2>
              </div>

              {/* Overview Text */}
              <p className="text-gray-600 text-sm sm:text-base  max-w-2xl line-height-para">
                At Prajha Group, we believe in the power of collaboration and long-term partnerships. We are actively seeking investors, angel investors, and project funding partners to join us in our property development ventures. With our deep industry expertise and a track record of successful projects, we offer investors an opportunity to be part of high-growth developments in the thriving real estate market of Tamil Nadu.
              </p>

              {/* Quick Key Highlights Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-all flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 leading-snug">Invest In Pre-launch & Ready Units</p>
                    <p className="text-[11px] text-slate-500 font-medium">Early stage pricing</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-all flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#F37924] flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 leading-snug">Earn High ROI with Minimal Risk</p>
                    <p className="text-[11px] text-slate-500 font-medium">Asset-backed growth</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 leading-snug">Access Exclusive Opportunities</p>
                    <p className="text-[11px] text-slate-500 font-medium">Prime Tamil Nadu sites</p>
                  </div>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 w-full">
                <Link
                  href="#investor-enquiry"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider text-center w-full sm:w-auto shrink-0"
                  style={{ letterSpacing: '1px' }}
                >
                  <span>Discuss Investment Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924] shrink-0" />
                </Link>

                <a
                  href="tel:+919499933461"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm text-center w-full sm:w-auto shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-[#166534] shrink-0" />
                  <span>Call Investor Desk</span>
                </a>
              </div>

            </div>

            {/* Right Hero Visual Image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/investors-hero.png"
                  alt="Prajha Group Real Estate Investment Consultation"
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
                      CAPITAL APPRECIATION & YIELD
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F37924] animate-ping" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    High-Yield Real Estate Capital Ventures
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Unlocking lucrative returns across residential, commercial, and mixed-use real estate in Chennai.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Visual Property Showcase Grid */}
      <section className=" py-10 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-14 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto" style={{ alignSelf: 'center' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
            market assests and opportunities
            </span>
          </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold line-height" >
              Strategic Capital Opportunities in <span className="text-[#166534]">Chennai</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore high-growth real estate portfolios backed by solid demand and CMDA/DTCP approved master planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Showcase Card 1 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/skyline-chennai.png"
                  alt="Modern city skyline representing real estate management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#166534] text-[10px] font-bold uppercase tracking-wider">
                  Urban Master Planning
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors mb-2">
                    Modern City Skyline & Infrastructure Portfolio
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Modern city skyline representing real estate management and property management career & capital growth opportunities across Chennai's prime growth hubs.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#166534]">
                  <span>High Yield Potential</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924]" />
                </div>
              </div>
            </div>

            {/* Showcase Card 2 */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src="/commercial-invest.png"
                  alt="Prime commercial property investment opportunity in Chennai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#F37924] text-[10px] font-bold uppercase tracking-wider">
                  Commercial Real Estate
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors mb-2">
                    Prime Commercial Property Investment Opportunities
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Prime commercial property investment opportunity in Chennai for real estate investors and corporate property investors looking for stable rental income & long-term value appreciation.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#166534]">
                  <span>Corporate Grade Assets</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Why Invest with Us? (4 Core Pillars) */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-white via-[#F0FDF4]/40 to-slate-50 relative overflow-hidden border-b border-slate-200">
        
        {/* Background Mesh Glows */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#F37924]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
                INVESTOR ADVANTAGE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold line-height">
              Why Partner & Invest With <span className="text-[#166534]">Prajha Group?</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We offer investors a secure, transparent, and highly profitable avenue into Tamil Nadu's booming property development sector.
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
                  Proven Track Record
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  With years of experience and a portfolio of successful residential, commercial, and mixed-use projects, we have built a reputation for delivering quality developments on time and within budget.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>15+ Years Excellence</span>
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
                  Attractive Returns
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Our strategic locations, premium construction standards, and attention to market trends ensure that our projects generate high returns and strong capital appreciation for our investors.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>High Rental Yields</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Diverse Opportunities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  From land development to large-scale residential and commercial projects, we offer a range of investment options that fit different risk appetites and return expectations.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>Tailored Investment Models</span>
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
                  Strong Market Demand
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  The Tamil Nadu real estate market is growing rapidly, with high demand for residential, commercial, and mixed-use properties, ensuring a stable and profitable investment environment.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>Tamil Nadu Real Estate Boom</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Investment Opportunities to Collaborate (3 Investment Models) */}
      <section className=" py-10 lg:py-20 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16 space-y-4">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto" style={{ alignSelf: 'center' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
            colloboration models
            </span>
          </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold line-height">
              Investment Opportunities to <span className="text-[#166534]">Collaborate</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We offer multiple investment models to match your financial goals, risk appetite, and portfolio preferences.
            </p>
          </div>

          {/* Model Selection Tabs - Single row scrollable on mobile */}
          <div className="flex flex-nowrap sm:flex-wrap items-center sm:justify-center justify-start gap-3 mb-10 lg:mb-12 overflow-x-auto pb-3 sm:pb-0 scrollbar-none px-2 max-w-full">
            {INVESTMENT_MODELS.map((model) => {
              const isSelected = activeModel === model.id;
              const Icon = model.icon;
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`px-6 py-3 rounded-2xl text-[14px] font-bold transition-all duration-300 cursor-pointer flex items-center gap-2.5 shrink-0 whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#166534] text-white shadow-lg shadow-[#166534]/25 scale-105'
                      : 'bg-white text-slate-700 hover:text-[#166534] border border-slate-200 hover:border-emerald-300 shadow-sm'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F37924]' : 'text-[#166534]'}`} />
                  <span style={{letterSpacing:"1px"}}>{model.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Model Deep-Dive Card */}
          <div className="bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] rounded-3xl p-8 sm:p-12 border border-emerald-200/90 shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column Info */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#166534] text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
                  <span className='text-[13px]' style={{letterSpacing:"1px"}}>Model: {selectedModelData.title}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-black">
                  Collaborate in <span className="text-[#166534]">{selectedModelData.title}</span>
                </h3>

                <p className="text-[13px] font-bold text-[#F37924]" style={{letterSpacing:"1px"}}>
                  {selectedModelData.subtitle}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {selectedModelData.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="#investor-enquiry"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                    style={{ letterSpacing: '1px' }}
                  >
                    <span>Request Model Prospectus</span>
                    <ArrowRight className="w-4 h-4 text-[#F37924]" />
                  </Link>
                </div>
              </div>

              {/* Right Column Key Features */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" /> Strategic Benefits & Assurance
                </h4>

                <div className="space-y-3">
                  {selectedModelData.highlights.map((h, idx) => (
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

      {/* 5. Investor Contact & Consultation Banner */}
      <section id="investor-enquiry" className="py-10 lg:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] border border-emerald-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20" style={{ alignSelf: 'flex-start' }}>
                <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
                <span>Contact Us Today</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D24]" style={{ lineHeight: '50px' }}>
                Want to Grow Your Wealth Through Real Estate Investments?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Let’s discuss how you can partner with Prajha Group for secure, high-yield, and profitable property investments in Chennai and across Tamil Nadu.
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
                href="mailto:info@prajhagroup.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#166534]" />
                <span>Email Investor Team</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}