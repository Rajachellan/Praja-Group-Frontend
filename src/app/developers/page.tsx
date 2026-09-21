

import React from "react"
import {
   ShieldCheck,
  ArrowRight,
  Sparkles,
  Award,
  ChevronRight,
  FileCheck,
  Home
} from 'lucide-react';
import Link from "next/link";
import RealEstateDeveloperAnimation from './Animation'
import Solutions from "./Solutions";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Faqs from "./Faqs";

function page(){
  return(
    <>
    
    <section className="min-h-screen bg-white text-slate-900 selection:bg-[#F37924] selection:text-white font-sans overflow-x-hidden">
    
    <section className="relative pt-40 sm:pt-44 lg:pt-48 pb-20 bg-gradient-to-b from-[#F4F8F6] via-white to-[#F8FAFC] border-b border-slate-100 overflow-hidden">
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
            <span className="text-[#F37924] font-bold">Developers</span>
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
                  BUILDING THE FUTURE OF REAL ESTATE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-black leading-[1.12]  mb-5 heading">
                Leading Real Estate Developers <br className="hidden sm:inline" />
                in <span className="text-[#166534] relative inline-block">Chennai</span>
              </h1>

              {/* Sub-headline */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-emerald-50/30 border-l-4 border-[#F37924] bg-white shadow-sm">
                <Sparkles className="w-5 h-5 text-[#F37924] shrink-0" />
                <h2 className="hero-heading italic  text-[16px] font-bold">
                 From Vision to Reality, We Build What’s Next
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl ">
                With expertise across residential and commercial development, Prajha Group combines strategic planning, quality construction, transparent execution, and timely delivery to create projects built for lasting value.
              </p>

              {/* Quick Key Highlights Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                <div className="p-2.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-all">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-[#166534] flex items-center justify-center mb-1.5 sm:mb-2">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Warranty</p>
                  <p className="text-xs sm:text-sm font-bold text-[#166534]">10-Yr Structural</p>
                </div>

                <div className="p-2.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-[#B45309] flex items-center justify-center mb-1.5 sm:mb-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Experience</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">15+ Years</p>
                </div>

                <div className="p-2.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-1.5 sm:mb-2">
                    <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Approvals</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">CMDA & DTCP</p>
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
               <RealEstateDeveloperAnimation speed={1.4}/>
              </div>
            </div>
          </div>
        </div>
    </section>

    <Solutions/>
    <Services/>
    <WhyChooseUs/>
    <Faqs/>

    </section>
    
    </>
  )
}

export default page