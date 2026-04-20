'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4 relative pt-16 overflow-hidden cyber-grid" style={{ backgroundSize: '50px 50px' }}>
      {/* Fondo animado con gradiente de neón */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Terminal prompt */}
        <motion.div 
          className="font-mono text-sm md:text-lg lg:text-xl text-secondary mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="neon-text-cyan">k4pocha@portfolio:~$</span>
          <motion.span 
            className="text-primary"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            █
          </motion.span>
        </motion.div>

        {/* Título con glitch effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono whitespace-pre-line neon-text"
          />
        </motion.div>

        {/* Subtítulo */}
        <motion.p 
          className="mt-8 text-lg md:text-xl text-secondary font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-primary">&gt;&gt;</span> Transformando ideas en código.
        </motion.p>

        {/* Líneas decorativas */}
        <motion.div
          className="mt-12 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.div>
      </div>
      
      {/* Chevron que baja animado */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 10px rgba(0, 255, 255, 0.3)',
              '0 0 20px rgba(0, 255, 255, 0.6)',
              '0 0 10px rgba(0, 255, 255, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-secondary neon-text-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;