'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  Building2,
  Award,
  User,
  Mail,
  MapPin,
  MessageSquare,
  Loader2,
} from 'lucide-react';
import api from '@/services/api';
import { AxiosError } from 'axios';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [phNo, setPhno] = useState<number | undefined>(undefined);
  const [propertyLocation, setPropertyLocation] = useState<string>('');

  useEffect(() => {
    // Open modal automatically after page reload/load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle Escape key to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await api.post('/add/contact', {
        name,
        email,
        message,
        phNo,
        propertyLocation,
      });
      setIsSubmitted(true);
      alert(res.data.message)
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      setError(axiosError.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const handleClose = () => {
    setIsOpen(false);
    // Reset submission state after exit animation
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      setPhno(undefined);
      setPropertyLocation('');
      setError('');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 my-auto transform transition-all duration-300 scale-100 animate-scale-up">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F2D24] via-[#166534] to-[#0A1F18] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient background glowing elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F37924]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Premier Real Estate & Construction</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-snug">
                Building Your Dream Spaces In Chennai
              </h3>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                Get expert architectural consultation, custom construction quotes, and prime property deals directly from Prajha Group.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="relative z-10 space-y-3 pt-6 border-t border-white/15 mt-6">
              <div className="flex items-center gap-3 text-xs text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0 text-amber-300">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">15+ Years of Architectural Excellence</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0 text-amber-300">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">106+ Successfully Delivered Projects</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0 text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">100% Quality & Transparency Assurance</span>
              </div>
            </div>

            {/* Direct Phone Bar */}
            <div className="relative z-10 pt-4">
              <a
                href="tel:+919499933461"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-amber-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F37924]" />
                <span>Call Us Directly: +91 94999 33461</span>
              </a>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white relative">
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-[#166534] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 font-heading">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  We have received your request. Our senior architect & property expert will contact you within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 bg-[#166534] hover:bg-[#0f4924] text-white font-bold text-xs px-8 py-3 rounded-xl transition-all shadow-md cursor-pointer hover:scale-105"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Quick Consultation
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading mt-2">
                    Get Free Quote & Info
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Fill out the form below to connect with our experts today.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full bg-gray-50 text-gray-900 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phNo ?? ''}
                          onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, '');
                            setPhno(digits ? Number(digits) : undefined);
                          }}
                          placeholder="+91 Mobile number"
                          className="w-full bg-gray-50 text-gray-900 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full bg-gray-50 text-gray-900 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property Location */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Property / Preferred Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={propertyLocation}
                        onChange={(e) => setPropertyLocation(e.target.value)}
                        placeholder="e.g. Pallavaram / OMR / Velachery"
                        className="w-full bg-gray-50 text-gray-900 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Message / Query */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Requirement / Query <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                      <textarea
                        required
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project or requirement..."
                        className="w-full bg-gray-50 text-gray-900 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Error Notification */}
                  {error && (
                    <p role="alert" className="text-xs font-medium text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                      {error}
                    </p>
                  )}

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 bg-[#F37924] hover:bg-[#e06816] disabled:opacity-70 text-white font-extrabold text-sm py-3 px-6 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-98 cursor-pointer group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    🔒 We respect your privacy. No spam guaranteed.
                  </p>
                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

