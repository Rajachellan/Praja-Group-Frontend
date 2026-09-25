import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ChevronRight,
  Sparkles,
  TrendingUp,
  Building2,
  ShieldCheck,
  FileText,
  MapPin,
  Phone,
  Ruler,
  Compass,
  Building,
  FileCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Award,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import AdvancedFaqSection, { FaqItem } from '../components/AdvancedFaqSection';
import LandownerEnquiryForm from './LandownerEnquiryForm';
import ScrollToSectionButton from './ScrollToSectionButton';

export const metadata: Metadata = {
  title: 'Joint Venture Opportunities for Landowners | Prajha Group',
  description:
    'Own land and exploring a joint venture? Submit your property details to Prajha Group to discuss potential land development opportunities.',
  alternates: {
    canonical: 'https://www.prajhagroup.com/landowners/',
  },
  openGraph: {
    title: 'Joint Venture Opportunities for Landowners | Prajha Group',
    description:
      'Own land and exploring a joint venture? Submit your property details to Prajha Group to discuss potential land development opportunities.',
    type: 'website',
    url: 'https://www.prajhagroup.com/landowners/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const landownerFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: '1. Who can submit a landowner enquiry?',
    answer:
      'Landowners who are interested in exploring a potential joint venture or development opportunity for their property can submit their details through the enquiry form.',
  },
  {
    id: 'faq-2',
    category: 'Submission',
    question: '2. What information do I need to submit?',
    answer:
      'You can start with basic information such as your name, contact details, property location, land area, property type and other relevant property details. Additional documents may be requested if the property moves forward for further evaluation.',
  },
  {
    id: 'faq-3',
    category: 'Evaluation',
    question: '3. Does submitting my property guarantee a joint venture?',
    answer:
      'No. Submission of an enquiry does not guarantee acceptance of a joint venture. Each property is evaluated individually based on factors such as location, property characteristics, legal considerations, development potential and feasibility.',
  },
  {
    id: 'faq-4',
    category: 'Property Eligibility',
    question: '4. Can I submit a property with an existing building?',
    answer:
      'Yes, you can mention an existing building or structure when submitting your property details. The suitability of the property for a potential development or redevelopment opportunity will depend on its individual characteristics and feasibility.',
  },
  {
    id: 'faq-5',
    category: 'Process',
    question: '5. What happens after I submit my land details?',
    answer:
      'The Prajha Group team can review the information provided and contact you if further discussion or information is required.',
  },
  {
    id: 'faq-6',
    category: 'Documentation',
    question: '6. Do I need to have all my property documents ready before submitting an enquiry?',
    answer:
      'Not necessarily. You can begin by submitting the basic property details. If further evaluation is required, the team can advise you on the relevant documents and information needed.',
  },
  {
    id: 'faq-7',
    category: 'Evaluation',
    question: '7. How is a property evaluated for a joint venture?',
    answer:
      'Evaluation can involve factors such as location, land area, accessibility, ownership and title, land use, planning considerations, existing structures and overall development feasibility.',
  },
  {
    id: 'faq-8',
    category: 'Contact',
    question: '8. Can I contact Prajha Group to discuss my property before submitting documents?',
    answer:
      'Yes. You can submit your basic property and contact details through the enquiry form so that the team can understand your requirement and discuss the next steps if appropriate.',
  },
];

export default function LandownersPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F37924] selection:text-white overflow-x-hidden">
        
        {/* 1. Hero Header Section */}
        <section className="relative py-14 lg:py-24 bg-gradient-to-b from-[#F4F8F6] via-white to-slate-50 border-b border-slate-200/80 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[550px] h-[550px] rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none" />
          <div className="absolute top-1/2 left-0 -ml-24 w-[500px] h-[500px] rounded-full bg-[#F37924]/5 blur-[130px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(22, 101, 52, 0.08) 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-[#166534] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/joint-venture" className="hover:text-[#166534] transition-colors">
                Joint Venture
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#F37924] font-bold">Landowners</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Hero Text Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0F2D24]">
                    FOR LANDOWNERS
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 leading-[1.15]">
                  Joint Venture Opportunities <br className="hidden sm:inline" />
                  for <span className="text-[#166534]">Landowners</span>
                </h1>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                  Do you own land and are considering its development through a joint venture? Share your property details with Prajha Group and explore the possibilities for its development.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <ScrollToSectionButton
                    targetId="land-enquiry-form"
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-xl uppercase tracking-wider cursor-pointer"
                  >
                    <span>Submit Your Land Details</span>
                    <ArrowRight className="w-4 h-4 text-[#F37924]" />
                  </ScrollToSectionButton>

                  <Link
                    href="/joint-venture"
                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                  >
                    <span>Explore Joint Ventures</span>
                    <ChevronRight className="w-4 h-4 text-[#166534]" />
                  </Link>
                </div>
              </div>

              {/* Hero Visual Image */}
              <div className="lg:col-span-5 w-full flex justify-center">
                <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <Image
                    src="/skyline-chennai.png"
                    alt="Prajha Group Landowner Joint Venture Real Estate Development"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F37924]">
                      PRAJHA LAND DEVELOPMENT
                    </span>
                    <h3 className="text-base font-bold leading-tight">
                      Transforming Prime Land Into High-Value Real Estate
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Intro Section */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
              <span>DEVELOPMENT POTENTIAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Have Land? Let&apos;s Explore Its Development Potential.
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Land can offer different development possibilities depending on its location, size, accessibility, existing structures and applicable planning requirements.
              </p>
              <p>
                If you are considering a joint venture for your property, you can share your land details with Prajha Group. Our team can review the basic information, understand your requirements and discuss whether there may be a suitable development opportunity.
              </p>
            </div>

            <div className="pt-4">
              <ScrollToSectionButton
                targetId="land-enquiry-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider cursor-pointer"
              >
                <span>Discuss Your Land With Us</span>
                <ArrowRight className="w-4 h-4 text-[#F37924]" />
              </ScrollToSectionButton>
            </div>
          </div>
        </section>

        {/* 4. Why Explore a Joint Venture? */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#166534]">
                WHY EXPLORE A JOINT VENTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Explore What Your Land Could Become
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] flex items-center justify-center font-bold text-lg group-hover:bg-[#166534] group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Explore Development Potential
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Understand the possibilities for developing your property based on its location, size, access and other relevant factors.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] flex items-center justify-center font-bold text-lg group-hover:bg-[#166534] group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Work With a Development Partner
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  A joint venture can bring the landowner and developer together to plan and develop a property under mutually agreed terms.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] flex items-center justify-center font-bold text-lg group-hover:bg-[#166534] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Leverage Development Expertise
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Prajha Group brings experience across real estate development and construction to suitable development opportunities.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] flex items-center justify-center font-bold text-lg group-hover:bg-[#166534] group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Start With a Simple Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  You don&apos;t need to have the entire development plan ready before contacting us. Start by sharing your basic property details.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <ScrollToSectionButton
                targetId="land-enquiry-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider cursor-pointer"
              >
                <span>Submit Your Property Details</span>
                <ArrowRight className="w-4 h-4 text-[#F37924]" />
              </ScrollToSectionButton>
            </div>

          </div>
        </section>

        {/* 5. Property Suitability Section */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#166534]">
                EVALUATION CRITERIA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                What Do We Consider When Reviewing a Property?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Every property is different. Before a potential joint venture can be considered, several aspects of the property may need to be understood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-3 font-bold text-slate-900">
                  <MapPin className="w-5 h-5 text-[#166534]" />
                  <span className="text-base">Location</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  The property&apos;s location, connectivity, surrounding development and overall development environment.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-3 font-bold text-slate-900">
                  <Ruler className="w-5 h-5 text-[#166534]" />
                  <span className="text-base">Land Area</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  The size, dimensions and configuration of the property.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-3 font-bold text-slate-900">
                  <Compass className="w-5 h-5 text-[#166534]" />
                  <span className="text-base">Accessibility</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Road access, approach roads and other site-access considerations.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-3 font-bold text-slate-900">
                  <Building className="w-5 h-5 text-[#166534]" />
                  <span className="text-base">Property Characteristics</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Existing structures, current usage and other relevant site conditions.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-3 font-bold text-slate-900">
                  <FileCheck className="w-5 h-5 text-[#166534]" />
                  <span className="text-base">Legal & Planning Considerations</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Ownership, title, land-use classification, applicable regulations and relevant property documentation.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center gap-3 font-bold text-slate-900">
                  <BarChart3 className="w-5 h-5 text-[#166534]" />
                  <span className="text-base">Development Feasibility</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  The potential development options and whether the property is suitable for further consideration.
                </p>
              </div>
            </div>

            {/* Important Note Box */}
            <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-amber-200 text-amber-900 text-xs sm:text-sm max-w-4xl mx-auto leading-relaxed font-semibold flex items-start gap-3">
              <span className="font-extrabold uppercase tracking-wider text-[#F37924] shrink-0">
                Important Note:
              </span>
              <span>
                Submitting your property details does not guarantee a joint venture. Every property is evaluated individually based on its suitability, feasibility and other applicable considerations.
              </span>
            </div>

          </div>
        </section>

        {/* 6. What Landowners Can Submit */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#166534]">
                SUBMISSION CHECKLIST
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Tell Us About Your Property
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Start with the basic details. Our team can let you know if additional information or documentation is required during the evaluation process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Property Location</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-medium">
                  Where your land or property is located.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Land Area</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-medium">
                  Approximate size or extent of the property.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Property Type</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-medium">
                  Residential land, commercial property, existing property or other relevant property types.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Existing Structure</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-medium">
                  Details of any existing building or structure on the property.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Property Documents</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-medium">
                  Relevant ownership or property documents, where required.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#166534]" />
                  <span>Development Requirement</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-medium">
                  Tell us what you are looking to achieve with your property.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <ScrollToSectionButton
                targetId="land-enquiry-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider cursor-pointer"
              >
                <span>Submit Land Details</span>
                <ArrowRight className="w-4 h-4 text-[#F37924]" />
              </ScrollToSectionButton>
            </div>

          </div>
        </section>

        {/* <LandownerEnquiryForm /> */}

       
        {/* 8. What Happens After Submission? */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#166534]">
                TRANSPARENT PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                What Happens After You Submit Your Details?
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">
                Our simple 4-step workflow from initial submission to evaluation.
              </p>
            </div>

            {/* 4-Step Visual Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden group space-y-3 hover:border-[#166534]/50 transition-all">
                <span className="text-4xl font-black text-[#166534]/15 group-hover:text-[#166534]/30 transition-colors">
                  01
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Submit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Share your basic contact and property details through the enquiry form.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden group space-y-3 hover:border-[#166534]/50 transition-all">
                <span className="text-4xl font-black text-[#166534]/15 group-hover:text-[#166534]/30 transition-colors">
                  02
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Review
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Our team reviews the information provided to understand the property&apos;s basic characteristics.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden group space-y-3 hover:border-[#166534]/50 transition-all">
                <span className="text-4xl font-black text-[#166534]/15 group-hover:text-[#166534]/30 transition-colors">
                  03
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Discuss
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  If the property is suitable for further consideration, our team can contact you to understand your requirements and discuss the opportunity.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden group space-y-3 hover:border-[#166534]/50 transition-all">
                <span className="text-4xl font-black text-[#166534]/15 group-hover:text-[#166534]/30 transition-colors">
                  04
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#166534] transition-colors">
                  Evaluate
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Further legal, technical and development evaluation may follow based on the property and proposed opportunity.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <ScrollToSectionButton
                targetId="land-enquiry-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider cursor-pointer"
              >
                <span>Start Your Enquiry</span>
                <ArrowRight className="w-4 h-4 text-[#F37924]" />
              </ScrollToSectionButton>
            </div>

          </div>
        </section>

        {/* 9. Trust Section */}
        <section className="py-16 lg:py-24 bg-[#0F2D24] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-[#F37924]/10 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-widest border border-emerald-500/30">
                <Award className="w-3.5 h-3.5 text-[#F37924]" />
                <span>TRUSTED DEVELOPMENT PARTNER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
                A Development Partnership Starts With Understanding the Property
              </h2>
              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed font-medium">
                Every successful development begins with understanding the property, its potential and the requirements involved. Prajha Group works with landowners to explore suitable development opportunities and understand the factors that can influence a project before moving forward.
              </p>
            </div>

            {/* Verified Statistics Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-emerald-800/60 max-w-xl">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#F37924]">15+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-200">Years of Experience</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-emerald-400">106+</div>
                <div className="text-xs sm:text-sm font-bold text-slate-200">Completed Projects</div>
              </div>
            </div>

            <div className="pt-2">
              <ScrollToSectionButton
                targetId="land-enquiry-form"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#F37924] hover:bg-[#d96515] text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl uppercase tracking-wider cursor-pointer"
              >
                <span>Talk to Prajha Group</span>
                <Phone className="w-4 h-4 text-white" />
              </ScrollToSectionButton>
            </div>

          </div>
        </section>

        {/* 10. Resource Section */}
        <section id="resources" className="py-16 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#166534]">
                LANDOWNER RESOURCES & GUIDES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
                Want to Understand Joint Ventures Better?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
                If you&apos;re considering a joint venture for your property, explore our guides covering the JV process, land development and important considerations for landowners.
              </p>
            </div>

            {/* 4 Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Resource 1 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-[#166534] transition-all">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#166534] text-[10px] font-extrabold uppercase tracking-wider">
                    GUIDE
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#166534] transition-colors leading-snug">
                    Joint Venture Guide for Landowners in Chennai
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Understand how landowner joint ventures work, including the process, documentation and key considerations before entering into a development partnership.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <Link
                    href="/joint-venture-guide-for-landowners-chennai/"
                    className="text-xs font-bold text-[#166534] hover:text-[#0F2D24] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read the Joint Venture Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F37924]" />
                  </Link>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-[#166534] transition-all">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#166534] text-[10px] font-extrabold uppercase tracking-wider">
                    APPROVALS
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#166534] transition-colors leading-snug">
                    Land Development & Layout Approval Guide
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Learn about land development, approvals and important considerations before moving forward with a joint venture.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <Link
                    href="/blogs"
                    className="text-xs font-bold text-[#166534] hover:text-[#0F2D24] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Explore the Land Development Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F37924]" />
                  </Link>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-[#166534] transition-all">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#166534] text-[10px] font-extrabold uppercase tracking-wider">
                    ANALYSIS
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#166534] transition-colors leading-snug">
                    2 vs 3 Acre Joint Venture Development
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Explore how land size can influence development planning and potential project structures.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <Link
                    href="/blogs"
                    className="text-xs font-bold text-[#166534] hover:text-[#0F2D24] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read the Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F37924]" />
                  </Link>
                </div>
              </div>

              {/* Resource 4 */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-[#166534] transition-all">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#166534] text-[10px] font-extrabold uppercase tracking-wider">
                    INSIGHTS
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#166534] transition-colors leading-snug">
                    Joint Venture Real Estate in Chennai
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Explore important considerations for landowners looking at real estate development partnerships.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <Link
                    href="/blogs"
                    className="text-xs font-bold text-[#166534] hover:text-[#0F2D24] inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F37924]" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 11. FAQ Section */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <AdvancedFaqSection
              title="Frequently Asked Questions"
              subtitle="Get practical answers regarding landowner joint venture enquiries, property documentation, and evaluation criteria."
              faqs={landownerFaqs}
            />

            {/* FAQ CTA Box */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-4 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-slate-900">
                Have a Property to Discuss?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Submit Your Land Details
              </p>
              <div>
                <ScrollToSectionButton
                  targetId="land-enquiry-form"
                  className="px-6 py-3 rounded-xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Submit Your Land Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F37924]" />
                </ScrollToSectionButton>
              </div>
            </div>

          </div>
        </section>

        {/* 12. Final CTA Section */}
        <section className="py-16 lg:py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-[#166534] text-xs font-bold uppercase tracking-widest border border-emerald-200">
              <Sparkles className="w-4 h-4 text-[#F37924]" />
              <span>START A CONVERSATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Ready to Explore Your Land&apos;s Potential?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
              If you are considering a joint venture for your property, share your land details with Prajha Group and start a conversation with our team.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <ScrollToSectionButton
                targetId="land-enquiry-form"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl uppercase tracking-wider cursor-pointer"
              >
                <span>Submit Your Land Details</span>
                <ArrowRight className="w-4 h-4 text-[#F37924]" />
              </ScrollToSectionButton>

              <ScrollToSectionButton
                targetId="resources"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all border border-slate-200 cursor-pointer"
              >
                <span>Explore Joint Venture Guides</span>
                <ChevronRight className="w-4 h-4 text-[#166534]" />
              </ScrollToSectionButton>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
