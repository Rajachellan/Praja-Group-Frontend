'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Play,
  Leaf,
  HardHat,
  Building2,
  Settings,
  Handshake,
  ChevronLeft,
  ChevronRight,
  Home,
  Clock,
  Award,
  Users,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeroVisual from './HeroVisual';
import StatsSection from './StatsSection';
import { TypeAnimation } from "react-type-animation";

export default function Herosection() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: Clock, num: 15, suffix: '+', label: 'Years of Experience' },
    { icon: Award, num: 106, suffix: '+', label: 'Completed Projects' },
    { icon: Building2, num: 25, suffix: '+', label: 'Ongoing Projects' },
    { icon: Users, num: 500, suffix: '+', label: 'Happy Customers' },
  ];

  return (
    <section className="relative w-full bg-[#FBFBFB] pt-4 sm:pt-6 lg:pt-8 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[640px]">
          {/* LEFT SIDE */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10 pt-2 lg:pt-4">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 animate-ping"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce"></span>
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">
                  BUILDING INDIA. POWERING LIVES.
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-black leading-[1.12] mb-5 heading">
                Leading Construction & Real Estate Developers in <span className="text-[#166534] relative inline-block">Chennai</span>
              </h1>

              <h2 className="hero-heading italic text-[16px] font-bold mb-5" style={{letterSpacing:"1px"}}>
                We Deliver{" "}
                <TypeAnimation
                  sequence={[
                    "Premium Real Estate Solutions.",
                    2000,
                    "Residential Property Experts.",
                    2000,
                    "Your Trusted Property Partner.",
                    2000,
                    "Turnkey Property Solutions.",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="animation-text"
                />
              </h2>

              <div className="flex flex-col gap-3 mb-8">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                  With 15+ years of experience, 106+ completed projects, and a dedicated team of experts, we are redefining the construction and real estate industry in Chennai.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                  From residential and commercial buildings to industrial and infrastructure projects, we bring visionary ideas to life.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:gap-5 gap-2 mb-10">
                <Link href="#projects" className="get-in-touch-btn group">
                  <span>Get in Touch With Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button aria-label="Villa For Sale" className="sale-btn">
                  <div className="w-7 h-7 rounded-full bg-emerald-100/80 border border-emerald-600/30 flex items-center justify-center text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-all duration-200 shrink-0">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <span>Villa for sale</span>
                </button>
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