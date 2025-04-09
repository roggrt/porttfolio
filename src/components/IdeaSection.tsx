'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Code, Upload } from 'lucide-react';

const IdeaBanner = () => {
    // Pasos simplificados del proceso
    const steps = [
        {
            icon: MessageSquare,
            title: 'Cuéntanos',
            description: 'Comparte tu idea y requerimientos'
        },
        {
            icon: Code,
            title: 'Desarrollamos',
            description: 'Nos encargamos de todo el proceso'
        },
        {
            icon: Upload,
            title: 'Publicamos',
            description: 'Incluye dominio y hosting dependiendo el plan'
        }
    ];

    // URL de WhatsApp con mensaje personalizado
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=593984264910&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+sus+servicios.&type=phone_number&app_absent=0";

    return (
        <section className="py-12 overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                {/* Banner principal con estilo Apple */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800"
                >
                    <div className="grid md:grid-cols-5 items-center">
                        {/* Contenido principal */}
                        <div className="md:col-span-3 p-8 md:p-10">
                            <h2 className="text-3xl font-semibold mb-3 text-gray-900 dark:text-white">
                                Cuéntanos tu <span className="text-accent-red dark:text-accent-yellow">idea</span> y hagámosla realidad
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
                                Desde tu concepto inicial hasta un proyecto online completo, nos encargamos de todo el proceso. Incluimos dominio, hosting y soporte técnico.
                            </p>

                            <div className="flex space-x-4">
                                <Link
                                    href="#contacto"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-200 group"
                                >
                                    <span>Empezar ahora</span>
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                                >
                                    Conversemos ahora
                                </a>
                            </div>
                        </div>

                        {/* Pasos simplificados a la derecha */}
                        <div className="md:col-span-2 bg-gray-100 dark:bg-gray-800 p-8 md:p-10 md:h-full">
                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 flex items-center justify-center flex-shrink-0">
                                            <step.icon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-medium text-gray-900 dark:text-white">{step.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Nota sobre servicios existentes */}
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                                Si ya cuentas con dominio o hosting, te ayudamos a configurarlo sin costo adicional.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IdeaBanner;