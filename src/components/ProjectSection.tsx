'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: "Dashboard Analytics Pro",
        description: "Panel de control avanzado para análisis de datos empresariales con múltiples vistas y gráficos interactivos",
        image: "/projects/dashboard-analytics.jpg",
        tags: ["Angular", "TypeScript", "Chart.js", "Material UI"],
        category: "Dashboard",
        explanation:
            "Este proyecto cuenta con un panel de control avanzado que integra múltiples vistas y gráficos interactivos, facilitando el análisis y visualización de datos en tiempo real para empresas.",
        exampleLink: "https://example.com/dashboard-analytics"
    },
    {
        title: "Sistema de Gestión Empresarial",
        description: "Plataforma integral para la gestión de recursos, reportes y analíticas en tiempo real",
        image: "/projects/business-dashboard.jpg",
        tags: ["React", "Node.js", "MongoDB", "Redux"],
        category: "Aplicación Web",
        explanation:
            "Una plataforma completa que optimiza la gestión de recursos y reportes, permitiendo a las empresas tomar decisiones basadas en datos actualizados al instante.",
        exampleLink: "https://example.com/sistema-gestion"
    },
    {
        title: "E-commerce Calzado",
        description: "Tienda en línea especializada en calzado con sistema de inventario y pasarela de pagos",
        image: "/projects/shoe-store.jpg",
        tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
        category: "E-commerce",
        explanation:
            "Tienda en línea diseñada para el sector del calzado, que incorpora un sistema de inventario robusto y pasarelas de pago seguras para ofrecer una experiencia de compra óptima.",
        exampleLink: "https://example.com/ecommerce-calzado"
    },
    {
        title: "Portfolio Artístico",
        description: "Galería digital para artistas con diseño minimalista y optimización SEO",
        image: "/projects/artist-portfolio.jpg",
        tags: ["WordPress", "CSS3", "JavaScript", "SEO"],
        category: "Portfolio",
        explanation:
            "Una galería digital elegante y minimalista que permite a los artistas exponer su trabajo de forma profesional, con optimización para buscadores.",
        exampleLink: "https://example.com/portfolio-artistico"
    },
    {
        title: "App Móvil Financiera",
        description: "Aplicación móvil para educación financiera y seguimiento de inversiones",
        image: "/projects/finance-app.jpg",
        tags: ["Flutter", "Dart", "Firebase", "REST API"],
        category: "App Móvil",
        explanation:
            "Aplicación móvil interactiva enfocada en la educación financiera, que incluye herramientas para el seguimiento de inversiones y análisis de mercado.",
        exampleLink: "https://example.com/app-movil-financiera"
    },
    {
        title: "Landing Page Legal",
        description: "Página de aterrizaje para despacho de abogados con sistema de citas",
        image: "/projects/legal-landing.jpg",
        tags: ["HTML5", "CSS3", "JavaScript", "API Integration"],
        category: "Landing Page",
        explanation:
            "Diseñada para despachos de abogados, esta landing page destaca por su interfaz limpia y profesional, integrando un sistema de citas para facilitar el contacto con clientes.",
        exampleLink: "https://example.com/landing-page-legal"
    }
];

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section id="proyectos" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                {/* Título de la sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
                        Proyectos Destacados
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Una selección de proyectos que demuestran mi experiencia en diseño y desarrollo.
                    </p>
                </motion.div>

                {/* Tarjetas de proyecto */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                                <div className="relative h-60">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        priority={index < 3}
                                    />
                                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                                        {project.category}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center text-accent-red dark:text-accent-yellow font-medium">
                                    Ver detalles
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA: Más información sobre desarrollo web */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    viewport={{once: true}}
                    className="text-center mt-16"
                >
                    <Link
                        href="/paginas-web-ecuador"
                        className="group inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-accent-red dark:text-accent-yellow px-8 py-4 rounded-xl font-medium border-2 border-accent-red dark:border-accent-yellow hover:bg-accent-red/5 dark:hover:bg-accent-yellow/5 transition-all duration-300"
                    >
                        <span>Más información sobre desarrollo web</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                    </Link>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        Descubre cómo podemos crear tu próximo proyecto web
                    </p>
                </motion.div>
            </div>

            {/* Modal con detalles del proyecto */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative overflow-y-auto max-h-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="relative h-60 rounded-xl overflow-hidden">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                                {selectedProject.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                {selectedProject.description}
                            </p>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">
                                {selectedProject.explanation}
                            </p>
                            <div className="mt-6">
                                <a
                                    href={selectedProject.exampleLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-accent-red dark:text-accent-yellow font-medium border-b border-transparent hover:border-accent-red dark:hover:border-accent-yellow transition-colors"
                                >
                                    Ver ejemplo en vivo
                                    <ArrowRight className="w-4 h-4 transition-transform hover:translate-x-1" />
                                </a>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
