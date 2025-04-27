'use client'; // ¡Importante! Necesario para usar hooks y interactividad

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nicolás Oñate - Desarrollador Fullstack | Portafolio',
  description: 'Portafolio de Nicolás Oñate, desarrollador web Fullstack experto en React, Node.js y Next.js. Explora mis proyectos.',
}

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        {/* Usa la fuente mono y ajusta tamaños/colores con Tailwind */}
        <div className="font-mono text-lg md:text-xl lg:text-2xl text-primary mb-4">
          {/* Simulación de prompt (opcional) */}
          <span>k4pocha@portfolio:~$ </span>
          <span className="animate-pulse">_</span> {/* Cursor parpadeante */}
        </div>

        <TypeAnimation
          sequence={[
            // Simula comando y espera
            'whoami',
            1000, // Espera 1s
            // Borra 'whoami' y escribe la intro
            'Hola! Soy Nicolás Oñate.',
            1500,
            'Hola! Soy Nicolás Oñate.\nDesarrollador Fullstack.', // \n para nueva línea si quieres
            1500,
            'Hola! Soy Nicolás Oñate.\nConstruyo aplicaciones web modernas.',
            2000,
            () => {
              // Puedes poner una función callback al final si necesitas
              console.log('Sequence completed');
            },
          ]}
          wrapper="h1" // Elemento HTML que envuelve la animación (h1, p, div...)
          cursor={true} // Muestra el cursor de tipeo
          repeat={Infinity} // Repite la animación infinitamente
          // Estilos con Tailwind aplicados al wrapper
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-foreground whitespace-pre-line" // whitespace-pre-line respeta los \n
        />

         {/* Puedes añadir un subtítulo o botones debajo */}
         <p className="mt-6 text-lg text-foreground/80"> {/* Texto con opacidad */}
         </p>
      </div>
    </section>
  );
};

export default Hero;