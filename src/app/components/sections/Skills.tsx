'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { skillsList } from '@/data/skills'; // Importamos la lista

// Importa tus iconos (asegúrate de tener react-icons instalado)
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
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 }},
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.17, 0.67, 0.83, 0.67] }},
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
  return (
    <motion.section
      id="skills"
      className="py-24 px-4 min-h-[70vh] flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-16 text-center flex items-center justify-center gap-3">
        <Wrench size={32} className="text-primary" />
        Skills / Tecnologías
      </h2>

      <motion.div
        className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsList.map((skillName) => {
          const IconComponent = skillIcons[skillName];
          if (!IconComponent) return null;

          return (
            <motion.div
              key={skillName}
              className="text-foreground/70 flex flex-col items-center"
              variants={itemVariants}
              title={skillName}
              whileHover={{ scale: 1.15, color: 'hsl(var(--primary))' }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <IconComponent size={48} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;