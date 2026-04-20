'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Code2 } from 'lucide-react';
import { skillsList } from '@/data/skills';

import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiExpress, SiMongodb, SiPrisma
} from 'react-icons/si';
import { DiDatabase } from "react-icons/di";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.3, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }
  },
};

const skillIcons: { [key: string]: React.ElementType } = {
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "Tailwind CSS": SiTailwindcss,
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "SQL": DiDatabase,
  "MongoDB": SiMongodb,
  "Prisma": SiPrisma,
  "Docker": FaDocker,
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  return (
    <motion.section
      id="skills"
      className="py-32 px-4 min-h-[80vh] flex flex-col justify-center bg-background relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Fondo cyberpunk */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Gradientes de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        {/* Título */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 flex items-center justify-center gap-4">
            <Code2 size={40} className="neon-text" />
            <span className="neon-text">&lt; SKILLS /&gt;</span>
            <Wrench size={40} className="neon-text-cyan" />
          </h2>
          <motion.div 
            className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
            layoutId="underline"
          />
        </motion.div>

        {/* Grid de skills */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Grid con columnas responsivas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsList.map((skillName) => {
              const IconComponent = skillIcons[skillName];
              if (!IconComponent) return null;

              const isHovered = hoveredSkill === skillName;

              return (
                <motion.div
                  key={skillName}
                  className="relative group"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredSkill(skillName)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Fondo neon animado */}
                  <motion.div 
                    className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={isHovered ? { 
                      boxShadow: [
                        '0 0 10px rgba(255, 0, 255, 0.3)',
                        '0 0 20px rgba(255, 0, 255, 0.6)',
                        '0 0 10px rgba(255, 0, 255, 0.3)'
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                  />

                  {/* Contenedor skill */}
                  <div className="relative flex flex-col items-center justify-center p-6 rounded-lg border-2 border-primary/20 hover:border-primary/60 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,0,255,0.2)]">
                    
                    {/* Icono con efecto de brillo */}
                    <motion.div
                      className={`text-3xl md:text-4xl transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-foreground/60 group-hover:text-secondary'}`}
                      animate={isHovered ? { 
                        textShadow: [
                          '0 0 10px rgba(255, 0, 255, 0)',
                          '0 0 20px rgba(255, 0, 255, 0.8)',
                          '0 0 10px rgba(255, 0, 255, 0)',
                        ]
                      } : {}}
                      transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                    >
                      <IconComponent />
                    </motion.div>

                    {/* Nombre del skill */}
                    <motion.span 
                      className="text-xs md:text-sm font-mono font-bold mt-3 text-center text-foreground/70 group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {skillName}
                    </motion.span>

                    {/* Línea decorativa */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Nota adicional */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-foreground/60 font-mono text-sm">
            <span className="text-secondary">→ </span>
            Y muchas más tecnologías...
            <span className="text-secondary"> ←</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;