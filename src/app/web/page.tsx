// // // // 'use client'
// // // //
// // // // import { useState } from 'react'
// // // // import { motion, AnimatePresence } from 'framer-motion'
// // // // import {
// // // //     Globe,
// // // //     Server,
// // // //     Search,
// // // //     Rocket,
// // // //     Mail,
// // // //     Shield,
// // // //     Code,
// // // //     Smartphone,
// // // //     Settings,
// // // //     MessageSquare
// // // // } from 'lucide-react'
// // // //
// // // // import Navbar from '@/components/layout/Navbar'
// // // // import Footer from '@/components/layout/Footer'
// // // //
// // // // const features = [
// // // //     {
// // // //         icon: Globe,
// // // //         title: 'Dominio Gratis',
// // // //         description: 'Incluimos dominio .com gratis por un año con todos nuestros planes web'
// // // //     },
// // // //     {
// // // //         icon: Server,
// // // //         title: 'Hosting Premium',
// // // //         description: 'Hosting optimizado con SSL, backups diarios y soporte 24/7'
// // // //     },
// // // //     {
// // // //         icon: Mail,
// // // //         title: 'Correos Corporativos',
// // // //         description: 'Correos profesionales @tuempresa.com con Workspace'
// // // //     },
// // // //     {
// // // //         icon: Shield,
// // // //         title: 'Seguridad SSL',
// // // //         description: 'Certificado SSL gratuito para proteger los datos de tus usuarios'
// // // //     },
// // // //     {
// // // //         icon: Search,
// // // //         title: 'SEO Optimizado',
// // // //         description: 'Optimización para buscadores y mejores posiciones en Google'
// // // //     },
// // // //     {
// // // //         icon: Smartphone,
// // // //         title: 'Diseño Responsive',
// // // //         description: 'Adaptado a todos los dispositivos móviles y tablets'
// // // //     }
// // // // ]
// // // //
// // // // const plans = [
// // // //     {
// // // //         name: 'Landing Page',
// // // //         price: 199,
// // // //         description: 'Ideal para presentar tu negocio online',
// // // //         features: [
// // // //             'Diseño One Page',
// // // //             'Dominio .com gratis',
// // // //             'Hosting 1 año',
// // // //             '1 correo corporativo',
// // // //             'SSL gratuito',
// // // //             'Formulario de contacto'
// // // //         ],
// // // //         recommended: false
// // // //     },
// // // //     {
// // // //         name: 'Profesional',
// // // //         price: 299,
// // // //         description: 'Para negocios que necesitan más funcionalidades',
// // // //         features: [
// // // //             'Hasta 5 páginas',
// // // //             'WordPress Premium',
// // // //             'Blog incluido',
// // // //             '3 correos corporativos',
// // // //             'Chat WhatsApp',
// // // //             'Google Analytics',
// // // //             'Mantenimiento básico'
// // // //         ],
// // // //         recommended: true
// // // //     },
// // // //     {
// // // //         name: 'E-commerce',
// // // //         price: 399,
// // // //         description: 'Tienda online completa para vender en línea',
// // // //         features: [
// // // //             'WooCommerce Pro',
// // // //             'Productos ilimitados',
// // // //             'Pagos en línea',
// // // //             '5 correos corporativos',
// // // //             'Certificado SSL Premium',
// // // //             'Integración redes sociales',
// // // //             'Capacitación incluida'
// // // //         ],
// // // //         recommended: false
// // // //     }
// // // // ]
// // // //
// // // // const process = [
// // // //     {
// // // //         title: 'Planificación',
// // // //         description: 'Definimos objetivos y estructura del sitio',
// // // //         steps: [
// // // //             'Análisis de requerimientos',
// // // //             'Arquitectura de información',
// // // //             'Wireframes y mockups',
// // // //             'Selección de tecnologías'
// // // //         ]
// // // //     },
// // // //     {
// // // //         title: 'Diseño',
// // // //         description: 'Creamos la identidad visual de tu sitio',
// // // //         steps: [
// // // //             'Diseño UI/UX personalizado',
// // // //             'Paleta de colores',
// // // //             'Tipografías y elementos',
// // // //             'Responsive design'
// // // //         ]
// // // //     },
// // // //     {
// // // //         title: 'Desarrollo',
// // // //         description: 'Programación y configuración del sitio',
// // // //         steps: [
// // // //             'Desarrollo frontend/backend',
// // // //             'Integración CMS',
// // // //             'Optimización SEO',
// // // //             'Testing y ajustes'
// // // //         ]
// // // //     },
// // // //     {
// // // //         title: 'Lanzamiento',
// // // //         description: 'Configuración final y publicación',
// // // //         steps: [
// // // //             'Configuración hosting/dominio',
// // // //             'Migración y DNS',
// // // //             'Pruebas finales',
// // // //             'Monitoreo inicial'
// // // //         ]
// // // //     }
// // // // ]
// // // //
// // // // const support = [
// // // //     {
// // // //         icon: Settings,
// // // //         title: 'Mantenimiento',
// // // //         description: 'Actualizaciones de seguridad, backups y monitoreo continuo'
// // // //     },
// // // //     {
// // // //         icon: MessageSquare,
// // // //         title: 'Soporte Técnico',
// // // //         description: 'Asistencia por ticket, email o WhatsApp en horario laboral'
// // // //     },
// // // //     {
// // // //         icon: Code,
// // // //         title: 'Actualizaciones',
// // // //         description: 'Modificaciones menores y ajustes incluidos en el plan mensual'
// // // //     }
// // // // ]
// // // //
// // // // export default function WebDevelopmentPage() {
// // // //     const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
// // // //
// // // //     const handleContactWhatsApp = (plan: string = '') => {
// // // //         const message = plan
// // // //             ? `¡Hola! Me interesa el plan ${plan} para desarrollo web. ¿Podrían darme más información?`
// // // //             : '¡Hola! Me interesa el servicio de desarrollo web. ¿Podrían darme más información?';
// // // //
// // // //         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
// // // //     }
// // // //
// // // //     return (
// // // //         <>
// // // //             <Navbar />
// // // //             <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// // // //                 {/* Hero Section */}
// // // //                 <section className="py-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
// // // //                     <div className="max-w-7xl mx-auto px-6">
// // // //                         <motion.div
// // // //                             initial={{ opacity: 0, y: 20 }}
// // // //                             animate={{ opacity: 1, y: 0 }}
// // // //                             className="max-w-3xl mx-auto text-center"
// // // //                         >
// // // //                             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// // // //                                 Desarrollo Web Profesional en Ecuador
// // // //                             </h1>
// // // //                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// // // //                                 Creamos páginas web que convierten visitantes en clientes.
// // // //                                 Diseño personalizado, hosting premium y soporte técnico incluido.
// // // //                             </p>
// // // //                             <div className="flex flex-col sm:flex-row justify-center gap-4">
// // // //                                 <motion.button
// // // //                                     onClick={() => handleContactWhatsApp()}
// // // //                                     className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
// // // //                                     whileHover={{ scale: 1.05 }}
// // // //                                     whileTap={{ scale: 0.95 }}
// // // //                                 >
// // // //                                     Cotizar Ahora
// // // //                                 </motion.button>
// // // //                                 <motion.a
// // // //                                     href="#planes"
// // // //                                     className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
// // // //                                     whileHover={{ scale: 1.05 }}
// // // //                                     whileTap={{ scale: 0.95 }}
// // // //                                 >
// // // //                                     Ver Planes
// // // //                                 </motion.a>
// // // //                             </div>
// // // //                         </motion.div>
// // // //                     </div>
// // // //                 </section>
// // // //
// // // //                 {/* Features Grid */}
// // // //                 <section className="py-20">
// // // //                     <div className="max-w-7xl mx-auto px-6">
// // // //                         <motion.h2
// // // //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// // // //                             initial={{ opacity: 0, y: 20 }}
// // // //                             whileInView={{ opacity: 1, y: 0 }}
// // // //                             viewport={{ once: true }}
// // // //                         >
// // // //                             Todo lo que necesitas para tu sitio web
// // // //                         </motion.h2>
// // // //                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //                             {features.map((feature, index) => (
// // // //                                 <motion.div
// // // //                                     key={feature.title}
// // // //                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
// // // //                                     initial={{ opacity: 0, y: 20 }}
// // // //                                     whileInView={{ opacity: 1, y: 0 }}
// // // //                                     transition={{ delay: index * 0.1 }}
// // // //                                     viewport={{ once: true }}
// // // //                                 >
// // // //                                     <feature.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// // // //                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// // // //                                         {feature.title}
// // // //                                     </h3>
// // // //                                     <p className="text-gray-600 dark:text-gray-400">
// // // //                                         {feature.description}
// // // //                                     </p>
// // // //                                 </motion.div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 </section>
// // // //
// // // //                 {/* Plans Section */}
// // // //                 <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // // //                     <div className="max-w-7xl mx-auto px-6">
// // // //                         <motion.h2
// // // //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// // // //                             initial={{ opacity: 0, y: 20 }}
// // // //                             whileInView={{ opacity: 1, y: 0 }}
// // // //                             viewport={{ once: true }}
// // // //                         >
// // // //                             Planes de Desarrollo Web
// // // //                         </motion.h2>
// // // //                         <div className="grid md:grid-cols-3 gap-8">
// // // //                             {plans.map((plan, index) => (
// // // //                                 <motion.div
// // // //                                     key={plan.name}
// // // //                                     className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
// // // //                                         plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
// // // //                                     }`}
// // // //                                     initial={{ opacity: 0, y: 20 }}
// // // //                                     whileInView={{ opacity: 1, y: 0 }}
// // // //                                     transition={{ delay: index * 0.1 }}
// // // //                                     viewport={{ once: true }}
// // // //                                 >
// // // //                                     {plan.recommended && (
// // // //                                         <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
// // // //                       Recomendado
// // // //                     </span>
// // // //                                     )}
// // // //                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// // // //                                         {plan.name}
// // // //                                     </h3>
// // // //                                     <div className="flex items-baseline mb-4">
// // // //                     <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
// // // //                       ${plan.price}
// // // //                     </span>
// // // //                                         <span className="text-gray-500 dark:text-gray-400 ml-2">USD</span>
// // // //                                     </div>
// // // //                                     <p className="text-gray-600 dark:text-gray-400 mb-6">
// // // //                                         {plan.description}
// // // //                                     </p>
// // // //                                     <ul className="space-y-3 mb-8">
// // // //                                         {plan.features.map((feature) => (
// // // //                                             <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// // // //                                                 <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2" />
// // // //                                                 <span>{feature}</span>
// // // //                                             </li>
// // // //                                         ))}
// // // //                                     </ul>
// // // //                                     <button
// // // //                                         onClick={() => handleContactWhatsApp(plan.name)}
// // // //                                         className={`w-full py-2 rounded-lg transition-colors ${
// // // //                                             plan.recommended
// // // //                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// // // //                                                 : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
// // // //                                         }`}
// // // //                                     >
// // // //                                         Solicitar Plan
// // // //                                     </button>
// // // //                                 </motion.div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 </section>
// // // //
// // // //                 {/* Process Section */}
// // // //                 <section className="py-20">
// // // //                     <div className="max-w-7xl mx-auto px-6">
// // // //                         <motion.h2
// // // //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// // // //                             initial={{ opacity: 0, y: 20 }}
// // // //                             whileInView={{ opacity: 1, y: 0 }}
// // // //                             viewport={{ once: true }}
// // // //                         >
// // // //                             Proceso de Desarrollo
// // // //                         </motion.h2>
// // // //                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// // // //                             {process.map((step, index) => (
// // // //                                 <motion.div
// // // //                                     key={step.title}
// // // //                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
// // // //                                     initial={{ opacity: 0, y: 20 }}
// // // //                                     whileInView={{ opacity: 1, y: 0 }}
// // // //                                     transition={{ delay: index * 0.1 }}
// // // //                                     viewport={{ once: true }}
// // // //                                 >
// // // //                                     <div className="flex items-center gap-4 mb-4">
// // // //                     <span className="w-8 h-8 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
// // // //                       {index + 1}
// // // //                     </span>
// // // //                                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// // // //                                             {step.title}
// // // //                                         </h3>
// // // //                                     </div>
// // // //                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
// // // //                                         {step.description}
// // // //                                     </p>
// // // //                                     <ul className="space-y-2">
// // // //                                         {step.steps.map((item) => (
// // // //                                             <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// // // //                                                 <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2" />
// // // //                                                 <span>{item}</span>
// // // //                                             </li>
// // // //                                         ))}
// // // //                                     </ul>
// // // //                                 </motion.div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 </section>
// // // //
// // // //                 {/* Support Section */}
// // // //                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // // //                     <div className="max-w-7xl mx-auto px-6">
// // // //                         <motion.div
// // // //                             initial={{ opacity: 0, y: 20 }}
// // // //                             whileInView={{ opacity: 1, y: 0 }}
// // // //                             viewport={{ once: true }}
// // // //                             className="text-center max-w-3xl mx-auto mb-12"
// // // //                         >
// // // //                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// // // //                                 Soporte y Mantenimiento
// // // //                             </h2>
// // // //                             <p className="text-xl text-gray-600 dark:text-gray-400">
// // // //                                 Nos encargamos de mantener tu sitio web actualizado, seguro y funcionando perfectamente
// // // //                             </p>
// // // //                         </motion.div>
// // // //
// // // //                         <div className="grid md:grid-cols-3 gap-8">
// // // //                             {support.map((item, index) => (
// // // //                                 <motion.div
// // // //                                     key={item.title}
// // // //                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
// // // //                                     initial={{ opacity: 0, y: 20 }}
// // // //                                     whileInView={{ opacity: 1, y: 0 }}
// // // //                                     transition={{ delay: index * 0.1 }}
// // // //                                     viewport={{ once: true }}
// // // //                                 >
// // // //                                     <item.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// // // //                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// // // //                                         {item.title}
// // // //                                     </h3>
// // // //                                     <p className="text-gray-600 dark:text-gray-400">
// // // //                                         {item.description}
// // // //                                     </p>
// // // //                                 </motion.div>
// // // //                             ))}
// // // //                         </div>
// // // //                     </div>
// // // //                 </section>
// // // //
// // // //                 {/* CTA Section */}
// // // //                 <section className="py-20">
// // // //                     <div className="max-w-3xl mx-auto px-6 text-center">
// // // //                         <motion.div
// // // //                             initial={{ opacity: 0, y: 20 }}
// // // //                             whileInView={{ opacity: 1, y: 0 }}
// // // //                             viewport={{ once: true }}
// // // //                         >
// // // //                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// // // //                                 ¿Listo para empezar tu proyecto web?
// // // //                             </h2>
// // // //                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// // // //                                 Contáctanos hoy y obtén una cotización personalizada para tu sitio web
// // // //                             </p>
// // // //                             <motion.button
// // // //                                 onClick={() => handleContactWhatsApp()}
// // // //                                 className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
// // // //                                 whileHover={{ scale: 1.05 }}
// // // //                                 whileTap={{ scale: 0.95 }}
// // // //                             >
// // // //                                 Contactar Ahora
// // // //                             </motion.button>
// // // //                         </motion.div>
// // // //                     </div>
// // // //                 </section>
// // // //
// // // //             </main>
// // // //             <Footer />
// // // //         </>
// // // //     )
// // // // }
// // //
// // // 'use client'
// // //
// // // import { useState } from 'react'
// // // import { motion, AnimatePresence } from 'framer-motion'
// // // import {
// // //     Globe,
// // //     Server,
// // //     Search,
// // //     Rocket,
// // //     Mail,
// // //     Shield,
// // //     Code,
// // //     Smartphone,
// // //     Settings,
// // //     MessageSquare
// // // } from 'lucide-react'
// // //
// // // import Navbar from '@/components/layout/Navbar'
// // // import Footer from '@/components/layout/Footer'
// // //
// // // const features = [
// // //     {
// // //         icon: Globe,
// // //         title: 'Dominio Gratis',
// // //         description: 'Incluimos dominio .com gratis por un año con todos nuestros planes web'
// // //     },
// // //     {
// // //         icon: Server,
// // //         title: 'Hosting Premium',
// // //         description: 'Hosting optimizado con SSL, backups diarios y soporte 24/7'
// // //     },
// // //     {
// // //         icon: Mail,
// // //         title: 'Correos Corporativos',
// // //         description: 'Correos profesionales @tuempresa.com con Workspace'
// // //     },
// // //     {
// // //         icon: Shield,
// // //         title: 'Seguridad SSL',
// // //         description: 'Certificado SSL gratuito para proteger los datos de tus usuarios'
// // //     },
// // //     {
// // //         icon: Search,
// // //         title: 'SEO Optimizado',
// // //         description: 'Optimización para buscadores y mejores posiciones en Google'
// // //     },
// // //     {
// // //         icon: Smartphone,
// // //         title: 'Diseño Responsive',
// // //         description: 'Adaptado a todos los dispositivos móviles y tablets'
// // //     }
// // // ]
// // //
// // // const plans = [
// // //     {
// // //         name: 'Landing Page',
// // //         price: 199,
// // //         description: 'Ideal para presentar tu negocio online',
// // //         features: [
// // //             'Diseño One Page',
// // //             'Dominio .com gratis',
// // //             'Hosting 1 año',
// // //             '1 correo corporativo',
// // //             'SSL gratuito',
// // //             'Formulario de contacto'
// // //         ],
// // //         recommended: false
// // //     },
// // //     {
// // //         name: 'Profesional',
// // //         price: 299,
// // //         description: 'Para negocios que necesitan más funcionalidades',
// // //         features: [
// // //             'Hasta 5 páginas',
// // //             'WordPress Premium',
// // //             'Blog incluido',
// // //             '3 correos corporativos',
// // //             'Chat WhatsApp',
// // //             'Google Analytics',
// // //             'Mantenimiento básico'
// // //         ],
// // //         recommended: true
// // //     },
// // //     {
// // //         name: 'E-commerce',
// // //         price: 399,
// // //         description: 'Tienda online completa para vender en línea',
// // //         features: [
// // //             'WooCommerce Pro',
// // //             'Productos ilimitados',
// // //             'Pagos en línea',
// // //             '5 correos corporativos',
// // //             'Certificado SSL Premium',
// // //             'Integración redes sociales',
// // //             'Capacitación incluida'
// // //         ],
// // //         recommended: false
// // //     }
// // // ]
// // //
// // // const process = [
// // //     {
// // //         title: 'Planificación',
// // //         description: 'Definimos objetivos y estructura del sitio',
// // //         steps: [
// // //             'Análisis de requerimientos',
// // //             'Arquitectura de información',
// // //             'Wireframes y mockups',
// // //             'Selección de tecnologías'
// // //         ]
// // //     },
// // //     {
// // //         title: 'Diseño',
// // //         description: 'Creamos la identidad visual de tu sitio',
// // //         steps: [
// // //             'Diseño UI/UX personalizado',
// // //             'Paleta de colores',
// // //             'Tipografías y elementos',
// // //             'Responsive design'
// // //         ]
// // //     },
// // //     {
// // //         title: 'Desarrollo',
// // //         description: 'Programación y configuración del sitio',
// // //         steps: [
// // //             'Desarrollo frontend/backend',
// // //             'Integración CMS',
// // //             'Optimización SEO',
// // //             'Testing y ajustes'
// // //         ]
// // //     },
// // //     {
// // //         title: 'Lanzamiento',
// // //         description: 'Configuración final y publicación',
// // //         steps: [
// // //             'Configuración hosting/dominio',
// // //             'Migración y DNS',
// // //             'Pruebas finales',
// // //             'Monitoreo inicial'
// // //         ]
// // //     }
// // // ]
// // //
// // // const support = [
// // //     {
// // //         icon: Settings,
// // //         title: 'Mantenimiento',
// // //         description: 'Actualizaciones de seguridad, backups y monitoreo continuo'
// // //     },
// // //     {
// // //         icon: MessageSquare,
// // //         title: 'Soporte Técnico',
// // //         description: 'Asistencia por ticket, email o WhatsApp en horario laboral'
// // //     },
// // //     {
// // //         icon: Code,
// // //         title: 'Actualizaciones',
// // //         description: 'Modificaciones menores y ajustes incluidos en el plan mensual'
// // //     }
// // // ]
// // //
// // // export default function WebDevelopmentPage() {
// // //     const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
// // //
// // //     const handleContactWhatsApp = (plan: string = '') => {
// // //         const message = plan
// // //             ? `¡Hola! Me interesa el plan ${plan} para desarrollo web. ¿Podrían darme más información?`
// // //             : '¡Hola! Me interesa el servicio de desarrollo web. ¿Podrían darme más información?';
// // //
// // //         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
// // //     }
// // //
// // //     return (
// // //         <>
// // //             <Navbar />
// // //             <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// // //                 {/* Hero Section */}
// // //                 <section className="py-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
// // //                     <div className="max-w-7xl mx-auto px-6">
// // //                         <motion.div
// // //                             initial={{ opacity: 0, y: 20 }}
// // //                             animate={{ opacity: 1, y: 0 }}
// // //                             className="max-w-3xl mx-auto text-center"
// // //                         >
// // //                             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// // //                                 Desarrollo Web Profesional en Ecuador
// // //                             </h1>
// // //                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// // //                                 Creamos páginas web que convierten visitantes en clientes.
// // //                                 Diseño personalizado, hosting premium y soporte técnico incluido.
// // //                             </p>
// // //                             <div className="flex flex-col sm:flex-row justify-center gap-4">
// // //                                 <motion.button
// // //                                     onClick={() => handleContactWhatsApp()}
// // //                                     className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
// // //                                     whileHover={{ scale: 1.05 }}
// // //                                     whileTap={{ scale: 0.95 }}
// // //                                 >
// // //                                     Cotizar Ahora
// // //                                 </motion.button>
// // //                                 <motion.a
// // //                                     href="#planes"
// // //                                     className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
// // //                                     whileHover={{ scale: 1.05 }}
// // //                                     whileTap={{ scale: 0.95 }}
// // //                                 >
// // //                                     Ver Planes
// // //                                 </motion.a>
// // //                             </div>
// // //                         </motion.div>
// // //                     </div>
// // //                 </section>
// // //
// // //                 {/* Features Section */}
// // //                 <section className="py-20">
// // //                     <div className="max-w-7xl mx-auto px-6">
// // //                         <AnimatePresence mode="wait">
// // //                             {features.map((feature, index) => (
// // //                                 selectedFeature === index && (
// // //                                     <motion.div
// // //                                         key={feature.title}
// // //                                         initial={{ opacity: 0, y: 20 }}
// // //                                         animate={{ opacity: 1, y: 0 }}
// // //                                         exit={{ opacity: 0, y: -20 }}
// // //                                         className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
// // //                                     >
// // //                                         <div className="flex-1 space-y-6">
// // //                                             <feature.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
// // //                                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// // //                                                 {feature.title}
// // //                                             </h3>
// // //                                             <p className="text-lg text-gray-600 dark:text-gray-400">
// // //                                                 {feature.description}
// // //                                             </p>
// // //                                             {feature.details && (
// // //                                                 <ul className="space-y-3">
// // //                                                     {feature.details.map((detail, i) => (
// // //                                                         <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// // //                                                             <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2" />
// // //                                                             <span>{detail}</span>
// // //                                                         </li>
// // //                                                     ))}
// // //                                                 </ul>
// // //                                             )}
// // //                                         </div>
// // //                                         <div className="flex-1">
// // //                                             <img
// // //                                                 src={feature.image}
// // //                                                 alt={feature.title}
// // //                                                 className="w-full h-64 object-cover rounded-lg"
// // //                                             />
// // //                                         </div>
// // //                                     </motion.div>
// // //                                 )
// // //                             ))}
// // //                         </AnimatePresence>
// // //
// // //                         <div className="flex justify-center gap-2 mt-8">
// // //                             {features.map((_, index) => (
// // //                                 <button
// // //                                     key={index}
// // //                                     onClick={() => setSelectedFeature(index)}
// // //                                     className={`w-3 h-3 rounded-full transition-colors ${
// // //                                         selectedFeature === index
// // //                                             ? 'bg-accent-red dark:bg-accent-yellow'
// // //                                             : 'bg-gray-300 dark:bg-gray-600'
// // //                                     }`}
// // //                                 />
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </section>
// // //
// // //                 {/* Plans Section */}
// // //                 <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // //                     <div className="max-w-7xl mx-auto px-6">
// // //                         <motion.h2
// // //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// // //                             initial={{ opacity: 0, y: 20 }}
// // //                             whileInView={{ opacity: 1, y: 0 }}
// // //                             viewport={{ once: true }}
// // //                         >
// // //                             Planes de Desarrollo Web
// // //                         </motion.h2>
// // //                         <div className="grid md:grid-cols-3 gap-8">
// // //                             {plans.map((plan, index) => (
// // //                                 <motion.div
// // //                                     key={plan.name}
// // //                                     className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
// // //                                         plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
// // //                                     }`}
// // //                                     initial={{ opacity: 0, y: 20 }}
// // //                                     whileInView={{ opacity: 1, y: 0 }}
// // //                                     transition={{ delay: index * 0.1 }}
// // //                                     viewport={{ once: true }}
// // //                                 >
// // //                                     {plan.recommended && (
// // //                                         <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
// // //                       Recomendado
// // //                     </span>
// // //                                     )}
// // //                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// // //                                         {plan.name}
// // //                                     </h3>
// // //                                     <div className="flex items-baseline mb-4">
// // //                     <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
// // //                       ${plan.price}
// // //                     </span>
// // //                                         <span className="text-gray-500 dark:text-gray-400 ml-2">USD</span>
// // //                                     </div>
// // //                                     <p className="text-gray-600 dark:text-gray-400 mb-6">
// // //                                         {plan.description}
// // //                                     </p>
// // //                                     <ul className="space-y-3 mb-8">
// // //                                         {plan.features.map((feature) => (
// // //                                             <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// // //                                                 <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2" />
// // //                                                 <span>{feature}</span>
// // //                                             </li>
// // //                                         ))}
// // //                                     </ul>
// // //                                     <button
// // //                                         onClick={() => handleContactWhatsApp(plan.name)}
// // //                                         className={`w-full py-2 rounded-lg transition-colors ${
// // //                                             plan.recommended
// // //                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// // //                                                 : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
// // //                                         }`}
// // //                                     >
// // //                                         Solicitar Plan
// // //                                     </button>
// // //                                 </motion.div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </section>
// // //
// // //                 {/* Process Section */}
// // //                 <section className="py-20">
// // //                     <div className="max-w-7xl mx-auto px-6">
// // //                         <motion.h2
// // //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// // //                             initial={{ opacity: 0, y: 20 }}
// // //                             whileInView={{ opacity: 1, y: 0 }}
// // //                             viewport={{ once: true }}
// // //                         >
// // //                             Proceso de Desarrollo
// // //                         </motion.h2>
// // //                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //                             {process.map((step, index) => (
// // //                                 <motion.div
// // //                                     key={step.title}
// // //                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
// // //                                     initial={{ opacity: 0, y: 20 }}
// // //                                     whileInView={{ opacity: 1, y: 0 }}
// // //                                     transition={{ delay: index * 0.1 }}
// // //                                     viewport={{ once: true }}
// // //                                 >
// // //                                     <div className="flex items-center gap-4 mb-4">
// // //                     <span className="w-8 h-8 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
// // //                       {index + 1}
// // //                     </span>
// // //                                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// // //                                             {step.title}
// // //                                         </h3>
// // //                                     </div>
// // //                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
// // //                                         {step.description}
// // //                                     </p>
// // //                                     <ul className="space-y-2">
// // //                                         {step.steps.map((item) => (
// // //                                             <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// // //                                                 <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2" />
// // //                                                 <span>{item}</span>
// // //                                             </li>
// // //                                         ))}
// // //                                     </ul>
// // //                                 </motion.div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </section>
// // //
// // //                 {/* Support Section */}
// // //                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // //                     <div className="max-w-7xl mx-auto px-6">
// // //                         <motion.div
// // //                             initial={{ opacity: 0, y: 20 }}
// // //                             whileInView={{ opacity: 1, y: 0 }}
// // //                             viewport={{ once: true }}
// // //                             className="text-center max-w-3xl mx-auto mb-12"
// // //                         >
// // //                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// // //                                 Soporte y Mantenimiento
// // //                             </h2>
// // //                             <p className="text-xl text-gray-600 dark:text-gray-400">
// // //                                 Nos encargamos de mantener tu sitio web actualizado, seguro y funcionando perfectamente
// // //                             </p>
// // //                         </motion.div>
// // //
// // //                         <div className="grid md:grid-cols-3 gap-8">
// // //                             {support.map((item, index) => (
// // //                                 <motion.div
// // //                                     key={item.title}
// // //                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
// // //                                     initial={{ opacity: 0, y: 20 }}
// // //                                     whileInView={{ opacity: 1, y: 0 }}
// // //                                     transition={{ delay: index * 0.1 }}
// // //                                     viewport={{ once: true }}
// // //                                 >
// // //                                     <item.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// // //                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// // //                                         {item.title}
// // //                                     </h3>
// // //                                     <p className="text-gray-600 dark:text-gray-400">
// // //                                         {item.description}
// // //                                     </p>
// // //                                 </motion.div>
// // //                             ))}
// // //                         </div>
// // //                     </div>
// // //                 </section>
// // //
// // //                 {/* CTA Section */}
// // //                 <section className="py-20">
// // //                     <div className="max-w-3xl mx-auto px-6 text-center">
// // //                         <motion.div
// // //                             initial={{ opacity: 0, y: 20 }}
// // //                             whileInView={{ opacity: 1, y: 0 }}
// // //                             viewport={{ once: true }}
// // //                         >
// // //                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// // //                                 ¿Listo para empezar tu proyecto web?
// // //                             </h2>
// // //                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// // //                                 Contáctanos hoy y obtén una cotización personalizada para tu sitio web
// // //                             </p>
// // //                             <motion.button
// // //                                 onClick={() => handleContactWhatsApp()}
// // //                                 className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
// // //                                 whileHover={{ scale: 1.05 }}
// // //                                 whileTap={{ scale: 0.95 }}
// // //                             >
// // //                                 Contactar Ahora
// // //                             </motion.button>
// // //                         </motion.div>
// // //                     </div>
// // //                 </section>
// // //
// // //             </main>
// // //             <Footer />
// // //         </>
// // //     )
// // // }
// //
// //
// // 'use client'
// //
// // import { useState, useEffect } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import {
// //     Globe,
// //     Server,
// //     Search,
// //     Rocket,
// //     Mail,
// //     Shield,
// //     Code,
// //     Smartphone,
// //     Settings,
// //     MessageSquare,
// //     CheckCircle
// // } from 'lucide-react'
// // import Image from 'next/image'
// // import Navbar from '@/components/layout/Navbar'
// // import Footer from '@/components/layout/Footer'
// //
// // const features = [
// //     {
// //         icon: Globe,
// //         title: 'Dominios',
// //         description: 'Te ayudamos con todo lo relacionado a tu dominio web',
// //         image: 'https://img1.wsimg.com/cdnassets/transform/c502bc73-bdb3-49f5-97db-f731fda682c4/Mega_MRQ_Domains',
// //         details: [
// //             'Asesoría en la elección del mejor dominio',
// //             'Gestión completa de la compra si lo necesitas',
// //             'Configuración DNS y conexión con hosting existente',
// //             'Renovación y mantenimiento del dominio'
// //         ]
// //     },
// //     {
// //         icon: Server,
// //         title: 'Hosting Premium',
// //         description: 'Alojamiento web profesional con máximo rendimiento',
// //         image: 'https://img1.wsimg.com/cdnassets/transform/fc524f9d-e34b-44d7-9ab3-d824e96c6083/gd-websitebuilder-marquee-desktop',
// //         details: [
// //             'Migración gratuita desde tu hosting actual',
// //             'Backups diarios automáticos',
// //             '99.9% de tiempo de actividad garantizado',
// //             'Panel de control intuitivo'
// //         ]
// //     },
// //     {
// //         icon: Mail,
// //         title: 'Correos Corporativos',
// //         description: 'Correos profesionales para tu empresa',
// //         image: 'https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small',
// //         details: [
// //             'Correos @tuempresa.com',
// //             'Integración con Gmail y Outlook',
// //             'Capacidad de almacenamiento flexible',
// //             'Soporte técnico incluido'
// //         ]
// //     },
// //     {
// //         icon: Shield,
// //         title: 'Seguridad Total',
// //         description: 'Protección completa para tu sitio web',
// //         image: 'https://img1.wsimg.com/cdnassets/transform/d080bfb5-4ece-4e5d-add2-25f32a27222a/FOSMO-96642_Mega-Mrq-Image-Test_Email-Category-SLP',
// //         details: [
// //             'Certificado SSL gratuito',
// //             'Firewall de aplicaciones web',
// //             'Protección contra malware',
// //             'Monitoreo 24/7'
// //         ]
// //     }
// // ]
// //
// // const plans = [
// //     {
// //         name: 'Landing Page',
// //         price: 199,
// //         description: 'Ideal para presentar tu negocio online',
// //         features: [
// //             'Diseño One Page',
// //             'Asesoría en dominio',
// //             'Hosting 1 año',
// //             '1 correo corporativo',
// //             'SSL gratuito',
// //             'Formulario de contacto'
// //         ],
// //         recommended: false
// //     },
// //     {
// //         name: 'Profesional',
// //         price: 299,
// //         description: 'Para negocios que necesitan más funcionalidades',
// //         features: [
// //             'Hasta 5 páginas',
// //             'WordPress Premium',
// //             'Blog incluido',
// //             '3 correos corporativos',
// //             'Chat WhatsApp',
// //             'Google Analytics',
// //             'Mantenimiento básico'
// //         ],
// //         recommended: true
// //     },
// //     {
// //         name: 'E-commerce',
// //         price: 399,
// //         description: 'Tienda online completa para vender en línea',
// //         features: [
// //             'WooCommerce Pro',
// //             'Productos ilimitados',
// //             'Pagos en línea',
// //             '5 correos corporativos',
// //             'Certificado SSL Premium',
// //             'Integración redes sociales',
// //             'Capacitación incluida'
// //         ],
// //         recommended: false
// //     }
// // ]
// //
// // const process = [
// //     {
// //         title: 'Planificación',
// //         description: 'Definimos objetivos y estructura del sitio',
// //         steps: [
// //             'Análisis de requerimientos',
// //             'Arquitectura de información',
// //             'Wireframes y mockups',
// //             'Selección de tecnologías'
// //         ]
// //     },
// //     {
// //         title: 'Diseño',
// //         description: 'Creamos la identidad visual de tu sitio',
// //         steps: [
// //             'Diseño UI/UX personalizado',
// //             'Paleta de colores',
// //             'Tipografías y elementos',
// //             'Responsive design'
// //         ]
// //     },
// //     {
// //         title: 'Desarrollo',
// //         description: 'Programación y configuración del sitio',
// //         steps: [
// //             'Desarrollo frontend/backend',
// //             'Integración CMS',
// //             'Optimización SEO',
// //             'Testing y ajustes'
// //         ]
// //     },
// //     {
// //         title: 'Lanzamiento',
// //         description: 'Configuración final y publicación',
// //         steps: [
// //             'Configuración hosting/dominio',
// //             'Migración y DNS',
// //             'Pruebas finales',
// //             'Monitoreo inicial'
// //         ]
// //     }
// // ]
// //
// // const support = [
// //     {
// //         icon: Settings,
// //         title: 'Mantenimiento',
// //         description: 'Actualizaciones de seguridad, backups y monitoreo continuo'
// //     },
// //     {
// //         icon: MessageSquare,
// //         title: 'Soporte Técnico',
// //         description: 'Asistencia por ticket, email o WhatsApp en horario laboral'
// //     },
// //     {
// //         icon: Code,
// //         title: 'Actualizaciones',
// //         description: 'Modificaciones menores y ajustes incluidos en el plan mensual'
// //     }
// // ]
// //
// // export default function WebDevelopmentPage() {
// //     const [selectedPlan, setSelectedPlan] = useState<number | null>(null)
// //     const [selectedFeature, setSelectedFeature] = useState(0)
// //
// //     useEffect(() => {
// //         const timer = setInterval(() => {
// //             setSelectedFeature((prev) => (prev + 1) % features.length)
// //         }, 8000)
// //
// //         return () => clearInterval(timer)
// //     }, [])
// //
// //     const handleContactWhatsApp = (plan: string = '') => {
// //         const message = plan
// //             ? `¡Hola! Me interesa el plan ${plan} para desarrollo web. ¿Podrían darme más información?`
// //             : '¡Hola! Me interesa el servicio de desarrollo web. ¿Podrían darme más información?';
// //
// //         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
// //     }
// //
// //     return (
// //         <>
// //             <Navbar />
// //             <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// //                 {/* Hero Section */}
// //                 <section className="py-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <motion.div
// //                             initial={{ opacity: 0, y: 20 }}
// //                             animate={{ opacity: 1, y: 0 }}
// //                             className="max-w-3xl mx-auto text-center"
// //                         >
// //                             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// //                                 Desarrollo Web Profesional en Ecuador
// //                             </h1>
// //                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// //                                 Creamos páginas web que convierten visitantes en clientes.
// //                                 Diseño personalizado, hosting premium y soporte técnico incluido.
// //                             </p>
// //                             <div className="flex flex-col sm:flex-row justify-center gap-4">
// //                                 <motion.button
// //                                     onClick={() => handleContactWhatsApp()}
// //                                     className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
// //                                     whileHover={{ scale: 1.05 }}
// //                                     whileTap={{ scale: 0.95 }}
// //                                 >
// //                                     Cotizar Ahora
// //                                 </motion.button>
// //                                 <motion.a
// //                                     href="#planes"
// //                                     className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
// //                                     whileHover={{ scale: 1.05 }}
// //                                     whileTap={{ scale: 0.95 }}
// //                                 >
// //                                     Ver Planes
// //                                 </motion.a>
// //                             </div>
// //                         </motion.div>
// //                     </div>
// //                 </section>
// //
// //                 {/* Features Section */}
// //                 <section className="py-20">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <motion.h2
// //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// //                             initial={{ opacity: 0, y: 20 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true }}
// //                         >
// //                             Todo lo que necesitas para tu sitio web
// //                         </motion.h2>
// //                         <AnimatePresence mode="wait">
// //                             {features.map((feature, index) => (
// //                                 selectedFeature === index && (
// //                                     <motion.div
// //                                         key={feature.title}
// //                                         initial={{ opacity: 0, y: 20 }}
// //                                         animate={{ opacity: 1, y: 0 }}
// //                                         exit={{ opacity: 0, y: -20 }}
// //                                         className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
// //                                     >
// //                                         <div className="flex-1 space-y-6">
// //                                             <feature.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
// //                                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
// //                                                 {feature.title}
// //                                             </h3>
// //                                             <p className="text-lg text-gray-600 dark:text-gray-400">
// //                                                 {feature.description}
// //                                             </p>
// //                                             {feature.details && (
// //                                                 <ul className="space-y-3">
// //                                                     {feature.details.map((detail, i) => (
// //                                                         <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// //                                                             <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
// //                                                             <span>{detail}</span>
// //                                                         </li>
// //                                                     ))}
// //                                                 </ul>
// //                                             )}
// //                                         </div>
// //                                         <div className="flex-1">
// //                                             <img
// //                                                 src={feature.image}
// //                                                 alt={feature.title}
// //                                                 className="w-full h-80 object-cover rounded-lg"
// //                                             />
// //                                         </div>
// //                                     </motion.div>
// //                                 )
// //                             ))}
// //                         </AnimatePresence>
// //
// //                         <div className="flex justify-center gap-2 mt-8">
// //                             {features.map((_, index) => (
// //                                 <button
// //                                     key={index}
// //                                     onClick={() => setSelectedFeature(index)}
// //                                     className={`w-3 h-3 rounded-full transition-colors ${
// //                                         selectedFeature === index
// //                                             ? 'bg-accent-red dark:bg-accent-yellow'
// //                                             : 'bg-gray-300 dark:bg-gray-600'
// //                                     }`}
// //                                 />
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </section>
// //
// //                 {/* Plans Section */}
// //                 <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <motion.h2
// //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// //                             initial={{ opacity: 0, y: 20 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true }}
// //                         >
// //                             Planes de Desarrollo Web
// //                         </motion.h2>
// //                         <div className="grid md:grid-cols-3 gap-8">
// //                             {plans.map((plan, index) => (
// //                                 <motion.div
// //                                     key={plan.name}
// //                                     className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
// //                                         plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
// //                                     }`}
// //                                     initial={{ opacity: 0, y: 20 }}
// //                                     whileInView={{ opacity: 1, y: 0 }}
// //                                     transition={{ delay: index * 0.1 }}
// //                                     viewport={{ once: true }}
// //                                 >
// //                                     {plan.recommended && (
// //                                         <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
// //                       Recomendado
// //                     </span>
// //                                     )}
// //                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// //                                         {plan.name}
// //                                     </h3>
// //                                     <div className="flex items-baseline mb-4">
// //                     <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
// //                       ${plan.price}
// //                     </span>
// //                                         <span className="text-gray-500 dark:text-gray-400 ml-2">USD</span>
// //                                     </div>
// //                                     <p className="text-gray-600 dark:text-gray-400 mb-6">
// //                                         {plan.description}
// //                                     </p>
// //                                     <ul className="space-y-3 mb-8">
// //                                         {plan.features.map((feature) => (
// //                                             <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// //                                                 <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
// //                                                 <span>{feature}</span>
// //                                             </li>
// //                                         ))}
// //                                     </ul>
// //                                     <button
// //                                         onClick={() => handleContactWhatsApp(plan.name)}
// //                                         className={`w-full py-2 rounded-lg transition-colors ${
// //                                             plan.recommended
// //                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// //                                                 : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
// //                                         }`}
// //                                     >
// //                                         Solicitar Plan
// //                                     </button>
// //                                 </motion.div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </section>
// //
// //                 {/* Process Section */}
// //                 <section className="py-20">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <motion.h2
// //                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// //                             initial={{ opacity: 0, y: 20 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true }}
// //                         >
// //                             Proceso de Desarrollo
// //                         </motion.h2>
// //                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// //                             {process.map((step, index) => (
// //                                 <motion.div
// //                                     key={step.title}
// //                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
// //                                     initial={{ opacity: 0, y: 20 }}
// //                                     whileInView={{ opacity: 1, y: 0 }}
// //                                     transition={{ delay: index * 0.1 }}
// //                                     viewport={{ once: true }}
// //                                 >
// //                                     <div className="flex items-center gap-4 mb-4">
// //                     <span className="w-8 h-8 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
// //                       {index + 1}
// //                     </span>
// //                                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// //                                             {step.title}
// //                                         </h3>
// //                                     </div>
// //                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
// //                                         {step.description}
// //                                     </p>
// //                                     <ul className="space-y-2">
// //                                         {step.steps.map((item) => (
// //                                             <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// //                                                 <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
// //                                                 <span>{item}</span>
// //                                             </li>
// //                                         ))}
// //                                     </ul>
// //                                 </motion.div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </section>
// //
// //                 {/* Support Section */}
// //                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <motion.div
// //                             initial={{ opacity: 0, y: 20 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true }}
// //                             className="text-center max-w-3xl mx-auto mb-12"
// //                         >
// //                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// //                                 Soporte y Mantenimiento
// //                             </h2>
// //                             <p className="text-xl text-gray-600 dark:text-gray-400">
// //                                 Nos encargamos de mantener tu sitio web actualizado, seguro y funcionando perfectamente
// //                             </p>
// //                         </motion.div>
// //
// //                         <div className="grid md:grid-cols-3 gap-8">
// //                             {support.map((item, index) => (
// //                                 <motion.div
// //                                     key={item.title}
// //                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
// //                                     initial={{ opacity: 0, y: 20 }}
// //                                     whileInView={{ opacity: 1, y: 0 }}
// //                                     transition={{ delay: index * 0.1 }}
// //                                     viewport={{ once: true }}
// //                                 >
// //                                     <item.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// //                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// //                                         {item.title}
// //                                     </h3>
// //                                     <p className="text-gray-600 dark:text-gray-400">
// //                                         {item.description}
// //                                     </p>
// //                                 </motion.div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </section>
// //
// //                 {/* CTA Section */}
// //                 <section className="py-20">
// //                     <div className="max-w-3xl mx-auto px-6 text-center">
// //                         <motion.div
// //                             initial={{ opacity: 0, y: 20 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true }}
// //                         >
// //                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// //                                 ¿Listo para empezar tu proyecto web?
// //                             </h2>
// //                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// //                                 Contáctanos hoy y obtén una cotización personalizada para tu sitio web
// //                             </p>
// //                             <motion.button
// //                                 onClick={() => handleContactWhatsApp()}
// //                                 className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
// //                                 whileHover={{ scale: 1.05 }}
// //                                 whileTap={{ scale: 0.95 }}
// //                             >
// //                                 Contactar Ahora
// //                             </motion.button>
// //                         </motion.div>
// //                     </div>
// //                 </section>
// //
// //             </main>
// //             <Footer />
// //         </>
// //     )}
//
//
// 'use client'
//
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//     Globe,
//     Server,
//     Search,
//     Rocket,
//     Mail,
//     Shield,
//     Code,
//     Smartphone,
//     Settings,
//     MessageSquare,
//     CheckCircle
// } from 'lucide-react'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
//
// const features = [
//     {
//         icon: Globe,
//         title: 'Dominios',
//         description: 'Te ayudamos con todo lo relacionado a tu dominio web',
//         image: 'https://img1.wsimg.com/cdnassets/transform/c502bc73-bdb3-49f5-97db-f731fda682c4/Mega_MRQ_Domains',
//         details: [
//             'Asesoría en la elección del mejor dominio',
//             'Gestión completa de la compra si lo necesitas',
//             'Configuración DNS y conexión con hosting existente',
//             'Renovación y mantenimiento del dominio'
//         ]
//     },
//     {
//         icon: Server,
//         title: 'Hosting Premium',
//         description: 'Alojamiento web profesional con máximo rendimiento',
//         image: 'https://img1.wsimg.com/cdnassets/transform/fc524f9d-e34b-44d7-9ab3-d824e96c6083/gd-websitebuilder-marquee-desktop',
//         details: [
//             'Migración gratuita desde tu hosting actual',
//             'Backups diarios automáticos',
//             '99.9% de tiempo de actividad garantizado',
//             'Panel de control intuitivo'
//         ]
//     },
//     {
//         icon: Mail,
//         title: 'Correos Corporativos',
//         description: 'Correos profesionales para tu empresa',
//         image: 'https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small',
//         details: [
//             'Correos @tuempresa.com',
//             'Integración con Gmail y Outlook',
//             'Capacidad de almacenamiento flexible',
//             'Soporte técnico incluido'
//         ]
//     },
//     {
//         icon: Shield,
//         title: 'Seguridad Total',
//         description: 'Protección completa para tu sitio web',
//         image: 'https://img1.wsimg.com/cdnassets/transform/d080bfb5-4ece-4e5d-add2-25f32a27222a/FOSMO-96642_Mega-Mrq-Image-Test_Email-Category-SLP',
//         details: [
//             'Certificado SSL gratuito',
//             'Firewall de aplicaciones web',
//             'Protección contra malware',
//             'Monitoreo 24/7'
//         ]
//     }
// ]
//
// const plans = [
//     {
//         name: 'Landing Page',
//         price: 199,
//         description: 'Ideal para presentar tu negocio online',
//         features: [
//             'Diseño One Page',
//             'Asesoría en dominio',
//             'Hosting 1 año',
//             '1 correo corporativo',
//             'SSL gratuito',
//             'Formulario de contacto'
//         ],
//         recommended: false
//     },
//     {
//         name: 'Profesional',
//         price: 299,
//         description: 'Para negocios que necesitan más funcionalidades',
//         features: [
//             'Hasta 5 páginas',
//             'WordPress Premium',
//             'Blog incluido',
//             '3 correos corporativos',
//             'Chat WhatsApp',
//             'Google Analytics',
//             'Mantenimiento básico'
//         ],
//         recommended: true
//     },
//     {
//         name: 'E-commerce',
//         price: 399,
//         description: 'Tienda online completa para vender en línea',
//         features: [
//             'WooCommerce Pro',
//             'Productos ilimitados',
//             'Pagos en línea',
//             '5 correos corporativos',
//             'Certificado SSL Premium',
//             'Integración redes sociales',
//             'Capacitación incluida'
//         ],
//         recommended: false
//     }
// ]
//
// const process = [
//     {
//         title: 'Planificación',
//         description: 'Definimos objetivos y estructura del sitio',
//         steps: [
//             'Análisis de requerimientos',
//             'Arquitectura de información',
//             'Wireframes y mockups',
//             'Selección de tecnologías'
//         ]
//     },
//     {
//         title: 'Diseño',
//         description: 'Creamos la identidad visual de tu sitio',
//         steps: [
//             'Diseño UI/UX personalizado',
//             'Paleta de colores',
//             'Tipografías y elementos',
//             'Responsive design'
//         ]
//     },
//     {
//         title: 'Desarrollo',
//         description: 'Programación y configuración del sitio',
//         steps: [
//             'Desarrollo frontend/backend',
//             'Integración CMS',
//             'Optimización SEO',
//             'Testing y ajustes'
//         ]
//     },
//     {
//         title: 'Lanzamiento',
//         description: 'Configuración final y publicación',
//         steps: [
//             'Configuración hosting/dominio',
//             'Migración y DNS',
//             'Pruebas finales',
//             'Monitoreo inicial'
//         ]
//     }
// ]
//
// const support = [
//     {
//         icon: Settings,
//         title: 'Mantenimiento',
//         description: 'Actualizaciones de seguridad, backups y monitoreo continuo'
//     },
//     {
//         icon: MessageSquare,
//         title: 'Soporte Técnico',
//         description: 'Asistencia por ticket, email o WhatsApp en horario laboral'
//     },
//     {
//         icon: Code,
//         title: 'Actualizaciones',
//         description: 'Modificaciones menores y ajustes incluidos en el plan mensual'
//     }
// ]
//
// const FeatureCard = ({ feature, isSelected, onClick }) => (
//     <motion.div
//         onClick={onClick}
//         className={`cursor-pointer p-4 rounded-lg transition-colors ${
//             isSelected
//                 ? 'bg-accent-red/10 dark:bg-accent-yellow/10'
//                 : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
//         } shadow-sm`}
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//     >
//         <feature.icon className={`w-6 h-6 mb-2 ${
//             isSelected
//                 ? 'text-accent-red dark:text-accent-yellow'
//                 : 'text-gray-600 dark:text-gray-400'
//         }`} />
//         <h4 className={`font-medium ${
//             isSelected
//                 ? 'text-accent-red dark:text-accent-yellow'
//                 : 'text-gray-900 dark:text-white'
//         }`}>
//             {feature.title}
//         </h4>
//     </motion.div>
// )
//
// export default function WebDevelopmentPage() {
//     const [selectedFeature, setSelectedFeature] = useState(0)
//
//     const handleContactWhatsApp = (plan: string = '') => {
//         const message = plan
//             ? `¡Hola! Me interesa el plan ${plan} para desarrollo web. ¿Podrían darme más información?`
//             : '¡Hola! Me interesa el servicio de desarrollo web. ¿Podrían darme más información?';
//         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
//     }
//
//     return (
//         <>
//             <Navbar />
//             <main className="min-h-screen bg-white dark:bg-gray-900">
//                 {/* Hero Section */}
//                 <section className="pt-28 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="max-w-3xl mx-auto text-center"
//                         >
//                             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
//                                 Diseño Web Profesional y Landing Pages de Alto Impacto
//                             </h1>
//                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
//                                 Creamos páginas web que convierten visitantes en clientes.
//                                 Diseño personalizado, hosting premium y soporte técnico incluido.
//                             </p>
//                             <div className="flex flex-col sm:flex-row justify-center gap-4">
//                                 <motion.button
//                                     onClick={() => handleContactWhatsApp()}
//                                     className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     Cotizar Ahora
//                                 </motion.button>
//                                 <motion.a
//                                     href="#planes"
//                                     className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     Ver Planes
//                                 </motion.a>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>
//
//                 {/* Features Section */}
//                 <section className="py-20">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             Todo lo que necesitas para tu sitio web
//                         </motion.h2>
//
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                             {features.map((feature, index) => (
//                                 <FeatureCard
//                                     key={feature.title}
//                                     feature={feature}
//                                     isSelected={selectedFeature === index}
//                                     onClick={() => setSelectedFeature(index)}
//                                 />
//                             ))}
//                         </div>
//
//                         <AnimatePresence mode="wait">
//                             {features.map((feature, index) => (
//                                 selectedFeature === index && (
//                                     <motion.div
//                                         key={feature.title}
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         exit={{ opacity: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                         className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
//                                     >
//                                         <div className="flex-1 space-y-6">
//                                             <feature.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
//                                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                                                 {feature.title}
//                                             </h3>
//                                             <p className="text-lg text-gray-600 dark:text-gray-400">
//                                                 {feature.description}
//                                             </p>
//                                             {feature.details && (
//                                                 <ul className="space-y-3">
//                                                     {feature.details.map((detail, i) => (
//                                                         <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                                             <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                                                             <span>{detail}</span>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             )}
//                                         </div>
//                                         <div className="flex-1">
//                                             <img
//                                                 src={feature.image}
//                                                 alt={feature.title}
//                                                 className="w-full h-80 object-cover rounded-lg"
//                                             />
//                                         </div>
//                                     </motion.div>
//                                 )
//                             ))}
//                         </AnimatePresence>
//                     </div>
//                 </section>
//
//                 {/* Plans Section */}
//                 <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             Planes de Desarrollo Web
//                         </motion.h2>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {plans.map((plan, index) => (
//                                 <motion.div
//                                     key={plan.name}
//                                     className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
//                                         plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
//                                     }`}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//
//
//
//                                     {plan.recommended && (
//                                         <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
//                                             Recomendado
//                                         </span>
//                                     )}
//                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                         {plan.name}
//                                     </h3>
//                                     <div className="flex items-baseline mb-4">
//                                         <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
//                                             ${plan.price}
//                                         </span>
//                                         <span className="text-gray-500 dark:text-gray-400 ml-2">USD</span>
//                                     </div>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-6">
//                                         {plan.description}
//                                     </p>
//                                     <ul className="space-y-3 mb-8">
//                                         {plan.features.map((feature) => (
//                                             <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                                 <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                                                 <span>{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     <button
//                                         onClick={() => handleContactWhatsApp(plan.name)}
//                                         className={`w-full py-2 rounded-lg transition-colors ${
//                                             plan.recommended
//                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                 : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
//                                         }`}
//                                     >
//                                         Solicitar Plan
//                                     </button>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* Process Section */}
//                 <section className="py-20">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             Proceso de Desarrollo
//                         </motion.h2>
//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {process.map((step, index) => (
//                                 <motion.div
//                                     key={step.title}
//                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <div className="flex items-center gap-4 mb-4">
//                                         <span className="w-8 h-8 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
//                                             {index + 1}
//                                         </span>
//                                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                             {step.title}
//                                         </h3>
//                                     </div>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                         {step.description}
//                                     </p>
//                                     <ul className="space-y-2">
//                                         {step.steps.map((item) => (
//                                             <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                                 <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                                                 <span>{item}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* Support Section */}
//                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="text-center max-w-3xl mx-auto mb-12"
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//                                 Soporte y Mantenimiento
//                             </h2>
//                             <p className="text-xl text-gray-600 dark:text-gray-400">
//                                 Nos encargamos de mantener tu sitio web actualizado, seguro y funcionando perfectamente
//                             </p>
//                         </motion.div>
//
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {support.map((item, index) => (
//                                 <motion.div
//                                     key={item.title}
//                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <item.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
//                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                         {item.title}
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-400">
//                                         {item.description}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* CTA Section */}
//                 <section className="py-20">
//                     <div className="max-w-3xl mx-auto px-6 text-center">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//                                 ¿Listo para empezar tu proyecto web?
//                             </h2>
//                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
//                                 Contáctanos hoy y obtén una cotización personalizada para tu sitio web
//                             </p>
//                             <motion.button
//                                 onClick={() => handleContactWhatsApp()}
//                                 className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 Contactar Ahora
//                             </motion.button>
//                         </motion.div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </>
//     )
// }


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Globe,
    Server,
    Search,
    Rocket,
    Mail,
    Shield,
    Code,
    Smartphone,
    Settings,
    MessageSquare,
    CheckCircle
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const features = [
    {
        icon: Globe,
        title: 'Dominios',
        description: 'Te ayudamos con todo lo relacionado a tu dominio web',
        image: 'https://img1.wsimg.com/cdnassets/transform/c502bc73-bdb3-49f5-97db-f731fda682c4/Mega_MRQ_Domains',
        details: [
            'Asesoría en la elección del mejor dominio',
            'Gestión completa de la compra si lo necesitas',
            'Configuración DNS y conexión con hosting existente',
            'Renovación y mantenimiento del dominio'
        ]
    },
    {
        icon: Server,
        title: 'Hosting Premium',
        description: 'Alojamiento web profesional con máximo rendimiento',
        image: 'https://img1.wsimg.com/cdnassets/transform/fc524f9d-e34b-44d7-9ab3-d824e96c6083/gd-websitebuilder-marquee-desktop',
        details: [
            'Migración gratuita desde tu hosting actual',
            'Backups diarios automáticos',
            '99.9% de tiempo de actividad garantizado',
            'Panel de control intuitivo'
        ]
    },
    {
        icon: Mail,
        title: 'Correos Corporativos',
        description: 'Correos profesionales para tu empresa',
        image: 'https://img1.wsimg.com/cdnassets/transform/739d195b-22b8-47f4-8919-1f8321ba18c9/mega-ox-pro-email-int-es_xl',
        details: [
            'Correos @tuempresa.com',
            'Integración con Gmail y Outlook',
            'Capacidad de almacenamiento flexible',
            'Soporte técnico incluido'
        ]
    },
    {
        icon: Shield,
        title: 'Seguridad Total',
        description: 'Protección completa para tu sitio web',
        image: 'https://img1.wsimg.com/cdnassets/transform/d080bfb5-4ece-4e5d-add2-25f32a27222a/FOSMO-96642_Mega-Mrq-Image-Test_Email-Category-SLP',
        details: [
            'Certificado SSL gratuito',
            'Firewall de aplicaciones web',
            'Protección contra malware',
            'Monitoreo 24/7'
        ]
    }
]

const plans = [
    {
        name: 'Landing Page',
        price: 199,
        description: 'Ideal para presentar tu negocio online',
        features: [
            'Diseño One Page',
            'Asesoría en dominio',
            'Hosting 1 año',
            '1 correo corporativo',
            'SSL gratuito',
            'Formulario de contacto'
        ],
        recommended: false
    },
    {
        name: 'Profesional',
        price: 299,
        description: 'Para negocios que necesitan más funcionalidades',
        features: [
            'Hasta 5 páginas',
            'WordPress Premium',
            'Blog incluido',
            '3 correos corporativos',
            'Chat WhatsApp',
            'Google Analytics',
            'Mantenimiento básico'
        ],
        recommended: true
    },
    {
        name: 'E-commerce',
        price: 399,
        description: 'Tienda online completa para vender en línea',
        features: [
            'WooCommerce Pro',
            'Productos ilimitados',
            'Pagos en línea',
            '5 correos corporativos',
            'Certificado SSL Premium',
            'Integración redes sociales',
            'Capacitación incluida'
        ],
        recommended: false
    }
]

const process = [
    {
        title: 'Planificación',
        description: 'Definimos objetivos y estructura del sitio',
        steps: [
            'Análisis de requerimientos',
            'Arquitectura de información',
            'Wireframes y mockups',
            'Selección de tecnologías'
        ]
    },
    {
        title: 'Diseño',
        description: 'Creamos la identidad visual de tu sitio',
        steps: [
            'Diseño UI/UX personalizado',
            'Paleta de colores',
            'Tipografías y elementos',
            'Responsive design'
        ]
    },
    {
        title: 'Desarrollo',
        description: 'Programación y configuración del sitio',
        steps: [
            'Desarrollo frontend/backend',
            'Integración CMS',
            'Optimización SEO',
            'Testing y ajustes'
        ]
    },
    {
        title: 'Lanzamiento',
        description: 'Configuración final y publicación',
        steps: [
            'Configuración hosting/dominio',
            'Migración y DNS',
            'Pruebas finales',
            'Monitoreo inicial'
        ]
    }
]

const support = [
    {
        icon: Settings,
        title: 'Mantenimiento',
        description: 'Actualizaciones de seguridad, backups y monitoreo continuo'
    },
    {
        icon: MessageSquare,
        title: 'Soporte Técnico',
        description: 'Asistencia por ticket, email o WhatsApp en horario laboral'
    },
    {
        icon: Code,
        title: 'Actualizaciones',
        description: 'Modificaciones menores y ajustes incluidos en el plan mensual'
    }
]

const FeatureCard = ({ feature, isSelected, onClick }) => (
    <motion.div
        onClick={onClick}
        className={`cursor-pointer p-4 rounded-lg transition-colors ${
            isSelected
                ? 'bg-accent-red/10 dark:bg-accent-yellow/10'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
        } shadow-sm`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        <feature.icon className={`w-6 h-6 mb-2 ${
            isSelected
                ? 'text-accent-red dark:text-accent-yellow'
                : 'text-gray-600 dark:text-gray-400'
        }`} />
        <h4 className={`font-medium ${
            isSelected
                ? 'text-accent-red dark:text-accent-yellow'
                : 'text-gray-900 dark:text-white'
        }`}>
            {feature.title}
        </h4>
    </motion.div>
)

export default function WebDevelopmentPage() {
    const [selectedFeature, setSelectedFeature] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedFeature((prev) => (prev + 1) % features.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    const handleContactWhatsApp = (plan: string = '') => {
        const message = plan
            ? `¡Hola! Me interesa el plan ${plan} para desarrollo web. ¿Podrían darme más información?`
            : '¡Hola! Me interesa el servicio de desarrollo web. ¿Podrían darme más información?';
        window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900">
                {/* Hero Section */}
                <section className="pt-40 mb-8 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                                 Diseño Web Profesional y Landing Pages de Alto Impacto
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Creamos páginas web que convierten visitantes en clientes.
                                Diseño personalizado, hosting premium y soporte técnico incluido.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <motion.button
                                    onClick={() => handleContactWhatsApp()}
                                    className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    Cotizar Ahora
                                </motion.button>
                                <motion.a
                                    href="#planes"
                                    className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    Ver Planes
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Todo lo que necesitas para tu sitio web
                        </motion.h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={feature.title}
                                    feature={feature}
                                    isSelected={selectedFeature === index}
                                    onClick={() => setSelectedFeature(index)}
                                />
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {features.map((feature, index) => (
                                selectedFeature === index && (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                                    >
                                        <div className="flex-1 space-y-6">
                                            <feature.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                                {feature.description}
                                            </p>
                                            {feature.details && (
                                                <ul className="space-y-3">
                                                    {feature.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                                            <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-80 object-cover rounded-lg"
                                            />
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                                 {/* Plans Section */}
                                 <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
                                     <div className="max-w-7xl mx-auto px-6">
                                         <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Planes de Desarrollo Web
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {plans.map((plan, index) => (
                                <motion.div
                                    key={plan.name}
                                    className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                                        plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >



                                    {plan.recommended && (
                                        <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
                                            Recomendado
                                        </span>
                                    )}
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {plan.name}
                                    </h3>
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
                                            ${plan.price}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 ml-2">USD</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {plan.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                                <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => handleContactWhatsApp(plan.name)}
                                        className={`w-full py-2 rounded-lg transition-colors ${
                                            plan.recommended
                                                ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
                                                : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
                                        }`}
                                    >
                                        Solicitar Plan
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Proceso de Desarrollo
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-8 h-8 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {step.steps.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                                <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Support Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Soporte y Mantenimiento
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                Nos encargamos de mantener tu sitio web actualizado, seguro y funcionando perfectamente
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {support.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <item.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                ¿Listo para empezar tu proyecto web?
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Contáctanos hoy y obtén una cotización personalizada para tu sitio web
                            </p>
                            <motion.button
                                onClick={() => handleContactWhatsApp()}
                                className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contactar Ahora
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}