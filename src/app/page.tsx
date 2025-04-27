import Hero from "@/app/components/sections/Hero"; // Usando el alias @ que configuramos
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import Contact from "@/app/components/sections/Contact";
// Importa el ThemeToggle que crearemos en el siguiente paso
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
  return (
    // Quitamos flex y justify-center de main si las secciones ocupan todo el ancho
    <main className="font-sans bg-background text-foreground">
       {/* Colocamos el ThemeToggle en una esquina fija (ejemplo) */}
       <div className="fixed top-4 right-4 z-50">
         <ThemeToggle />
       </div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* Aquí podría ir un Footer más adelante */}
    </main>
  );
}