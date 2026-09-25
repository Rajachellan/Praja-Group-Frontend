import Image from 'next/image';
import Link from 'next/link';
import type { ElementType } from 'react';
import type { Metadata } from 'next';
import {
  ChevronRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building2,
  HardHat,
  Wrench,
  CheckCircle2,
  ArrowRight,
  User,
  Mail,
  Phone,
  Paperclip,
  Send,
  Check,
  Briefcase,
  MapPin,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import AdvancedFaqSection, { FaqItem } from '../components/AdvancedFaqSection';
import AssociateApplicationForm from './AssociateApplicationForm';

export const metadata: Metadata = {
  title: 'Prajha Group Associates | Chennai Construction Partners',
  description:
    'Join Prajha Group as an Associate Director in Tamil Nadu. Lead business development, construction, and facility management projects. Apply now for top leadership roles in real estate.',
  alternates: {
    canonical: 'https://www.prajhagroup.com/associate/',
  },
  openGraph: {
    title: 'Prajha Group Associates | Chennai Construction Partners',
    description:
      'Join Prajha Group as an Associate Director in Tamil Nadu. Lead business development, construction, and facility management projects. Apply now for top leadership roles in real estate.',
    type: 'website',
    url: 'https://www.prajhagroup.com/associate/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface DirectorRole {
  title: string;
  category: string;
  icon: ElementType;
  description: string;
  responsibilities: string[];
}

const DIRECTOR_ROLES: DirectorRole[] = [
  {
    title: 'Director - Business Development',
    category: 'Strategic Growth & Alliances',
    icon: TrendingUp,
    description:
      'Drive strategic partnerships, regional brand expansion, client acquisitions, and joint venture deals across major towns in Tamil Nadu.',
    responsibilities: [
      'Expand branch market presence & JV networks',
      'Identify high-growth land & project opportunities',
      'Manage key stakeholder & client relationships',
    ],
  },
  {
    title: 'Director - Construction Management',
    category: 'Civil Execution & Delivery',
    icon: HardHat,
    description:
      'Oversee site operations, civil engineering quality, BOQ compliance, safety standards, and timely project handovers.',
    responsibilities: [
      'Direct on-site civil teams & contractor operations',
      'Ensure strict structural quality & safety compliance',
      'Optimize BOQ budgets and completion timelines',
    ],
  },
  {
    title: 'Director - Facility Management',
    category: 'Asset Care & Operations',
    icon: Wrench,
    description:
      'Lead property caretaking, commercial facility maintenance, tenant relations, and operational asset management for branch projects.',
    responsibilities: [
      'Maintain residential & commercial real estate assets',
      'Implement preventive maintenance & safety audits',
      'Ensure maximum tenant satisfaction and asset longevity',
    ],
  },
];

const associateFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Roles',
    question: '1. What roles are available under the Associate Director program at Prajha Group?',
    answer:
      'We offer three key director roles across major branches in Tamil Nadu: Director - Business Development, Director - Construction Management, and Director - Facility Management.',
  },
  {
    id: 'faq-2',
    category: 'Responsibilities',
    question: '2. What are the primary responsibilities of an Associate Director at Prajha Group?',
    answer:
      'As an Associate Director, you will lead and manage real estate project operations, build and maintain strategic business relationships, oversee compliance, safety, and project execution, and enhance operational efficiency through innovation.',
  },
  {
    id: 'faq-3',
    category: 'Application',
    question: '3. How can I apply for an Associate Director position at Prajha Group?',
    answer:
      'Interested candidates can apply directly through the Associate page on the Prajha Group website. Applicants need to select their desired director role, attach their profile, and submit the form.',
  },
  {
    id: 'faq-4',
    category: 'Locations',
    question: '4. What is the geographical focus for the Associate Director roles?',
    answer:
      'The primary geographical focus is across major towns and expanding urban corridors of Tamil Nadu, including Chennai, Coimbatore, Madurai, Trichy, Salem, and key regional hubs.',
  },
  {
    id: 'faq-5',
    category: 'Contact',
    question: '5. Who can I contact for more information about the Associate Director opportunities?',
    answer:
      'You can contact our Director Desk directly at +91 94999 33461 or email us at prajhaconnect@gmail.com for detailed guidance regarding application criteria.',
  },
];

export default function AssociateDirectorsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F37924] selection:text-white overflow-x-hidden">
      
      {/* 1. Hero Header Section */}
      <section className="relative py-12 lg:py-20 bg-gradient-to-b from-[#F4F8F6] via-white to-slate-50 border-b border-slate-200/80 overflow-hidden">
        {/* Ambient Glow Meshes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-20 w-[450px] h-[450px] rounded-full bg-[#F37924]/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15, 45, 36, 0.06) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-[#166534] transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F37924] font-bold">Associate</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F2D24]">
                  ASSOCIATE DIRECTOR PROGRAM • TAMIL NADU
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-black leading-[1.15]">
                Lead Our Branches Across <br className="hidden sm:inline" />
                <span className="text-[#166534]">Tamil Nadu</span>
              </h1>

              {/* Sub-headline Pill */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-emerald-50/30 border-l-4 border-[#F37924] bg-white shadow-sm">
                <Sparkles className="w-5 h-5 text-[#F37924] shrink-0" />
                <h2 className="text-[14px] sm:text-[15px] font-bold text-slate-800 italic">
                  Business Development • Construction • Facility Management
                </h2>
              </div>

              {/* Intro Paragraph */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                At Prajha Group, we are expanding and seeking dynamic individuals to lead our branches in Tamil Nadu. Become a key decision-maker in business development, construction, or facility management and drive real estate projects to success.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#apply-today"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#166534] hover:bg-[#0f4624] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wider"
                  style={{ letterSpacing: '1px' }}
                >
                  <span>Apply for Associate Directorship</span>
                  <ArrowRight className="w-4 h-4 text-[#F37924]" />
                </a>

                <a
                  href="tel:+919499933461"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#166534]" />
                  <span>Call Director Desk</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/commercial-invest.png"
                  alt="Modern city skyline representing real estate management and property management career opportunities"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D24] via-[#0F2D24]/20 to-transparent opacity-90" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#166534]">
                      REGIONAL BRANCH LEADERSHIP
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F37924] animate-ping" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Drive High-Growth Operations
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Prajha Group Associate Directors lead regional business development, construction projects, and asset management across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

          </div>

          
        </div>
      </section>

      {/* 2. Director Roles Cards Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#166534]">
              LEADERSHIP POSITIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Associate Director Opportunities
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Select your area of expertise and drive regional operations across Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIRECTOR_ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#166534]/50"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#166534] group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F37924]">
                        {role.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#166534] transition-colors mt-1">
                        {role.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {role.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {role.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href="#apply-today"
                      className="w-full py-3 rounded-xl bg-slate-50 hover:bg-[#166534] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-200 group-hover:border-[#166534]"
                    >
                      <span>Apply For This Role</span>
                      <ArrowRight className="w-4 h-4 text-[#F37924]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Join Our Team Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#F0FDF4]/30 to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
                <span>EXPANDING BRANCH NETWORK</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
                Join Our Team: Associate Director for Branches in Major Towns of Tamil Nadu
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                At Prajha Group, we are expanding our presence and looking for dynamic, driven individuals to take on the role of Associate Director at our branches across major towns of Tamil Nadu. As an Associate Director, you will play a critical leadership role in shaping the success of our local operations, ensuring the growth and development of our real estate projects, and driving business performance in your region.
              </p>

              {/* Checklist Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 font-bold">
                    Lead and manage real estate projects
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 font-bold">
                    Build and maintain strategic business relationships.
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 font-bold">
                    Oversee compliance, safety, and project execution
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-[#166534] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 font-bold">
                    Enhance operational efficiency through innovation.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/skyline-chennai.png"
                  alt="Modern city skyline representing real estate management and property management career opportunities"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg">
                  <p className="text-xs font-bold text-slate-900 text-center">
                    Modern city skyline representing real estate management and property management career opportunities
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <AssociateApplicationForm />

      {/* Legacy inline application form retained temporarily during extraction.
      4. Apply Today / Application Form Section
      <section id="apply-today" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
              <span>DIRECT APPLICATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Apply Today • Are You Ready to Lead?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
              Contact Us today or apply directly to learn more about this exciting leadership opportunity. Let’s build the future together.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-xl relative overflow-hidden">
            
            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-emerald-300 space-y-4 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2D24]">
                  Application Submitted Successfully!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                  Thank you for applying for <span className="font-bold text-[#166534]">{formData.role}</span>. Our executive board will review your profile and contact you shortly.
                </p>

                {uploadedR2Url && (
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-200 inline-flex items-center gap-2 text-xs font-semibold text-slate-700 max-w-full overflow-hidden text-ellipsis">
                    <Paperclip className="w-4 h-4 text-[#166534] shrink-0" />
                    <span className="truncate">Cloudflare R2 PDF Attached:</span>
                    <a
                      href={uploadedR2Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#166534] hover:underline font-bold inline-flex items-center gap-1 shrink-0"
                    >
                      <span>View File</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setUploadedR2Url('');
                      setFormData({ name: '', email: '', phone: '', role: 'Director - Business Development', message: '' });
                      setSelectedFile(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#166534] text-white text-xs font-bold hover:bg-[#0F2D24] transition-colors inline-flex items-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Submit Another Application</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  Name Input
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#166534]" /> Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh K"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all"
                    />
                  </div>

                  Phone Input
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#166534]" /> Phone No *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94999 33461"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  Email Input
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#166534]" /> Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all"
                    />
                  </div>

                  Select Director Role
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#166534]" /> Select Director Role *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all font-semibold"
                    >
                      <option value="Director - Business Development">Director - Business Development</option>
                      <option value="Director - Construction Management">Director - Construction Management</option>
                      <option value="Director - Facility Management">Director - Facility Management</option>
                    </select>
                  </div>
                </div>

                Message with your town name
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#166534]" /> Message with your town name *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter your background and specify your target town in Tamil Nadu (e.g. Madurai, Coimbatore, Trichy, Salem, Chennai)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all resize-none"
                  />
                </div>

                Attach Your Profile (File Upload)
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Paperclip className="w-3.5 h-3.5 text-[#166534]" /> Attach Your Profile (Resume / Portfolio PDF)
                  </label>
                  <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all text-center cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <Paperclip className="w-5 h-5 text-[#166534]" />
                      <span className="text-xs font-bold text-slate-700">
                        {selectedFile ? selectedFile.name : 'Click or Drag to Upload Resume / Profile (PDF, DOC)'}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {selectedFile ? `${(selectedFile.size / 1024).toFixed(1)} KB` : 'No file chosen'}
                      </span>
                    </div>
                  </div>
                </div>

                Submit Button
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  {loading ? (
                    <span>Uploading PDF & Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-4 h-4 text-[#F37924]" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      */}

      {/* 5. FAQ Section */}
      <AdvancedFaqSection
        title="FAQ • Frequently Asked Questions"
        subtitle="Learn more about the Associate Director program, responsibilities, and application process at Prajha Group."
        faqs={associateFaqs}
      />

    </div>
  );
}

