'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4 relative pt-16">
      <div>
        <div className="font-mono text-lg md:text-xl lg:text-2xl text-primary mb-4">
          <span>k4pocha@portfolio:~$ </span>
          <span className="animate-pulse">_</span>
        </div>

        <TypeAnimation
          sequence={[
            'whoami',
            1000,
            'Hola! Soy Nicolás Oñate.',
            1500,
            'Hola! Soy Nicolás Oñate.\nDesarrollador Fullstack.',
            1500,
            'Hola! Soy Nicolás Oñate.\nConstruyo aplicaciones web modernas.',
            2000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-foreground whitespace-pre-line"
        />

         <p className="mt-6 text-lg text-foreground/80">
            Transformando ideas en código.
         </p>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={28} className="text-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;