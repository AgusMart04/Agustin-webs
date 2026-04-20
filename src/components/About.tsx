import { useState } from "react";
import ContactForm from "./ContactForm";

const About = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="sobre-mi" className="py-20 md:py-28">
      <div className="container max-w-2xl text-center scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
          Soy Agustin
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Diseño webs pensadas para vender, no solo para existir, ayudando a negocios a crecer online.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {["Webs que generan ventas", "Soporte personalizado", "Entrega en tiempo récord"].map((tag) => (
            <span key={tag} className="bg-accent/10 text-accent font-medium text-sm px-5 py-2.5 rounded-full border border-accent/20 hover:bg-accent/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="mt-8 gradient-cta text-accent-foreground font-bold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 min-h-[56px] flex items-center justify-center gap-2 mx-auto glow-cta hover:shadow-glow animate-pulse-soft"
        >
          Envíame un correo 📩
        </button>
      </div>
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default About;
