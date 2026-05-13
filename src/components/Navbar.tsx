import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from '@tanstack/react-router'

const WHATSAPP_URL = "https://wa.me/34624537879?text=Hola%21%20He%20visto%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20solicitar%20una%20demo.%20%C2%BFPodr%C3%ADas%20darme%20m%C3%A1s%20informaci%C3%B3n%3F";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Demos", to: "/demos" },
    { label: "Beneficios", to: "/beneficios" },
    { label: "Precios", to: "/precios" },
    { label: "Proceso", to: "/proceso" },
    { label: "Sobre mí", to: "/sobre-mi" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/20">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary-foreground tracking-tight">
          Agustin | <span className="text-accent">Webs para negocios</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200">
              {l.label}
            </Link>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="gradient-cta text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            Quiero mi web
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-secondary/20 pb-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-accent transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="block text-center gradient-cta text-accent-foreground font-semibold py-3 rounded-lg">
              Quiero mi web
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
