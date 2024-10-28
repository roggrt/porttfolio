'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Book, Globe, Scale, Lock, Clock, FileText } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
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
            icon: Book,
            title: "1. Términos Generales",
            content: [
                "Bienvenido a los términos de servicio de Torisoftt. Al acceder y utilizar nuestros servicios de desarrollo de software, usted acepta estar sujeto a los siguientes términos y condiciones.",
                "Torisoftt es una empresa de desarrollo de software ubicada en Cuenca, Ecuador, especializada en soluciones full stack y servicios de desarrollo web y móvil.",
                "Estos términos constituyen un acuerdo legalmente vinculante entre usted y Torisoftt con respecto a la utilización de nuestros servicios."
            ]
        },
        {
            icon: Globe,
            title: "2. Servicios",
            content: [
                "Nuestros servicios incluyen, pero no se limitan a:",
                "• Desarrollo de aplicaciones web full stack",
                "• Desarrollo de aplicaciones móviles",
                "• Consultoría en tecnología",
                "• Diseño UI/UX",
                "• Mantenimiento y soporte de software",
                "• Integración de sistemas",
                "Los detalles específicos de cada servicio se acordarán por escrito en contratos individuales con cada cliente."
            ]
        },
        {
            icon: Scale,
            title: "3. Derechos y Responsabilidades",
            content: [
                "3.1 Nuestros Compromisos:",
                "• Entregar los servicios según las especificaciones acordadas",
                "• Mantener comunicación clara y constante durante el desarrollo",
                "• Cumplir con los plazos establecidos",
                "• Garantizar la calidad del código y las mejores prácticas de desarrollo",
                "",
                "3.2 Responsabilidades del Cliente:",
                "• Proporcionar información clara y precisa sobre los requerimientos",
                "• Realizar los pagos según lo acordado",
                "• Revisar y aprobar entregables en los tiempos establecidos",
                "• Respetar la propiedad intelectual de nuestro trabajo"
            ]
        },
        {
            icon: Lock,
            title: "4. Propiedad Intelectual",
            content: [
                "4.1 Código Fuente:",
                "La propiedad del código fuente se transferirá al cliente una vez completados los pagos acordados.",
                "",
                "4.2 Derechos de Autor:",
                "Torisoftt mantiene los derechos de autor sobre las metodologías, frameworks y herramientas propias utilizadas en el desarrollo.",
                "",
                "4.3 Contenido del Cliente:",
                "El cliente mantiene todos los derechos sobre el contenido, datos y materiales proporcionados para el proyecto."
            ]
        },
        {
            icon: Clock,
            title: "5. Plazos y Pagos",
            content: [
                "5.1 Cronograma:",
                "• Los plazos se establecerán en el contrato de cada proyecto",
                "• Cualquier modificación deberá ser acordada por escrito",
                "",
                "5.2 Pagos:",
                "• Se requiere un anticipo del 40% para iniciar el proyecto",
                "• Los pagos restantes se realizarán según los hitos acordados",
                "• Todos los precios se establecen en dólares estadounidenses (USD)",
                "• Las facturas se emitirán de acuerdo a la normativa fiscal ecuatoriana"
            ]
        },
        {
            icon: FileText,
            title: "6. Confidencialidad",
            content: [
                "Nos comprometemos a:",
                "• Mantener la confidencialidad de toda la información del cliente",
                "• Utilizar la información solo para los fines del proyecto",
                "• Implementar medidas de seguridad para proteger los datos",
                "• No divulgar información confidencial a terceros",
                "• Firmar acuerdos de confidencialidad específicos cuando sea requerido"
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
                            <Shield className="w-16 h-16 text-accent-red dark:text-accent-yellow" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Términos de Servicio
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
                        {sections.map((section, index) => (
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
                                    {section.content.map((paragraph, pIndex) => (
                                        <p
                                            key={pIndex}
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
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Información de Contacto
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                <p>
                                    Si tiene alguna pregunta sobre estos términos, por favor contáctenos:
                                </p>
                                <ul className="space-y-2">
                                    <li>Torisoftt</li>
                                    <li>Cuenca, Ecuador</li>
                                    <li>Email: hostingcuenca@gmail.com</li>
                                    <li>Teléfono: +593 97 869 8025</li>
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