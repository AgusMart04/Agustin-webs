import demoRestaurant from "@/assets/demo-restaurant.jpg";
import demoSalon from "@/assets/demo-salon.jpg";
import demoGastro from "@/assets/demo-gastro.jpg";
import { ArrowRight } from "lucide-react";

const demos = [
  {
    title: "Profesionales Independientes",
    description: "La solución para profesionales independientes que quieren crecer y captar más clientes",
    image: demoRestaurant,
    url: "https://clinica-dental-demo-mu.vercel.app/",
  },
  {
    title: "Salón de Belleza Demo",
    description: "Pensada para captar turnos y mostrar servicios",
    image: demoSalon,
    url: "https://beauty-nails-studio-demo.vercel.app/",
  },
  {
    title: "Negocio Gastronómico Demo",
    description: "Ideal para impulsar reservas y pedidos, con delivery y carta digital",
    image: demoGastro,
    url: "https://cafeteria-especialidad-demo.vercel.app/",
  },
];

const WHATSAPP_URL = "https://wa.me/34624537879?text=Hola%2C%20quiero%20ver%20una%20demo%20personalizada";

const Demos = () => (
  <section id="demos" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center mb-14 scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          Así podría verse tu negocio:
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
          Demos reales para distintos tipos de proyectos
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {demos.map((demo, i) => (
          <a key={i} href={demo.url} target="_blank" rel="noopener noreferrer"
            className="group scroll-reveal relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            style={{ transitionDelay: `${i * 0.05}s` }}>
            {/* Image with overlay */}
            <div className="relative overflow-hidden">
              <img src={demo.image} alt={demo.title} loading="lazy" width={1024} height={640}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  Ver demo <ArrowRight size={18} />
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">{demo.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{demo.description}</p>
            </div>
            
            {/* Bottom accent line */}
            <div className="h-1 w-0 group-hover:w-full gradient-cta transition-all duration-500" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Demos;
