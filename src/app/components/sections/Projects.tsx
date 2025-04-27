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

  // Usa tus datos reales o los de ejemplo más completos
  const projectsData: ProjectType[] = [
    // ... (asegúrate que los datos incluyan imageUrl, etc.) ...
        {
          id: 1,
          name: "Portafolio v1",
          shortDescription: "Mi portafolio personal inicial creado con Next.js.",
          longDescription: "Este es el portafolio que estás viendo ahora mismo...",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          imageUrl: "imagen1.png", // Cambiar ruta
          repoUrl: "#",
        },
        {
          id: 2,
          name: "E-commerce Ficticio",
          shortDescription: "Plataforma de e-commerce con carrito de compras.",
          longDescription: "Un proyecto de tienda online simulada para practicar...",
          technologies: ["React", "Node.js", "Express", "MongoDB", "CSS Modules"],
          imageUrl: "imagen2.png", // Cambiar ruta
          repoUrl: "#",
        },
        {
          id: 3,
          name: "Portafolio v2",
          shortDescription: "Mi portafolio personal actualizado con Next.js.",
          longDescription: "Este es el portafolio que estás viendo ahora mismo...",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          imageUrl: "imagen3.png", // Cambiar ruta
          repoUrl: "#",
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