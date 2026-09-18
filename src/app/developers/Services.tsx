'use client';

import React, { useState } from 'react';
import {
  Building2,
  Home,
  ShieldCheck,
  MapPin,
  Trees,
  Users,
  CheckCircle2,
  ArrowRight,
  Ruler,
  Award,
  FileCheck,
  ChevronRight,
  PhoneCall,
  Clock,
  Check,
  Maximize2,
  X,
  BadgeCheck,
  Sparkles,
} from 'lucide-react';

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
    id: 'flats',
    title: 'Residential Flats',
    category: 'Urban Convenience & Modern Living',
    badge: 'Most Popular',
    tagline: 'Thoughtfully designed residential flats in prime Chennai locations.',
    icon: Building2,
    accentColor: 'text-[#166534]',
    bgGradient: 'from-emerald-500/10 via-emerald-50/50 to-transparent',
    borderColor: 'border-emerald-500/30',
    description:
      'Own thoughtfully designed residential flats in Chennai that offer convenience, security, and easy access to every city comfort.',
    highlights: [
      'Prime Chennai City Corridors & Seamless Metro Access',
      'Architecturally Optimized Floor Plans & Ventilation',
      '24/7 Multi-Tier Gated Security & Power Backup',
      'High Rental Yield & Strong Capital Resale Value',
    ],
    specs: [
      { label: 'Structure', value: 'RCC Framed Structure (Fe 550D TMT Steel)' },
      { label: 'Flooring', value: '800x800mm Vitrified Tiles (Kajaria / Somany)' },
      { label: 'Security', value: '24/7 CCTV & Multi-Tier Entrance Access' },
      { label: 'Power Backup', value: '100% Generator Backup for Common Areas' },
      { label: 'Sanction', value: '100% CMDA & Local Body Approved' },
      { label: 'Title Deed', value: 'Clear 30-Year Advocate Scrutinized' },
    ],
    features: [
      {
        title: 'Prime City Accessibility',
        desc: 'Situated in fast-growing Chennai hubs close to IT parks, schools & top hospitals.',
      },
      {
        title: 'Optimal Space Utilization',
        desc: 'Vastu-compliant layouts designed for zero space wastage and maximum natural light.',
      },
      {
        title: 'Gated Security & CCTV',
        desc: 'Monitored perimeter camera network ensuring complete family safety.',
      },
      {
        title: 'High Asset Growth',
        desc: 'Excellent rental demand from corporate professionals and steady equity appreciation.',
      },
    ],
    process: [
      { step: '01', title: 'Location & Floor Plan Selection' },
      { step: '02', title: 'Legal Scrutiny & Bank Sanction' },
      { step: '03', title: 'Unit Booking & Sale Agreement' },
      { step: '04', title: 'Registration & Keys Handover' },
    ],
    timeline: 'Ready to Occupy / Under Construction',
    warranty: '10-Year Structural Warranty',
    idealFor: 'Families & IT Professionals seeking comfortable, well-connected urban homes in Chennai.',
  },
  {
    id: 'villas',
    title: 'Luxury Villas',
    category: 'Independent Luxury Living',
    badge: 'Exclusive Luxury',
    tagline: 'Premium villas giving you privacy, space, and independent peaceful living.',
    icon: Home,
    accentColor: 'text-[#F37924]',
    bgGradient: 'from-amber-500/10 via-amber-50/50 to-transparent',
    borderColor: 'border-amber-500/30',
    description:
      'Enjoy premium villas in Chennai that give you privacy, space, and the joy of independent living in peaceful surroundings.',
    highlights: [
      'Private Landscaped Gardens, Terraces & Car Ports',
      'Exclusive Gated Villa Community Privacy',
      'High-End Architectural Finishes & Custom Interiors',
      'Peaceful Green Surroundings Away From City Noise',
    ],
    specs: [
      { label: 'Villa Type', value: 'Triplex & Duplex Luxury Residences' },
      { label: 'Exterior Finish', value: 'Weather-Proof WeatherCoat & Stone Cladding' },
      { label: 'Private Space', value: 'Dedicated Courtyard, Garden & Sky Terrace' },
      { label: 'Joinery', value: 'Teak Wood Main Entrance & UPVC Windows' },
      { label: 'Sanctions', value: 'CMDA / DTCP Approved Layouts' },
      { label: 'Loan Status', value: 'Pre-Approved by Top Nationalized Banks' },
    ],
    features: [
      {
        title: '100% Privacy & Space',
        desc: 'Independent compound walls, private garden spaces, and personal terrace decks.',
      },
      {
        title: 'Custom Elevation Designs',
        desc: 'Tailor-made contemporary elevations with timber louvers and glass balcony railings.',
      },
      {
        title: 'Quiet Green Environment',
        desc: 'Nestled in peaceful, pollution-free residential enclaves in Chennai.',
      },
      {
        title: 'Turnkey Luxury Fittings',
        desc: 'Equipped with premium Kohler/Jaguar sanitaryware and Italian marble flooring.',
      },
    ],
    process: [
      { step: '01', title: 'Villa Plot & Custom Plan Selection' },
      { step: '02', title: 'Architectural 3D & BOQ Approval' },
      { step: '03', title: 'Turnkey Construction Execution' },
      { step: '04', title: 'Final Inspection & Key Handover' },
    ],
    timeline: '8 to 12 Months',
    warranty: '10-Year Contractual Guarantee',
    idealFor: 'Homeowners desiring space, privacy, and luxury independent villa living in Chennai.',
  },
  {
    id: 'gated-community',
    title: 'Gated Communities',
    category: 'Secure Township Living',
    badge: '24/7 Security',
    tagline: 'Secure gated communities with 24/7 safety, green spaces, and neighborhood lifestyle.',
    icon: ShieldCheck,
    accentColor: 'text-blue-700',
    bgGradient: 'from-blue-500/10 via-blue-50/50 to-transparent',
    borderColor: 'border-blue-500/30',
    description:
      'Live in a secure gated community in Chennai with 24/7 safety, green spaces, and a close-knit neighborhood lifestyle.',
    highlights: [
      'Controlled Main Gate Arch with 24/7 Security Guards',
      'CMDA/DTCP Approved Parks, Walking Trails & Play Enclaves',
      'Underground Electrical Cabling & Blacktop Avenue Roads',
      'Community Clubhouse, Gym & Shared Amenities',
    ],
    specs: [
      { label: 'Road Infrastructure', value: '30ft & 40ft Heavy Duty Blacktop Roads' },
      { label: 'Electricity', value: 'Concealed Underground Cabling & LED Streetlights' },
      { label: 'Drainage', value: 'Stormwater Gradient Channels & Sewerage Lines' },
      { label: 'Perimeter', value: 'High Compound Wall with RFID Gate Access' },
      { label: 'Approvals', value: '100% CMDA & DTCP Layout Sanctioned' },
      { label: 'Water Supply', value: 'Individual Water Line Connections & OHT' },
    ],
    features: [
      {
        title: '24/7 Multi-Layer Security',
        desc: 'Gated entrance arch with guards, RFID boom barriers, and CCTV coverage.',
      },
      {
        title: 'Lush Green Spaces',
        desc: 'Landscaped public parks, jogging tracks, and dedicated children play arenas.',
      },
      {
        title: 'Underground Utilities',
        desc: 'No unsightly overhead wires; concealed power cables and avenue streetlights.',
      },
      {
        title: 'Close-Knit Community',
        desc: 'Fostering a vibrant, safe, and family-friendly neighborhood environment.',
      },
    ],
    process: [
      { step: '01', title: 'Township Visit & Plot Reservation' },
      { step: '02', title: 'Document Verification & Loan Approval' },
      { step: '03', title: 'Plot Registration & Infrastructure Access' },
      { step: '04', title: 'Villa Construction / Handover' },
    ],
    timeline: 'Immediate Registration & Ready to Build',
    warranty: 'Township Maintenance Guarantee',
    idealFor: 'Families looking for safe, amenity-rich gated community living in Chennai.',
  },
  {
    id: 'plots',
    title: 'Residential Plots',
    category: 'Investment & Dream Home Land',
    badge: '100% Approved',
    tagline: 'Prime residential plots ready for your dream home or smart investment.',
    icon: MapPin,
    accentColor: 'text-[#166534]',
    bgGradient: 'from-emerald-500/10 via-emerald-50/50 to-transparent',
    borderColor: 'border-emerald-500/30',
    description:
      'Choose from prime residential plots in Chennai ready for your dream home or smart investment with clear documents and great returns.',
    highlights: [
      '100% CMDA & DTCP Approved Layout Clearances',
      'Clear 30-Year Advocate Verified Legal Title Deeds',
      'Pre-Approved Bank Loans Up to 80% (SBI, HDFC, ICICI)',
      'Ready for Immediate Construction with Blacktop Roads',
    ],
    specs: [
      { label: 'Sanction Type', value: 'CMDA / DTCP Layout Sanction Order' },
      { label: 'Title Deed', value: '100% Clear Title Scrutinized by Legal Panel' },
      { label: 'Road Width', value: '30ft & 40ft Avenue Blacktop Roads' },
      { label: 'Bank Loan', value: 'Up to 80% Funding Pre-Sanctioned' },
      { label: 'Location', value: 'Fast Growing Chennai Growth Corridors' },
      { label: 'Utilities', value: 'EB Power Lines & Groundwater Access' },
    ],
    features: [
      {
        title: '100% Legal Transparency',
        desc: 'Clean legal titles, patta transfers, and verified layout approval copies.',
      },
      {
        title: 'High Capital Returns',
        desc: 'Strategically situated in Chennai’s highest-appreciation development corridors.',
      },
      {
        title: 'Instant Home Building',
        desc: 'Fully developed plot layouts ready for immediate foundation & civil work.',
      },
      {
        title: 'Hassle-Free Bank Loans',
        desc: 'Pre-approved clearance certificates for 7-day loan disbursements.',
      },
    ],
    process: [
      { step: '01', title: 'Site Inspection & Plot Selection' },
      { step: '02', title: 'Legal Title Verification' },
      { step: '03', title: 'Bank Loan Processing' },
      { step: '04', title: 'Sub-Registrar Land Registration' },
    ],
    timeline: 'Instant Registration in 7 Days',
    warranty: 'Clear Title Legal Guarantee',
    idealFor: 'Investors & Plot Buyers wanting clear-title, high-return land in Chennai.',
  },
  {
    id: 'farm-lands',
    title: 'Farm & Lands',
    category: 'Eco & Green Wealth',
    badge: 'High Capital Growth',
    tagline: 'Serene farmlands perfect for weekend getaways, organic farming & appreciation.',
    icon: Trees,
    accentColor: 'text-[#166534]',
    bgGradient: 'from-green-500/10 via-green-50/50 to-transparent',
    borderColor: 'border-green-500/30',
    description:
      'Invest in serene farmlands near Chennai perfect for weekend getaways, organic farming, or long-term property appreciation.',
    highlights: [
      'Fertile Organic Soil & Abundant Groundwater Access',
      'Gated Farmland Layout with Perimeter Fencing',
      'Ideal for Weekend Country Farmhouses & Plantation',
      'High Long-Term Land Value & Asset Appreciation',
    ],
    specs: [
      { label: 'Land Type', value: 'Fertile Agricultural / Managed Farmland' },
      { label: 'Groundwater', value: 'Abundant Sweet Groundwater & Borewell Access' },
      { label: 'Perimeter', value: 'Gated Boundary Fencing & Entrance Gate' },
      { label: 'Plantation', value: 'Fruit Trees & Native Shade Tree Planting' },
      { label: 'Access Road', value: 'All-Weather Gravel & Asphalt Connecting Roads' },
      { label: 'Document', value: 'Verified Patta & Chitta Land Ownership' },
    ],
    features: [
      {
        title: 'Serene Weekend Getaway',
        desc: 'Escape city stress and enjoy peaceful nature in your private country estate.',
      },
      {
        title: 'Organic Farming Potential',
        desc: 'Rich soil perfect for organic vegetables, fruit orchards, and green living.',
      },
      {
        title: 'Managed Plantation',
        desc: 'Option for managed tree maintenance, watering, and site caretaking.',
      },
      {
        title: 'Solid Asset Growth',
        desc: 'Suburban land tracts near Chennai offering high long-term capital gains.',
      },
    ],
    process: [
      { step: '01', title: 'Farmland Tour & Extent Selection' },
      { step: '02', title: 'Soil & Water Testing Audit' },
      { step: '03', title: 'Patta & Title Deed Scrutiny' },
      { step: '04', title: 'Registration & Fencing Setup' },
    ],
    timeline: 'Immediate Handover',
    warranty: 'Managed Boundary Protection',
    idealFor: 'Nature lovers, organic farmers & investors seeking green wealth near Chennai.',
  },
  {
    id: 'community-living',
    title: 'Community Living',
    category: 'Sustainable Lifestyle Apartments',
    badge: 'Eco & Co-Living',
    tagline: 'Modern community living combining social connection, amenities & sustainability.',
    icon: Users,
    accentColor: 'text-purple-700',
    bgGradient: 'from-purple-500/10 via-purple-50/50 to-transparent',
    borderColor: 'border-purple-500/30',
    description:
      'Experience modern community living apartments in Chennai that combine social connection, shared amenities, and sustainable living.',
    highlights: [
      'Shared Co-Working Lounges, Fitness & Social Hubs',
      'Integrated Solar Power & Rainwater Harvesting Infrastructure',
      'Resource-Conscious, Sustainable Building Design',
      'Vibrant Social Events & Shared Lifestyle Facilities',
    ],
    specs: [
      { label: 'Eco System', value: 'Rooftop Solar Grid & Rainwater Harvesting' },
      { label: 'Shared Hubs', value: 'Co-Working Lounge, Gym, Terrace Cafe' },
      { label: 'Waste Mgmt', value: 'Organic Waste Composting & Greywater Recycling' },
      { label: 'Connectivity', value: 'High-Speed Optical Fiber Internet Hub' },
      { label: 'Security', value: 'Smart Digital Keycard & CCTV Access' },
      { label: 'Sanctions', value: 'CMDA Approved Green Building Sanction' },
    ],
    features: [
      {
        title: 'Social Connection & Networking',
        desc: 'Thoughtfully designed lounges and shared hubs for easy community connection.',
      },
      {
        title: 'Sustainable Eco Infrastructure',
        desc: 'Solar electricity, rainwater conservation, and energy-efficient lighting.',
      },
      {
        title: 'All-Inclusive Amenities',
        desc: 'Fitness center, co-working desks, game rooms, and rooftop garden decks.',
      },
      {
        title: 'Low Carbon Footprint',
        desc: 'Built with eco-conscious materials and green building standards.',
      },
    ],
    process: [
      { step: '01', title: 'Community Tour & Apartment Selection' },
      { step: '02', title: 'Custom Finishing Options' },
      { step: '03', title: 'Agreement & Bank Loan Approval' },
      { step: '04', title: 'Move-In & Community Welcome' },
    ],
    timeline: 'Ready for Move-In',
    warranty: '10-Year Structural & Green Care',
    idealFor: 'Young professionals, remote workers & eco-conscious buyers seeking vibrant living.',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('flats');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceDetail | null>(null);

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50/80 to-white relative overflow-hidden border-b border-slate-200">
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
              DEVELOPER REAL ESTATE PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black" style={{ letterSpacing: "1px", lineHeight: "60px" }}>
            Our Real Estate 
            <span className="text-[#166534]"> Offerings</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From modern residential flats and luxury villas to approved plot layouts, farmlands, and gated communities—we build properties tailored for high appreciation and peaceful living.
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
              Looking to Buy, Build, or Invest in Chennai Real Estate?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Connect directly with Prajha Group’s senior real estate advisors for verified legal document reviews, site visits, and customized quotes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full md:w-auto">
            <a
              href="#enquiry-form"
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
                  href="#enquiry-form"
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
