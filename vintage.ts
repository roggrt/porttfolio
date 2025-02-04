// // // // //
// // // // // 'use client';
// // // // //
// // // // // import React, { useState } from 'react';
// // // // // import { motion } from 'framer-motion';
// // // // // import { Calculator, Check } from 'lucide-react';
// // // // //
// // // // // type ServiceOption = {
// // // // //     id: string;
// // // // //     name: string;
// // // // //     basePrice: number;
// // // // //     description: string;
// // // // // };
// // // // //
// // // // // type AdditionalFeature = {
// // // // //     id: string;
// // // // //     name: string;
// // // // //     price: number;
// // // // //     description: string;
// // // // // };
// // // // //
// // // // // export default function PriceCalculator() {
// // // // //     const [selectedService, setSelectedService] = useState<string>('');
// // // // //     const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
// // // // //
// // // // //     const services: ServiceOption[] = [
// // // // //         {
// // // // //             id: 'wordpress',
// // // // //             name: 'Sitio WordPress/PHP',
// // // // //             basePrice: 199,
// // // // //             description: 'Desarrollo de sitio web profesional con WordPress o PHP, ideal para negocios y si ya tienes tu diseño en figma'
// // // // //         },
// // // // //         {
// // // // //             id: 'custom',
// // // // //             name: 'Desarrollo a Medida',
// // // // //             basePrice: 299,
// // // // //             description: 'Desarrollo personalizado con código nativo, mayor flexibilidad y rendimiento'
// // // // //         },
// // // // //         {
// // // // //             id: 'ecommerce',
// // // // //             name: 'E-commerce',
// // // // //             basePrice: 399,
// // // // //             description: 'Tienda online completa con gestión de productos y pagos'
// // // // //         }
// // // // //     ];
// // // // //
// // // // //     const additionalFeatures: AdditionalFeature[] = [
// // // // //         {
// // // // //             id: 'seo',
// // // // //             name: 'Optimización SEO',
// // // // //             price: 99,
// // // // //             description: 'Mejora el posicionamiento en buscadores'
// // // // //         },
// // // // //         {
// // // // //             id: 'hosting',
// // // // //             name: 'Hosting Premium',
// // // // //             price: 79,
// // // // //             description: 'Alojamiento de alto rendimiento con SSL'
// // // // //         },
// // // // //         {
// // // // //             id: 'maintenance',
// // // // //             name: 'Mantenimiento Mensual',
// // // // //             price: 29,
// // // // //             description: 'Actualizaciones (textos, contenido, precios) y soporte técnico mensual'
// // // // //         },
// // // // //         {
// // // // //             id: 'design',
// // // // //             name: 'Diseño Personalizado',
// // // // //             price: 149,
// // // // //             description: 'Diseño UI UX único adaptado a tu imagen de marca, 5 páginas'
// // // // //         }
// // // // //     ];
// // // // //
// // // // //     const calculateTotal = () => {
// // // // //         const basePrice = services.find(s => s.id === selectedService)?.basePrice || 0;
// // // // //         const featuresTotal = selectedFeatures.reduce((total, featureId) => {
// // // // //             const feature = additionalFeatures.find(f => f.id === featureId);
// // // // //             return total + (feature?.price || 0);
// // // // //         }, 0);
// // // // //         return basePrice + featuresTotal;
// // // // //     };
// // // // //
// // // // //     const toggleFeature = (featureId: string) => {
// // // // //         setSelectedFeatures(prev =>
// // // // //             prev.includes(featureId)
// // // // //                 ? prev.filter(id => id !== featureId)
// // // // //                 : [...prev, featureId]
// // // // //         );
// // // // //     };
// // // // //
// // // // //     const handleRequestQuote = () => {
// // // // //         const selectedServiceDetails = services.find(s => s.id === selectedService);
// // // // //
// // // // //         // Generate the quote message
// // // // //         let message = `¡Hola! Me interesa cotizar un proyecto web con las siguientes características:\n\n`;
// // // // //         message += `📌 Tipo de Proyecto: ${selectedServiceDetails?.name}\n`;
// // // // //         message += `💰 Precio Base: $${selectedServiceDetails?.basePrice}\n\n`;
// // // // //
// // // // //         if (selectedFeatures.length > 0) {
// // // // //             message += `✨ Características Adicionales:\n`;
// // // // //             selectedFeatures.forEach(featureId => {
// // // // //                 const feature = additionalFeatures.find(f => f.id === featureId);
// // // // //                 message += `- ${feature?.name}: $${feature?.price}\n`;
// // // // //             });
// // // // //             message += `\n`;
// // // // //         }
// // // // //
// // // // //         message += `💵 Total Estimado: $${calculateTotal()}\n\n`;
// // // // //         message += `¿Me pueden proporcionar más información sobre los tiempos de entrega y el proceso de desarrollo?`;
// // // // //
// // // // //         // Encode the message for WhatsApp
// // // // //         const encodedMessage = encodeURIComponent(message);
// // // // //         const whatsappUrl = `https://wa.me/593984264910?text=${encodedMessage}`;
// // // // //
// // // // //         // Open WhatsApp in a new window
// // // // //         window.open(whatsappUrl, '_blank');
// // // // //     };
// // // // //
// // // // //     return (
// // // // //         <section id="cotizador" className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // // // //             <div className="max-w-7xl mx-auto px-6">
// // // // //                 <motion.div
// // // // //                     initial={{ opacity: 0, y: 20 }}
// // // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // // //                     transition={{ duration: 0.6 }}
// // // // //                     viewport={{ once: true }}
// // // // //                     className="text-center mb-16"
// // // // //                 >
// // // // //                     <Calculator className="w-12 h-12 mx-auto mb-4 text-accent-red dark:text-accent-yellow" />
// // // // //                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
// // // // //                         Cotizador de Proyectos
// // // // //                     </h2>
// // // // //                     <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// // // // //                         Calcula el costo estimado de tu proyecto seleccionando el tipo de servicio
// // // // //                         y las características adicionales que necesites.
// // // // //                     </p>
// // // // //                 </motion.div>
// // // // //
// // // // //                 <div className="grid md:grid-cols-2 gap-8">
// // // // //                     <div className="space-y-6">
// // // // //                         <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
// // // // //                             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
// // // // //                                 Tipo de Proyecto
// // // // //                             </h3>
// // // // //                             <div className="space-y-3">
// // // // //                                 {services.map((service) => (
// // // // //                                     <motion.div
// // // // //                                         key={service.id}
// // // // //                                         whileHover={{ scale: 1.02 }}
// // // // //                                         whileTap={{ scale: 0.98 }}
// // // // //                                         className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
// // // // //                                             selectedService === service.id
// // // // //                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
// // // // //                                                 : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
// // // // //                                         }`}
// // // // //                                         onClick={() => setSelectedService(service.id)}
// // // // //                                     >
// // // // //                                         <div className="flex justify-between items-center">
// // // // //                                             <div>
// // // // //                                                 <h4 className="font-medium text-gray-900 dark:text-white">
// // // // //                                                     {service.name}
// // // // //                                                 </h4>
// // // // //                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
// // // // //                                                     {service.description}
// // // // //                                                 </p>
// // // // //                                             </div>
// // // // //                                             <div className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
// // // // //                                                 ${service.basePrice}
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </motion.div>
// // // // //                                 ))}
// // // // //                             </div>
// // // // //                         </div>
// // // // //
// // // // //                         <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
// // // // //                             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
// // // // //                                 Características Adicionales
// // // // //                             </h3>
// // // // //                             <div className="space-y-3">
// // // // //                                 {additionalFeatures.map((feature) => (
// // // // //                                     <motion.div
// // // // //                                         key={feature.id}
// // // // //                                         whileHover={{ scale: 1.02 }}
// // // // //                                         whileTap={{ scale: 0.98 }}
// // // // //                                         className={`p-4 rounded-lg cursor-pointer border-2 transition-all ${
// // // // //                                             selectedFeatures.includes(feature.id)
// // // // //                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
// // // // //                                                 : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
// // // // //                                         }`}
// // // // //                                         onClick={() => toggleFeature(feature.id)}
// // // // //                                     >
// // // // //                                         <div className="flex justify-between items-center">
// // // // //                                             <div>
// // // // //                                                 <h4 className="font-medium text-gray-900 dark:text-white">
// // // // //                                                     {feature.name}
// // // // //                                                 </h4>
// // // // //                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
// // // // //                                                     {feature.description}
// // // // //                                                 </p>
// // // // //                                             </div>
// // // // //                                             <div className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
// // // // //                                                 +${feature.price}
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </motion.div>
// // // // //                                 ))}
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //
// // // // //                     <div className="sticky top-24">
// // // // //                         <motion.div
// // // // //                             className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
// // // // //                             initial={{ opacity: 0, x: 20 }}
// // // // //                             whileInView={{ opacity: 1, x: 0 }}
// // // // //                             transition={{ duration: 0.6 }}
// // // // //                         >
// // // // //                             <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// // // // //                                 Resumen del Proyecto
// // // // //                             </h3>
// // // // //                             {selectedService && (
// // // // //                                 <div className="space-y-4">
// // // // //                                     <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
// // // // //                                         <span className="text-gray-600 dark:text-gray-400">Servicio Base</span>
// // // // //                                         <span className="font-semibold text-gray-900 dark:text-white">
// // // // //                                             ${services.find(s => s.id === selectedService)?.basePrice}
// // // // //                                         </span>
// // // // //                                     </div>
// // // // //                                     {selectedFeatures.length > 0 && (
// // // // //                                         <div className="space-y-2">
// // // // //                                             {selectedFeatures.map(featureId => {
// // // // //                                                 const feature = additionalFeatures.find(f => f.id === featureId);
// // // // //                                                 return (
// // // // //                                                     <div key={featureId} className="flex justify-between items-center">
// // // // //                                                         <span className="text-gray-600 dark:text-gray-400">
// // // // //                                                             {feature?.name}
// // // // //                                                         </span>
// // // // //                                                         <span className="font-semibold text-gray-900 dark:text-white">
// // // // //                                                             +${feature?.price}
// // // // //                                                         </span>
// // // // //                                                     </div>
// // // // //                                                 );
// // // // //                                             })}
// // // // //                                         </div>
// // // // //                                     )}
// // // // //                                     <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
// // // // //                                         <div className="flex justify-between items-center">
// // // // //                                             <span className="text-lg font-semibold text-gray-900 dark:text-white">
// // // // //                                                 Total Estimado
// // // // //                                             </span>
// // // // //                                             <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
// // // // //                                                 ${calculateTotal()}
// // // // //                                             </span>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //
// // // // //                                     <motion.button
// // // // //                                         onClick={handleRequestQuote}
// // // // //                                         whileHover={{ scale: 1.02 }}
// // // // //                                         whileTap={{ scale: 0.98 }}
// // // // //                                         className="w-full py-3 px-6 mt-6 bg-accent-red dark:bg-accent-yellow
// // // // //              text-white dark:text-gray-900 rounded-lg font-medium
// // // // //              hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
// // // // //              transition-colors duration-300 flex items-center justify-center gap-2"
// // // // //                                     >
// // // // //                                         <svg
// // // // //                                             className="w-5 h-5"
// // // // //                                             fill="currentColor"
// // // // //                                             viewBox="0 0 24 24"
// // // // //                                         >
// // // // //                                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
// // // // //                                         </svg>
// // // // //                                         Solicitar Cotización por WhatsApp
// // // // //                                     </motion.button>
// // // // //                                 </div>
// // // // //                             )}
// // // // //                             {!selectedService && (
// // // // //                                 <p className="text-gray-600 dark:text-gray-400 text-center">
// // // // //                                     Selecciona un tipo de proyecto para ver el presupuesto estimado
// // // // //                                 </p>
// // // // //                             )}
// // // // //                         </motion.div>
// // // // //                     </div>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </section>
// // // // //     );
// // // // // }
// // // //
// // // // 'use client';
// // // //
// // // // import React, { useState } from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Calculator, Check, ArrowRight, ArrowLeft, Monitor, ShoppingCart, Code, Search, Mail, Phone, Server, Paintbrush, Wrench, MessageSquare, AlertCircle } from 'lucide-react';
// // // //
// // // // type ServiceOption = {
// // // //     id: string;
// // // //     name: string;
// // // //     basePrice: number;
// // // //     description: string;
// // // //     icon: any;
// // // //     features: string[];
// // // // };
// // // //
// // // // type AdditionalFeature = {
// // // //     id: string;
// // // //     name: string;
// // // //     price: number;
// // // //     description: string;
// // // //     icon: any;
// // // //     popular?: boolean;
// // // // };
// // // //
// // // // export default function PriceCalculator() {
// // // //     const [currentStep, setCurrentStep] = useState(1);
// // // //     const [selectedService, setSelectedService] = useState<string>('');
// // // //     const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
// // // //
// // // //     const services: ServiceOption[] = [
// // // //         {
// // // //             id: 'wordpress',
// // // //             name: 'Sitio WordPress',
// // // //             basePrice: 199,
// // // //             description: 'Desarrollo de sitio web profesional con WordPress, ideal para negocios y si ya tienes tu diseño en figma',
// // // //             icon: Monitor,
// // // //             features: [
// // // //                 'Panel de administración',
// // // //                 'Optimización de velocidad',
// // // //                 'Responsive design',
// // // //                 'Plugins esenciales'
// // // //             ]
// // // //         },
// // // //         {
// // // //             id: 'custom',
// // // //             name: 'Desarrollo a Medida',
// // // //             basePrice: 299,
// // // //             description: 'Desarrollo personalizado con código nativo, mayor flexibilidad y rendimiento',
// // // //             icon: Code,
// // // //             features: [
// // // //                 'Código optimizado',
// // // //                 'Máximo rendimiento',
// // // //                 'Personalización total',
// // // //                 'API Integration'
// // // //             ]
// // // //         },
// // // //         {
// // // //             id: 'ecommerce',
// // // //             name: 'E-commerce',
// // // //             basePrice: 399,
// // // //             description: 'Tienda online completa con gestión de productos y pagos',
// // // //             icon: ShoppingCart,
// // // //             features: [
// // // //                 'Gestión de productos',
// // // //                 'Pasarela de pagos',
// // // //                 'Gestión de inventario',
// // // //                 'Informes de ventas'
// // // //             ]
// // // //         }
// // // //     ];
// // // //
// // // //     const additionalFeatures: AdditionalFeature[] = [
// // // //         {
// // // //             id: 'seo',
// // // //             name: 'Optimización SEO avanzada',
// // // //             price: 99,
// // // //             description: 'Mejora el posicionamiento en buscadores',
// // // //             icon: Search,
// // // //             popular: true
// // // //         },
// // // //         {
// // // //             id: 'hosting',
// // // //             name: 'Hosting Premium',
// // // //             price: 79,
// // // //             description: 'Alojamiento de alto rendimiento con SSL por 1 año',
// // // //             icon: Server
// // // //         },
// // // //         {
// // // //             id: 'maintenance',
// // // //             name: 'Mantenimiento',
// // // //             price: 29,
// // // //             description: 'Actualizaciones y soporte técnico mensual',
// // // //             icon: Wrench
// // // //         },
// // // //         {
// // // //             id: 'design',
// // // //             name: 'Diseño UI/UX',
// // // //             price: 149,
// // // //             description: 'Diseño único adaptado a tu marca, si tu proyecto requiere de más de 5 páginas',
// // // //             icon: Paintbrush,
// // // //             popular: true
// // // //         }
// // // //     ];
// // // //
// // // //     const calculateTotal = () => {
// // // //         const basePrice = services.find(s => s.id === selectedService)?.basePrice || 0;
// // // //         const featuresTotal = selectedFeatures.reduce((total, featureId) => {
// // // //             const feature = additionalFeatures.find(f => f.id === featureId);
// // // //             return total + (feature?.price || 0);
// // // //         }, 0);
// // // //         return basePrice + featuresTotal;
// // // //     };
// // // //
// // // //     const toggleFeature = (featureId: string) => {
// // // //         setSelectedFeatures(prev =>
// // // //             prev.includes(featureId)
// // // //                 ? prev.filter(id => id !== featureId)
// // // //                 : [...prev, featureId]
// // // //         );
// // // //     };
// // // //
// // // //     const handleRequestQuote = () => {
// // // //         const selectedServiceDetails = services.find(s => s.id === selectedService);
// // // //         let message = `¡Hola! Me interesa cotizar un proyecto web:\n\n`;
// // // //         message += `📌 Proyecto: ${selectedServiceDetails?.name}\n`;
// // // //         message += `💰 Base: $${selectedServiceDetails?.basePrice}\n\n`;
// // // //
// // // //         if (selectedFeatures.length > 0) {
// // // //             message += `✨ Adicionales:\n`;
// // // //             selectedFeatures.forEach(featureId => {
// // // //                 const feature = additionalFeatures.find(f => f.id === featureId);
// // // //                 message += `- ${feature?.name}: $${feature?.price}\n`;
// // // //             });
// // // //         }
// // // //
// // // //         message += `\n💵 Total: $${calculateTotal()}`;
// // // //         const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
// // // //         window.open(whatsappUrl, '_blank');
// // // //     };
// // // //
// // // //     const steps = [
// // // //         { number: 1, title: 'Selecciona el Tipo' },
// // // //         { number: 2, title: 'Personaliza' },
// // // //         { number: 3, title: 'Finaliza' }
// // // //     ];
// // // //
// // // //     return (
// // // //         <section id="cotizador" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
// // // //             <div className="max-w-7xl mx-auto px-6">
// // // //                 <motion.div
// // // //                     initial={{ opacity: 0, y: 20 }}
// // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // //                     transition={{ duration: 0.6 }}
// // // //                     viewport={{ once: true }}
// // // //                     className="text-center mb-16"
// // // //                 >
// // // //                     <div className="inline-flex p-4 mb-4 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10">
// // // //                         <Calculator className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
// // // //                     </div>
// // // //                     <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
// // // //                         Cotizador Instantáneo
// // // //                     </h2>
// // // //                     <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// // // //                         Configura tu proyecto web ideal en tres simples pasos
// // // //                     </p>
// // // //                 </motion.div>
// // // //
// // // //                 {/* Stepper */}
// // // //                 <div className="mb-12">
// // // //                     <div className="flex justify-center items-center">
// // // //                         {steps.map((step, index) => (
// // // //                             <React.Fragment key={step.number}>
// // // //                                 <div className="flex items-center">
// // // //                                     <div
// // // //                                         className={`flex items-center justify-center w-10 h-10 rounded-full
// // // //                                         ${currentStep >= step.number
// // // //                                             ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// // // //                                             : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}
// // // //                                     >
// // // //                                         {currentStep > step.number ? (
// // // //                                             <Check className="w-5 h-5" />
// // // //                                         ) : (
// // // //                                             <span className="font-medium">{step.number}</span>
// // // //                                         )}
// // // //                                     </div>
// // // //                                     <span className="ml-2 font-medium text-gray-900 dark:text-white">
// // // //                                         {step.title}
// // // //                                     </span>
// // // //                                 </div>
// // // //                                 {index < steps.length - 1 && (
// // // //                                     <div className={`w-24 h-1 mx-4
// // // //                                         ${currentStep > step.number
// // // //                                         ? 'bg-accent-red dark:bg-accent-yellow'
// // // //                                         : 'bg-gray-200 dark:bg-gray-700'}`}
// // // //                                     />
// // // //                                 )}
// // // //                             </React.Fragment>
// // // //                         ))}
// // // //                     </div>
// // // //                 </div>
// // // //
// // // //                 <div className="grid lg:grid-cols-3 gap-8">
// // // //                     <div className="lg:col-span-2 space-y-6">
// // // //                         {/* Step 1: Service Selection */}
// // // //                         {currentStep === 1 && (
// // // //                             <motion.div
// // // //                                 initial={{ opacity: 0, x: -20 }}
// // // //                                 animate={{ opacity: 1, x: 0 }}
// // // //                                 exit={{ opacity: 0, x: 20 }}
// // // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
// // // //                             >
// // // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// // // //                                     Selecciona tu Tipo de Proyecto
// // // //                                 </h3>
// // // //                                 <div className="grid gap-4">
// // // //                                     {services.map((service) => (
// // // //                                         <motion.div
// // // //                                             key={service.id}
// // // //                                             whileHover={{ scale: 1.01 }}
// // // //                                             whileTap={{ scale: 0.99 }}
// // // //                                             className={`relative p-6 rounded-xl cursor-pointer border-2 transition-all
// // // //                                                 ${selectedService === service.id
// // // //                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
// // // //                                                 : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
// // // //                                             }`}
// // // //                                             onClick={() => setSelectedService(service.id)}
// // // //                                         >
// // // //                                             <div className="flex items-start gap-4">
// // // //                                                 <div className={`p-3 rounded-lg
// // // //                                                     ${selectedService === service.id
// // // //                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// // // //                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// // // //                                                 }`}
// // // //                                                 >
// // // //                                                     <service.icon className="w-6 h-6" />
// // // //                                                 </div>
// // // //                                                 <div className="flex-1">
// // // //                                                     <div className="flex justify-between items-start mb-2">
// // // //                                                         <div>
// // // //                                                             <h4 className="font-medium text-gray-900 dark:text-white">
// // // //                                                                 {service.name}
// // // //                                                             </h4>
// // // //                                                             <p className="text-sm text-gray-600 dark:text-gray-400">
// // // //                                                                 {service.description}
// // // //                                                             </p>
// // // //                                                         </div>
// // // //                                                         <div className="text-lg font-bold text-accent-red dark:text-accent-yellow">
// // // //                                                             ${service.basePrice}
// // // //                                                         </div>
// // // //                                                     </div>
// // // //                                                     <div className="grid grid-cols-2 gap-2 mt-4">
// // // //                                                         {service.features.map((feature, index) => (
// // // //                                                             <div
// // // //                                                                 key={index}
// // // //                                                                 className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
// // // //                                                             >
// // // //                                                                 <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
// // // //                                                                 <span>{feature}</span>
// // // //                                                             </div>
// // // //                                                         ))}
// // // //                                                     </div>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </motion.div>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             </motion.div>
// // // //                         )}
// // // //
// // // //                         {/* Step 2: Additional Features */}
// // // //                         {currentStep === 2 && (
// // // //                             <motion.div
// // // //                                 initial={{ opacity: 0, x: -20 }}
// // // //                                 animate={{ opacity: 1, x: 0 }}
// // // //                                 exit={{ opacity: 0, x: 20 }}
// // // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
// // // //                             >
// // // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// // // //                                     Personaliza tu Proyecto
// // // //                                 </h3>
// // // //                                 <div className="grid sm:grid-cols-2 gap-4">
// // // //                                     {additionalFeatures.map((feature) => (
// // // //                                         <motion.div
// // // //                                             key={feature.id}
// // // //                                             whileHover={{ scale: 1.02 }}
// // // //                                             whileTap={{ scale: 0.98 }}
// // // //                                             className={`relative p-5 rounded-xl cursor-pointer border-2 transition-all
// // // //                                                 ${selectedFeatures.includes(feature.id)
// // // //                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
// // // //                                                 : 'border-gray-200 dark:border-gray-700 hover:border-accent-red dark:hover:border-accent-yellow'
// // // //                                             }`}
// // // //                                             onClick={() => toggleFeature(feature.id)}
// // // //                                         >
// // // //                                             {feature.popular && (
// // // //                                                 <span className="absolute -top-3 -right-3 px-3 py-1 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium rounded-full">
// // // //                                                     Popular
// // // //                                                 </span>
// // // //                                             )}
// // // //                                             <div className="flex items-start gap-4">
// // // //                                                 <div className={`p-3 rounded-lg
// // // //                                                     ${selectedFeatures.includes(feature.id)
// // // //                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// // // //                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// // // //                                                 }`}
// // // //                                                 >
// // // //                                                     <feature.icon className="w-5 h-5" />
// // // //                                                 </div>
// // // //                                                 <div>
// // // //                                                     <div className="flex justify-between items-start">
// // // //                                                         <h4 className="font-medium text-gray-900 dark:text-white">
// // // //                                                             {feature.name}
// // // //                                                         </h4>
// // // //                                                         <span className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
// // // //                                                             +${feature.price}
// // // //                                                         </span>
// // // //                                                     </div>
// // // //
// // // //
// // // //
// // // //                                                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
// // // //                                                         {feature.description}
// // // //                                                     </p>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </motion.div>
// // // //                                     ))}
// // // //                                 </div>
// // // //                             </motion.div>
// // // //                         )}
// // // //
// // // //                         {/* Step 3: Summary and Confirmation */}
// // // //                         {currentStep === 3 && (
// // // //                             <motion.div
// // // //                                 initial={{ opacity: 0, x: -20 }}
// // // //                                 animate={{ opacity: 1, x: 0 }}
// // // //                                 exit={{ opacity: 0, x: 20 }}
// // // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
// // // //                             >
// // // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// // // //                                     Resumen de tu Proyecto
// // // //                                 </h3>
// // // //                                 <div className="space-y-6">
// // // //                                     {/* Service Summary */}
// // // //                                     <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
// // // //                                         <div className="flex justify-between items-start mb-4">
// // // //                                             <div>
// // // //                                                 <h4 className="font-medium text-gray-900 dark:text-white">
// // // //                                                     {services.find(s => s.id === selectedService)?.name}
// // // //                                                 </h4>
// // // //                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
// // // //                                                     Servicio base seleccionado
// // // //                                                 </p>
// // // //                                             </div>
// // // //                                             <span className="text-lg font-semibold text-gray-900 dark:text-white">
// // // //                                 ${services.find(s => s.id === selectedService)?.basePrice}
// // // //                             </span>
// // // //                                         </div>
// // // //                                     </div>
// // // //
// // // //                                     {/* Features Summary */}
// // // //                                     {selectedFeatures.length > 0 && (
// // // //                                         <div>
// // // //                                             <h4 className="font-medium text-gray-900 dark:text-white mb-3">
// // // //                                                 Características Adicionales
// // // //                                             </h4>
// // // //                                             <div className="space-y-3">
// // // //                                                 {selectedFeatures.map(featureId => {
// // // //                                                     const feature = additionalFeatures.find(f => f.id === featureId);
// // // //                                                     return (
// // // //                                                         <div
// // // //                                                             key={featureId}
// // // //                                                             className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
// // // //                                                         >
// // // //                                             <span className="text-gray-700 dark:text-gray-300">
// // // //                                                 {feature?.name}
// // // //                                             </span>
// // // //                                                             <span className="font-medium text-gray-900 dark:text-white">
// // // //                                                 +${feature?.price}
// // // //                                             </span>
// // // //                                                         </div>
// // // //                                                     );
// // // //                                                 })}
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     )}
// // // //
// // // //                                     {/* Market Comparison */}
// // // //                                     <div className="p-4 rounded-xl bg-accent-red/5 dark:bg-accent-yellow/5 border border-accent-red/20 dark:border-accent-yellow/20">
// // // //                                         <div className="flex items-start gap-3">
// // // //                                             <AlertCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
// // // //                                             <div>
// // // //                                                 <h4 className="font-medium text-gray-900 dark:text-white mb-1">
// // // //                                                     Ahorro Estimado
// // // //                                                 </h4>
// // // //                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
// // // //                                                     El precio promedio del mercado para un proyecto similar es de ${calculateTotal() * 1.8}.
// // // //                                                     Tu ahorro estimado es de ${(calculateTotal() * 1.8 - calculateTotal()).toFixed(2)}.
// // // //                                                 </p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </motion.div>
// // // //                         )}
// // // //                     </div>
// // // //
// // // //                     {/* Floating Summary Card */}
// // // //                     <div className="lg:col-span-1">
// // // //                         <div className="sticky top-24">
// // // //                             <motion.div
// // // //                                 initial={{ opacity: 0, y: 20 }}
// // // //                                 animate={{ opacity: 1, y: 0 }}
// // // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
// // // //                             >
// // // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center justify-between">
// // // //                                     Total estimado del Proyecto
// // // //                                     <span className="text-2xl text-accent-red dark:text-accent-yellow">
// // // //                         ${calculateTotal()}
// // // //                     </span>
// // // //                                 </h3>
// // // //
// // // //                                 <div className="space-y-6">
// // // //                                     {/* Progress */}
// // // //                                     <div className="space-y-2">
// // // //                                         <div className="flex justify-between text-sm">
// // // //                                             <span className="text-gray-600 dark:text-gray-400">Progreso</span>
// // // //                                             <span className="text-gray-900 dark:text-white font-medium">
// // // //                                 {currentStep}/3
// // // //                             </span>
// // // //                                         </div>
// // // //                                         <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
// // // //                                             <div
// // // //                                                 className="h-full bg-accent-red dark:bg-accent-yellow rounded-full transition-all"
// // // //                                                 style={{ width: `${(currentStep / 3) * 100}%` }}
// // // //                                             />
// // // //                                         </div>
// // // //                                     </div>
// // // //
// // // //                                     {/* Navigation Buttons */}
// // // //                                     <div className="flex gap-3">
// // // //                                         {currentStep > 1 && (
// // // //                                             <button
// // // //                                                 onClick={() => setCurrentStep(prev => prev - 1)}
// // // //                                                 className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700
// // // //                                          text-gray-700 dark:text-gray-300 font-medium hover:border-accent-red
// // // //                                          dark:hover:border-accent-yellow transition-colors inline-flex items-center
// // // //                                          justify-center gap-2"
// // // //                                             >
// // // //                                                 <ArrowLeft className="w-4 h-4" />
// // // //                                                 Anterior
// // // //                                             </button>
// // // //                                         )}
// // // //
// // // //                                         {currentStep < 3 && selectedService && (
// // // //                                             <button
// // // //                                                 onClick={() => setCurrentStep(prev => prev + 1)}
// // // //                                                 className="flex-1 py-3 px-4 bg-accent-red dark:bg-accent-yellow text-white
// // // //                                          dark:text-gray-900 rounded-xl font-medium hover:bg-accent-red/90
// // // //                                          dark:hover:bg-accent-yellow/90 transition-colors inline-flex
// // // //                                          items-center justify-center gap-2"
// // // //                                             >
// // // //                                                 Siguiente
// // // //                                                 <ArrowRight className="w-4 h-4" />
// // // //                                             </button>
// // // //                                         )}
// // // //
// // // //                                         {currentStep === 3 && (
// // // //                                             <button
// // // //                                                 onClick={handleRequestQuote}
// // // //                                                 className="flex-1 py-3 px-4 bg-accent-red dark:bg-accent-yellow text-white
// // // //                                          dark:text-gray-900 rounded-xl font-medium hover:bg-accent-red/90
// // // //                                          dark:hover:bg-accent-yellow/90 transition-colors inline-flex
// // // //                                          items-center justify-center gap-2"
// // // //                                             >
// // // //                                                 <MessageSquare className="w-4 h-4" />
// // // //                                                 Solicitar por WhatsApp
// // // //                                             </button>
// // // //                                         )}
// // // //                                     </div>
// // // //
// // // //
// // // //
// // // //                                     {/* Contact Options */}
// // // //                                     <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
// // // //                                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
// // // //                                             ¿Prefieres contactarnos directamente?
// // // //                                         </p>
// // // //                                         <div className="flex gap-4 justify-center">
// // // //                                             <a
// // // //                                                 href="tel:+593984264910"
// // // //                                                 title="Llamar ahora"
// // // //                                                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
// // // //                      dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
// // // //                      hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
// // // //                                             >
// // // //                                                 <Phone className="w-5 h-5" />
// // // //                                             </a>
// // // //
// // // //                                             <a
// // // //                                                 href="mailto:info@torisoftt.com"
// // // //                                                 title="Enviar email"
// // // //                                                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
// // // //                      dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
// // // //                      hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
// // // //                                             >
// // // //                                                 <Mail className="w-5 h-5" />
// // // //                                             </a>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                     </div>
// // // //
// // // //
// // // //
// // // //                             </motion.div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </section>
// // // //     );
// // // //     }
// // //
// // //
// // //
// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Calculator, Check, ArrowRight, ArrowLeft, Monitor, ShoppingCart, Code, Search, Mail, Phone, Server, Paintbrush, Wrench, MessageSquare, AlertCircle, Smartphone, Database, Globe, Lock } from 'lucide-react';
// // //
// // // type ServiceOption = {
// // //     id: string;
// // //     name: string;
// // //     basePrice: number;
// // //     description: string;
// // //     icon: any;
// // //     features: string[];
// // //     path?: { front?: string; back?: string; mobile?: string; };
// // // };
// // //
// // // type AdditionalFeature = {
// // //     id: string;
// // //     name: string;
// // //     price: number;
// // //     description: string;
// // //     icon: any;
// // //     popular?: boolean;
// // // };
// // //
// // // export default function PriceCalculator() {
// // //     const [currentStep, setCurrentStep] = useState(1);
// // //     const [selectedService, setSelectedService] = useState<string>('');
// // //     const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
// // //     const [selectedPath, setSelectedPath] = useState<string>('');
// // //
// // //     const services: ServiceOption[] = [
// // //         {
// // //             id: 'wordpress',
// // //             name: 'Sitio WordPress',
// // //             basePrice: 199,
// // //             description: 'Desarrollo de sitio web profesional con WordPress, ideal para negocios pequeños y medianos',
// // //             icon: Monitor,
// // //             features: [
// // //                 'Panel de administración intuitivo',
// // //                 'Optimización de velocidad avanzada',
// // //                 'Diseño responsive profesional',
// // //                 'Plugins premium incluidos'
// // //             ]
// // //         },
// // //         {
// // //             id: 'custom',
// // //             name: 'Desarrollo a Medida',
// // //             basePrice: 299,
// // //             description: 'Solución personalizada con tecnologías modernas y escalables',
// // //             icon: Code,
// // //             features: [
// // //                 'Arquitectura moderna',
// // //                 'API RESTful personalizada',
// // //                 'Base de datos optimizada',
// // //                 'Seguridad avanzada'
// // //             ],
// // //             path: {
// // //                 front: 'Next.js, React, Vue.js',
// // //                 back: 'Node.js, Python, Java',
// // //                 mobile: 'React Native, Flutter'
// // //             }
// // //         },
// // //         {
// // //             id: 'ecommerce',
// // //             name: 'E-commerce',
// // //             basePrice: 399,
// // //             description: 'Tienda online completa con gestión avanzada y análisis',
// // //             icon: ShoppingCart,
// // //             features: [
// // //                 'Gestión de productos avanzada',
// // //                 'Múltiples pasarelas de pago',
// // //                 'Sistema de inventario en tiempo real',
// // //                 'Analytics e informes detallados'
// // //             ]
// // //         }
// // //     ];
// // //
// // //     const developmentPaths = [
// // //         {
// // //             id: 'frontend',
// // //             name: 'Frontend',
// // //             icon: Globe,
// // //             description: 'Desarrollo de interfaz de usuario moderna y responsive',
// // //             price: 199
// // //         },
// // //         {
// // //             id: 'backend',
// // //             name: 'Backend',
// // //             icon: Database,
// // //             description: 'API y lógica de servidor robusta y escalable',
// // //             price: 299
// // //         },
// // //         {
// // //             id: 'mobile',
// // //             name: 'App Móvil',
// // //             icon: Smartphone,
// // //             description: 'Aplicación nativa para iOS y Android',
// // //             price: 399
// // //         }
// // //     ];
// // //
// // //     const additionalFeatures: AdditionalFeature[] = [
// // //         {
// // //             id: 'seo',
// // //             name: 'SEO Avanzado',
// // //             price: 99,
// // //             description: 'Optimización completa para buscadores y análisis de keywords',
// // //             icon: Search,
// // //             popular: true
// // //         },
// // //         {
// // //             id: 'security',
// // //             name: 'Seguridad Premium',
// // //             price: 149,
// // //             description: 'Protección contra ataques, firewall y monitoreo 24/7',
// // //             icon: Lock,
// // //             popular: true
// // //         },
// // //         {
// // //             id: 'maintenance',
// // //             name: 'Mantenimiento',
// // //             price: 79,
// // //             description: 'Soporte técnico prioritario y actualizaciones mensuales',
// // //             icon: Wrench
// // //         },
// // //         {
// // //             id: 'design',
// // //             name: 'Diseño UI/UX Premium',
// // //             price: 199,
// // //             description: 'Diseño personalizado con investigación de usuarios',
// // //             icon: Paintbrush
// // //         }
// // //     ];
// // //
// // //     const calculateTotal = () => {
// // //         const basePrice = services.find(s => s.id === selectedService)?.basePrice || 0;
// // //         const pathPrice = selectedService === 'custom' && selectedPath ?
// // //             developmentPaths.find(p => p.id === selectedPath)?.price || 0 : 0;
// // //         const featuresTotal = selectedFeatures.reduce((total, featureId) => {
// // //             const feature = additionalFeatures.find(f => f.id === featureId);
// // //             return total + (feature?.price || 0);
// // //         }, 0);
// // //         return basePrice + pathPrice + featuresTotal;
// // //     };
// // //
// // //     const handleRequestQuote = () => {
// // //         const selectedServiceDetails = services.find(s => s.id === selectedService);
// // //         const pathDetails = selectedPath ? developmentPaths.find(p => p.id === selectedPath) : null;
// // //
// // //         let message = `¡Hola! Me interesa cotizar un proyecto web:\n\n`;
// // //         message += `📌 Proyecto: ${selectedServiceDetails?.name}\n`;
// // //         message += `💰 Base: $${selectedServiceDetails?.basePrice}\n`;
// // //
// // //         if (pathDetails) {
// // //             message += `🛠 Desarrollo: ${pathDetails.name} (+$${pathDetails.price})\n`;
// // //         }
// // //
// // //         if (selectedFeatures.length > 0) {
// // //             message += `\n✨ Adicionales:\n`;
// // //             selectedFeatures.forEach(featureId => {
// // //                 const feature = additionalFeatures.find(f => f.id === featureId);
// // //                 message += `- ${feature?.name}: $${feature?.price}\n`;
// // //             });
// // //         }
// // //
// // //         message += `\n💵 Total: $${calculateTotal()}`;
// // //         const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
// // //         window.open(whatsappUrl, '_blank');
// // //     };
// // //
// // //     return (
// // //         <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
// // //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //                 <motion.div
// // //                     initial={{ opacity: 0, y: 20 }}
// // //                     whileInView={{ opacity: 1, y: 0 }}
// // //                     transition={{ duration: 0.5 }}
// // //                     viewport={{ once: true }}
// // //                     className="text-center mb-12"
// // //                 >
// // //                     <span className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl mb-4">
// // //                         <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
// // //                     </span>
// // //                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
// // //                         Cotizador Inteligente
// // //                     </h2>
// // //                     <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// // //                         Configura tu proyecto ideal en pocos pasos
// // //                     </p>
// // //                 </motion.div>
// // //
// // //                 <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
// // //                     <div className="lg:col-span-2 space-y-6">
// // //                         {currentStep === 1 && (
// // //                             <motion.div
// // //                                 initial={{ opacity: 0, x: -20 }}
// // //                                 animate={{ opacity: 1, x: 0 }}
// // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// // //                             >
// // //                                 <div className="grid gap-4">
// // //                                     {services.map((service) => (
// // //                                         <motion.div
// // //                                             key={service.id}
// // //                                             whileHover={{ scale: 1.01 }}
// // //                                             className={`p-6 rounded-xl cursor-pointer border-2 transition-all
// // //                                                 ${selectedService === service.id
// // //                                                 ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // //                                                 : 'border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50'
// // //                                             }`}
// // //                                             onClick={() => setSelectedService(service.id)}
// // //                                         >
// // //                                             <div className="flex flex-col md:flex-row gap-4">
// // //                                                 <div className={`p-3 rounded-xl shrink-0
// // //                                                     ${selectedService === service.id
// // //                                                     ? 'bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900'
// // //                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// // //                                                 }`}
// // //                                                 >
// // //                                                     <service.icon className="w-6 h-6" />
// // //                                                 </div>
// // //                                                 <div className="flex-1">
// // //                                                     <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-3">
// // //                                                         <div>
// // //                                                             <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
// // //                                                                 {service.name}
// // //                                                             </h4>
// // //                                                             <p className="text-gray-600 dark:text-gray-400">
// // //                                                                 {service.description}
// // //                                                             </p>
// // //                                                         </div>
// // //                                                         <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
// // //                                                             ${service.basePrice}
// // //                                                         </div>
// // //                                                     </div>
// // //                                                     <div className="grid sm:grid-cols-2 gap-3">
// // //                                                         {service.features.map((feature, index) => (
// // //                                                             <div
// // //                                                                 key={index}
// // //                                                                 className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
// // //                                                             >
// // //                                                                 <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
// // //                                                                 <span>{feature}</span>
// // //                                                             </div>
// // //                                                         ))}
// // //                                                     </div>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </motion.div>
// // //                                     ))}
// // //                                 </div>
// // //                             </motion.div>
// // //                         )}
// // //
// // //                         {currentStep === 2 && selectedService === 'custom' && (
// // //                             <motion.div
// // //                                 initial={{ opacity: 0, x: -20 }}
// // //                                 animate={{ opacity: 1, x: 0 }}
// // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// // //                             >
// // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// // //                                     Selecciona tu Camino de Desarrollo
// // //                                 </h3>
// // //                                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                                     {developmentPaths.map((path) => (
// // //                                         <motion.div
// // //                                             key={path.id}
// // //                                             whileHover={{ scale: 1.02 }}
// // //                                             className={`p-5 rounded-xl cursor-pointer border-2 transition-all
// // //                                                 ${selectedPath === path.id
// // //                                                 ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // //                                                 : 'border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50'
// // //                                             }`}
// // //                                             onClick={() => setSelectedPath(path.id)}
// // //                                         >
// // //                                             <div className="flex flex-col items-center text-center gap-3">
// // //                                                 <div className={`p-3 rounded-xl
// // //                                                     ${selectedPath === path.id
// // //                                                     ? 'bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900'
// // //                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// // //                                                 }`}
// // //                                                 >
// // //                                                     <path.icon className="w-6 h-6" />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
// // //                                                         {path.name}
// // //                                                     </h4>
// // //                                                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
// // //                                                         {path.description}
// // //                                                     </p>
// // //                                                     <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
// // //                                                         +${path.price}
// // //                                                     </span>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </motion.div>
// // //                                     ))}
// // //                                 </div>
// // //                             </motion.div>
// // //                         )}
// // //
// // //                         {((currentStep === 2 && selectedService !== 'custom') || currentStep === 3) && (
// // //                             <motion.div
// // //                                 initial={{ opacity: 0, x: -20 }}
// // //                                 animate={{ opacity: 1, x: 0 }}
// // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// // //                             >
// // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// // //                                     Personaliza tu Proyecto
// // //                                 </h3>
// // //                                 <div className="grid sm:grid-cols-2 gap-4">
// // //                                     {additionalFeatures.map((feature) => (
// // //                                         <motion.div
// // //                                             key={feature.id}
// // //                                             whileHover={{ scale: 1.02 }}
// // //                                             className={`relative p-5 rounded-xl cursor-pointer border-2 transition-all
// // //
// // //
// // //
// // //
// // //
// // //                                             ${selectedFeatures.includes(feature.id)
// // //                                             ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
// // //                                             : 'border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-400/50'
// // //                                             }`}
// // //                                             onClick={() => {
// // //                                                 const newFeatures = selectedFeatures.includes(feature.id)
// // //                                                     ? selectedFeatures.filter(id => id !== feature.id)
// // //                                                     : [...selectedFeatures, feature.id];
// // //                                                 setSelectedFeatures(newFeatures);
// // //                                             }}
// // //                                         >
// // //                                             {feature.popular && (
// // //                                                 <span className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white dark:text-gray-900 text-sm font-medium rounded-full shadow-lg">
// // //                                                     Popular
// // //                                                 </span>
// // //                                             )}
// // //                                             <div className="flex items-start gap-4">
// // //                                                 <div className={`p-3 rounded-xl shrink-0
// // //                                                 ${selectedFeatures.includes(feature.id)
// // //                                                 ? 'bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900'
// // //                                                 : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// // //                                             }`}
// // //                                                 >
// // //                                                     <feature.icon className="w-5 h-5" />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <div className="flex justify-between items-start">
// // //                                                         <h4 className="font-medium text-gray-900 dark:text-white">
// // //                                                             {feature.name}
// // //                                                         </h4>
// // //                                                         <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
// // //                                                             +${feature.price}
// // //                                                         </span>
// // //                                                     </div>
// // //                                                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
// // //                                                         {feature.description}
// // //                                                     </p>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </motion.div>
// // //                                     ))}
// // //                                 </div>
// // //                             </motion.div>
// // //                         )}
// // //
// // //                         {currentStep === 4 && (
// // //                             <motion.div
// // //                                 initial={{ opacity: 0, x: -20 }}
// // //                                 animate={{ opacity: 1, x: 0 }}
// // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// // //                             >
// // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// // //                                     Resumen del Proyecto
// // //                                 </h3>
// // //                                 <div className="space-y-6">
// // //                                     <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
// // //                                         <div className="flex justify-between items-start mb-2">
// // //                                             <div>
// // //                                                 <h4 className="font-medium text-gray-900 dark:text-white">
// // //                                                     {services.find(s => s.id === selectedService)?.name}
// // //                                                 </h4>
// // //                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
// // //                                                     Servicio base
// // //                                                 </p>
// // //                                             </div>
// // //                                             <span className="text-lg font-semibold text-gray-900 dark:text-white">
// // //                                                 ${services.find(s => s.id === selectedService)?.basePrice}
// // //                                             </span>
// // //                                         </div>
// // //                                     </div>
// // //
// // //                                     {selectedPath && (
// // //                                         <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
// // //                                             <div className="flex justify-between items-start mb-2">
// // //                                                 <div>
// // //                                                     <h4 className="font-medium text-gray-900 dark:text-white">
// // //                                                         {developmentPaths.find(p => p.id === selectedPath)?.name}
// // //                                                     </h4>
// // //                                                     <p className="text-sm text-gray-600 dark:text-gray-400">
// // //                                                         Camino de desarrollo
// // //                                                     </p>
// // //                                                 </div>
// // //                                                 <span className="text-lg font-semibold text-gray-900 dark:text-white">
// // //                                                     +${developmentPaths.find(p => p.id === selectedPath)?.price}
// // //                                                 </span>
// // //                                             </div>
// // //                                         </div>
// // //                                     )}
// // //
// // //                                     {selectedFeatures.length > 0 && (
// // //                                         <div>
// // //                                             <h4 className="font-medium text-gray-900 dark:text-white mb-3">
// // //                                                 Características Adicionales
// // //                                             </h4>
// // //                                             <div className="space-y-3">
// // //                                                 {selectedFeatures.map(featureId => {
// // //                                                     const feature = additionalFeatures.find(f => f.id === featureId);
// // //                                                     return (
// // //                                                         <div
// // //                                                             key={featureId}
// // //                                                             className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
// // //                                                         >
// // //                                                             <span className="text-gray-700 dark:text-gray-300">
// // //                                                                 {feature?.name}
// // //                                                             </span>
// // //                                                             <span className="font-medium text-gray-900 dark:text-white">
// // //                                                                 +${feature?.price}
// // //                                                             </span>
// // //                                                         </div>
// // //                                                     );
// // //                                                 })}
// // //                                             </div>
// // //                                         </div>
// // //                                     )}
// // //
// // //                                     <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
// // //                                         <div className="flex items-start gap-3">
// // //                                             <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
// // //                                             <div>
// // //                                                 <h4 className="font-medium text-gray-900 dark:text-white mb-1">
// // //                                                     Ahorro Estimado
// // //                                                 </h4>
// // //                                                 <p className="text-sm text-gray-600 dark:text-gray-400">
// // //                                                     El precio promedio del mercado para un proyecto similar es de ${calculateTotal() * 1.8}.
// // //                                                     Tu ahorro estimado es de ${(calculateTotal() * 1.8 - calculateTotal()).toFixed(2)}.
// // //                                                 </p>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </motion.div>
// // //                         )}
// // //                     </div>
// // //
// // //                     {/* Floating Summary Card */}
// // //                     <div className="lg:col-span-1">
// // //                         <div className="sticky top-24">
// // //                             <motion.div
// // //                                 initial={{ opacity: 0, y: 20 }}
// // //                                 animate={{ opacity: 1, y: 0 }}
// // //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// // //                             >
// // //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center justify-between">
// // //                                     Total Estimado
// // //                                     <span className="text-2xl text-blue-600 dark:text-blue-400">
// // //                                         ${calculateTotal()}
// // //                                     </span>
// // //                                 </h3>
// // //
// // //                                 <div className="space-y-6">
// // //                                     <div className="space-y-2">
// // //                                         <div className="flex justify-between text-sm">
// // //                                             <span className="text-gray-600 dark:text-gray-400">Progreso</span>
// // //                                             <span className="text-gray-900 dark:text-white font-medium">
// // //                                                 {currentStep}/4
// // //                                             </span>
// // //                                         </div>
// // //                                         <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
// // //                                             <motion.div
// // //                                                 initial={{ width: 0 }}
// // //                                                 animate={{ width: `${(currentStep / 4) * 100}%` }}
// // //                                                 className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
// // //                                             />
// // //                                         </div>
// // //                                     </div>
// // //
// // //                                     <div className="flex flex-col gap-3">
// // //                                         {currentStep > 1 && (
// // //                                             <button
// // //                                                 onClick={() => setCurrentStep(prev => prev - 1)}
// // //                                                 className="w-full py-3 px-4 rounded-xl border-2 border-gray-200
// // //                                                     dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium
// // //                                                     hover:border-blue-500 dark:hover:border-blue-400 transition-colors
// // //                                                     inline-flex items-center justify-center gap-2"
// // //                                             >
// // //                                                 <ArrowLeft className="w-4 h-4" />
// // //                                                 Anterior
// // //                                             </button>
// // //                                         )}
// // //
// // //                                         {currentStep < 4 && selectedService && (
// // //                                             (!selectedPath && selectedService === 'custom' && currentStep === 2 ? false : true) && (
// // //                                                 <button
// // //                                                     onClick={() => setCurrentStep(prev => prev + 1)}
// // //                                                     className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600
// // //                                                         dark:from-blue-400 dark:to-blue-500 text-white dark:text-gray-900
// // //                                                         rounded-xl font-medium hover:opacity-90 transition-opacity inline-flex
// // //                                                         items-center justify-center gap-2 shadow-lg"
// // //                                                 >
// // //                                                     Siguiente
// // //                                                     <ArrowRight className="w-4 h-4" />
// // //                                                 </button>
// // //                                             )
// // //                                         )}
// // //
// // //                                         {currentStep === 4 && (
// // //                                             <button
// // //                                                 onClick={handleRequestQuote}
// // //                                                 className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600
// // //                                                     dark:from-blue-400 dark:to-blue-500 text-white dark:text-gray-900
// // //                                                     rounded-xl font-medium hover:opacity-90 transition-opacity inline-flex
// // //                                                     items-center justify-center gap-2 shadow-lg"
// // //                                             >
// // //                                                 <MessageSquare className="w-4 h-4" />
// // //                                                 Solicitar por WhatsApp
// // //                                             </button>
// // //                                         )}
// // //                                     </div>
// // //
// // //                                     <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
// // //                                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
// // //                                             ¿Prefieres contactarnos directamente?
// // //                                         </p>
// // //                                         <div className="flex gap-4 justify-center">
// // //                                             <a
// // //                                                 href="tel:+593984264910"
// // //                                                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
// // //                                                     dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20
// // //                                                     hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
// // //                                             >
// // //                                                 <Phone className="w-5 h-5" />
// // //                                             </a>
// // //                                             <a
// // //                                                 href="mailto:info@torisoftt.com"
// // //                                                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
// // //                                                     dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20
// // //                                                     hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
// // //                                             >
// // //                                                 <Mail className="w-5 h-5" />
// // //                                             </a>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </motion.div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // }
// //
// //
// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Calculator, Check, ArrowRight, ArrowLeft, Monitor, ShoppingCart, Code, Search, Mail, Phone, Server, Paintbrush, Wrench, MessageSquare, AlertCircle, FileText, Award } from 'lucide-react';
// //
// // type ServiceOption = {
// //     id: string;
// //     name: string;
// //     basePrice: number;
// //     description: string;
// //     icon: any;
// //     features: string[];
// //     purpose?: string;
// // };
// //
// // type AdditionalFeature = {
// //     id: string;
// //     name: string;
// //     price: number;
// //     description: string;
// //     icon: any;
// //     popular?: boolean;
// // };
// //
// // type WebsiteType = {
// //     id: string;
// //     name: string;
// //     description: string;
// //     icon: any;
// //     features: string[];
// //     basePrice: number;
// // };
// //
// // export default function PriceCalculator() {
// //     const [currentStep, setCurrentStep] = useState(1);
// //     const [selectedService, setSelectedService] = useState<string>('');
// //     const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
// //     const [selectedWebsiteType, setSelectedWebsiteType] = useState<string>('');
// //
// //     const websiteTypes: WebsiteType[] = [
// //         {
// //             id: 'informative',
// //             name: 'Sitio Informativo',
// //             description: 'Perfecto para presentar tu negocio y servicios de manera profesional',
// //             icon: FileText,
// //             features: [
// //                 'Páginas informativas',
// //                 'Formulario de contacto',
// //                 'Integración con redes sociales',
// //                 'Blog corporativo'
// //             ],
// //             basePrice: 299
// //         },
// //         {
// //             id: 'product-showcase',
// //             name: 'Catálogo Digital',
// //             description: 'Ideal para mostrar productos y servicios con detalles',
// //             icon: Monitor,
// //             features: [
// //                 'Catálogo de productos',
// //                 'Galería avanzada',
// //                 'Filtros de búsqueda',
// //                 'Solicitudes de cotización'
// //             ],
// //             basePrice: 399
// //         },
// //         {
// //             id: 'authority',
// //             name: 'Sitio de Autoridad',
// //             description: 'Diseñado para posicionarte como referente en tu industria',
// //             icon: Award,
// //             features: [
// //                 'Blog avanzado',
// //                 'Sistema de newsletter',
// //                 'Recursos descargables',
// //                 'Área de membresía'
// //             ],
// //             basePrice: 499
// //         }
// //     ];
// //
// //     const services: ServiceOption[] = [
// //         {
// //             id: 'wordpress',
// //             name: 'WordPress/PHP',
// //             basePrice: 199,
// //             description: 'Desarrollo profesional con WordPress, ideal para sitios dinámicos y blogs',
// //             icon: Monitor,
// //             features: [
// //                 'Panel administrable',
// //                 'Temas personalizados',
// //                 'Plugins premium',
// //                 'Optimización SEO básica'
// //             ]
// //         },
// //         {
// //             id: 'custom',
// //             name: 'Desarrollo a Medida',
// //             basePrice: 399,
// //             description: 'Solución personalizada con tecnologías modernas y escalables',
// //             icon: Code,
// //             features: [
// //                 'Arquitectura moderna',
// //                 'API personalizada',
// //                 'Alto rendimiento',
// //                 'Máxima personalización'
// //             ]
// //         },
// //         {
// //             id: 'ecommerce',
// //             name: 'E-commerce',
// //             basePrice: 599,
// //             description: 'Tienda online completa con gestión avanzada de productos',
// //             icon: ShoppingCart,
// //             features: [
// //                 'Catálogo avanzado',
// //                 'Pasarela de pagos',
// //                 'Gestión de stock',
// //                 'Panel de análisis'
// //             ]
// //         }
// //     ];
// //
// //     const additionalFeatures: AdditionalFeature[] = [
// //         {
// //             id: 'seo',
// //             name: 'SEO Avanzado',
// //             price: 199,
// //             description: 'Optimización completa para buscadores y estrategia de keywords',
// //             icon: Search,
// //             popular: true
// //         },
// //         {
// //             id: 'hosting',
// //             name: 'Hosting Premium',
// //             price: 99,
// //             description: 'Alojamiento de alto rendimiento con SSL incluido',
// //             icon: Server
// //         },
// //         {
// //             id: 'maintenance',
// //             name: 'Mantenimiento',
// //             price: 79,
// //             description: 'Actualizaciones mensuales y soporte técnico prioritario',
// //             icon: Wrench
// //         },
// //         {
// //             id: 'design',
// //             name: 'Diseño Premium',
// //             price: 299,
// //             description: 'Diseño exclusivo adaptado a tu marca e identidad visual',
// //             icon: Paintbrush,
// //             popular: true
// //         }
// //     ];
// //
// //     const calculateTotal = () => {
// //         const basePrice = services.find(s => s.id === selectedService)?.basePrice || 0;
// //         const websiteTypePrice = selectedWebsiteType ?
// //             websiteTypes.find(w => w.id === selectedWebsiteType)?.basePrice || 0 : 0;
// //         const featuresTotal = selectedFeatures.reduce((total, featureId) => {
// //             const feature = additionalFeatures.find(f => f.id === featureId);
// //             return total + (feature?.price || 0);
// //         }, 0);
// //         return basePrice + websiteTypePrice + featuresTotal;
// //     };
// //
// //     const handleRequestQuote = () => {
// //         const selectedServiceDetails = services.find(s => s.id === selectedService);
// //         const websiteTypeDetails = websiteTypes.find(w => w.id === selectedWebsiteType);
// //
// //         let message = `¡Hola! Me interesa cotizar un proyecto web:\n\n`;
// //         message += `📌 Tipo de Sitio: ${websiteTypeDetails?.name}\n`;
// //         message += `🛠 Tecnología: ${selectedServiceDetails?.name}\n`;
// //         message += `💰 Base: $${(selectedServiceDetails?.basePrice || 0) + (websiteTypeDetails?.basePrice || 0)}\n`;
// //
// //         if (selectedFeatures.length > 0) {
// //             message += `\n✨ Adicionales:\n`;
// //             selectedFeatures.forEach(featureId => {
// //                 const feature = additionalFeatures.find(f => f.id === featureId);
// //                 message += `- ${feature?.name}: $${feature?.price}\n`;
// //             });
// //         }
// //
// //         message += `\n💵 Total: $${calculateTotal()}`;
// //         const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
// //         window.open(whatsappUrl, '_blank');
// //     };
// //
// //     return (
// //         <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
// //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                 <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.5 }}
// //                     viewport={{ once: true }}
// //                     className="text-center mb-12"
// //                 >
// //                     <span className="inline-flex items-center justify-center p-3 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-xl mb-4">
// //                         <Calculator className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
// //                     </span>
// //                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
// //                         Cotizador Instantáneo
// //                     </h2>
// //                     <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// //                         Configura tu proyecto web ideal en tres simples pasos
// //                     </p>
// //                 </motion.div>
// //
// //                 {/* Progress Steps */}
// //                 <div className="mb-12">
// //                     <div className="flex justify-center items-center">
// //                         {[1, 2, 3].map((step, index) => (
// //                             <React.Fragment key={step}>
// //                                 <div className="flex items-center">
// //                                     <div className={`w-10 h-10 rounded-full flex items-center justify-center
// //                                         ${currentStep >= step
// //                                         ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// //                                         : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
// //                                     }`}
// //                                     >
// //                                         {currentStep > step ? (
// //                                             <Check className="w-5 h-5" />
// //                                         ) : (
// //                                             <span className="font-medium">{step}</span>
// //                                         )}
// //                                     </div>
// //                                     <span className="ml-2 font-medium text-gray-900 dark:text-white">
// //                                         {step === 1 ? 'Tipo de Sitio' : step === 2 ? 'Tecnología' : 'Personalización'}
// //                                     </span>
// //                                 </div>
// //                                 {index < 2 && (
// //                                     <div className={`w-24 h-1 mx-4 rounded
// //                                         ${currentStep > step
// //                                         ? 'bg-accent-red dark:bg-accent-yellow'
// //                                         : 'bg-gray-200 dark:bg-gray-700'
// //                                     }`}
// //                                     />
// //                                 )}
// //                             </React.Fragment>
// //                         ))}
// //                     </div>
// //                 </div>
// //
// //                 <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
// //                     <div className="lg:col-span-2 space-y-6">
// //                         {/* Step 1: Website Type Selection */}
// //                         {currentStep === 1 && (
// //                             <motion.div
// //                                 initial={{ opacity: 0, x: -20 }}
// //                                 animate={{ opacity: 1, x: 0 }}
// //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// //                             >
// //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// //                                     Selecciona el Tipo de Sitio Web
// //                                 </h3>
// //                                 <div className="grid gap-4">
// //                                     {websiteTypes.map((type) => (
// //                                         <motion.div
// //                                             key={type.id}
// //                                             whileHover={{ scale: 1.01 }}
// //                                             className={`p-6 rounded-xl cursor-pointer border-2 transition-all
// //                                                 ${selectedWebsiteType === type.id
// //                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
// //                                                 : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
// //                                             }`}
// //                                             onClick={() => setSelectedWebsiteType(type.id)}
// //                                         >
// //                                             <div className="flex flex-col md:flex-row gap-4">
// //                                                 <div className={`p-3 rounded-xl shrink-0
// //                                                     ${selectedWebsiteType === type.id
// //                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// //                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// //                                                 }`}
// //                                                 >
// //                                                     <type.icon className="w-6 h-6" />
// //                                                 </div>
// //                                                 <div className="flex-1">
// //                                                     <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-3">
// //                                                         <div>
// //                                                             <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
// //                                                                 {type.name}
// //                                                             </h4>
// //                                                             <p className="text-gray-600 dark:text-gray-400">
// //                                                                 {type.description}
// //                                                             </p>
// //                                                         </div>
// //                                                         <div className="text-xl font-bold text-accent-red dark:text-accent-yellow">
// //                                                             ${type.basePrice}
// //                                                         </div>
// //                                                     </div>
// //                                                     <div className="grid sm:grid-cols-2 gap-3">
// //                                                         {type.features.map((feature, index) => (
// //                                                             <div
// //                                                                 key={index}
// //                                                                 className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
// //                                                             >
// //                                                                 <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
// //                                                                 <span>{feature}</span>
// //                                                             </div>
// //                                                         ))}
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </motion.div>
// //                                     ))}
// //                                 </div>
// //                             </motion.div>
// //                         )}
// //
// //                         {/* Step 2: Service Selection */}
// //                         {currentStep === 2 && (
// //                             <motion.div
// //                                 initial={{ opacity: 0, x: -20 }}
// //                                 animate={{ opacity: 1, x: 0 }}
// //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// //                             >
// //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// //                                     Selecciona la Tecnología
// //                                 </h3>
// //                                 <div className="grid gap-4">
// //                                     {services.map((service) => (
// //                                         <motion.div
// //                                             key={service.id}
// //                                             whileHover={{ scale: 1.01 }}
// //                                             className={`p-6 rounded-xl cursor-pointer border-2 transition-all
// //                                                 ${selectedService === service.id
// //                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
// //                                                 : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
// //                                             }`}
// //                                             onClick={() => setSelectedService(service.id)}
// //                                         >
// //                                             <div className="flex flex-col md:flex-row gap-4">
// //                                                 <div className={`p-3 rounded-xl shrink-0
// //                                                     ${selectedService === service.id
// //                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// //                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// //                                                 }`}
// //                                                 >
// //                                                     <service.icon className="w-6 h-6" />
// //                                                 </div>
// //                                                 <div className="flex-1">
// //                                                     <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-3">
// //                                                         <div>
// //                                                             <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
// //                                                                 {service.name}
// //                                                             </h4>
// //                                                             <p className="text-gray-600 dark:text-gray-400">
// //                                                                 {service.description}
// //                                                             </p>
// //                                                         </div>
// //                                                         <div className="text-xl font-bold text-accent-red dark:text-accent-yellow">
// //                                                             ${service.basePrice}
// //                                                         </div>
// //                                                     </div>
// //                                                     <div className="grid sm:grid-cols-2 gap-3">
// //                                                         {service.features.map((feature, index) => (
// //                                                             <div
// //                                                                 key={index}
// //                                                                 className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
// //                                                             >
// //                                                                 <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
// //                                                                 <span>{feature}</span>
// //                                                             </div>
// //                                                         ))}
// //                                                     </div>
// //                                                 </div>
// //                                             </div>
// //                                         </motion.div>
// //                                     ))}
// //                                 </div>
// //                             </motion.div>
// //                         )}
// //
// //                         {/* Step 3: Additional Features */}
// //                         {currentStep === 3 && (
// //                             <motion.div
// //                                 initial={{ opacity: 0, x: -20 }}
// //                                 animate={{ opacity: 1, x: 0 }}
// //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// //                             >
// //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
// //                                     Personaliza tu Proyecto
// //                                 </h3>
// //                                 <div className="grid sm:grid-cols-2 gap-4">
// //                                     {additionalFeatures.map((feature) => (
// //                                         <motion.div
// //                                             key={feature.id}
// //                                             whileHover={{ scale: 1.02 }}
// //                                             className={`relative p-5 rounded-xl cursor-pointer border-2 transition-all
// //                                                 ${selectedFeatures.includes(feature.id)
// //                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
// //                                                 : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
// //                                             }`}
// //                                             onClick={() => {
// //                                                 const newFeatures = selectedFeatures.includes(feature.id)
// //                                                     ? selectedFeatures.filter(id => id !== feature.id)
// //                                                     : [...selectedFeatures, feature.id];
// //                                                 setSelectedFeatures(newFeatures);
// //                                             }}
// //                                         >
// //                                             {feature.popular && (
// //                                                 <span className="absolute -top-3 -right-3 px-3 py-1 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium rounded-full shadow-lg">
// //                                                     Popular
// //                                                 </span>
// //                                             )}
// //                                             <div className="flex items-start gap-4">
// //                                                 <div className={`p-3 rounded-xl shrink-0
// //                                                     ${selectedFeatures.includes(feature.id)
// //                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// //                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
// //                                                 }`}
// //                                                 >
// //                                                     <feature.icon className="w-5 h-5" />
// //                                                 </div>
// //                                                 <div>
// //                                                     <div className="flex justify-between items-start">
// //                                                         <h4 className="font-medium text-gray-900 dark:text-white">
// //                                                             {feature.name}
// //                                                         </h4>
// //                                                         <span className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
// //                                                             +${feature.price}
// //                                                         </span>
// //                                                     </div>
// //                                                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
// //                                                         {feature.description}
// //                                                     </p>
// //                                                 </div>
// //                                             </div>
// //                                         </motion.div>
// //                                     ))}
// //                                 </div>
// //                             </motion.div>
// //                         )}
// //                     </div>
// //
// //                     {/* Floating Summary Card */}
// //                     <div className="lg:col-span-1">
// //                         <div className="sticky top-24">
// //                             <motion.div
// //                                 initial={{ opacity: 0, y: 20 }}
// //                                 animate={{ opacity: 1, y: 0 }}
// //                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
// //                             >
// //                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center justify-between">
// //                                     Total Estimado
// //                                     <span className="text-2xl text-accent-red dark:text-accent-yellow">
// //                                         ${calculateTotal()}
// //                                     </span>
// //                                 </h3>
// //
// //                                 <div className="space-y-6">
// //                                     <div className="space-y-2">
// //                                         <div className="flex justify-between text-sm">
// //                                             <span className="text-gray-600 dark:text-gray-400">Progreso</span>
// //                                             <span className="text-gray-900 dark:text-white font-medium">
// //                                                 {currentStep}/3
// //                                             </span>
// //                                         </div>
// //                                         <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
// //                                             <motion.div
// //                                                 initial={{ width: 0 }}
// //                                                 animate={{ width: `${(currentStep / 3) * 100}%` }}
// //                                                 className="h-full bg-accent-red dark:bg-accent-yellow rounded-full"
// //                                             />
// //                                         </div>
// //                                     </div>
// //
// //                                     <div className="space-y-4">
// //                                         {currentStep > 1 && (
// //                                             <button
// //                                                 onClick={() => setCurrentStep(prev => prev - 1)}
// //                                                 className="w-full py-3 px-4 rounded-xl border-2 border-gray-200
// //                                                     dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium
// //                                                     hover:border-accent-red dark:hover:border-accent-yellow transition-colors
// //                                                     inline-flex items-center justify-center gap-2"
// //                                             >
// //                                                 <ArrowLeft className="w-4 h-4" />
// //                                                 Anterior
// //                                             </button>
// //                                         )}
// //
// //                                         {currentStep < 3 && selectedWebsiteType && (currentStep === 1 || selectedService) && (
// //                                             <button
// //                                                 onClick={() => setCurrentStep(prev => prev + 1)}
// //                                                 className="w-full py-3 px-4 bg-accent-red dark:bg-accent-yellow
// //                                                     text-white dark:text-gray-900 rounded-xl font-medium
// //                                                     hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
// //                                                     transition-colors inline-flex items-center justify-center gap-2"
// //                                             >
// //                                                 Siguiente
// //                                                 <ArrowRight className="w-4 h-4" />
// //                                             </button>
// //                                         )}
// //
// //                                         {currentStep === 3 && (
// //                                             <button
// //                                                 onClick={handleRequestQuote}
// //                                                 className="w-full py-3 px-4 bg-accent-red dark:bg-accent-yellow
// //                                                     text-white dark:text-gray-900 rounded-xl font-medium
// //                                                     hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
// //                                                     transition-colors inline-flex items-center justify-center gap-2"
// //                                             >
// //                                                 <MessageSquare className="w-4 h-4" />
// //                                                 Solicitar por WhatsApp
// //                                             </button>
// //                                         )}
// //                                     </div>
// //
// //                                     <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
// //                                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
// //                                             ¿Prefieres contactarnos directamente?
// //                                         </p>
// //                                         <div className="flex gap-4 justify-center">
// //                                             <a
// //                                                 href="tel:+593984264910"
// //                                                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
// //                                                     dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
// //                                                     hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
// //                                             >
// //                                                 <Phone className="w-5 h-5" />
// //                                             </a>
// //                                             <a
// //                                                 href="mailto:info@torisoftt.com"
// //                                                 className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
// //                                                     dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
// //                                                     hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
// //                                             >
// //                                                 <Mail className="w-5 h-5" />
// //                                             </a>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }
//
//
//
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calculator, Check, ArrowRight, ArrowLeft, Monitor, ShoppingCart, Code, Search, Mail, Phone, Server, Paintbrush, Wrench, MessageSquare, AlertCircle, Globe, Database, Smartphone, Store } from 'lucide-react';
// import Image from 'next/image';
//
// type ServicePath = {
//     id: string;
//     name: string;
//     description: string;
//     icon: any;
//     basePrice: number;
//     features: string[];
//     image?: string;
// };
//
// type ServiceOption = {
//     id: string;
//     name: string;
//     description: string;
//     icon: any;
//     basePrice: number;
//     features: string[];
//     paths: ServicePath[];
//     image: string;
// };
//
// type AdditionalFeature = {
//     id: string;
//     name: string;
//     price: number;
//     description: string;
//     icon: any;
//     popular?: boolean;
// };
//
// export default function PriceCalculator() {
//     const [currentStep, setCurrentStep] = useState(1);
//     const [selectedService, setSelectedService] = useState<string>('');
//     const [selectedPath, setSelectedPath] = useState<string>('');
//     const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
//
//     const services: ServiceOption[] = [
//         {
//             id: 'wordpress',
//             name: 'WordPress/PHP',
//             description: 'Desarrollo profesional con WordPress, ideal para sitios dinámicos y escalables',
//             icon: Monitor,
//             basePrice: 199,
//             image: '/ilustraciones/illustrate-a-wordpress-development-scene-with-a-hi__30684.png',
//             features: [
//                 'Panel administrable intuitivo',
//                 'Temas personalizados',
//                 'Plugins premium incluidos',
//                 'Optimización básica'
//             ],
//             paths: [
//                 {
//                     id: 'informative',
//                     name: 'Sitio Informativo',
//                     description: 'Ideal para presentar tu negocio de manera profesional',
//                     icon: Globe,
//                     basePrice: 299,
//                     image: '/ilustraciones/an-outdoor-cafe-scene-with-two-middleeastern-men-a__30688.png',
//                     features: [
//                         'Páginas informativas',
//                         'Blog corporativo',
//                         'Formularios de contacto',
//                         'Integración social'
//                     ]
//                 },
//                 {
//                     id: 'catalog',
//                     name: 'Catálogo Digital',
//                     description: 'Perfecto para mostrar productos y servicios',
//                     icon: Store,
//                     basePrice: 399,
//                     image: '/ilustraciones/a-professional-setting-with-three-asian-women-and-__30689.png',
//                     features: [
//                         'Catálogo avanzado',
//                         'Galería de productos',
//                         'Filtros de búsqueda',
//                         'Cotizaciones online'
//                     ]
//                 },
//                 {
//                     id: 'authority',
//                     name: 'Sitio de Autoridad',
//                     description: 'Para posicionarte como referente en tu industria',
//                     icon: Globe,
//                     basePrice: 499,
//                     image: '/ilustraciones/diverse-group-of-four-people-in-a-modern-office-__30691.png',
//                     features: [
//                         'Blog avanzado',
//                         'Sistema de membresía',
//                         'Recursos descargables',
//                         'Newsletter integrado'
//                     ]
//                 }
//             ]
//         },
//         {
//             id: 'custom',
//             name: 'Desarrollo a Medida',
//             description: 'Solución personalizada con tecnologías modernas',
//             icon: Code,
//             basePrice: 399,
//             image: '/ilustraciones/create-an-image-of-an-asian-female-developer-colla__30686.png',
//             features: [
//                 'Arquitectura moderna',
//                 'Alto rendimiento',
//                 'Personalización total',
//                 'Escalabilidad'
//             ],
//             paths: [
//                 {
//                     id: 'frontend',
//                     name: 'Frontend',
//                     description: 'Desarrollo con Next.js/React',
//                     icon: Monitor,
//                     basePrice: 299,
//                     features: [
//                         'UI/UX moderno',
//                         'Componentes reutilizables',
//                         'Optimización SEO',
//                         'PWA support'
//                     ]
//                 },
//                 {
//                     id: 'backend',
//                     name: 'Backend',
//                     description: 'APIs con Node.js/Python',
//                     icon: Database,
//                     basePrice: 399,
//                     features: [
//                         'REST APIs',
//                         'GraphQL',
//                         'Microservicios',
//                         'Cloud deployment'
//                     ]
//                 },
//                 {
//                     id: 'mobile',
//                     name: 'App Móvil',
//                     description: 'Desarrollo con React Native/Flutter',
//                     icon: Smartphone,
//                     basePrice: 499,
//                     features: [
//                         'iOS y Android',
//                         'Push notifications',
//                         'Offline mode',
//                         'App Store ready'
//                     ]
//                 }
//             ]
//         },
//         {
//             id: 'ecommerce',
//             name: 'E-commerce',
//             description: 'Tienda online completa con gestión avanzada',
//             icon: ShoppingCart,
//             basePrice: 599,
//             image: '/ilustraciones/design-an-illustration-of-a-black-male-developer-s__30687.png',
//             features: [
//                 'Gestión de productos',
//                 'Pasarela de pagos',
//                 'Panel de control',
//                 'Reportes avanzados'
//             ],
//             paths: [
//                 {
//                     id: 'basic',
//                     name: 'Tienda Básica',
//                     description: 'Ideal para emprendedores',
//                     icon: Store,
//                     basePrice: 699,
//                     features: [
//                         'Hasta 100 productos',
//                         'PayPal/Stripe',
//                         'Gestión básica',
//                         'SEO básico'
//                     ]
//                 },
//                 {
//                     id: 'advanced',
//                     name: 'Tienda Avanzada',
//                     description: 'Para negocios en crecimiento',
//                     icon: ShoppingCart,
//                     basePrice: 999,
//                     features: [
//                         'Productos ilimitados',
//                         'Multi-pasarela',
//                         'CRM integrado',
//                         'Marketing tools'
//                     ]
//                 },
//                 {
//                     id: 'marketplace',
//                     name: 'Marketplace',
//                     description: 'Plataforma multi-vendedor',
//                     icon: Store,
//                     basePrice: 1499,
//                     features: [
//                         'Multi-vendedor',
//                         'Comisiones',
//                         'Chat integrado',
//                         'Analytics avanzado'
//                     ]
//                 }
//             ]
//         }
//     ];
//
//     const additionalFeatures: AdditionalFeature[] = [
//         {
//             id: 'seo',
//             name: 'SEO Avanzado',
//             price: 199,
//             description: 'Optimización completa para buscadores',
//             icon: Search,
//             popular: true
//         },
//         {
//             id: 'hosting',
//             name: 'Hosting Premium',
//             price: 99,
//             description: 'Alojamiento de alto rendimiento con SSL',
//             icon: Server
//         },
//         {
//             id: 'maintenance',
//             name: 'Mantenimiento',
//             price: 29,
//             description: 'Soporte técnico y actualizaciones',
//             icon: Wrench
//         },
//         {
//             id: 'design',
//             name: 'Diseño Premium',
//             price: 299,
//             description: 'Diseño exclusivo y personalizado',
//             icon: Paintbrush,
//             popular: true
//         }
//     ];
//
//     const selectedServiceData = services.find(s => s.id === selectedService);
//     const selectedPathData = selectedServiceData?.paths.find(p => p.id === selectedPath);
//
//     const calculateTotal = () => {
//         const basePrice = selectedServiceData?.basePrice || 0;
//         const pathPrice = selectedPathData?.basePrice || 0;
//         const featuresTotal = selectedFeatures.reduce((total, featureId) => {
//             const feature = additionalFeatures.find(f => f.id === featureId);
//             return total + (feature?.price || 0);
//         }, 0);
//         return basePrice + pathPrice + featuresTotal;
//     };
//
//     const getBreadcrumbs = () => {
//         const items = ['Tipo de Servicio'];
//         if (selectedService) {
//             items.push(selectedServiceData?.name || '');
//             if (currentStep >= 2) items.push('Especialización');
//             if (selectedPath) {
//                 items.push(selectedPathData?.name || '');
//                 if (currentStep >= 3) items.push('Personalización');
//             }
//         }
//         return items;
//     };
//
//     const handleRequestQuote = () => {
//         let message = `¡Hola! Me interesa cotizar este proyecto:\n\n`;
//         message += `📌 Servicio: ${selectedServiceData?.name}\n`;
//         message += `💼 Especialización: ${selectedPathData?.name}\n`;
//         message += `💰 Base: $${selectedServiceData?.basePrice}\n`;
//         message += `📦 Características: $${selectedPathData?.basePrice}\n\n`;
//
//         if (selectedFeatures.length > 0) {
//             message += `✨ Adicionales:\n`;
//             selectedFeatures.forEach(featureId => {
//                 const feature = additionalFeatures.find(f => f.id === featureId);
//                 message += `- ${feature?.name}: $${feature?.price}\n`;
//             });
//         }
//
//         message += `\n💵 Total: $${calculateTotal()}`;
//
//         const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
//         window.open(whatsappUrl, '_blank');
//     };
//
//     return (
//         <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-12"
//                 >
//                     <span className="inline-flex items-center justify-center p-3 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-xl mb-4">
//                         <Calculator className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
//                     </span>
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                         Cotizador de Proyectos
//                     </h2>
//                     <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Calcula el costo estimado de tu proyecto seleccionando el tipo de servicio y las características adicionales que necesites.
//                     </p>
//                 </motion.div>
//
//                 {/* Breadcrumbs */}
//                 <div className="mb-8">
//                     <nav className="flex justify-center text-sm">
//                         {getBreadcrumbs().map((item, index) => (
//                             <React.Fragment key={index}>
//                                 <span className={index % 2 === 0 ? 'text-gray-500 dark:text-gray-400' : 'text-accent-red dark:text-accent-yellow font-medium'}>
//                                     {item}
//                                 </span>
//                                 {index < getBreadcrumbs().length - 1 && (
//                                     <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
//                                 )}
//                             </React.Fragment>
//                         ))}
//                     </nav>
//                 </div>
//
//                 {/* Progress Steps - Mobile Optimized */}
//                 <div className="mb-8 overflow-x-auto md:overflow-visible">
//                     <div className="flex justify-center items-center min-w-max md:min-w-0">
//                         {['Tipo de Servicio', 'Especialización', 'Personalización'].map((step, index) => (
//                             <React.Fragment key={index}>
//                                 <div className="flex items-center">
//                                     <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
//                                         ${currentStep > index + 1
//                                         ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                         : currentStep === index + 1
//                                             ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                             : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
//                                     }`}
//                                     >
//                                         {currentStep > index + 1 ? (
//                                             <Check className="w-4 h-4 md:w-5 md:h-5" />
//                                         ) : (
//                                             <span className="text-xs md:text-sm font-medium">{index + 1}</span>
//                                         )}
//                                     </div>
//                                     <span className="ml-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">
//                                         {step}
//                                     </span>
//                                 </div>
//                                 {index < 2 && (
//                                     <div className={`w-12 md:w-24 h-1 mx-2 md:mx-4 rounded
//                                         ${currentStep > index + 1
//                                         ? 'bg-accent-red dark:bg-accent-yellow'
//                                         : 'bg-gray-200 dark:bg-gray-700'
//                                     }`}
//                                     />
//                                 )}
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>
//
//                 <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
//                     <div className="lg:col-span-2 space-y-6">
//                         {/* Step 1: Service Selection */}
//
//
//
//
//
//                         {currentStep === 1 && (
//                             <motion.div
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 className="grid md:grid-cols-3 gap-6"
//                             >
//                                 {services.map((service) => (
//                                     <motion.div
//                                         key={service.id}
//                                         whileHover={{ scale: 1.02 }}
//                                         className={`relative p-6 rounded-2xl cursor-pointer border-2 transition-all
//                                             ${selectedService === service.id
//                                             ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
//                                             : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
//                                         }`}
//                                         onClick={() => setSelectedService(service.id)}
//                                     >
//                                         <div className="flex flex-col h-full">
//                                             <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
//                                                 <Image
//                                                     src={service.image}
//                                                     alt={service.name}
//                                                     fill
//                                                     className="object-cover"
//                                                 />
//                                             </div>
//                                             <div className="flex items-center gap-3 mb-3">
//                                                 <div className={`p-2 rounded-lg
//                                                     ${selectedService === service.id
//                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
//                                                 }`}
//                                                 >
//                                                     <service.icon className="w-5 h-5" />
//                                                 </div>
//                                                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                                                     {service.name}
//                                                 </h3>
//                                             </div>
//                                             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                                                 {service.description}
//                                             </p>
//                                             <div className="space-y-2 flex-grow">
//                                                 {service.features.map((feature, index) => (
//                                                     <div
//                                                         key={index}
//                                                         className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
//                                                     >
//                                                         <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
//                                                         <span>{feature}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                                                 <span className="text-xl font-bold text-accent-red dark:text-accent-yellow">
//                                                     Desde ${service.basePrice}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         )}
//
//                         {/* Step 2: Path Selection */}
//                         {currentStep === 2 && selectedServiceData && (
//                             <motion.div
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 className="grid md:grid-cols-3 gap-6"
//                             >
//                                 {selectedServiceData.paths.map((path) => (
//                                     <motion.div
//                                         key={path.id}
//                                         whileHover={{ scale: 1.02 }}
//                                         className={`relative p-6 rounded-2xl cursor-pointer border-2 transition-all
//                                             ${selectedPath === path.id
//                                             ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
//                                             : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
//                                         }`}
//                                         onClick={() => setSelectedPath(path.id)}
//                                     >
//                                         {path.image && (
//                                             <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
//                                                 <Image
//                                                     src={path.image}
//                                                     alt={path.name}
//                                                     fill
//                                                     className="object-cover"
//                                                 />
//                                             </div>
//                                         )}
//                                         <div className="flex items-center gap-3 mb-3">
//                                             <div className={`p-2 rounded-lg
//                                                 ${selectedPath === path.id
//                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                 : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
//                                             }`}
//                                             >
//                                                 <path.icon className="w-5 h-5" />
//                                             </div>
//                                             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                                                 {path.name}
//                                             </h3>
//                                         </div>
//                                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                                             {path.description}
//                                         </p>
//                                         <div className="space-y-2 mb-4">
//                                             {path.features.map((feature, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
//                                                 >
//                                                     <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
//                                                     <span>{feature}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
//                                             <span className="text-xl font-bold text-accent-red dark:text-accent-yellow">
//                                                 ${path.basePrice}
//                                             </span>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         )}
//
//                         {/* Step 3: Additional Features */}
//                         {currentStep === 3 && (
//                             <motion.div
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
//                             >
//                                 <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
//                                     Personaliza tu Proyecto
//                                 </h3>
//                                 <div className="grid sm:grid-cols-2 gap-4">
//                                     {additionalFeatures.map((feature) => (
//                                         <motion.div
//                                             key={feature.id}
//                                             whileHover={{ scale: 1.02 }}
//                                             className={`relative p-5 rounded-xl cursor-pointer border-2 transition-all
//                                                 ${selectedFeatures.includes(feature.id)
//                                                 ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
//                                                 : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
//                                             }`}
//                                             onClick={() => {
//                                                 const newFeatures = selectedFeatures.includes(feature.id)
//                                                     ? selectedFeatures.filter(id => id !== feature.id)
//                                                     : [...selectedFeatures, feature.id];
//                                                 setSelectedFeatures(newFeatures);
//                                             }}
//                                         >
//                                             {feature.popular && (
//                                                 <span className="absolute -top-3 -right-3 px-3 py-1 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium rounded-full shadow-lg">
//                                                     Popular
//                                                 </span>
//                                             )}
//                                             <div className="flex items-start gap-4">
//                                                 <div className={`p-3 rounded-xl shrink-0
//                                                     ${selectedFeatures.includes(feature.id)
//                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
//                                                 }`}
//                                                 >
//                                                     <feature.icon className="w-5 h-5" />
//                                                 </div>
//                                                 <div>
//                                                     <div className="flex justify-between items-start">
//                                                         <h4 className="font-medium text-gray-900 dark:text-white">
//                                                             {feature.name}
//                                                         </h4>
//                                                         <span className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
//                                                             +${feature.price}
//                                                         </span>
//                                                     </div>
//                                                     <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                                                         {feature.description}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         )}
//                     </div>
//
//                     {/* Floating Summary Card */}
//                     <div className="lg:col-span-1">
//                         <div className="sticky top-24">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
//                             >
//                                 {selectedService && selectedPath ? (
//                                     <>
//                                         <div className="mb-6 space-y-4">
//                                             <div className="flex justify-between items-start">
//                                                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                                     Resumen
//                                                 </h3>
//                                                 <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
//                                                     ${calculateTotal()}
//                                                 </span>
//                                             </div>
//                                             <div className="space-y-3">
//                                                 <div className="flex justify-between text-sm">
//                                                     <span className="text-gray-600 dark:text-gray-400">Servicio Base</span>
//                                                     <span className="font-medium text-gray-900 dark:text-white">
//                                                         ${selectedServiceData?.basePrice}
//                                                     </span>
//                                                 </div>
//                                                 <div className="flex justify-between text-sm">
//                                                     <span className="text-gray-600 dark:text-gray-400">Especialización</span>
//                                                     <span className="font-medium text-gray-900 dark:text-white">
//                                                         ${selectedPathData?.basePrice}
//                                                     </span>
//                                                 </div>
//                                                 {selectedFeatures.length > 0 && (
//                                                     <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
//                                                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Adicionales:</p>
//                                                         {selectedFeatures.map(featureId => {
//                                                             const feature = additionalFeatures.find(f => f.id === featureId);
//                                                             return (
//                                                                 <div key={featureId} className="flex justify-between text-sm">
//                                                                     <span className="text-gray-600 dark:text-gray-400">
//                                                                         {feature?.name}
//                                                                     </span>
//                                                                     <span className="font-medium text-gray-900 dark:text-white">
//                                                                         +${feature?.price}
//                                                                     </span>
//                                                                 </div>
//                                                             );
//                                                         })}
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </div>
//
//                                         <div className="space-y-4">
//                                             {currentStep > 1 && (
//                                                 <button
//                                                     onClick={() => setCurrentStep(prev => prev - 1)}
//                                                     className="w-full py-3 px-4 rounded-xl border-2 border-gray-200
//                                                         dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium
//                                                         hover:border-accent-red dark:hover:border-accent-yellow transition-colors
//                                                         inline-flex items-center justify-center gap-2"
//                                                 >
//                                                     <ArrowLeft className="w-4 h-4" />
//                                                     Anterior
//                                                 </button>
//                                             )}
//
//                                             {currentStep < 3 ? (
//                                                 <button
//                                                     onClick={() => setCurrentStep(prev => prev + 1)}
//                                                     className="w-full py-3 px-4 bg-accent-red dark:bg-accent-yellow
//                                                         text-white dark:text-gray-900 rounded-xl font-medium
//                                                         hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
//                                                         transition-colors inline-flex items-center justify-center gap-2"
//                                                 >
//                                                     Siguiente
//                                                     <ArrowRight className="w-4 h-4" />
//                                                 </button>
//                                             ) : (
//                                                 <button
//                                                     onClick={handleRequestQuote}
//                                                     className="w-full py-3 px-4 bg-accent-red dark:bg-accent-yellow
//                                                         text-white dark:text-gray-900 rounded-xl font-medium
//                                                         hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
//                                                         transition-colors inline-flex items-center justify-center gap-2"
//                                                 >
//                                                     <MessageSquare className="w-4 h-4" />
//                                                     Solicitar por WhatsApp
//                                                 </button>
//                                             )}
//                                         </div>
//                                     </>
//                                 ) : (
//                                     <div className="text-center py-8">
//                                         <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                             Selecciona un servicio y especialización para ver el resumen
//                                         </p>
//                                     </div>
//                                 )}
//
//                                 <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
//                                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
//                                         ¿Prefieres contactarnos directamente?
//                                     </p>
//                                     <div className="flex gap-4 justify-center">
//                                         <a
//                                             href="tel:+593984264910"
//                                             className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
//                                                 dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
//                                                 hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
//                                             title="Llamar ahora"
//                                         >
//                                             <Phone className="w-5 h-5" />
//                                         </a>
//                                         <a
//                                             href="https://wa.me/593984264910"
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
//                                                 dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
//                                                 hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
//                                             title="Contactar por WhatsApp"
//                                         >
//                                             <MessageSquare className="w-5 h-5" />
//                                         </a>
//                                         <a
//                                             href="mailto:info@torisoftt.com"
//                                             className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
//                                                 dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
//                                                 hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
//                                             title="Enviar email"
//                                         >
//                                             <Mail className="w-5 h-5" />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight, ArrowLeft, Monitor, ShoppingCart, Code, Search, Mail, Phone, Server, Paintbrush, Wrench, MessageSquare, AlertCircle, Globe, Database, Smartphone, Store } from 'lucide-react';
import Image from 'next/image';

type ServicePath = {
    id: string;
    name: string;
    description: string;
    icon: any;
    basePrice: number;
    features: string[];
    image?: string;
};

type ServiceOption = {
    id: string;
    name: string;
    description: string;
    icon: any;
    basePrice: number;
    features: string[];
    paths: ServicePath[];
    image: string;
};

type AdditionalFeature = {
    id: string;
    name: string;
    price: number;
    description: string;
    icon: any;
    popular?: boolean;
};

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

export default function PriceCalculator() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string>('');
    const [selectedPath, setSelectedPath] = useState<string>('');
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const services: ServiceOption[] = [
        {
            id: 'wordpress',
            name: 'WordPress/PHP',
            description: 'Desarrollo profesional con WordPress, ideal para sitios dinámicos y escalables',
            icon: Monitor,
            basePrice: 199,
            image: '/ilustraciones/illustrate-a-wordpress-development-scene-with-a-hi__30684.png',
            features: [
                'Panel administrable intuitivo',
                'Temas personalizados',
                'Plugins premium incluidos',
                'Optimización básica'
            ],
            paths: [
                {
                    id: 'informative',
                    name: 'Sitio Informativo',
                    description: 'Ideal para presentar tu negocio de manera profesional',
                    icon: Globe,
                    basePrice: 299,
                    image: '/ilustraciones/an-outdoor-cafe-scene-with-two-middleeastern-men-a__30688.png',
                    features: [
                        'Páginas informativas',
                        'Blog corporativo',
                        'Formularios de contacto',
                        'Integración social'
                    ]
                },
                {
                    id: 'catalog',
                    name: 'Catálogo Digital',
                    description: 'Perfecto para mostrar productos y servicios',
                    icon: Store,
                    basePrice: 399,
                    image: '/ilustraciones/create-illustrations-for-wordpress-development-fea__30685.png',
                    features: [
                        'Catálogo avanzado',
                        'Galería de productos',
                        'Filtros de búsqueda',
                        'Cotizaciones online'
                    ]
                },
                {
                    id: 'authority',
                    name: 'Sitio de Autoridad',
                    description: 'Para posicionarte como referente en tu industria',
                    icon: Globe,
                    basePrice: 499,
                    image: '/ilustraciones/diverse-group-of-four-people-in-a-modern-office-__30691.png',
                    features: [
                        'Blog avanzado',
                        'Sistema de membresía',
                        'Recursos descargables',
                        'Newsletter integrado'
                    ]
                }
            ]
        },
        {
            id: 'custom',
            name: 'Desarrollo a Medida',
            description: 'Solución personalizada con tecnologías modernas',
            icon: Code,
            basePrice: 399,
            image: '/ilustraciones/create-an-image-of-an-asian-female-developer-colla__30686.png',
            features: [
                'Arquitectura moderna',
                'Alto rendimiento',
                'Personalización total',
                'Escalabilidad'
            ],
            paths: [
                {
                    id: 'frontend',
                    name: 'Frontend',
                    description: 'Desarrollo con Next.js/React',
                    icon: Monitor,
                    basePrice: 299,
                    features: [
                        'UI/UX moderno',
                        'Componentes reutilizables',
                        'Optimización SEO',
                        'PWA support'
                    ]
                },
                {
                    id: 'backend',
                    name: 'Backend',
                    description: 'APIs con Node.js/Python',
                    icon: Database,
                    basePrice: 399,
                    features: [
                        'REST APIs',
                        'GraphQL',
                        'Microservicios',
                        'Cloud deployment'
                    ]
                },
                {
                    id: 'mobile',
                    name: 'App Móvil',
                    description: 'Desarrollo con React Native/Flutter',
                    icon: Smartphone,
                    basePrice: 499,
                    features: [
                        'iOS y Android',
                        'Push notifications',
                        'Offline mode',
                        'App Store ready'
                    ]
                }
            ]
        },
        {
            id: 'ecommerce',
            name: 'E-commerce',
            description: 'Tienda online completa con gestión avanzada',
            icon: ShoppingCart,
            basePrice: 599,
            image: '/ilustraciones/design-an-illustration-of-a-black-male-developer-s__30687.png',
            features: [
                'Gestión de productos',
                'Pasarela de pagos',
                'Panel de control',
                'Reportes avanzados'
            ],
            paths: [
                {
                    id: 'basic',
                    name: 'Tienda Básica',
                    description: 'Ideal para emprendedores',
                    icon: Store,
                    basePrice: 699,
                    features: [
                        'Hasta 100 productos',
                        'PayPal/Stripe',
                        'Gestión básica',
                        'SEO básico'
                    ]
                },
                {
                    id: 'advanced',
                    name: 'Tienda Avanzada',
                    description: 'Para negocios en crecimiento',
                    icon: ShoppingCart,
                    basePrice: 999,
                    features: [
                        'Productos ilimitados',
                        'Multi-pasarela',
                        'CRM integrado',
                        'Marketing tools'
                    ]
                },
                {
                    id: 'marketplace',
                    name: 'Marketplace',
                    description: 'Plataforma multi-vendedor',
                    icon: Store,
                    basePrice: 1499,
                    features: [
                        'Multi-vendedor',
                        'Comisiones',
                        'Chat integrado',
                        'Analytics avanzado'
                    ]
                }
            ]
        }
    ];

    const additionalFeatures: AdditionalFeature[] = [
        {
            id: 'seo',
            name: 'SEO Avanzado',
            price: 99,
            description: 'Optimización completa para motores de búsqueda, incluyendo investigación de palabras clave, meta tags, estructura de URLs, optimización de contenido y seguimiento de rankings',
            icon: Search,
            popular: true
        },
        {
            id: 'hosting',
            name: 'Hosting Premium',
            price: 99,
            description: 'Alojamiento empresarial con alta velocidad, certificado SSL gratuito, copias de seguridad diarias, protección DDoS y soporte 24/7',
            icon: Server
        },
        {
            id: 'maintenance',
            name: 'Mantenimiento',
            price: 29,
            description: 'Plan mensual de mantenimiento que incluye actualizaciones de seguridad, optimización de rendimiento, respaldos y 2 horas de soporte técnico prioritario',
            icon: Wrench
        },
        {
            id: 'design',
            name: 'Diseño UI/UX',
            price: 149,
            description: 'Diseño de interfaces único adaptado a tu imagen de marca, exclusivo y personalizado 5 páginas',
            icon: Paintbrush,
            popular: true
        }
    ];

    const autoAdvance1 = () => {
        if (currentStep < 3) {
            switch (currentStep) {
                case 1:
                    if (selectedService) {
                        setTimeout(() => setCurrentStep(2), 10500);
                    }
                    break;
                case 2:
                    if (selectedPath) {
                        setTimeout(() => setCurrentStep(3), 500);
                    }
                    break;
            }
        }
    };

    const autoAdvance = () => {
        if (currentStep < 3) {
            if (currentStep === 1 && selectedService) {
                setCurrentStep(2);
            } else if (currentStep === 2 && selectedPath) {
                setCurrentStep(3);
            }
        }
    };

    useEffect(() => {
        autoAdvance();
    }, [selectedService, selectedPath]);

    // const autoAdvance = () => {
    //     if (currentStep < 3) {
    //         if (currentStep === 1 && selectedService && !selectedPath) {
    //             setTimeout(() => setCurrentStep(2), 3500);
    //         } else if (currentStep === 2 && selectedPath) {
    //             setTimeout(() => setCurrentStep(3), 3500);
    //         }
    //     }
    // };

    // const handleStepNavigation = (direction: 'prev' | 'next') => {
    //     if (direction === 'prev') {
    //         if (currentStep === 3) {
    //             setSelectedFeatures([]);
    //         } else if (currentStep === 2) {
    //             setSelectedPath('');
    //         }
    //         setCurrentStep(prev => prev - 1);
    //     } else {
    //         if (currentStep === 1 && selectedService) {
    //             setCurrentStep(2);
    //         } else if (currentStep === 2 && selectedPath) {
    //             setCurrentStep(3);
    //         }
    //     }
    // };
    //
    // const setSelectedService = (serviceId: string) => {
    //     if (serviceId !== selectedService) {
    //         setSelectedPath('');
    //         setSelectedFeatures([]);
    //     }
    //     setSelectedService(serviceId);
    // };

    // useEffect(() => {
    //     autoAdvance();
    // }, [selectedService, selectedPath]);


    const selectedServiceData = services.find(s => s.id === selectedService);
    const selectedPathData = selectedServiceData?.paths.find(p => p.id === selectedPath);

    const calculateTotal = () => {
        const basePrice = selectedServiceData?.basePrice || 0;
        const pathPrice = selectedPathData?.basePrice || 0;
        const featuresTotal = selectedFeatures.reduce((total, featureId) => {
            const feature = additionalFeatures.find(f => f.id === featureId);
            return total + (feature?.price || 0);
        }, 0);
        return basePrice + pathPrice + featuresTotal;
    };

    const handleStepNavigation = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentStep(prev => {
                if (prev === 3) setSelectedFeatures([]);
                if (prev === 2) setSelectedPath('');
                return prev - 1;
            });
        } else {
            if (currentStep === 1 && selectedService) {
                setCurrentStep(2);
            } else if (currentStep === 2 && selectedPath) {
                setCurrentStep(3);
            }
        }
    };

    const getBreadcrumbs = () => {
        const items = ['Tipo de Servicio'];
        if (selectedService) {
            items.push(selectedServiceData?.name || '');
            if (currentStep >= 2) items.push('Especialización');
            if (selectedPath) {
                items.push(selectedPathData?.name || '');
                if (currentStep >= 3) items.push('Personalización');
            }
        }
        return items;
    };

    const handleRequestQuote = () => {
        let message = `¡Hola! Me interesa cotizar este proyecto:\n\n`;
        message += `📌 Servicio: ${selectedServiceData?.name}\n`;
        message += `💼 Especialización: ${selectedPathData?.name}\n`;
        message += `💰 Base: $${selectedServiceData?.basePrice}\n`;
        message += `📦 Características: $${selectedPathData?.basePrice}\n\n`;

        if (selectedFeatures.length > 0) {
            message += `✨ Adicionales:\n`;
            selectedFeatures.forEach(featureId => {
                const feature = additionalFeatures.find(f => f.id === featureId);
                message += `- ${feature?.name}: $${feature?.price}\n`;
            });
        }

        message += `\n💵 Total: $${calculateTotal()}`;

        const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center mb-12"
    >
    <span className="inline-flex items-center justify-center p-3 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-xl mb-4">
    <Calculator className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Cotizador de Proyectos
    </h2>







    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Calcula el costo estimado de tu proyecto seleccionando el tipo de servicio y las características adicionales que necesites.
    </p>
    </motion.div>

    {/* Breadcrumbs */}
    <div className="mb-8">
    <nav className="flex justify-center text-sm">
        {getBreadcrumbs().map((item, index) => (
                <React.Fragment key={index}>
                <span className={index % 2 === 0 ? 'text-gray-500 dark:text-gray-400' : 'text-accent-red dark:text-accent-yellow font-medium'}>
        {item}
        </span>
    {index < getBreadcrumbs().length - 1 && (
        <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
    )}
    </React.Fragment>
))}
    </nav>
    </div>

    {/* Progress Steps - Mobile Optimized */}
    <div className="mb-8 overflow-x-auto md:overflow-visible">
    <div className="flex justify-center items-center min-w-max md:min-w-0">
        {['Tipo de Servicio', 'Especialización', 'Personalización'].map((step, index) => (
        <React.Fragment key={index}>
        <div className="flex items-center">
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
                                        ${currentStep > index + 1
            ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
            : currentStep === index + 1
                ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
        }`}
>
    {currentStep > index + 1 ? (
        <Check className="w-4 h-4 md:w-5 md:h-5" />
    ) : (
        <span className="text-xs md:text-sm font-medium">{index + 1}</span>
    )}
    </div>
    <span className="ml-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {step}
        </span>
        </div>
    {index < 2 && (
        <div className={`w-12 md:w-24 h-1 mx-2 md:mx-4 rounded
                                        ${currentStep > index + 1
            ? 'bg-accent-red dark:bg-accent-yellow'
            : 'bg-gray-200 dark:bg-gray-700'
        }`}
        />
    )}
    </React.Fragment>
))}
    </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
    <div className="lg:col-span-2 space-y-6">
        {/* Step 1: Service Selection */}
    {currentStep === 1 && (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="grid md:grid-cols-3 gap-6"
            >
            {services.map((service) => (
                    <motion.div
                        key={service.id}
                whileHover={{ scale: 1.02 }}
        className={`relative p-6 rounded-2xl cursor-pointer border-2 transition-all
                                            ${selectedService === service.id
            ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
            : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
        }`}
        onClick={() => setSelectedService(service.id)}
    >
        <div className="flex flex-col h-full">
        <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
        <Image
            src={service.image}
        alt={service.name}
        fill
        className="object-cover"
            />
            </div>
            <div className="flex items-center gap-3 mb-3">
    <div className={`p-2 rounded-lg
                                                    ${selectedService === service.id
        ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
    }`}
    >
        <service.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {service.name}
        </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {service.description}
        </p>
        <div className="space-y-2 flex-grow">
        {service.features.map((feature, index) => (
                <div
                    key={index}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
            <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                <span>{feature}</span>
                </div>
    ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
    <span className="text-xl font-bold text-accent-red dark:text-accent-yellow">
        Desde ${service.basePrice}
        </span>
        </div>
        </div>
        </motion.div>
    ))}
        </motion.div>
    )}

    {/* Step 2: Path Selection */}
    {currentStep === 2 && selectedServiceData && (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="grid md:grid-cols-3 gap-6"
            >
            {selectedServiceData.paths.map((path) => (
                    <motion.div
                        key={path.id}
                whileHover={{ scale: 1.02 }}
        className={`relative p-6 rounded-2xl cursor-pointer border-2 transition-all
                                            ${selectedPath === path.id
            ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
            : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
        }`}
        onClick={() => setSelectedPath(path.id)}
    >
        {path.image && (
            <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
            <Image
                src={path.image}
            alt={path.name}
            fill
            className="object-cover"
                />
                </div>
        )}
        <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg
                                                ${selectedPath === path.id
            ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
        }`}
    >
        <path.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {path.name}
        </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {path.description}
        </p>
        <div className="space-y-2 mb-4">
        {path.features.map((feature, index) => (
                <div
                    key={index}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
            <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                <span>{feature}</span>
                </div>
    ))}
        </div>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
    <span className="text-xl font-bold text-accent-red dark:text-accent-yellow">
        ${path.basePrice}
        </span>
        </div>
        </motion.div>
    ))}
        </motion.div>
    )}

    {/* Step 3: Additional Features */}
    {currentStep === 3 && (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
        >
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Personaliza tu Proyecto
    </h3>
    <div className="grid sm:grid-cols-2 gap-4">
        {additionalFeatures.map((feature) => (
                <motion.div
                    key={feature.id}
            whileHover={{ scale: 1.02 }}
        className={`relative p-5 rounded-xl cursor-pointer border-2 transition-all
                                                ${selectedFeatures.includes(feature.id)
            ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
            : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
        }`}
        onClick={() => {
        const newFeatures = selectedFeatures.includes(feature.id)
            ? selectedFeatures.filter(id => id !== feature.id)
            : [...selectedFeatures, feature.id];
        setSelectedFeatures(newFeatures);
    }}
    >
        {feature.popular && (
            <span className="absolute -top-3 -right-3 px-3 py-1 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium rounded-full shadow-lg">
                Popular
                </span>
        )}
        <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl shrink-0
                                                    ${selectedFeatures.includes(feature.id)
            ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
        }`}
    >
        <feature.icon className="w-5 h-5" />
        </div>
        <div>
        <div className="flex justify-between items-start">
        <h4 className="font-medium text-gray-900 dark:text-white">
            {feature.name}
            </h4>
            <span className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
        +${feature.price}
        </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {feature.description}
        </p>
        </div>
        </div>
        </motion.div>
    ))}
        </div>
        </motion.div>
    )}
    </div>

    {/* Floating Summary Card */}
    <div className="lg:col-span-1">
    <div className="sticky top-24">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl"
    >
    {selectedService && selectedPath ? (
        <>
            <div className="mb-6 space-y-4">
        <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Resumen
            </h3>
            <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
        ${calculateTotal()}
    </span>
    </div>
    <div className="space-y-3">
    <div className="flex justify-between text-sm">


    <span className="text-gray-600 dark:text-gray-400">Servicio Base</span>
    <span className="font-medium text-gray-900 dark:text-white">
        ${selectedServiceData?.basePrice}
    </span>
    </div>
    <div className="flex justify-between text-sm">
    <span className="text-gray-600 dark:text-gray-400">Especialización</span>
        <span className="font-medium text-gray-900 dark:text-white">
        ${selectedPathData?.basePrice}
    </span>
    </div>
    {selectedFeatures.length > 0 && (
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Adicionales:</p>
        {selectedFeatures.map(featureId => {
            const feature = additionalFeatures.find(f => f.id === featureId);
            return (
                <div key={featureId} className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
                {feature?.name}
            </span>
            <span className="font-medium text-gray-900 dark:text-white">
                +${feature?.price}
            </span>
            </div>
        );
        })}
        </div>
    )}
    </div>
    </div>

    <div className="space-y-4">
        {currentStep > 1 && (
            <button
                onClick={() => handleStepNavigation('prev')}
    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200
    dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium
    hover:border-accent-red dark:hover:border-accent-yellow transition-colors
    inline-flex items-center justify-center gap-2 group"
    >
    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Anterior
        </button>
)}

    {currentStep < 3 ? (
        <button
            onClick={() => handleStepNavigation('next')}
        className="w-full py-3 px-4 bg-accent-red dark:bg-accent-yellow
        text-white dark:text-gray-900 rounded-xl font-medium
        hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
        transition-colors inline-flex items-center justify-center gap-2 group"
    >
    Siguiente
    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
    ) : (
        <button
            onClick={handleRequestQuote}
        className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#25D366]/90
        text-white rounded-xl font-medium transition-colors
        inline-flex items-center justify-center gap-2 group"
    >
    <WhatsAppIcon />
    <span>Solicitar por WhatsApp</span>
    </button>
    )}
    </div>
    </>
) : (
        <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
            Selecciona un servicio y especialización para ver el resumen
    </p>
    </div>
)}

    <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                                                ¿Prefieres contactarnos directamente?
        </p>
        <div className="flex gap-4 justify-center">
        <a
            href="tel:+593984264910"
    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
    dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
    hover:text-accent-red dark:hover:text-accent-yellow transition-colors group"
    title="Llamar ahora"
    >
    <Phone className="w-5 h-5" />
        </a>
        <a
    href="https://wa.me/593984264910"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
    dark:text-gray-400 hover:bg-[#25D366]/10 hover:text-[#25D366]
    transition-colors group"
    title="Contactar por WhatsApp"
    >
    <WhatsAppIcon />
    <span className="absolute invisible group-hover:visible bg-gray-900 text-white
    text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2">
    WhatsApp
    </span>
    </a>
    <a
    href="mailto:info@torisoftt.com"
    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
    dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
    hover:text-accent-red dark:hover:text-accent-yellow transition-colors group"
    title="Enviar email"
    >
    <Mail className="w-5 h-5" />
        </a>
        </div>
        </div>
        </motion.div>
        </div>
        </div>
        </div>
        </div>
        </section>
);
}