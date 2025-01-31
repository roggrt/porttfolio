// 'use client';
//
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calculator, Check } from 'lucide-react';
//
// type ServiceOption = {
//     id: string;
//     name: string;
//     basePrice: number;
//     description: string;
// };
//
// type AdditionalFeature = {
//     id: string;
//     name: string;
//     price: number;
//     description: string;
// };
//
// export default function PriceCalculator() {
//     const [selectedService, setSelectedService] = useState<string>('');
//     const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
//
//     const services: ServiceOption[] = [
//         {
//             id: 'wordpress',
//             name: 'Sitio WordPress/PHP',
//             basePrice: 199,
//             description: 'Desarrollo de sitio web profesional con WordPress o PHP, ideal para negocios y si ya tienes tu diseño en figma'
//         },
//         {
//             id: 'custom',
//             name: 'Desarrollo a Medida',
//             basePrice: 299,
//             description: 'Desarrollo personalizado con código nativo, mayor flexibilidad y rendimiento'
//         },
//         {
//             id: 'ecommerce',
//             name: 'E-commerce',
//             basePrice: 399,
//             description: 'Tienda online completa con gestión de productos y pagos'
//         }
//     ];
//
//     const additionalFeatures: AdditionalFeature[] = [
//         {
//             id: 'seo',
//             name: 'Optimización SEO',
//             price: 99,
//             description: 'Mejora el posicionamiento en buscadores'
//         },
//         {
//             id: 'hosting',
//             name: 'Hosting Premium',
//             price: 79,
//             description: 'Alojamiento de alto rendimiento con SSL'
//         },
//         {
//             id: 'maintenance',
//             name: 'Mantenimiento Mensual',
//             price: 29,
//             description: 'Actualizaciones (textos, contenido, precios) y soporte técnico mensual'
//         },
//         {
//             id: 'design',
//             name: 'Diseño Personalizado',
//             price: 149,
//             description: 'Diseño UI UX único adaptado a tu imagen de marca, 5 páginas'
//         }
//     ];
//
//     const calculateTotal = () => {
//         const basePrice = services.find(s => s.id === selectedService)?.basePrice || 0;
//         const featuresTotal = selectedFeatures.reduce((total, featureId) => {
//             const feature = additionalFeatures.find(f => f.id === featureId);
//             return total + (feature?.price || 0);
//         }, 0);
//         return basePrice + featuresTotal;
//     };
//
//     const toggleFeature = (featureId: string) => {
//         setSelectedFeatures(prev =>
//             prev.includes(featureId)
//                 ? prev.filter(id => id !== featureId)
//                 : [...prev, featureId]
//         );
//     };
//
//     return (
//         <section id="cotizador" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//             <div className="max-w-7xl mx-auto px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-16"
//                 >
//                     <Calculator className="w-12 h-12 mx-auto mb-4 text-accent-red dark:text-accent-yellow" />
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                         Cotizador de Proyectos
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Calcula el costo estimado de tu proyecto seleccionando el tipo de servicio
//                         y las características adicionales que necesites.
//                     </p>
//                 </motion.div>
//
//                 <div className="grid md:grid-cols-2 gap-8">
//                     <div className="space-y-6">
//                         <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                                 Tipo de Proyecto
//                             </h3>
//                             <div className="space-y-3">
//                                 {services.map((service) => (
//                                     <motion.div
//                                         key={service.id}
//                                         whileHover={{ scale: 1.02 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
//                                             selectedService === service.id
//                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
//                                                 : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
//                                         }`}
//                                         onClick={() => setSelectedService(service.id)}
//                                     >
//                                         <div className="flex justify-between items-center">
//                                             <div>
//                                                 <h4 className="font-medium text-gray-900 dark:text-white">
//                                                     {service.name}
//                                                 </h4>
//                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                                                     {service.description}
//                                                 </p>
//                                             </div>
//                                             <div className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
//                                                 ${service.basePrice}
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//
//                         <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
//                             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                                 Características Adicionales
//                             </h3>
//                             <div className="space-y-3">
//                                 {additionalFeatures.map((feature) => (
//                                     <motion.div
//                                         key={feature.id}
//                                         whileHover={{ scale: 1.02 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
//                                             selectedFeatures.includes(feature.id)
//                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
//                                                 : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
//                                         }`}
//                                         onClick={() => toggleFeature(feature.id)}
//                                     >
//                                         <div className="flex justify-between items-center">
//                                             <div>
//                                                 <h4 className="font-medium text-gray-900 dark:text-white">
//                                                     {feature.name}
//                                                 </h4>
//                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                                                     {feature.description}
//                                                 </p>
//                                             </div>
//                                             <div className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
//                                                 +${feature.price}
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//
//                     <div className="sticky top-24">
//                         <motion.div
//                             className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
//                             initial={{ opacity: 0, x: 20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                         >
//                             <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
//                                 Resumen del Proyecto
//                             </h3>
//                             {selectedService && (
//                                 <div className="space-y-4">
//                                     <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
//                                         <span className="text-gray-600 dark:text-gray-400">Servicio Base</span>
//                                         <span className="font-semibold text-gray-900 dark:text-white">
//                                             ${services.find(s => s.id === selectedService)?.basePrice}
//                                         </span>
//                                     </div>
//                                     {selectedFeatures.length > 0 && (
//                                         <div className="space-y-2">
//                                             {selectedFeatures.map(featureId => {
//                                                 const feature = additionalFeatures.find(f => f.id === featureId);
//                                                 return (
//                                                     <div key={featureId} className="flex justify-between items-center">
//                                                         <span className="text-gray-600 dark:text-gray-400">
//                                                             {feature?.name}
//                                                         </span>
//                                                         <span className="font-semibold text-gray-900 dark:text-white">
//                                                             +${feature?.price}
//                                                         </span>
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                     )}
//                                     <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
//                                         <div className="flex justify-between items-center">
//                                             <span className="text-lg font-semibold text-gray-900 dark:text-white">
//                                                 Total Estimado
//                                             </span>
//                                             <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
//                                                 ${calculateTotal()}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <motion.button
//                                         whileHover={{ scale: 1.02 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         className="w-full py-3 px-6 mt-6 bg-accent-red dark:bg-accent-yellow
//                                                  text-white dark:text-gray-900 rounded-lg font-medium
//                                                  hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
//                                                  transition-colors duration-300"
//                                     >
//                                         Solicitar Cotización
//                                     </motion.button>
//                                 </div>
//                             )}
//                             {!selectedService && (
//                                 <p className="text-gray-600 dark:text-gray-400 text-center">
//                                     Selecciona un tipo de proyecto para ver el presupuesto estimado
//                                 </p>
//                             )}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


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
            description: 'Actualizaciones (textos, contenido, precios) y soporte técnico mensual'
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

    const handleRequestQuote = () => {
        const selectedServiceDetails = services.find(s => s.id === selectedService);

        // Generate the quote message
        let message = `¡Hola! Me interesa cotizar un proyecto web con las siguientes características:\n\n`;
        message += `📌 Tipo de Proyecto: ${selectedServiceDetails?.name}\n`;
        message += `💰 Precio Base: $${selectedServiceDetails?.basePrice}\n\n`;

        if (selectedFeatures.length > 0) {
            message += `✨ Características Adicionales:\n`;
            selectedFeatures.forEach(featureId => {
                const feature = additionalFeatures.find(f => f.id === featureId);
                message += `- ${feature?.name}: $${feature?.price}\n`;
            });
            message += `\n`;
        }

        message += `💵 Total Estimado: $${calculateTotal()}\n\n`;
        message += `¿Me pueden proporcionar más información sobre los tiempos de entrega y el proceso de desarrollo?`;

        // Encode the message for WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/593984264910?text=${encodedMessage}`;

        // Open WhatsApp in a new window
        window.open(whatsappUrl, '_blank');
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
                                        onClick={handleRequestQuote}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 px-6 mt-6 bg-accent-red dark:bg-accent-yellow
             text-white dark:text-gray-900 rounded-lg font-medium
             hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
             transition-colors duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        Solicitar Cotización por WhatsApp
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