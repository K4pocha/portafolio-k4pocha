'use client'; // Necesario para framer-motion

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Image from 'next/image'; // <-- 1. Importa el componente Image de Next.js

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 min-h-[70vh] flex items-center" // Alinea verticalmente el contenido
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Ajusta amount si es necesario
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Contenedor principal con Flexbox para las columnas */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16"> {/* Aumenté max-w y gap */}

        {/* Columna de la Imagen/Avatar */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0" // Tamaño fijo, no se encoge
          // Animación sutil para la imagen (opcional)
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }} // Retraso leve
        >
          <Image
            src="/images/avatar.png" // Tu ruta real aquí
            alt="Foto o Avatar de Nicolás Oñate"
            width={300}
            height={300}
            // Añade object-bottom (o prueba object-center) al final de las clases:
            className="rounded-full object-cover w-full h-full shadow-lg border-4 border-primary/20 object-top" // <-- Añade aquí
            priority
          />
        </motion.div>

        {/* Columna del Texto */}
        <div className="text-center md:text-left"> {/* Alineación de texto */}
          {/* Título con icono */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6 flex items-center justify-center md:justify-start gap-3">
            <User size={32} className="text-primary" />
            Sobre Mí
          </h2>
          {/* Texto descriptivo */}
          <p className="text-lg text-foreground/80 leading-relaxed mb-4"> {/* Puedes dividir en párrafos */}
            ¡Hola! Soy Nicolás Oñate, un desarrollador Fullstack apasionado por crear soluciones web eficientes y atractivas. Me encanta transformar ideas complejas en interfaces intuitivas y funcionales, siempre aprendiendo y aplicando nuevas tecnologías.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Mi objetivo es construir aplicaciones que no solo funcionen bien, sino que también ofrezcan una gran experiencia de usuario.
          </p>
        </div>

      </div>
    </motion.section>
  );
};

export default About;