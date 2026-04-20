'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Code, Cpu, Zap } from 'lucide-react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 min-h-[90vh] flex items-center justify-center bg-background relative overflow-hidden">
      
      {/* Fondo cyberpunk con grid */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-50"></div>
      
      {/* Gradientes de neón */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* AVATAR CON EFECTOS CYBERPUNK */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 group">
            
            {/* Marco giratorio con neon */}
            <motion.div 
              className="absolute -inset-4 border-2 border-dashed neon-border opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="absolute -inset-2 border-2 neon-border-cyan opacity-40"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Contenedor principal */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-primary/80 bg-black/70 backdrop-blur-sm shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              
              <Image
                src="/images/avatar.png"
                alt="Agente Nicolás"
                width={400}
                height={400}
                className="object-cover w-full h-full opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Escaneo de líneas animadas */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: '0 0 20px rgba(255, 0, 255, 0.8)' }}
              />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.03),transparent)] bg-[size:40px_40px] pointer-events-none" />

              {/* Scanlines effect */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)] pointer-events-none" />
            </div>

            {/* Badges cyberpunk */}
            <motion.div 
              className="absolute -right-8 top-8 bg-background/90 border-2 neon-border text-primary px-4 py-2 rounded text-xs font-mono shadow-lg backdrop-blur-md flex items-center gap-2"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap size={16} className="text-secondary animate-pulse" />
              <span>LEVEL: MAX</span>
            </motion.div>
            
            <motion.div 
              className="absolute -left-8 bottom-8 bg-background/90 border-2 neon-border-cyan text-secondary px-4 py-2 rounded text-xs font-mono shadow-lg backdrop-blur-md flex items-center gap-2"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <Cpu size={16} className="text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>LOADED</span>
            </motion.div>

          </div>
        </motion.div>

        {/* TERMINAL CYBERPUNK */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ventana terminal */}
          <div className="w-full bg-background/50 rounded-lg border-2 neon-border shadow-[0_0_20px_rgba(255,0,255,0.2)] overflow-hidden font-mono">
            
            {/* Header */}
            <div className="bg-background/80 px-4 py-3 flex items-center justify-between border-b-2 neon-border backdrop-blur-sm">
              <div className="flex gap-2">
                <motion.div className="w-3 h-3 rounded-full bg-red-500" animate={{ opacity: [0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                <motion.div className="w-3 h-3 rounded-full bg-yellow-500" animate={{ opacity: [0.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} />
                <motion.div className="w-3 h-3 rounded-full bg-green-500" animate={{ opacity: [0.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }} />
              </div>
              <div className="text-secondary text-xs flex items-center gap-2 font-mono neon-text-cyan">
                <Terminal size={12} />
                k4pocha@Kserv:~
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 text-xs md:text-sm text-foreground space-y-4">
              
              {/* Comando inicial */}
              <div className="text-secondary font-mono">
                <span className="neon-text">$</span> <span className="text-accent">./init_profile.sh</span> --verbose --cyberpunk
              </div>

              {/* Animación de tipo */}
              <div className="mt-4 min-h-16 border-l-2 border-secondary/50 pl-4">
                <TypeAnimation
                  sequence={[
                    "Nombre: Nicolás Oñate\nEstudiante: Ingeniería Civil Informática \n Intereses: Ciberseguridad & Desarrollo",
                    1500
                  ]}
                  wrapper="div"
                  speed={50}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                  cursor={false}
                  className="text-foreground/90"
                  repeat={Infinity}
                />
              </div>

              {/* Barras de carga */}
              <div className="space-y-3 mt-6 border-t-2 border-secondary/30 pt-6">
                <p className="text-secondary/70 text-xs uppercase tracking-wider">► SKILLS_LOADING</p>
                
                {/* Ciberseguridad */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-primary flex items-center gap-1 neon-text">
                      <ShieldCheck size={12} /> Ciberseguridad
                    </span>
                    <span className="text-secondary/70">85%</span>
                  </div>
                  <div className="h-2 bg-background/80 rounded-full border border-primary/30 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary via-accent to-secondary neon-border"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 2, delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Desarrollo */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-secondary flex items-center gap-1 neon-text-cyan">
                      <Code size={12} /> Desarrollo
                    </span>
                    <span className="text-primary/70">90%</span>
                  </div>
                  <div className="h-2 bg-background/80 rounded-full border border-secondary/30 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-secondary via-primary to-accent neon-border-cyan"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 2, delay: 0.6 }}
                    />
                  </div>
                </div>
                 
                {/* Estado final */}
                <motion.div 
                  className="mt-4 text-secondary text-xs font-mono flex items-center gap-2"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                >
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  SISTEMA_LISTO
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;