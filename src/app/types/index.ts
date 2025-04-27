 // src/types/index.ts (o similar)
export interface ProjectType {
    id: number;
    name: string;
    shortDescription: string; // La que se muestra en la tarjeta
    longDescription: string; // La que se muestra en el modal
    technologies: string[];
    imageUrl: string; // Imagen principal para la tarjeta/modal
    demoUrl?: string; // Enlace opcional a la demo
    repoUrl?: string; // Enlace opcional al repositorio
    // Podrías añadir más imágenes (images: string[]) si quieres un carrusel en el modal
  }