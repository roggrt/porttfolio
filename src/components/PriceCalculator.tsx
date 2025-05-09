//
//
// 'use client';
//
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Calculator,
//     Check,
//     ChevronDown,
//     ChevronUp,
//     Monitor,
//     ShoppingCart,
//     Code,
//     Search,
//     Mail,
//     Phone,
//     Server,
//     Paintbrush,
//     Wrench,
//     MessageSquare,
//     AlertCircle,
//     Globe,
//     Database,
//     Smartphone,
//     Store,
//     RefreshCw
// } from 'lucide-react';
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
// type CardProps = {
//     isSelected: boolean;
//     onSelect: () => void;
//     children: React.ReactNode;
// };
//
// const WhatsAppIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//   </svg>
// );
//
// const BaseCard: React.FC<CardProps> = ({ isSelected, onSelect, children }) => {
//     return (
//         <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className={`relative p-6 rounded-xl cursor-pointer border-2 transition-all h-full
//                 ${isSelected
//                     ? 'border-accent-red dark:border-accent-yellow bg-accent-red/5 dark:bg-accent-yellow/5'
//                     : 'border-gray-200 dark:border-gray-800 hover:border-accent-red/50 dark:hover:border-accent-yellow/50'
//                 }`}
//             onClick={onSelect}
//         >
//             {children}
//         </motion.div>
//     );
// };
//
// export default function PriceCalculator() {
//     const [expandedSection, setExpandedSection] = useState<string>('service');
//     const [selectedService, setSelectedService] = useState<string>('');
//     const [selectedPath, setSelectedPath] = useState<string>('');
//     const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
//
//     const resetAll = () => {
//         setSelectedService('');
//         setSelectedPath('');
//         setSelectedFeatures([]);
//         setExpandedSection('service');
//     };
//
//     const handleServiceSelect = (serviceId: string) => {
//         if (serviceId === selectedService) {
//             setSelectedService('');
//             setSelectedPath('');
//             setExpandedSection('service');
//         } else {
//             setSelectedService(serviceId);
//             setSelectedPath('');
//             setExpandedSection('path');
//         }
//     };
//
//     const handlePathSelect = (pathId: string) => {
//         if (pathId === selectedPath) {
//             setSelectedPath('');
//         } else {
//             setSelectedPath(pathId);
//             setExpandedSection('features');
//         }
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
//     const services: ServiceOption[] = [
//         {
//             id: 'wordpress',
//             name: 'Página Web',
//             description: 'Desarrollo profesional de sitios web con WordPress o PHP. Ideal para negocios que necesitan una presencia online efectiva.',
//             icon: Monitor,
//             image: '/ilustraciones/illustrate-a-wordpress-development-scene-with-a-hi__30684.webp',
//             features: [
//                 'Panel de administración intuitivo',
//                 'Optimización de velocidad',
//                 'Diseño responsive',
//                 'Integración con redes sociales'
//             ],
//             paths: [
//                 {
//                     id: 'informative',
//                     name: 'Sitio Informativo',
//                     description: 'Página web profesional para presentar tu negocio, servicios y construir presencia online.',
//                     icon: Globe,
//                     basePrice: 299,
//                     image: '/ilustraciones/an-outdoor-cafe-scene-with-two-middleeastern-men-a__30688.webp',
//                     features: [
//                         'Hasta 5 páginas principales',
//                         'Formulario de contacto avanzado',
//                         'Integración con Google Maps',
//                         'Configuración de Analytics'
//                     ]
//                 },
//                 {
//                     id: 'landing',
//                     name: 'Landing Page',
//                     description: 'Página de aterrizaje optimizada para convertir visitantes en clientes potenciales.',
//                     icon: Store,
//                     basePrice: 199,
//                     image: '/ilustraciones/create-illustrations-for-wordpress-development-fea__30685.webp',
//                     features: [
//                         'Diseño orientado a conversión',
//                         'Formularios de captura de leads',
//                         'Llamadas a la acción estratégicas',
//                         'Seguimiento de conversiones'
//                     ]
//                 },
//                 {
//                     id: 'catalog',
//                     name: 'Catálogo Digital',
//                     description: 'Catálogo interactivo para mostrar productos o servicios con detalles y cotizaciones.',
//                     icon: Store,
//                     basePrice: 399,
//                     image: '/ilustraciones/diverse-group-of-four-people-in-a-modern-office-__30691.webp',
//                     features: [
//                         'Catálogo de productos avanzado',
//                         'Sistema de filtros y búsqueda',
//                         'Galería de imágenes profesional',
//                         'Sistema de cotizaciones online'
//                     ]
//                 }
//             ]
//         },
//         {
//             id: 'custom',
//             name: 'Desarrollo a Medida',
//             description: 'Soluciones web personalizadas con tecnologías modernas y código optimizado para máximo rendimiento.',
//             icon: Code,
//             image: '/ilustraciones/create-an-image-of-an-asian-female-developer-colla__30686.webp',
//             features: [
//                 'Arquitectura moderna y escalable',
//                 'Código limpio y mantenible',
//                 'Rendimiento optimizado',
//                 'SEO técnico avanzado'
//             ],
//             paths: [
//                 {
//                     id: 'frontend',
//                     name: 'Frontend React/Next.js',
//                     description: 'Desarrollo frontend moderno con React y Next.js para aplicaciones web dinámicas.',
//                     icon: Monitor,
//                     basePrice: 299,
//                     features: [
//                         'Interfaces modernas y responsivas',
//                         'Optimización de carga',
//                         'Componentes reutilizables',
//                         'Consumo de API',
//                         'PWA (Progressive Web App)'
//                     ]
//                 },
//                 {
//                     id: 'backend',
//                     name: 'Backend Node.js',
//                     description: 'Desarrollo backend robusto con Node.js y bases de datos optimizadas.',
//                     icon: Database,
//                     basePrice: 399,
//                     features: [
//                         'API RESTful personalizada',
//                         'Integración con bases relacionales',
//                         'Sistema de autenticación',
//                         'Documentación técnica'
//                     ]
//                 },
//                 {
//                     id: 'mobile',
//                     name: 'App Móvil React Native',
//                     description: 'Aplicaciones móviles nativas para iOS y Android con React Native.',
//                     icon: Smartphone,
//                     basePrice: 999,
//                     features: [
//                         'Desarrollo multiplataforma',
//                         'Notificaciones push',
//                         'Modo sin conexión',
//                         'Analytics integrado'
//                     ]
//                 }
//             ]
//         },
//         {
//             id: 'ecommerce',
//             name: 'E-commerce',
//             description: 'Tiendas online completas con gestión de productos, pagos y envíos integrados.',
//             icon: ShoppingCart,
//             image: '/ilustraciones/design-an-illustration-of-a-black-male-developer-s__30687.webp',
//             features: [
//                 'Gestión de productos',
//                 'Sistema de pagos',
//                 'Panel administrativo',
//                 'Reportes de ventas'
//             ],
//             paths: [
//                 {
//                     id: 'basic',
//                     name: 'Tienda Básica',
//                     description: 'Tienda online esencial para empezar a vender por internet.',
//                     icon: Store,
//                     basePrice: 499,
//                     features: [
//                         'Hasta 50 productos',
//                         'PayPal y tarjetas',
//                         'Panel de control básico',
//                         'Informes básicos'
//                     ]
//                 },
//                 {
//                     id: 'advanced',
//                     name: 'Tienda Avanzada',
//                     description: 'Solución completa para negocios en crecimiento.',
//                     icon: ShoppingCart,
//                     basePrice: 699,
//                     features: [
//                         'Productos ilimitados',
//                         'Múltiples formas de pago',
//                         'CRM integrado',
//                         'Marketing y cupones'
//                     ]
//                 },
//                 {
//                     id: 'marketplace',
//                     name: 'Marketplace',
//                     description: 'Plataforma multi-vendedor con sistema de comisiones.',
//                     icon: Store,
//                     basePrice: 999,
//                     features: [
//                         'Sistema multi-vendedor',
//                         'Gestión de comisiones',
//                         'Chat entre usuarios',
//                         'Panel avanzado'
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
//             price: 99,
//             description: 'Optimización completa para buscadores incluyendo investigación de palabras clave, meta tags, estructura de URLs y seguimiento de posiciones.',
//             icon: Search,
//             popular: true
//         },
//         {
//             id: 'hosting',
//             name: 'Hosting Premium Anual',
//             price: 79,
//             description: 'Alojamiento empresarial de alto rendimiento con SSL gratuito, backups diarios, protección DDoS y soporte técnico 24/7.',
//             icon: Server
//         },
//         {
//             id: 'maintenance',
//             name: 'Mantenimiento Mensual',
//             price: 29,
//             description: 'Plan mensual de mantenimiento que incluye actualizaciones de seguridad, optimización de rendimiento y 2 horas de soporte prioritario.',
//             icon: Wrench
//         },
//         {
//             id: 'design',
//             name: 'Diseño UI/UX',
//             price: 149,
//             description: 'Diseño profesional personalizado con wireframes, mockups en Figma/Illustrator e implementación responsive, hasta 5 páginas.',
//             icon: Paintbrush,
//             popular: true
//         }
//     ];
//
//     const sections = [
//         {
//             id: 'service',
//             title: 'Tipo de Servicio',
//             description: 'Selecciona la base de tu proyecto',
//             isComplete: !!selectedService,
//             canExpand: true,
//         },
//         {
//             id: 'path',
//             title: 'Especialización',
//             description: 'Personaliza según tus necesidades',
//             isComplete: !!selectedPath,
//             canExpand: !!selectedService,
//         },
//         {
//             id: 'features',
//             title: 'Características Adicionales',
//             description: 'Mejora tu proyecto con extras',
//             isComplete: true,
//             canExpand: !!selectedService,
//         }
//     ];
//
//     const calculateTotal = () => {
//         let total = 0;
//         if (selectedPath) {
//             const serviceData = services.find(s => s.id === selectedService);
//             const pathData = serviceData?.paths.find(p => p.id === selectedPath);
//             total += pathData?.basePrice || 0;
//         }
//
//         total += selectedFeatures.reduce((sum, featureId) => {
//             const feature = additionalFeatures.find(f => f.id === featureId);
//             return sum + (feature?.price || 0);
//         }, 0);
//
//         return total;
//     };
//
//     const handleRequestQuote = () => {
//         const serviceData = services.find(s => s.id === selectedService);
//         const pathData = serviceData?.paths.find(p => p.id === selectedPath);
//
//         let message = `¡Hola! Me interesa cotizar este proyecto:\n\n`;
//         message += `📌 Tipo de servicio: ${serviceData?.name}\n`;
//
//         if (pathData) {
//             message += `🎯 Especialización: ${pathData.name}\n`;
//             message += `💰 Precio base: $${pathData.basePrice}\n`;
//         }
//
//         if (selectedFeatures.length > 0) {
//             message += `\n✨ Características adicionales:\n`;
//             selectedFeatures.forEach(featureId => {
//                 const feature = additionalFeatures.find(f => f.id === featureId);
//                 message += `- ${feature?.name}: $${feature?.price}\n`;
//             });
//             message += '\n';
//         }
//
//         message += `💵 Total estimado: $${calculateTotal()}\n\n`;
//         message += `🔍 Características incluidas:\n`;
//         serviceData?.features.forEach(feature => {
//             message += `✓ ${feature}\n`;
//         });
//         if (pathData) {
//             pathData.features.forEach(feature => {
//                 message += `✓ ${feature}\n`;
//             });
//         }
//
//         const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
//         window.open(whatsappUrl, '_blank');
//     };
//
//     return (
//         <section id="cotizador" className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-12"
//                 >
//                     <div className="flex items-center justify-center gap-4 mb-4">
//                         <span className="inline-flex items-center justify-center p-3 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-xl">
//                             <Calculator className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
//                         </span>
//                         {(selectedService || selectedPath || selectedFeatures.length > 0) && (
//                             <button
//                                 onClick={resetAll}
//                                 className="p-2 rounded-lg text-gray-500 hover:text-accent-red dark:hover:text-accent-yellow
//                                     hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                                 title="Reiniciar cotización"
//                             >
//                                 <RefreshCw className="w-5 h-5" />
//                             </button>
//                         )}
//                     </div>
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                         Cotizador de Proyectos
//                     </h2>
//                     <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Personaliza tu proyecto seleccionando las opciones que necesitas y recibe una cotización instantánea
//                     </p>
//                 </motion.div>
//
//                 <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
//                     <div className="lg:col-span-2 space-y-4">
//                         {/* Secciones principales */}
//                         {sections.map((section) => (
//                             <div
//                                 key={section.id}
//                                 className={`rounded-2xl border-2 transition-all
//                                     ${expandedSection === section.id
//                                         ? 'border-accent-red dark:border-accent-yellow'
//                                         : 'border-gray-200 dark:border-gray-700'
//                                     }
//                                     ${!section.canExpand ? 'opacity-50' : ''}
//                                 `}
//                             >
//                                 <button
//                                     onClick={() => section.canExpand && setExpandedSection(expandedSection === section.id ? '' : section.id)}
//                                     disabled={!section.canExpand}
//                                     className="w-full p-6 flex items-center justify-between cursor-pointer disabled:cursor-not-allowed"
//                                 >
//                                     <div className="flex items-center gap-4">
//                                         <div className={`w-10 h-10 rounded-full flex items-center justify-center
//                                             ${section.isComplete
//                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                 : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
//                                             }`}
//                                         >
//                                             {section.isComplete ? (
//                                                 <Check className="w-5 h-5" />
//                                             ) : (
//                                                 <span className="font-medium">{sections.indexOf(section) + 1}</span>
//                                             )}
//                                         </div>
//                                         <div className="text-left">
//                                             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                                                 {section.title}
//                                             </h3>
//                                             <p className="text-sm text-gray-600 dark:text-gray-400">
//                                                 {section.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                     {section.canExpand && (
//                                         expandedSection === section.id
//                                             ? <ChevronUp className="w-5 h-5 text-gray-400" />
//                                             : <ChevronDown className="w-5 h-5 text-gray-400" />
//                                     )}
//                                 </button>
//
//                                 <AnimatePresence>
//                                     {expandedSection === section.id && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: 'auto', opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             transition={{ duration: 0.3 }}
//                                             className="overflow-hidden"
//                                         >
//                                             <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
//                                                 {/* Contenido de cada sección */}
//                                                 {section.id === 'service' && (
//                                                     <div className="grid md:grid-cols-3 gap-6 pt-6">
//                                                         {services.map((service) => (
//                                                             <BaseCard
//                                                                 key={service.id}
//                                                                 isSelected={selectedService === service.id}
//                                                                 onSelect={() => handleServiceSelect(service.id)}
//                                                             >
//                                                                 <div className="flex flex-col h-full">
//                                                                     <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
//                                                                         <Image
//                                                                             src={service.image}
//                                                                             alt={service.name}
//                                                                             fill
//                                                                             className="object-cover"
//                                                                         />
//                                                                     </div>
//                                                                     <div className="flex items-center gap-3 mb-3">
//                                                                         <div className={`p-2 rounded-lg
//                                                                             ${selectedService === service.id
//                                                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                                                 : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
//                                                                             }`}
//                                                                         >
//                                                                             <service.icon className="w-5 h-5" />
//                                                                         </div>
//                                                                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                                                                             {service.name}
//                                                                         </h3>
//                                                                     </div>
//                                                                     <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                                                                         {service.description}
//                                                                     </p>
//                                                                     <div className="space-y-2 flex-grow">
//                                                                         {service.features.map((feature, index) => (
//                                                                             <div
//                                                                                 key={index}
//                                                                                 className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
//                                                                             >
//                                                                                 <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
//                                                                                 <span>{feature}</span>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div>
//                                                                 </div>
//                                                             </BaseCard>
//                                                         ))}
//                                                     </div>
//                                                 )}
//
//                                                 {section.id === 'path' && selectedService && (
//                                                     <div className="grid md:grid-cols-3 gap-6 pt-6">
//                                                         {services
//                                                             .find(s => s.id === selectedService)
//                                                             ?.paths.map((path) => (
//                                                                 <BaseCard
//                                                                     key={path.id}
//                                                                     isSelected={selectedPath === path.id}
//                                                                     onSelect={() => handlePathSelect(path.id)}
//                                                                 >
//                                                                     {path.image && (
//                                                                         <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
//                                                                             <Image
//                                                                                 src={path.image}
//                                                                                 alt={path.name}
//                                                                                 fill
//                                                                                 className="object-cover"
//                                                                             />
//                                                                         </div>
//                                                                     )}
//                                                                     <div className="flex flex-col h-full">
//                                                                         <div className="flex items-center gap-3 mb-3">
//                                                                             <div className={`p-2 rounded-lg
//                                                                                 ${selectedPath === path.id
//                                                                                     ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                                                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
//                                                                                 }`}
//                                                                             >
//                                                                                 <path.icon className="w-5 h-5" />
//                                                                             </div>
//                                                                             <div>
//                                                                                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                                                                                     {path.name}
//                                                                                 </h3>
//                                                                                 <span className="text-accent-red dark:text-accent-yellow font-semibold">
//                                                                                     ${path.basePrice}
//                                                                                 </span>
//                                                                             </div>
//                                                                         </div>
//                                                                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//                                                                             {path.description}
//                                                                         </p>
//                                                                         <div className="space-y-2 flex-grow">
//                                                                             {path.features.map((feature, index) => (
//                                                                                 <div
//                                                                                     key={index}
//                                                                                     className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
//                                                                                 >
//                                                                                     <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
//                                                                                     <span>{feature}</span>
//                                                                                 </div>
//                                                                             ))}
//                                                                         </div>
//                                                                     </div>
//                                                                 </BaseCard>
//                                                             ))}
//                                                     </div>
//                                                 )}
//
//                                                 {section.id === 'features' && (
//                                                     <div className="grid sm:grid-cols-2 gap-4 pt-6">
//                                                         {additionalFeatures.map((feature) => (
//                                                             <BaseCard
//                                                                 key={feature.id}
//                                                                 isSelected={selectedFeatures.includes(feature.id)}
//                                                                 onSelect={() => toggleFeature(feature.id)}
//                                                             >
//                                                                 {feature.popular && (
//                                                                     <span className="absolute -top-3 -right-3 px-3 py-1
//                                                                         bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900
//                                                                         text-sm font-medium rounded-full shadow-lg"
//                                                                     >
//                                                                         Popular
//                                                                     </span>
//                                                                 )}
//                                                                 <div className="flex items-start gap-4">
//                                                                     <div className={`p-3 rounded-xl shrink-0
//                                                                         ${selectedFeatures.includes(feature.id)
//                                                                             ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                                             : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
//                                                                         }`}
//                                                                     >
//                                                                         <feature.icon className="w-5 h-5" />
//                                                                     </div>
//                                                                     <div>
//                                                                         <div className="flex justify-between items-start">
//
//
//
//
//
//                                                                             <h4 className="font-medium text-gray-900 dark:text-white">
//                                                                                 {feature.name}
//                                                                             </h4>
//                                                                             <span className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
//                                                                                 +${feature.price}
//                                                                             </span>
//                                                                         </div>
//                                                                         <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                                                                             {feature.description}
//                                                                         </p>
//                                                                     </div>
//                                                                 </div>
//                                                             </BaseCard>
//                                                         ))}
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </div>
//                         ))}
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
//                                 {selectedService ? (
//                                     <>
//                                         <div className="mb-6 space-y-4">
//                                             <div className="flex justify-between items-start">
//                                                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                                     Resumen del Proyecto
//                                                 </h3>
//                                                 {calculateTotal() > 0 && (
//                                                     <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
//                                                         ${calculateTotal()}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                             <div className="space-y-3">
//                                                 <div className="flex justify-between text-sm">
//                                                     <span className="text-gray-600 dark:text-gray-400">
//                                                         {services.find(s => s.id === selectedService)?.name}
//                                                     </span>
//                                                 </div>
//                                                 {selectedPath && (
//                                                     <div className="flex justify-between text-sm">
//                                                         <span className="text-gray-600 dark:text-gray-400">
//                                                             {services.find(s => s.id === selectedService)
//                                                                 ?.paths.find(p => p.id === selectedPath)?.name}
//                                                         </span>
//                                                         <span className="font-medium text-gray-900 dark:text-white">
//                                                             ${services.find(s => s.id === selectedService)
//                                                                 ?.paths.find(p => p.id === selectedPath)?.basePrice}
//                                                         </span>
//                                                     </div>
//                                                 )}
//                                                 {selectedFeatures.length > 0 && (
//                                                     <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
//                                                         <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
//                                                             Características adicionales:
//                                                         </p>
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
//                                         <button
//                                             onClick={handleRequestQuote}
//                                             className="w-full py-3 px-4 bg-accent-red dark:bg-accent-yellow
//                                                 text-white dark:text-gray-900 rounded-xl font-medium
//                                                 hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
//                                                 transition-colors inline-flex items-center justify-center gap-2"
//                                         >
//                                             <WhatsAppIcon />
//                                             <span>Solicitar Cotización</span>
//                                         </button>
//                                     </>
//                                 ) : (
//                                     <div className="text-center py-8 space-y-4">
//                                         <p className="text-gray-600 dark:text-gray-400">
//                                             Selecciona el tipo de servicio para empezar con tu cotización.
//
//                                         </p>
//                                         <p className="text-sm text-gray-500 dark:text-gray-500">
//                                             Los precios mostrados son referenciales y pueden ajustarse según requerimientos específicos.
//                                         </p>
//                                     </div>
//                                 )}
//
//
//
// <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
//                                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
//                                          ¿Prefieres contactarnos directamente?
//                                      </p>
//                                      <div className="flex gap-4 justify-center">
//                                          <a
//                                             href="tel:+593984264910"
//                                             className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
//                                                 dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
//                                                 hover:text-accent-red dark:hover:text-accent-yellow transition-colors
//                                                 group relative"
//                                             title="Llamar ahora"
//                                         >
//                                             <Phone className="w-5 h-5" />
//                                             <span className="absolute invisible group-hover:visible bg-gray-900
//                                                 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform
//                                                 -translate-x-1/2 whitespace-nowrap">
//                                                 Llamar ahora
//                                             </span>
//                                         </a>
//                                         <a
//                                             href="https://wa.me/593984264910"
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
//                                                 dark:text-gray-400 hover:bg-[#25D366]/10 hover:text-[#25D366]
//                                                 transition-colors group relative"
//                                             title="Contactar por WhatsApp"
//                                         >
//                                             <WhatsAppIcon />
//                                             <span className="absolute invisible group-hover:visible bg-gray-900
//                                                 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform
//                                                 -translate-x-1/2 whitespace-nowrap">
//                                                 WhatsApp
//                                             </span>
//                                         </a>
//                                         <a
//                                             href="mailto:info@torisoftt.com"
//                                             className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600
//                                                 dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
//                                                 hover:text-accent-red dark:hover:text-accent-yellow transition-colors
//                                                 group relative"
//                                             title="Enviar email"
//                                         >
//                                             <Mail className="w-5 h-5" />
//                                             <span className="absolute invisible group-hover:visible bg-gray-900
//                                                 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform
//                                                 -translate-x-1/2 whitespace-nowrap">
//                                                 Enviar email
//                                             </span>
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



'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calculator,
    Check,
    ChevronRight,
    Monitor,
    ShoppingCart,
    Code,
    Search,
    Mail,
    Phone,
    Server,
    Paintbrush,
    Wrench,
    Globe,
    Database,
    Smartphone,
    Store,
    RefreshCw,
    X
} from 'lucide-react';
import Image from 'next/image';

// Types
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

type CardProps = {
    isSelected: boolean;
    onSelect: () => void;
    children: React.ReactNode;
};

type ServiceCardProps = {
    service: ServiceOption;
    isSelected: boolean;
    onSelect: () => void;
}

type PathCardProps = {
    path: ServicePath;
    isSelected: boolean;
    onSelect: () => void;
}

type FeatureCardProps = {
    feature: AdditionalFeature;
    isSelected: boolean;
    onSelect: () => void;
}

type StepIndicatorProps = {
    step: number;
    isActive: boolean;
    isComplete: boolean;
    onClick: () => void;
    canClick: boolean;
}

type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

// WhatsApp Icon
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

// Primary Button Component
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-3 px-4 bg-accent-red dark:bg-accent-yellow 
      text-white dark:text-gray-900 rounded-xl font-medium 
      hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90 
      transition-all flex items-center justify-center gap-2
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-0.5'}`}
    >
        {children}
    </button>
);

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ service, isSelected, onSelect }) => (
    <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ y: 0 }}
        className={`group relative overflow-hidden p-4 rounded-2xl cursor-pointer transition-all h-full
      ${isSelected
            ? 'bg-accent-red/10 dark:bg-accent-yellow/10 ring-2 ring-accent-red dark:ring-accent-yellow'
            : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm hover:shadow-md'
        }`}
        onClick={onSelect}
    >
        <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden">
            <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div className="z-10 relative">
            <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg
          ${isSelected
                    ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}
                >
                    <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {service.name}
                </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {service.description}
            </p>
            <div className="space-y-1.5">
                {service.features.slice(0, 3).map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                        <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                    </div>
                ))}
                {service.features.length > 3 && (
                    <div className="text-sm text-accent-red dark:text-accent-yellow font-medium">
                        +{service.features.length - 3} más
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

// Path Card Component
const PathCard: React.FC<PathCardProps> = ({ path, isSelected, onSelect }) => (
    <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ y: 0 }}
        className={`group relative overflow-hidden p-4 rounded-2xl cursor-pointer transition-all h-full
      ${isSelected
            ? 'bg-accent-red/10 dark:bg-accent-yellow/10 ring-2 ring-accent-red dark:ring-accent-yellow'
            : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm hover:shadow-md'
        }`}
        onClick={onSelect}
    >
        {path.image && (
            <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden">
                <Image
                    src={path.image}
                    alt={path.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
        )}
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg
          ${isSelected
                    ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                }`}
                >
                    <path.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {path.name}
                </h3>
            </div>
            <span className="text-accent-red dark:text-accent-yellow font-semibold">
        ${path.basePrice}
      </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {path.description}
        </p>
        <div className="space-y-1.5">
            {path.features.slice(0, 3).map((feature, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                    <Check className="w-4 h-4 text-accent-red dark:text-accent-yellow flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                </div>
            ))}
            {path.features.length > 3 && (
                <div className="text-sm text-accent-red dark:text-accent-yellow font-medium">
                    +{path.features.length - 3} más
                </div>
            )}
        </div>
    </motion.div>
);

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isSelected, onSelect }) => (
    <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        className={`relative p-4 rounded-xl cursor-pointer transition-all
      ${isSelected
            ? 'bg-accent-red/10 dark:bg-accent-yellow/10 ring-2 ring-accent-red dark:ring-accent-yellow'
            : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm hover:shadow-md'
        }`}
        onClick={onSelect}
    >
        {feature.popular && (
            <span className="absolute -top-2 -right-2 px-2 py-0.5
        bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900
        text-xs font-medium rounded-full shadow-lg"
            >
        Popular
      </span>
        )}
        <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg shrink-0
        ${isSelected
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
);

// Step Indicator Component
const StepIndicator: React.FC<StepIndicatorProps> = ({ step, isActive, isComplete, onClick, canClick }) => (
    <button
        onClick={canClick ? onClick : undefined}
        disabled={!canClick}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all
      ${isComplete
            ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
            : isActive
                ? 'bg-white dark:bg-gray-800 text-accent-red dark:text-accent-yellow ring-2 ring-accent-red dark:ring-accent-yellow'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
        }
      ${canClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
        {isComplete ? <Check className="w-4 h-4" /> : step}
    </button>
);

export default function PriceCalculator() {
    const [step, setStep] = useState<number>(1);
    const [selectedService, setSelectedService] = useState<string>('');
    const [selectedPath, setSelectedPath] = useState<string>('');
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [showSummary, setShowSummary] = useState<boolean>(false);

    const resetAll = () => {
        setSelectedService('');
        setSelectedPath('');
        setSelectedFeatures([]);
        setStep(1);
        setShowSummary(false);
    };

    const handleServiceSelect = (serviceId: string) => {
        setSelectedService(serviceId);
        setStep(2);
    };

    const handlePathSelect = (pathId: string) => {
        setSelectedPath(pathId);
        setStep(3);
    };

    const toggleFeature = (featureId: string) => {
        setSelectedFeatures(prev =>
            prev.includes(featureId)
                ? prev.filter(id => id !== featureId)
                : [...prev, featureId]
        );
    };

    const handleBack = () => {
        if (step === 3) {
            setStep(2);
        } else if (step === 2) {
            setStep(1);
            setSelectedPath('');
        }
    };

    const services: ServiceOption[] = [
        {
            id: 'wordpress',
            name: 'Página Web',
            description: 'Desarrollo profesional de sitios web con WordPress o PHP. Ideal para negocios que necesitan una presencia online efectiva.',
            icon: Monitor,
            image: '/ilustraciones/illustrate-a-wordpress-development-scene-with-a-hi__30684.webp',
            features: [
                'Panel de administración intuitivo',
                'Optimización de velocidad',
                'Diseño responsive',
                'Integración con redes sociales'
            ],
            paths: [
                {
                    id: 'informative',
                    name: 'Sitio Informativo',
                    description: 'Página web profesional para presentar tu negocio, servicios y construir presencia online.',
                    icon: Globe,
                    basePrice: 199,
                    image: '/ilustraciones/an-outdoor-cafe-scene-with-two-middleeastern-men-a__30688.webp',
                    features: [
                        'Hasta 5 páginas principales',
                        'Formulario de contacto avanzado',
                        'Integración con Google Maps',
                        'Configuración de Analytics'
                    ]
                },
                {
                    id: 'landing',
                    name: 'Landing Page',
                    description: 'Página de aterrizaje optimizada para convertir visitantes en clientes potenciales.',
                    icon: Store,
                    basePrice: 299,
                    image: '/ilustraciones/create-illustrations-for-wordpress-development-fea__30685.webp',
                    features: [
                        'Diseño orientado a conversión',
                        'Formularios de captura de leads',
                        'Llamadas a la acción estratégicas',
                        'Seguimiento de conversiones'
                    ]
                },
                {
                    id: 'catalog',
                    name: 'Catálogo Digital',
                    description: 'Catálogo interactivo para mostrar productos o servicios con detalles y cotizaciones.',
                    icon: Store,
                    basePrice: 199,
                    image: '/ilustraciones/diverse-group-of-four-people-in-a-modern-office-__30691.webp',
                    features: [
                        'Catálogo de productos avanzado',
                        'Sistema de filtros y búsqueda',
                        'Galería de imágenes profesional',
                        'Sistema de cotizaciones online'
                    ]
                }
            ]
        },
        {
            id: 'custom',
            name: 'Desarrollo a Medida',
            description: 'Soluciones web personalizadas con tecnologías modernas y código optimizado para máximo rendimiento.',
            icon: Code,
            image: '/ilustraciones/create-an-image-of-an-asian-female-developer-colla__30686.webp',
            features: [
                'Arquitectura moderna y escalable',
                'Código limpio y mantenible',
                'Rendimiento optimizado',
                'SEO técnico avanzado'
            ],
            paths: [
                {
                    id: 'frontend',
                    name: 'Frontend React/Next.js',
                    description: 'Desarrollo frontend moderno con React y Next.js para aplicaciones web dinámicas.',
                    icon: Monitor,
                    basePrice: 299,
                    features: [
                        'Interfaces modernas y responsivas',
                        'Optimización de carga',
                        'Componentes reutilizables',
                        'Consumo de API',
                        'PWA (Progressive Web App)'
                    ]
                },
                {
                    id: 'backend',
                    name: 'Backend Node.js',
                    description: 'Desarrollo backend robusto con Node.js y bases de datos optimizadas.',
                    icon: Database,
                    basePrice: 399,
                    features: [
                        'API RESTful personalizada',
                        'Integración con bases relacionales',
                        'Sistema de autenticación',
                        'Documentación técnica'
                    ]
                },
                {
                    id: 'mobile',
                    name: 'App Móvil React Native',
                    description: 'Aplicaciones móviles nativas para iOS y Android con React Native.',
                    icon: Smartphone,
                    basePrice: 499,
                    features: [
                        'Desarrollo multiplataforma',
                        'Notificaciones push',
                        'Modo sin conexión',
                        'Analytics integrado'
                    ]
                }
            ]
        },
        {
            id: 'ecommerce',
            name: 'E-commerce',
            description: 'Tiendas online completas con gestión de productos, pagos y envíos integrados.',
            icon: ShoppingCart,
            image: '/ilustraciones/design-an-illustration-of-a-black-male-developer-s__30687.webp',
            features: [
                'Gestión de productos',
                'Sistema de pagos',
                'Panel administrativo',
                'Reportes de ventas'
            ],
            paths: [
                {
                    id: 'basic',
                    name: 'Tienda Básica',
                    description: 'Tienda online esencial para empezar a vender por internet.',
                    icon: Store,
                    basePrice: 499,
                    features: [
                        'Hasta 50 productos',
                        'PayPal y tarjetas',
                        'Panel de control básico',
                        'Informes básicos'
                    ]
                },
                {
                    id: 'advanced',
                    name: 'Tienda Avanzada',
                    description: 'Solución completa para negocios en crecimiento.',
                    icon: ShoppingCart,
                    basePrice: 699,
                    features: [
                        'Productos ilimitados',
                        'Múltiples formas de pago',
                        'CRM integrado',
                        'Marketing y cupones'
                    ]
                },
                {
                    id: 'marketplace',
                    name: 'Marketplace',
                    description: 'Plataforma multi-vendedor con sistema de comisiones.',
                    icon: Store,
                    basePrice: 999,
                    features: [
                        'Sistema multi-vendedor',
                        'Gestión de comisiones',
                        'Chat entre usuarios',
                        'Panel avanzado'
                    ]
                }
            ]
        }
    ];

    const additionalFeatures: AdditionalFeature[] = [
        {
            id: 'seo',
            name: 'SEO Avanzado',
            price: 49,
            description: 'Optimización completa para buscadores incluyendo investigación de palabras clave, meta tags, estructura de URLs y seguimiento de posiciones.',
            icon: Search,
            popular: true
        },
        {
            id: 'hosting',
            name: 'Hosting Premium Anual',
            price: 49,
            description: 'Alojamiento empresarial de alto rendimiento con SSL gratuito, backups diarios, protección DDoS y soporte técnico 24/7.',
            icon: Server
        },
        {
            id: 'maintenance',
            name: 'Mantenimiento Mensual Avanzado',
            price: 19,
            description: 'Plan mensual de mantenimiento que incluye actualizaciones de seguridad, optimización de rendimiento y 4 horas de soporte prioritario.',
            icon: Wrench
        },
        {
            id: 'design',
            name: 'Diseño UI/UX',
            price: 99,
            description: 'Diseño profesional personalizado con wireframes, mockups en Figma/Illustrator e implementación responsive, hasta 5 páginas.',
            icon: Paintbrush,
            popular: true
        }
    ];

    const calculateTotal = () => {
        let total = 0;
        if (selectedPath) {
            const serviceData = services.find(s => s.id === selectedService);
            const pathData = serviceData?.paths.find(p => p.id === selectedPath);
            total += pathData?.basePrice || 0;
        }

        total += selectedFeatures.reduce((sum, featureId) => {
            const feature = additionalFeatures.find(f => f.id === featureId);
            return sum + (feature?.price || 0);
        }, 0);

        return total;
    };

    const handleRequestQuote = () => {
        const serviceData = services.find(s => s.id === selectedService);
        const pathData = serviceData?.paths.find(p => p.id === selectedPath);

        let message = `¡Hola! Me interesa cotizar este proyecto:\n\n`;
        message += `📌 Tipo de servicio: ${serviceData?.name}\n`;

        if (pathData) {
            message += `🎯 Especialización: ${pathData.name}\n`;
            message += `💰 Precio base: $${pathData.basePrice}\n`;
        }

        if (selectedFeatures.length > 0) {
            message += `\n✨ Características adicionales:\n`;
            selectedFeatures.forEach(featureId => {
                const feature = additionalFeatures.find(f => f.id === featureId);
                message += `- ${feature?.name}: $${feature?.price}\n`;
            });
            message += '\n';
        }

        message += `💵 Total estimado: $${calculateTotal()}\n\n`;
        message += `🔍 Características incluidas:\n`;
        serviceData?.features.forEach(feature => {
            message += `✓ ${feature}\n`;
        });
        if (pathData) {
            pathData.features.forEach(feature => {
                message += `✓ ${feature}\n`;
            });
        }

        const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const getCurrentServiceData = () => services.find(s => s.id === selectedService);
    const getCurrentPathData = () => getCurrentServiceData()?.paths.find(p => p.id === selectedPath);

    return (
        <section id="cotizador" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="inline-flex items-center justify-center p-3 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-xl">
                            <Calculator className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                        </span>
                        {(selectedService || selectedPath || selectedFeatures.length > 0) && (
                            <button
                                onClick={resetAll}
                                className="p-2 rounded-lg text-gray-500 hover:text-accent-red dark:hover:text-accent-yellow
                                    hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                                title="Reiniciar cotización"
                            >
                                <RefreshCw className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Cotizador de Proyectos
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Configura tu proyecto en tres simples pasos y obtén una cotización al instante
                    </p>
                </motion.div>

                {/* Step Indicator */}
                <div className="flex items-center justify-center mb-12">
                    <div className="flex items-center">
                        <StepIndicator
                            step={1}
                            isActive={step === 1}
                            isComplete={step > 1}
                            onClick={() => setStep(1)}
                            canClick={step > 1}
                        />
                        <div className={`w-12 h-1 ${step > 1 ? 'bg-accent-red dark:bg-accent-yellow' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                        <StepIndicator
                            step={2}
                            isActive={step === 2}
                            isComplete={step > 2}
                            onClick={() => selectedService ? setStep(2) : null}
                            canClick={!!selectedService && step > 2}
                        />
                        <div className={`w-12 h-1 ${step > 2 ? 'bg-accent-red dark:bg-accent-yellow' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                        <StepIndicator
                            step={3}
                            isActive={step === 3}
                            isComplete={false}
                            onClick={() => selectedPath ? setStep(3) : null}
                            canClick={!!selectedPath && step > 3}
                        />
                    </div>
                </div>

                {/* Main content */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {/* Step 1: Service Selection */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    1. Selecciona el tipo de servicio
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Elige la base para tu proyecto digital
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {services.map((service) => (
                                        <ServiceCard
                                            key={service.id}
                                            service={service}
                                            isSelected={selectedService === service.id}
                                            onSelect={() => handleServiceSelect(service.id)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Path Selection */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            2. Selecciona la especialización
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Personaliza según tus necesidades específicas
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
                                    >
                                        <X className="w-4 h-4" /> Cambiar servicio
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {getCurrentServiceData()?.paths.map((path) => (
                                        <PathCard
                                            key={path.id}
                                            path={path}
                                            isSelected={selectedPath === path.id}
                                            onSelect={() => handlePathSelect(path.id)}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Additional Features */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            3. Selecciona características adicionales
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Potencia tu proyecto con extras
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
                                    >
                                        <X className="w-4 h-4" /> Cambiar especialización
                                    </button>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {additionalFeatures.map((feature) => (
                                        <FeatureCard
                                            key={feature.id}
                                            feature={feature}
                                            isSelected={selectedFeatures.includes(feature.id)}
                                            onSelect={() => toggleFeature(feature.id)}
                                        />
                                    ))}
                                </div>

                                {/* Summary button */}
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => setShowSummary(true)}
                                        className="inline-flex items-center px-6 py-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 rounded-xl font-medium hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90 transition-all transform hover:-translate-y-0.5"
                                    >
                                        Ver resumen y cotización
                                        <ChevronRight className="ml-2 w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Summary Modal */}
                <AnimatePresence>
                    {showSummary && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                            onClick={() => setShowSummary(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full shadow-xl"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Resumen del Proyecto
                                    </h3>
                                    <button
                                        onClick={() => setShowSummary(false)}
                                        className="p-1 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                                        <span className="text-gray-600 dark:text-gray-400">Tipo de servicio</span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                           {getCurrentServiceData()?.name}
                                       </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                                        <span className="text-gray-600 dark:text-gray-400">Especialización</span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                           {getCurrentPathData()?.name}
                                       </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                                        <span className="text-gray-600 dark:text-gray-400">Precio base</span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                           ${getCurrentPathData()?.basePrice}
                                       </span>
                                    </div>

                                    {selectedFeatures.length > 0 && (
                                        <div className="pt-2">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                                Características adicionales:
                                            </p>
                                            {selectedFeatures.map(featureId => {
                                                const feature = additionalFeatures.find(f => f.id === featureId);
                                                return (
                                                    <div key={featureId} className="flex justify-between items-center py-1">
                                                       <span className="text-sm text-gray-600 dark:text-gray-400">
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

                                    <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                                        <span className="text-xl font-bold text-accent-red dark:text-accent-yellow">
                                           ${calculateTotal()}
                                       </span>
                                    </div>
                                </div>

                                <PrimaryButton onClick={handleRequestQuote}>
                                    <WhatsAppIcon />
                                    <span>Solicitar cotización por WhatsApp</span>
                                </PrimaryButton>

                                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
                                        También puedes contactarnos directamente
                                    </p>
                                    <div className="flex justify-center gap-6">
                                        <a
                                        href="tel:+593984264910"
                                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600
                                        dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
                                        hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
                                        title="Llamar ahora"
                                        >
                                        <Phone className="w-5 h-5" />
                                    </a>
<a
                                    href="mailto:info@torisoftt.com"
                                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600
                                    dark:text-gray-400 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10
                                    hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
                                    title="Enviar email"
                                    >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        </motion.div>
                        </motion.div>
                        )}
                </AnimatePresence>
            </div>
        </section>
    );
}