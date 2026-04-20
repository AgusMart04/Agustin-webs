import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import BeforeAfter from "@/components/BeforeAfter";
import SalesCopy from "@/components/SalesCopy";
import Demos from "@/components/Demos";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <BeforeAfter />
      <SalesCopy text="Mientras otros solo diseñan… yo hago webs que venden" dark />
      <ProblemSolution />
      <Demos />
      <SalesCopy text="Tu competencia ya está online. ¿Qué estás esperando?" />
      <Benefits />
      <Process />
      <Pricing />
      <FAQ />
      <About />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
