'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdvancedFaqSection, { FaqItem } from '../components/AdvancedFaqSection';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building,
  Building2,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Award,
  ChevronRight,
  Send,
  Shield,
  Eye,
  Smile,
  DraftingCompass,
  Hammer,
  Compass,
  Ruler,
  Layers,
  BadgeCheck,
  Star,
  Wrench,
  FileCheck,
  Leaf,
  Maximize2,
  X,
  MapPin,
  CheckCircle, Home
} from 'lucide-react';
import ConstructionBadge from './Animation'
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: typeof Compass;
}

const STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Design & Plan Sanctions',
    desc: 'Architectural 2D/3D layouts, structural engineering calculations, soil testing, and CMDA/DTCP government approvals.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Civil Foundation',
    desc: 'Excavation, anti-termite chemical treatment, RCC column footing, column starter, and plinth beam casting.',
    icon: Ruler,
  },
  {
    step: '03',
    title: 'Superstructure & Masonry',
    desc: 'Column erection, first quality brickwork masonry, beam casting, RCC roof slab, and lintel beams.',
    icon: Building,
  },
  {
    step: '04',
    title: 'MEP & Interior Finishing',
    desc: 'Concealed flame-guard wiring, plumbing lines, double-coat plastering, tiles installation, and exterior painting.',
    icon: Layers,
  },
  {
    step: '05',
    title: 'Handover & Warranty',
    desc: 'Deep cleaning, rigorous 50-point quality audit, EB meter connection, key handover & 10-Year Warranty Certificate.',
    icon: BadgeCheck,
  },
];

export default function ConstructionsPage() {
  const [activePackage, setActivePackage] = useState<'essential' | 'luxury' | 'platinum'>('luxury');
  const [builtUpArea, setBuiltUpArea] = useState<number>(1800);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  const packageSpecs = {
    essential: {
      name: 'Essential Branded Package',
      rate: 2150,
      badge: 'Popular for Rental & Standard Homes',
      desc: 'High-durability structural specifications with branded standard finishes.',
      steel: 'Fe 550D TMT Steel (Tata Tiscon / JSW)',
      cement: '53 Grade OPC / PPC (Ultratech / ACC)',
      bricks: 'First Quality Red Clay Bricks / High-Density AAC',
      flooring: 'Vitrified Tiles ₹65/sq.ft (Kajaria / Somany)',
      fittings: 'Jaquar / Cera Designer Sanitaryware',
      wiring: 'Fire-Resistant Copper Wiring (Finolex / Havells)',
      painting: 'Asian Paints Tractor Emulsion (2 Coats)',
    },
    luxury: {
      name: 'Luxury Villa Package',
      rate: 2650,
      badge: '⭐ Recommended for Custom Premium Residences',
      desc: 'Premium branded materials, teak joinery, large format tiles, and architectural lighting.',
      steel: 'Fe 550D Primary TMT Steel (Tata Tiscon)',
      cement: '53 Grade Premium Weather Plus (Ultratech Super)',
      bricks: 'High-Density Red Chamber Bricks',
      flooring: 'Large Format Premium Tiles ₹110/sq.ft (Kajaria Eternity)',
      fittings: 'Kohler / Grohe Premium Sanitaryware',
      wiring: 'Modular Switches & Flame Guard Cables (Legrand / Havells)',
      painting: 'Asian Paints Royale Luxury Emulsion + Apex Exterior',
    },
    platinum: {
      name: 'Platinum Architect Masterpiece',
      rate: 3250,
      badge: 'Ultra-Luxury Custom Architectural Estate',
      desc: 'Italian Marble, Smart Home Automation, Custom Elevators, and 10-Year Structural Care.',
      steel: 'Fe 550D Superior TMT Steel (Tata Tiscon / SAIL)',
      cement: 'Ultratech Weather Plus / Premium OPC 53',
      bricks: 'Wire-Cut Red Clay Bricks / Thermal Blocks',
      flooring: 'Imported Italian Marble / Hardwood ₹250+/sq.ft',
      fittings: 'Hansgrohe / Toto Smart Automation Fittings',
      wiring: 'Automation Ready Wiring & Schneider Touch Panels',
      painting: 'Asian Paints PU Finish + Texture Accent Walls',
    },
  };

  const currentPkg = packageSpecs[activePackage];
  const totalCostEstimate = (builtUpArea * currentPkg.rate).toLocaleString('en-IN');

  const constructionsFaqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What types of construction services does Prajha Group offer in Chennai?',
      answer:
        'Prajha Group provides a comprehensive range of construction services, including residential turnkey villa construction, commercial office complexes, design-build architectural solutions, smart infrastructure development, and building renovation & remodeling.',
      category: 'Services',
    },
    {
      id: 'faq-2',
      question: 'How much experience does Prajha Group have in the construction industry?',
      answer:
        'Prajha Group boasts over 15 years of experience in the civil construction industry across Chennai, showcasing proven expertise in executing projects of varying scales with uncompromised material quality and client satisfaction.',
      category: 'Experience',
    },
    {
      id: 'faq-3',
      question: 'How do you guarantee material quality and structural safety?',
      answer:
        'We enforce multi-tier quality testing on all materials: steel lab testing for tensile strength (Fe 550D grade), concrete cube compressive strength tests at 7 & 28 days, and weekly photographic progress reports. All materials are directly procured from authorized brand distributors.',
      category: 'Quality & Safety',
    },
    {
      id: 'faq-4',
      question: 'Does Prajha Group handle CMDA / DTCP plan sanctions and bank loan approvals?',
      answer:
        'Yes! We handle 100% of government plan sanction processing including CMDA, DTCP, and local corporation building permits. We also maintain tie-ups with SBI, HDFC, and ICICI for instant construction loan clearances.',
      category: 'Approvals & Sanctions',
    },
    {
      id: 'faq-5',
      question: 'How can I initiate a construction project with Prajha Group?',
      answer:
        'You can reach our senior civil engineering team by calling +91 94999 33461 or emailing info@prajhagroup.com. We schedule a complimentary site visit and provide an itemized BOQ cost estimate within 24 hours.',
      category: 'Contact & Booking',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#F37924] selection:text-white font-sans overflow-x-hidden">


      {/* Hero Section - Attractive Bright White Aesthetic */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F4F8F6] via-white to-[#F8FAFC] border-b border-slate-100 overflow-hidden">
        {/* Decorative Ambient Soft Meshes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-20 w-[450px] h-[450px] rounded-full bg-[#F37924]/5 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15, 45, 36, 0.05) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            <Link href="/" className="hover: transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F37924] font-bold">Construction</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-left">
              {/* Badge Tagline */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider ">
                  PRAJHA CONSTRUCTIONS DIVISION • 15+ YEARS CIVIL EXCELLENCE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-black leading-[1.12]  mb-5 heading">
                Best Construction Company <br className="hidden sm:inline" />
                in <span className="text-[#166534] relative inline-block">Chennai</span>
              </h1>

              {/* Sub-headline */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-emerald-50/30 border-l-4 border-[#F37924] bg-white shadow-sm">
                <Sparkles className="w-5 h-5 text-[#F37924] shrink-0" />
                <h2 className="hero-heading italic  text-[16px] font-bold">
                  Build Your Dream Project with Experts
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl ">
                At Prajha Group, we turn ambitious architectural concepts into structural reality. From individual turnkey luxury villas to high-rise commercial corporate hubs, our civil engineering team delivers superior standards, complete material transparency, and on-time project completion.
              </p>

              {/* Quick Key Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#166534] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Warranty</p>
                  <p className="text-sm font-bold text-slate-900">10-Yr Structural</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B45309] flex items-center justify-center mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Experience</p>
                  <p className="text-sm font-bold text-slate-900">15+ Years</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-2">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Approvals</p>
                  <p className="text-sm font-bold text-slate-900">CMDA & DTCP</p>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="grid grid-cols-2 lg:gap-5 gap-2 mb-10">
                <Link
                  href="#projects"
                  className="get-in-touch-btn group">
                  <span>Book a Free Counsultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  aria-label="Villa For Sale"
                  className="sale-btn" >
                  <div className="w-7 h-7 rounded-full bg-emerald-100/80 border border-emerald-600/30 flex items-center justify-center text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-all duration-200 shrink-0">
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <span>Villa for sale</span>
                </button>
              </div>

            </div>

            {/* Right Hero Frame - Larger 1:1 Aspect Ratio Construction Animation */}
            <div className="lg:col-span-5 xl:col-span-6 w-full flex items-center justify-center">
              <div className="w-full max-w-[580px] lg:max-w-[640px] xl:max-w-[700px] aspect-square">
                <ConstructionBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Your Vision: Trusted Construction Services (Non-Image Bento & Showcase Grid) */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:gap-12 gap-5">

          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto flex flex-col lg:gap-7 gap-5">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto" style={{alignSelf:"flex-start"}}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.15em] ">
                End-to-End Building Solutions
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{letterSpacing:"1px",lineHeight:"60px"}}>
              Building Your Vision <br className="hidden sm:inline" />
              <span className="text-[#166534]">Trusted Construction Services</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed ">
              At Prajha Group, we bring your construction dreams to life with expert craftsmanship, attention to detail, and a commitment to quality. Whether you’re building a residential home, commercial property, or undertaking a renovation project, our team of professional builders is here to guide you every step of the way.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We take pride in offering premium construction services that align with your goals. From conceptual design to final execution, our expertise covers:
            </p>
          </div>

          {/* 4 Core Covered Areas - Non-Image Interactive Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#166534] text-xs font-extrabold uppercase tracking-wider border border-emerald-200">
                  Turnkey Execution
                </span>
              </div>
              <h3 className="text-2xl font-bold  mb-3">Residential & Commercial Construction</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Turnkey luxury villas, independent houses, gated communities, and corporate office complexes across Chennai with Fe 550D TMT steel and 53-grade cement.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Independent Villas</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Commercial Towers</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Gated Communities</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Multi-Story Duplex</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <DraftingCompass className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-extrabold uppercase tracking-wider border border-blue-200">
                  100% Plan Sanctions
                </span>
              </div>
              <h3 className="text-2xl font-bold  mb-3">Design & Build Solutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                2D/3D architectural drawings, structural engineering calculations, soil testing, and CMDA/DTCP government building permits under one roof.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> 3D Elevation Layouts</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> CMDA & DTCP Permits</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Structural Calculations</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Bank Loan Support</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-[#B45309] text-xs font-extrabold uppercase tracking-wider border border-amber-200">
                  Eco & Sustainable
                </span>
              </div>
              <h3 className="text-2xl font-bold  mb-3">Smart & Sustainable Infrastructure</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Eco-friendly building materials, rainwater harvesting pits, thermal-insulated brickwork, and energy-efficient solar power integration.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Rainwater Harvesting</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Thermal AAC Bricks</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Solar Net Metering</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Green Building Standards</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Hammer className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-extrabold uppercase tracking-wider border border-purple-200">
                  Structural Expansion
                </span>
              </div>
              <h3 className="text-2xl font-bold  mb-3">Renovation & Remodeling</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Structural strengthening, additional floor expansions, exterior facade modernization, interior overhaul, and space redesign.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Floor Additions</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Facade Modernization</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Structural Strengthening</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#166534]" /> Interior Fit-Outs</span>
              </div>
            </div>
          </div>

          {/* Live Performance Counter Bar (Replaces floating image stat) */}
          <div className="bg-[#0F2D24] text-white rounded-3xl p-8 sm:p-10 shadow-2xl mb-12 border border-emerald-900">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-900/80">
              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-[#F37924]">150+</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Completed Projects</p>
                <p className="text-[11px] text-emerald-400">Across Prime Chennai Locations</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-white">15+ Years</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Civil Engineering Excellence</p>
                <p className="text-[11px] text-emerald-400">Proven Structural Expertise</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-[#F37924]">100%</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">CMDA & DTCP Record</p>
                <p className="text-[11px] text-emerald-400">Government Sanctions Clearance</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-white">10-Year</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Structural Warranty</p>
                <p className="text-[11px] text-emerald-400">Contractual Structural Security</p>
              </div>
            </div>
          </div>

          {/* Action CTA Row */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#166534] hover:bg-[#166534] text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Book Free Site Consultation</span>
              <ArrowRight className="w-5 h-5 text-[#F37924]" />
            </a>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white px-5 py-3.5 rounded-2xl border border-slate-200 shadow-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Transparent BOQ Quote Delivered Within 24 Hours</span>
            </div>
          </div>

        </div>
      </section>

      {/* Our Construction Services Component Section */}
      <Services />

      {/* Why Choose Prajha Group? (5 Core Pillars) Component Section */}
      <WhyChooseUs />
      
    </div>
  );
}
