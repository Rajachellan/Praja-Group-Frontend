'use client';

import React, { useState, useEffect, useRef } from 'react';
import { LucideIcon, Award, Building2, Clock, Users } from 'lucide-react';

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

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1700;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection({
  stats = DEFAULT_STATS,
}: StatsSectionProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const statsList = stats && stats.length > 0 ? stats : DEFAULT_STATS;

  return (
    <div
      ref={containerRef}
      className="relative w-full my-8 sm:my-10 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0F2D24] to-[#166534] shadow-[0_30px_60px_-24px_rgba(5,26,17,0.45)]"
    >
      {/* Faint ambient ring — same motif as the hero, static here so the page's
          one orchestrated spin stays unique to the hero */}
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
              className={`flex items-start gap-3 ${
                idx % 2 !== 0 ? 'justify-self-end sm:justify-self-auto' : ''
              } ${idx !== 0 ? 'sm:pl-5 lg:pl-6 sm:border-l sm:border-white/15' : ''}`}
            >
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/85 shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-[1.45rem] font-bold text-white leading-none tracking-tight">
                  <AnimatedCounter target={stat.num} suffix={stat.suffix} isVisible={inView} />
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