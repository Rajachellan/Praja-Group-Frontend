'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import landownerPlotHero from '../../../public/landowner-plot-hero.png';
import landownerCarouselVilla from '../../../public/landowner-carousel-villa.png';
import landownerCarouselCommercial from '../../../public/landowner-carousel-commercial.png';
import landownerCarouselAerial from '../../../public/landowner-carousel-aerial.png';

export interface CarouselSlide {
  id: string;
  image: any;
  badge: string;
  title: string;
  subtitle: string;
  alt: string;
}

const slides: CarouselSlide[] = [
  {
    id: 'plot-hero',
    image: landownerPlotHero,
    badge: 'PRAJHA LAND DEVELOPMENT',
    title: 'Transforming Prime Land Into High-Value Real Estate',
    subtitle: 'Joint venture partnerships to maximize returns on residential and commercial plots.',
    alt: 'Prajha Group Landowner Joint Venture Real Estate Plot and Villa Development',
  },
  {
    id: 'gated-community',
    image: landownerCarouselVilla,
    badge: 'GATED VILLA TOWNSHIPS',
    title: 'Turn Vacant Land Into Luxurious Gated Communities',
    subtitle: 'World-class infrastructure, modern amenities, and architectural excellence.',
    alt: 'Prajha Group Luxury Gated Villa Community Joint Venture',
  },
  {
    id: 'commercial-tower',
    image: landownerCarouselCommercial,
    badge: 'COMMERCIAL REAL ESTATE',
    title: 'Unlock Premium Value With High-Rise Commercial Spaces',
    subtitle: 'Strategic city-center developments for high-yielding retail and office complexes.',
    alt: 'Prajha Group Commercial Real Estate Tower Joint Venture',
  },
  {
    id: 'master-planning',
    image: landownerCarouselAerial,
    badge: 'AERIAL & MASTER PLANNING',
    title: 'Strategic Land Evaluation & Comprehensive Master Planning',
    subtitle: 'Expert feasibility analysis and hassle-free clear title legal processing.',
    alt: 'Prajha Group Aerial Land Parcel Survey and Master Planning',
  },
];

export default function LandownerHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="relative w-full max-w-[540px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides Container */}
      <div className="relative h-[340px] sm:h-[420px] lg:h-[450px] w-full overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 540px"
              />
              
              {/* Gradient overlays for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" />

              {/* Text content overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-20">
                <div className="inline-block">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-[#F37924] text-white shadow-sm">
                    {slide.badge}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold leading-snug drop-shadow-md text-white">
                  {slide.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/40 hover:bg-[#166534] text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 focus:outline-hidden hover:scale-110 shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/40 hover:bg-[#166534] text-white backdrop-blur-md transition-all opacity-80 group-hover:opacity-100 focus:outline-hidden hover:scale-110 shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators / Pagination Dots & Play/Pause */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? 'Pause carousel' : 'Play carousel'}
          className="text-white/80 hover:text-white transition-colors"
        >
          {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#F37924]" />}
        </button>
        <div className="h-3 w-[1px] bg-white/20" />
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-[#F37924]'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
