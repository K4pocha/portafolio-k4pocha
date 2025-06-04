'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '@/app/components/ProjectModal';
import { FolderGit2 } from 'lucide-react'; // <--- agrega LayoutDashboard
// import Link from 'next/link';

// Define el tipo según tu JSON
type ProjectType = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  isDashboardLink?: boolean; // <-- Agrega esta línea
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }},
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        // Si tu modal espera longDescription, mapea aquí:
        const mapped = data.map((p: any) => ({
          ...p,
          description: p.longDescription // para compatibilidad con el modal
        }));
        setProjects(mapped);
      } catch (e) {
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const openModal = (project: ProjectType) => { setSelectedProject(project); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setSelectedProject(null); document.body.style.overflow = 'auto'; };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando proyectos...</div>;
  }

  return (
    <motion.section
      id="projects"
      className="py-24 px-4 bg-primary/5 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-16 text-center flex items-center justify-center gap-3">
        <FolderGit2 size={32} className="text-primary" />
        Proyectos
      </h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => {
          console.log(project.name, project.isDashboardLink); // <-- Agrega esto aquí
          return (
            <motion.div
              key={project.id}
              className="border border-foreground/10 p-0 rounded-lg bg-background shadow-md hover:shadow-xl cursor-pointer overflow-hidden flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={() => openModal(project)}
              layoutId={`card-container-${project.id}`}
            >
              <motion.img
                src={project.imageUrl.replace('@/public/', '/')} // Corrige la ruta si es necesario
                alt={`Imagen de ${project.name}`}
                className="w-full h-48 object-cover"
                layoutId={`card-image-${project.id}`}
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold font-mono mb-2">{project.name}</h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-foreground/5">
                   {project.technologies.slice(0, 3).map(tech => (
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
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
