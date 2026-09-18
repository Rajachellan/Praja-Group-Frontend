'use client';

import React from 'react';
import Image from 'next/image';
import {
  Eye,
  Target,
  CheckCircle2,
  GraduationCap,
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
} from 'lucide-react';

export default function VisionMissionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F0FDF4]/30 to-slate-50 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F37924]/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(22, 101, 52, 0.08) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
              OUR GUIDING PRINCIPLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{ letterSpacing: '1px', lineHeight: '58px' }}>
            Dedicated to Quality, <span className="text-[#166534]">Commitment to Satisfaction</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Steered by ethical values and social responsibility, we build sustainable infrastructure while empowering communities across Tamil Nadu.
          </p>
        </div>

        {/* Vision & Mission Cards Grid with Relevant Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12">
          
          {/* 1. Vision Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534]/40 transition-all duration-500 overflow-hidden flex flex-col group">
            
            {/* Vision Image Frame */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
              <Image
                src="/vision-image.png"
                alt="Prajha Group Vision - Sustainable Housing Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              {/* Floating Badge Tag */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-md">
                <Eye className="w-4 h-4 text-[#F37924]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#166534]">
                  NATIONAL INFRASTRUCTURE GOAL
                </span>
              </div>

              {/* Bottom Image Overlay Title */}
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  Our Vision
                </h3>
              </div>
            </div>

            {/* Vision Body Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                "We strive towards leadership in NATIONAL INFRASTRUCTURE through an unerring focus on customer satisfaction. To provide shelter to everyone, in particular the Middle Income Group."
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Affordable & Quality Housing for Middle Income Families</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Sustainable Infrastructure & Green Living Communities</span>
                </div>
              </div>
            </div>

          </div>

          {/* 2. Mission Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534]/40 transition-all duration-500 overflow-hidden flex flex-col group">
            
            {/* Mission Image Frame */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
              <Image
                src="/mission-image.png"
                alt="Prajha Group Mission - Design Build Operate Transfer Execution"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              {/* Floating Badge Tag */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-md">
                <Target className="w-4 h-4 text-[#F37924]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#166534]">
                  WORLD-CLASS SERVICE EXECUTION
                </span>
              </div>

              {/* Bottom Image Overlay Title */}
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  Our Mission
                </h3>
              </div>
            </div>

            {/* Mission Body Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                "To provide world-class service in Building Infrastructure and Housing sector to become a leading player in the field of Design-Build-Operate-Transfer (DBOT)."
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-[#F37924] flex items-center justify-center shrink-0 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Turnkey Design-Build-Operate-Transfer (DBOT) Leadership</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-[#F37924] flex items-center justify-center shrink-0 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Uncompromised Civil Engineering & Structural Standards</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Special Social Initiatives Cards - Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Skill Academy */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#166534]/30 transition-all duration-300 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] flex items-center justify-center shrink-0 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0F2D24]">Academy for Skill Developments</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                Empowering youth and civil tradespeople through certified technical skill training programs.
              </p>
            </div>
          </div>

          {/* Prajha Trust */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#F37924]/30 transition-all duration-300 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37924] flex items-center justify-center shrink-0 shadow-sm">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0F2D24]">Prajha Trust for Social Responsibilities</h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                Empowering challenged individuals and conducting community welfare initiatives across Tamil Nadu.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}