'use client';

import React, { useState, useRef } from 'react';
import { LucideIcon, Award, Building2, Clock, Users } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  icon?: LucideIcon;
  num: number;
  suffix: string;
  label: string;
}

interface StatsSectionProps {
  stats?: StatItem[];
}

const DEFAULT_STATS: StatItem[] = [
  { icon: Clock, num: 15, suffix: '+', label: 'Years of Experience' },
  { icon: Award, num: 106, suffix: '+', label: 'Completed Projects' },
  { icon: Building2, num: 25, suffix: '+', label: 'Ongoing Projects' },
  { icon: Users, num: 500, suffix: '+', label: 'Happy Customers' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const numRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!numRef.current) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: numRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      },
    });
  }, { scope: numRef, dependencies: [target] });

  return (
    <span ref={numRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection({
  stats = DEFAULT_STATS,
}: StatsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const statsList = stats && stats.length > 0 ? stats : DEFAULT_STATS;

  return (
    <div
      ref={containerRef}
      className="relative w-full my-8 sm:my-10 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0F2D24] to-[#166534] shadow-[0_30px_60px_-24px_rgba(5,26,17,0.45)]"
    >
      <svg
        className="hidden sm:block absolute -right-16 -top-24 w-72 h-72 text-white/5 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 4" strokeLinecap="round" />
      </svg>

      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-y-7 sm:gap-y-0 px-6 sm:px-8 lg:px-10 py-8 sm:py-9">
        {statsList.map((stat, idx) => {
          const Icon = stat.icon || Award;
          return (
            <div
              key={idx}
              className={`stat-card flex items-start gap-3 ${
                idx % 2 !== 0 ? 'justify-self-end sm:justify-self-auto' : ''
              } ${idx !== 0 ? 'sm:pl-5 lg:pl-6 sm:border-l sm:border-white/15' : ''}`}
            >
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/85 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-[1.45rem] font-bold text-white leading-none tracking-tight">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                </span>
                <span className="text-[12px] sm:text-[13px] font-medium text-white/60 mt-2 leading-snug">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}