'use client';

import React from 'react';
import {
  Maximize,
  ShieldCheck,
  MapPin,
  Trees,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function VillaHighlights() {
  const highlights = [
    {
      id: 'spacious',
      title: 'Spacious Design',
      metric: '1862 Sq. Ft',
      description:
        'Each villa spans 1862 sq. ft of well-planned living space, offering large living areas, bedrooms, kitchen, and private outdoor space. Ideal for families who value comfort, privacy, and functionality.',
      icon: Maximize,
      gradient: 'from-emerald-500 to-teal-700',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'construction',
      title: 'Premium Construction',
      metric: 'Top Quality',
      description:
        'Crafted with high-quality materials and modern architectural finesse, every corner of your villa reflects durability, structural strength, and luxury aesthetic elegance.',
      icon: ShieldCheck,
      gradient: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'location',
      title: 'Prime Location',
      metric: 'Fast-Growing Hub',
      description:
        'Situated in a fast-developing part of Kancheepuram, enjoy excellent connectivity to top schools, hospitals, shopping zones, religious sites, and main transport corridors.',
      icon: MapPin,
      gradient: 'from-blue-600 to-indigo-700',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'environment',
      title: 'Serene Environment',
      metric: 'Peaceful Living',
      description:
        'Experience calm, green living away from the noise and chaos of the city, while remaining seamlessly connected to all contemporary urban amenities.',
      icon: Trees,
      gradient: 'from-green-600 to-emerald-800',
      badgeBg: 'bg-green-50 text-green-700 border-green-200',
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#166534] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Architectural Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B24] font-heading">
            Project Highlights
          </h2>
          <p className="mt-3 text-gray-600 text-base font-body">
            Why Prajha Group’s Kaduvancheri Villa project stands out as the ultimate residential choice.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.badgeBg}`}>
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 font-heading mb-3 group-hover:text-[#166534] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#166534]">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-[#f37924]" /> Quality Verified
                  </span>
                  <span className="text-gray-400 group-hover:text-[#166534] transition-colors flex items-center gap-1">
                    Prajha Promise <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
