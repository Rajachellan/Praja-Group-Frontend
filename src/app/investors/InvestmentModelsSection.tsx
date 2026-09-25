'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Coins,
  Landmark,
  Sparkles,
} from 'lucide-react';

type InvestmentModel = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: typeof Landmark;
  highlights: string[];
};

const investmentModels: InvestmentModel[] = [
  {
    id: 'land-investments',
    title: 'Land Investments',
    subtitle: 'High-Appreciation Land & Joint Ventures',
    description: 'Partner with us on strategic land acquisition, CMDA/DTCP layout approvals, and prime parcel developments across rapidly expanding corridors in Chennai and Tamil Nadu.',
    badge: 'High Land Equity',
    icon: Landmark,
    highlights: ['Strategic land acquisition in high-growth Chennai corridors', 'Joint Venture (JV) partnership models with clear profit sharing', 'CMDA / DTCP approved residential & commercial land layouts'],
  },
  {
    id: 'buildings-projects',
    title: 'Buildings & Projects',
    subtitle: 'Residential Flats, Villas & Commercial Towers',
    description: 'Invest directly into active residential flat developments, luxury independent villas, gated communities, and commercial corporate parks with pre-launch pricing advantages.',
    badge: 'Pre-Launch & Ready Units',
    icon: Building2,
    highlights: ['Pre-launch pricing discounts on premium residential flats', 'Luxury villa developments with rapid rental yield potential', 'Commercial corporate hubs in prime Chennai business districts'],
  },
  {
    id: 'project-funding',
    title: 'Project Funding',
    subtitle: 'Capital Partnership & Debt/Equity Funding',
    description: 'Provide project capital backing for large-scale EPC infrastructure developments. Benefit from structured return rates, locked timelines, and asset-backed security.',
    badge: 'Structured Capital Returns',
    icon: Coins,
    highlights: ['Asset-backed project funding with contractual return rates', 'Structured milestone disbursement & transparent BOQ audits', 'Flexible equity & debt investment structures for angel investors'],
  },
];

export default function InvestmentModelsSection() {
  const [activeModel, setActiveModel] = useState(investmentModels[0].id);
  const selectedModel = investmentModels.find((model) => model.id === activeModel) || investmentModels[0];
  const SelectedIcon = selectedModel.icon;

  return (
    <section className="py-10 lg:py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm mx-auto">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" /><span className="relative inline-flex h-full w-full rounded-full bg-[#166534]" /></span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.15em] text-[#0F2D24]">collaboration models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Investment Opportunities to <span className="text-[#166534]">Collaborate</span></h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">We offer multiple investment models to match your financial goals, risk appetite, and portfolio preferences.</p>
        </div>

        <div className="flex flex-nowrap sm:flex-wrap items-center sm:justify-center justify-start gap-3 mb-10 lg:mb-12 overflow-x-auto pb-3 sm:pb-0 scrollbar-none px-2 max-w-full">
          {investmentModels.map((model) => {
            const Icon = model.icon;
            const isSelected = activeModel === model.id;
            return <button key={model.id} onClick={() => setActiveModel(model.id)} className={`px-6 py-3 rounded-2xl text-[14px] font-bold transition-all duration-300 cursor-pointer flex items-center gap-2.5 shrink-0 whitespace-nowrap ${isSelected ? 'bg-[#166534] text-white shadow-lg shadow-[#166534]/25 scale-105' : 'bg-white text-slate-700 hover:text-[#166534] border border-slate-200 hover:border-emerald-300 shadow-sm'}`}><Icon className={`w-4 h-4 ${isSelected ? 'text-[#F37924]' : 'text-[#166534]'}`} /><span>{model.title}</span></button>;
          })}
        </div>

        <div className="bg-gradient-to-r from-[#F0FDF4] via-white to-[#F0FDF4] rounded-3xl p-8 sm:p-12 border border-emerald-200/90 shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#166534] text-white text-xs font-bold uppercase tracking-wider"><Sparkles className="w-3.5 h-3.5 text-[#F37924]" /><span>Model: {selectedModel.title}</span></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">Collaborate in <span className="text-[#166534]">{selectedModel.title}</span></h3>
              <p className="text-[13px] font-bold text-[#F37924]">{selectedModel.subtitle}</p>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{selectedModel.description}</p>
              <Link href="#investor-enquiry" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"><span>Request Model Prospectus</span><ArrowRight className="w-4 h-4 text-[#F37924]" /></Link>
            </div>
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-700"><SelectedIcon className="w-4 h-4 text-[#166534]" /> Strategic Benefits & Assurance</h4>
              <div className="space-y-3">{selectedModel.highlights.map((highlight) => <div key={highlight} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80"><div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4" /></div><span className="text-xs sm:text-sm text-slate-800 leading-snug font-semibold">{highlight}</span></div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
