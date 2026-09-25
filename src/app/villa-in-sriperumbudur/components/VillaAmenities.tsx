'use client';

import React from 'react';
import {
  ShieldCheck,
  Lamp,
  Navigation,
  Zap,
  TrendingUp,
  Trees,
  DoorOpen,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function VillaAmenities() {
  const amenities = [
    {
      title: 'Gated Communities',
      description: 'Secure, private perimeter with controlled access for complete peace of mind.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Street Lights',
      description: 'Well-lit internal avenues ensuring safety and visibility throughout night time.',
      icon: Lamp,
      color: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Concrete Road',
      description: 'Wide, heavy-duty concrete internal roads built for smooth transit and longevity.',
      icon: Navigation,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Ready to use EB Post/ Line',
      description: 'Pre-installed electrical posts & power lines for immediate hassle-free connection.',
      icon: Zap,
      color: 'from-yellow-400 to-amber-500',
    },
    {
      title: 'High Potential Location',
      description: 'Situated in Sriperumbudur growth corridor with rapid property value appreciation.',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Park Facility',
      description: 'Lush green recreational park area for children, morning walks, and relaxation.',
      icon: Trees,
      color: 'from-green-500 to-emerald-700',
    },
    {
      title: 'Grand Arch',
      description: 'Imposing, elegantly designed entrance arch welcome gateway to the layout.',
      icon: DoorOpen,
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f37924] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> World-Class Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3B24] font-heading">
            Modern Amenities
          </h2>
          <p className="mt-3 text-gray-600 text-base font-body">
            Everything you need for a safe, comfortable, and luxurious lifestyle in Kaduvancheri, Sriperumbudur.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-[#FBFBFB] border border-gray-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 group-hover:text-[#166534] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-emerald-700 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f37924]" /> Included In Project
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
