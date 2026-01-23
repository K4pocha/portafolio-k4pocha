'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Code, Cpu, Activity } from 'lucide-react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 min-h-[90vh] flex items-center justify-center bg-background relative overflow-hidden">
      
      {/* Fondo Matrix / Grid sutil para ambientar */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* --- COLUMNA 1: AVATAR "SCANNER" --- */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 group">
            
            {/* Marco Tecnológico Giratorio */}
            <motion.div 
              className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Contenedor de la Imagen con forma Hexagonal o recortada */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/50 bg-black/50 backdrop-blur-sm shadow-[0_0_30px_rgba(74,222,128,0.2)]">
              
              <Image
                src="/images/avatar.png"
                alt="Agente Nicolás"
                width={400}
                height={400}
                className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Efecto de ESCANEO (Línea bajando) */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_20px_#4ade80]"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Overlay de "Grid" sobre la foto */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,255,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none" />

            </div>

            {/* Badges Flotantes "Cyber" */}
            <motion.div 
              className="absolute -right-6 top-10 bg-black/80 border border-primary text-primary px-3 py-2 rounded flex items-center gap-2 text-xs font-mono shadow-lg backdrop-blur-md"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ShieldCheck size={16} />
              <span>SEC_LEVEL: HIGH</span>
            </motion.div>
            
            <motion.div 
              className="absolute -left-6 bottom-10 bg-black/80 border border-blue-500 text-blue-400 px-3 py-2 rounded flex items-center gap-2 text-xs font-mono shadow-lg backdrop-blur-md"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Cpu size={16} />
              <span>SYS_ADMIN: TRUE</span>
            </motion.div>

          </div>
        </motion.div>


        {/* --- COLUMNA 2: TERMINAL CON BARRAS DE CARGA --- */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Ventana de Terminal */}
          <div className="w-full bg-[#0a0a0a] rounded-lg border border-gray-800 shadow-2xl overflow-hidden font-mono">
            
            {/* Barra de Título */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-gray-500 text-xs flex items-center gap-2">
                <Terminal size={12} />
                usr@nicolas-sys:~
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 text-sm md:text-base text-gray-300">
              
              {/* Comando inicial */}
              <div className="mb-4">
                <span className="text-primary">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">init_profile.sh</span> --verbose
              </div>

              {/* Texto animado */}
              <div className="mb-6 h-[100px] md:h-[80px]">
                <TypeAnimation
                  sequence={[
                    "Cargando perfil de usuario...\nNombre: Nicolás Oñate\nRol: Estudiante de Ingeniería & Dev.\nObjetivo: Ciberseguridad y Desarrollo de Software.",
                    1000
                  ]}
                  wrapper="span"
                  speed={70}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                  cursor={false}
                  className="text-gray-300"
                />
              </div>

              {/* Barras de "Carga de Habilidades" (Animaciones lindas) */}
              <div className="space-y-4 mt-8 border-t border-gray-800 pt-6">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">System Analytics</p>
                
                {/* Barra 1: Ciberseguridad */}
                <div>
                  <div className="flex justify-between text-xs mb-1 text-primary/80">
                    <span className="flex items-center gap-1"><ShieldCheck size={12}/> Interés en Ciberseguridad</span>
                    <span>Cargando...</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }} // Porcentaje de "interés"
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                </div>

                {/* Barra 2: Ingeniería de Software */}
                <div>
                  <div className="flex justify-between text-xs mb-1 text-blue-400/80">
                    <span className="flex items-center gap-1"><Code size={12}/> Ingeniería de Software</span>
                    <span>Compilando...</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                  </div>
                </div>
                 
                 {/* Mensaje final parpadeante */}
                <motion.div 
                    className="mt-6 text-primary text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 3 }}
                >
                    _ ESPERANDO INPUT DEL USUARIO...
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