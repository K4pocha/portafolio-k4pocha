'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '@/app/components/ProjectModal';
import type { ProjectType } from '@/app/types'; // Asegúrate que la ruta sea correcta
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

  // COMBINA tus proyectos existentes con los nuevos
  const projectsData: ProjectType[] = [
    // --- Tus proyectos existentes ---
    {
      id: 1,
      name: "Portafolio Personal v1",
      shortDescription: "Mi sitio web de portafolio actual construido con Next.js.",
      longDescription: "El portafolio que estás viendo ahora mismo. Desarrollado con Next.js, TypeScript, Tailwind CSS y Framer Motion para mostrar mis proyectos y habilidades de forma limpia y responsiva, incluyendo modo claro/oscuro.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/images/placeholder-project.png", // CAMBIAR RUTA
      repoUrl: "https://github.com/K4pocha/portafolio-k4pocha", // Tu repo!
    },
    // --- NUEVO: FoxDiscordBot ---
    {
      id: 2, // Asegúrate que los IDs sean únicos
      name: "FoxDiscordBot",
      shortDescription: "Bot multipropósito para Discord con funciones de moderación, música y utilidades.",
      longDescription: "Un bot de Discord desarrollado en Python usando la librería discord.py. Incluye comandos para moderación de usuarios, reproducción de música desde YouTube y otras fuentes, obtención de información útil (clima, definiciones), y funcionalidades personalizadas. Enfocado en ser modular y fácil de extender.",
      // Asumo Python y discord.py, añade otras que usaste (ej: APIs externas, DBs)
      technologies: ["Python", "discord.py", "API REST", "Heroku/VPS"], // Ajusta según tu stack
      imageUrl: "/images/foxbot-placeholder.png", // CAMBIAR RUTA - Busca/crea un logo/imagen
      repoUrl: "https://github.com/K4pocha/FoxDiscordBot", // Tu repo!
      // demoUrl: "ENLACE_INVITACION_SI_EXISTE" // Opcional
    },
    // --- NUEVO: Laboratorios de Ciberseguridad ---
     {
      id: 3,
      name: "Análisis de Vulnerabilidades (Labs U.)",
      shortDescription: "Documentación de escaneo y análisis de vulnerabilidades en entornos controlados.",
      longDescription: "Durante mi formación universitaria, realicé laboratorios prácticos de ciberseguridad enfocados en la identificación y mitigación de vulnerabilidades. Utilicé herramientas como Nmap para escaneo de puertos, Wireshark para análisis de tráfico y Metasploit (en entornos éticos controlados) para simular ataques. Documenté los hallazgos, evalué los riesgos y propuse soluciones y configuraciones seguras para redes y sistemas simulados.",
      // Lista herramientas y conceptos clave
      technologies: ["Pentesting Ético", "Nmap", "Wireshark", "Metasploit", "Análisis de Redes", "Documentación Técnica", "Kali Linux"],
      imageUrl: "/images/cybersec-placeholder.png", // CAMBIAR RUTA - Busca/crea una imagen representativa
      // repoUrl: "ENLACE_A_INFORME_O_PRESENTACION" // Si tienes algún informe público
      // demoUrl: Podrías enlazar a un informe o post si lo tienes
    },
    // --- NUEVO: Bot Validación Matrícula ---
    {
        id: 4,
        name: "Bot Validación Matrícula (Discord)",
        shortDescription: "Bot para validar matrícula de estudiantes y asignar roles en Discord.",
        longDescription: "Desarrollé un bot de Discord para automatizar el proceso de verificación de estudiantes matriculados en la carrera. El bot procesa archivos JSON y/o XLSX con los datos de los alumnos válidos y, mediante comandos o un proceso de bienvenida, verifica la identidad del usuario de Discord contra estos registros. Una vez validado, asigna automáticamente los roles correspondientes dentro del servidor, otorgando acceso a canales privados y privilegios específicos.",
        // Asumo Python, añade las librerías que usaste para leer archivos
        technologies: ["Python", "discord.py", "JSON", "openpyxl/pandas", "Gestión de Roles Discord"],
        imageUrl: "/images/discord-validation-placeholder.png", // CAMBIAR RUTA
        // repoUrl: "ENLACE_A_GITHUB_SI_ES_PUBLICO"
    },
    // ... puedes añadir más si decides incluir otros proyectos ...
  ];

  // --- El resto del componente Projects.tsx (funciones open/closeModal, return con el mapeo y el modal) ---
  // --- NO necesita cambios en su lógica, solo en el array projectsData ---

  const openModal = (project: ProjectType) => { setSelectedProject(project); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setSelectedProject(null); document.body.style.overflow = 'auto'; };

  return (
     <motion.section id="projects" /* ...etc... */ >
        {/* ... Título ... */}
        <motion.div className="max-w-6xl mx-auto grid ..." /* ...etc... */ >
            {projectsData.map((project) => (
                // La tarjeta se renderiza igual, usando los datos del proyecto actual
                <motion.div key={project.id} /* ...etc... */ onClick={() => openModal(project)}>
                    <motion.img src={project.imageUrl} /* ...etc... */ />
                    <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-xl ...">{project.name}</h3>
                        <p className="text-sm ...">{project.shortDescription}</p>
                        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 ...">
                            {/* Muestra algunas tecnologías */}
                            {project.technologies.slice(0, 3).map(tech => (
                                <span key={tech} className="bg-primary/10 ...">{tech}</span>
                            ))}
                            {project.technologies.length > 3 && <span className="text-[11px] ...">...</span>}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <AnimatePresence>
            {selectedProject && (
                // El modal recibe el proyecto seleccionado y muestra sus detalles
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </AnimatePresence>
     </motion.section>
  );
};

export default Projects;