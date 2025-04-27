'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // PASO 1: Inicializa SIEMPRE con un valor por defecto ('light') que coincida con el servidor.
  //         No intentes leer localStorage aquí directamente para el estado inicial.
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false); // Estado para saber si ya estamos en el cliente

  // Efecto para manejar el tema DESPUÉS del montaje inicial
  useEffect(() => {
    setIsMounted(true); // Marcamos que ya estamos en el cliente

    // Leemos el tema guardado SÓLO en el cliente
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Establecemos el tema inicial desde localStorage o preferencia del sistema
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
       setTheme('dark');
    }
    // Si no hay nada guardado y no prefiere oscuro, se quedará en 'light' (el default inicial)

  }, []); // El array vacío asegura que esto se ejecute sólo una vez al montar

  // Efecto para aplicar la clase y guardar en localStorage CADA VEZ que 'theme' cambie
   useEffect(() => {
     // Sólo aplicamos/guardamos si ya estamos montados para evitar problemas iniciales
     if (isMounted) {
       const root = window.document.documentElement;
       if (theme === 'dark') {
         root.classList.add('dark');
       } else {
         root.classList.remove('dark');
       }
       localStorage.setItem('theme', theme);
     }
   }, [theme, isMounted]); // Ejecutar cuando 'theme' o 'isMounted' cambien


  const toggleTheme = () => {
    // Sólo permitimos cambiar si ya estamos montados
    if (isMounted) {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
  };
  
  // Evita renderizar el contenido real hasta que estemos seguros del tema en el cliente
  // Esto previene el flash de contenido incorrecto (FOUC)
  if (!isMounted) {
     // Puedes renderizar null o un esqueleto/spinner si prefieres
     return null; 
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};