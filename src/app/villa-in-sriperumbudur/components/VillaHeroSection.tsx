'use client';

import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Ruler,
  Compass,
  Zap,
  Phone,
  Home,
} from 'lucide-react';

interface VillaHeroSectionProps {
  onEnquireClick: () => void;
}

export default function VillaHeroSection({ onEnquireClick }: VillaHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBFBFB] text-gray-900 pt-10 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Background Decorative Soft Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] rounded-full bg-[#166534]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-[#f37924]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Badge (Matching Prajha Group Hero Theme) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce"></span>
          </span>
          <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
            PREMIUM LUXURY VILLAS • KADUVANCHERI, SRIPERUMBUDUR
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] font-heading">
              Premium Villas for Sale in{' '}
              <span className="text-[#166534] relative inline-block">
                Kaduvancheri, Sriperumbudur
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-body max-w-2xl">
              Discover your dream home in the serene surroundings of Kancheepuram. 
              These beautifully designed villas offer the perfect blend of comfort, space, and style. 
              Whether you’re looking to invest or settle down with your family, this is the perfect opportunity 
              to own a luxury villa in a heritage-rich and rapidly growing location.
            </p>

            {/* Specs Quick Glance Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#166534]/40 transition-colors">
                <div className="text-[#f37924] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5" /> Built-Up Area
                </div>
                <div className="text-gray-900 font-extrabold text-base sm:text-lg">1862 Sq. Ft</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#166534]/40 transition-colors">
                <div className="text-[#166534] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" /> Starting Price
                </div>
                <div className="text-gray-900 font-extrabold text-base sm:text-lg">From ₹89 Lakhs*</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#166534]/40 transition-colors col-span-2 sm:col-span-1">
                <div className="text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Status
                </div>
                <div className="text-gray-900 font-extrabold text-base sm:text-lg">Under Construction</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onEnquireClick}
                className="px-7 py-3.5 rounded-xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Enquire Now – Limited Units</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
              </button>

              <a
                href="tel:9500120231"
                className="px-6 py-3.5 rounded-xl bg-white border border-[#166534]/30 hover:border-[#166534] text-[#166534] font-semibold text-sm sm:text-base transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#f37924]" />
                <span>Call: 9500120231</span>
              </a>
            </div>

            {/* Quick Contact & Location Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#f37924]" />
                <span>Kaduvancheri, Sriperumbudur, Kancheepuram</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-700" />
                <span>Near Greenfield Airport & SIPCOT Hub</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Renders */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#166534]/20 via-emerald-100 to-[#f37924]/20 blur-lg"></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white p-2.5">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/sriperumbudur_villa_hero.png"
                    alt="Luxury Villa for Sale in Kaduvancheri Sriperumbudur"
                    width={650}
                    height={480}
                    className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Status Overlay Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-emerald-600/30 text-[#166534] px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Status: Under Construction</span>
                  </div>

                  {/* Floating Sq.Ft Pill Badge (Matching Original Yellow Pill Style) */}
                  <div className="absolute top-4 right-4 bg-[#f37924] text-white px-4 py-2 rounded-2xl shadow-xl font-bold text-sm tracking-wide flex items-center gap-2 border border-orange-300">
                    <Compass className="w-4 h-4" />
                    <span>1862 SQ. FT</span>
                  </div>

                  {/* Bottom Specs Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 text-gray-900 shadow-xl">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-bold text-base text-[#166534] font-heading">Luxury Independent Villa</h4>
                        <p className="text-xs text-gray-500">Kaduvancheri, Sriperumbudur</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Starting Price</span>
                        <span className="text-lg font-extrabold text-[#f37924]">₹89 Lakhs*</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center text-xs">
                      <div className="bg-emerald-50/60 py-1.5 rounded-lg border border-emerald-100">
                        <span className="text-[#166534] font-extrabold block">3 BHK</span>
                        <span className="text-[10px] text-gray-500">Bedrooms</span>
                      </div>
                      <div className="bg-emerald-50/60 py-1.5 rounded-lg border border-emerald-100">
                        <span className="text-[#166534] font-extrabold block">1862 Sq ft</span>
                        <span className="text-[10px] text-gray-500">Built-Up</span>
                      </div>
                      <div className="bg-emerald-50/60 py-1.5 rounded-lg border border-emerald-100">
                        <span className="text-[#166534] font-extrabold block">Gated</span>
                        <span className="text-[10px] text-gray-500">Community</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
