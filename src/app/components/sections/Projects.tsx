'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '@/app/components/ProjectModal';
import { FolderGit2, ExternalLink } from 'lucide-react';
import type { ProjectType } from '@/app/types';

interface ProjectsProps {
  initialProjects: ProjectType[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }},
};

const Projects = ({ initialProjects }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const openModal = (project: ProjectType) => { setSelectedProject(project); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setSelectedProject(null); document.body.style.overflow = 'auto'; };

  return (
    <motion.section
      id="projects"
      className="py-24 px-4 bg-background min-h-screen relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Fondo cyberpunk */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Gradientes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Título */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 flex items-center justify-center gap-4">
            <FolderGit2 size={40} className="neon-text" />
            <span className="neon-text">&lt; PROYECTOS /&gt;</span>
            <FolderGit2 size={40} className="neon-text-cyan" />
          </h2>
          <motion.div 
            className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-secondary"
            layoutId="underline"
          />
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {initialProjects.map((project) => {
            return (
              <motion.div
                key={project.id}
                className="group relative rounded-lg overflow-hidden cursor-pointer flex flex-col h-full"
                variants={itemVariants}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => { openModal(project); }}
              >
                {/* Borde neon animado */}
                <div className={`absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredId === project.id ? 'neon-border' : 'border-2 border-primary/30'}`}></div>
                
                {/* Fondo del card */}
                <div className="relative bg-background/70 backdrop-blur-sm border-2 border-primary/20 rounded-lg overflow-hidden flex flex-col h-full shadow-lg group-hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow duration-300">
                  
                  {/* Imagen con overlay */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-b from-primary/20 to-background">
                    <motion.img
                      src={project.imageUrl ? project.imageUrl.replace('@/public/', '/') : '/images/placeholder.png'}
                      alt={`Imagen de ${project.name}`}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                    
                    {/* Overlay de código simulado */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_2px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icono hover */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <ExternalLink size={32} className="text-secondary neon-text-cyan" />
                    </motion.div>
                  </div>

                  {/* Contenido */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    {/* Título y descripción */}
                    <div>
                      <h3 className="text-lg font-bold font-mono mb-2 neon-text group-hover:text-secondary transition-colors">
                        &gt;_ {project.name}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tags de tecnologías */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-secondary/20">
                      {project.technologies?.slice(0, 3).map(tech => (
                        <motion.span 
                          key={tech} 
                          className="text-xs font-mono px-2 py-1 rounded border border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 hover:border-secondary transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                        >
                          #{tech}
                        </motion.span>
                      ))}
                      {project.technologies && project.technologies.length > 3 && (
                        <span className="text-xs text-foreground/50 px-2 py-1">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>

                  {/* Efecto de línea que aparece en hover */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;