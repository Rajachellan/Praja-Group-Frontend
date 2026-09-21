import Herosection from './components/Herosection';
import TrustExpertsSection from './components/TrustExpertsSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      <Herosection />
      <TrustExpertsSection />
      <ServicesSection />
    </main>
  );
}