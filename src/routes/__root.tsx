import { createRootRoute, Outlet } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
        <Analytics />
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        title: 'Webs para Negocios | Más Clientes',
      },
      {
        name: 'description',
        content: 'Diseño webs para restaurantes, salones y negocios locales que quieren vender más. Pedí tu demo gratis por WhatsApp.',
      },
      {
        name: 'keywords',
        content: 'diseño web, páginas web, restaurantes, negocios locales, Alicante, webs para negocios, diseño web profesional',
      },
      {
        name: 'author',
        content: 'Agustin',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:title',
        content: 'Webs para Negocios Locales',
      },
      {
        property: 'og:description',
        content: 'Páginas web que traen más clientes a tu negocio.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://agustin-webs.vercel.app/',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Webs para Negocios Locales',
      },
      {
        name: 'twitter:description',
        content: 'Páginas web que traen más clientes a tu negocio.',
      },
      {
        rel: 'canonical',
        href: 'https://agustin-webs.vercel.app/',
      },
      {
        rel: 'alternate',
        hreflang: 'es-ES',
        href: 'https://agustin-webs.vercel.app/',
      },
      {
        rel: 'alternate',
        hreflang: 'es-AR',
        href: 'https://agustin-webs.vercel.app/',
      },
      {
        rel: 'alternate',
        hreflang: 'x-default',
        href: 'https://agustin-webs.vercel.app/',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'preconnect',
        href: 'https://www.googletagmanager.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://wa.me',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://www.google-analytics.com',
      },
    ],
    scripts: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-04FE37FBGD',
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-04FE37FBGD');
        `,
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Webs para Negocios Locales",
          "description": "Diseño web profesional para restaurantes, salones y negocios locales que quieren vender más.",
          "url": "https://agustin-webs.vercel.app/",
          "telephone": "+34624537879",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Alicante/Alacant",
            "addressRegion": "Alicante/Alacant",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "38.3452",
            "longitude": "-0.4810"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": ["https://wa.me/34624537879"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Planes de Diseño Web",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web básica"
                },
                "price": "330",
                "priceCurrency": "EUR",
                "description": "Página landing optimizada para mostrar tu negocio con secciones claras, botón WhatsApp y diseño adaptable a celular."
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web profesional"
                },
                "price": "670",
                "priceCurrency": "EUR",
                "description": "Múltiples secciones, formulario de contacto, diseño personalizado y estructura enfocada en conversión."
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web completa"
                },
                "price": "1260",
                "priceCurrency": "EUR",
                "description": "Sistema automatizado con funcionalidades de reservas, conexiones con mapa y redes sociales, diseño 100% personalizado."
              }
            ]
          }
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Para qué tener una web si ya tengo redes sociales?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Las redes sociales son geniales, pero una web es tu casa. Es el único lugar donde mandas tú: sin algoritmos, sin límites y disponible 24/7. Una web profesional transmite confianza, mejora tu posicionamiento en Google y multiplica tu visibilidad. Y a mayor visibilidad, más clientes."
              }
            },
            {
              "@type": "Question",
              "name": "¿Qué incluye la web?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende del plan, pero todas incluyen diseño profesional, botón de WhatsApp, optimización para celular y ayuda para que la web se vea bien. Los planes más avanzados incluyen formularios, sistemas de reservas y más funcionalidades."
              }
            },
            {
              "@type": "Question",
              "name": "¿Te encargas del dominio y hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Me ocupo de toda la parte técnica para que no tengas que preocuparte: dominio y hosting incluidos. Tú solo te centras en tu negocio. Y si lo prefieres, te enseño a hacerlo tú mismo sin complicaciones."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cuánto tarda el proceso?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Una web básica puede estar lista en 2-4 días. Una web profesional, en 5-7 días. Una web completa con funcionalidades avanzadas puede tardar 1-2 semanas. Si es urgente, lo hablamos y buscamos una solución."
              }
            },
            {
              "@type": "Question",
              "name": "¿Puedo pedir cambios?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "¡Por supuesto! Tu web tiene que gustarte. Hacemos cambios hasta que quede como te guste. Mi objetivo es que estés feliz con el resultado, no entregarte algo que no te convence."
              }
            },
            {
              "@type": "Question",
              "name": "¿Funciona en celular?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí, todas mis webs están diseñadas para verse perfecto en celular, tablet y computadora. Hoy en día la mayoría de la gente busca desde el celular, así que eso es prioritario."
              }
            },
            {
              "@type": "Question",
              "name": "¿Esto realmente me va a traer más clientes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Una web si puede ayudarte a conseguir más clientes! No es de la noche a la mañana, pero hace que te encuentren, transmite confianza y facilita el contacto. Además está disponible 24/7 mostrando tu negocio. Con una web conviertes visitas en oportunidades."
              }
            },
            {
              "@type": "Question",
              "name": "¿Cómo empiezo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fácil. Contactame por WhatsApp, cuéntame brevemente sobre tu negocio y qué necesitas. Te hago unas preguntas para entender mejor y te muestro opciones. Sin compromiso, solo charlamos para ver si puedo ayudarte."
              }
            }
          ]
        }),
      },
    ],
  }),
})
