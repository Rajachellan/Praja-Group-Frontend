'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Building,
} from 'lucide-react';

export default function VillaMapContact() {
  const [copied, setCopied] = useState(false);

  const address = 'Kaduvancheri, Sriperumbudur, Kancheepuram, Tamil Nadu';

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#062c19] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f37924]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#f37924]" /> Location & Directions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Map & Directions
          </h2>
          <p className="mt-3 text-emerald-100/80 text-base font-body">
            Visit our site at Kaduvancheri, Sriperumbudur or get in touch with our site coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Box */}
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#f37924] text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-white">Site Address</h3>
                      <p className="text-xs text-emerald-300">Kaduvancheri, Sriperumbudur</p>
                    </div>
                  </div>

                  <button
                    onClick={copyAddress}
                    title="Copy Address"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed font-body">
                  Kaduvancheri, Sriperumbudur Taluk, Kancheepuram District, Tamil Nadu.
                </p>
              </div>

              {/* Phones Box */}
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-600 text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">Sales & Enquiry Contact</h3>
                    <p className="text-xs text-emerald-300">Call Anytime (9:00 AM - 7:00 PM)</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Direct Sales Line 1:</span>
                    <a href="tel:9500120231" className="font-bold text-amber-300 hover:underline">
                      9500120231
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Direct Sales Line 2:</span>
                    <a href="tel:9499933741" className="font-bold text-amber-300 hover:underline">
                      9499933741
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Corporate Helpline:</span>
                    <a href="tel:+919962562562" className="font-bold text-amber-300 hover:underline">
                      +91 9962562562
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Box */}
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500 text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">Official Email</h4>
                    <a href="mailto:marketing@prajhagroup.com" className="text-xs text-amber-300 font-semibold hover:underline">
                      marketing@prajhagroup.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* WhatsApp & Call Action row */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <a
                href="https://wa.me/919500120231?text=Hi%2C%20I%20am%20interested%20in%20the%20Villa%20in%20Kaduvancheri%2C%20Sriperumbudur."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Sales</span>
              </a>

              <a
                href="tel:9500120231"
                className="py-3.5 rounded-2xl bg-[#f37924] hover:bg-[#e06810] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Right Side: Map Display */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[380px] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col">
              {/* Google Map Iframe for Sriperumbudur Kaduvancheri */}
              <iframe
                title="Kaduvancheri Sriperumbudur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.859664532657!2d79.9142823!3d12.9696144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f36dcd7fa49f%3A0x6a0c5bd65c82f9c5!2sSriperumbudur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[340px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="p-4 bg-slate-950/90 backdrop-blur-md flex items-center justify-between text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Kaduvancheri, Sriperumbudur, Kancheepuram</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Kaduvancheri+Sriperumbudur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
