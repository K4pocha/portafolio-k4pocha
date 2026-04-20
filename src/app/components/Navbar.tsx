'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-background/80 backdrop-blur-xl border-b-2 border-primary/50 shadow-lg shadow-primary/20' 
                : 'bg-transparent border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo con efecto neon */}
                    <motion.div 
                        className="flex-shrink-0 font-mono font-bold text-2xl neon-text"
                        whileHover={{ textShadow: "0 0 15px rgba(255, 0, 255, 0.8)" }}
                    >
                        <Link href="/">
                            <span className="text-primary">[</span>
                            <span className="text-secondary">k4pocha</span>
                            <span className="text-primary">]_</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="relative group text-foreground px-4 py-3 rounded-md text-base font-mono font-medium transition-colors overflow-hidden"
                                    >
                                        <span className="relative z-10 group-hover:text-primary transition-colors">
                                            <span className="text-primary">#</span> {link.name}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="ml-6 pl-4 border-l border-primary/30">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-secondary hover:text-primary p-2 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    className="md:hidden bg-background/95 backdrop-blur-md absolute w-full border-b-2 border-primary/50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-foreground/80 hover:text-primary hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-mono font-medium transition-colors"
                            >
                                <span className="text-secondary">#</span> {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;