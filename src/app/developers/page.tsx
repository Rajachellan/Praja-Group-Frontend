'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdvancedFaqSection, { FaqItem } from '../components/AdvancedFaqSection';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  Handshake,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  Clock,
  Sparkles,
  TreePine,
  Shield,
  FileCheck,
  Award,
  BadgeCheck,
  Calculator,
  Compass,
  Check,
  ChevronRight,
  Send,
  Zap,
  Globe,
  Layers,
  Search,
} from 'lucide-react';

export default function DevelopersPage() {
  // JV Calculator state
  const [landExtent, setLandExtent] = useState<number>(3); // in grounds
  const [landUnit, setLandUnit] = useState<'grounds' | 'acres'>('grounds');

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Joint Venture Development',
    location: '',
    extent: '3 Grounds',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const developerServices = [
    {
      id: 'approved-plots',
      title: 'CMDA & DTCP Approved Plot Layouts',
      subtitle: 'Clear-Title Residential Land Corridors',
      description:
        'Clear-title, 100% legally verified residential plots strategically positioned in Chennai’s fastest-growing corridors with high capital appreciation potential.',
      icon: MapPin,
      badge: '100% Approved',
      badgeColor: 'bg-emerald-50 text-[#166534] border border-emerald-200',
      highlights: ['CMDA & DTCP layout approvals', '30-year legal title verification', 'Pre-approved for instant bank loans', 'Ready-for-construction plots'],
      image: '/service-developers.png',
    },
    {
      id: 'gated-townships',
      title: 'Luxury Gated Villa Communities',
      subtitle: 'Master-Planned Townships & Enclaves',
      description:
        'Master-planned residential townships featuring modern luxury villas, landscaped parks, private clubhouses, 24/7 security, and underground utilities.',
      icon: Building2,
      badge: 'Gated Township',
      badgeColor: 'bg-amber-50 text-[#B45309] border border-amber-200',
      highlights: ['24/7 Gated security & CCTV', 'Underground electrical & water lines', 'Blacktop avenue roads & streetlights', 'Community parks & play areas'],
      image: '/service-developers.png',
    },
    {
      id: 'joint-venture',
      title: 'Joint Venture Land Development',
      subtitle: 'Maximize the Value of Your Land',
      description:
        'Partner with Prajha Group to transform your vacant land into a profitable residential or commercial project with fair profit sharing and zero hassle.',
      icon: Handshake,
      badge: 'Landowner JV',
      badgeColor: 'bg-orange-50 text-[#C2410C] border border-orange-200',
      highlights: ['High landowner built-up area ratio', 'Complete project funding by Prajha', 'Legal & sanction clearances', 'Fast-track completion timeline'],
      image: '/service-developers.png',
    },
  ];

  const amenities = [
    { title: '30ft & 40ft Blacktop Avenue Roads', desc: 'Heavy-duty asphalt roads designed with proper rainwater gradient drains.', icon: MapPin },
    { title: 'Underground Electrical Cables', desc: 'No unsightly overhead wires; concealed cabling with avenue LED street lighting.', icon: Zap },
    { title: 'CMDA/DTCP Approved Parks', desc: 'Landscaped green spaces, walking tracks, and dedicated children’s play enclaves.', icon: TreePine },
    { title: '24/7 Security Arch & CCTV', desc: 'Monitored main entrance arches with round-the-clock security guards.', icon: ShieldCheck },
    { title: 'Avenue Plantation & Greenery', desc: 'Shade-giving native trees and lush landscaping along all layout avenues.', icon: Sparkles },
    { title: 'Instant Bank Loan Sanctions', desc: 'Pre-approved by SBI, HDFC, ICICI, and Axis Bank for up to 80% land funding.', icon: BadgeCheck },
  ];

  const developerFaqs: FaqItem[] = [
    {
      id: 'd1',
      question: 'What is a Joint Venture (JV) land development with Prajha Group?',
      answer:
        'In a Joint Venture partnership, you contribute your vacant land, and Prajha Group handles 100% of project financing, architectural design, government plan approvals (CMDA/DTCP), civil construction, and marketing. Built-up area or profits are shared according to a mutually agreed percentage ratio.',
      category: 'Joint Venture',
    },
    {
      id: 'd2',
      question: 'How do I know if my land is suitable for a Prajha Joint Venture project?',
      answer:
        'We consider land parcels starting from 2 Grounds (approx 4,800 sq.ft) up to multi-acre tracts located in Chennai and suburban growth corridors. Our legal and technical team will conduct a free site assessment and title verification.',
      category: 'Joint Venture',
    },
    {
      id: 'd3',
      question: 'Are all Prajha Group layout plots CMDA or DTCP approved?',
      answer:
        'Yes, 100% of our plot layouts hold valid CMDA or DTCP layout sanction orders with RERA registration where applicable. All road gifts and public park reservations are completed and handed over to local municipalities.',
      category: 'Approvals & Titles',
    },
    {
      id: 'd4',
      question: 'Can I get a home/land loan for purchasing a Prajha layout plot?',
      answer:
        'Absolutly. All Prajha layout projects carry pre-approved bank loan clearance certificates from top financial institutions including SBI, HDFC Bank, ICICI, and Sundaram Home Finance, facilitating fast 7-day loan disbursements.',
      category: 'Financing & Loans',
    },
    {
      id: 'd5',
      question: 'What infrastructure is provided in Prajha’s gated plot townships?',
      answer:
        'Every Prajha township layout includes blacktop avenue roads, underground electrical supply lines, streetlights, individual water connections, compound wall perimeter security, 24/7 entrance gate security, and landscaped parks.',
      category: 'Township Infrastructure',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#F37924] selection:text-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F4F8F6] via-white to-white overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-[#F37924]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-100/70 border border-emerald-200 text-[#0F2D24] text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-[#F37924]" />
                <span>PRAJHA DEVELOPERS & JOINT VENTURES • CMDA / DTCP APPROVED</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2D24] tracking-tight leading-[1.15]">
                Premier Layout Development & <span className="bg-gradient-to-r from-[#0F2D24] via-[#166534] to-[#F37924] bg-clip-text text-transparent">Landowner Joint Ventures</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
                We develop high-appreciation CMDA & DTCP approved residential plot layouts, gated townships, and collaborate with landowners to unlock maximum asset value through lucrative Joint Venture developments.
              </p>

              {/* Badges Bar */}
              <div className="grid grid-cols-3 gap-4 pt-2 pb-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#166534] flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Layout Sanction</p>
                    <p className="text-sm font-bold text-slate-900">100% CMDA/DTCP</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B45309] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Townships</p>
                    <p className="text-sm font-bold text-slate-900">30+ Completed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Legal Status</p>
                    <p className="text-sm font-bold text-slate-900">Clear 30-Yr Title</p>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#jv-calculator"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#0F2D24] text-white font-bold text-base hover:bg-[#166534] shadow-lg shadow-emerald-900/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Handshake className="w-5 h-5 text-[#F37924]" />
                  <span>Explore Landowner JV Proposal</span>
                </a>

                <a
                  href="#jv-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-slate-800 font-bold text-base border-2 border-slate-200 hover:border-[#0F2D24] hover:text-[#0F2D24] transition-all duration-300 shadow-sm"
                >
                  <span>Submit Land for JV</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-300/50 bg-white p-3 group">
                <div className="relative h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/service-developers.png"
                    alt="Prajha Group Approved Township Layouts"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D24]/80 via-[#0F2D24]/20 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0F2D24] text-xs font-bold shadow-md flex items-center gap-1.5">
                      <BadgeCheck className="w-4 h-4 text-[#F37924]" />
                      CMDA Approved Township
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#F37924] text-white text-xs font-bold shadow-md">
                      Bank Loan Ready
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="inline-block px-3 py-1 rounded-md bg-[#F37924] text-white text-xs font-bold uppercase tracking-wider">
                      Flagship Layout Development
                    </div>
                    <h3 className="text-xl font-bold">Prajha Green Enclave Township</h3>
                    <p className="text-xs text-emerald-100 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
                      Underground Cables • Blacktop Roads • 24/7 Gated Security
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0F2D24]" />
                    Direct Developer Procurement
                  </span>
                  <span className="text-[#166534] font-bold">Zero Brokerage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Pillars Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100/70 text-[#166534] text-xs sm:text-sm font-bold tracking-wider uppercase">
              Developer Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D24] tracking-tight">
              Three Mainstreams of Land & Township Development
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We specialize in creating long-term real estate wealth for individual plot buyers, luxury home seekers, and landowner partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developerServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group rounded-3xl bg-white border border-slate-200/90 p-8 shadow-lg shadow-slate-100 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#0F2D24] text-white flex items-center justify-center shadow-md group-hover:bg-[#F37924] transition-colors duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#0F2D24] group-hover:text-[#166534] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#F37924] mt-1">{service.subtitle}</p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>

                    <div className="pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Highlights</p>
                      <ul className="space-y-2">
                        {service.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-100">
                    <a
                      href="#jv-form"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2D24] group-hover:text-[#F37924] transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Landowner Joint Venture (JV) Explorer */}
      <section id="jv-calculator" className="py-20 bg-slate-50/80 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-amber-100/80 text-[#B45309] text-xs sm:text-sm font-bold tracking-wider uppercase">
              Landowner Value Unlock
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D24]">
              Interactive Joint Venture (JV) Partnership Model
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Have a plot or multi-acre land in Chennai? Discover how Prajha Group finances 100% of development, converts your land into premium built-up area or approved plots, and multiplies your financial returns.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Control Card */}
              <div className="lg:col-span-6 space-y-6 bg-emerald-900 text-white p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl font-bold flex items-center gap-2 text-emerald-100">
                  <Handshake className="w-6 h-6 text-[#F37924]" />
                  Simulate Your Land Extent
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-emerald-200">Land Extent</label>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-[#F37924]">
                        {landExtent} {landUnit}
                      </span>
                      <div className="flex bg-emerald-800 p-1 rounded-lg text-xs">
                        <button
                          onClick={() => setLandUnit('grounds')}
                          className={`px-2.5 py-1 rounded-md font-bold ${landUnit === 'grounds' ? 'bg-[#F37924] text-white' : 'text-emerald-200'}`}
                        >
                          Grounds
                        </button>
                        <button
                          onClick={() => setLandUnit('acres')}
                          className={`px-2.5 py-1 rounded-md font-bold ${landUnit === 'acres' ? 'bg-[#F37924] text-white' : 'text-emerald-200'}`}
                        >
                          Acres
                        </button>
                      </div>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={landUnit === 'grounds' ? 2 : 1}
                    max={landUnit === 'grounds' ? 20 : 10}
                    step={1}
                    value={landExtent}
                    onChange={(e) => setLandExtent(Number(e.target.value))}
                    className="w-full h-3 bg-emerald-800 rounded-lg appearance-none cursor-pointer accent-[#F37924]"
                  />
                </div>

                <div className="pt-4 border-t border-emerald-800 space-y-3 text-xs text-emerald-100">
                  <div className="flex justify-between">
                    <span>Landowner Financial Investment Required:</span>
                    <span className="font-bold text-[#F37924]">₹ 0 (Zero Capital)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CMDA / DTCP Sanction Costs:</span>
                    <span className="font-bold text-white">100% Funded by Prajha</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Construction & Architectural Cost:</span>
                    <span className="font-bold text-white">100% Funded by Prajha</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Landowner Built-Up Share Ratio:</span>
                    <span className="font-bold text-emerald-300">High Benchmark Percentage</span>
                  </div>
                </div>
              </div>

              {/* Right Value Proposition Card */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-2xl font-bold text-[#0F2D24]">Why Landowners Partner With Prajha</h3>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Maximum Profitability vs Outright Sale',
                      desc: 'Joint Venture yields 40% to 70% higher overall financial return compared to selling your vacant land outright.',
                    },
                    {
                      title: '100% Legal & Sanction Clearances',
                      desc: 'Our in-house legal advocate team handles title scrutiny, patta transfer, CMDA/DTCP sanctions, and RERA registration.',
                    },
                    {
                      title: 'Zero Subcontracting & Guaranteed Timelines',
                      desc: 'Executed by Prajha’s own civil engineering fleet with clear penalty clauses for project delays.',
                    },
                    {
                      title: 'Transparent Sales & Revenue Realization',
                      desc: 'Escrow account monitoring and joint marketing so you receive your share on every single unit sale.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#0F2D24]">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Township Infrastructure & Amenities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-bold tracking-wider uppercase">
              Infrastructure Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D24]">
              Signature Township Amenities & Infrastructure
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every plot layout created by Prajha Group is delivered with ready-to-build premium township infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((am, i) => {
              const Icon = am.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0F2D24] text-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#F37924]" />
                  </div>
                  <h4 className="font-bold text-lg text-[#0F2D24]">{am.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{am.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* JV & Plot Inquiry Form */}
      <section id="jv-form" className="py-20 bg-gradient-to-b from-slate-900 to-[#0F2D24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-[#F37924]/20 border border-[#F37924]/40 text-[#F37924] text-xs font-bold uppercase tracking-wider">
                Direct Landowner Cell
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                Submit Your Land Parcel For Joint Venture Evaluation
              </h2>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
                Connect directly with Prajha Group's senior joint venture directors. We will perform a complimentary legal title verification, CMDA feasibility study, and present an attractive JV proposal.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F37924] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-medium">JV Partnership Line</p>
                    <p className="text-lg font-bold text-white">+91 98400 67890 / 044-2244 8899</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F37924] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-medium">Email Land Documents / Patta Copy</p>
                    <p className="text-lg font-bold text-white">jv@prajhagroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#166534] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F2D24]">JV Proposal Request Received!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you <span className="font-bold text-slate-900">{formData.name}</span>. Our Joint Venture development team will review your land extent and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#0F2D24] text-white font-bold text-sm hover:bg-[#166534] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-[#0F2D24] mb-2">Request Joint Venture Evaluation</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. M. Ramanathan"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Interest</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm bg-white"
                        >
                          <option value="Joint Venture Development">Landowner Joint Venture (JV)</option>
                          <option value="Approved Plot Buying">Buy CMDA/DTCP Approved Plot</option>
                          <option value="Gated Villa Buying">Buy Gated Township Villa</option>
                          <option value="Outright Land Sale">Outright Land Sale Proposal</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Land Extent (Grounds/Acres)</label>
                        <input
                          type="text"
                          value={formData.extent}
                          onChange={(e) => setFormData({ ...formData, extent: e.target.value })}
                          placeholder="e.g. 4 Grounds / 2.5 Acres"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Location & Details</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify location (e.g. OMR, Porur, Guduvanchery), road width, patta availability..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0F2D24] text-white font-bold text-base hover:bg-[#166534] transition-colors shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5 text-[#F37924]" />
                      <span>Request Complimentary JV Proposal</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Advanced FAQ Section */}
      <AdvancedFaqSection
        title="Developers & Layout FAQs"
        subtitle="Answers regarding CMDA sanctions, bank loans, Joint Venture ratios, and clear title plot purchases."
        faqs={developerFaqs}
      />

      <Footer />
    </div>
  );
}
