import React from "react"
import {
  MapPinned,
  DraftingCompass,
  Leaf,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
function Solutions(){
    return(
        <>
        
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
                End-to-End Development Solution
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{letterSpacing:"1px",lineHeight:"60px"}}>
           Comprehensive Development Solutions for <br className="hidden sm:inline" />
              <span className="text-[#166534]">Builders & Developers</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed ">
         At Prajha Group, we offer a full spectrum of services tailored to developers, from land acquisition to project completion. We understand the complexities of construction development and are here to guide you through every stage of the process, ensuring your project is delivered on time, within budget, and to the highest standards.
            </p>
          </div>

          {/* 4 Core Covered Areas - Non-Image Interactive Bento Grid */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                   
{/* Card 1 */}
<div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />

  <div className="flex items-center justify-between mb-6">
    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
      <MapPinned className="w-6 h-6" />
    </div>

    <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#166534] text-xs font-extrabold uppercase tracking-wider border border-emerald-200">
      Strategic Acquisition
    </span>
  </div>

  <h3 className="text-2xl font-bold mb-3">
    Expert Land Acquisition Assistance
  </h3>

  <p className="text-slate-600 text-sm leading-relaxed mb-6">
    Identify and secure the right development opportunities with expert
    support in land evaluation, feasibility assessment, due diligence, and
    acquisition planning.
  </p>

  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Land Evaluation
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Site Feasibility
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Due Diligence
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Acquisition Planning
    </span>
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
      Design & Planning
    </span>
  </div>

  <h3 className="text-2xl font-bold mb-3">
    Architectural Planning & Design
  </h3>

  <p className="text-slate-600 text-sm leading-relaxed mb-6">
    Transform development concepts into practical and inspiring spaces
    through thoughtful architectural planning, design coordination, and
    project-oriented solutions.
  </p>

  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Concept Planning
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Architectural Design
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Space Planning
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Design Coordination
    </span>
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
      Sustainable Development
    </span>
  </div>

  <h3 className="text-2xl font-bold mb-3">
    Sustainable & Smart Construction
  </h3>

  <p className="text-slate-600 text-sm leading-relaxed mb-6">
    Build responsibly with sustainable materials, energy-efficient
    solutions, smart construction practices, and resource-conscious
    approaches designed for long-term performance.
  </p>

  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Sustainable Materials
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Energy Efficiency
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Smart Construction
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Resource Efficiency
    </span>
  </div>
</div>


{/* Card 4 */}
<div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />

  <div className="flex items-center justify-between mb-6">
    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
      <ClipboardCheck className="w-6 h-6" />
    </div>

    <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-extrabold uppercase tracking-wider border border-purple-200">
      End-to-End Management
    </span>
  </div>

  <h3 className="text-2xl font-bold mb-3">
    End-to-End Project Management
  </h3>

  <p className="text-slate-600 text-sm leading-relaxed mb-6">
    Manage every stage of development with coordinated planning, execution,
    cost control, quality monitoring, and timely project delivery.
  </p>

  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Project Planning
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Cost Management
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Quality Control
    </span>

    <span className="flex items-center gap-1.5">
      <CheckCircle2 className="w-4 h-4 text-[#166534]" />
      Timely Delivery
    </span>
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
          {/* <div className="flex flex-wrap items-center justify-center gap-6">
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
          </div> */}

        </div>
      </section>


        </>
    )
}

export default Solutions