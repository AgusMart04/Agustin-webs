const problems = [
  "Tu web actual está desactualizada",
  "No se adapta a celulares modernos",
  "Carga lento y pierdes clientes",
];

const solutions = [
  "Diseño moderno y actualizado",
  "Responsive para todos los dispositivos",
  "Ultra rápida y optimizada",
];

const ProblemSolution = () => (
  <section className="py-20 md:py-28 pb-12 md:pb-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-muted" style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)" }} />
    <div className="container relative z-10">
      <div className="text-center mb-12 scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          ¿Ya tienes un sitio? Pero...
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Problems */}
        <div className="space-y-5 scroll-reveal">
          <h3 className="text-sm font-bold uppercase tracking-widest text-destructive mb-6">El problema</h3>
          {problems.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-sm font-bold">✕</span>
              <p className="text-foreground/80 text-lg">{p}</p>
            </div>
          ))}
        </div>

        {/* Solutions */}
        <div className="space-y-5 scroll-reveal">
          <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">La solución</h3>
          {solutions.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-accent text-sm font-bold">✓</span>
              <p className="text-foreground/80 text-lg">{s}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-16 text-xl md:text-2xl font-bold text-foreground max-w-2xl mx-auto leading-snug scroll-reveal">
        Tu web deja de ser un gasto y pasa a ser una{" "}
        <span className="text-accent">máquina de clientes</span>
      </p>
    </div>
  </section>
);

export default ProblemSolution;
