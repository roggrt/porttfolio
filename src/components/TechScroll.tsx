'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Tecnologías para el scroll horizontal
const techLogos = [
    { src: '/tech/react.svg', alt: 'React' },
    { src: '/tech/nextjs.svg', alt: 'Next.js' },
    { src: '/tech/typescript.svg', alt: 'TypeScript' },
    { src: '/tech/tailwind.svg', alt: 'Tailwind CSS' },
    { src: '/tech/nodejs.svg', alt: 'Node.js' },
    { src: '/tech/wordpress.svg', alt: 'WordPress' },
    { src: '/tech/mysql.svg', alt: 'MySQL' },
    { src: '/tech/git.svg', alt: 'Git' },
    { src: '/tech/php.svg', alt: 'PHP' },
    { src: '/tech/mongodb.svg', alt: 'MongoDB' },
    { src: '/tech/postgresql.svg', alt: 'PostgreSQL' },
    { src: '/tech/docker.svg', alt: 'Docker' },
    { src: '/tech/cypress.svg', alt: 'Cypress' },
    { src: '/tech/jest.svg', alt: 'Jest' },
    { src: '/tech/express.svg', alt: 'Express' },
    { src: '/tech/java.svg', alt: 'Java' },
];

const TechScroll = () => {
    return (
        <section className="py-10 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center mb-8"
                >
                    <h3 className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">
                        Desarrollamos con las mejores tecnologías
                    </h3>
                </motion.div>

                {/* Contenedor del scroll horizontal simplificado (sin degradados) */}
                <div className="tech-scroll-wrapper">
                    {/* Contenedor del scroll horizontal */}
                    <div className="tech-scroll-container">
                        <div className="tech-scroll-track">
                            {/* Primera copia de logos */}
                            {techLogos.map((tech, index) => (
                                <div
                                    key={`tech-1-${index}`}
                                    className="tech-scroll-item"
                                >
                                    <div className="tech-logo-container">
                                        <Image
                                            src={tech.src}
                                            alt={tech.alt}
                                            width={40}
                                            height={40}
                                            className="tech-logo"
                                        />
                                    </div>
                                    <span className="tech-label">{tech.alt}</span>
                                </div>
                            ))}

                            {/* Segunda copia de logos para crear el efecto infinito */}
                            {techLogos.map((tech, index) => (
                                <div
                                    key={`tech-2-${index}`}
                                    className="tech-scroll-item"
                                >
                                    <div className="tech-logo-container">
                                        <Image
                                            src={tech.src}
                                            alt={tech.alt}
                                            width={40}
                                            height={40}
                                            className="tech-logo"
                                        />
                                    </div>
                                    <span className="tech-label">{tech.alt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilos específicos para el componente de scroll */}
            <style jsx global>{`
                /* Contenedor envolvente */
                .tech-scroll-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100px;
                    overflow: hidden;
                }

                /* Contenedor del scroll - oculta el desbordamiento */
                .tech-scroll-container {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                /* Pista del scroll - elemento que se desplaza */
                .tech-scroll-track {
                    display: flex;
                    gap: 3rem;
                    width: max-content;
                    animation: scrollRight 60s linear infinite;
                    padding: 1rem 0;
                }

                /* Pausar animación al pasar el ratón */
                .tech-scroll-track:hover {
                    animation-play-state: paused;
                }

                /* Elemento individual */
                .tech-scroll-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                /* Contenedor del logo */
                .tech-logo-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 3.5rem;
                    height: 3.5rem;
                    background-color: white;
                    border-radius: 0.75rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    border: 1px solid rgba(229, 231, 235, 0.5);
                }

                /* Versión oscura del contenedor */
                .dark .tech-logo-container {
                    background-color: rgb(31, 41, 55);
                    border-color: rgba(55, 65, 81, 0.5);
                }

                /* Efecto hover en el contenedor de logo */
                .tech-logo-container:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    border-color: var(--accent-red, #ef4444);
                }

                .dark .tech-logo-container:hover {
                    border-color: var(--accent-yellow, #eab308);
                }

                /* Logo de tecnología */
                .tech-logo {
                    width: 2rem;
                    height: 2rem;
                    opacity: 0.8;
                    transition: opacity 0.3s ease, filter 0.3s ease;
                    filter: grayscale(40%);
                }

                /* Efecto hover en el logo */
                .tech-logo-container:hover .tech-logo {
                    opacity: 1;
                    filter: grayscale(0%);
                }

                /* Etiqueta de texto */
                .tech-label {
                    font-size: 0.75rem;
                    color: rgb(107, 114, 128);
                    transition: color 0.3s ease;
                }

                .dark .tech-label {
                    color: rgb(156, 163, 175);
                }

                /* Efecto hover en la etiqueta */
                .tech-scroll-item:hover .tech-label {
                    color: var(--accent-red, #ef4444);
                }

                .dark .tech-scroll-item:hover .tech-label {
                    color: var(--accent-yellow, #eab308);
                }

                /* Animación para desplazamiento hacia la derecha */
                @keyframes scrollRight {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 2));
                    }
                }

                /* Media query para dispositivos móviles */
                @media (max-width: 768px) {
                    .tech-scroll-wrapper {
                        height: 80px;
                    }

                    .tech-scroll-track {
                        gap: 2rem;
                    }

                    .tech-logo-container {
                        width: 2.5rem;
                        height: 2.5rem;
                    }

                    .tech-logo {
                        width: 1.5rem;
                        height: 1.5rem;
                    }

                    .tech-label {
                        font-size: 0.7rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default TechScroll;