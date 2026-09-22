'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home,
  Building2,
  HardHat,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Award,
} from 'lucide-react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrustExpertsSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        '.experts-visual',
        { opacity: 0, x: -30, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
      )
        .fromTo(
          '.experts-header',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          '-=0.2'
        )
        .fromTo(
          '.expertise-card',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' },
          '-=0.15'
        )
        .fromTo(
          '.experts-cta',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          '-=0.15'
        );
    },
    { scope: containerRef }
  );

  const expertiseItems = [
    {
      title: 'Residential Developments',
      subtitle: 'Luxurious & affordable homes',
      description: 'Crafting thoughtful living spaces designed for modern comfort, sustainability, and everlasting family memories.',
      icon: Home,
      badge: 'Residential',
    },
    {
      title: 'Commercial Spaces',
      subtitle: 'High-end office buildings & retail centers',
      description: 'Developing state-of-the-art commercial hubs engineered to foster business growth and corporate excellence.',
      icon: Building2,
      badge: 'Commercial',
    },
    {
      title: 'Construction & Infrastructure',
      subtitle: 'Robust solutions for businesses',
      description: 'End-to-end turnkey construction and heavy infrastructure built with unwavering precision and superior materials.',
      icon: HardHat,
      badge: 'Infrastructure',
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-gradient-to-b from-[#FBFBFB] via-white to-[#F0F7F4]/40 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Ambient background blur elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#F37924]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: Visual Graphic ================= */}
          <div className="experts-visual lg:col-span-6 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[580px] group">
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#166534]/15 via-emerald-200/20 to-[#F37924]/10 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Main Visual Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-sm border border-emerald-900/10 shadow-[0_20px_50px_-15px_rgba(15,45,36,0.15)] transition-all duration-300 group-hover:shadow-[0_25px_60px_-12px_rgba(22,101,52,0.22)]">
                <Image
                  src="/experts-visual.png"
                  alt="Prajha Group Architectural Landmarks and City Developments"
                  width={680}
                  height={580}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Badge 1: Quality Guarantee */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-100 shadow-lg flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-emerald-900">
                      Uncompromising
                    </span>
                    <span className="block text-xs font-bold text-gray-700">
                      Quality Standard
                    </span>
                  </div>
                </div>

                {/* Floating Badge 2: Completed Landmark Badge */}
                <div className="absolute bottom-6 right-6 bg-[#0F2D24]/90 backdrop-blur-md text-white px-5 py-3 rounded-2xl border border-emerald-500/30 shadow-xl flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F37924] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white">
                      106+ Completed
                    </span>
                    <span className="block text-[11px] font-medium text-white/75">
                      Landmark Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Content & Expertise List ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            
            <div className="experts-header">
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm" style={{alignSelf:"flex-start"}}>
                {/* Animated Dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 animate-ping"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce"></span>
                </span>

                {/* Badge Text */}
                <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.15em] text-[#0F2D24]">
                  Trusted Industry Leadership
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.18] mb-4" style={{letterSpacing:"2px"}}>
                Trust Us – <span className="text-[#166534] relative inline-block">We’re Experts</span>
              </h2>

              {/* Subtitle Paragraph */}
              <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
                At <strong className="text-[#166534] font-bold">Prajha Group</strong>, we don’t just build structures – we create landmarks. Our expertise spans across:
              </p>
            </div>

            {/* 3 Core Expertise Cards */}
            <div className="flex flex-col gap-4 mb-9">
              {expertiseItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="expertise-card group relative bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#166534]/30 transition-all duration-300 flex items-start gap-4 sm:gap-5"
                  >
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-[#0F2D24] group-hover:text-[#166534] transition-colors">
                          {item.title}
                        </h3>
                        <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100/60 text-[#166534]">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-emerald-800/90 mb-1">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Small Checkmark Indicator */}
                    <div className="shrink-0 text-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="experts-cta">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center gap-3 bg-[#166534] hover:bg-[#115e2e] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/35 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
              >
                <span>Know More About Prajha Group</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
