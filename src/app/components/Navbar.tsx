'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronDown, ArrowRight, Menu, X, Clock, Phone, Mail } from 'lucide-react';

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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
      name: 'Services',
      href: '#services',
      hasDropdown: true,
      subLinks: [
        { name: 'Constructions', href: '/constructions' },
        { name: 'Developers', href: '/developers' },
        { name: 'Property Management', href: '/property-management' },
      ],
    },
    { name: 'Joint Venture', href: '#' },
    { name: 'Investors', href: '/investors' },
    { name: 'Associate', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-xs">
      {/* Top Header Bar (Fixed & Centered) */}
      <div className="w-full bg-[#F37924] text-white text-[12px] font-bold py-2 select-none border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-white/95 shrink-0" />
            <span className="tracking-wider">10.00 AM - 06.00 PM</span>
          </div>

          <span className="hidden sm:inline text-white/40 font-light">•</span>

          <a
            href="tel:+919499933461"
            className="flex items-center gap-2 hover:text-white/80 transition-all cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-white/95 shrink-0" />
            <span className="tracking-wider">+91 94999 33461</span>
          </a>

          <span className="hidden sm:inline text-white/40 font-light">•</span>

          <a
            href="mailto:prajhaconnect@gmail.com"
            className="flex items-center gap-2 hover:text-white/80 transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-white/95 shrink-0" />
            <span className="tracking-wider">prajhaconnect@gmail.com</span>
          </a>
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
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-1 text-gray-400 hover:text-[#166534]"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180 text-[#166534]' : ''
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Mobile Sublinks */}
              {link.hasDropdown && link.subLinks && mobileServicesOpen && (
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
