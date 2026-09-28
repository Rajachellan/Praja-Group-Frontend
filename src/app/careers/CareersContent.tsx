'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Briefcase,
  Sparkles,
  ArrowRight,
  HardHat,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Award,
  HeartHandshake,
  Building2,
  GraduationCap,
  HelpCircle,
  MapPin,
  X,
  Send,
} from 'lucide-react';
import axios from 'axios';
import api from '@/services/api';

interface Job {
  _id: string;
  jobName: string;
  experience: string;
  responsibilities: string[];
  qualifications: string[];
  location: string;
}



const CAREER_FAQS = [
  {
    question: 'What is the recruitment process at Prajha Group?',
    answer: 'Our selection process includes initial resume screening, a technical interview with senior project leads, a culture-fit interaction with management, and HR finalization.'
  },
  {
    question: 'Can fresh graduates or final-year students apply?',
    answer: 'Yes! We run dedicated Graduate Engineer Trainee (GET) programs and site internships across our civil and architecture departments for promising talent.'
  },
  {
    question: 'Where are Prajha Group work locations based?',
    answer: 'Our main corporate office is located in Pallavaram, Chennai, with site engineering opportunities situated across key real estate hubs in Chennai and surrounding suburbs.'
  },
  {
    question: 'How do I submit my application if no open role fits my profile?',
    answer: 'You can submit your CV through our Spontaneous Application box or email your updated resume directly to prajhaconnect@gmail.com with your domain of expertise in the subject line.'
  }
];

export default function CareersContent() {
  const [jobArray, setJobArray] = useState<Job[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationError, setApplicationError] = useState('');
  const [applicationSuccess, setApplicationSuccess] = useState('');
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phNo: '',
    about: '',
  });

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await api.get('/get/jobs');
        setJobArray(Array.isArray(response.data.jobs) ? response.data.jobs : []);
      } catch (error) {
        const message = axios.isAxiosError<{ message?: string }>(error)
          ? error.response?.data?.message
          : undefined;
        setJobsError(message || 'Unable to load vacancies. Please try again later.');
      } finally {
        setIsLoadingJobs(false);
      }
    };

    void getJobs();
  }, []);

  const openApplication = (job: Job) => {
    setSelectedJob(job);
    setApplicationForm({ name: '', email: '', phNo: '', about: '' });
    setApplicationError('');
    setApplicationSuccess('');
  };

  const submitApplication = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedJob) return;

    setIsSubmitting(true);
    setApplicationError('');
    try {
      const response = await api.post('/add/job/enquiry', {
        ...applicationForm,
        CareerId: selectedJob._id,
      });
      alert(response.data.message)
      setApplicationSuccess(response.data.message || 'Application submitted successfully.');
      setSelectedJob(null);
      setApplicationForm({ name: '', email: '', phNo: '', about: '' });
    } catch (error) {
      const message = axios.isAxiosError<{ message?: string }>(error)
        ? error.response?.data?.message
        : undefined;
      setApplicationError(message || 'Unable to submit your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F37924] selection:text-white overflow-x-hidden">
      
      {/* 1. Hero Header Section */}
      <section className="relative py-12 lg:py-20 bg-gradient-to-b from-[#F4F8F6] via-white to-slate-50 border-b border-slate-200/80 overflow-hidden">
        {/* Ambient Decorative Glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 -ml-20 w-[450px] h-[450px] rounded-full bg-[#F37924]/10 blur-[120px] pointer-events-none" />
        
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(22, 101, 52, 0.12) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-[#166534] transition-colors flex items-center gap-1">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#F37924] font-bold">Careers</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Main Heading */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Animated Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#166534]/20 bg-[#F0FDF4] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#166534]" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#166534]">
                  JOIN OUR CAREER NETWORK • HIRING IN CHENNAI
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.15]">
                Build Big. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] via-[#15803d] to-[#F37924]">
                  Engineer the Future
                </span>{' '}
                with Prajha Group.
              </h1>

              {/* Subheading */}
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                Be part of Chennai’s premier construction & real estate leadership. We empower top engineering talent, site supervisors, architects, and project managers to construct landmark infrastructure with innovation, safety, and pride.
              </p>

              {/* CTA Quick Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#open-positions"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#166534] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#166534]/25 hover:bg-[#11532a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Briefcase className="w-4 h-4 text-[#F37924]" />
                  Explore Openings
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href="#why-prajha"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 font-bold text-sm rounded-xl shadow-sm hover:border-[#166534]/40 hover:text-[#166534] transition-all duration-200"
                >
                  Why Join Us
                </a>
              </div>

            </div>

            {/* Right Column - Stats Grid Accent */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-100/50 hover:border-[#166534]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] text-[#166534] flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">100+</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Delivered Projects
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-100/50 hover:border-[#F37924]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F37924] flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">17+ Yrs</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Engineering Excellence
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-100/50 hover:border-[#F37924]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37924] flex items-center justify-center mb-4">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">500+</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Workforce & Partners
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-100/50 hover:border-[#166534]/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] text-[#166534] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    Safety Compliance
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Why Choose Prajha Group (Culture & Values Grid) */}
      <section id="why-prajha" className="py-16 sm:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] text-[#166534] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
              Work Culture & Growth
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Build Your Career at <span className="text-[#166534]">Prajha Group</span>?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We foster a culture of technical mastery, transparent ownership, and continuous personal advancement across all site and corporate divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/80 hover:border-[#166534]/40 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-[#166534] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#166534] group-hover:text-white transition-all duration-300">
                <HardHat className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High-Impact Projects</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Work directly on signature residential villas, luxury gated communities, and massive EPC infrastructure developments shaping Chennai’s skyline.
              </p>
            </div>

            <div className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/80 hover:border-[#F37924]/40 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-100/80 text-[#F37924] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F37924] group-hover:text-white transition-all duration-300">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Accelerated Career Trajectory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fast-track promotions, structured performance evaluations, and opportunities to lead multi-disciplinary engineering projects early in your tenure.
              </p>
            </div>

            <div className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/80 hover:border-[#166534]/40 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-[#166534] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#166534] group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zero-Harm Site Safety</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We prioritize site safety above all else. Every engineer and worker operates in a modern, OSHA-compliant environment with premium PPE gear.
              </p>
            </div>

            <div className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/80 hover:border-[#F37924]/40 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-100/80 text-[#F37924] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F37924] group-hover:text-white transition-all duration-300">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Construction Tech</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leverage advanced CAD, BIM modeling, digital BOQ estimation tools, and modern civil engineering instruments for optimal precision.
              </p>
            </div>

            <div className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/80 hover:border-[#166534]/40 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 text-[#166534] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#166534] group-hover:text-white transition-all duration-300">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Skill Development Academy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gain access to Prajha Group’s internal skill academy workshops, structural design certifications, and executive leadership seminars.
              </p>
            </div>

            <div className="group relative bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200/80 hover:border-[#F37924]/40 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-amber-100/80 text-[#F37924] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#F37924] group-hover:text-white transition-all duration-300">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Competitive Compensation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy industry-competitive pay packages, milestone project bonuses, healthcare coverage, and comprehensive team recognition rewards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Open Positions Filterable Section */}
      <section id="open-positions" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-[#166534] text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-[#F37924]" />
                Current Vacancies
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore Available <span className="text-[#166534]">Positions</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Find your role and submit your application directly to our recruitment team.
              </p>
            </div>

          </div>

          {applicationSuccess && (
            <p role="status" className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
              {applicationSuccess}
            </p>
          )}

          {isLoadingJobs ? (
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center text-slate-500 shadow-sm" role="status">
              Loading current vacancies…
            </div>
          ) : jobsError ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center text-sm text-red-700" role="alert">
              {jobsError}
            </div>
          ) : jobArray.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
              <Briefcase className="mx-auto mb-3 h-8 w-8 text-slate-400" />
              <p className="font-semibold text-slate-800">No open positions right now</p>
              <p className="mt-1 text-sm text-slate-500">Please check back soon for new opportunities.</p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
              {jobArray.map((job) => (
                <article key={job._id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#166534]">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.jobName}</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                        <MapPin className="h-4 w-4" />
                        {job.location || 'Location not specified'}
                      </p>
                    </div>
                  </div>

                  <div className="mb-5 inline-flex w-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    Experience: {job.experience}
                  </div>

                  {job.responsibilities?.length > 0 && (
                    <div className="mb-5">
                      <h4 className="mb-2 text-sm font-bold text-slate-800">Responsibilities</h4>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-slate-600">
                        {job.responsibilities.map((item, index) => (
                          <li key={`${job._id}-responsibility-${index}`} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F37924]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.qualifications?.length > 0 && (
                    <div className="mb-6">
                      <h4 className="mb-2 text-sm font-bold text-slate-800">Qualifications</h4>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-slate-600">
                        {job.qualifications.map((item, index) => (
                          <li key={`${job._id}-qualification-${index}`} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#166534]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => openApplication(job)}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#166534] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#11532a] focus:outline-none focus:ring-2 focus:ring-[#166534] focus:ring-offset-2"
                  >
                    Apply for this role
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. Spontaneous Application Banner */}
     

      {/* 5. Careers FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-[#166534] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#F37924]" />
              Got Questions?
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked <span className="text-[#166534]">Career FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {CAREER_FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#F0FDF4] text-[#166534] text-xs font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm pl-8 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedJob(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-modal-title"
            className="my-auto max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#166534]">Job application</p>
                <h2 id="application-modal-title" className="mt-2 text-2xl font-extrabold text-slate-900">
                  Apply for {selectedJob.jobName}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {selectedJob.location} · {selectedJob.experience}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                aria-label="Close application form"
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={submitApplication} className="space-y-4">
              <div>
                <label htmlFor="applicant-name" className="mb-1.5 block text-sm font-semibold text-slate-700">Full name</label>
                <input
                  id="applicant-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={applicationForm.name}
                  onChange={(event) => setApplicationForm({ ...applicationForm, name: event.target.value })}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#166534] focus:ring-2 focus:ring-emerald-100"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="applicant-email" className="mb-1.5 block text-sm font-semibold text-slate-700">Email address</label>
                  <input
                    id="applicant-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={applicationForm.email}
                    onChange={(event) => setApplicationForm({ ...applicationForm, email: event.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#166534] focus:ring-2 focus:ring-emerald-100"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="applicant-phone" className="mb-1.5 block text-sm font-semibold text-slate-700">Phone number</label>
                  <input
                    id="applicant-phone"
                    name="phNo"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={applicationForm.phNo}
                    onChange={(event) => setApplicationForm({ ...applicationForm, phNo: event.target.value })}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#166534] focus:ring-2 focus:ring-emerald-100"
                    placeholder="Your contact number"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="applicant-about" className="mb-1.5 block text-sm font-semibold text-slate-700">About you</label>
                <textarea
                  id="applicant-about"
                  name="about"
                  required
                  rows={4}
                  value={applicationForm.about}
                  onChange={(event) => setApplicationForm({ ...applicationForm, about: event.target.value })}
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#166534] focus:ring-2 focus:ring-emerald-100"
                  placeholder="Briefly share your experience and why you are interested in this role."
                />
              </div>

              {applicationError && (
                <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {applicationError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F37924] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? 'Submitting application…' : 'Submit application'}
              </button>
            </form>
          </section>
        </div>
      )}

    </div>
  );
}
