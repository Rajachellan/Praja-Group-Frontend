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
  Send,
  ChevronRight,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#091D17] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden relative font-body">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#166534]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#F37924]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
      

        {/* Main Footer Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Profile & Newsletter */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <Link href="/" className="inline-block mb-4 group">
                <div className="inline-flex items-center px-4 py-2.5 rounded-2xl bg-white shadow-lg border border-white/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <Image
                    src="/praja-logo.webp"
                    alt="Prajha Group Logo"
                    width={180}
                    height={60}
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
                Prajha Group is Chennai’s trusted leader in residential, commercial construction, joint ventures, and property management with 15+ years of architectural excellence.
              </p>
            </div>

            {/* Newsletter / Quick Email Subscribe */}
            {/* <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-[#F37924]" />
                <span>Stay Updated</span>
              </h5>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#F37924] placeholder:text-white/40 transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#F37924] hover:bg-[#e06816] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shrink-0 hover:scale-105 cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div> */}

            {/* Social Links using react-icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100075918745331"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F37924] border border-white/10 hover:border-[#F37924] text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/prajhagroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F37924] border border-white/10 hover:border-[#F37924] text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/69127920/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F37924] border border-white/10 hover:border-[#F37924] text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading relative inline-block pb-2 border-b border-[#F37924]/40 w-fit">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Careers', href: '#' },
                { name: 'Blogs', href: '#' },
                { name: 'Contact Us', href: '/contact-us' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-white/75 hover:text-[#F37924] transition-all flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#F37924] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Core Services & Joint Ventures */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading relative inline-block pb-2 border-b border-[#F37924]/40 w-fit">
              Core Expertise
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Constructions', href: '/constructions' },
                { name: 'Developers & Plots', href: '/developers' },
                // { name: 'Property Management', href: '/property-management' },
                { name: 'Land Owners JV', href: '/land-owners' },
                { name: 'Associate Directors', href: '/associate-directors' },
                { name: 'Investors Program', href: '/investors' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-white/75 hover:text-[#F37924] transition-all flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#F37924] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                  <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading relative inline-block pb-2 border-b border-[#F37924]/40 w-fit">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F37924] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-snug text-white/80">
                  Plot No.18, First Avenue, Pallava Garden, Old Pallavaram, Chennai - 600 117, Tamil Nadu.
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F37924] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919499933461" className="hover:text-[#F37924] transition-colors font-medium">
                  +91 94999 33461
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F37924] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:prajhaconnect@gmail.com" className="hover:text-[#F37924] transition-colors font-medium">
                  prajhaconnect@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F37924] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-white/80">10:00 AM - 06:00 PM (Mon - Sat)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center sm:text-left text-[14px]">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Created and Designed By <u><a href="https://rankraze.com/" target='_blank'>Rankraze</a></u></span>. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-[#F37924] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 ml-2 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
