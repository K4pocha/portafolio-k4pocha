'use client';

import React from 'react';
import { useTheme } from '@/app/context/ThemeContext'; // Asegúrate que la ruta es correcta
import { Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const ThemeToggle = () => {
  // Obtenemos el tema actual y la función para cambiarlo
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-end gap-2">
      {/* Agrupa texto y botón en una fila */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-foreground/80 font-mono hidden sm:inline">
          {theme === 'light' ? 'Modo Oscuro?' : 'Modo Claro?'} →
        </span>
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
      {/* Link al dashboard */}
      {typeof window !== 'undefined' && window.location.pathname === '/' && (
        <Link
          href="/dashboard"
          className="text-primary hover:underline font-mono text-sm"
        >
          Prueba mi Dashboard! 
        </Link>
      )}
    </div>
  );
};

export default ThemeToggle;