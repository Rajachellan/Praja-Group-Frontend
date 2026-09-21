'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
} from 'lucide-react';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Constructions',
  });

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset submission state after exit animation
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

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
              {/* Brand Logo */}
              <div className="inline-block">
                <Image
                  src="/praja-logo.webp"
                  alt="Prajha Group Logo"
                  width={160}
                  height={50}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </div>

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

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full bg-gray-50 text-gray-900 text-sm pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Mobile number"
                        className="w-full bg-gray-50 text-gray-900 text-sm pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-gray-50 text-gray-900 text-sm pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#166534] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Constructions">Building & Commercial Construction</option>
                      <option value="Developers">Developers & Plot Sales</option>
                      <option value="Joint Ventures">Joint Ventures (Land Owners / Investors)</option>
                      <option value="Property Management">Property Management</option>
                    </select>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#F37924] hover:bg-[#e06816] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-98 cursor-pointer group"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
