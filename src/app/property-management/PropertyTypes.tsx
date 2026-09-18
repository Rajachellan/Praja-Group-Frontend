'use client';

import React, { useState } from 'react';
import {
  Building2,
  Home,
  ShieldCheck,
  MapPin,
  Trees,
  CheckCircle2,
  ArrowRight,
  Ruler,
  Award,
  ChevronRight,
  PhoneCall,
  Clock,
  Check,
  Maximize2,
  X,
  BadgeCheck,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react';

interface PropertyTypeDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline?: string;
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

const PROPERTY_TYPES_DATA: PropertyTypeDetail[] = [
  {
    id: 'flats',
    title: 'Flats & Apartments',
    category: 'Residential Units & Apartments',
    badge: 'Most Popular',
    tagline: 'Complete property management solutions for residential flats & apartments.',
    icon: Building2,
    accentColor: 'text-[#166534]',
    bgGradient: 'from-emerald-500/10 via-emerald-50/50 to-transparent',
    borderColor: 'border-emerald-500/30',
    description:
      'We offer complete management solutions for residential flats and apartments, ensuring that your property is well-maintained, tenants are happy, and the property’s value is preserved. Our services include rent collection, maintenance coordination, tenant management, and regular inspections.',
    highlights: [
      'Timely Rent Collection & Automated Direct Remittance',
      '24/7 Routine & Emergency Repair Coordination',
      'Background-Verified Police Tenant Screening',
      'Scheduled Monthly Physical Property Inspections',
    ],
    specs: [
      { label: 'Scope', value: 'Complete Flats & Apartments Care' },
      { label: 'Rent Remittance', value: 'Direct Bank Transfer by 5th of Month' },
      { label: 'Tenant Audit', value: 'Police Verification & ID Checks' },
      { label: 'Repairs Desk', value: '24/7 On-Call Technical Support' },
      { label: 'Inspections', value: 'Monthly Photo & Video Audits' },
      { label: 'Reporting', value: 'Itemized Digital Monthly Ledger' },
    ],
    features: [
      {
        title: 'Happy Tenant Relations',
        desc: 'Swift resolution of plumbing, electrical, and structural complaints to maintain long-term tenancies.',
      },
      {
        title: 'Capital Preservation',
        desc: 'Preventative deep cleaning, touch-up painting, and routine structural sanity checks.',
      },
      {
        title: 'Zero Rent Delay',
        desc: 'Systematic tenant reminders, digital lease tracking, and automated rent collection.',
      },
      {
        title: 'Legal Agreement Care',
        desc: 'Stamp duty registration, lease drafting, security deposit handling, and move-out audits.',
      },
    ],
    process: [
      { step: '01', title: 'Property Onboarding & Keys Takeover' },
      { step: '02', title: 'Inspection & Rental Value Appraisal' },
      { step: '03', title: 'Verified Tenant Placement & Agreement' },
      { step: '04', title: 'Ongoing Care & Monthly Rent Remittance' },
    ],
    timeline: 'Immediate Property Onboarding',
    warranty: '100% Transparent Financial Ledger',
    idealFor: 'Apartment owners and NRI property investors seeking peaceful, hands-off property management in Chennai.',
  },
  {
    id: 'villas',
    title: 'Villa & Row House',
    category: 'Luxury & Independent Homes',
    badge: 'Luxury Care',
    tagline: 'Tailored services & luxury care for independent villas & row houses.',
    icon: Home,
    accentColor: 'text-[#F37924]',
    bgGradient: 'from-amber-500/10 via-amber-50/50 to-transparent',
    borderColor: 'border-amber-500/30',
    description:
      'Managing a villa or row house requires specialized expertise. Our team understands the unique needs of managing villas and luxury homes. We provide tailored services to meet your specific requirements, from property upkeep and security to tenant screening and rental management. Let us help you maintain the value and integrity of your luxury property.',
    highlights: [
      'Tailored Villa Upkeep, Garden & Pool Maintenance',
      'Private Security & Perimeter Surveillance Audits',
      'Rigorous High-Profile Tenant Screening & Leasing',
      'Comprehensive Rental & Asset Management',
    ],
    specs: [
      { label: 'Property Type', value: 'Independent Villas & Luxury Row Houses' },
      { label: 'Estate Upkeep', value: 'Custom Maintenance & Deep Sanitation' },
      { label: 'Security Desk', value: 'Physical & Digital Guard Surveillance' },
      { label: 'Landscaping', value: 'Garden, Terrace & Lawn Care Oversight' },
      { label: 'Lease Contract', value: 'Bespoke Executive Rental Agreements' },
      { label: 'Valuation', value: 'Long-Term Integrity & Asset Protection' },
    ],
    features: [
      {
        title: 'Specialized Villa Expertise',
        desc: 'Handling complex independent villa systems like water pressure pumps, solar grids, and private gardens.',
      },
      {
        title: 'Bespoke Care Plans',
        desc: 'Tailor-made maintenance schedules suited for high-value independent residences and row homes.',
      },
      {
        title: 'High-Net-Worth Screening',
        desc: 'Executive tenant onboarding tailored for corporate leaders and high-profile residents.',
      },
      {
        title: 'Integrity Preservation',
        desc: 'Preventing wear and tear with high-grade weather coatings, waterproofing, and woodwork care.',
      },
    ],
    process: [
      { step: '01', title: 'Exclusive Villa Assessment' },
      { step: '02', title: 'Customized Upkeep & Security Protocol' },
      { step: '03', title: 'Screening & High-Yield Leasing' },
      { step: '04', title: 'Dedicated Caretaker Management' },
    ],
    timeline: 'Custom Maintenance Schedule',
    warranty: 'Bespoke Luxury Estate Protection',
    idealFor: 'Villa owners, luxury row house landlords, and NRIs who require specialized care for high-end homes.',
  },
  {
    id: 'gated-communities',
    title: 'Gated Communities',
    category: 'Full Township & Society Management',
    badge: '360° Community Care',
    tagline: 'Comprehensive management for gated communities & residential townships.',
    icon: ShieldCheck,
    accentColor: 'text-blue-700',
    bgGradient: 'from-blue-500/10 via-blue-50/50 to-transparent',
    borderColor: 'border-blue-500/30',
    description:
      'We offer comprehensive management services for gated communities, including security, maintenance, landscaping, utilities, and resident communication. We focus on creating a safe, comfortable, and welcoming environment for residents, while also ensuring that the community operates smoothly and efficiently.',
    highlights: [
      '24/7 Security Management & Gatekeeper Protocols',
      'Common Area Maintenance & Landscaping Care',
      'Utility Infrastructure & Water System Management',
      'Seamless Resident Communication & Helpdesk',
    ],
    specs: [
      { label: 'Security', value: '24/7 Guard Staffing & Visitor RFID' },
      { label: 'Landscaping', value: 'Avenue, Park & Greenery Maintenance' },
      { label: 'Utilities', value: 'Water OHT, STP & DG Backup Management' },
      { label: 'Communication', value: 'Digital Resident Portal & Notices' },
      { label: 'Finances', value: 'Society Maintenance Fee Collection' },
      { label: 'Compliance', value: 'Association Legal & Audit Filings' },
    ],
    features: [
      {
        title: 'Safe & Secure Environment',
        desc: 'Strict gate protocols, CCTV monitoring, and rapid emergency response teams.',
      },
      {
        title: 'Manicured Common Areas',
        desc: 'Spotless parks, walking trails, swimming pools, and clubhouse upkeep.',
      },
      {
        title: 'Uninterrupted Utilities',
        desc: 'Continuous water supply, generator backup, and efficient sewage treatment plant operation.',
      },
      {
        title: 'Harmonious Resident Living',
        desc: 'Prompt redressal of resident queries, digital notices, and organized community events.',
      },
    ],
    process: [
      { step: '01', title: 'Society Audit & Transition Handover' },
      { step: '02', title: 'Staffing, Security & Vendor Setup' },
      { step: '03', title: 'Utility & Facility Operations Launch' },
      { step: '04', title: 'Transparent Association Reporting' },
    ],
    timeline: 'Full Society Operations',
    warranty: 'Certified Community Governance',
    idealFor: 'Gated community associations (RWA), builders, and residents seeking smooth township management.',
  },
  {
    id: 'plots',
    title: 'Plots & Land',
    category: 'Vacant Plots & Development Land',
    badge: 'Encroachment Guard',
    tagline: 'Land maintenance, permit clearance & leasing for development plots.',
    icon: MapPin,
    accentColor: 'text-[#166534]',
    bgGradient: 'from-emerald-500/10 via-emerald-50/50 to-transparent',
    borderColor: 'border-emerald-500/30',
    description:
      'Whether you own plots for development or investment, we handle everything from land maintenance to securing necessary permits. We can assist with land leasing, market research for potential development, and managing tenant agreements for agricultural or commercial use.',
    highlights: [
      'Regular Site Audits & Encroachment Fencing Protection',
      'DTCP, CMDA & Local Body Permit Clearance Support',
      'Commercial & Agricultural Land Leasing Assistance',
      'Market Feasibility Research & Development Planning',
    ],
    specs: [
      { label: 'Site Security', value: 'Boundary Fencing & Anti-Encroachment' },
      { label: 'Permits', value: 'Government Sanction & Clearance Liaison' },
      { label: 'Leasing', value: 'Commercial & Agricultural Tenant Agreements' },
      { label: 'Audits', value: 'Bi-Monthly Physical Site Inspection Photos' },
      { label: 'Valuation', value: 'Market Development Feasibility Studies' },
      { label: 'Maintenance', value: 'Weed Removal & Boundary Marker Care' },
    ],
    features: [
      {
        title: 'Encroachment Protection',
        desc: 'Prominent warning signboards, sturdy fencing, and regular physically logged inspections.',
      },
      {
        title: 'Permit Assistance',
        desc: 'Hassle-free navigation through CMDA, DTCP, and local body clearance documentation.',
      },
      {
        title: 'Revenue Generation',
        desc: 'Monetize vacant land through temporary commercial leasing, solar farms, or agricultural use.',
      },
      {
        title: 'Development Readiness',
        desc: 'Continuous market tracking to evaluate when to sell, lease, or launch construction.',
      },
    ],
    process: [
      { step: '01', title: 'Plot Boundary Audit & Fencing Check' },
      { step: '02', title: 'Legal & Permit Clearance Scrutiny' },
      { step: '03', title: 'Land Leasing / Monetization Setup' },
      { step: '04', title: 'Bi-Monthly Inspection & Monitoring' },
    ],
    timeline: 'Immediate Vacant Land Guard',
    warranty: '100% Anti-Encroachment Monitoring',
    idealFor: 'Landowners, plot investors, and NRI land owners looking to protect and monetize vacant land in Chennai.',
  },
  {
    id: 'farmlands',
    title: 'Farm Lands & Agricultural',
    category: 'Agritech & Agricultural Properties',
    badge: 'Sustainable Care',
    tagline: 'Expertise to optimize agricultural properties for maximum productivity.',
    icon: Sprout,
    accentColor: 'text-[#166534]',
    bgGradient: 'from-green-500/10 via-green-50/50 to-transparent',
    borderColor: 'border-green-500/30',
    description:
      'Managing farm lands requires specialized knowledge, and we have the expertise to optimize agricultural properties for maximum productivity and profitability. From crop management to seasonal maintenance, we ensure your farm property is cared for and productive, with a focus on sustainable farming practices.',
    highlights: [
      'Crop Management & Soil Productivity Optimization',
      'Seasonal Farm Maintenance & Irrigation Supervision',
      'Sustainable & Organic Farming Practice Setup',
      'Profitability & Harvest Yield Maximization',
    ],
    specs: [
      { label: 'Farm Management', value: 'Agritech & Crop Optimization' },
      { label: 'Irrigation', value: 'Borewell, Drip & Sprinkler System Care' },
      { label: 'Farming Approach', value: '100% Sustainable & Organic Focus' },
      { label: 'Seasonal Care', value: 'Plantation, Pruning & Soil Treatment' },
      { label: 'Harvesting', value: 'Market Linkage & Yield Monetization' },
      { label: 'Caretaking', value: 'On-Site Agronomist & Worker Supervision' },
    ],
    features: [
      {
        title: 'Agricultural Expertise',
        desc: 'Leveraging agricultural specialists to choose high-yield crops suitable for local soil.',
      },
      {
        title: 'Sustainable Eco-Practices',
        desc: 'Focusing on natural soil enrichment, rainwater harvesting, and eco-friendly farming.',
      },
      {
        title: 'Seasonal Upkeep',
        desc: 'Timely tilling, pest control, weeding, and irrigation infrastructure maintenance.',
      },
      {
        title: 'Profit Optimization',
        desc: 'Ensuring your farmland remains active, productive, and financially rewarding.',
      },
    ],
    process: [
      { step: '01', title: 'Soil, Water & Extent Assessment' },
      { step: '02', title: 'Crop Strategy & Irrigation Plan' },
      { step: '03', title: 'Sustainable Farming Execution' },
      { step: '04', title: 'Harvesting & Seasonal Maintenance' },
    ],
    timeline: 'Year-Round Agricultural Care',
    warranty: 'Managed Farm Yield Optimization',
    idealFor: 'Agricultural land owners, organic farm enthusiasts, and investors seeking productive farmland care near Chennai.',
  },
];

export default function PropertyTypes() {
  const [activeTab, setActiveTab] = useState<string>('flats');
  const [selectedServiceModal, setSelectedServiceModal] = useState<PropertyTypeDetail | null>(null);

  const activeService = PROPERTY_TYPES_DATA.find((s) => s.id === activeTab) || PROPERTY_TYPES_DATA[0];

  return (
    <section id="property-types" className="py-24 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden border-b border-slate-200">
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
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] font-bold text-[#0F2D24]">
              SPECIALIZED PROPERTY CATEGORIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{ letterSpacing: "1px", lineHeight: "60px" }}>
            Tailored Management Solutions for 
            <span className="text-[#166534]"> Every Property Type</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From residential flats and luxury villas to gated communities, plots, and agricultural farmlands—we offer specialized management expertise tailored to protect and enhance your real estate value.
          </p>
        </div>

        {/* Interactive Tab Switcher Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 p-2 bg-slate-100/80 rounded-2xl border border-slate-200/90 max-w-6xl mx-auto shadow-inner">
          {PROPERTY_TYPES_DATA.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex-1 min-w-[140px] sm:min-w-[160px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#166534] text-white shadow-lg shadow-[#166534]/20 scale-[1.02]'
                    : 'bg-transparent text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#F37924]' : 'text-slate-500'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Spotlight Feature Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Hero Overview - Light Theme Green */}
            <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-[#F0FDF4] via-emerald-50 to-[#E8F5E9] border-r border-emerald-200/80 text-slate-900 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-[#166534]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#166534]/10 text-[#166534] border border-[#166534]/25 text-xs font-black uppercase tracking-wider">
                    {activeService.badge}
                  </span>
                  <span className="text-xs text-[#166534] uppercase tracking-widest flex items-center gap-1 font-bold">
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
                      <Clock className="w-3.5 h-3.5 text-[#F37924]" /> Timeline
                    </p>
                    <p className="text-sm font-bold text-slate-900 mt-1">{activeService.timeline}</p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-emerald-200/90 shadow-sm">
                    <p className="text-[11px] text-[#166534] font-bold uppercase tracking-wider flex items-center gap-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-[#F37924]" /> Protection
                    </p>
                    <p className="text-sm font-bold text-slate-900 mt-1">{activeService.warranty}</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button inside Left Column */}
              <div className="pt-8 relative z-10">
                <a
                  href="#contact"
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
                <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-700">
                  <Sparkles className="w-4 h-4 text-[#F37924]" /> Core Features & Highlights
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
                      <span className="text-xs sm:text-sm text-slate-800 leading-snug font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard Specifications Grid */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-slate-700">
                  <Ruler className="w-4 h-4 text-[#166534]" /> Key Specifications & Standards
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {activeService.specs.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{spec.label}</p>
                      <p className="text-[12px] font-bold text-slate-800 mt-1">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-slate-700">
                  <Award className="w-4 h-4 text-[#F37924]" /> Key Advantages & Deliverables
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-sm font-bold flex items-center gap-1.5 text-slate-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                        {feat.title}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed pl-3">
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-[#166534] hover:text-white text-[#166534] border border-emerald-200 text-xs font-bold transition-colors"
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
          
          <div className="flex flex-col gap-4 max-w-xl text-center md:text-left relative z-10">
            <span className="px-3 py-1 rounded-full bg-[#166534] text-white text-[11px] font-bold uppercase tracking-wider inline-block" style={{ alignSelf: "flex-start" }}>
              Free Property Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ lineHeight: "40px" }}>
              Looking to Manage Your Property in Chennai?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Connect directly with Prajha Group’s property management specialists for verified tenant screening, maintenance plans, and customized care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl text-center"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4 text-[#F37924]" />
            </a>

            <a
              href="tel:+919499933461"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-emerald-50 text-slate-900 font-bold text-sm border border-emerald-300 shadow-sm transition-all text-center"
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
                      <p className="text-sm font-bold text-slate-900 mt-0.5">{sp.value}</p>
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
                      <p className="text-xs font-bold text-[#0F2D24] mt-1">{pr.title}</p>
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
                  className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#166534] hover:bg-[#0f4624] text-white text-xs font-bold transition-colors shadow"
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
