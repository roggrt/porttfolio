// src/app/[locale]/design-system/page.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Paintbrush,
    Layout,
    Code2,
    Palette,
    Monitor,
    Layers,
    Lightbulb,
    Figma,
    FileCode2,
    Clock,
    Inspect,
    Smartphone,
    Cpu,
    Rocket,
    ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface ProcessStep {
    icon: any;
    title: string;
    description: string;
    tools?: Array<{
        name: string;
        icon: string;
        description: string;
    }>;
    deliverables?: string[];
    timeline?: string;
}

const designProcess: ProcessStep[] = [
    {
        icon: Lightbulb,
        title: "1. Descubrimiento y Estrategia",
        description: "Iniciamos cada proyecto con una profunda investigación y análisis de necesidades, definiendo objetivos claros y estableciendo la dirección estratégica.",
        tools: [
            {
                name: "Miro",
                icon: "/tools/miro.svg",
                description: "Para brainstorming y mapas mentales"
            },
            {
                name: "Notion",
                icon: "/tools/notion.svg",
                description: "Documentación y gestión de proyectos"
            }
        ],
        deliverables: [
            "Documento de requerimientos",
            "User personas",
            "Journey maps",
            "Análisis competitivo"
        ],
        timeline: "1-2 semanas"
    },
    {
        icon: Layout,
        title: "2. Wireframing y Arquitectura",
        description: "Creamos la estructura base y el flujo de información, estableciendo la jerarquía y organización del contenido.",
        tools: [
            {
                name: "Figma",
                icon: "/tools/figma.svg",
                description: "Diseño de wireframes y prototipos"
            },
            {
                name: "Whimsical",
                icon: "/tools/whimsical.svg",
                description: "Mapas de sitio y flujos"
            }
        ],
        deliverables: [
            "Wireframes de baja fidelidad",
            "Arquitectura de información",
            "User flows",
            "Sitemap"
        ],
        timeline: "1-2 semanas"
    },
    {
        icon: Palette,
        title: "3. Diseño Visual",
        description: "Desarrollamos la identidad visual, seleccionando colores, tipografías y creando un sistema de diseño coherente.",
        tools: [
            {
                name: "Adobe Illustrator",
                icon: "/tools/illustrator.svg",
                description: "Diseño de logos e iconos"
            },
            {
                name: "Figma",
                icon: "/tools/figma.svg",
                description: "UI Design y prototipos"
            }
        ],
        deliverables: [
            "Style guide",
            "Component library",
            "Mockups de alta fidelidad",
            "Prototipos interactivos"
        ],
        timeline: "2-3 semanas"
    },
    {
        icon: Code2,
        title: "4. Desarrollo Frontend",
        description: "Implementamos el diseño utilizando las últimas tecnologías web, asegurando performance y accesibilidad.",
        tools: [
            {
                name: "Next.js",
                icon: "/tech/nextjs.svg",
                description: "Framework de React"
            },
            {
                name: "TailwindCSS",
                icon: "/tech/tailwind.svg",
                description: "Framework de CSS"
            }
        ],
        deliverables: [
            "Código limpio y documentado",
            "Componentes reutilizables",
            "Build optimizado",
            "Tests de UI"
        ],
        timeline: "4-6 semanas"
    },
    {
        icon: Cpu,
        title: "5. Desarrollo Backend",
        description: "Construimos una API robusta y escalable que soporta todas las funcionalidades necesarias.",
        tools: [
            {
                name: "Node.js",
                icon: "/tech/nodejs.svg",
                description: "Runtime de JavaScript"
            },
            {
                name: "PostgreSQL",
                icon: "/tech/postgresql.svg",
                description: "Base de datos"
            }
        ],
        deliverables: [
            "API documentada",
            "Base de datos optimizada",
            "Tests de integración",
            "Documentación técnica"
        ],
        timeline: "4-6 semanas"
    },
    {
        icon: Rocket,
        title: "6. Deployment y Optimización",
        description: "Desplegamos la aplicación y realizamos optimizaciones continuas para asegurar el mejor rendimiento.",
        tools: [
            {
                name: "Vercel",
                icon: "/tools/vercel.svg",
                description: "Plataforma de deployment"
            },
            {
                name: "Google Analytics",
                icon: "/tools/analytics.svg",
                description: "Análisis de datos"
            }
        ],
        deliverables: [
            "Aplicación desplegada",
            "Métricas de rendimiento",
            "Plan de mantenimiento",
            "Documentación de usuario"
        ],
        timeline: "1-2 semanas"
    }
];

const technologies = {
    frontend: [
        { name: "React", icon: "/tech/react.svg" },
        { name: "Next.js", icon: "/tech/nextjs.svg" },
        { name: "TailwindCSS", icon: "/tech/tailwind.svg" },
        { name: "TypeScript", icon: "/tech/typescript.svg" }
    ],
    backend: [
        { name: "Node.js", icon: "/tech/nodejs.svg" },
        { name: "Express", icon: "/tech/express.svg" },
        { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
        { name: "MongoDB", icon: "/tech/mongodb.svg" }
    ],
    tools: [
        { name: "Git", icon: "/tech/git.svg" },
        { name: "Docker", icon: "/tech/docker.svg" },
        { name: "Jest", icon: "/tech/jest.svg" },
        { name: "Cypress", icon: "/tech/cypress.svg" }
    ]
};

export default function DesignSystemPage() {
    const [selectedStep, setSelectedStep] = React.useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Hero Section */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl mx-auto px-4"
                    >
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-red to-accent-yellow
                           dark:from-accent-yellow dark:to-accent-red bg-clip-text text-transparent">
                                Design Systems & Desarrollo Web
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                Nuestro proceso de diseño y desarrollo combina creatividad, tecnología y metodología
                                para crear experiencias digitales excepcionales.
                            </p>
                        </div>

                        {/* Process Overview */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {designProcess.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg cursor-pointer"
                                    onClick={() => setSelectedStep(selectedStep === index ? null : index)}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-accent-red/10 dark:bg-accent-yellow/10 p-3 rounded-xl">
                                            <step.icon className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {selectedStep === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                                        >
                                            {/* Tools */}
                                            {step.tools && (
                                                <div className="mb-4">
                                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                        Herramientas
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {step.tools.map(tool => (
                                                            <div
                                                                key={tool.name}
                                                                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700
                                         px-3 py-1 rounded-full"
                                                            >
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {tool.name}
                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Deliverables */}
                                            {step.deliverables && (
                                                <div className="mb-4">
                                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                        Entregables
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {step.deliverables.map(deliverable => (
                                                            <li
                                                                key={deliverable}
                                                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                                                            >
                                                                <ChevronRight className="w-4 h-4" />
                                                                {deliverable}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Timeline */}
                                            {step.timeline && (
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                        Tiempo Estimado
                                                    </h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {step.timeline}
                                                    </p>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Technologies Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Stack Tecnológico
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Utilizamos las últimas tecnologías y herramientas para crear soluciones
                                modernas, escalables y mantenibles.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {Object.entries(technologies).map(([category, techs]) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6"
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white capitalize">
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {techs.map(tech => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-3 bg-white dark:bg-gray-800
                                 p-3 rounded-xl"
                                            >
                                                <div className="w-8 h-8 relative">
                                                    <Image
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto px-4 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            ¿Listo para comenzar tu proyecto?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Contacta con nosotros para discutir tus ideas y convertirlas en realidad
                            utilizando nuestro proceso de diseño y desarrollo probado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                         dark:text-gray-900 rounded-xl font-medium flex items-center
                         justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                Iniciar Proyecto
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-accent-red dark:border-accent-yellow
                         text-accent-red dark:text-accent-yellow rounded-xl font-medium
                         flex items-center justify-center gap-2 hover:bg-accent-red/5
                         dark:hover:bg-accent-yellow/5 transition-all"
                            >
                                <FileCode2 className="w-5 h-5" />
                                Ver Portfolio
                            </motion.button>
                        </div>
                    </motion.div>
                </section>

                {/* Process Details Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Nuestro Proceso en Detalle
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Cada fase de nuestro proceso está diseñada para garantizar la máxima calidad
                                y satisfacción del cliente.
                            </p>
                        </motion.div>

                        <div className="space-y-12">
                            {designProcess.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row gap-8 items-center 
                            ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="w-full md:w-1/2">
                                        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 h-full">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-accent-red/10 dark:bg-accent-yellow/10 p-3 rounded-xl">
                                                    <step.icon className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                                {step.description}
                                            </p>
                                            <div className="space-y-6">
                                                {/* Tools */}
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                        Herramientas Principales
                                                    </h4>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {step.tools?.map(tool => (
                                                            <div
                                                                key={tool.name}
                                                                className="flex items-center gap-2 bg-white dark:bg-gray-800
                                         p-3 rounded-xl"
                                                            >
                                                                <div className="w-8 h-8 relative">
                                                                    <Image
                                                                        src={tool.icon}
                                                                        alt={tool.name}
                                                                        fill
                                                                        className="object-contain"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                                        {tool.name}
                                                                    </p>
                                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                                        {tool.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Deliverables */}
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                        Entregables
                                                    </h4>
                                                    <ul className="grid grid-cols-2 gap-2">
                                                        {step.deliverables?.map(deliverable => (
                                                            <li
                                                                key={deliverable}
                                                                className="flex items-center gap-2 text-gray-600
                                         dark:text-gray-400"
                                                            >
                                                                <ChevronRight className="w-4 h-4 text-accent-red
                                                      dark:text-accent-yellow" />
                                                                <span className="text-sm">{deliverable}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Timeline */}
                                                <div className="flex items-center gap-2 text-sm text-gray-500
                                      dark:text-gray-400">
                                                    <Clock className="w-4 h-4" />
                                                    <span>Duración estimada: {step.timeline}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2">
                                        <div className="aspect-video relative rounded-2xl overflow-hidden
                                  bg-gradient-to-br from-accent-red/20 to-accent-yellow/20
                                  dark:from-accent-yellow/20 dark:to-accent-red/20">
                                            {/* Aquí podrías agregar imágenes o ilustraciones específicas para cada paso */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <step.icon className="w-24 h-24 text-accent-red dark:text-accent-yellow
                                            opacity-50" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Preguntas Frecuentes
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Respuestas a las preguntas más comunes sobre nuestro proceso de diseño y desarrollo.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {[
                                {
                                    question: "¿Cuánto tiempo toma completar un proyecto típico?",
                                    answer: "Un proyecto típico suele tomar entre 4-12 semanas, dependiendo de su complejidad. El proceso completo incluye todas las fases desde el diseño hasta el deployment."
                                },
                                {
                                    question: "¿Qué necesito para comenzar un proyecto?",
                                    answer: "Para comenzar, necesitamos una idea clara de tus objetivos, público objetivo y cualquier material de referencia que puedas proporcionar. Programaremos una reunión inicial para discutir todos los detalles."
                                },
                                {
                                    question: "¿Cómo manejan las revisiones y feedback?",
                                    answer: "Incorporamos puntos de revisión regulares en cada fase del proyecto. Utilizamos herramientas colaborativas para facilitar la comunicación y el feedback en tiempo real."
                                },
                                {
                                    question: "¿Qué pasa después del lanzamiento?",
                                    answer: "Ofrecemos soporte post-lanzamiento y mantenimiento continuo. También proporcionamos documentación detallada y capacitación si es necesario."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
