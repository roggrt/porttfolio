// // // // // src/app/services/uiux-design/page.tsx
// // // // 'use client';

// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Layers, Figma, Users, Sparkles, LayoutGrid, Brain } from 'lucide-react';
// // // // import Navbar from '@/components/layout/Navbar';
// // // // import Footer from '@/components/layout/Footer';

// // // // const features = [
// // // //   {
// // // //     icon: Figma,
// // // //     title: 'Diseño de Interfaces',
// // // //     description: 'Creación de interfaces intuitivas y atractivas que mejoran la experiencia del usuario.'
// // // //   },
// // // //   {
// // // //     icon: Users,
// // // //     title: 'Investigación UX',
// // // //     description: 'Análisis profundo del comportamiento del usuario para crear soluciones centradas en sus necesidades.'
// // // //   },
// // // //   {
// // // //     icon: Layers,
// // // //     title: 'Prototipado',
// // // //     description: 'Desarrollo de prototipos interactivos para validar conceptos y flujos de usuario.'
// // // //   },
// // // //   {
// // // //     icon: LayoutGrid,
// // // //     title: 'Design Systems',
// // // //     description: 'Creación de sistemas de diseño escalables y consistentes para productos digitales.'
// // // //   },
// // // //   {
// // // //     icon: Brain,
// // // //     title: 'UX Strategy',
// // // //     description: 'Definición de estrategias de experiencia de usuario alineadas con objetivos de negocio.'
// // // //   },
// // // //   {
// // // //     icon: Sparkles,
// // // //     title: 'UI Animation',
// // // //     description: 'Diseño de microinteracciones y animaciones que mejoran el engagement.'
// // // //   }
// // // // ];

// // // // export default function UIUXDesignPage() {
// // // //   return (
// // // //     <>
// // // //       <Navbar />
// // // //       <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// // // //         {/* Hero Section */}
// // // //         <section className="py-20">
// // // //           <div className="max-w-7xl mx-auto px-6">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6 }}
// // // //               className="text-center max-w-3xl mx-auto"
// // // //             >
// // // //               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// // // //                 UI/UX Design
// // // //               </h1>
// // // //               <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
// // // //                 Creando experiencias digitales excepcionales que conectan con tus usuarios
// // // //                 y potencian tu negocio.
// // // //               </p>
// // // //             </motion.div>
// // // //           </div>
// // // //         </section>

// // // //         {/* Features Section */}
// // // //         <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // // //           <div className="max-w-7xl mx-auto px-6">
// // // //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //               {features.map((feature, index) => (
// // // //                 <motion.div
// // // //                   key={feature.title}
// // // //                   initial={{ opacity: 0, y: 20 }}
// // // //                   whileInView={{ opacity: 1, y: 0 }}
// // // //                   transition={{ duration: 0.6, delay: index * 0.1 }}
// // // //                   viewport={{ once: true }}
// // // //                   className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
// // // //                 >
// // // //                   <feature.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// // // //                   <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
// // // //                     {feature.title}
// // // //                   </h3>
// // // //                   <p className="text-gray-600 dark:text-gray-400">
// // // //                     {feature.description}
// // // //                   </p>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* Process Section */}
// // // //         <section className="py-20">
// // // //           <div className="max-w-7xl mx-auto px-6">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.6 }}
// // // //               viewport={{ once: true }}
// // // //               className="text-center mb-16"
// // // //             >
// // // //               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
// // // //                 Proceso de Diseño
// // // //               </h2>
// // // //               <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// // // //                 Un enfoque sistemático para crear soluciones de diseño efectivas
// // // //               </p>
// // // //             </motion.div>
            
// // // //             {/* Add process steps here */}
// // // //             <div className="space-y-12">
// // // //               {[
// // // //                 {
// // // //                   step: '01',
// // // //                   title: 'Descubrimiento e Investigación',
// // // //                   description: 'Análisis profundo de necesidades, usuarios y competencia'
// // // //                 },
// // // //                 {
// // // //                   step: '02',
// // // //                   title: 'Ideación y Wireframing',
// // // //                   description: 'Desarrollo de conceptos y estructura básica de la interfaz'
// // // //                 },
// // // //                 {
// // // //                   step: '03',
// // // //                   title: 'Diseño Visual y Prototipado',
// // // //                   description: 'Creación de interfaces detalladas y prototipos interactivos'
// // // //                 },
// // // //                 {
// // // //                   step: '04',
// // // //                   title: 'Pruebas y Refinamiento',
// // // //                   description: 'Validación con usuarios y mejora iterativa del diseño'
// // // //                 }
// // // //               ].map((process, index) => (
// // // //                 <motion.div
// // // //                   key={process.step}
// // // //                   initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
// // // //                   whileInView={{ opacity: 1, x: 0 }}
// // // //                   transition={{ duration: 0.6 }}
// // // //                   viewport={{ once: true }}
// // // //                   className="flex items-start gap-6"
// // // //                 >
// // // //                   <span className="text-4xl font-bold text-accent-red dark:text-accent-yellow">
// // // //                     {process.step}
// // // //                   </span>
// // // //                   <div>
// // // //                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// // // //                       {process.title}
// // // //                     </h3>
// // // //                     <p className="text-gray-600 dark:text-gray-400">
// // // //                       {process.description}
// // // //                     </p>
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </main>
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }


// // // // src/app/services/uiux-design/page.tsx
// // // import { Metadata } from 'next'
// // // import { Layers, Figma, Users, Sparkles, LayoutGrid, Brain } from 'lucide-react'
// // // import Navbar from '@/components/layout/Navbar'
// // // import Footer from '@/components/layout/Footer'

// // // // Esta es la forma más efectiva de generar metadatos dinámicos para SEO
// // // export async function generateMetadata(): Promise<Metadata> {
// // //   // Aquí podrías obtener datos dinámicos de una API/CMS si los necesitas
// // //   return {
// // //     title: 'Servicios de UI/UX Design | Diseño de Experiencias Digitales | Torisoftt',
// // //     description: 'Expertos en diseño UI/UX. Creamos interfaces intuitivas y experiencias de usuario que aumentan la conversión y satisfacción de tus usuarios.',
// // //     openGraph: {
// // //       title: 'Servicios de UI/UX Design | Torisoftt',
// // //       description: 'Expertos en diseño UI/UX. Interfaces intuitivas y experiencias que convierten.',
// // //       url: 'https://torisoftt.com/services/uiux-design',
// // //       siteName: 'Torisoftt',
// // //       images: [{
// // //         url: 'https://torisoftt.com/images/uiux-services.jpg',
// // //         width: 1200,
// // //         height: 630,
// // //         alt: 'Servicios UI/UX Design Torisoftt'
// // //       }],
// // //       locale: 'es_EC',
// // //       type: 'website',
// // //     },
// // //     // Añadimos schema.org para mejor SEO
// // //     alternates: {
// // //       canonical: 'https://torisoftt.com/services/uiux-design'
// // //     },
// // //     robots: {
// // //       index: true,
// // //       follow: true,
// // //       googleBot: {
// // //         index: true,
// // //         follow: true,
// // //         'max-image-preview': 'large'
// // //       }
// // //     }
// // //   }
// // // }

// // // // Componente principal de la página
// // // export default function UIUXDesignPage() {
// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// // //         {/* Hero Section */}
// // //         <section className="py-20">
// // //           <div className="max-w-7xl mx-auto px-6">
// // //             <div className="text-center max-w-3xl mx-auto">
// // //               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// // //                 Diseño UI/UX Profesional
// // //               </h1>
// // //               <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
// // //                 Creamos experiencias digitales que conectan con tus usuarios
// // //                 y potencian tu negocio.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Features Section */}
// // //         <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // //           <div className="max-w-7xl mx-auto px-6">
// // //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //               {features.map((feature, index) => (
// // //                 <div
// // //                   key={feature.title}
// // //                   className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
// // //                 >
// // //                   <feature.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// // //                   <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
// // //                     {feature.title}
// // //                   </h2>
// // //                   <p className="text-gray-600 dark:text-gray-400">
// // //                     {feature.description}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Rest of your sections... */}
// // //       </main>
// // //       <Footer />
// // //     </>
// // //   )
// // // }

// // // // Datos de características
// // // const features = [
// // //   {
// // //     icon: Figma,
// // //     title: 'Diseño de Interfaces',
// // //     description: 'Creamos interfaces intuitivas que mejoran la experiencia del usuario y aumentan las conversiones.'
// // //   },
// // //   {
// // //     icon: Users,
// // //     title: 'Investigación UX',
// // //     description: 'Analizamos el comportamiento de tus usuarios para crear soluciones que resuelven problemas reales.'
// // //   },
// // //   // ... resto de features
// // // ]



// // // src/app/services/uiux-design/page.tsx



// // import { Metadata } from 'next'
// // import { Layers, Figma, Users, Sparkles, LayoutGrid, Brain } from 'lucide-react'
// // import Navbar from '@/components/layout/Navbar'
// // import Footer from '@/components/layout/Footer'

// // // SEO optimizado para Ecuador/Cuenca
// // export async function generateMetadata(): Promise<Metadata> {
// //   return {
// //     title: 'Diseño UI/UX en Cuenca | Servicios de Diseño Web Ecuador | Torisoftt',
// //     description: 'Empresa de diseño UI/UX en Cuenca, Ecuador. Creamos interfaces web y móviles que aumentan conversiones. Diseño web profesional con enfoque en resultados. ¡Contáctanos!',
// //     keywords: 'diseño ui ux cuenca, diseño web ecuador, diseño interfaces cuenca, ux design ecuador, ui designer cuenca',
// //     openGraph: {
// //       title: 'Diseño UI/UX en Cuenca | Torisoftt',
// //       description: 'Servicios profesionales de diseño UI/UX en Cuenca. Mejora la experiencia de tus usuarios.',
// //       url: 'https://torisoftt.com/services/uiux-design',
// //       siteName: 'Torisoftt',
// //       images: [{
// //         url: 'https://torisoftt.com/images/uiux-services-cuenca.jpg',
// //         width: 1200,
// //         height: 630,
// //         alt: 'Servicios de Diseño UI/UX en Cuenca'
// //       }],
// //       locale: 'es_EC',
// //       type: 'website',
// //     },
// //     alternates: {
// //       canonical: 'https://torisoftt.com/services/uiux-design'
// //     }
// //   }
// // }

// // const features = [
// //   {
// //     icon: Figma,
// //     title: 'Diseño UI/UX Profesional',
// //     description: 'Diseñamos interfaces intuitivas que mejoran la experiencia de tus usuarios en Cuenca y Ecuador.'
// //   },
// //   {
// //     icon: Users,
// //     title: 'Investigación de Usuarios',
// //     description: 'Entendemos a tu público local para crear soluciones que conecten con el mercado ecuatoriano.'
// //   },
// //   {
// //     icon: Layers,
// //     title: 'Prototipado y Testing',
// //     description: 'Validamos cada diseño con usuarios reales de tu mercado objetivo en Cuenca.'
// //   },
// //   {
// //     icon: LayoutGrid,
// //     title: 'Sistemas de Diseño',
// //     description: 'Creamos sistemas escalables adaptados a las necesidades de tu empresa en Ecuador.'
// //   },
// //   {
// //     icon: Brain,
// //     title: 'Estrategia UX Local',
// //     description: 'Desarrollamos estrategias enfocadas en el comportamiento del usuario ecuatoriano.'
// //   },
// //   {
// //     icon: Sparkles,
// //     title: 'Diseño Responsive',
// //     description: 'Interfaces adaptadas a todos los dispositivos, optimizadas para tu audiencia local.'
// //   }
// // ]

// // export default function UIUXDesignPage() {
// //   return (
// //     <>
// //       <Navbar />
// //       <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// //         {/* Hero Section - SEO Local */}
// //         <section className="py-20">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <div className="text-center max-w-3xl mx-auto">
// //               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// //                 Diseño UI/UX en Cuenca
// //               </h1>
// //               <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
// //                 Creamos experiencias digitales excepcionales para empresas en Cuenca y Ecuador.
// //                 Diseño web profesional que conecta con tus usuarios y mejora tus conversiones.
// //               </p>
// //               <div className="flex justify-center gap-4">
// //                 <a 
// //                   href="#contacto" 
// //                   className="bg-accent-red dark:bg-accent-yellow text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
// //                 >
// //                   Cotizar Proyecto
// //                 </a>
// //                 <a 
// //                   href="#portfolio" 
// //                   className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-6 py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
// //                 >
// //                   Ver Portafolio
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Features Grid */}
// //         <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
// //               Servicios de Diseño UI/UX en Cuenca
// //             </h2>
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {features.map((feature) => (
// //                 <div
// //                   key={feature.title}
// //                   className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
// //                 >
// //                   <feature.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// //                   <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
// //                     {feature.title}
// //                   </h3>
// //                   <p className="text-gray-600 dark:text-gray-400">
// //                     {feature.description}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Contacto - CTA Local */}
// //         <section id="contacto" className="py-20">
// //           <div className="max-w-3xl mx-auto px-6 text-center">
// //             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// //               ¿Listo para mejorar la experiencia de tus usuarios?
// //             </h2>
// //             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// //               Obtén una consultoría gratuita para tu proyecto en Cuenca
// //             </p>
// //             <a 
// //               href="mailto:info@torisoftt.com" 
// //               className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
// //             >
// //               Contactar Ahora
// //             </a>
// //           </div>
// //         </section>
// //       </main>
// //       <Footer />
// //     </>
// //   )
// // }



// // 'use client'

// // import { Metadata } from 'next'
// // import { Layers, Figma, Users, Sparkles, LayoutGrid, Brain } from 'lucide-react'
// // import { motion } from 'framer-motion'
// // import Navbar from '@/components/layout/Navbar'
// // import Footer from '@/components/layout/Footer'

// // // Nota: La generación de metadata debe estar en un archivo separado
// // // porque no puede estar en un componente cliente

// // const features = [
// //   {
// //     icon: Figma,
// //     title: 'Diseño UI/UX Profesional',
// //     description: 'Diseñamos interfaces intuitivas que mejoran la experiencia de tus usuarios en Cuenca y Ecuador.'
// //   },
// //   {
// //     icon: Users,
// //     title: 'Investigación de Usuarios',
// //     description: 'Entendemos a tu público local para crear soluciones que conecten con el mercado ecuatoriano.'
// //   },
// //   {
// //     icon: Layers,
// //     title: 'Prototipado y Testing',
// //     description: 'Validamos cada diseño con usuarios reales de tu mercado objetivo en Cuenca.'
// //   },
// //   {
// //     icon: LayoutGrid,
// //     title: 'Sistemas de Diseño',
// //     description: 'Creamos sistemas escalables adaptados a las necesidades de tu empresa en Ecuador.'
// //   },
// //   {
// //     icon: Brain,
// //     title: 'Estrategia UX Local',
// //     description: 'Desarrollamos estrategias enfocadas en el comportamiento del usuario ecuatoriano.'
// //   },
// //   {
// //     icon: Sparkles,
// //     title: 'Diseño Responsive',
// //     description: 'Interfaces adaptadas a todos los dispositivos, optimizadas para tu audiencia local.'
// //   }
// // ]

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.2,
// //       duration: 0.5
// //     }
// //   }
// // }

// // const itemVariants = {
// //   hidden: { y: 20, opacity: 0 },
// //   visible: {
// //     y: 0,
// //     opacity: 1,
// //     transition: {
// //       duration: 0.5,
// //       ease: "easeOut"
// //     }
// //   }
// // }

// // const fadeInVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.6,
// //       ease: "easeOut"
// //     }
// //   }
// // }

// // export default function UIUXDesignPage() {
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// //         {/* Hero Section */}
// //         <section className="py-20">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <motion.div 
// //               className="text-center max-w-3xl mx-auto"
// //               initial="hidden"
// //               animate="visible"
// //               variants={containerVariants}
// //             >
// //               <motion.h1 
// //                 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
// //                 variants={itemVariants}
// //               >
// //                 Diseño UI/UX en Cuenca
// //               </motion.h1>
// //               <motion.p 
// //                 className="text-xl text-gray-600 dark:text-gray-400 mb-12"
// //                 variants={itemVariants}
// //               >
// //                 Creamos experiencias digitales excepcionales para empresas en Cuenca y Ecuador.
// //                 Diseño web profesional que conecta con tus usuarios y mejora tus conversiones.
// //               </motion.p>
// //               <motion.div 
// //                 className="flex justify-center gap-4"
// //                 variants={itemVariants}
// //               >
// //                 <motion.a 
// //                   href="#contacto" 
// //                   className="bg-accent-red dark:bg-accent-yellow text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   Cotizar Proyecto
// //                 </motion.a>
// //                 <motion.a 
// //                   href="#portfolio" 
// //                   className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-6 py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
// //                   whileHover={{ scale: 1.05 }}
// //                   whileTap={{ scale: 0.95 }}
// //                 >
// //                   Ver Portafolio
// //                 </motion.a>
// //               </motion.div>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Features Grid */}
// //         <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <motion.h2 
// //               className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
// //               initial="hidden"
// //               whileInView="visible"
// //               variants={fadeInVariants}
// //               viewport={{ once: true }}
// //             >
// //               Servicios de Diseño UI/UX en Cuenca
// //             </motion.h2>
// //             <motion.div 
// //               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
// //               initial="hidden"
// //               whileInView="visible"
// //               variants={containerVariants}
// //               viewport={{ once: true }}
// //             >
// //               {features.map((feature) => {
// //                 const Icon = feature.icon
// //                 return (
// //                   <motion.div
// //                     key={feature.title}
// //                     className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
// //                     variants={itemVariants}
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                   >
// //                     <Icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// //                     <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
// //                       {feature.title}
// //                     </h3>
// //                     <p className="text-gray-600 dark:text-gray-400">
// //                       {feature.description}
// //                     </p>
// //                   </motion.div>
// //                 )
// //               })}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Contacto - CTA */}
// //         <section id="contacto" className="py-20">
// //           <div className="max-w-3xl mx-auto px-6 text-center">
// //             <motion.div
// //               initial="hidden"
// //               whileInView="visible"
// //               variants={containerVariants}
// //               viewport={{ once: true }}
// //             >
// //               <motion.h2 
// //                 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
// //                 variants={itemVariants}
// //               >
// //                 ¿Listo para mejorar la experiencia de tus usuarios?
// //               </motion.h2>
// //               <motion.p 
// //                 className="text-xl text-gray-600 dark:text-gray-400 mb-8"
// //                 variants={itemVariants}
// //               >
// //                 Obtén una consultoría gratuita para tu proyecto en Cuenca
// //               </motion.p>
// //               <motion.a 
// //                 href="mailto:info@torisoftt.com" 
// //                 className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
// //                 variants={itemVariants}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 Contactar Ahora
// //               </motion.a>
// //             </motion.div>
// //           </div>
// //         </section>
// //       </div>
// //       <Footer />
// //     </>
// //   )
// // }


// 'use client'

// import { Metadata } from 'next'
// import { 
//   Layers, 
//   Figma, 
//   Users, 
//   Sparkles, 
//   LayoutGrid, 
//   Brain,
//   Search,
//   Pencil,
//   Monitor,
//   TestTube,
//   Rocket,
//   Globe
// } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { useState } from 'react'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'

// const features = [
//   {
//     icon: Figma,
//     title: 'Diseño UI/UX Profesional',
//     description: 'Diseñamos interfaces intuitivas que mejoran la experiencia de tus usuarios en Latinoamérica, con especial enfoque en Ecuador.'
//   },
//   {
//     icon: Users,
//     title: 'Investigación de Usuarios',
//     description: 'Entendemos a tu público objetivo para crear soluciones que conecten con el mercado latinoamericano.'
//   },
//   {
//     icon: Layers,
//     title: 'Prototipado y Testing',
//     description: 'Validamos cada diseño con usuarios reales de diferentes mercados latinoamericanos.'
//   },
//   {
//     icon: LayoutGrid,
//     title: 'Sistemas de Diseño',
//     description: 'Creamos sistemas escalables adaptados a las necesidades de tu empresa y mercado objetivo.'
//   },
//   {
//     icon: Brain,
//     title: 'Estrategia UX Regional',
//     description: 'Desarrollamos estrategias enfocadas en el comportamiento del usuario latinoamericano.'
//   },
//   {
//     icon: Globe,
//     title: 'Alcance Internacional',
//     description: 'Interfaces adaptadas a las necesidades locales con estándares internacionales.'
//   }
// ]

// const processSteps = [
//   {
//     icon: Search,
//     title: 'Investigación',
//     description: 'Analizamos tu mercado, competencia y usuarios objetivo en Latinoamérica.',
//     details: [
//       'Investigación de mercado regional',
//       'Análisis de competencia',
//       'Entrevistas con usuarios',
//       'Definición de personas',
//       'Mapeo de puntos de dolor'
//     ]
//   },
//   {
//     icon: Pencil,
//     title: 'Diseño UX',
//     description: 'Creamos la estructura y flujos de tu producto digital.',
//     details: [
//       'Arquitectura de información',
//       'User flows',
//       'Wireframes',
//       'Pruebas de usabilidad',
//       'Iteración de diseños'
//     ]
//   },
//   {
//     icon: Monitor,
//     title: 'Diseño UI',
//     description: 'Desarrollamos la interfaz visual de tu producto.',
//     details: [
//       'Diseño visual',
//       'Sistema de diseño',
//       'Componentes UI',
//       'Adaptación responsive',
//       'Animaciones e interacciones'
//     ]
//   },
//   {
//     icon: TestTube,
//     title: 'Pruebas',
//     description: 'Validamos el diseño con usuarios reales.',
//     details: [
//       'Tests de usabilidad',
//       'Análisis heurístico',
//       'Pruebas A/B',
//       'Evaluación de accesibilidad',
//       'Optimización de resultados'
//     ]
//   },
//   {
//     icon: Rocket,
//     title: 'Implementación',
//     description: 'Trabajamos junto a tu equipo en la implementación.',
//     details: [
//       'Documentación técnica',
//       'Guías de implementación',
//       'Soporte al desarrollo',
//       'Control de calidad',
//       'Lanzamiento'
//     ]
//   }
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       duration: 0.5
//     }
//   }
// }

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   }
// }

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// }

// const ProcessStep = ({ step, isActive, onClick }) => {
//   return (
//     <motion.div
//       className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
//         isActive 
//           ? 'bg-accent-red dark:bg-accent-yellow text-white' 
//           : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
//       }`}
//       onClick={onClick}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <step.icon className={`w-8 h-8 ${
//           isActive 
//             ? 'text-white' 
//             : 'text-accent-red dark:text-accent-yellow'
//         }`} />
//         <h3 className={`text-xl font-semibold ${
//           isActive 
//             ? 'text-white' 
//             : 'text-gray-900 dark:text-white'
//         }`}>
//           {step.title}
//         </h3>
//       </div>
//       <p className={`mb-4 ${
//         isActive 
//           ? 'text-white/90' 
//           : 'text-gray-600 dark:text-gray-400'
//       }`}>
//         {step.description}
//       </p>
//       {isActive && (
//         <motion.ul
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="space-y-2 ml-4"
//         >
//           {step.details.map((detail, index) => (
//             <motion.li
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="flex items-center gap-2"
//             >
//               <div className="w-1.5 h-1.5 rounded-full bg-white" />
//               <span className="text-white/90">{detail}</span>
//             </motion.li>
//           ))}
//         </motion.ul>
//       )}
//     </motion.div>
//   )
// }

// export default function UIUXDesignPage() {
//   const [activeStep, setActiveStep] = useState(0)

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
//         {/* Hero Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div 
//               className="text-center max-w-3xl mx-auto"
//               initial="hidden"
//               animate="visible"
//               variants={containerVariants}
//             >
//               <motion.h1 
//                 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
//                 variants={itemVariants}
//               >
//                 Diseño UI/UX para Latinoamérica
//               </motion.h1>
//               <motion.p 
//                 className="text-xl text-gray-600 dark:text-gray-400 mb-12"
//                 variants={itemVariants}
//               >
//                 Creamos experiencias digitales excepcionales para empresas en Latinoamérica, 
//                 con presencia local en Ecuador y Cuenca. Diseño web profesional que conecta 
//                 con tus usuarios y mejora tus conversiones a nivel regional.
//               </motion.p>
//               <motion.div 
//                 className="flex justify-center gap-4"
//                 variants={itemVariants}
//               >
//                 <motion.a 
//                   href="#contacto" 
//                   className="bg-accent-red dark:bg-accent-yellow text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Cotizar Proyecto
//                 </motion.a>
//                 <motion.a 
//                   href="#portfolio" 
//                   className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-6 py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Ver Portafolio
//                 </motion.a>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Grid */}
//         <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.h2 
//               className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInVariants}
//               viewport={{ once: true }}
//             >
//               Servicios de Diseño UI/UX
//             </motion.h2>
//             <motion.div 
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//               initial="hidden"
//               whileInView="visible"
//               variants={containerVariants}
//               viewport={{ once: true }}
//             >
//               {features.map((feature) => {
//                 const Icon = feature.icon
//                 return (
//                   <motion.div
//                     key={feature.title}
//                     className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
//                     <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       {feature.description}
//                     </p>
//                   </motion.div>
//                 )
//               })}
//             </motion.div>
//           </div>
//         </section>

//         {/* Process Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.h2 
//               className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInVariants}
//               viewport={{ once: true }}
//             >
//               Nuestro Proceso de Diseño
//             </motion.h2>
//             <motion.div
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//               initial="hidden"
//               whileInView="visible"
//               variants={containerVariants}
//               viewport={{ once: true }}
//             >
//               {processSteps.map((step, index) => (
//                 <ProcessStep
//                   key={step.title}
//                   step={step}
//                   isActive={activeStep === index}
//                   onClick={() => setActiveStep(index)}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Contacto - CTA */}
//         <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//           <div className="max-w-3xl mx-auto px-6 text-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               variants={containerVariants}
//               viewport={{ once: true }}
//             >
//               <motion.h2 
//                 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
//                 variants={itemVariants}
//               >
//                 ¿Listo para mejorar la experiencia de tus usuarios?
//               </motion.h2>
//               <motion.p 
//                 className="text-xl text-gray-600 dark:text-gray-400 mb-8"
//                 variants={itemVariants}
//               >
//                 Obtén una consultoría gratuita para tu proyecto
//               </motion.p>
//               <motion.a 
//                 href="mailto:info@torisoftt.com" 
//                 className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Contactar Ahora
//               </motion.a>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   )
// }


'use client'

import { useState } from 'react'
import { 
  Layers, 
  Users, 
  Sparkles, 
  LayoutGrid, 
  Brain,
  Search,
  Pencil,
  Monitor,
  TestTube,
  Rocket,
  Globe,
  Heart
} from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

interface ProcessStep {
  icon: any;
  title: string;
  description: string;
  details: string[];
}

interface Feature {
  icon: any;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'Diseños Centrados en Personas',
    description: 'Creamos diseños pensando en tus usuarios, haciendo que cada interacción sea natural y agradable.'
  },
  {
    icon: Heart,
    title: 'Experiencias Memorables',
    description: 'Desarrollamos interfaces que conectan emocionalmente con tus usuarios y fortalecen tu marca.'
  },
  {
    icon: Layers,
    title: 'Diseños que Funcionan',
    description: 'Probamos cada detalle para asegurar que tu sitio web sea fácil de usar y efectivo.'
  },
  {
    icon: LayoutGrid,
    title: 'Diseño Web Moderno',
    description: 'Creamos sitios web atractivos y actuales que destacan tu marca en el mundo digital.'
  },
  {
    icon: Brain,
    title: 'Soluciones Creativas',
    description: 'Combinamos creatividad y estrategia para resolver los desafíos de tu negocio digital.'
  },
  {
    icon: Globe,
    title: 'Presencia Global',
    description: 'Diseñamos pensando en tu audiencia local y en tu potencial de crecimiento internacional.'
  }
]

const tools = [
  {
    name: 'Figma',
    icon: '/tools/figma.svg'
  },
  {
    name: 'Illustrator',
    icon: '/tools/illustrator.svg'
  }
]

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Conocemos tu Negocio',
    description: 'Entendemos tus objetivos y a tu público.',
    details: [
      'Análisis de tu mercado',
      'Estudio de tu competencia',
      'Conversaciones con usuarios',
      'Identificación de necesidades',
      'Definición de objetivos'
    ]
  },
  {
    icon: Pencil,
    title: 'Planificación',
    description: 'Diseñamos la mejor estructura para tu sitio.',
    details: [
      'Organización del contenido',
      'Diseño de navegación',
      'Bocetos iniciales',
      'Revisión contigo',
      'Ajustes según feedback'
    ]
  },
  {
    icon: Monitor,
    title: 'Diseño Visual',
    description: 'Creamos el aspecto de tu sitio web.',
    details: [
      'Diseño atractivo',
      'Colores de marca',
      'Elementos visuales',
      'Versión móvil',
      'Animaciones suaves'
    ]
  },
  {
    icon: TestTube,
    title: 'Pruebas',
    description: 'Nos aseguramos que todo funcione bien.',
    details: [
      'Pruebas con usuarios',
      'Revisión de usabilidad',
      'Pruebas en dispositivos',
      'Control de calidad',
      'Mejoras finales'
    ]
  },
  {
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Ponemos tu sitio en marcha.',
    details: [
      'Preparación final',
      'Revisión completa',
      'Publicación',
      'Monitoreo inicial',
      'Soporte continuo'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

interface ProcessStepProps {
  step: ProcessStep;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStep = ({ step, isActive, onClick }: ProcessStepProps) => {
  return (
    <motion.div
      className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-accent-red dark:bg-accent-yellow text-white' 
          : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <step.icon className={`w-8 h-8 ${
          isActive 
            ? 'text-white' 
            : 'text-accent-red dark:text-accent-yellow'
        }`} />
        <h3 className={`text-xl font-semibold ${
          isActive 
            ? 'text-white' 
            : 'text-gray-900 dark:text-white'
        }`}>
          {step.title}
        </h3>
      </div>
      <p className={`mb-4 ${
        isActive 
          ? 'text-white/90' 
          : 'text-gray-600 dark:text-gray-400'
      }`}>
        {step.description}
      </p>
      {isActive && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2 ml-4"
        >
          {step.details.map((detail, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white/90">{detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  )
}

export default function UIUXDesignPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                Diseño Web Profesional en Ecuador | Páginas Web que Venden
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 mb-12"
                variants={itemVariants}
              >
                Creamos sitios web hermosos y efectivos que atraen más clientes. 
                Diseño web personalizado en Cuenca y toda Latinoamérica, pensado 
                para hacer crecer tu negocio online.
              </motion.p>
              <motion.div 
                className="flex justify-center gap-4"
                variants={itemVariants}
              >
                <motion.a 
                  href="#contacto" 
                  className="bg-accent-red dark:bg-accent-yellow text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Presupuesto Gratis
                </motion.a>
                <motion.a 
                  href="#portfolio" 
                  className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-6 py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Proyectos
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center gap-12">
              {tools.map((tool) => (
                <div key={tool.name} className="text-center">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    width={40}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true }}
            >
              Servicios de Diseño Web
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true }}
            >
              ¿Cómo Trabajamos?
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  step={step}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                ¿Listo para tener un sitio web profesional?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 mb-8"
                variants={itemVariants}
              >
                Agenda una llamada gratuita y conversemos sobre tu proyecto
              </motion.p>
              <motion.a 
                href="mailto:info@torisoftt.com" 
                className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar Ahora
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}