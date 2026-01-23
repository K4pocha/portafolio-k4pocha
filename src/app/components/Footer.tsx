import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-foreground/60 text-sm border-t border-foreground/10 bg-background">
      <p>© {new Date().getFullYear()} Nicolás Oñate M. Todos los derechos reservados.</p>
      <p className="mt-2">
        Desarrollado con <span className="text-primary">Next.js</span>, Tailwind CSS y mucho ☕
      </p>
    </footer>
  );
};

export default Footer;