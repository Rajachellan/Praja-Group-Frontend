'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowRight,
  Building2,
  Clock,
  Award,
  Users,
} from 'lucide-react';
import HeroVisual from './HeroVisual';
import StatsSection from './StatsSection';

const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { ssr: false }
);

export default function Herosection() {
  const [enableTyping, setEnableTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableTyping(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Clock, num: 17, suffix: '+', label: 'Years of Experience' },
    { icon: Award, num: 106, suffix: '+', label: 'Completed Projects' },
    { icon: Building2, num: 4, suffix: '+', label: 'Ongoing Projects' },
    { icon: Users, num: 500, suffix: '+', label: 'Happy Customers' },
  ];

  return (
    <section className="relative w-full bg-[#FBFBFB] py-10 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[640px]">
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10 pt-2 lg:pt-4">
            <div>
              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 animate-ping"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce"></span>
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
                  BUILDING INDIA. POWERING INDIA.
                </span>
              </div>

              {/* Heading — painted immediately in SSR without JS opacity delay */}
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-black leading-[1.12] mb-5 heading">
                Leading Construction & Real Estate Developers in{' '}
                <span className="text-[#166534] relative inline-block">Tamilnadu</span>
              </h1>

              <h2
                className="hero-sub hero-heading italic text-[16px] font-bold mb-5 min-h-[26px]"
                style={{ letterSpacing: '1px' }}
              >
                We Deliver{' '}
                {enableTyping ? (
                  <TypeAnimation
                    sequence={[
                      'Premium Real Estate Solutions.',
                      2000,
                      'Residential Property Experts.',
                      2000,
                      'Your Trusted Property Partner.',
                      2000,
                      'Turnkey Property Solutions.',
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="animation-text"
                  />
                ) : (
                  <span className="animation-text">Premium Real Estate Solutions.</span>
                )}
              </h2>

              <div className="hero-desc flex flex-col gap-3 mb-8">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                  With 17+ years of experience, 106+ completed projects, and a dedicated team of experts, we are redefining the construction and real estate industry in Tamilnadu.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                  From residential and commercial, industrial & infrastructure projects, we bring visionary ideas to life.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:gap-5 gap-2 mb-10">
                <Link href="/contact-us/" className="hero-cta get-in-touch-btn group">
                  <span>Get in Touch With Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* <Link href={'/villa-in-sriperumbudur'} aria-label="Villa For Sale" className="hero-cta sale-btn">
                  <div className="w-7 h-7 rounded-full bg-emerald-100/80 border border-emerald-600/30 flex items-center justify-center text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-all duration-200 shrink-0">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <span>Villa for sale</span>
                </Link> */}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <HeroVisual />
        </div>

        <StatsSection stats={stats} />
      </div>
    </section>
  );
}
