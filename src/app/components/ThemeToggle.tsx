'use client';

import React from 'react';
import { useTheme } from '@/app/context/ThemeContext'; // Asegúrate que la ruta es correcta
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  // Obtenemos el tema actual y la función para cambiarlo
  const { theme, toggleTheme } = useTheme();

  return (
    // 1. Envuelve todo en un div con flex para alinear elementos
    <div className="flex items-center gap-2">
      {/* 2. Añade el texto descriptivo */}
      <span className="text-sm text-foreground/80 font-mono hidden sm:inline"> {/* Opcional: ocultar en pantallas pequeñas */}
        {/* 3. Cambia el texto según el tema actual */}
        {theme === 'light' ? 'Modo Oscuro?' : 'Modo Claro?'} →
      </span>

      {/* 4. Tu botón existente */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      >
        {theme === 'light' ? (
          <Moon size={20} />
        ) : (
          <Sun size={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;