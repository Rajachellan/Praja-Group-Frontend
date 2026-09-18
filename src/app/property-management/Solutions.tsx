import React from "react";
import {
  Wrench,
  UserCheck,
  Receipt,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

function Solutions() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:gap-12 gap-5">

          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto flex flex-col lg:gap-7 gap-5">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto" style={{ alignSelf: "flex-start" }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534] animate-bounce" />
              </span>
              <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.15em]">
                End-to-End Property Management
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{ letterSpacing: "1px", lineHeight: "60px" }}>
              Professional Property Management <br className="hidden sm:inline" />
              <span className="text-[#166534]">Services</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Prajha Group, we specialize in providing comprehensive Property Management services for a variety of real estate properties, including Flats, Villas, Plots, Farm Lands, and Gated Communities. Our dedicated team ensures that your property is well-maintained, efficiently managed, and provides maximum value, whether you are an investor, landowner, or resident.
            </p>
          </div>

          {/* 4 Core Covered Areas - Property Management Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1: Comprehensive Property Maintenance */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#166534] text-xs font-extrabold uppercase tracking-wider border border-emerald-200">
                  Property Care
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Comprehensive Property Maintenance
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Keep your property in prime condition with routine physical audits, preventative maintenance, electrical & plumbing care, deep cleaning, painting, and 24/7 rapid emergency repair response.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Routine Site Audits
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Plumbing & Electrical
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Deep Cleaning & Painting
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  24/7 Emergency Repairs
                </span>
              </div>
            </div>

            {/* Card 2: Tenant Coordination & Legal Assistance */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-extrabold uppercase tracking-wider border border-blue-200">
                  Tenant & Legal Care
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Tenant Coordination & Legal Assistance
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                End-to-end tenant management including police background verification, legal lease drafting, stamp duty registration, smooth tenant onboarding, rent collection, and legal dispute support.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Verified Screening
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Lease Registration
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Move-In / Exit Audits
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Legal Compliance
                </span>
              </div>
            </div>

            {/* Card 3: Transparent Financial Reporting */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Receipt className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full bg-amber-50 text-[#B45309] text-xs font-extrabold uppercase tracking-wider border border-amber-200">
                  Financial Transparency
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Transparent Financial Reporting
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Complete financial clarity with automated monthly rent remittances, property tax & utility bill payments, itemized maintenance expense logging, and digital accounting reports.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Automated Rent Remittance
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Property Tax Filing
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Utility Bill Management
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Itemized Monthly Reports
                </span>
              </div>
            </div>

            {/* Card 4: Customized Management Solutions */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#166534] transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-[#166534]/10 transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-extrabold uppercase tracking-wider border border-purple-200">
                  Tailored Management
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Customized Management Solutions
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Tailored property management packages for vacant plots, independent luxury villas, apartment flats, farm lands, gated communities, and Non-Resident Indian (NRI) property owners.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  NRI Plot Caretaking
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Gated Community Care
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Vacant Land Protection
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  Customized Care Plans
                </span>
              </div>
            </div>

          </div>

          {/* Live Performance Counter Bar */}
          <div className="bg-[#0F2D24] text-white rounded-3xl p-8 sm:p-10 shadow-2xl mb-12 border border-emerald-900">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-900/80">
              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-[#F37924]">350+</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">NRI Properties Managed</p>
                <p className="text-[11px] text-emerald-400">Across Prime Chennai Locations</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-white">100%</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Police Verified Tenants</p>
                <p className="text-[11px] text-emerald-400">Rigorous Onboarding Audits</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-[#F37924]">24/7</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Emergency Repair Desk</p>
                <p className="text-[11px] text-emerald-400">Licensed Technical Dispatch</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <p className="text-3xl sm:text-4xl font-bold text-white">100%</p>
                <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Tax Compliance Record</p>
                <p className="text-[11px] text-emerald-400">Municipal & EB Bill Filing</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Solutions;