'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contacts = [
    {
      icon: Mail,
      href: "mailto:nicolas.onate.m@mail.pucv.cl",
      label: "Email",
      color: "text-primary",
      external: false,
    },
    {
      icon: Linkedin,
      href: "https://cl.linkedin.com/in/nicolas-o%C3%B1ate-045132238?trk=people-guest_people_search-card",
      label: "LinkedIn",
      color: "text-secondary",
      external: true,
    },
    {
      icon: Github,
      href: "https://github.com/k4pocha",
      label: "GitHub",
      color: "text-accent",
      external: true,
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-32 px-4 bg-background min-h-[70vh] flex flex-col justify-center items-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Fondo cyberpunk */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Gradientes de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-2xl w-full">
        
        {/* Título */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold font-mono neon-text mb-4">
            &lt;CONECTEMOS /&gt;
          </h2>
          <p className="text-secondary font-mono text-lg">
            <span className="text-primary">$</span> Estoy abierto a nuevas oportunidades...
          </p>
          <motion.div 
            className="h-1 w-48 mx-auto mt-6 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
            layoutId="underline"
          />
        </motion.div>

        {/* Terminal estilo contact */}
        <motion.div 
          className="bg-background/60 border-2 neon-border rounded-lg p-8 mb-12 backdrop-blur-sm shadow-[0_0_30px_rgba(255,0,255,0.1)]"
          variants={itemVariants}
        >
          <div className="font-mono space-y-4 text-sm md:text-base">
            <p className="text-secondary">
              <span className="text-accent animate-pulse">▌</span> Me interesa trabajar en proyectos desafiantes
            </p>
            <p className="text-secondary">
              <span className="text-primary animate-pulse" style={{ animationDelay: '0.3s' }}>▌</span> Especializado en Fullstack y Ciberseguridad
            </p>
            <p className="text-secondary">
              <span className="text-accent animate-pulse" style={{ animationDelay: '0.6s' }}>▌</span> Siempre disponible para colaborar
            </p>
            <motion.p 
              className="text-foreground/60 mt-4"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              $ <span className="text-primary">AGUARDANDO_CONEXION</span>...
            </motion.p>
          </div>
        </motion.div>

        {/* Botones de contacto */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
          variants={itemVariants}
        >
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Fondo neon */}
                <div className={`absolute -inset-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${idx === 0 ? 'neon-border' : idx === 1 ? 'neon-border-cyan' : 'border-2 border-accent/50'}`}></div>
                
                {/* Botón */}
                <motion.div 
                  className={`relative px-6 py-4 rounded-lg border-2 font-mono font-bold text-sm md:text-base ${
                    idx === 0 ? 'border-primary text-primary hover:bg-primary/10' : 
                    idx === 1 ? 'border-secondary text-secondary hover:bg-secondary/10' : 
                    'border-accent text-accent hover:bg-accent/10'
                  } transition-all duration-300 flex items-center gap-3 backdrop-blur-sm`}
                >
                  <Icon size={20} />
                  <span>{contact.label}</span>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Email directo */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-foreground/70 font-mono mb-4">O envía un mensaje directo a:</p>
          <a 
            href="mailto:nicolas.onate.m@mail.pucv.cl"
            className="inline-block text-secondary hover:text-primary transition-colors font-mono font-bold text-lg neon-text-cyan hover:neon-text"
          >
            <span className="text-primary">→</span> nicolas.onate.m@mail.pucv.cl
          </a>
        </motion.div>

        {/* Línea animada */}
        <motion.div 
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
          <Send size={16} className="text-secondary" />
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-secondary"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;