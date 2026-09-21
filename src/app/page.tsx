import Herosection from './components/Herosection';
import TrustExpertsSection from './components/TrustExpertsSection';
import ServicesSection from './components/ServicesSection';
import Values from './components/Values';
import Clients from './components/Clients';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      <Herosection />
      <TrustExpertsSection />
      <ServicesSection />
      <Values/>
      <Clients />
    </main>
  );
}