import { memo } from 'react'

const Footer = memo(() => (
  <footer className="bg-primary py-8">
    <div className="container text-center">
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} Agustin Martinez. Todos los derechos reservados.
      </p>
    </div>
  </footer>
));

Footer.displayName = 'Footer'

export default Footer;
