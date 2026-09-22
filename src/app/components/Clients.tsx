'use client';

import React from 'react';
import Image from 'next/image';
import { Building2, Sparkles, Award } from 'lucide-react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Clients() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.clients-header',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.clients-marquee',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.clients-marquee',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const clientLogos = [
    { name: 'CSIR-SERC', src: '/clients/CSIR-SERClogo-2048x738.webp' },
    { name: 'CGHS', src: '/clients/cghs_logo-1.webp' },
    { name: 'Partner Brand 15', src: '/clients/client-15-300x142-1.webp' },
    { name: 'Partner Brand 16', src: '/clients/client-16-300x142-1-1.webp' },
    { name: 'Partner Brand 2', src: '/clients/client-2.jpg' },
    { name: 'Partner Brand 7', src: '/clients/client-7.webp' },
    { name: 'Flowserve', src: '/clients/flowserve.jpg' },
    { name: 'Gisbiz', src: '/clients/gisbiz.jpg' },
    { name: 'HCL Technologies', src: '/clients/hcl.jpg' },
    { name: 'ITC Limited', src: '/clients/itc-logo.webp' },
    { name: 'Johnson Controls', src: '/clients/johnson.jpg' },
    { name: 'State Bank of Hyderabad', src: '/clients/sbh.jpg' },
  ];

  // Double array for seamless loop
  const marqueeRow1 = [...clientLogos, ...clientLogos];
  const marqueeRow2 = [...clientLogos].reverse().concat([...clientLogos].reverse());

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 bg-gradient-to-b from-[#F4F8F6] via-white to-slate-50 overflow-hidden border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -ml-24 w-96 h-96 bg-[#166534]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -mr-24 w-96 h-96 bg-[#F37924]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="clients-header text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#0F2D24]">
              TRUSTED PARTNERSHIPS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-heading">
            Our Clients - <span className="text-[#166534]">Trusted by Over 100+ Global Brands</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Delivering high-precision civil engineering, infrastructure development, and EPC contracting for government institutions, tech leaders, and corporate enterprises.
          </p>
        </div>

      </div>

      {/* Infinite Marquee Container */}
      <div className="clients-marquee relative w-full overflow-hidden space-y-6">
        
        {/* Left Edge Dissolve Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F4F8F6] via-[#F4F8F6]/80 to-transparent z-20 pointer-events-none" />
        
        {/* Right Edge Dissolve Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1 (Forward Loop) */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 shrink-0">
            {marqueeRow1.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="w-44 sm:w-56 h-24 sm:h-28 rounded-2xl bg-white border border-slate-200/80 p-4 sm:p-5 flex items-center justify-center hover:border-[#166534]/50 hover:scale-105 transition-all duration-300 group shrink-0"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={80}
                    className="max-h-full max-w-full object-contain transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Reverse Loop) */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 shrink-0 [animation-direction:reverse]">
            {marqueeRow2.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="w-44 sm:w-56 h-24 sm:h-28 rounded-2xl bg-white border border-slate-200/80 p-4 sm:p-5 flex items-center justify-center hover:border-[#F37924]/50 hover:scale-105 transition-all duration-300 group shrink-0"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={80}
                    className="max-h-full max-w-full object-contain transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
