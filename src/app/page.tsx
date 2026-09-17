import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import TrustExpertsSection from './components/TrustExpertsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      <Navbar />
      <Herosection />
      <TrustExpertsSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}