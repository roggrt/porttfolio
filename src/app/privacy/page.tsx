'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Lock,
    Shield,
    Database,
    UserCheck,
    Key,
    Cookie,
    Mail,
    Globe,
    AlertTriangle,
    RefreshCcw
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
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
                "En Torisoftt, valoramos y respetamos su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestros servicios de desarrollo de software y soluciones digitales.",
                "Esta política se aplica a todos nuestros servicios, incluido nuestro sitio web, aplicaciones desarrolladas y servicios de consultoría proporcionados desde nuestra ubicación en Cuenca, Ecuador.",
                "Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política."
            ]
        },
        {
            icon: Database,
            title: "2. Información que Recopilamos",
            content: [
                "2.1 Información proporcionada directamente:",
                "• Datos de contacto (nombre, email, teléfono)",
                "• Información de la empresa",
                "• Requisitos del proyecto",
                "• Documentación del proyecto",
                "",
                "2.2 Información recopilada automáticamente:",
                "• Datos de uso del sitio web",
                "• Dirección IP",
                "• Tipo de navegador y dispositivo",
                "• Cookies y tecnologías similares",
                "",
                "2.3 Información de proyectos:",
                "• Código fuente",
                "• Bases de datos",
                "• Documentación técnica",
                "• Comunicaciones relacionadas con el proyecto"
            ]
        },
        {
            icon: UserCheck,
            title: "3. Uso de la Información",
            content: [
                "Utilizamos la información recopilada para:",
                "• Proporcionar nuestros servicios de desarrollo",
                "• Mejorar nuestros servicios",
                "• Comunicarnos con nuestros clientes",
                "• Gestionar proyectos",
                "• Resolver problemas técnicos",
                "• Cumplir con obligaciones legales",
                "• Prevenir actividades fraudulentas",
                "",
                "No vendemos ni alquilamos su información personal a terceros."
            ]
        },
        {
            icon: Key,
            title: "4. Protección de Datos",
            content: [
                "4.1 Medidas de seguridad:",
                "• Encriptación de datos sensibles",
                "• Acceso restringido a información confidencial",
                "• Monitoreo regular de seguridad",
                "• Copias de seguridad periódicas",
                "",
                "4.2 Almacenamiento:",
                "• Utilizamos servidores seguros",
                "• Implementamos protocolos de seguridad estándar de la industria",
                "• Mantenemos registros de acceso",
                "",
                "4.3 Retención de datos:",
                "Mantenemos su información solo durante el tiempo necesario para proporcionar nuestros servicios o cumplir con requisitos legales."
            ]
        },
        {
            icon: Cookie,
            title: "5. Cookies y Tecnologías de Seguimiento",
            content: [
                "Utilizamos cookies y tecnologías similares para:",
                "• Mantener la sesión del usuario",
                "• Analizar el uso del sitio web",
                "• Mejorar la experiencia del usuario",
                "• Recordar preferencias",
                "",
                "Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad de nuestro sitio."
            ]
        },
        {
            icon: Globe,
            title: "6. Transferencias Internacionales",
            content: [
                "Como empresa ubicada en Ecuador, podemos transferir datos a:",
                "• Proveedores de servicios en la nube",
                "• Herramientas de desarrollo",
                "• Sistemas de gestión de proyectos",
                "",
                "Nos aseguramos de que estas transferencias cumplan con las leyes de protección de datos aplicables y mantengan niveles adecuados de seguridad."
            ]
        },
        {
            icon: AlertTriangle,
            title: "7. Sus Derechos",
            content: [
                "Usted tiene derecho a:",
                "• Acceder a sus datos personales",
                "• Corregir información inexacta",
                "• Solicitar la eliminación de sus datos",
                "• Oponerse al procesamiento",
                "• Retirar el consentimiento",
                "• Solicitar la portabilidad de datos",
                "",
                "Para ejercer estos derechos, contáctenos a través de los medios proporcionados al final de esta política."
            ]
        },
        {
            icon: RefreshCcw,
            title: "8. Actualizaciones de la Política",
            content: [
                "Podemos actualizar esta política ocasionalmente para reflejar cambios en nuestras prácticas o requisitos legales.",
                "Publicaremos cualquier cambio en esta página y, si los cambios son significativos, proporcionaremos una notificación más destacada.",
                "Le recomendamos revisar esta política periódicamente."
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
                            <Lock className="w-16 h-16 text-accent-red dark:text-accent-yellow" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Política de Privacidad
                        </h1>
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
                                    Contáctenos
                                </h2>
                            </div>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                <p>
                                    Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos sus datos, contáctenos:
                                </p>
                                <ul className="space-y-2">
                                    <li>Torisoftt</li>
                                    <li>Cuenca, Ecuador</li>
                                    <li>Email: info@torisoftt.com</li>
                                    <li>Teléfono: +593 98 426 4910</li>
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