'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Globe,
  Share2,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F2D24] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden relative">
      {/* Subtle ambient lighting blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F37924]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top CTA Bar inside Footer */}
        <div className="bg-gradient-to-r from-[#166534] via-[#1b7a3f] to-[#0F2D24] rounded-3xl p-8 sm:p-10 mb-16 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#F37924] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Have an Idea? Let's Build It!</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Start Your Dream Construction Project?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1">
              Talk with Prajha Group's senior architects and project planners in Chennai today.
            </p>
          </div>

          <Link
            href="tel:+919499933461"
            className="bg-[#F37924] hover:bg-[#e06816] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Call +91 94999 33461</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/praja-logo.webp"
                alt="Prajha Group Logo"
                width={180}
                height={55}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              We strive towards leadership in national infrastructure and luxury real estate development through an unerring focus on quality, safety, and customer satisfaction.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100075918745331"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F37924] text-white/90 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/prajhagroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F37924] text-white/90 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/69127920/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F37924] text-white/90 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
              Quick Links
            </h4>
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '#about' },
              { name: 'Joint Venture', href: '#joint-venture' },
              { name: 'Investors', href: '#investors' },
              { name: 'Associate', href: '#associate' },
              { name: 'Blogs', href: '#blogs' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-white/75 hover:text-[#F37924] transition-colors flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[#F37924]" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Col 3: Core Services */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
              Core Services
            </h4>
            {[
              { name: 'Constructions', href: '/constructions' },
              { name: 'Developers & Plots', href: '/developers' },
              { name: 'Property Management', href: '/property-management' },
              { name: 'Joint Venture Land', href: '/developers#jv-form' },
              { name: 'Architectural Planning', href: '/constructions#quote' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-white/75 hover:text-[#F37924] transition-colors flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[#F37924]" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F37924] shrink-0 mt-0.5" />
                <span>
                  Plot No.18, First Avenue, Pallava Garden, Old Pallavaram, Chennai - 600 117, Tamil Nadu, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F37924] shrink-0" />
                <a href="tel:+919499933461" className="hover:underline">
                  +91 94999 33461
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F37924] shrink-0" />
                <a href="mailto:prajhaconnect@gmail.com" className="hover:underline">
                  prajhaconnect@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F37924] shrink-0" />
                <span>10.00 AM - 06.00 PM (Mon - Sat)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Prajha Group of Companies. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Site Map</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
