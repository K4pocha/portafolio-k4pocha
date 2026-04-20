/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t-2 border-primary/30 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            className="flex items-center justify-start md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono font-bold neon-text">
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">k4pocha</span>
              <span className="text-secondary">/&gt;</span>
            </span>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-foreground/70 font-mono text-xs md:text-sm">
              © {year} <span className="text-primary">Nicolás Oñate</span>.
              <span className="text-secondary"> // </span>
              Todos los derechos reservados.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-end text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-foreground/70 font-mono text-xs md:text-sm">
              Built with <span className="text-secondary">Next.js</span>
              <span className="text-primary"> + </span>
              <span className="text-accent">Tailwind</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.div
          className="text-center text-xs md:text-sm text-foreground/50 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-secondary">&gt;&gt;</span>
          <span> Diseño y desarrollo por </span>
          <span className="text-primary">Nicolás Oñate</span>
          <span className="text-secondary"> &lt;&lt;</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;