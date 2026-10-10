'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { 
  Camera, 
  Video, 
  MapPin, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  X, 
  Phone, 
  ChevronLeft, 
  ChevronRight,
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Clock, 
  Compass, 
  Building,
  ArrowUpRight
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* Data Types */
interface ProjectImage {
  id: string;
  title: string;
  category: 'villas' | 'commercial' | 'gated' | 'joint-ventures' | 'residential';
  categoryLabel: string;
  location: string;
  area: string;
  status: string;
  image: string;
  description: string;
  highlights: string[];
  year: string;
  units?: string;
}

interface ProjectVideo {
  id: string;
  title: string;
  duration: string;
  tags: string[];
  location: string;
  specs: string;
  description: string;
  videoUrl: string;
  poster: string;
}

const IMAGE_PROJECTS: ProjectImage[] = [
  {
    id: 'img-1',
    title: 'Prajha Grandeur Luxury Villas',
    category: 'villas',
    categoryLabel: 'Luxury Villas',
    location: 'Sriperumbudur, Chennai',
    area: '4,500 Sq.Ft per Villa',
    status: 'Ready to Move',
    image: '/sriperumbudur_villa_hero.png',
    description: 'Exclusive gated community villas designed with contemporary architectural elegance, private gardens, and smart home automation.',
    highlights: ['4 BHK Layout', 'Private Swimming Pool Option', '24/7 Multi-Tier Security', 'Solar Powered Common Areas'],
    year: '2025',
    units: '24 Luxury Units'
  },
  {
    id: 'img-2',
    title: 'Prajha Corporate Tech Hub',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'OMR IT Corridor, Chennai',
    area: '120,000 Sq.Ft Built-up',
    status: 'Completed',
    image: '/landowner-carousel-commercial.png',
    description: 'State-of-the-art Grade A commercial IT park featuring energy-efficient glass facade design, ample multi-level parking, and high-speed elevators.',
    highlights: ['IGBC Green Certified', '100% Power Backup', 'EV Charging Stations', 'Executive Helipad Ready'],
    year: '2024',
    units: 'Grade A Offices'
  },
  {
    id: 'img-3',
    title: 'Royal Palms Gated Community',
    category: 'gated',
    categoryLabel: 'Gated Community',
    location: 'ECR Coast, Chennai',
    area: '15 Acres Masterplan',
    status: 'Handover Ready',
    image: '/gated-community.png',
    description: 'Serene coastal gated enclave surrounded by lush greenery, international standard sports amenities, and clubhouse facilities.',
    highlights: ['20,000 Sq.Ft Clubhouse', 'Tennis & Badminton Courts', 'Underground Utilities', 'Blacktop 40ft Roads'],
    year: '2025',
    units: '120 Plots & Villas'
  },
  {
    id: 'img-4',
    title: 'The Sovereign Residential Towers',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Anna Nagar, Chennai',
    area: '85 Premium Apartments',
    status: 'In Progress',
    image: '/flats-apartments.png',
    description: 'High-rise luxury apartments crafted with seismic-resistant MIVAN structural technology and ultra-modern interiors.',
    highlights: ['3 & 4 BHK Luxury Suites', 'Sky Lounge & Infinity Pool', 'RERA Approved', 'Prime Location Access'],
    year: '2026',
    units: '85 Apartments'
  },
  {
    id: 'img-5',
    title: 'Prajha Horizon Heights Joint Venture',
    category: 'joint-ventures',
    categoryLabel: 'Joint Venture',
    location: 'Guindy Business District',
    area: '220,000 Sq.Ft',
    status: 'Delivered',
    image: '/hero-1.jpg',
    description: 'Landowner joint venture success story delivering maximum value ROI, landmark architecture, and premium mixed-use spaces.',
    highlights: ['High Capital Appreciation', 'Prime Arterial Location', 'Dual Level Retail Arcades', 'Smooth Clear Title'],
    year: '2024',
    units: 'Mixed Use Hub'
  },
  {
    id: 'img-6',
    title: 'Serene Meadow Premium Plots',
    category: 'gated',
    categoryLabel: 'Gated Community',
    location: 'Oragadam Industrial Belt, Chennai',
    area: '35 Acres Layout',
    status: 'Open for Booking',
    image: '/landowner-carousel-aerial.png',
    description: 'DTCP & RERA approved premium villa plots situated adjacent to major automotive hub and upcoming infrastructure corridors.',
    highlights: ['Clear Title Guarantee', 'Avenue Plantation', 'Children Play Parks', 'Fast Appreciation Zone'],
    year: '2025',
    units: '250 Plots'
  }
];

const VIDEO_PROJECTS: ProjectVideo[] = [
  {
    id: 'vid-1',
    title: 'Skyline Commercial Tech Park Walkthrough',
    duration: '02:45',
    tags: ['4K Drone Aerial', 'Commercial', 'IT Park'],
    location: 'OMR IT Corridor, Chennai',
    specs: '18-Storey Grade-A Landmark Hub',
    description: '360-degree high-definition aerial drone inspection featuring the solar glass facade, multi-level podium, and landscape atrium.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-city-buildings-and-skyscrapers-41618-large.mp4',
    poster: '/landowner-carousel-commercial.png',
  },
  {
    id: 'vid-2',
    title: 'Grand Sriperumbudur Villa Estate Tour',
    duration: '03:15',
    tags: ['360° Interior', 'Luxury Villa'],
    location: 'Sriperumbudur, Chennai',
    specs: '4 BHK Independent Duplex Villa',
    description: 'Cinematic interior tour displaying Italian marble flooring, double-height ceiling living room, and private garden patio.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-41584-large.mp4',
    poster: '/sriperumbudur_villa_hero.png',
  },
  {
    id: 'vid-3',
    title: 'Structural Engineering & Concrete Construction',
    duration: '01:55',
    tags: ['Engineering', 'Timelapse', 'Site Progress'],
    location: 'Anna Nagar, Chennai',
    specs: 'Seismic Zone V Certified Build',
    description: 'High-speed timelapse documenting MIVAN aluminum shuttering execution and raft foundation concrete pouring.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-worker-on-a-construction-site-41580-large.mp4',
    poster: '/hero-3.jpg',
  },
  {
    id: 'vid-4',
    title: 'ECR Royal Gated Township Aerial Survey',
    duration: '02:10',
    tags: ['Drone Flyover', 'Gated Community'],
    location: 'ECR Coast, Chennai',
    specs: '15-Acre Masterplanned Enclave',
    description: 'Aerial flyover showing underground utility lines, 40ft blacktop roads, security gates, and avenue plantations.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glass-skyscraper-architectural-design-41577-large.mp4',
    poster: '/gated-community.png',
  },
];

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMainTab, setActiveMainTab] = useState<'photos' | 'videos'>('photos');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Modals state
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<ProjectVideo | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.showcase-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.showcase-content-area',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.showcase-content-area',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const filteredImages = activeCategory === 'all'
    ? IMAGE_PROJECTS
    : IMAGE_PROJECTS.filter((p) => p.category === activeCategory);

  const toggleModalPlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleModalMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-[#F8FAFC] via-slate-900 to-slate-950 text-slate-900 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="showcase-header text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Our Project Portfolio & Site Reels
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
            Featured Projects & Video Tours
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Switch tabs below to slide through our architectural photo gallery or watch 4K drone site walkthroughs.
          </p>

          {/* MAIN TWO TABS: Photos vs Videos */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveMainTab('photos')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeMainTab === 'photos'
                  ? 'bg-[#166534] text-white shadow-lg shadow-emerald-900/40 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Project Photos</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] ${activeMainTab === 'photos' ? 'bg-emerald-700/80 text-white' : 'bg-slate-700 text-slate-300'}`}>
                {IMAGE_PROJECTS.length}
              </span>
            </button>

            <button
              onClick={() => setActiveMainTab('videos')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeMainTab === 'videos'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>4K Video Tours</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] ${activeMainTab === 'videos' ? 'bg-amber-600 text-slate-950 font-extrabold' : 'bg-slate-700 text-slate-300'}`}>
                {VIDEO_PROJECTS.length}
              </span>
            </button>
          </div>
        </div>

        {/* TAB CONTENT AREA */}
        <div className="showcase-content-area relative min-h-[460px]">

          {/* TAB 1: PHOTOS SWIPER GALLERY */}
          {activeMainTab === 'photos' && (
            <div>
              {/* Category Filter Sub-Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'villas', label: 'Luxury Villas' },
                  { id: 'commercial', label: 'Commercial' },
                  { id: 'gated', label: 'Gated Communities' },
                  { id: 'residential', label: 'Residential' },
                  { id: 'joint-ventures', label: 'Joint Ventures' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeCategory === tab.id
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Photos Swiper Slider */}
              <div className="relative group/swiper px-2 sm:px-4">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.photo-swiper-next',
                    prevEl: '.photo-swiper-prev',
                  }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 4500, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="pb-14"
                >
                  {filteredImages.map((project) => (
                    <SwiperSlide key={project.id}>
                      <div
                        onClick={() => setSelectedImage(project)}
                        className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col h-full group"
                      >
                        <div className="relative h-64 w-full bg-slate-950 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/90 text-emerald-200 backdrop-blur-md border border-emerald-500/30">
                              {project.status}
                            </span>
                          </div>

                          <div className="absolute top-3 right-3 z-10">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-950/80 text-slate-200 backdrop-blur-md">
                              {project.categoryLabel}
                            </span>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <span className="inline-flex items-center gap-2 bg-white/95 text-slate-900 px-4 py-2 rounded-full font-bold text-xs shadow-xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <Maximize2 className="w-4 h-4 text-[#166534]" />
                              View Lightbox & Specs
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-1.5">
                              <MapPin className="w-3.5 h-3.5 text-amber-600" />
                              <span>{project.location}</span>
                            </div>
                            <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-[#166534] transition-colors leading-snug line-clamp-1">
                              {project.title}
                            </h3>
                            <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-2">
                              {project.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                            <span className="flex items-center gap-1 text-slate-700">
                              <Layers className="w-3.5 h-3.5 text-emerald-600" />
                              {project.area}
                            </span>
                            <span className="text-[#166534] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                              Details <ChevronRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Swiper Navigation Custom Buttons */}
                <button
                  className="photo-swiper-prev absolute top-1/2 -left-2 sm:-left-5 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-slate-900 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#166534] hover:text-white transition-all cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="photo-swiper-next absolute top-1/2 -right-2 sm:-right-5 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-slate-900 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#166534] hover:text-white transition-all cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: VIDEOS SWIPER GALLERY */}
          {activeMainTab === 'videos' && (
            <div>
              <div className="relative group/swiper px-2 sm:px-4">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.video-swiper-next',
                    prevEl: '.video-swiper-prev',
                  }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="pb-14"
                >
                  {VIDEO_PROJECTS.map((video) => (
                    <SwiperSlide key={video.id}>
                      <div
                        onClick={() => setSelectedVideo(video)}
                        className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full group"
                      >
                        <div className="relative h-60 w-full bg-black overflow-hidden">
                          <Image
                            src={video.poster}
                            alt={video.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                          <div className="absolute top-3 left-3 z-10 flex gap-2">
                            {video.tags.slice(0, 2).map((t, i) => (
                              <span key={i} className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-950/80 text-amber-400 border border-amber-500/20 backdrop-blur-md">
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="absolute top-3 right-3 z-10">
                            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-950/90 text-slate-200 border border-white/10 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-amber-400" />
                              {video.duration}
                            </span>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/40">
                              <Play className="w-6 h-6 ml-0.5 fill-slate-950" />
                            </div>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between text-white">
                          <div>
                            <div className="flex items-center gap-1 text-xs text-amber-400 font-medium mb-1">
                              <Compass className="w-3.5 h-3.5" />
                              <span>{video.location}</span>
                            </div>
                            <h3 className="text-lg font-bold font-serif group-hover:text-amber-400 transition-colors line-clamp-1">
                              {video.title}
                            </h3>
                            <p className="mt-2 text-slate-300 text-xs line-clamp-2">
                              {video.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                            <span className="font-semibold text-emerald-400">{video.specs}</span>
                            <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5 font-bold">
                              Watch Video <ChevronRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Video Navigation Custom Buttons */}
                <button
                  className="video-swiper-prev absolute top-1/2 -left-2 sm:-left-5 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-800 text-white shadow-xl border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer"
                  aria-label="Previous Video"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  className="video-swiper-next absolute top-1/2 -right-2 sm:-right-5 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-800 text-white shadow-xl border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer"
                  aria-label="Next Video"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* BOTTOM METRICS BANNER */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-[#166534] to-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-emerald-500/20 flex flex-wrap items-center justify-around gap-6">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">50+</div>
            <div className="text-xs text-emerald-100 mt-1 font-semibold uppercase tracking-wider">Landmark Projects</div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">1.5M+</div>
            <div className="text-xs text-emerald-100 mt-1 font-semibold uppercase tracking-wider">Sq.Ft Developed</div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">100%</div>
            <div className="text-xs text-emerald-100 mt-1 font-semibold uppercase tracking-wider">CMDA & RERA Approved</div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">4.9 ★</div>
            <div className="text-xs text-emerald-100 mt-1 font-semibold uppercase tracking-wider">Customer Satisfaction</div>
          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL FOR IMAGES */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200 animate-scale-up">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 bg-slate-950/80 text-white p-2.5 rounded-full hover:bg-slate-950 transition-transform hover:scale-110 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-96 w-full bg-slate-900">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white">
                    {selectedImage.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
                    {selectedImage.categoryLabel}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif">{selectedImage.title}</h3>
                <p className="flex items-center gap-1.5 text-slate-300 text-sm mt-1">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  {selectedImage.location}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedImage.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-800 text-xs sm:text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-center">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="text-[11px] text-slate-500 font-medium uppercase">Area</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{selectedImage.area}</div>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="text-[11px] text-slate-500 font-medium uppercase">Year</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{selectedImage.year}</div>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="text-[11px] text-slate-500 font-medium uppercase">Scope</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{selectedImage.units || 'Custom'}</div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="tel:+919840000000"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#166534] hover:bg-[#0f4623] text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Call Project Manager
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO PLAYER MODAL FOR VIDEOS */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            <button
              onClick={() => {
                setSelectedVideo(null);
                setIsPlaying(true);
              }}
              className="absolute top-4 right-4 z-30 bg-slate-950/80 text-white p-3 rounded-full border border-slate-700 transition-transform hover:scale-110 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                ref={modalVideoRef}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.poster}
                autoPlay
                playsInline
                loop
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 sm:p-6 flex items-center justify-between z-20">
                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleModalPlay}
                    className="p-2.5 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-slate-950" />}
                  </button>

                  <button
                    onClick={toggleModalMute}
                    className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <div>
                    <h4 className="text-white font-serif font-bold text-sm sm:text-base">{selectedVideo.title}</h4>
                    <span className="text-xs text-slate-400 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-amber-400" /> {selectedVideo.duration} • {selectedVideo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {selectedVideo.description}
                </p>
              </div>

              <a
                href="tel:+919840000000"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
              >
                <Building className="w-4 h-4" />
                Schedule On-Site Inspection
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
