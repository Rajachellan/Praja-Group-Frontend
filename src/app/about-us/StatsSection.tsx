'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Clock, CheckCircle2, Building2, Users } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ElementType;
  targetValue: number;
  label: string;
  sublabel: string;
  badge: string;
  borderColor: string;
  accentGlow: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'exp',
    icon: Clock,
    targetValue: 15,
    label: 'Years Experience',
    sublabel: 'Established in 2010',
    badge: 'Prajha Legacy',
    borderColor: 'group-hover:border-[#F37924]',
    accentGlow: 'from-[#F37924]/20 to-transparent',
  },
  {
    id: 'completed',
    icon: CheckCircle2,
    targetValue: 106,
    label: 'Completed Projects',
    sublabel: 'Civil & Infrastructure',
    badge: 'Track Record',
    borderColor: 'group-hover:border-[#166534]',
    accentGlow: 'from-[#166534]/20 to-transparent',
  },
  {
    id: 'ongoing',
    icon: Building2,
    targetValue: 4,
    label: 'Ongoing Projects',
    sublabel: 'Active Site Developments',
    badge: 'Live Operations',
    borderColor: 'group-hover:border-amber-500',
    accentGlow: 'from-amber-500/20 to-transparent',
  },
  {
    id: 'workforce',
    icon: Users,
    targetValue: 97,
    label: 'Global Workers',
    sublabel: 'Skilled Engineers & Labor',
    badge: 'Expert Team',
    borderColor: 'group-hover:border-blue-500',
    accentGlow: 'from-blue-500/20 to-transparent',
  },
];

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StatsSection() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    exp: 0,
    completed: 0,
    ongoing: 0,
    workforce: 0,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const obj = { exp: 0, completed: 0, ongoing: 0, workforce: 0 };
      gsap.to(obj, {
        exp: 15,
        completed: 106,
        ongoing: 4,
        workforce: 97,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          setCounts({
            exp: Math.floor(obj.exp),
            completed: Math.floor(obj.completed),
            ongoing: Math.floor(obj.ongoing),
            workforce: Math.floor(obj.workforce),
          });
        },
      });

      gsap.fromTo(
        '.about-stat-card',
        { opacity: 0, y: 35, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 overflow-hidden border-y border-emerald-100"
    >
      {/* Background Soft Glow Meshes */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#F37924]/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(22, 101, 52, 0.08) 1px, transparent 0)',
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
              PROUD OF OUR NUMBERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ letterSpacing: '1px', lineHeight: '58px' }}>
            Milestones Built on <span className="text-[#166534]">Trust & Excellence</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Over a decade of civil engineering mastery, transparent project delivery, and steadfast commitment to client satisfaction across Tamil Nadu.
          </p>
        </div>

        {/* 4 Animated Stats Cards Grid - Light Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            const currentVal = counts[stat.id] || 0;
            const percentage = Math.round((currentVal / stat.targetValue) * 100);

            return (
              <div
                key={stat.id}
                className={`about-stat-card p-8 rounded-3xl bg-white border border-slate-200/90 ${stat.borderColor}
                transition-all duration-700 ease-out transform group hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Subtle Top Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Top Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                      {stat.badge}
                    </span>
                  </div>

                  {/* Animated Counter Number */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl   font-bold">
                      {currentVal}
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-[#F37924]">
                      +
                    </span>
                  </div>

                  {/* Label & Sublabel */}
                  <h3 className="text-base font-bold text-[#166534] tracking-wide uppercase mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Animated Bottom Progress Line */}
                {/* <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <span>Target Reached</span>
                    <span className="text-[#166534] font-mono">{percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#166534] to-[#F37924] rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div> */}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
