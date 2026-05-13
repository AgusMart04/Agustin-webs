import heroMockup from "@/assets/hero-mockup.png";
import { MessageCircle, Star, CalendarDays, TrendingUp, Clock } from "lucide-react";
import { Link } from '@tanstack/react-router'

const WHATSAPP_URL = "https://wa.me/34624537879?text=Hola%21%20He%20visto%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20una%20demo.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F";

const Hero = () => (
  <section className="relative gradient-hero noise pt-28 pb-24 md:pt-40 md:pb-36 overflow-hidden min-h-[90vh] flex items-center border-0">
    {/* Animated blobs */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[140px] pointer-events-none animate-blob" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[100px] pointer-events-none animate-blob delay-300" />
    <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none animate-blob delay-600" />

    <div className="container relative z-10">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 animate-fade-up text-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-primary-foreground/70">Más clientes, más reservas, más ventas.</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-primary-foreground leading-[1.1] animate-fade-up delay-100">
            Páginas web que traen{" "}
            <span className="text-accent relative">
              más clientes
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5" stroke="hsl(187,58%,57%)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            a tu negocio
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/60 max-w-lg mx-auto md:mx-0 animate-fade-up delay-200">
            Ayudo a negocios y profesionales a crecer online con webs que convierten visitas en clientes
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up delay-300">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="group relative gradient-cta text-accent-foreground font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 text-center min-h-[56px] flex items-center justify-center glow-cta hover:shadow-glow">
              Quiero mi web
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <Link to="/demos"
              className="glass text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300 text-center min-h-[56px] flex items-center justify-center">
              Ver demos
            </Link>
          </div>
        </div>

        {/* Mockup with floating elements */}
        <div className="flex justify-center animate-fade-up delay-400">
          <div className="relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 animate-glow-pulse rounded-3xl scale-110" />
            
            {/* Phone mockup with 3D tilt */}
            <div className="relative animate-float" style={{ perspective: "1000px" }}>
              <img src={heroMockup} alt="Ejemplo de página web profesional para restaurante en dispositivo móvil con diseño moderno y optimizado para conversiones" width={400} height={500}
                className="relative z-10 w-full max-w-[300px] md:max-w-[380px] drop-shadow-2xl"
                style={{ transform: "rotateY(-5deg) rotateX(2deg)" }}
                fetchPriority="high" />
            </div>

            {/* Floating UI elements */}
            <div className="absolute -left-4 top-1/4 glass rounded-xl px-3 py-2 animate-float-slow delay-200 z-20 flex items-center gap-2">
              <MessageCircle size={16} className="text-accent" />
              <span className="text-primary-foreground text-xs font-medium">WhatsApp</span>
            </div>
            
            <div className="absolute -right-2 top-1/3 glass rounded-xl px-3 py-2 animate-float-slow delay-400 z-20 flex items-center gap-2">
              <Star size={16} className="text-accent" fill="currentColor" />
              <span className="text-primary-foreground text-xs font-medium">5.0</span>
            </div>
            
            <div className="absolute -left-6 bottom-1/4 glass rounded-xl px-3 py-2 animate-float-slow delay-600 z-20 flex items-center gap-2">
              <CalendarDays size={16} className="text-accent" />
              <span className="text-primary-foreground text-xs font-medium">+12 reservas</span>
            </div>

            <div className="absolute -right-4 bottom-1/3 glass rounded-xl px-3 py-2 animate-float-slow delay-800 z-20 flex items-center gap-2">
              <TrendingUp size={16} className="text-accent" />
              <span className="text-primary-foreground text-xs font-medium">+35% ventas</span>
            </div>

            <div className="absolute left-1/2 -top-4 glass rounded-xl px-3 py-2 animate-float-slow delay-1000 z-20 flex items-center gap-2">
              <Clock size={16} className="text-accent" />
              <span className="text-primary-foreground text-xs font-medium">24/7 online</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Diagonal separator */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 70%, 100% 0, 100% 100%, 0 100%)" }} />
  </section>
);

export default Hero;
