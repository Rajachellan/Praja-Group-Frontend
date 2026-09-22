'use client';

import React from 'react';
import { ShieldCheck, Award, Handshake, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Values() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.values-header',
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
        '.value-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const valuesData = [
    {
      id: '01',
      title: 'Integrity',
      badge: 'Ethical & Transparent',
      description: 'We are committed to keeping our word and honouring our commitment.',
      icon: ShieldCheck,
      themeColor: '#166534',
      bgGradient: 'from-emerald-500/10 via-[#F0FDF4] to-transparent',
      borderColor: 'group-hover:border-[#166534]',
      badgeStyle: 'bg-emerald-100/80 text-[#166534] border-emerald-200',
      bullets: [
        'Unwavering Ethical Standards',
        'Transparent Operations & Contracts',
        'Honouring Every Promise to Clients',
      ],
    },
    {
      id: '02',
      title: 'Excellence',
      badge: 'Highest Standards',
      description: 'We passionately pursue the highest standards and strive to always excel.',
      icon: Award,
      badgeStyle: 'bg-amber-100/80 text-[#F37924] border-amber-200',
      themeColor: '#F37924',
      bgGradient: 'from-amber-500/10 via-amber-50/50 to-transparent',
      borderColor: 'group-hover:border-[#F37924]',
      bullets: [
        'Precision Structural Engineering',
        'Uncompromising Material Quality',
        'Continuous Skill & Innovation',
      ],
    },
    {
      id: '03',
      title: 'Trust',
      badge: 'Reliable Handover',
      description: 'We build trust by doing what we say and by delivering quality every time.',
      icon: Handshake,
      themeColor: '#166534',
      bgGradient: 'from-emerald-500/10 via-[#F0FDF4] to-transparent',
      borderColor: 'group-hover:border-[#166534]',
      badgeStyle: 'bg-emerald-100/80 text-[#166534] border-emerald-200',
      bullets: [
        '15+ Years Proven Track Record',
        'On-Time Handover Guarantee',
        'Dedicated Post-Handover Care',
      ],
    },
  ];

  return (
    <section ref={containerRef} className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#F4F8F6] to-slate-50 overflow-hidden border-b border-slate-200/80">
      {/* Background Glow Accents */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-[#166534]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#F37924]/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(22, 101, 52, 0.08) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="values-header text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#0F2D24]">
              OUR FOUNDATIONAL ETHOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-heading">
            Our <span className="text-[#166534]">Values</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are committed to delivering every project with uncompromising quality, transparent practices, and a deep sense of responsibility. From the initial vision to the final execution, we combine expertise, innovation, and attention to detail to create spaces that stand the test of time.
          </p>
        </div>

        {/* Core Values Cards Grid */}
        <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {valuesData.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className={`value-card group relative bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-lg hover:shadow-2xl ${item.borderColor} transition-all duration-500 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Watermark Number */}
                <span className="absolute -top-3 -right-2 text-7xl sm:text-8xl font-black text-slate-100 group-hover:text-emerald-50/70 transition-colors pointer-events-none select-none font-heading opacity-70">
                  {item.id}
                </span>

                <div>
                  {/* Card Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/80 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: item.themeColor }} />
                    </div>

                    <span className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border ${item.badgeStyle}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Value Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 font-heading group-hover:text-[#166534] transition-colors">
                    {item.title}
                  </h3>

                  {/* Core Value Statement Quote */}
                  <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold mb-6 p-4 rounded-2xl bg-slate-50/90 border-l-4 border-[#166534] group-hover:bg-[#F0FDF4]/60 transition-colors">
                    "{item.description}"
                  </blockquote>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    {item.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#166534]" style={{ color: item.themeColor }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Footer Accent */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-[#166534] transition-colors">
                  <span>PRAJHA COMMITMENT</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
