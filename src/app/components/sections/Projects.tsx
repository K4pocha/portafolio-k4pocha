'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '@/app/components/ProjectModal';
import type { ProjectType } from '@/app/types'; 
import { FolderGit2 } from 'lucide-react'; // Icono para proyectos

// Variantes (pueden ser las mismas que en Skills o ajustadas)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }},
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const projectsData: ProjectType[] = [
    // --- Portafolio Personal ---
    {
      id: 1,
      name: "Portafolio Personal v1",
      shortDescription: "Mi sitio web de portafolio actual construido con Next.js.",
      longDescription: "El portafolio que estás viendo ahora mismo. Desarrollado con Next.js, TypeScript, Tailwind CSS y Framer Motion para mostrar mis proyectos y habilidades de forma limpia y responsiva, incluyendo modo claro/oscuro. Utilicé Gemini AI para generar descripciones de proyectos y mejorar la experiencia del usuario. Este sitio es un ejemplo de mis habilidades en desarrollo web moderno y diseño UI/UX.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Gemini AI", "Git", "Vercel"],
      imageUrl: "placeholder-portfolio.png", 
      repoUrl: "https://github.com/K4pocha/portafolio-k4pocha", 
    },
    // ---  FoxDiscordBot ---
    {
      id: 2, 
      name: "Bot Discord FoxRP",
      shortDescription: "Bot multipropósito para Discord con funciones de moderación, música y utilidades.",
      longDescription: "Un bot de Discord desarrollado en Python usando la librería discord.py. Incluye comandos para moderación de usuarios, abrir tickets a soporte, ReactRole, obtención de información útil (cuenta, reglamento, status servidor), y funcionalidades personalizadas. Enfocado en ser modular y fácil de extender.",
      technologies: ["Python", "discord.py", "API REST", "VPS", "Git"], 
      imageUrl: "foxbot-placeholder.png", 
      repoUrl: "https://github.com/K4pocha/FoxDiscordBot", 
    },
    // --- Laboratorios de Ciberseguridad ---
     {
      id: 3,
      name: "Análisis de Vulnerabilidades (Labs U.)",
      shortDescription: "Documentación de escaneo y análisis de vulnerabilidades en entornos controlados.",
      longDescription: "Durante mi formación universitaria, realicé laboratorios prácticos de ciberseguridad enfocados en la identificación y mitigación de vulnerabilidades. Utilicé herramientas como Nmap para escaneo de puertos, Wireshark para análisis de tráfico y Metasploit (en entornos éticos controlados) para simular ataques. Documenté los hallazgos, evalué los riesgos y propuse soluciones y configuraciones seguras para redes y sistemas simulados.",
      // Lista herramientas y conceptos clave
      technologies: ["Pentesting Ético", "Nmap", "Wireshark", "Metasploit", "Análisis de Redes", "Documentación Técnica", "Kali Linux", "Seguridad Informática", "Vulnerabilidades Comunes"],
      imageUrl: "cybersec-placeholder.png",

    },
    // --- Bot Validación Matrícula ---
    {
        id: 4,
        name: "Bot Validación Matrícula (Discord)",
        shortDescription: "Bot para validar matrícula de estudiantes y asignar roles en Discord.",
        longDescription: "Desarrollé un bot de Discord para automatizar el proceso de verificación de estudiantes matriculados en la carrera. El bot procesa archivos JSON y/o XLSX con los datos de los alumnos válidos y, mediante comandos o un proceso de bienvenida, verifica la identidad del usuario de Discord contra estos registros. Una vez validado, asigna automáticamente los roles correspondientes dentro del servidor, otorgando acceso a canales privados y privilegios específicos.",
        technologies: ["Python", "discord.py", "JSON", "openpyxl/pandas", "Gestión de Roles Discord", "API REST", "Git"],
        imageUrl: "discord-validation-placeholder.png", 
    },
    // --- Servidor Roleplay GTA V ---
    {
      id: 5, 
      name: "Servidor Roleplay GTA V FoxRP", 
      shortDescription: "Administración y desarrollo de servidor FiveM Roleplay con scripts y sistemas personalizados.", 
      longDescription: `Gestión integral y desarrollo de funcionalidades para un servidor de Roleplay en FiveM basado en GTA V. Mis responsabilidades incluyeron la configuración inicial del servidor en un VPS, la instalación y adaptación del framework (ESX), el desarrollo de scripts personalizados en Lua para sistemas específicos como economía y trabajos, la optimización de recursos para mejorar el rendimiento, la administración de la base de datos (HeidiSQL) para datos de jugadores y vehículos, y la gestión/moderación de la comunidad. El objetivo era crear una experiencia de roleplay seria e inmersiva para 100+ jugadores concurrentes. Se implementaron medidas de seguridad para evitar los ataques DDoS y se realiza mantenimiento continuo.`, 
      // Lista las tecnologías/habilidades relevantes
      technologies: [
          "FiveM",
          "Lua", 
          "HeidiSQL", // Base de datos
          "HTML/CSS/JS", // Modificaciones de UI scripts
          "API REST",
          "Windows Server", // (Windows)
          "VPS/Hosting Dedicado",
          "Gestión de Comunidades",
          "Framework ESX", 
          "Git" 
        ],
      imageUrl: "fivem-server-placeholder.png",
    },
  ];

  const openModal = (project: ProjectType) => { setSelectedProject(project); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setSelectedProject(null); document.body.style.overflow = 'auto'; };

  return (
    <motion.section
      id="projects"
      className="py-24 px-4 bg-primary/5 min-h-screen" // Fondo sutil, asegura altura
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Título con icono */}
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-16 text-center flex items-center justify-center gap-3"> {/* Más margen inferior */}
        <FolderGit2 size={32} className="text-primary" />
        Proyectos
      </h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" // Más gap
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => (
          // Tarjeta de proyecto animada y con hover
          <motion.div
            key={project.id}
            className="border border-foreground/10 p-0 rounded-lg bg-background shadow-md hover:shadow-xl cursor-pointer overflow-hidden flex flex-col" // Quitamos padding inicial, usamos flex-col
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 15px -3px rgba(var(--primary-hsl-values, 0 0 0) / 0.1), 0 4px 6px -2px rgba(var(--primary-hsl-values, 0 0 0) / 0.05)" }} // Elevación y sombra más pronunciada
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={() => openModal(project)}
            layoutId={`card-container-${project.id}`} // Opcional para animación compartida
          >
            {/* Imagen ocupa todo el ancho */}
            <motion.img
              src={project.imageUrl}
              alt={`Imagen de ${project.name}`}
              className="w-full h-48 object-cover" // Altura fija para consistencia
              layoutId={`card-image-${project.id}`}
            />
            {/* Contenido con padding */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold font-mono mb-2">{project.name}</h3>
              <p className="text-sm text-foreground/70 mb-4 flex-grow">{project.shortDescription}</p> {/* flex-grow para empujar tags abajo */}
              {/* Tags de tecnología (opcional en tarjeta) */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-foreground/5">
                 {project.technologies.slice(0, 3).map(tech => ( // Mostrar solo 3-4
                     <span key={tech} className="bg-primary/10 text-primary text-[11px] font-semibold px-2 py-0.5 rounded-full font-mono">
                         {tech}
                     </span>
                 ))}
                 {project.technologies.length > 3 && (
                    <span className="text-[11px] text-foreground/50">...</span>
                 )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal (sin cambios en su renderizado) */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;