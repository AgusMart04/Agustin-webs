import { Smartphone, MessageCircle, MapPin, CalendarDays, Zap, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Smartphone, title: "Perfecta en celular", desc: "Tu web se ve increíble en cualquier dispositivo" },
  { icon: MessageCircle, title: "Botón de WhatsApp", desc: "Tus clientes te escriben con un solo toque" },
  { icon: MapPin, title: "Google Maps", desc: "Que te encuentren fácil con la ubicación integrada" },
  { icon: CalendarDays, title: "Reservas online", desc: "Tus clientes reservan sin llamar" },
  { icon: Zap, title: "Ultra rápida", desc: "Carga al instante, sin esperas" },
  { icon: TrendingUp, title: "Visibilidad en Google", desc: "Configurada para mejorar el ranking en buscadores" },
];

const Benefits = () => (
  <section id="beneficios" className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 gradient-dark" style={{ clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)" }} />
    
    <div className="container relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground text-center mb-14 scroll-reveal">
        Todo lo que necesita tu negocio
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <div key={i}
            className="scroll-reveal group glass rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-400 hover:-translate-y-1"
            style={{ transitionDelay: `${i * 0.05}s` }}>
            <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/25 transition-all duration-300">
              <b.icon className="text-accent" size={26} />
            </div>
            <h3 className="font-bold text-primary-foreground text-lg">{b.title}</h3>
            <p className="mt-2 text-primary-foreground/60 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
