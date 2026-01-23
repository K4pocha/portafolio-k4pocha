import { promises as fs } from 'fs';
import path from 'path';
import type { Metadata } from 'next';

// Importamos todos los componentes
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import Contact from "@/app/components/sections/Contact";
import { ProjectType } from './types';

export const metadata: Metadata = {
  title: 'Nicolás Oñate - Desarrollador Fullstack | Portafolio',
  description: 'Portafolio de Nicolás Oñate, desarrollador web Fullstack experto en React, Node.js y Next.js. Explora mis proyectos.',
};

// Función para obtener los proyectos desde el archivo JSON (Server Side)
async function getProjects(): Promise<ProjectType[]> {
  const filePath = path.join(process.cwd(), 'public', 'data', 'ownProjects.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    
    // CORRECCIÓN: Tipamos data aquí mismo
    const data: ProjectType[] = JSON.parse(fileContents);
    
    return data.map((p) => ({
        ...p,
        description: p.longDescription 
    }));
  } catch (error) {
    console.error("Nota: No se encontró ownProjects.json o hubo un error, se mostrará lista vacía.", error);
    return [];
  }
}

export default async function Home() {
  // 1. Cargamos los datos en el servidor
  const projectsData = await getProjects();

  return (
    // 2. Renderizamos la estructura principal
    <main className="font-sans bg-background text-foreground relative">
      <Navbar />
      
      <Hero />
      <About />
      
      {/* Pasamos los datos cargados al componente cliente */}
      <Projects initialProjects={projectsData} />
      
      <Skills />
      <Contact />
      
      <Footer />
    </main>
  );
}