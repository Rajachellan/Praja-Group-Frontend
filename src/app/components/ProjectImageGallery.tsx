'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Camera,
  Maximize2,
  Play,
  X,
  ExternalLink,
  Film,
  Sparkles
} from 'lucide-react';
import ConstructionAnimation from '../constructions/Animation';
import RealEstateDeveloperAnimation from '../developers/Animation';
import PropertyManagementAnimation from '../property-management/Animation';

export type AnimationPreset = 'construction' | 'developer' | 'property' | 'custom';

export interface GalleryImageItem {
  id?: string;
  title: string;
  category: string;
  image: string;
  caption?: string;
}

export interface GalleryVideoItem {
  id?: string;
  title: string;
  /**
   * FUTURE YOUTUBE INTEGRATION:
   * When your company launches its official YouTube channel and videos:
   * 1. Set `youtubeUrl` to your official YouTube video link (e.g. 'https://www.youtube.com/watch?v=YOUR_ID')
   * 2. Set `isYouTubeActive: true`
   * The player will automatically switch to your YouTube embed player without changing section design or layout.
   */
  youtubeUrl?: string;
  embedUrl?: string;
  thumbnail?: string;
  tag?: string;
  duration?: string;
  desc?: string;

  /** Set to true once your official YouTube video is available. Defaults to false (shows animated video). */
  isYouTubeActive?: boolean;

  /** Which animated video scene to display: 'construction' | 'developer' | 'property' | 'custom' */
  animationPreset?: AnimationPreset;

  /** Optional direct animated MP4/WebM video file URL */
  animatedVideoUrl?: string;
}

export interface MediaGallerySectionProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  images?: GalleryImageItem[];
  videos?: GalleryVideoItem[];
  featuredVideo?: GalleryVideoItem;
  className?: string;
  /** Section-level animation preset override ('construction' | 'developer' | 'property') */
  animationPreset?: AnimationPreset;
  /** Set to true in future to switch entire section to official YouTube video */
  isYouTubeActive?: boolean;
}

function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  if (url.length === 11 && !url.includes('/') && !url.includes('.')) return url;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const DEFAULT_IMAGES: GalleryImageItem[] = [
  {
    id: '1',
    title: 'Prajha Grandeur Luxury Villas',
    category: 'LUXURY VILLAS',
    image: '/sriperumbudur_villa_hero.png',
    caption: 'Exclusive gated community villas designed with contemporary architectural elegance, private gardens, and smart home automation.',
  },
  {
    id: '2',
    title: 'Prajha Corporate Tech Hub',
    category: 'COMMERCIAL',
    image: '/landowner-carousel-commercial.png',
    caption: 'State-of-the-art Grade A commercial IT park featuring energy-efficient glass facade design and high-speed infrastructure.',
  },
  {
    id: '3',
    title: 'Royal Palms Gated Community',
    category: 'GATED COMMUNITY',
    image: '/gated-community.png',
    caption: 'Serene coastal gated enclave surrounded by lush greenery, international standard sports amenities, and clubhouse facilities.',
  },
];

const DEFAULT_FEATURED_VIDEO: GalleryVideoItem = {
  id: 'vid-1',
  title: 'Prajha Civil Engineering & Construction Tour',
  youtubeUrl: 'https://www.youtube.com',
  tag: '3D ANIMATED SITE REEL',
  duration: 'Interactive 3D',
  desc: 'Interactive 3D structural time-lapse illustrating foundation rebar, concrete pouring, MIVAN shuttering, and turnkey civil engineering execution.',
  animationPreset: 'construction',
  isYouTubeActive: false, // Set to true in the future when official YouTube video is available!
};

export function MediaGallerySection({
  badgeText = 'PRAJHA MEDIA & GALLERY',
  title = 'Moments of Quality, Care & Masterpiece Projects',
  subtitle = 'Explore photographs and video highlights capturing our specialized residential villas, commercial hubs, gated townships, and construction engineering.',
  images = DEFAULT_IMAGES,
  videos = [],
  featuredVideo,
  className = '',
  animationPreset,
  isYouTubeActive,
}: MediaGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImageItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const galleryImages = images && images.length > 0 ? images : DEFAULT_IMAGES;
  // Take exactly top 3 images as requested
  const displayImages = galleryImages.slice(0, 3);

  // Determine the primary video to feature
  const baseVideo = featuredVideo || (videos && videos.length > 0 ? videos[0] : DEFAULT_FEATURED_VIDEO);
  const primaryVideo: GalleryVideoItem = {
    ...baseVideo,
    animationPreset: animationPreset || baseVideo.animationPreset || 'construction',
    isYouTubeActive: isYouTubeActive !== undefined ? isYouTubeActive : (baseVideo.isYouTubeActive ?? false),
  };

  const isYouTubeMode = Boolean(primaryVideo.isYouTubeActive && primaryVideo.youtubeUrl);
  const activePreset: AnimationPreset = primaryVideo.animationPreset || 'construction';
  const ytId = isYouTubeMode ? (extractYouTubeId(primaryVideo.youtubeUrl) || extractYouTubeId(primaryVideo.embedUrl)) : null;
  const videoThumb = ytId
    ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
    : (primaryVideo?.thumbnail || '/landowner-carousel-commercial.png');

  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-slate-200/80 ${className}`}>
      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#166534]/10 text-[#166534] text-xs font-bold uppercase tracking-widest border border-[#166534]/20">
          <Camera className="w-4 h-4 text-[#166534]" />
          <span>{badgeText}</span>
        </div>

        <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
          {title}
        </h2>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* TOP: 3 IMAGES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayImages.map((imgItem, idx) => (
          <div
            key={imgItem.id || idx}
            onClick={() => setSelectedImage(imgItem)}
            className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-emerald-50/50">
              <Image
                src={imgItem.image}
                alt={imgItem.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#166534] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                {imgItem.category}
              </div>
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-5 h-5 text-[#166534]" />
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#166534] transition-colors">
                {imgItem.title}
              </h3>
              {imgItem.caption && (
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {imgItem.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* BELOW: ONE BIG SIZE VIDEO SHOWCASE (CONSTRUCTION HERO ANIMATION / FUTURE YOUTUBE) */}
      {primaryVideo && (
        <div className="mt-14 sm:mt-18">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[#166534] font-bold text-xs uppercase tracking-widest mb-1.5">
                <Film className="w-4 h-4 text-[#166534]" />
                <span>Featured Project Tour</span>
              </div>
              <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-900">
                {isYouTubeMode ? 'Watch Our Community in Action' : 'Civil Engineering & Construction in Motion'}
              </h3>
            </div>

            {/* When official YouTube video is active in future, show play controls */}
            {isYouTubeMode && !isPlaying && (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#166534] hover:bg-[#0f4623] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play YouTube Video</span>
              </button>
            )}
          </div>

          {/* Big Size Video Player / Construction Hero Animated Showcase Container */}
          <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#cadbe0]">
            {isYouTubeMode && isPlaying ? (
              <div>
                <div className="relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[16/7] max-h-[560px] bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`}
                    title={primaryVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-red-600 text-white text-xs font-bold transition-all shadow-lg cursor-pointer"
                    title="Close Video Player"
                    aria-label="Close Video Player"
                  >
                    <X className="w-4 h-4" />
                    <span>Close</span>
                  </button>
                </div>

                {/* Below video details bar when playing */}
                <div className="p-5 sm:p-6 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#F37924]">
                      {primaryVideo.tag || 'Now Playing'}
                    </span>
                    <h4 className="font-serif font-bold text-lg sm:text-xl text-slate-900 mt-0.5">
                      {primaryVideo.title}
                    </h4>
                    {primaryVideo.desc && (
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
                        {primaryVideo.desc}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                      <span>Close Player</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : isYouTubeMode && !isPlaying ? (
              <div
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPlaying(true);
                  }
                }}
                aria-label={`Play ${primaryVideo.title}`}
                className="group relative block w-full cursor-pointer hover:border-red-500/40 transition-all duration-300"
              >
                <div className="relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[16/7] max-h-[540px] overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={videoThumb}
                    alt={primaryVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (ytId && !target.src.includes('hqdefault.jpg')) {
                        target.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
                      } else if (primaryVideo.thumbnail && target.src !== primaryVideo.thumbnail) {
                        target.src = primaryVideo.thumbnail;
                      }
                    }}
                  />

                  {/* Ambient Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:from-black/80 transition-colors" />

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F37924] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                      <Film className="w-3.5 h-3.5" />
                      <span>{primaryVideo.tag || 'Official Video'}</span>
                    </span>

                    {primaryVideo.duration && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                        {primaryVideo.duration}
                      </span>
                    )}
                  </div>

                  {/* Big Play Button in Center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-red-600/30 animate-ping group-hover:scale-110" />
                      <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                        <Play className="w-7 h-7 sm:w-10 sm:h-10 fill-current ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 text-red-400 text-xs font-bold tracking-wider uppercase mb-1">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Click to Play Video</span>
                      </div>
                      <h4 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-red-300 transition-colors">
                        {primaryVideo.title}
                      </h4>
                      {primaryVideo.desc && (
                        <p className="text-gray-200 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                          {primaryVideo.desc}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 text-white font-bold text-xs sm:text-sm group-hover:bg-red-500 transition-all shadow-lg shrink-0">
                        <Play className="w-4 h-4 fill-current" />
                        <span>Play Now</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ANIMATED VIDEO MODE: CONSTRUCTION HERO BANNER ANIMATED VIDEO (NO REDIRECT TO YOUTUBE) */
              <div className="relative block w-full">
                <div className="relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[16/7] min-h-[360px] max-h-[560px] overflow-hidden bg-[#cadbe0]">
                  {/* Construction Page Hero Banner Animated Video */}
                  <ConstructionAnimation
                    variant="viewport"
                    label="PRAJHA / CIVIL ENGINEERING"
                  />
                </div>

                {/* Bottom Information Bar */}
                <div className="p-5 sm:p-6 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100/90 text-[#166534] text-xs font-bold uppercase tracking-wider border border-emerald-600/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {primaryVideo.tag || 'Turnkey Structural Execution • 17+ Yrs'}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                      {primaryVideo.title || 'Civil Engineering & Structural Construction In Motion'}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
                      {primaryVideo.desc || '3D procedural time-lapse illustrating excavation, foundation rebar, concrete pouring, MIVAN aluminum shuttering, and turnkey civil engineering execution.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-[#166534] text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Live 3D Structural Simulation</span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LIGHTBOX FOR IMAGES */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#F37924]">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white truncate max-w-md sm:max-w-xl">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] bg-black flex items-center justify-center">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {selectedImage.caption && (
              <div className="p-4 bg-slate-900 text-gray-300 text-xs sm:text-sm border-t border-white/10">
                {selectedImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default function ProjectImageGallery(props: MediaGallerySectionProps) {
  return <MediaGallerySection {...props} />;
}
