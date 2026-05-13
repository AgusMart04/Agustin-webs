import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import BeforeAfter from "@/components/BeforeAfter";
import SalesCopy from "@/components/SalesCopy";
import Demos from "@/components/Demos";
import Benefits from "@/components/Benefits";
import WhatsAppButton from "@/components/WhatsAppButton";

const Process = lazy(() => import("@/components/Process"))
const Pricing = lazy(() => import("@/components/Pricing"))
const FAQ = lazy(() => import("@/components/FAQ"))
const About = lazy(() => import("@/components/About"))
const CTAFinal = lazy(() => import("@/components/CTAFinal"))
const Footer = lazy(() => import("@/components/Footer"))

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  useScrollReveal();

  return <LandingPageContent />;
}

export function LandingPageContent() {
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
      <Suspense fallback={<div className="h-64" />}>
        <Process />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-64" />}>
        <CTAFinal />
      </Suspense>
      <Suspense fallback={<div className="h-32" />}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </>
  );
}
