import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Para qué tener una web si ya tengo redes sociales?",
    answer: "Las redes sociales son geniales, pero una web es tu casa. Es el único lugar donde mandas tú: sin algoritmos, sin límites y disponible 24/7. Una web profesional transmite confianza, mejora tu posicionamiento en Google y multiplica tu visibilidad. Y a mayor visibilidad, más clientes.",
  },
  {
    question: "¿Qué incluye la web?",
    answer: "Depende del plan, pero todas incluyen diseño profesional, botón de WhatsApp, optimización para celular y ayuda para que la web se vea bien. Los planes más avanzados incluyen formularios, sistemas de reservas y más funcionalidades.",
  },
  {
    question: "¿Te encargas del dominio y hosting?",
    answer: "Me ocupo de toda la parte técnica para que no tengas que preocuparte: dominio y hosting incluidos. Tú solo te centras en tu negocio. Y si lo prefieres, te enseño a hacerlo tú mismo sin complicaciones.",
  },
  {
    question: "¿Cuánto tarda el proceso?",
    answer: "Una web básica puede estar lista en 2-4 días. Una web profesional, en 5-7 días. Una web completa con funcionalidades avanzadas puede tardar 1-2 semanas. Si es urgente, lo hablamos y buscamos una solución.",
  },
  {
    question: "¿Puedo pedir cambios?",
    answer: "¡Por supuesto! Tu web tiene que gustarte. Hacemos cambios hasta que quede como te guste. Mi objetivo es que estés feliz con el resultado, no entregarte algo que no te convence.",
  },
  {
    question: "¿Funciona en celular?",
    answer: "Sí, todas mis webs están diseñadas para verse perfecto en celular, tablet y computadora. Hoy en día la mayoría de la gente busca desde el celular, así que eso es prioritario.",
  },
  {
    question: "¿Esto realmente me va a traer más clientes?",
    answer: "Una web si puede ayudarte a conseguir más clientes! No es de la noche a la mañana, pero hace que te encuentren, transmite confianza y facilita el contacto. Además está disponible 24/7 mostrando tu negocio. Con una web conviertes visitas en oportunidades.",
  },
  {
    question: "¿Cómo empiezo?",
    answer: "Fácil. Contactame por WhatsApp, cuéntame brevemente sobre tu negocio y qué necesitas. Te hago unas preguntas para entender mejor y te muestro opciones. Sin compromiso, solo charlamos para ver si puedo ayudarte.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-background" style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)" }} />
      
      <div className="container relative z-10 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4 scroll-reveal">
          ¿Tienes dudas?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 scroll-reveal">
          Te respondo las preguntas más comunes. Si no está la tuya, escribeme y te respondo por WhatsApp.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="scroll-reveal bg-card rounded-xl border border-border shadow-card overflow-hidden"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-accent flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-muted-foreground flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center scroll-reveal">
          <p className="text-muted-foreground">
            ¿Sigues con dudas?{" "}
            <a
              href="https://wa.me/34624537879?text=Hola!%20Tengo%20una%20pregunta%20sobre%20las%20webs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Escribeme por WhatsApp
            </a>{" "}
            y te respondo ahora mismo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
