'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react'; // Icono para el título

// Importa los iconos específicos de react-icons
// Puede que necesites buscar iconos específicos en la web de react-icons si no encuentras alguno
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiExpress, SiMongodb, SiPrisma, SiPostgresql // Si usas Postgres en vez de SQL genérico
} from 'react-icons/si';
import { DiDatabase } from "react-icons/di"; // Icono genérico para SQL si prefieres

// Variantes para animación escalonada (stagger) - sin cambios
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 }},
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 }, // Cambiado a scale para un efecto "pop-in"
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.17, 0.67, 0.83, 0.67] }}, // Un ease más "elástico"
};

// Mapeo de nombres de skills a componentes de icono
// ¡Añade o ajusta según TUS skills y los iconos que encuentres/prefieras!
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
  "SQL": DiDatabase, // Icono genérico de DB
  // "PostgreSQL": SiPostgresql, // O específico si usas Postgres
  "MongoDB": SiMongodb,
  "Prisma": SiPrisma,
  "Docker": FaDocker,
  // Añade más mapeos aquí...
};

// Lista de skills que quieres mostrar
const skillsToShow = [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
    "Express", "Tailwind CSS", "HTML5", "CSS3", "Git", "GitHub",
    "SQL", "MongoDB", "Prisma", "Docker"
  ];


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
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-16 text-center flex items-center justify-center gap-3"> {/* Más margen inferior */}
        <Wrench size={32} className="text-primary" />
        Habilidades
      </h2>

      <motion.div
        className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-10" // Aumenté gap para iconos más grandes
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsToShow.map((skillName) => {
          const IconComponent = skillIcons[skillName]; // Obtiene el componente de icono del mapeo
          if (!IconComponent) return null; // Si no hay icono mapeado, no muestra nada

          return (
            // Wrapper para cada icono con animación y tooltip
            <motion.div
              key={skillName}
              className="text-foreground/70 flex flex-col items-center" // Centra icono y texto (opcional)
              variants={itemVariants}
              title={skillName} // Tooltip con el nombre de la skill
              whileHover={{ scale: 1.15, color: 'hsl(var(--primary))' }} // Agranda y cambia color al hacer hover
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <IconComponent size={48} /> {/* Renderiza el icono. Ajusta tamaño */}
              {/* Opcional: Mostrar el nombre debajo del icono */}
              {/* <span className="mt-2 text-xs font-mono">{skillName}</span> */}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Skills;