import { XCircle, CheckCircle } from "lucide-react";

const before = [
  "No apareces en Google",
  "Pierdes clientes cada día",
  "WhatsApp desordenado",
  "Sin imagen profesional",
];

const after = [
  "Apareces primero en búsquedas",
  "Más reservas y pedidos",
  "Contacto directo organizado",
  "Imagen que genera confianza",
];

const BeforeAfter = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-background" style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)" }} />
    
    <div className="container relative z-10">
      <div className="text-center mb-14 scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          El cambio que tu negocio necesita
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {/* Before */}
        <div className="scroll-reveal bg-card rounded-2xl p-8 border border-destructive/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/40" />
          <h3 className="text-lg font-bold text-destructive mb-6 flex items-center gap-2">
            <XCircle size={20} />
            Sin web profesional
          </h3>
          <div className="space-y-4">
            {before.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-sm">✕</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After */}
        <div className="scroll-reveal bg-card rounded-2xl p-8 border border-accent/30 relative overflow-hidden shadow-card-hover">
          <div className="absolute top-0 left-0 right-0 h-1 gradient-cta" />
          <h3 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
            <CheckCircle size={20} />
            Con tu web
          </h3>
          <div className="space-y-4">
            {after.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center text-accent text-sm font-bold">✓</span>
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
