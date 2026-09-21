'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, HardHat, Building2, Settings } from 'lucide-react';

export default function ServicesSection() {
  const divisions = [
    {
      title: 'CONSTRUCTION',
      subtitle: 'Turnkey Residential, Commercial & Civil Infrastructure',
      description:
        'Custom architectural 3D design, structural engineering, and end-to-end turnkey construction of luxury villas, office buildings, and commercial spaces in Chennai.',
      image: '/service-construction.png',
      href: '/constructions',
      icon: HardHat,
      badge: 'Turnkey Building',
    },
    {
      title: 'DEVELOPERS',
      subtitle: 'CMDA & DTCP Approved Plots & Gated Townships',
      description:
        'Strategic land development, prime residential plot layouts, luxury villa enclaves, and Joint Venture landowner partnerships across high-growth corridors.',
      image: '/service-developers.png',
      href: '/developers',
      icon: Building2,
      badge: 'Approved Layouts',
    },
    {
      title: 'PROPERTY MANAGEMENT',
      subtitle: 'NRI Caretaking, Tenant Screening & Maintenance',
      description:
        'Complete asset protection under "Mr. Care Taker". Periodic photo/video site reports, verified tenant onboarding, rent collection, and facility maintenance.',
      image: '/service-property-management.png',
      href: '/property-management',
      icon: Settings,
      badge: 'Caretaking & NRI Care',
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#FBFBFB] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#166534]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F37924]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col gap-5 items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
             Core Expertise
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold  uppercase" style={{ letterSpacing: '1px', lineHeight: '58px' }}>
            OUR <span className='text-[#166534]'>SERVICES</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We specialize in a wide range of construction and real estate services, ensuring high-quality standards in every project we undertake.
          </p>
        </div>

        {/* 3 Core Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {divisions.map((division, idx) => {
            const Icon = division.icon;
            return (
              <Link
                key={idx}
                href={division.href}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  {/* Image Frame with Hover Zoom */}
                  <div className="relative w-full h-[240px] sm:h-[270px] overflow-hidden bg-gray-100">
                    <Image
                      src={division.image}
                      alt={`Prajha Group ${division.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D24]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase text-[#0F2D24] shadow-md flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#166534]" />
                      <span>{division.badge}</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold  uppercase tracking-wider group-hover:text-[#166534] transition-colors mb-2">
                      {division.title}
                    </h3>

                    <p className="text-xs font-bold text-[#F37924] mb-3" style={{letterSpacing:"1px"}}>
                      {division.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {division.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer inside Card */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 flex items-center justify-between border-t border-gray-100 mt-4">
                  <span className="text-xs font-bold text-[#166534] group-hover:text-[#0F2D24] transition-colors">
                    Explore Division Page
                  </span>

                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
