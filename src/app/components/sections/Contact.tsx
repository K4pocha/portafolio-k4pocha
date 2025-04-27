'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react'; // O iconos de react-icons

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-4 bg-primary/5 min-h-[60vh] flex flex-col justify-center"
      // ... animaciones de framer motion ...
    >
      <h2 className="text-3xl font-bold font-mono mb-6 text-center">Hablemos!</h2>
      <p className="max-w-xl mx-auto text-center mb-10 text-foreground/80">
        Estoy buscando activamente nuevas oportunidades y me encantaría conectar.
        ¡No dudes en contactarme!
      </p>

      {/* Contenedor para iconos/enlaces */}
      <div className="flex justify-center items-center gap-6 md:gap-8">
        <a
          href="mailto:nicolas.onate.m@mail.pucv.cl"
          aria-label="Enviar un Email"
          title="Enviar un Email"
          className="text-foreground/70 hover:text-primary transition-colors"
        >
          <Mail size={32} /> {/* Ajusta tamaño */}
        </a>
        <a
          href="https://cl.linkedin.com/in/nicolas-o%C3%B1ate-045132238?trk=people-guest_people_search-card" // Cambia enlace
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de LinkedIn"
          title="Perfil de LinkedIn"
          className="text-foreground/70 hover:text-primary transition-colors"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://github.com/k4pocha" // Cambia enlace
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de GitHub"
          title="Perfil de GitHub"
          className="text-foreground/70 hover:text-primary transition-colors"
        >
          <Github size={32} />
        </a>
        {/* Añade más iconos/enlaces si es necesario */}
      </div>
    </motion.section>
  );
};

export default Contact;