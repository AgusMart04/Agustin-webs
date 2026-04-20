import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/34624537879?text=Hola%21%20He%20visto%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20una%20demo.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-xl shadow-card-hover whitespace-nowrap animate-fade-up">
          Respondemos en minutos ⚡
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-card rotate-45" />
        </div>
      )}
      
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="block w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:bg-whatsapp-dark hover:scale-110 transition-all duration-200 animate-pulse-glow"
      >
        <MessageCircle className="text-primary-foreground" size={30} fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
