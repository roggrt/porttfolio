'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    Radio,
    Download,
    Shield,
    Globe,
    AlertTriangle,
    Ban,
    RefreshCcw,
    Mail,
    Scale,
    Zap
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RadioAgroTermsOfService() {
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
            icon: FileText,
            title: "1. Aceptación de los Términos",
            content: [
                "Al descargar, instalar o utilizar la aplicación Radio Agro, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con estos términos, no debe utilizar la aplicación.",
                "Estos términos constituyen un acuerdo legal entre usted y Torisoftt con respecto al uso de Radio Agro."
            ]
        },
        {
            icon: Radio,
            title: "2. Descripción del Servicio",
            content: [
                "Radio Agro es una aplicación de streaming que proporciona acceso a contenido de radio relacionado con el sector agropecuario.",
                "El servicio se proporciona \"tal cual\" y \"según disponibilidad\" sin garantías de ningún tipo."
            ]
        },
        {
            icon: Download,
            title: "3. Licencia de Uso",
            content: [
                "Torisoftt le otorga una licencia limitada, no exclusiva, no transferible y revocable para descargar, instalar y usar la aplicación Radio Agro para su uso personal y no comercial.",
                "Esta licencia no le permite:",
                "• Modificar, descompilar o realizar ingeniería inversa de la aplicación",
                "• Distribuir, vender, alquilar o sublicenciar la aplicación",
                "• Utilizar la aplicación para fines ilegales o no autorizados",
                "• Explotar la aplicación con fines comerciales"
            ]
        },
        {
            icon: Zap,
            title: "4. Funcionamiento de la Aplicación",
            content: [
                "Radio Agro requiere una conexión a Internet para funcionar correctamente. Los costos de datos asociados con el uso de la aplicación son responsabilidad del usuario.",
                "Aunque nos esforzamos por mantener la continuidad del servicio, no garantizamos que:",
                "• La aplicación esté disponible en todo momento",
                "• La transmisión del contenido sea ininterrumpida",
                "• La aplicación esté libre de errores o defectos"
            ]
        },
        {
            icon: Shield,
            title: "5. Privacidad",
            content: [
                "El uso de Radio Agro está sujeto a nuestra Política de Privacidad, que describe cómo manejamos la información. Nuestra Política de Privacidad se incorpora a estos Términos de Servicio mediante esta referencia."
            ]
        },
        {
            icon: Globe,
            title: "6. Propiedad Intelectual",
            content: [
                "La aplicación Radio Agro, incluyendo su diseño, gráficos, código y contenido, está protegida por derechos de autor, marcas registradas y otras leyes de propiedad intelectual.",
                "Todo el contenido transmitido a través de la aplicación pertenece a sus respectivos propietarios y está protegido por las leyes de derechos de autor."
            ]
        },
        {
            icon: Ban,
            title: "7. Restricciones de Uso",
            content: [
                "Usted acepta no utilizar Radio Agro para:",
                "• Violar leyes o regulaciones aplicables",
                "• Infringir derechos de propiedad intelectual",
                "• Transmitir malware o código dañino",
                "• Interferir con el funcionamiento normal de la aplicación",
                "• Acceder sin autorización a nuestros sistemas o redes"
            ]
        },
        {
            icon: AlertTriangle,
            title: "8. Limitación de Responsabilidad",
            content: [
                "En la máxima medida permitida por la ley, Torisoftt no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar Radio Agro.",
                "No garantizamos que el contenido transmitido a través de la aplicación sea preciso, completo o adecuado para sus propósitos."
            ]
        },
        {
            icon: RefreshCcw,
            title: "9. Modificaciones",
            content: [
                "Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Le notificaremos sobre cambios significativos mediante un aviso en la aplicación o en nuestro sitio web.",
                "Su uso continuado de la aplicación después de tales modificaciones constituye su aceptación de los nuevos términos."
            ]
        },
        {
            icon: Scale,
            title: "10. Ley Aplicable",
            content: [
                "Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de Ecuador, sin tener en cuenta sus disposiciones sobre conflictos de leyes.",
                "Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Ecuador."
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
                            Términos de Servicio
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
                                    Si tiene preguntas o comentarios sobre estos Términos de Servicio, contáctenos:
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