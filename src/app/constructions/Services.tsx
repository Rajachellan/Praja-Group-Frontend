'use client';

import React, { useState } from 'react';
import {
  Building,
  Building2,
  DraftingCompass,
  Home,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Ruler,
  Award,
  FileCheck,
  Layers,
  HardHat,
  Wrench,
  ChevronRight,
  PhoneCall,
  Clock,
  Shield,
  Star,
  Check,
  Maximize2,
  X,
  Compass,
  BarChart3,
  BadgeCheck,
  Flame,
  LayoutGrid,
  Sparkle
} from 'lucide-react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  icon: React.ElementType;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  description: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
  features: {
    title: string;
    desc: string;
  }[];
  process: {
    step: string;
    title: string;
  }[];
  timeline: string;
  warranty: string;
  idealFor: string;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    category: 'Turnkey Luxury Homes',
    badge: 'Most Requested',
    tagline: 'Crafting bespoke, architect-designed villas and custom homes built for generations.',
    icon: Home,
    accentColor: 'text-[#166534]',
    bgGradient: 'from-emerald-500/10 via-emerald-50/50 to-transparent',
    borderColor: 'border-emerald-500/30',
    description:
      'We specialize in end-to-end turnkey residential construction across Chennai. From individual luxury duplex villas to independent modern houses and gated community developments, our team handles every structural phase with zero compromise on material standards.',
    highlights: [
      'Turnkey Custom Villas & Independent Houses',
      'Multi-Story Duplex & Modern Residences',
      'Gated Residential Community Units',
      'Structural Expansion & Additional Floors'
    ],
    specs: [
      { label: 'Steel Grade', value: 'Fe 550D TMT (Tata Tiscon / JSW)' },
      { label: 'Cement Quality', value: '53-Grade Weather Plus (Ultratech)' },
      { label: 'Masonry Work', value: 'First-Quality Red Chamber Bricks / AAC' },
      { label: 'Flooring', value: 'Large Format Vitrified / Italian Marble' },
      { label: 'Warranty', value: '10-Year Contractual Structural Guarantee' },
      { label: 'Approvals', value: 'CMDA & Local Corporation Permits' }
    ],
    features: [
      {
        title: 'Architectural Customization',
        desc: '100% tailor-made room layouts, Vastu compliance, and customized elevation designs.'
      },
      {
        title: 'Multi-Tier Quality Audits',
        desc: 'Rigorous 50+ point structural quality inspections and concrete cube strength testing.'
      },
      {
        title: 'Fixed Cost Guarantee',
        desc: 'Transparent itemized BOQ pricing with locked rates and zero hidden charges.'
      },
      {
        title: 'Dedicated Site Manager',
        desc: 'Weekly digital updates, photo reporting, and a single point of contact throughout.'
      }
    ],
    process: [
      { step: '01', title: 'Plot Inspection & Vastu Plan' },
      { step: '02', title: 'Architectural 3D & BOQ Approval' },
      { step: '03', title: 'Civil Foundation & RCC Structure' },
      { step: '04', title: 'Finishing, Joinery & Handover' }
    ],
    timeline: '6 to 12 Months',
    warranty: '10-Year Structural Care',
    idealFor: 'Families & Plot Owners seeking premium hassle-free home building in Chennai.'
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    category: 'High-Return Corporate Assets',
    badge: 'Enterprise Grade',
    tagline: 'High-performance commercial structures engineered for operational excellence.',
    icon: Building2,
    accentColor: 'text-[#F37924]',
    bgGradient: 'from-amber-500/10 via-amber-50/50 to-transparent',
    borderColor: 'border-amber-500/30',
    description:
      'Prajha Group delivers robust commercial construction solutions including corporate office complexes, retail centers, medical clinics, and industrial warehousing. Designed to optimize space utilization, structural load capacities, and fire safety compliance.',
    highlights: [
      'Corporate Office Complexes & Tech Hubs',
      'Retail Showrooms & Multi-Storey Outlets',
      'Medical Centers, Clinics & Hospitals',
      'Warehouses, Factories & Logistics Facilities'
    ],
    specs: [
      { label: 'Structural Design', value: 'High-Load RCC Frame & Heavy Beam Systems' },
      { label: 'Facade Engineering', value: 'Glass Curtain Walls & Composite Panels' },
      { label: 'MEP Integration', value: 'HVAC Ducting, Fire Sprinklers & 3-Phase Power' },
      { label: 'Flooring Load', value: 'Heavy Duty Epoxy / High-Traffic Granite' },
      { label: 'Safety Code', value: 'NBC & OSHA Compliant Safety Protocols' },
      { label: 'Clearances', value: 'Commercial CMDA / DTCP Sanctions' }
    ],
    features: [
      {
        title: 'High Load-Bearing Capacity',
        desc: 'Engineered for high floor weight loads, heavy machinery, and heavy pedestrian traffic.'
      },
      {
        title: 'Fire Safety & Duct Infrastructure',
        desc: 'Integrated safety shafts, emergency exits, and heavy HVAC duct routing.'
      },
      {
        title: 'Optimized Workspaces',
        desc: 'Flexible pillar-free span layouts to maximize usable commercial carpet area.'
      },
      {
        title: 'Accelerated Milestone Timeline',
        desc: 'Streamlined project schedules to ensure rapid commercial deployment & early ROI.'
      }
    ],
    process: [
      { step: '01', title: 'Commercial Feasibility & Layout' },
      { step: '02', title: 'Structural & MEP Drawings' },
      { step: '03', title: 'Heavy Civil RCC Frame Erection' },
      { step: '04', title: 'Facade & Utility Integration' }
    ],
    timeline: '8 to 14 Months',
    warranty: '10-Year Heavy Structural',
    idealFor: 'Business Owners, Developers & Investors expanding commercial real estate.'
  },
  {
    id: 'design-build',
    title: 'Design-Build Services',
    category: 'Integrated Single-Source Solution',
    badge: '100% Plan Sanctions',
    tagline: 'Unified architectural design, structural engineering, and government approvals.',
    icon: DraftingCompass,
    accentColor: 'text-[#0F2D24]',
    bgGradient: 'from-[#0F2D24]/10 via-slate-50 to-transparent',
    borderColor: 'border-[#0F2D24]/30',
    description:
      'Our Design-Build model integrates architectural design, structural calculation, soil analysis, and civil execution into one seamless process. This eliminates friction between architects and contractors, preventing budget overruns and construction delays.',
    highlights: [
      '2D Floor Plans & Photorealistic 3D Elevations',
      'CMDA & DTCP Plan Sanction Sanctions',
      'Structural Calculations & Soil Bearing Tests',
      'Itemized BOQ & Guaranteed Cost Locks'
    ],
    specs: [
      { label: '3D Renderings', value: '4K Exterior Elevations & VR Walkthroughs' },
      { label: 'Government Permits', value: '100% Clearance Record (CMDA / DTCP)' },
      { label: 'Structural Calculations', value: 'STAAD.Pro Certified Engineering' },
      { label: 'Soil Testing', value: 'SBC Report & Deep Foundation Design' },
      { label: 'Vastu Planning', value: '100% Vastu-Compliant Floor Plans' },
      { label: 'Bank Approvals', value: 'Pre-Approved Drawing Formats for Bank Loans' }
    ],
    features: [
      {
        title: 'Single Point of Accountability',
        desc: 'One team manages design, permits, and building execution — saving you time and cost.'
      },
      {
        title: 'Instant Sanction Clearance',
        desc: 'Direct experience navigating CMDA, DTCP, and Chennai Local Body plan approvals.'
      },
      {
        title: 'Photorealistic 3D Visualization',
        desc: 'See exactly how your building will look before a single brick is laid on site.'
      },
      {
        title: 'Zero Budget Variations',
        desc: 'Detailed engineering BOQ guarantees that your contract price remains fixed.'
      }
    ],
    process: [
      { step: '01', title: 'Topographic & Soil Testing' },
      { step: '02', title: '2D/3D Concept & Vastu Layouts' },
      { step: '03', title: 'Government Sanction Submission' },
      { step: '04', title: 'Construction Execution Handover' }
    ],
    timeline: 'Design & Approvals in 30 Days',
    warranty: 'Accurate Engineering Assurance',
    idealFor: 'Landowners who want hassle-free design, sanction approvals, and execution under one roof.'
  }
];

function Services() {
  const [activeTab, setActiveTab] = useState<string>('residential');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceDetail | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        '.cn-services-header',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="services" className="py-24 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden border-b border-slate-200">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15, 45, 36, 0.06) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:gap-10 gap-5">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col lg:gap-7 gap-5">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto" style={{ alignSelf: "flex-start" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
            </span>
            <span className="text-[11px] sm:text-[12px]  uppercase tracking-[0.15em] font-bold text-[#0F2D24]">
              CIVIL & ARCHITECTURAL EXCELLENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{ letterSpacing: "1px", lineHeight: "60px" }}>
            Our Construction 
            <span className="text-[#166534]"> Services</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed ">
            From modern luxury homes to enterprise corporate hubs and complete design-build plan sanctions, Prajha Group delivers world-class civil craftsmanship in Chennai.
          </p>
        </div>

        {/* Interactive Tab Switcher Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 p-2 bg-slate-100/80 rounded-2xl border border-slate-200/90 max-w-6xl mx-auto shadow-inner">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex-1 min-w-[200px] sm:min-w-[210px] flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl  text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? 'bg-[#166534] text-white shadow-lg shadow-[#166534]/20 scale-[1.02]'
                    : 'bg-transparent text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#F37924]' : 'text-slate-500'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Spotlight Feature Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Hero Overview - Light Theme Green (Logo Aligned) */}
            <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-[#F0FDF4] via-emerald-50 to-[#E8F5E9] border-r border-emerald-200/80 text-slate-900 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-[#166534]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#166534]/10 text-[#166534] border border-[#166534]/25 text-xs font-black uppercase tracking-wider">
                    {activeService.badge}
                  </span>
                  <span className="text-xs  text-[#166534] uppercase tracking-widest flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#F37924]" /> Guaranteed Quality
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#0F2D24] mb-2 leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-sm text-[#166534] font-bold">
                    {activeService.category}
                  </p>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {activeService.description}
                </p>

                {/* Quick Key Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-200/80">
                  <div className="bg-white p-3.5 rounded-xl border border-emerald-200/90 shadow-sm">
                    <p className="text-[11px] text-[#166534] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F37924]" /> Avg. Timeline
                    </p>
                    <p className="text-base font-bold text-slate-900 mt-1">{activeService.timeline}</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-emerald-200/90 shadow-sm">
                    <p className="text-[11px] text-[#166534] font-bold uppercase tracking-wider flex items-center gap-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-[#F37924]" /> Protection
                    </p>
                    <p className="text-base font-bold text-slate-900 mt-1">{activeService.warranty}</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button inside Left Column */}
              <div className="pt-8 relative z-10">
                <a
                  href="#enquiry-form"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Request Proposal for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924]" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Covered Areas, Specs & Features Grid */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-white">
              
              {/* Highlights List */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Core Service Coverage
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm  text-slate-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard Specifications Grid */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Ruler className="w-4 h-4" /> Key Specifications & Standards
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeService.specs.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <p className="text-[13px] font-bold uppercase tracking-wider">{spec.label}</p>
                      <p className="text-[12px] mt-2">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F37924]" /> Key Advantages & Deliverables
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-sm font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                        {feat.title}
                      </p>
                      <p className="text-xs text-gray-700 leading-relaxed pl-3">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#166534]" />
                  <span>Ideal for: {activeService.idealFor}</span>
                </div>

                <button
                  onClick={() => setSelectedServiceModal(activeService)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-[#166534] hover:text-white text-[#166534] border border-emerald-200  text-xs transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Specification Sheet</span>
                </button>
              </div>

            </div>

          </div>
        </div>


        {/* Quick Consultation Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#F0FDF4] via-emerald-100/90 to-[#F0FDF4] text-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-200 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#166534]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-5 max-w-xl text-center md:text-left relative z-10">
            <span className="px-3 py-1 rounded-full bg-[#166534] text-white text-[11px]  uppercase  inline-block" style={{letterSpacing:"2px",alignSelf:"flex-start"}}>
              Free Site Inspection & Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold" style={{lineHeight:"40px"}}>
              Ready to Start Your Construction Project in Chennai?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Speak directly with our senior civil engineering team. We provide itemized BOQ estimates and site surveys within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white  text-sm transition-all shadow-lg hover:shadow-xl text-center"
            >
              <span>Book Site Visit Now</span>
              <ArrowRight className="w-4 h-4 text-[#F37924]" />
            </a>

            <a
              href="tel:+919499933461"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-emerald-50 text-slate-900  text-sm border border-emerald-300 shadow-sm transition-all text-center"
            >
              <PhoneCall className="w-4 h-4 text-[#166534]" />
              <span>+91 94999 33461</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Detailed Specification Sheet */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-[#F0FDF4] border-b border-emerald-200 text-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center font-bold shadow-sm">
                  <selectedServiceModal.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0F2D24]">{selectedServiceModal.title}</h3>
                  <p className="text-xs text-[#166534] font-bold">{selectedServiceModal.category}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedServiceModal(null)}
                className="w-9 h-9 rounded-full bg-emerald-100 text-slate-700 flex items-center justify-center hover:bg-[#F37924] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-slate-900">
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Scope Summary</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedServiceModal.description}</p>
              </div>

              {/* Complete Specs Matrix */}
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Itemized Specifications Matrix</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedServiceModal.specs.map((sp, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-[11px] font-bold text-slate-500 uppercase">{sp.label}</p>
                      <p className="text-sm  text-slate-900 mt-0.5">{sp.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Stages */}
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Execution Stages</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedServiceModal.process.map((pr) => (
                    <div key={pr.step} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-center">
                      <span className="text-xs font-black text-[#F37924]">STAGE {pr.step}</span>
                      <p className="text-xs  text-[#0F2D24] mt-1">{pr.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-bold text-slate-600">
                <span>Timeline: </span>
                <span className="text-[#166534] font-black">{selectedServiceModal.timeline}</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800  text-xs transition-colors"
                >
                  Close
                </button>
                <a
                  href="#enquiry-form"
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#166534] hover:bg-[#0f4624] text-white  text-xs transition-colors shadow"
                >
                  Enquire for This Service
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Services;