'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  Sparkles,
  Briefcase,
  ArrowRight,
  PhoneCall,
  Mail,
} from 'lucide-react';
import Footer from '../components/Footer';
import Strength from './Strength';
import StatsSection from './StatsSection';
import VisionMissionSection from './MissionandVission'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F37924] selection:text-white overflow-x-hidden">
      
      {/* 1. Hero Section & Breadcrumb */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F4F8F6] via-white to-[#F8FAFC] border-b border-slate-100 overflow-hidden">
        {/* Ambient Decorative Glows */}
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
            <span className="text-[#F37924] font-bold">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge Tagline */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F2D24]">
                  ENGINEERING & CONSTRUCTION EXCELLENCE SINCE 2010
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-black leading-[1.12]">
                Prajha Group of <br className="hidden sm:inline" />
                <span className="text-[#166534]">Company</span>
              </h1>

              {/* Sub-headline Pill */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-emerald-50/30 border-l-4 border-[#F37924] bg-white shadow-sm">
                <Sparkles className="w-5 h-5 text-[#F37924] shrink-0" />
                <h2 className="text-[15px] sm:text-[16px] font-bold text-slate-800 italic">
                  EPC Contracting • Infrastructure & Building • Skill Academies & Social Trust
                </h2>
              </div>

              {/* Overview Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Prajha Group of Company is a Chennai-based premier firm specializing in Engineering Procurement Contracting (EPC), Infrastructure & Building Construction, Building Maintenance Services, Empowering Challenged Individuals, Skill Development Academies, and the Prajha Trust for Social Responsibilities.
              </p>

              {/* Founder Spotlight Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-white via-[#F0FDF4]/50 to-white border border-emerald-200/80 shadow-md relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#166534] text-white flex items-center justify-center shrink-0 font-bold text-lg shadow-md">
                    <Briefcase className="w-6 h-6 text-[#F37924]" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Founded in 2010 by Mr. P.R. Babu Prabakaran
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-[#166534] text-[10px] font-bold uppercase">
                        B.E., M.B.A.
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      Started by Mr. P.R. Babu Prabakaran, an Engineering Graduate holding a Master’s Degree in Business Administration, Prajha Group has rapidly emerged as one of the fastest culture-growing construction, maintenance, and infrastructure companies in Tamil Nadu.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#contact-us"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider"
                >
                  <span>Connect With Our Leadership</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924]" />
                </Link>

                <a
                  href="tel:+919499933461"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  <PhoneCall className="w-4 h-4 text-[#166534]" />
                  <span>+91 94999 33461</span>
                </a>
              </div>

            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/about-us-hero.png"
                  alt="Prajha Group Corporate Headquarters"
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
                      PRAJHA PROPERTIES & PROJECTS
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F37924] animate-ping" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Integrated EPC & Infrastructure Contracting
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Delivering high-precision building construction, civil maintenance, skill academies, and social empowerment across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Proud of Our Numbers (Stats Counter Bar) */}
      <StatsSection/>

      {/* 3. PRAJHA's 4 Core Strengths */}
      <Strength/>

      {/* 4. Vision & Mission Cards Section */}
      <VisionMissionSection/>

      {/* 5. Enquiry Now & Luxury Residential Life CTA Card */}
      <section id="contact-us" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] border border-emerald-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col gap-5 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20" style={{alignSelf:"flex-start"}}>
                <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
                <span>Enquiry Now</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2D24]" style={{lineHeight:"50px"}}>
                Find Out All the Ways to Enjoy Luxury Residential Life
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Dedicated to quality, and an unyielding commitment to client satisfaction across every infrastructure and building project we undertake.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="tel:+919499933461"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider"
                style={{ letterSpacing: '1px' }}
              >
                <span>Call Our Engineers</span>
                <ArrowRight className="w-4 h-4 text-[#F37924]" />
              </Link>

              <a
                href="mailto:info@prajhagroup.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#166534]" />
                <span>Email Us</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Site Footer */}
      <Footer />

    </div>
  );
}