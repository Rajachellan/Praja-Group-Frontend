"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight, Leaf } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import hero1img from '../../../public/hero-1.jpg';
import hero2img from '../../../public/hero-2.jpg';
import hero3img from '../../../public/hero-3.jpg';
import hero4img from '../../../public/hero-4.jpg';

const heroImages = [
  {
    src: hero1img,
    alt: "Master-planned residential plots at golden hour",
    leftTag: "From land to landmark",
    leftDesc: "Creating value for generations",
    bottomLine1: "Spaces. Communities.",
    bottomLine2: "A brighter tomorrow",
  },
  {
    src: hero2img,
    alt: "Commercial skyscraper & modern office complex",
    leftTag: "Future-ready spaces",
    leftDesc: "Architectural excellence & design",
    bottomLine1: "Innovation & Growth.",
    bottomLine2: "Powering modern enterprise",
  },
  {
    src: hero3img,
    alt: "Luxury gated villa township community",
    leftTag: "Sanctuary of luxury",
    leftDesc: "Serene gated township living",
    bottomLine1: "Elegance & Comfort.",
    bottomLine2: "Living experience redefined",
  },
  {
    src: hero4img,
    alt: "Iconic real estate landmark tower",
    leftTag: "Shaping the horizon",
    leftDesc: "Iconic developments in Chennai",
    bottomLine1: "Strength & Vision.",
    bottomLine2: "Engineering tomorrow",
  },
];

export default function HeroVisual() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const currentSlide = heroImages[activeIndex] || heroImages[0];

  return (
    <div className="lg:col-span-6 relative flex items-center justify-center min-h-[600px] lg:min-h-full">
      {/* Local keyframes for Motion */}
      <style jsx global>{`
        @keyframes heroKenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }
        .swiper-slide-active .hero-ken-burns {
          animation: heroKenBurns 7s ease-out forwards;
        }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card-fade {
          animation: cardFadeIn 0.4s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ken-burns,
          .animate-card-fade {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background depth layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(#B8935F26 1px, transparent 1px), linear-gradient(90deg, #B8935F26 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(circle at 50% 42%, black 0%, transparent 68%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 42%, black 0%, transparent 68%)",
          }}
        />
        <div className="hidden sm:block absolute top-[8%] left-[6%] w-64 h-64 rounded-full bg-[#166534]/20 blur-3xl" />
        <div className="hidden sm:block absolute bottom-[6%] right-[8%] w-72 h-72 rounded-full bg-[#D4B573]/20 blur-3xl" />
      </div>

      {/* Arch frame */}
      <div
        className={`relative w-full max-w-[580px] lg:max-w-[620px] h-[560px] sm:h-[660px] lg:h-[740px] transition-all duration-700 ease-out ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
      >
        <div className="relative w-full h-full rounded-t-[220px] sm:rounded-t-[280px] lg:rounded-t-[340px] rounded-b-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(5,26,17,0.4)] border-[3px] border-white bg-gradient-to-br from-[#0F2D24] to-[#166534] z-10">
          {mounted && (
            <Swiper
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={900}
              loop={true}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{ nextEl: ".hero-next-btn", prevEl: ".hero-prev-btn" }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full hero-swiper"
              style={{ width: "100%", height: "100%" }}
            >
              {heroImages.map((img, index) => (
                <SwiperSlide
                  key={index}
                  className="relative w-full h-full overflow-hidden"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="hero-ken-burns object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051A11]/70 via-transparent to-[#051A11]/10 pointer-events-none" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Nav arrows */}
          <button
            aria-label="Previous slide"
            className="hero-prev-btn group absolute top-1/2 left-3 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-white/50 bg-white/5 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:bg-[#D4B573] hover:border-[#D4B573] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4B573] focus-visible:outline-offset-2 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 transition-colors group-hover:text-[#0F2D24]" />
          </button>
          <button
            aria-label="Next slide"
            className="hero-next-btn group absolute top-1/2 right-3 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-white/50 bg-white/5 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-300 hover:bg-[#D4B573] hover:border-[#D4B573] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4B573] focus-visible:outline-offset-2 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 transition-colors group-hover:text-[#0F2D24]" />
          </button>

          {/* Left info plinth — Dynamically updates per slide */}
          <div className="absolute top-[46%] left-0 z-20 bg-[#F7F4EC] pl-4 pr-5 py-4 max-w-[230px] border-l-[3px] border-[#B8935F] shadow-[0_16px_28px_-14px_rgba(5,26,17,0.35)] transition-all duration-300">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#166534]/10 shrink-0">
                <Leaf className="w-3.5 h-3.5 text-[#166534]" />
              </span>
              <div
                key={`leftTag-${activeIndex}`}
                className="text-[11px] uppercase tracking-[0.14em] text-[#166534]/90 font-semibold animate-card-fade"
              >
                {currentSlide.leftTag}
              </div>
            </div>
            <p
              key={`leftDesc-${activeIndex}`}
              className="text-[13px] text-[#0F2D24]/80 mt-2 leading-snug font-medium animate-card-fade"
            >
              {currentSlide.leftDesc}
            </p>
          </div>

          {/* Bottom panel — Dynamically updates per slide */}
          <div className="absolute bottom-4 right-4 z-20 bg-[#053B29]/85 backdrop-blur-md border border-white/10 rounded-2xl text-white pt-4 pb-4 pl-5 pr-4 flex items-center gap-4 shadow-[0_16px_32px_-16px_rgba(5,26,17,0.5)]">
            <div className="flex flex-col min-w-[150px]">
              <span
                key={`line1-${activeIndex}`}
                className="text-[13px] font-medium text-white/80 leading-tight animate-card-fade"
              >
                {currentSlide.bottomLine1}
              </span>
              <span
                key={`line2-${activeIndex}`}
                className="text-[13px] font-semibold text-[#D4B573] leading-tight mt-0.5 animate-card-fade"
              >
                {currentSlide.bottomLine2}
              </span>
            </div>
            <a
              href="#projects"
              aria-label="Explore our projects"
              className="w-10 h-10 shrink-0 rounded-full bg-[#D4B573] text-[#053B29] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}