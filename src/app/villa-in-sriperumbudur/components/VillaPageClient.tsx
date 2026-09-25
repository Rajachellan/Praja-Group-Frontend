'use client';

import React from 'react';
import VillaHeroSection from './VillaHeroSection';
import VillaQuickForm from './VillaQuickForm';
import VillaProjectOverview from './VillaProjectOverview';
import VillaHighlights from './VillaHighlights';
import VillaAmenities from './VillaAmenities';
import VillaSpecifications from './VillaSpecifications';
import VillaDistanceIndicator from './VillaDistanceIndicator';
import VillaMapContact from './VillaMapContact';

export default function VillaPageClient() {
  const scrollToEnquire = () => {
    if (typeof window !== 'undefined') {
      const target = document.getElementById('enquire');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <VillaHeroSection onEnquireClick={scrollToEnquire} />

      {/* 2. Quick Lead Enquiry Form Section */}
      <VillaQuickForm />

      {/* 3. Select Your Ideal Home / Overview */}
      <VillaProjectOverview onEnquireClick={scrollToEnquire} />

      {/* 4. Project Highlights */}
      <VillaHighlights />

      {/* 5. Amenities Showcase */}
      <VillaAmenities />

      {/* 6. Villa Specifications */}
      <VillaSpecifications />

      {/* 7. Distance Indicator / Location Advantages */}
      <VillaDistanceIndicator />

      {/* 8. Map & Directions & Contact Banner */}
      <VillaMapContact />
    </>
  );
}
