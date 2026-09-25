import type { Metadata } from 'next';
import Herosection from './components/Herosection';
import TrustExpertsSection from './components/TrustExpertsSection';
import ServicesSection from './components/ServicesSection';
import Values from './components/Values';
import Clients from './components/Clients';

export const metadata: Metadata = {
  title: 'Prajha Group – Top Construction & Real Estate Developers in Chennai',
  description:
    'Prajha Group is a leading construction and real estate development company in Chennai, offering expert services in property management, joint ventures, and investment opportunities. Explore our premium projects and connect with us today!',
  keywords: [
    'construction company in Chennai',
    'real estate developers Chennai',
    'property management Chennai',
    'joint venture real estate Chennai',
    'Prajha Group',
    'investment opportunities Chennai',
    'builders in Chennai',
    'commercial construction Chennai',
    'residential development Chennai',
  ],
  alternates: {
    canonical: 'https://www.prajhagroup.com/',
  },
  openGraph: {
    title: 'Prajha Group – Top Construction & Real Estate Developers in Chennai',
    description:
      'Prajha Group is a leading construction and real estate development company in Chennai, offering expert services in property management, joint ventures, and investment opportunities. Explore our premium projects and connect with us today!',
    url: 'https://www.prajhagroup.com/',
    siteName: 'Prajha Group',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      <Herosection />
      <TrustExpertsSection />
      <ServicesSection />
      <Values />
      <Clients />
    </main>
  );
}