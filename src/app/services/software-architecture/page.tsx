'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Code,
    Database,
    Cloud,
    Lock,
    Server,
    Network,
    Settings,
    Layers,
    Cpu,
    Activity,
    Shield,
    GitBranch,
    Box,
    BarChart,
    Workflow,
    CheckCircle,
    Container,
    Grid,
    MessageCircle,
    Search
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const architectureServices = [
    {
        icon: Cloud,
        title: "Cloud Architecture",
        description: "Diseño e implementación de infraestructuras escalables en la nube."
    },
    {
        icon: Database,
        title: "Diseño de Sistemas",
        description: "Arquitectura de sistemas distribuidos y microservicios."
    },
    {
        icon: Shield,
        title: "Seguridad & DevSecOps",
        description: "Integración de seguridad en el diseño y desarrollo de sistemas."
    },
    {
        icon: Activity,
        title: "Performance & Scaling",
        description: "Optimización y escalabilidad de sistemas empresariales."
    }
];

const infrastructureTypes = [
    {
        title: "Cloud Native",
        icon: Cloud,
        description: "Arquitecturas nativas en la nube con AWS, Azure y GCP",
        features: [
            "Serverless Computing",
            "Containers & Kubernetes",
            "Cloud-Native Security"
        ]
    },
    {
        title: "Microservicios",
        icon: Grid,
        description: "Diseño e implementación de arquitecturas basadas en microservicios",
        features: [
            "Service Mesh",
            "API Gateway",
            "Event-Driven Architecture"
        ]
    },
    {
        title: "DevOps & CI/CD",
        icon: GitBranch,
        description: "Automatización y entrega continua de software",
        features: [
            "Pipeline Automation",
            "Infrastructure as Code",
            "Continuous Monitoring"
        ]
    },
    {
        title: "Data Architecture",
        icon: Database,
        description: "Diseño de arquitecturas para Big Data y Analytics",
        features: [
            "Data Lakes",
            "ETL Pipelines",
            "Real-time Analytics"
        ]
    }
];

const techStats = [
    {
        metric: "99.99%",
        description: "de disponibilidad en nuestras arquitecturas cloud"
    },
    {
        metric: "50%",
        description: "reducción en costos de infraestructura"
    },
    {
        metric: "300%",
        description: "mejora en velocidad de despliegue"
    },
    {
        metric: "24/7",
        description: "monitoreo y soporte de sistemas"
    }
];

const partners = "/services/programa-de-partners"

export default function SoftwareArchitectPage() {
    const fadeInUpVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Hero Section */}
                <section className="pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl mx-auto px-4"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                    Arquitectura de Software
                                    <span className="block text-accent-red dark:text-accent-yellow">
                                        de Clase Mundial
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                    Diseñamos y construimos arquitecturas robustas, escalables y 
                                    seguras para impulsar tu transformación digital.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                                    dark:text-gray-900 rounded-xl font-medium inline-flex items-center gap-2"
                                >
                                    <Server className="w-5 h-5" />
                                    Consultoría Gratuita
                                </motion.button>
                            </div>
                            <div className="flex-1 relative">
                                <Image
                                    src="/architecture-diagram.svg"
                                    alt="Software Architecture Diagram"
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8">
                            {techStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <h3 className="text-4xl font-bold text-accent-red dark:text-accent-yellow mb-2">
                                        {stat.metric}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {stat.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Servicios de Arquitectura
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Soluciones arquitectónicas integrales para empresas modernas.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {architectureServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <service.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Infrastructure Types Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Infraestructura & Tecnologías
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Arquitecturas modernas para necesidades empresariales actuales.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {infrastructureTypes.map((type, index) => (
                                <motion.div
                                    key={type.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <type.icon className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {type.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {type.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {type.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Proceso de Arquitectura
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Metodología comprobada para crear arquitecturas exitosas.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                {
                                    step: "01",
                                    title: "Análisis de Requerimientos",
                                    description: "Evaluación profunda de necesidades técnicas y de negocio.",
                                    icon: Search
                                },
                                {
                                    step: "02",
                                    title: "Diseño Arquitectónico",
                                    description: "Diseño detallado de la arquitectura y selección de tecnologías.",
                                    icon: Layers
                                },
                                {
                                    step: "03",
                                    title: "Implementación",
                                    description: "Desarrollo e implementación de la arquitectura diseñada.",
                                    icon: Code
                                },
                                {
                                    step: "04",
                                    title: "Monitoreo & Optimización",
                                    description: "Seguimiento continuo y mejora del rendimiento.",
                                    icon: Activity
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <div className="text-4xl font-bold text-accent-red dark:text-accent-yellow">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {step.description}
                                        </p>
                                    </div>
                                    <step.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow ml-auto" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
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
                                Tecnologías modernas y robustas para construir soluciones escalables.
                            </p>
                        </motion.div>

                        <div className="space-y-16">
                            {/* Backend Technologies */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                                    Backend & Infraestructura
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                    {[
                                        { src: '/tech/nodejs.svg', name: 'Node.js' },
                                        { src: '/tech/express.svg', name: 'Express' },
                                        { src: '/tech/java.svg', name: 'Java' },
                                        { src: '/tech/mongodb.svg', name: 'MongoDB' },
                                        { src: '/tech/postgresql.svg', name: 'PostgreSQL' },
                                        { src: '/tech/docker.svg', name: 'Docker' }
                                    ].map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="h-20 w-20 relative mb-2">
                                                <Image
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Frontend Technologies */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                                    Frontend & Development
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                    {[
                                        { src: '/tech/react.svg', name: 'React' },
                                        { src: '/tech/nextjs.svg', name: 'Next.js' },
                                        { src: '/tech/typescript.svg', name: 'TypeScript' },
                                        { src: '/tech/tailwind.svg', name: 'Tailwind' },
                                        { src: '/tech/jest.svg', name: 'Jest' },
                                        { src: '/tech/cypress.svg', name: 'Cypress' }
                                    ].map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="h-20 w-20 relative mb-2">
                                                <Image
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & DevOps */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
                                    Herramientas & DevOps
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                    {[
                                        { src: '/tools/vercel.svg', name: 'Vercel' },
                                        { src: '/tech/git.svg', name: 'Git' },
                                        { src: '/tools/analytics.svg', name: 'Analytics' },
                                        { src: '/tools/figma.svg', name: 'Figma' },
                                        { src: '/tools/notion.svg', name: 'Notion' },
                                        { src: '/tools/miro.svg', name: 'Miro' }
                                    ].map((tech, index) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="h-20 w-20 relative mb-2">
                                                <Image
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Beneficios de una Buena Arquitectura
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Una arquitectura sólida es la base del éxito de tu software.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Activity,
                                    title: "Alto Rendimiento",
                                    description: "Sistemas optimizados para máximo rendimiento y eficiencia."
                                },
                                {
                                    icon: Shield,
                                    title: "Seguridad Robusta",
                                    description: "Protección integral contra amenazas y vulnerabilidades."
                                },
                                {
                                    icon: Box,
                                    title: "Escalabilidad",
                                    description: "Crecimiento sin problemas según las necesidades del negocio."
                                },
                                {
                                    icon: BarChart,
                                    title: "Costos Optimizados",
                                    description: "Reducción de costos operativos y de mantenimiento."
                                },
                                {
                                    icon: Settings,
                                    title: "Mantenibilidad",
                                    description: "Código limpio y fácil de mantener a largo plazo."
                                },
                                {
                                    icon: Workflow,
                                    title: "Agilidad",
                                    description: "Rápida adaptación a cambios y nuevos requerimientos."
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <benefit.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
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
                                Resolvemos tus dudas sobre arquitectura de software.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {[
                                {
                                    question: "¿Por qué es importante la arquitectura de software?",
                                    answer: "Una buena arquitectura de software es fundamental para garantizar la escalabilidad, mantenibilidad y rendimiento de tu aplicación. Define la estructura base que permitirá el crecimiento futuro y la adaptación a nuevos requerimientos."
                                },
                                {
                                    question: "¿Qué incluye el servicio de arquitectura de software?",
                                    answer: "Nuestro servicio incluye análisis de requerimientos, diseño de la arquitectura, selección de tecnologías, implementación de la infraestructura, y soporte continuo para optimización y mejoras."
                                },
                                {
                                    question: "¿Cómo manejan la seguridad en la arquitectura?",
                                    answer: "Implementamos seguridad por diseño, incluyendo prácticas de DevSecOps, cifrado de datos, autenticación robusta, y seguimiento de los estándares de seguridad más actuales."
                                },
                                {
                                    question: "¿Qué tecnologías cloud utilizan?",
                                    answer: "Trabajamos con las principales plataformas cloud como AWS, Azure y Google Cloud, seleccionando la más adecuada según tus necesidades específicas y objetivos de negocio."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUpVariants}
                                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
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

                {/* CTA Section */}
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto px-4 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            Construye el Futuro de tu Software
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Comienza hoy a construir una arquitectura sólida para tu próximo proyecto.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                            dark:text-gray-900 rounded-xl font-medium inline-flex items-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Agenda una Consulta
                        </motion.button>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}