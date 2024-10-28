'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Layout,
    PaintBucket,
    Box,
    Puzzle,
    Code,
    Shield,
    Settings,
    Zap,
    ChevronRight,
    Monitor,
    Smartphone,
    Lock,
    Search,
    Globe,
    FileCode,
    Rocket
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import BusinessSolutions from '@/components/BusinessSolutions';


const features = [
    {
        icon: Layout,
        title: "Temas Personalizados",
        description: "Diseñamos y desarrollamos temas WordPress únicos que reflejan la identidad de tu marca."
    },
    {
        icon: Box,
        title: "Plugins a Medida",
        description: "Creamos plugins personalizados para extender la funcionalidad de tu sitio WordPress."
    },
    {
        icon: Shield,
        title: "Seguridad y Mantenimiento",
        description: "Mantenemos tu sitio seguro y actualizado con las últimas versiones y parches de seguridad."
    },
    {
        icon: Zap,
        title: "Optimización de Rendimiento",
        description: "Mejoramos la velocidad y el rendimiento de tu sitio WordPress para una mejor experiencia."
    }
];

const themeComponents = [
    {
        title: "Templates",
        icon: Layout,
        description: "Archivos que definen la estructura y diseño de diferentes tipos de páginas.",
        files: ["index.php", "single.php", "archive.php", "page.php"]
    },
    {
        title: "Funciones",
        icon: Code,
        description: "Archivo functions.php para personalizar y extender WordPress.",
        features: ["Hooks", "Filters", "Custom Post Types", "Theme Support"]
    },
    {
        title: "Estilos",
        icon: PaintBucket,
        description: "Archivos CSS y SCSS para el diseño visual del tema.",
        files: ["style.css", "assets/scss/*", "rtl.css"]
    },
    {
        title: "Plugins",
        icon: Puzzle,
        description: "Extensiones para añadir funcionalidades específicas.",
        types: ["SEO", "Seguridad", "Rendimiento", "Formularios"]
    }
];

export default function WordPressPage() {
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
                                    Desarrollo WordPress
                                    <span className="block text-accent-red dark:text-accent-yellow">
                    Profesional
                  </span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                    Creamos soluciones WordPress personalizadas utilizando las mejores
                                    prácticas de desarrollo y diseño moderno.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                           dark:text-gray-900 rounded-xl font-medium inline-flex
                           items-center gap-2"
                                >
                                    <Rocket className="w-5 h-5" />
                                    Comenzar Proyecto
                                </motion.button>
                            </div>
                            <div className="flex-1 relative">
                                <Image
                                    src="/wordpress-dashboard.jpg"
                                    alt="WordPress"
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Servicios WordPress
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Ofrecemos soluciones completas para tu sitio WordPress, desde el desarrollo
                                hasta el mantenimiento.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <feature.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                <BusinessSolutions />


                {/* Theme Components Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Anatomía de un Tema WordPress
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Descubre los componentes esenciales que conforman un tema WordPress
                                profesional.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {themeComponents.map((component, index) => (
                                <motion.div
                                    key={component.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <component.icon className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {component.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {component.description}
                                    </p>
                                    <div className="space-y-2">
                                        {component.files && (
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                                    Archivos Principales:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {component.files.map(file => (
                                                        <li
                                                            key={file}
                                                            className="flex items-center gap-2 text-sm text-gray-600
                                       dark:text-gray-400"
                                                        >
                                                            <FileCode className="w-4 h-4 text-accent-red
                                                 dark:text-accent-yellow" />
                                                            {file}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {component.features && (
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                                    Características:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {component.features.map(feature => (
                                                        <li
                                                            key={feature}
                                                            className="flex items-center gap-2 text-sm text-gray-600
                                       dark:text-gray-400"
                                                        >
                                                            <ChevronRight className="w-4 h-4 text-accent-red
                                                     dark:text-accent-yellow" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {component.types && (
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                                    Tipos Comunes:
                                                </h4>
                                                <ul className="space-y-1">
                                                    {component.types.map(type => (
                                                        <li
                                                            key={type}
                                                            className="flex items-center gap-2 text-sm text-gray-600
                                       dark:text-gray-400"
                                                        >
                                                            <Puzzle className="w-4 h-4 text-accent-red
                                               dark:text-accent-yellow" />
                                                            {type}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
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
                                Nuestro enfoque sistemático para crear sitios WordPress excepcionales.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                {
                                    step: "01",
                                    title: "Planificación y Diseño",
                                    description: "Definimos la estructura, funcionalidades y diseño visual del sitio.",
                                    icon: Layout
                                },
                                {
                                    step: "02",
                                    title: "Desarrollo del Tema",
                                    description: "Creamos un tema personalizado siguiendo las mejores prácticas.",
                                    icon: Code
                                },
                                {
                                    step: "03",
                                    title: "Integración de Plugins",
                                    description: "Seleccionamos e integramos los plugins necesarios.",
                                    icon: Puzzle
                                },
                                {
                                    step: "04",
                                    title: "Optimización y Pruebas",
                                    description: "Aseguramos el rendimiento y la compatibilidad.",
                                    icon: Zap
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-8 bg-gray-50 dark:bg-gray-900
                           p-6 rounded-2xl"
                                >
                                    <div className="text-4xl font-bold text-accent-red
                                dark:text-accent-yellow">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900
                                 dark:text-white mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {step.description}
                                        </p>
                                    </div>
                                    <step.icon className="w-12 h-12 text-accent-red
                                     dark:text-accent-yellow ml-auto" />
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
                            ¿Listo para crear tu sitio WordPress?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Contáctanos para discutir tu proyecto y cómo podemos ayudarte a
                            crear un sitio WordPress profesional y eficiente.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}









                       className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                            dark:text-gray-900 rounded-xl font-medium inline-flex
                            items-center gap-2"
            >
              <Rocket className="w-5 h-5" />
              Contactar Ahora
            </motion.button>
          </motion.div>
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
                Respuestas a las preguntas más comunes sobre desarrollo WordPress.
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
                  question: "¿Por qué elegir WordPress?",
                        answer: "WordPress es el CMS más popular del mundo, respaldado por una gran comunidad. Ofrece flexibilidad, facilidad de uso y una amplia gama de plugins y temas disponibles."
                        },
                        {
                            question: "¿Qué es un tema personalizado?",
                            answer: "Un tema personalizado es un diseño único creado específicamente para tu sitio web, que refleja tu marca y satisface tus necesidades específicas de funcionalidad."
                        },
                        {
                            question: "¿Cuánto tiempo toma desarrollar un sitio WordPress?",
                            answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio básico puede tomar 2-3 semanas, mientras que proyectos más complejos pueden llevar 2-3 meses."
                        },
                        {
                            question: "¿Ofrecen mantenimiento post-lanzamiento?",
                            answer: "Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones regulares, copias de seguridad, monitoreo de seguridad y soporte técnico continuo."
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
                            Beneficios de WordPress
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Descubre por qué WordPress es la mejor opción para tu sitio web.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "SEO Optimizado",
                                description: "WordPress está optimizado para motores de búsqueda desde su núcleo."
                            },
                            {
                                icon: Lock,
                                title: "Seguro y Confiable",
                                description: "Actualizaciones regulares de seguridad y prácticas robustas."
                            },
                            {
                                icon: Settings,
                                title: "Fácil de Mantener",
                                description: "Interfaz intuitiva y sistema de actualizaciones simple."
                            },
                            {
                                icon: Box,
                                title: "Extensible",
                                description: "Miles de plugins y temas disponibles para extender funcionalidades."
                            },
                            {
                                icon: Monitor,
                                title: "Responsive Design",
                                description: "Temas adaptables a todos los dispositivos y pantallas."
                            },
                            {
                                icon: Zap,
                                title: "Alto Rendimiento",
                                description: "Optimizado para velocidad y rendimiento excepcional."
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
        </main>
    <Footer />
</>
);
}