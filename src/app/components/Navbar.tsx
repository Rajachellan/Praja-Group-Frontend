'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronDown, ArrowRight, Menu, X, Clock, Phone, Mail, Sparkles, MapPin, Building2 } from 'lucide-react';

interface SubLink {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
  subLinks?: SubLink[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Home');

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {name:'Construction', href:'/constructions'},
    {name:'Developers', href:'/developers'},
    // {
    //   name: 'Services',
    //   href: '#services',
    //   hasDropdown: true,
    //   subLinks: [
    //     { name: 'Constructions', href: '/constructions' },
    //     { name: 'Developers', href: '/developers' },
    //     { name: 'Property Management', href: '/property-management' },
    //   ],
    // },
    {
      name: 'Joint Ventures',
      href: '#joint-ventures',
      hasDropdown: true,
      subLinks: [
        { name: 'Land Owners', href: '/landowners' },
        { name: 'Associate Directors', href: '/associate-directors' },
        { name: 'Investors', href: '/investors' },
      ],
    },
    { name: 'Careers', href: '#' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-xs">
      {/* Top Header Bar */}
      <div className="w-full  text-white text-[12px] font-medium py-2 select-none border-b border-white/10 shadow-xs bg-[#166534]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Left Side: Welcome Badge, Location & Slogan */}
          <div className="flex items-center gap-3">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 hover:bg-white/20 text-white text-[11px] font-bold tracking-wide border border-white/25 shadow-xs backdrop-blur-md transition-all group cursor-default">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#F37924] shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                <Building2 className="w-3 h-3 text-[#F37924]" />
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-white/95 font-medium">Welcome to</span>
                <span className="text-[#166534] font-extrabold tracking-wider">Prajha Group</span>
              </span>
            </div> */}
            
            <div className="hidden sm:flex items-center gap-1.5 text-white/95 font-medium">
              <MapPin className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span className="tracking-wide font-playfair">Chennai, TN</span>
            </div>

            <span className="hidden md:inline text-white/40 font-light">•</span>

            <span className="hidden md:inline text-white/90 tracking-wide font-playfair">
              Building Trust & Excellence
            </span>
          </div>

          {/* Right Side: Working Hours & Direct Contact Links */}
          <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-6 font-bold ">
            <div className="flex items-center gap-1.5 text-white/95">
              <Clock className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span className="tracking-wider">10:00 AM - 06:00 PM</span>
            </div>

            <span className="hidden sm:inline text-white/40 font-light">•</span>

            <a
              href="tel:+919499933461"
              className="flex items-center gap-1.5 text-white hover:text-amber-100 transition-all cursor-pointer group"
            >
              <Phone className="w-3.5 h-3.5 text-white/95 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="tracking-wider">+91 94999 33461</span>
            </a>

            <span className="hidden md:inline text-white/40 font-light">•</span>

            <a
              href="mailto:prajhaconnect@gmail.com"
              className="flex items-center gap-1.5 text-white hover:text-amber-100 transition-all cursor-pointer group"
            >
              <Mail className="w-3.5 h-3.5 text-white/95 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="tracking-wider">prajhaconnect@gmail.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/praja-logo.webp"
              alt="Prajha Group Logo"
              width={160}
              height={80}
              priority
               className="h-16 sm:h-20 lg:h-[84px] w-auto object-contain transform hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <Link
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-1 text-[14px] font-semibold transition-colors duration-200 ${
                    activeTab === link.name
                      ? 'text-[#166534]'
                      : 'text-gray-700 hover:text-[#166534]'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#166534] transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Active Underline Indicator */}
                {activeTab === link.name && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#166534] rounded-full" />
                )}

                {/* Desktop Hover Dropdown Menu */}
                {link.hasDropdown && link.subLinks && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50 min-w-[210px]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100/80 py-2 px-1.5 flex flex-col gap-0.5">
                      {link.subLinks.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setActiveTab(link.name)}
                          className="px-4 py-2.5 text-[13.5px] font-medium text-gray-700 hover:text-[#166534] hover:bg-emerald-50/80 rounded-lg transition-colors flex items-center justify-between"
                        >
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Certificate Badge */}
          <div className="hidden sm:flex items-center">
            <Image
              src="/certificate-badge.png"
              alt="15 Years Certificate Badge"
              width={200}
              height={100}
              priority
              className="h-16 sm:h-20 lg:h-[84px] w-auto object-contain transform hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#166534] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 last:border-none pb-2">
              <div className="flex items-center justify-between py-1">
                <Link
                  href={link.href}
                  onClick={() => {
                    if (!link.hasDropdown) {
                      setActiveTab(link.name);
                      setMobileMenuOpen(false);
                    }
                  }}
                  className={`flex-1 font-semibold text-left text-sm ${
                    activeTab === link.name ? 'text-[#166534]' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="p-1 text-gray-400 hover:text-[#166534]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMobileDropdown === link.name ? 'rotate-180 text-[#166534]' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Sublinks */}
              {link.hasDropdown && link.subLinks && openMobileDropdown === link.name && (
                <div className="pl-3 pt-1 flex flex-col gap-2">
                  {link.subLinks.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => {
                        setActiveTab(link.name);
                        setMobileMenuOpen(false);
                      }}
                      className="py-1 text-xs font-medium text-gray-600 hover:text-[#166534] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-2 flex justify-center border-t border-gray-100">
            <Image
              src="/certificate-badge.png"
              alt="15 Years Certificate Badge"
              width={160}
              height={80}
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      )}
    </header>
  );
}
