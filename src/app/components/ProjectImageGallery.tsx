'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  X, 
  Phone, 
  Download, 
  ArrowUpRight,
  ChevronRight,
  Award,
  Filter
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
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

const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
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
    id: 'proj-2',
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
    id: 'proj-3',
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
    id: 'proj-4',
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
    id: 'proj-5',
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
    id: 'proj-6',
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

export default function ProjectImageGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.img-gallery-header',
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
        '.project-card-item',
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section ref={containerRef} className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative BG Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="img-gallery-header text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
            Architectural Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">
            Our Completed Landmarks & Masterpieces
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Take a visual tour through Prajha Group’s portfolio of premium residential villas, commercial hubs, and gated townships across Chennai.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'villas', label: 'Luxury Villas' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'gated', label: 'Gated Communities' },
              { id: 'residential', label: 'Residential' },
              { id: 'joint-ventures', label: 'Joint Ventures' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#166534] text-white shadow-md shadow-emerald-900/20 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid Showcase */}
        <div className="projects-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card-item group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Status Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-200 backdrop-blur-md border border-emerald-500/30">
                    {project.status}
                  </span>
                </div>

                {/* Category Badge Top Right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-900/70 text-slate-200 backdrop-blur-md border border-white/20">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Quick Action Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-2 bg-white/95 text-slate-900 px-4 py-2 rounded-full font-semibold text-xs shadow-xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4 text-[#166534]" />
                    View Details & Specs
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif group-hover:text-[#166534] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-slate-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>{project.area}</span>
                  </div>
                  <div className="inline-flex items-center text-xs font-bold text-[#166534] group-hover:translate-x-1 transition-transform">
                    Explore <ChevronRight className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 bg-gradient-to-r from-[#166534] to-[#0f4623] rounded-2xl p-8 text-white shadow-xl flex flex-wrap items-center justify-around gap-6">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">50+</div>
            <div className="text-xs sm:text-sm text-emerald-100 mt-1 font-medium uppercase tracking-wider">Landmark Projects</div>
          </div>
          <div className="h-10 w-px bg-emerald-600/60 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">1.5M+</div>
            <div className="text-xs sm:text-sm text-emerald-100 mt-1 font-medium uppercase tracking-wider">Sq.Ft Developed</div>
          </div>
          <div className="h-10 w-px bg-emerald-600/60 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">100%</div>
            <div className="text-xs sm:text-sm text-emerald-100 mt-1 font-medium uppercase tracking-wider">RERA Compliant</div>
          </div>
          <div className="h-10 w-px bg-emerald-600/60 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">4.9 ★</div>
            <div className="text-xs sm:text-sm text-emerald-100 mt-1 font-medium uppercase tracking-wider">Client Rating</div>
          </div>
        </div>

      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200 animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 bg-slate-900/70 hover:bg-slate-900 text-white p-2.5 rounded-full backdrop-blur-sm transition-transform hover:scale-110 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-72 sm:h-96 w-full bg-slate-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white">
                    {selectedProject.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
                    {selectedProject.categoryLabel}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif">{selectedProject.title}</h3>
                <p className="flex items-center gap-1.5 text-slate-300 text-sm mt-1">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  {selectedProject.location}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-slate-700 text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Features & Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-800 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium uppercase">Total Area</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{selectedProject.area}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium uppercase">Completion Year</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{selectedProject.year}</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-100 col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-500 font-medium uppercase">Project Scope</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{selectedProject.units || 'Custom Design'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="tel:+919840000000"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#166534] hover:bg-[#0f4623] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Call Project Manager
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3.5 px-6 rounded-xl font-bold text-sm transition-all cursor-pointer"
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
