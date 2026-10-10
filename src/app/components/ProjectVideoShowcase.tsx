'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  X, 
  Video, 
  Clock, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building,
  Film
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface VideoProject {
  id: string;
  title: string;
  duration: string;
  tags: string[];
  location: string;
  specs: string;
  description: string;
  videoUrl: string;
  poster: string;
  isFeatured?: boolean;
}

const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'vid-1',
    title: 'Skyline Commercial Tech Park Walkthrough',
    duration: '02:45',
    tags: ['4K Drone', 'Commercial', 'IT Park'],
    location: 'OMR IT Corridor, Chennai',
    specs: '18-Storey Grade-A Landmark Hub',
    description: '360-degree high-definition aerial drone inspection featuring the solar glass facade, multi-level podium, and landscape atrium.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-city-buildings-and-skyscrapers-41618-large.mp4',
    poster: '/landowner-carousel-commercial.png',
    isFeatured: true,
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
    title: 'Structural Steel & Foundation Engineering',
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
    tags: ['Drone Aerial', 'Gated Community'],
    location: 'ECR Coast, Chennai',
    specs: '15-Acre Masterplanned Enclave',
    description: 'Aerial flyover showing underground utility lines, 40ft blacktop roads, security gates, and avenue plantations.',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glass-skyscraper-architectural-design-41577-large.mp4',
    poster: '/gated-community.png',
  },
];

export default function ProjectVideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.video-section-header',
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
        '.video-card-item',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.video-grid-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

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

  const featuredVideo = VIDEO_PROJECTS.find((v) => v.isFeatured) || VIDEO_PROJECTS[0];
  const secondaryVideos = VIDEO_PROJECTS.filter((v) => v.id !== featuredVideo.id);

  return (
    <section ref={containerRef} className="py-24 bg-[#090D16] text-white relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="video-section-header text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Film className="w-4 h-4 text-emerald-400" />
            4K Virtual Tours & Site Reels
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white leading-tight">
            Experience Prajha Projects in Motion
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Watch drone flyovers, structural engineering timelapses, and high-definition interior walkthroughs of our flagship developments.
          </p>
        </div>

        {/* Video Grid Layout */}
        <div className="video-grid-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Large Hero Video Card (7 columns) */}
          <div
            onClick={() => setActiveVideo(featuredVideo)}
            className="video-card-item lg:col-span-7 group relative bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 cursor-pointer flex flex-col min-h-[420px] sm:min-h-[480px]"
          >
            {/* Background Poster & Video preview */}
            <div className="absolute inset-0 z-0">
              <Image
                src={featuredVideo.poster}
                alt={featuredVideo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/40 to-transparent" />
            </div>

            {/* Top Badges */}
            <div className="relative z-10 p-6 flex justify-between items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Reel
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-slate-300 backdrop-blur-md border border-white/10">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {featuredVideo.duration}
              </span>
            </div>

            {/* Center Play Button Pulse */}
            <div className="relative z-10 my-auto flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 bg-emerald-500/20 rounded-full animate-ping pointer-events-none" />
                <div className="w-20 h-20 bg-emerald-600/90 group-hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm">
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </div>
              </div>
            </div>

            {/* Bottom Card Content */}
            <div className="relative z-10 p-6 sm:p-8 mt-auto">
              <div className="flex flex-wrap gap-2 mb-2">
                {featuredVideo.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white/10 text-emerald-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white group-hover:text-emerald-400 transition-colors">
                {featuredVideo.title}
              </h3>
              <p className="mt-2 text-slate-300 text-sm line-clamp-2">
                {featuredVideo.description}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  {featuredVideo.location}
                </span>
                <span className="font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Watch Full Video <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Video Cards (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="video-card-item group relative bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 p-4 transition-all duration-300 cursor-pointer flex gap-4 items-center hover:bg-slate-800/80"
              >
                {/* Thumbnail */}
                <div className="relative w-36 sm:w-44 h-28 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 bg-slate-950">
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-600/90 group-hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                      <Play className="w-4 h-4 ml-0.5 fill-white" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded backdrop-blur-xs">
                    {video.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-emerald-400 mb-1">
                    <span>{video.tags[0]}</span>
                    <span>•</span>
                    <span className="text-slate-400 truncate">{video.location}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold font-serif text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {video.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Cinematic Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveVideo(null);
                setIsPlaying(true);
              }}
              className="absolute top-4 right-4 z-30 bg-slate-950/80 hover:bg-slate-950 text-white p-3 rounded-full border border-slate-700 transition-transform hover:scale-110 cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center group/video">
              <video
                ref={modalVideoRef}
                src={activeVideo.videoUrl}
                poster={activeVideo.poster}
                autoPlay
                playsInline
                loop
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Overlay Custom Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 sm:p-6 flex items-center justify-between z-20">
                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleModalPlay}
                    className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                  </button>

                  <button
                    onClick={toggleModalMute}
                    className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <div>
                    <h4 className="text-white font-serif font-bold text-sm sm:text-base">{activeVideo.title}</h4>
                    <span className="text-xs text-slate-400 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-amber-400" /> {activeVideo.duration} • {activeVideo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:+919840000000"
                    className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    Inquire About Project
                  </a>
                </div>
              </div>
            </div>

            {/* Video Meta Info Pane */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2 mb-1.5">
                  {activeVideo.tags.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {activeVideo.description}
                </p>
              </div>

              <div className="flex-shrink-0 w-full sm:w-auto">
                <a
                  href="tel:+919840000000"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition-all"
                >
                  <Building className="w-4 h-4" />
                  Schedule On-Site Inspection
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
