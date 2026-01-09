import HeroSection from "@/components/HeroSection";
import SaudeIntegrativaSection from "@/components/SaudeIntegrativaSection";
import ReparacaoSection from "@/components/ReparacaoSection";
import ServicosSection from "@/components/ServicosSection";
import EsteticaSection from "@/components/EsteticaSection";
import DisfuncoesSection from "@/components/DisfuncoesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SaudeIntegrativaSection />
      <ReparacaoSection />
      <ServicosSection />
      <EsteticaSection />
      <DisfuncoesSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
