'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Grid,
  Layers,
  DoorClosed,
  Footprints,
  Sparkles,
  CheckCircle2,
  Award,
  ShieldCheck,
} from 'lucide-react';

export default function VillaSpecifications() {
  const [activeTab, setActiveTab] = useState('all');

  const specsList = [
    {
      id: 'tiles',
      category: 'Flooring & Wall Tiles',
      title: 'TILES',
      icon: Grid,
      badge: 'Vitrified & Anti-Skid',
      description:
        "Entire flat floor 2'x2' vitrified tiles (Johnson/KAG/Anuj/Orient Bell/Equivalent). In all bathrooms will be 1'x1' Anti-skid ceramic tiles on floor and wall tiles will be up to 7' height.",
      details: [
        "Main Flooring: 2'x2' Vitrified Tiles (Johnson / KAG / Anuj / Orient Bell / Equivalent)",
        "Bathroom Flooring: 1'x1' Anti-skid Ceramic Tiles",
        "Bathroom Wall Dado: Ceramic Tiles up to 7 feet height",
      ],
      color: 'border-l-emerald-600',
    },
    {
      id: 'windows',
      category: 'Fenestration & Security',
      title: 'WINDOWS',
      icon: Layers,
      badge: 'UPVC + MS Safety Grill',
      description:
        'All windows are UPVC sliding window with MS safety Grill.',
      details: [
        'High-grade UPVC Sliding Frames with clear float glass',
        'Heavy-duty Mild Steel (MS) safety grills for total security',
        'Weather-resistant, noise-reducing thermal insulation',
      ],
      color: 'border-l-amber-500',
    },
    {
      id: 'doors',
      category: 'Carpentry & Joinery',
      title: 'DOORS',
      icon: DoorClosed,
      badge: 'Teak Wood & WPC',
      description:
        'Main Doors: 1st quality Teak wood panel finished with polish. Bath Room: WPC Doors. Other Doors: Membrane doors with good quality teak frames.',
      details: [
        'Main Entrance: First Quality Teak Wood panel with rich polish finish & brass fittings',
        'Bathrooms: Waterproof WPC (Wood Plastic Composite) doors',
        'Bedrooms & Internal: Elegant Membrane doors with durable teak wood frames',
      ],
      color: 'border-l-blue-600',
    },
    {
      id: 'staircase',
      category: 'Access & Finishes',
      title: 'STAIRCASE',
      icon: Footprints,
      badge: 'Granite + SS Handrail',
      description:
        'Granite flooring with SS Handrail.',
      details: [
        'Step Treads & Risers: Premium Polished Natural Granite',
        'Railing & Handrail: Grade 304 Stainless Steel (SS) Railings',
        'Slip-resistant edge design for family safety',
      ],
      color: 'border-l-purple-600',
    },
  ];

  const filteredSpecs =
    activeTab === 'all'
      ? specsList
      : specsList.filter((s) => s.id === activeTab);

  return (
    <section className="py-20 bg-[#FBFBFB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#166534] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" /> Premium Construction Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B24] font-heading">
            Villa Specifications
          </h2>
          <p className="mt-3 text-gray-600 text-base font-body">
            Built using top-tier brand materials and meticulous architectural standards to ensure lifelong durability.
          </p>
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#166534] text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            All Specs
          </button>
          {specsList.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-[#166534] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Content Grid with Interior Image Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Spec Cards */}
          <div className="lg:col-span-7 space-y-6">
            {filteredSpecs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${item.color} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-[#166534]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-extrabold text-gray-900 font-heading">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-amber-50 text-[#f37924] border border-amber-200 text-xs font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed font-body mb-4 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Interior Card & Quality Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-gray-100">
                <Image
                  src="/sriperumbudur_villa_interior.png"
                  alt="Luxury Villa Interior Specification Showcase"
                  width={500}
                  height={380}
                  className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                  Interior Living Finish Visual
                </div>
              </div>

              <h4 className="text-lg font-bold text-gray-900 font-heading mb-2">
                Certified Premium Quality
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed mb-4 font-body">
                We use top-grade verified brands like Johnson, KAG, Orient Bell, and 1st quality polished Teak wood to guarantee flawless aesthetic longevity.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#166534] shrink-0" />
                <div>
                  <h5 className="font-bold text-xs text-[#166534] uppercase tracking-wider">
                    Structural & Material Warranty
                  </h5>
                  <p className="text-[11px] text-emerald-900">
                    Built under strict civil engineering supervision with seismic-resistant structural design.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
