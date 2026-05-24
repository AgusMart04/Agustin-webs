import { useState } from "react";

const plans = [
  {
    name: "Web básica",
    color: "green",
    features: [
      "Página landing optimizada para mostrar tu negocio",
      "Secciones claras: servicios, info y contacto",
      "Botón directo a WhatsApp",
      "Diseño moderno alineado a tu marca",
      "Entrega rápida",
    ],
    priceEUR: 250,
    priceUSD: 300,
    whatsappUrl: "https://wa.me/34624537879?text=Hola!%20Me%20interesa%20la%20web%20básica.%20Quisiera%20más%20información.",
  },
  {
    name: "Web profesional",
    color: "yellow",
    features: [
      "Múltiples secciones y navegación fluida",
      "Formulario de contacto",
      "Integracion de pagos online",
      "Conexiones con mapa y redes sociales",
      "Estructura enfocada en conversión",
    ],
    priceEUR: 500,
    priceUSD: 600,
    whatsappUrl: "https://wa.me/34624537879?text=Hola!%20Me%20interesa%20la%20web%20profesional.%20Quisiera%20más%20información.",
  },
  {
    name: "Web completa",
    color: "blue",
    features: [
      "Sistema diseñado para automatizar y generar clientes",
      "Funcionalidades: reservas, turnos o integraciones",
      "Sistema autogestionable de tu negocio",
      "Diseño 100% personalizado",
      "Preparada para crecimiento futuro",
    ],
    priceEUR: 1_080,
    priceUSD: 1_260,
    whatsappUrl: "https://wa.me/34624537879?text=Hola!%20Me%20interesa%20la%20web%20completa%20con%20funcionalidades.%20Quisiera%20más%20información.",
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState<"EUR" | "USD">("EUR");

  const formatPrice = (priceEUR: number, priceUSD: number) => {
    return currency === "EUR" ? `Desde ${priceEUR}€` : `Desde $${priceUSD}`;
  };

  return (
    <section id="precios" className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4 scroll-reveal">
          ¿Cuánto cuesta una página web?
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-xl mx-auto mb-6 scroll-reveal">
          Cada proyecto se adapta a las necesidades de tu negocio. Estos planes son una referencia para orientarte sobre precios y alcance.
        </p>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-10 scroll-reveal">
          <div className="inline-flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setCurrency("EUR")}
              className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 ${
                currency === "EUR"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EUR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 ${
                currency === "USD"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              USD
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4">
                {plan.color === "green" && (
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-3">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                  </div>
                )}
                {plan.color === "yellow" && (
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-3">
                    <div className="w-4 h-4 rounded-full bg-yellow-500" />
                  </div>
                )}
                {plan.color === "blue" && (
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                <p className="text-2xl font-bold text-foreground transition-all duration-300">
                  {formatPrice(plan.priceEUR, plan.priceUSD)}
                </p>
              </div>

              <a
                href={plan.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gradient-cta text-accent-foreground font-bold text-base px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 text-center glow-cta hover:shadow-glow"
              >
                Quiero esta web
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto mt-12 scroll-reveal">
          Cada proyecto es único, por eso los precios son orientativos. Si no estás seguro de lo que necesitas, escribeme y vemos juntos la mejor opción para tu negocio.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
