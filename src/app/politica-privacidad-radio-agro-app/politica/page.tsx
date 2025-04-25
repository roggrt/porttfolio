'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Lock,
    Shield,
    Radio,
    Info,
    Server,
    Settings,
    Smartphone,
    Globe,
    AlertTriangle,
    RefreshCcw,
    Mail,
    UserMinus,
    Bell
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RadioAgroPrivacyPolicy() {
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

    const sections = [
        {
            icon: Shield,
            title: "1. Introducción",
            content: [
                "Bienvenido a Radio Agro. Esta aplicación es desarrollada y mantenida por Torisoftt, ubicada en Ecuador. Valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo nuestra aplicación maneja la información cuando usted utiliza nuestro servicio de streaming de radio.",
                "Al utilizar Radio Agro, usted acepta las prácticas descritas en esta política."
            ]
        },
        {
            icon: Info,
            title: "2. Información que Recopilamos",
            content: [
                "2.1 Información recopilada automáticamente:",
                "• Datos de conexión básicos: Para poder transmitir el contenido de radio, nuestra aplicación necesita establecer una conexión a Internet.",
                "• Estado de la aplicación: Almacenamos temporalmente el estado de reproducción (reproduciendo o pausado) y configuraciones de volumen mientras la aplicación está en uso.",
                "",
                "2.2 Lo que NO recopilamos:",
                "Es importante destacar que Radio Agro no recopila:",
                "• Información personal identificable",
                "• Datos de ubicación",
                "• Información de contacto",
                "• Credenciales de inicio de sesión",
                "• Historial de navegación o escucha",
                "• Datos de pagos"
            ]
        },
        {
            icon: Server,
            title: "3. Uso de la Información",
            content: [
                "Utilizamos la información recopilada exclusivamente para:",
                "• Proporcionar acceso al servicio de streaming de radio",
                "• Mantener la funcionalidad técnica de la aplicación",
                "• Solucionar problemas técnicos"
            ]
        },
        {
            icon: Settings,
            title: "4. Permisos de la Aplicación",
            content: [
                "Radio Agro solicita los siguientes permisos:",
                "• Acceso a Internet: Para transmitir contenido de radio en streaming",
                "• Wake Lock: Para permitir que la reproducción continúe cuando la pantalla está apagada",
                "• Servicio en Primer Plano: Para mantener la reproducción cuando la aplicación está en segundo plano"
            ]
        },
        {
            icon: Globe,
            title: "5. Acceso a Servicios Externos",
            content: [
                "La aplicación contiene enlaces para abrir:",
                "• Sitio web oficial",
                "• Perfiles de redes sociales",
                "• Servicio de mensajería (WhatsApp)",
                "",
                "Al hacer clic en estos enlaces, será redirigido fuera de nuestra aplicación. Tenga en cuenta que no controlamos ni somos responsables de las prácticas de privacidad de estos sitios externos."
            ]
        },
        {
            icon: Lock,
            title: "6. Seguridad",
            content: [
                "Implementamos medidas técnicas razonables para proteger la información limitada que manejamos. Sin embargo, tenga en cuenta que ninguna plataforma es 100% segura."
            ]
        },
        {
            icon: UserMinus,
            title: "7. Menores de Edad",
            content: [
                "Nuestra aplicación es adecuada para todas las edades y no recopila información de menores de edad. El contenido de la radio está dirigido principalmente a personas interesadas en el sector agropecuario."
            ]
        },
        {
            icon: RefreshCcw,
            title: "8. Cambios en la Política de Privacidad",
            content: [
                "Podemos actualizar esta política ocasionalmente. Le notificaremos sobre cambios significativos mediante un aviso en la aplicación o en nuestro sitio web. Le recomendamos revisar esta política periódicamente."
            ]
        },
        {
            icon: Globe,
            title: "9. Alcance Internacional",
            content: [
                "Radio Agro está principalmente dirigida a usuarios en Ecuador, pero es accesible a nivel internacional. Cumplimos con las leyes de privacidad y protección de datos aplicables en Ecuador."
            ]
        },
        {
            icon: AlertTriangle,
            title: "10. Sus Derechos",
            content: [
                "Como nuestra aplicación no recopila datos personales, no hay información personal que pueda ser accedida, modificada o eliminada. Sin embargo, si tiene preguntas sobre sus derechos o esta política, puede contactarnos."
            ]
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
                <motion.div
                    className="max-w-4xl mx-auto px-4 py-12"
                    initial="initial"
                    animate="animate"
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUpVariants}
                    >
                        <div className="flex justify-center mb-6">
                            <Radio className="w-16 h-16 text-accent-red dark:text-accent-yellow" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Política de Privacidad
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                            Radio Agro
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Última actualización: {new Date().toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="space-y-12"
                        variants={containerVariants}
                    >
                        {sections.map((section) => (
                            <motion.section
                                key={section.title}
                                variants={fadeInUpVariants}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <section.icon className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {section.content.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className={`text-gray-600 dark:text-gray-400 leading-relaxed
                                            ${paragraph.startsWith('•') ? 'pl-4' : ''}`}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.section>
                        ))}

                        {/* Contact Information */}
                        <motion.section
                            variants={fadeInUpVariants}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Mail className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    11. Contacto
                                </h2>
                            </div>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                <p>
                                    Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos:
                                </p>
                                <ul className="space-y-2">
                                    <li>Torisoftt</li>
                                    <li>Machala, Ecuador</li>
                                    <li>Email: info@torisoftt.com</li>
                                    <li>Teléfono: +593 98 426 4910</li>
                                    <li>Sitio web: <a href="https://torisoftt.com" className="text-accent-red dark:text-accent-yellow hover:underline">torisoftt.com</a></li>
                                </ul>
                            </div>
                        </motion.section>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </>
    );
}