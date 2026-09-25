'use client';

import React from 'react';
import Image from 'next/image';
import {
  Home,
  CheckCircle2,
  MapPin,
  Tag,
  Maximize2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Key,
} from 'lucide-react';

interface VillaProjectOverviewProps {
  onEnquireClick: () => void;
}

export default function VillaProjectOverview({ onEnquireClick }: VillaProjectOverviewProps) {
  const specs = [
    { label: 'Status', value: 'Under Construction', icon: Clock, color: 'text-amber-500 bg-amber-50 border-amber-100' },
    { label: 'Built-Up Area', value: '1862 Sq. Ft', icon: Maximize2, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { label: 'Pricing', value: 'From ₹89 Lakhs Onwards', icon: Tag, color: 'text-orange-600 bg-orange-50 border-orange-100' },
    { label: 'Property Type', value: 'Luxury Independent Villa', icon: Home, color: 'text-blue-600 bg-blue-50 border-blue-100' },
    { label: 'Location', value: 'Kaduvancheri, Sriperumbudur', icon: MapPin, color: 'text-purple-600 bg-purple-50 border-purple-100' },
    { label: 'Ownership', value: 'Freehold Title', icon: Key, color: 'text-teal-600 bg-teal-50 border-teal-100' },
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[#f37924] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Prime Villa Offering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B24] font-heading">
            Select Your Ideal Home
          </h2>
          <p className="mt-3 text-gray-600 text-base font-body">
            Designed to elevate your everyday living with spacious 1862 Sq. Ft layouts, state-of-the-art infrastructure, 
            and unmatched investment growth potential.
          </p>
        </div>

        {/* Feature Container Grid */}
        <div className="bg-gradient-to-br from-[#062c19] to-[#0B3B24] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-emerald-900">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f37924]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-xl group">
                <Image
                  src="/sriperumbudur_villa_hero.png"
                  alt="Villa Elevation Sriperumbudur"
                  width={600}
                  height={420}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Yellow Feature Card Overlay (Matching screenshot design accent) */}
                <div className="absolute bottom-4 right-4 bg-[#f37924] text-white p-4 rounded-2xl shadow-xl max-w-[240px] text-left border border-orange-300/30">
                  <h4 className="font-bold text-sm text-white mb-1.5 flex items-center gap-1">
                    <Building className="w-4 h-4 text-amber-200" /> Key Features
                  </h4>
                  <ul className="text-xs space-y-1 text-orange-50">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-300" /> 3 Bedrooms + Hall</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-300" /> 1 Spacious Living Room</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-300" /> Guest House & Terrace</li>
                  </ul>
                </div>

                <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                  Kaduvancheri, Sriperumbudur
                </div>
              </div>
            </div>

            {/* Right Specifications Grid & Action */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase block mb-1">
                  Property Quick View
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  1862 Sq. Ft Luxury Villa
                </h3>
                <p className="text-emerald-100/80 text-sm mt-2 font-body">
                  Located in Kaduvancheri, Sriperumbudur — one of Kancheepuram’s fastest expanding hubs.
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specs.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-3 hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-white/10 text-amber-300 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-emerald-200/70 block">{item.label}</span>
                        <span className="text-sm font-semibold text-white">{item.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call out Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30">
                <h4 className="font-bold text-amber-300 text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#f37924]" /> Enquire Now – Limited Units Left!
                </h4>
                <p className="text-xs text-gray-200">
                  Make the smart move toward luxury living in one of Tamil Nadu’s fastest-growing towns.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onEnquireClick}
                  className="px-8 py-3.5 rounded-xl bg-[#f37924] hover:bg-[#e06810] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-orange-600/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                >
                  <span>Request Full Floor Plan & Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
