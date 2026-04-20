import { MessageCircle, Eye, Settings, Rocket } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Hablamos por WhatsApp", desc: "Cuentame sobre tu negocio" },
  { icon: Eye, title: "Te muestro una demo", desc: "Personalizada para tu negocio" },
  { icon: Settings, title: "Ajustamos detalles", desc: "Hasta que quede perfecta" },
  { icon: Rocket, title: "Publicamos tu web", desc: "¡Lista para traer clientes!" },
];

const Process = () => (
  <section id="proceso" className="py-20 md:py-28">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-16 scroll-reveal">
        Así de fácil es empezar
      </h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          <div className="w-full h-full bg-border" />
        </div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`scroll-reveal relative flex flex-col md:flex-row items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
                  <p className="mt-1 text-muted-foreground text-sm">{s.desc}</p>
                </div>

                {/* Icon circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg flex-shrink-0">
                  <s.icon className="text-primary-foreground" size={26} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
