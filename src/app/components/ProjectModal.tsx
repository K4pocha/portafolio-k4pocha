'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { ProjectType } from '@/app/types';
import { X, ExternalLink, Github } from 'lucide-react'; // Iconos

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

const modalStyle = {
    backgroundColor: 'hsl(var(--background))',
};

  // Cerrar al hacer clic fuera del modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Cerrar al presionar la tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    // Limpia el event listener al desmontar
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    // Overlay / Backdrop
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Usa la misma variante para salir
      onClick={handleBackdropClick} // Cierra al hacer clic fuera
    >
      {/* Contenedor del Modal */}
      <motion.div
        ref={modalRef}
        // QUITA la clase bg-background o bg-white de aquí si la tenías
        className="rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
        // 4. APLICA el estilo en línea aquí usando el style prop
        style={modalStyle}
        // ... (resto de props de motion para modal - sin cambios) ...
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Botón de Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Contenido del Modal */}
        <h2 id="modal-title" className="text-2xl md:text-3xl font-bold font-mono mb-4 text-primary">{project.name}</h2>

        <img
          src={project.imageUrl} // Usa la imagen del proyecto
          alt={`Vista previa de ${project.name}`}
          className="w-full h-auto max-h-60 object-contain rounded-md mb-6 bg-black/10" // object-contain para que se vea completa
        />

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 font-mono">Descripción</h3>
          <p className="text-foreground/80 whitespace-pre-line">{project.longDescription}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 font-mono">Tecnologías Usadas</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Enlaces (si existen) */}
        {(project.demoUrl || project.repoUrl) && (
             <div className="border-t border-foreground/10 pt-4 mt-6 flex items-center gap-4">
                 {project.demoUrl && (
                     <a
                         href={project.demoUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
                     >
                         <ExternalLink size={16} /> Ver Demo
                     </a>
                 )}
                 {project.repoUrl && (
                     <a
                         href={project.repoUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-primary hover:underline font-semibold"
                     >
                         <Github size={16} /> Ver Código
                     </a>
                 )}
             </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;