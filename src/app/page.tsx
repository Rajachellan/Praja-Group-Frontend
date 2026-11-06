import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Herosection from './components/Herosection';

const TrustExpertsSection = dynamic(() => import('./components/TrustExpertsSection'));
const ServicesSection = dynamic(() => import('./components/ServicesSection'));
const Values = dynamic(() => import('./components/Values'));
const Clients = dynamic(() => import('./components/Clients'));

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
    canonical: 'https://prajhagroup.com/',
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
      {/* <ProjectsShowcase /> */}
      <Values />
      <Clients />
    </main>
  );
}
