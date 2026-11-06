"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import hero1img from "../../../public/hero-1.jpg";
import hero2img from "../../../public/hero-2.jpg";
import hero3img from "../../../public/hero-3.jpg";
import hero4img from "../../../public/hero-4.jpg";

interface HeroSlideImage {
  src: StaticImageData;
  alt: string;
}

const slides: HeroSlideImage[] = [
  {
    src: hero1img,
    alt: "Master-planned residential plot layout in Chennai",
  },
  {
    src: hero2img,
    alt: "Quality ongoing residential construction site",
  },
  {
    src: hero3img,
    alt: "Simple modern independent residential home",
  },
  {
    src: hero4img,
    alt: "Modern residential apartment building complex",
  },
];

interface HeroCarouselProps {
  initialSlide?: number;
  onSlideChange: (realIndex: number) => void;
  onReady?: () => void;
}

export default function HeroCarousel({
  initialSlide = 0,
  onSlideChange,
  onReady,
}: HeroCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={900}
      loop={true}
      initialSlide={initialSlide}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={{ nextEl: ".hero-next-btn", prevEl: ".hero-prev-btn" }}
      onSwiper={() => onReady?.()}
      onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
      className="w-full h-full hero-swiper"
      style={{ width: "100%", height: "100%" }}
    >
      {slides.map((img, index) => (
        <SwiperSlide
          key={index}
          className="relative w-full h-full overflow-hidden"
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            quality={60}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 540px, 580px"
            className="hero-ken-burns object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051A11]/70 via-transparent to-[#051A11]/10 pointer-events-none" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

