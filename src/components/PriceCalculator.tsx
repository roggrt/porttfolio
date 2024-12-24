'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check } from 'lucide-react';

type ServiceOption = {
    id: string;
    name: string;
    basePrice: number;
    description: string;
};

type AdditionalFeature = {
    id: string;
    name: string;
    price: number;
    description: string;
};

export default function PriceCalculator() {
    const [selectedService, setSelectedService] = useState<string>('');
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const services: ServiceOption[] = [
        {
            id: 'wordpress',
            name: 'Sitio WordPress/PHP',
            basePrice: 199,
            description: 'Desarrollo de sitio web profesional con WordPress o PHP, ideal para negocios y si ya tienes tu diseño en figma'
        },
        {
            id: 'custom',
            name: 'Desarrollo a Medida',
            basePrice: 299,
            description: 'Desarrollo personalizado con código nativo, mayor flexibilidad y rendimiento'
        },
        {
            id: 'ecommerce',
            name: 'E-commerce',
            basePrice: 399,
            description: 'Tienda online completa con gestión de productos y pagos'
        }
    ];

    const additionalFeatures: AdditionalFeature[] = [
        {
            id: 'seo',
            name: 'Optimización SEO',
            price: 99,
            description: 'Mejora el posicionamiento en buscadores'
        },
        {
            id: 'hosting',
            name: 'Hosting Premium',
            price: 79,
            description: 'Alojamiento de alto rendimiento con SSL'
        },
        {
            id: 'maintenance',
            name: 'Mantenimiento Mensual',
            price: 29,
            description: 'Actualizaciones (textos, contenido, precios) y soporte técnico mensual (mantenimiento)'
        },
        {
            id: 'design',
            name: 'Diseño Personalizado',
            price: 149,
            description: 'Diseño UI UX único adaptado a tu imagen de marca, 5 páginas'
        }
    ];

    const calculateTotal = () => {
        const basePrice = services.find(s => s.id === selectedService)?.basePrice || 0;
        const featuresTotal = selectedFeatures.reduce((total, featureId) => {
            const feature = additionalFeatures.find(f => f.id === featureId);
            return total + (feature?.price || 0);
        }, 0);
        return basePrice + featuresTotal;
    };

    const toggleFeature = (featureId: string) => {
        setSelectedFeatures(prev =>
            prev.includes(featureId)
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    return (
        <section id="cotizador" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Calculator className="w-12 h-12 mx-auto mb-4 text-accent-red dark:text-accent-yellow" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Cotizador de Proyectos
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Calcula el costo estimado de tu proyecto seleccionando el tipo de servicio
                        y las características adicionales que necesites.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Tipo de Proyecto
                            </h3>
                            <div className="space-y-3">
                                {services.map((service) => (
                                    <motion.div
                                        key={service.id}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
                                            selectedService === service.id
                                                ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
                                                : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
                                        }`}
                                        onClick={() => setSelectedService(service.id)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">
                                                    {service.name}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {service.description}
                                                </p>
                                            </div>
                                            <div className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
                                                ${service.basePrice}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Características Adicionales
                            </h3>
                            <div className="space-y-3">
                                {additionalFeatures.map((feature) => (
                                    <motion.div
                                        key={feature.id}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
                                            selectedFeatures.includes(feature.id)
                                                ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
                                                : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
                                        }`}
                                        onClick={() => toggleFeature(feature.id)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">
                                                    {feature.name}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <div className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
                                                +${feature.price}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-24">
                        <motion.div
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                                Resumen del Proyecto
                            </h3>
                            {selectedService && (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <span className="text-gray-600 dark:text-gray-400">Servicio Base</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            ${services.find(s => s.id === selectedService)?.basePrice}
                                        </span>
                                    </div>
                                    {selectedFeatures.length > 0 && (
                                        <div className="space-y-2">
                                            {selectedFeatures.map(featureId => {
                                                const feature = additionalFeatures.find(f => f.id === featureId);
                                                return (
                                                    <div key={featureId} className="flex justify-between items-center">
                                                        <span className="text-gray-600 dark:text-gray-400">
                                                            {feature?.name}
                                                        </span>
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            +${feature?.price}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Total Estimado
                                            </span>
                                            <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
                                                ${calculateTotal()}
                                            </span>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 px-6 mt-6 bg-accent-red dark:bg-accent-yellow
                                                 text-white dark:text-gray-900 rounded-lg font-medium
                                                 hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
                                                 transition-colors duration-300"
                                    >
                                        Solicitar Cotización
                                    </motion.button>
                                </div>
                            )}
                            {!selectedService && (
                                <p className="text-gray-600 dark:text-gray-400 text-center">
                                    Selecciona un tipo de proyecto para ver el presupuesto estimado
                                </p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
