'use client';

import React from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  HardHat,
  Wrench,
  TrendingUp,
  Clock,
  CheckCircle2,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Strength() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.strength-header',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.strength-card',
        { opacity: 0, y: 20, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.strength-grid',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <>
      <section ref={containerRef} className="py-10 lg:py-20 bg-gradient-to-b from-white via-[#F0FDF4]/30 to-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="strength-header text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto" style={{ alignSelf: 'center' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
               unmatched capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug" style={{ letterSpacing: '1px' }}>
              PRAJHA's Core <span className="text-[#166534]">Strengths</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our competitive advantage rests upon four structural pillars that ensure technical precision, equipment availability, robust financing, and rapid execution.
            </p>
          </div>

          <div className="strength-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="strength-card p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                  <HardHat className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Engineers & Skilled Technicians
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  A highly qualified team of civil engineers, structural designers, and certified technicians supervising site operations with absolute rigor.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>Technical Excellence</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Wrench className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Large Pool of Equipment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  An extensive in-house fleet of modern earthmoving machinery, concrete mixers, cranes, and advanced surveying instruments for seamless site deployment.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>High Capacity Fleet</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Strong Financial Resources
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Solid capital foundation and financial liquidity ensuring uninterrupted material procurement, vendor payments, and continuous project momentum.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>Financial Stability</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#166534]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Speedy Execution of Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Optimized workflow schedules and stringent project management systems ensuring rapid, on-time project completion and handover.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#166534]">
                <span>On-Time Handover</span>
                <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
              </div>
            </div>

          </div>
        </div>
      </section>

        </>
    )
}

export default Strength