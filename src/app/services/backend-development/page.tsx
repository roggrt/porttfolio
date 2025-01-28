'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Code,
    Database,
    Server,
    Shield,
    Settings,
    Cpu,
    GitBranch,
    Terminal,
    Cloud,
    Box,
    Zap,
    FileCog,
    TestTube,
    Network,
    Boxes,
    Lock,

    Rocket
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const technologies = [
    { name: 'Node.js', image: '/tech/nodejs.svg' },
    { name: 'Express', image: '/tech/express.svg' },
    { name: 'TypeScript', image: '/tech/typescript.svg' },
    { name: 'PostgreSQL', image: '/tech/postgresql.svg' },
    { name: 'MongoDB', image: '/tech/mongodb.svg' },
    { name: 'Docker', image: '/tech/docker.svg' },
    { name: 'PHP', image: '/tech/php.svg' },
    { name: 'Java', image: '/tech/java.svg' }
];

const services = [
    {
        icon: Database,
        title: "Arquitectura Backend",
        description: "Diseñamos arquitecturas y desarrollo backend escalables y mantenibles utilizando patrones de arquitectura de software y mejores prácticas en Ecuador."
    },
    {
        icon: Cloud,
        title: "Microservicios",
        description: "Desarrollamos sistemas distribuidos utilizando arquitecturas de microservicios para mayor escalabilidad."
    },
    {
        icon: Shield,
        title: "Seguridad API",
        description: "Implementamos robustos sistemas de autenticación y autorización con las últimas prácticas de seguridad."
    },
    {
        icon: Zap,
        title: "Optimización",
        description: "Optimizamos el rendimiento mediante caching, indexación y técnicas avanzadas de consulta."
    }
];

const developmentProcess = [
    {
        title: "Análisis y Planificación",
        icon: FileCog,
        description: "Entendemos tu stack tecnológico actual y planificamos la integración perfecta.",
        details: [
            "Análisis de requisitos técnicos",
            "Evaluación de arquitectura existente",
            "Definición de endpoints y modelos de datos",
            "Selección de tecnologías apropiadas"
        ]
    },
    {
        title: "Desarrollo e Implementación",
        icon: Code,
        description: "Desarrollamos siguiendo las mejores prácticas y patrones de diseño.",
        details: [
            "Clean Architecture",
            "SOLID Principles",
            "Test-Driven Development",
            "Continuous Integration"
        ]
    },
    {
        title: "Testing y QA",
        icon: TestTube,
        description: "Aseguramos la calidad mediante pruebas exhaustivas.",
        details: [
            "Unit Testing",
            "Integration Testing",
            "Load Testing",
            "Security Testing"
        ]
    },
    {
        title: "Despliegue y Monitoreo",
        icon: Network,
        description: "Implementamos CI/CD y sistemas de monitoreo.",
        details: [
            "Automated Deployment",
            "Performance Monitoring",
            "Error Tracking",
            "Scalability Management"
        ]
    }
];

const whatsappLink = "https://wa.me/593978698025?text=Hola,%20me%20interesa%20una%20consulta%20técnica%20sobre%20desarrollo%20backend.";

const github = "https://github.com/roggrt";


const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const caseStudies = [
    {
        title: "Sistema de Pagos Distribuido",
        description: "Desarrollamos una arquitectura de microservicios para procesar 100k+ transacciones diarias.",
        tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        metrics: ["99.99% uptime", "50ms respuesta promedio", "Zero data loss"]
    },
    {
        title: "API de E-commerce",
        description: "API REST escalable para marketplace con millones de productos.",
        tech: ["Express", "MongoDB", "ElasticSearch", "Jest"],
        metrics: ["10k req/s", "Sub-100ms latency", "100% test coverage"]
    },
    {
        title: "Backend IoT",
        description: "Sistema backend para procesamiento de datos IoT en tiempo real.",
        tech: ["TypeScript", "Apache Kafka", "TimescaleDB", "Kubernetes"],
        metrics: ["1M+ devices", "Real-time processing", "Petabyte scale"]
    }
];

export default function BackendPage() {
    const fadeInUpVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
    Desarrollo Backend en Cuenca
    <span className="block text-blue-600 dark:text-blue-400">
        Ecuador
    </span>
</h1>
<p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
    Empresa de desarrollo backend en Cuenca, Ecuador. Expertos en arquitecturas 
    escalables, APIs y microservicios. Soluciones robustas para empresas.
</p>
                                <div className="flex gap-4">
                                    <motion.a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white
                                        rounded-xl font-medium inline-flex items-center gap-2"
                                    >
                                        <Terminal className="w-5 h-5"/>
                                        Consulta Técnica
                                    </motion.a>
                                    <motion.a
                                        href={github}
                                        target="_blank"
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        className="px-8 py-3 border-2 border-blue-600 dark:border-blue-500
                                        text-blue-600 dark:text-blue-500 rounded-xl font-medium inline-flex
                                        items-center gap-2"
                                    >
                                        <GitBranch className="w-5 h-5"/>
                                        Ver GitHub
                                    </motion.a>
                                </div>
                            </div>
                            <div className="flex-1 grid grid-cols-4 gap-4">
                                {technologies.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{y: -5}}
                                        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                                    >
                                        <Image
                                            src={tech.image}
                                            alt={tech.name}
                                            width={64}
                                            height={64}
                                            className="mx-auto"
                                        />
                                        <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-400">
                                            {tech.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Servicios Backend
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Soluciones backend en Ecuador robustas y escalables para cualquier caso de uso.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
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

                {/* Development Process */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Proceso de Desarrollo
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Metodología probada para entregar soluciones backend de calidad.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {developmentProcess.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Studies */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Casos de Éxito
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Soluciones backend que han marcado la diferencia.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={study.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {study.description}
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                            Tecnologías:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {study.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                            Métricas Clave:
                                        </h4>
                                        <ul className="space-y-1">
                                            {study.metrics.map((metric) => (
                                                <li
                                                    key={metric}
                                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                                >
                                                    <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                    {metric}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Expertise */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Expertise Técnico
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Dominamos las tecnologías más demandadas en el desarrollo backend moderno.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    category: "Lenguajes & Frameworks",
                                    items: [
                                        { name: "Node.js", level: 95 },
                                        { name: "TypeScript", level: 90 },
                                        { name: "Python", level: 85 },
                                        { name: "Go", level: 80 }
                                    ]
                                },
                                {
                                    category: "Bases de Datos",
                                    items: [
                                        { name: "PostgreSQL", level: 90 },
                                        { name: "MongoDB", level: 88 },
                                        { name: "Redis", level: 85 },
                                        { name: "Elasticsearch", level: 82 }
                                    ]
                                },
                                {
                                    category: "DevOps & Cloud",
                                    items: [
                                        { name: "Docker", level: 92 },
                                        { name: "Kubernetes", level: 85 },
                                        { name: "AWS", level: 88 },
                                        { name: "CI/CD", level: 90 }
                                    ]
                                },
                                {
                                    category: "Testing & Monitoreo",
                                    items: [
                                        { name: "Jest", level: 90 },
                                        { name: "Cypress", level: 85 },
                                        { name: "Grafana", level: 82 },
                                        { name: "NewRelic", level: 80 }
                                    ]
                                }
                            ].map((category) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                                        {category.category}
                                    </h3>
                                    <div className="space-y-4">
                                        {category.items.map((item) => (
                                            <div key={item.name}>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                        {item.name}
                                                    </span>
                                                    <span className="text-blue-600 dark:text-blue-400">
                                                        {item.level}%
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, ease: "easeOut" }}
                                                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Code Quality Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Calidad de Código
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Nuestros estándares de desarrollo aseguran código mantenible y escalable.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Clean Architecture",
                                    icon: Boxes,
                                    items: [
                                        "Separación de responsabilidades",
                                        "Inversión de dependencias",
                                        "Modularidad",
                                        "Testing facilitado"
                                    ]
                                },
                                {
                                    title: "Mejor Prácticas",
                                    icon: Settings,
                                    items: [
                                        "Code reviews",
                                        "Documentación",
                                        "Convenciones de código",
                                        "Control de versiones"
                                    ]
                                },
                                {
                                    title: "Seguridad",
                                    icon: Lock,
                                    items: [
                                        "OWASP guidelines",
                                        "Encrypting sensible data",
                                        "Security headers",
                                        "Rate limiting"
                                    ]
                                }
                            ].map((section) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <section.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
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
                            ¿Listo para potenciar tu backend?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Agenda una consulta técnica para discutir tu proyecto y cómo podemos ayudarte
                            a construir una solución backend robusta y escalable.
                        </p>
                        <div className="flex justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white
                                rounded-xl font-medium inline-flex items-center gap-2"
                            >
                                <Terminal className="w-5 h-5" />
                                Consulta Técnica
                            </motion.button>





                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-500
                                text-blue-600 dark:text-blue-500 rounded-xl font-medium inline-flex
                                items-center gap-2"
                            >
                                <GitBranch className="w-5 h-5" />
                                Ver Documentación
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}