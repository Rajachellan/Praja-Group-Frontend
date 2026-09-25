'use client';

import React from 'react';
import {
  GraduationCap,
  Building2,
  Plane,
  Clock,
  MapPin,
  Sparkles,
  Navigation,
  CheckCircle2,
} from 'lucide-react';

export default function VillaDistanceIndicator() {
  const landmarks = [
    {
      name: 'Mont Port School',
      distance: '2 Min',
      category: 'Education',
      icon: GraduationCap,
      color: 'bg-emerald-100 text-[#166534]',
    },
    {
      name: 'Little Flower School',
      distance: '2 Min',
      category: 'Education',
      icon: GraduationCap,
      color: 'bg-emerald-100 text-[#166534]',
    },
    {
      name: 'Greenfield Airport (Proposed)',
      distance: '15 Min',
      category: 'Mega Infrastructure',
      icon: Plane,
      color: 'bg-amber-100 text-[#f37924]',
    },
    {
      name: 'Renault Nissan Automotive',
      distance: 'Quick Drive',
      category: 'Industrial Hub',
      icon: Building2,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      name: 'Saint Gobain Glass India',
      distance: 'Quick Drive',
      category: 'Industrial Hub',
      icon: Building2,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      name: 'TVS Wheels India',
      distance: 'Quick Drive',
      category: 'Industrial Hub',
      icon: Building2,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      name: 'Daimler India Commercial',
      distance: 'Quick Drive',
      category: 'Industrial Hub',
      icon: Building2,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      name: 'Apollo Tyres Manufacturing',
      distance: 'Quick Drive',
      category: 'Industrial Hub',
      icon: Building2,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      name: 'Royal Enfield Assembly',
      distance: 'Quick Drive',
      category: 'Industrial Hub',
      icon: Building2,
      color: 'bg-blue-100 text-blue-700',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" /> Prime Connectivity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B24] font-heading">
            Distance Indicator & Nearby Landmarks
          </h2>
          <p className="mt-3 text-gray-600 text-base font-body">
            Strategically located near renowned educational institutions, global manufacturing hubs, and major transport corridors.
          </p>
        </div>

        {/* Highlighted Top Schools Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-900 to-[#0B3B24] text-white shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-emerald-300 font-semibold block uppercase">Top School Proximity</span>
                <h3 className="text-xl font-bold font-heading">Mont Port School</h3>
                <p className="text-xs text-gray-200">Just 2 Minutes from your doorstep</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#f37924] font-extrabold text-sm text-white shrink-0">
              2 MIN
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-900 to-[#0B3B24] text-white shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-emerald-300 font-semibold block uppercase">Top School Proximity</span>
                <h3 className="text-xl font-bold font-heading">Little Flower School</h3>
                <p className="text-xs text-gray-200">Just 2 Minutes from your doorstep</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#f37924] font-extrabold text-sm text-white shrink-0">
              2 MIN
            </div>
          </div>
        </div>

        {/* Complete Industrial & Hub Landmarks Grid */}
        <div className="bg-[#FBFBFB] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-[#0B3B24] font-heading mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#f37924]" /> Key Industrial Giants & Airport Connectivity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {landmarks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${item.color} shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 font-heading">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-gray-500 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[#166534] font-bold text-xs flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3 text-[#f37924]" /> {item.distance}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
