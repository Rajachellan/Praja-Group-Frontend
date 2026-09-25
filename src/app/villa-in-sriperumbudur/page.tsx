import type { Metadata } from 'next';
import VillaPageClient from './components/VillaPageClient';

export const metadata: Metadata = {
  title: 'Villa in Sriperumbudur | Prajha Group Chennai',
  description:
    'Modern Design Villa With 15+ years of experience, 106+ completed projects, and a dedicated team of experts, we are redefining the construction and real estate industry in Chennai. From residential and commercial buildings to industrial and infrastructure projects, we bring visionary ideas to life. View Property Kaduvancheri,Sriperumbudur. 9500120231 / 9499933741 +91 9962562562 marketing@prajhagroup.com Premium Villas',
  alternates: {
    canonical: 'https://www.prajhagroup.com/villa-in-sriperumbudur/',
  },
  openGraph: {
    title: 'Villa in Sriperumbudur | Prajha Group Chennai',
    description:
      'Modern Design Villa With 15+ years of experience, 106+ completed projects, and a dedicated team of experts, we are redefining the construction and real estate industry in Chennai. From residential and commercial buildings to industrial and infrastructure projects, we bring visionary ideas to life. View Property Kaduvancheri,Sriperumbudur. 9500120231 / 9499933741 +91 9962562562 marketing@prajhagroup.com Premium Villas',
    type: 'website',
    url: 'https://www.prajhagroup.com/villa-in-sriperumbudur/',
    images: [
      {
        url: 'https://www.prajhagroup.com/sriperumbudur_villa_hero.png',
        width: 1200,
        height: 630,
        alt: 'Prajha Group Luxury Villa in Sriperumbudur',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VillaInSriperumbudurPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: 'Prajha Group Luxury Villas Kaduvancheri Sriperumbudur',
    description:
      '1862 Sq. Ft Premium Independent Villa in Kaduvancheri, Sriperumbudur with Gated Community, Granite Stairs, UPVC Windows, and Teak Doors.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kaduvancheri, Sriperumbudur',
      addressRegion: 'Kancheepuram, Tamil Nadu',
      addressCountry: 'IN',
    },
    offers: {
      '@type': 'Offer',
      price: '8900000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 1862,
      unitCode: 'FTK',
    },
    telephone: '+919500120231',
    url: 'https://www.prajhagroup.com/villa-in-sriperumbudur/',
  };

  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      {/* Schema.org JSON-LD Structured Data for Real Estate */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Client Component Container */}
      <VillaPageClient />
    </main>
  );
}