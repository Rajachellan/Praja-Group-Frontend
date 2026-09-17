'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdvancedFaqSection, { FaqItem } from '../components/AdvancedFaqSection';
import Image from 'next/image';
import Link from 'next/link';
import {
  Settings,
  ShieldCheck,
  UserCheck,
  Wrench,
  FileText,
  Camera,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Lock,
  Award,
  BadgeCheck,
  Video,
  Shield,
  Send,
  Building,
  Check,
  Star,
} from 'lucide-react';

export default function PropertyManagementPage() {
  const [activePlan, setActivePlan] = useState<'plot' | 'residential' | 'estate'>('residential');

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Vacant Plot Care',
    location: '',
    ownerStatus: 'NRI Owner',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const managementServices = [
    {
      id: 'nri-care',
      title: 'NRI Property Caretaking & Site Audits',
      subtitle: 'Plot Protection & HD Photo/Video Inspections',
      description:
        'Complete peace of mind for non-resident property owners. We perform periodic physical site visits, plot monitoring, boundary checks, and deliver high-resolution photo/video audit reports directly to your inbox/WhatsApp.',
      icon: Camera,
      badge: 'NRI Desk',
      badgeColor: 'bg-emerald-50 text-[#166534] border border-emerald-200',
      highlights: ['Quarterly photo & video audit reports', 'Encroachment & boundary checks', 'Plot fencing & signage maintenance', 'Dedicated personal relationship manager'],
      image: '/service-property-management.png',
    },
    {
      id: 'tenant-care',
      title: 'Tenant Screening & Rent Management',
      subtitle: 'Verified Onboarding & Timely Remittance',
      description:
        'End-to-end rental management including background-verified tenant placement, legal rental agreements, automated rent collection, and direct bank transfers.',
      icon: UserCheck,
      badge: 'Tenant Care',
      badgeColor: 'bg-amber-50 text-[#B45309] border border-amber-200',
      highlights: ['Police-verified tenant onboarding', 'Lease agreement drafting & registration', 'Automated monthly rent collection', 'Timely tenant exit & move-out audits'],
      image: '/service-property-management.png',
    },
    {
      id: 'maintenance-repairs',
      title: 'Facility Maintenance & Technical Repairs',
      subtitle: '24/7 Licensed Technical Support',
      description:
        'Full spectrum repair, maintenance, and deep cleaning services managed by licensed plumbers, electricians, painters, and HVAC technicians.',
      icon: Wrench,
      badge: '24/7 Repairs',
      badgeColor: 'bg-blue-50 text-blue-800 border border-blue-200',
      highlights: ['24/7 emergency repair response', 'Deep cleaning & pest control', 'Electrical, plumbing & woodwork', 'Pre-occupancy refresh & painting'],
      image: '/service-property-management.png',
    },
    {
      id: 'legal-tax',
      title: 'Legal Compliance & Property Tax Filing',
      subtitle: 'Municipal Tax & Title Verification',
      description:
        'Assistance with government property tax payments, water & sewage tax, land title renewals, electricity board transfers, and legal dispute protection.',
      icon: FileText,
      badge: 'Legal & Tax',
      badgeColor: 'bg-purple-50 text-purple-800 border border-purple-200',
      highlights: ['Annual property tax payment', 'Patta & title verification', 'EB connection & meter transfers', 'Legal notice representation'],
      image: '/service-property-management.png',
    },
  ];

  const plansData = {
    plot: {
      name: 'NRI Plot Guard Care',
      badge: 'Essential for Vacant Land & Plots',
      description: 'Physical site visits, encroachment checks, boundary fencing maintenance, and photo reports for vacant plots.',
      features: [
        'Bi-Monthly Physical Site Inspection',
        'HD Photo & Video Inspection Report',
        'Boundary Wall & Fence Condition Audit',
        'Encroachment Warning Signboards Installation',
        'Municipal Property Tax Payment Assistance',
        'Dedicated Personal Relationship Manager',
      ],
    },
    residential: {
      name: 'Residential Property & Tenant Guard',
      badge: '⭐ Most Popular for Independent Houses & Apartments',
      description: 'Full caretaking, tenant screening, agreement registration, rent collection, and regular plumbing/electrical maintenance.',
      features: [
        'Police-Verified Tenant Screening & Onboarding',
        'Legal Lease Agreement Drafting & Stamp Duty',
        'Automated Monthly Rent Remittance to Owner',
        'Pre-Move-In & Post-Move-Out Property Audits',
        '24/7 Emergency Plumbing & Electrical Repairs',
        'Property Tax & Water Tax Payment Support',
      ],
    },
    estate: {
      name: 'Platinum Estate & Commercial Management',
      badge: 'Comprehensive Multi-Unit & Villa Estates',
      description: 'White-glove care for luxury villas, commercial units, multi-tenant buildings, including deep cleaning & legal coverage.',
      features: [
        'Full Multi-Tenant & Commercial Unit Care',
        'Annual Deep Cleaning & Exterior Power Washing',
        'Pest Control & Landscape Lawn Maintenance',
        'Legal Title Scrutiny & Tax Assessment Clearance',
        'Priority 2-Hour Emergency Repair Dispatch',
        'Quarterly Video Call Walkthrough with Owner',
      ],
    },
  };

  const currentPlan = plansData[activePlan];

  const managementFaqs: FaqItem[] = [
    {
      id: 'p1',
      question: 'How do NRIs receive inspection updates about their property in Chennai?',
      answer:
        'Our dedicated team performs scheduled physical visits to your plot or house. We capture 4K high-resolution photos and video walkthroughs, check for any unauthorized encroachment or structural issues, and send a detailed digital report directly via WhatsApp and Email within 24 hours.',
      category: 'NRI Caretaking',
    },
    {
      id: 'p2',
      question: 'How does Prajha Group verify prospective tenants before leasing?',
      answer:
        'We perform rigorous tenant background checks including identity verification (Aadhaar/PAN), employment background check with corporate HR, police verification, and previous landlord reference checks before executing registered lease agreements.',
      category: 'Tenant Management',
    },
    {
      id: 'p3',
      question: 'What happens if a tenant delays rent payment or damages the property?',
      answer:
        'We manage all rent collections directly and enforce contractually binding payment schedules. In case of property damage during move-out, costs are audited against high-res check-in photos and deducted from the tenant’s security deposit before refunding.',
      category: 'Tenant Management',
    },
    {
      id: 'p4',
      question: 'Can Prajha Group pay property tax and utility bills on my behalf?',
      answer:
        'Yes. We assist property owners with municipal corporation property tax payments, water & sewage tax, and TNEB electricity bill monitoring, ensuring your property remains 100% tax-compliant with zero penalties.',
      category: 'Legal & Tax',
    },
    {
      id: 'p5',
      question: 'What emergency maintenance support do you provide?',
      answer:
        'We maintain a 24/7 rapid-response network of licensed plumbers, electricians, carpenters, and HVAC technicians for emergency leaks, short circuits, or structural maintenance.',
      category: 'Maintenance',
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
                <span>PRAJHA PROPERTY MANAGEMENT • NRI CARETAKING & ESTATE CARE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F2D24] tracking-tight leading-[1.15]">
                360° Property Management, <span className="bg-gradient-to-r from-[#0F2D24] via-[#166534] to-[#F37924] bg-clip-text text-transparent">NRI Caretaking & Tenant Services</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
                Complete peace of mind for local and non-resident property owners. We protect your land from encroachment, manage verified tenants, collect rent, and provide round-the-clock physical maintenance.
              </p>

              {/* Badges Bar */}
              <div className="grid grid-cols-3 gap-4 pt-2 pb-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#166534] flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">NRI Desk</p>
                    <p className="text-sm font-bold text-slate-900">HD Video Audits</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B45309] flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Tenants</p>
                    <p className="text-sm font-bold text-slate-900">100% Police Verified</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Repairs</p>
                    <p className="text-sm font-bold text-slate-900">24/7 Response</p>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#plans-matrix"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#0F2D24] text-white font-bold text-base hover:bg-[#166534] shadow-lg shadow-emerald-900/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <ShieldCheck className="w-5 h-5 text-[#F37924]" />
                  <span>View Management Plans</span>
                </a>

                <a
                  href="#enroll-form"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-slate-800 font-bold text-base border-2 border-slate-200 hover:border-[#0F2D24] hover:text-[#0F2D24] transition-all duration-300 shadow-sm"
                >
                  <span>Enroll Property Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-300/50 bg-white p-3 group">
                <div className="relative h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src="/service-property-management.png"
                    alt="Prajha Property Management Services"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D24]/80 via-[#0F2D24]/20 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0F2D24] text-xs font-bold shadow-md flex items-center gap-1.5">
                      <BadgeCheck className="w-4 h-4 text-[#F37924]" />
                      Trusted by 350+ NRI Landowners
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#F37924] text-white text-xs font-bold shadow-md">
                      HD Inspection
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="inline-block px-3 py-1 rounded-md bg-[#F37924] text-white text-xs font-bold uppercase tracking-wider">
                      NRI Dedicated Care Desk
                    </div>
                    <h3 className="text-xl font-bold">24/7 Vigilance & Estate Asset Management</h3>
                    <p className="text-xs text-emerald-100 font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F37924]" />
                      Quarterly Video Audits • Tax Filing • Tenant Care
                    </p>
                  </div>
                </div>

                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#0F2D24]" />
                    Anti-Encroachment Security
                  </span>
                  <span className="text-[#166534] font-bold">100% Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100/70 text-[#166534] text-xs sm:text-sm font-bold tracking-wider uppercase">
              Core Asset Protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D24] tracking-tight">
              Four Pillars of Comprehensive Property Management
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Designed specifically for NRIs and local owners seeking professional, accountable, and transparent property stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementServices.map((service) => {
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
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Service Deliverables</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                      href="#enroll-form"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2D24] group-hover:text-[#F37924] transition-colors"
                    >
                      <span>Enroll Property</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Plan Comparison Matrix */}
      <section id="plans-matrix" className="py-20 bg-slate-50/80 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-amber-100/80 text-[#B45309] text-xs sm:text-sm font-bold tracking-wider uppercase">
              Tailored Service Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D24]">
              Select Your Ideal Property Care Package
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Whether you own a vacant residential plot or a multi-tenant apartment building, choose a care plan tailored to your exact ownership requirements.
            </p>
          </div>

          {/* Plan Selector Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {(['plot', 'residential', 'estate'] as const).map((planKey) => {
              const plan = plansData[planKey];
              const isSelected = activePlan === planKey;
              return (
                <button
                  key={planKey}
                  onClick={() => setActivePlan(planKey)}
                  className={`p-6 rounded-3xl text-left border transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#0F2D24] text-white border-[#0F2D24] shadow-xl shadow-emerald-900/20'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        isSelected ? 'bg-[#F37924] text-white' : 'bg-emerald-100 text-[#166534]'
                      }`}
                    >
                      {planKey === 'plot' ? 'Vacant Land' : planKey === 'residential' ? 'Residential Care' : 'Full Estate'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-2">{plan.name}</h3>
                  <p className={`text-xs ${isSelected ? 'text-emerald-200' : 'text-slate-500'}`}>{plan.description}</p>
                </button>
              );
            })}
          </div>

          {/* Active Plan Detail Box */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#F37924] uppercase tracking-wider">{currentPlan.badge}</span>
                <h3 className="text-2xl font-bold text-[#0F2D24] mt-1">{currentPlan.name} - Included Deliverables</h3>
              </div>
              <a
                href="#enroll-form"
                className="px-6 py-3 rounded-xl bg-[#0F2D24] text-white font-bold text-sm hover:bg-[#166534] transition-colors"
              >
                Enroll In This Plan
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPlan.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Property Care Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-bold tracking-wider uppercase">
              Transparent Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D24]">
              Our 4-Stage Asset Care Lifecycle
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              How Prajha Group onboard, monitors, and maintains your real estate asset with 100% digital accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Onboarding & Audit',
                desc: 'Initial physical property audit, document review, title check, and key handover registration.',
                icon: Shield,
              },
              {
                step: '02',
                title: 'Physical Site Audits',
                desc: 'Scheduled physical visits, boundary checks, and anti-encroachment signboard maintenance.',
                icon: Camera,
              },
              {
                step: '03',
                title: 'Tenant & Repairs',
                desc: 'Police-verified tenant placement, automated rent remittance, and 24/7 technical repair dispatch.',
                icon: Wrench,
              },
              {
                step: '04',
                title: 'Digital Reporting',
                desc: 'Quarterly HD video & photo audit delivery directly to your email/WhatsApp with tax filing receipts.',
                icon: Video,
              },
            ].map((st, i) => {
              const StIcon = st.icon;
              return (
                <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#F37924]">{st.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0F2D24] flex items-center justify-center">
                        <StIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg text-[#0F2D24]">{st.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enroll / Request Care Form */}
      <section id="enroll-form" className="py-20 bg-gradient-to-b from-slate-900 to-[#0F2D24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-[#F37924]/20 border border-[#F37924]/40 text-[#F37924] text-xs font-bold uppercase tracking-wider">
                NRI Property Assistance Desk
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                Protect & Manage Your Real Estate Asset Today
              </h2>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
                Connect directly with Prajha Group’s dedicated NRI Property Relationship Team. Get a customized management quote or request an immediate physical site audit for your plot/villa in Chennai.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F37924] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-medium">NRI Desk Direct Line</p>
                    <p className="text-lg font-bold text-white">+91 98400 99887 / 044-2244 3322</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F37924] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-200 font-medium">Email Property Details / Inquiries</p>
                    <p className="text-lg font-bold text-white">propertymanagement@prajhagroup.com</p>
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
                    <h3 className="text-2xl font-bold text-[#0F2D24]">Enrollment Request Received!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you <span className="font-bold text-slate-900">{formData.name}</span>. Our NRI Property Relationship Manager will reach out via WhatsApp/Email within 2 business hours.
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
                    <h3 className="text-xl font-bold text-[#0F2D24] mb-2">Enroll Property for Management</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. S. Vasudevan"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 or International format"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Owner Status</label>
                        <select
                          value={formData.ownerStatus}
                          onChange={(e) => setFormData({ ...formData, ownerStatus: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm bg-white"
                        >
                          <option value="NRI Owner">NRI Owner (Overseas)</option>
                          <option value="Outstation Owner">Outstation Owner (Outside Chennai)</option>
                          <option value="Local Chennai Resident">Local Chennai Resident</option>
                          <option value="Commercial Landlord">Commercial / Multi-Unit Landlord</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Type</label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm bg-white"
                        >
                          <option value="Vacant Plot Care">Vacant Land / Plot Care</option>
                          <option value="Independent House Villa">Independent House / Villa</option>
                          <option value="Apartment Flat">Apartment Flat</option>
                          <option value="Commercial Complex">Commercial Space</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Location & Notes</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify location in Chennai (e.g. ECR, Velachery, Anna Nagar), plot extent or tenant details..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F2D24] text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0F2D24] text-white font-bold text-base hover:bg-[#166534] transition-colors shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5 text-[#F37924]" />
                      <span>Request Free Site Audit & Management Quote</span>
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
        title="Property Management FAQs"
        subtitle="Answers regarding NRI caretaking, tenant screening, property tax filing, and physical site audits."
        faqs={managementFaqs}
      />

      <Footer />
    </div>
  );
}
