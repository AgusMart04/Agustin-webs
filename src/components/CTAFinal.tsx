import { Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34624537879?text=Hola%21%20He%20visto%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20una%20demo.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F";
const INSTAGRAM_URL = "https://instagram.com/websites.agus";

const CTAFinal = () => (
  <section className="py-24 md:py-32 gradient-dark noise relative overflow-hidden">
    {/* Glows */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px] pointer-events-none" />
    
    <div className="container relative z-10 text-center">
      <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 scroll-reveal">
        Estás a una web de tener más clientes
      </p>
      <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-8 scroll-reveal">
        ¿Te gustaría tener más clientes?
      </h2>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
        className="scroll-reveal inline-flex items-center gap-3 gradient-cta text-accent-foreground font-bold text-xl px-12 py-6 rounded-2xl hover:scale-105 transition-all duration-300 min-h-[64px] glow-cta hover:shadow-glow animate-pulse-soft">
        Obten tu demo gratis →
      </a>
      <p className="mt-5 text-primary-foreground/50 text-sm scroll-reveal">
        Respuesta rápida por WhatsApp
      </p>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 text-primary-foreground font-semibold text-sm px-6 py-3 rounded-xl border border-primary-foreground/20 hover:border-primary-foreground/40 hover:scale-105 transition-all duration-300 scroll-reveal hover:shadow-[0_0_20px_rgba(225,48,108,0.3)] relative overflow-hidden group">
        <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Instagram size={16} className="relative z-10" />
        <span className="relative z-10">Visita mi perfil de Instagram</span>
      </a>
    </div>
  </section>
);

export default CTAFinal;
