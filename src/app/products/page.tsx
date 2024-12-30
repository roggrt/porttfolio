// // // // page.tsx
// // // 'use client'
// // //
// // // import { motion } from 'framer-motion'
// // // import Link from 'next/link'
// // // import { Rocket, Globe, ShoppingCart, Code, Brain, Store } from 'lucide-react'
// // // import Navbar from '@/components/layout/Navbar'
// // // import Footer from '@/components/layout/Footer'
// // //
// // // const services = [
// // //     {
// // //         icon: Code,
// // //         title: 'Sitio WordPress/PHP',
// // //         description: 'Desarrollo de sitio web profesional con WordPress o PHP, ideal para negocios y si ya tienes tu diseño en figma',
// // //         price: 199,
// // //         slug: 'wordpress',
// // //         features: ['Responsive Design', 'SEO Básico', 'Optimización de Velocidad'],
// // //         tags: ['WordPress', 'PHP', 'Web']
// // //     },
// // //     {
// // //         icon: Brain,
// // //         title: 'Desarrollo a Medida',
// // //         description: 'Desarrollo personalizado con código nativo, mayor flexibilidad y rendimiento',
// // //         price: 299,
// // //         slug: 'custom',
// // //         features: ['Alto Rendimiento', 'Personalización Total', 'Escalabilidad'],
// // //         tags: ['React', 'Node.js', 'API']
// // //     },
// // //     {
// // //         icon: Store,
// // //         title: 'E-commerce',
// // //         description: 'Tienda online completa con gestión de productos y pagos',
// // //         price: 399,
// // //         slug: 'ecommerce',
// // //         features: ['Carrito de Compras', 'Pasarela de Pagos', 'Panel Admin'],
// // //         tags: ['WooCommerce', 'Shopify', 'E-commerce']
// // //     }
// // // ]
// // //
// // // export default function ProductsPage() {
// // //     return (
// // //         <>
// // //             <Navbar />
// // //             <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// // //                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// // //                     <div className="max-w-7xl mx-auto px-6">
// // //                         <motion.div
// // //                             initial={{ opacity: 0, y: 20 }}
// // //                             whileInView={{ opacity: 1, y: 0 }}
// // //                             transition={{ duration: 0.6 }}
// // //                             viewport={{ once: true }}
// // //                             className="text-center mb-16"
// // //                         >
// // //                             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// // //                                 Servicios de Desarrollo Web
// // //                             </h1>
// // //                             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// // //                                 Soluciones digitales profesionales adaptadas a tus necesidades
// // //                             </p>
// // //                         </motion.div>
// // //
// // //                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //                             {services.map((service, index) => (
// // //                                 <Link href={`/products/${service.slug}`} key={service.slug}>
// // //                                     <motion.div
// // //                                         initial={{ opacity: 0, y: 20 }}
// // //                                         whileInView={{ opacity: 1, y: 0 }}
// // //                                         transition={{ duration: 0.6, delay: index * 0.1 }}
// // //                                         viewport={{ once: true }}
// // //                                         whileHover={{ y: -5 }}
// // //                                         className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 h-full"
// // //                                     >
// // //                                         <service.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// // //                                         <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
// // //                                             {service.title}
// // //                                         </h2>
// // //                                         <p className="text-gray-600 dark:text-gray-400 mb-4">
// // //                                             {service.description}
// // //                                         </p>
// // //                                         <ul className="mb-4 space-y-2">
// // //                                             {service.features.map((feature) => (
// // //                                                 <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
// // //                                                     <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mr-2" />
// // //                                                     {feature}
// // //                                                 </li>
// // //                                             ))}
// // //                                         </ul>
// // //                                         <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
// // //                       <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
// // //                         ${service.price}
// // //                       </span>
// // //                                             <span className="text-sm text-gray-500 hover:text-accent-red dark:hover:text-accent-yellow transition-colors">
// // //                         Ver detalles →
// // //                       </span>
// // //                                         </div>
// // //                                         <div className="flex flex-wrap gap-2 mt-4">
// // //                                             {service.tags.map((tag) => (
// // //                                                 <span
// // //                                                     key={tag}
// // //                                                     className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow"
// // //                                                 >
// // //                           {tag}
// // //                         </span>
// // //                                             ))}
// // //                                         </div>
// // //                                     </motion.div>
// // //                                 </Link>
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
// // //                             transition={{ duration: 0.6 }}
// // //                             viewport={{ once: true }}
// // //                         >
// // //                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// // //                                 ¿No encuentras lo que buscas?
// // //                             </h2>
// // //                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// // //                                 Contáctanos para discutir tu proyecto específico
// // //                             </p>
// // //                             <motion.a
// // //                                 href="mailto:info@torisoftt.com"
// // //                                 className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
// // //                                 whileHover={{ scale: 1.05 }}
// // //                                 whileTap={{ scale: 0.95 }}
// // //                             >
// // //                                 Contactar Ahora
// // //                             </motion.a>
// // //                         </motion.div>
// // //                     </div>
// // //                 </section>
// // //             </main>
// // //             <Footer />
// // //         </>
// // //     )
// // // }
// //
// // // page.tsx
// // 'use client'
// //
// // import { motion } from 'framer-motion'
// // import { useState } from 'react'
// // import Link from 'next/link'
// // import {
// //     Palette,
// //     Code,
// //     Database,
// //     Smartphone,
// //     Crown,
// //     Rocket,
// //     SlidersHorizontal,
// //     Search,
// //     Store,
// //     Sparkles
// // } from 'lucide-react'
// // import Navbar from '@/components/layout/Navbar'
// // import Footer from '@/components/layout/Footer'
// //
// // const services = [
// //     {
// //         category: 'Promo Destacada',
// //         items: [{
// //             icon: Crown,
// //             title: 'Diseño + Desarrollo Web',
// //             description: '¿Necesitas una página web profesional para tu negocio? Obtén un diseño único y desarrollo optimizado en WordPress',
// //             price: 199,
// //             features: [
// //                 'Diseño UI/UX personalizado',
// //                 'Desarrollo WordPress/PHP',
// //                 'Responsive Design',
// //                 'SEO básico incluido',
// //                 'Entrega 5-7 días'
// //             ],
// //             slug: 'promo-web',
// //             tags: ['WordPress', 'UI/UX', 'Web'],
// //             isPromo: true
// //         }]
// //     },
// //     {
// //         category: 'Diseño Web',
// //         items: [
// //             {
// //                 icon: Palette,
// //                 title: 'UI/UX Design',
// //                 description: 'Diseño profesional de interfaces centrado en usuarios y conversiones',
// //                 price: 299,
// //                 features: [
// //                     'Wireframes y prototipos',
// //                     'Diseño mobile first',
// //                     'Sistema de diseño',
// //                     'Guía de estilos'
// //                 ],
// //                 slug: 'uiux',
// //                 tags: ['Figma', 'UX', 'UI']
// //             }
// //         ]
// //     },
// //     {
// //         category: 'Desarrollo Web',
// //         items: [
// //             {
// //                 icon: Code,
// //                 title: 'WordPress/PHP',
// //                 description: 'Desarrollo web profesional con WordPress o PHP puro',
// //                 price: 399,
// //                 features: [
// //                     'Sitios corporativos',
// //                     'Blogs y portafolios',
// //                     'Multilenguaje',
// //                     'Optimización'
// //                 ],
// //                 slug: 'wordpress',
// //                 tags: ['WordPress', 'PHP', 'Web']
// //             },
// //             {
// //                 icon: Rocket,
// //                 title: 'Web Apps React',
// //                 description: 'Aplicaciones web modernas y escalables con React/Next.js',
// //                 price: 599,
// //                 features: [
// //                     'SPAs y PWAs',
// //                     'Dashboards',
// //                     'Alto rendimiento',
// //                     'SEO avanzado'
// //                 ],
// //                 slug: 'react',
// //                 tags: ['React', 'Next.js', 'Node']
// //             }
// //         ]
// //     },
// //     {
// //         category: 'Software Empresarial',
// //         items: [
// //             {
// //                 icon: SlidersHorizontal,
// //                 title: 'Soluciones a Medida',
// //                 description: 'Software personalizado para automatizar y optimizar tu negocio',
// //                 price: 499,
// //                 features: [
// //                     'Sistemas de reservas',
// //                     'Gestión hotelera',
// //                     'CRMs personalizados',
// //                     'Agendamiento'
// //                 ],
// //                 slug: 'custom',
// //                 tags: ['Software', 'Automation']
// //             },
// //             {
// //                 icon: Database,
// //                 title: 'Base de Datos',
// //                 description: 'Diseño e implementación profesional de bases de datos',
// //                 price: 399,
// //                 features: [
// //                     'Arquitectura SQL/NoSQL',
// //                     'Diagramas ER/UML',
// //                     'Optimización',
// //                     'Migración datos'
// //                 ],
// //                 slug: 'database',
// //                 tags: ['SQL', 'NoSQL', 'ERD']
// //             }
// //         ]
// //     },
// //     {
// //         category: 'Otros Servicios',
// //         items: [
// //             {
// //                 icon: Smartphone,
// //                 title: 'Apps Móviles',
// //                 description: 'Desarrollo de aplicaciones móviles multiplataforma con Flutter',
// //                 price: 999,
// //                 features: [
// //                     'iOS y Android',
// //                     'UI nativa',
// //                     'Push notifications',
// //                     'Offline first'
// //                 ],
// //                 slug: 'mobile',
// //                 tags: ['Flutter', 'Mobile', 'Apps']
// //             },
// //             {
// //                 icon: Store,
// //                 title: 'E-commerce',
// //                 description: 'Tiendas online completas con WooCommerce o soluciones personalizadas',
// //                 price: 699,
// //                 features: [
// //                     'Catálogo productos',
// //                     'Pagos online',
// //                     'Envíos',
// //                     'Panel admin'
// //                 ],
// //                 slug: 'ecommerce',
// //                 tags: ['WooCommerce', 'Shop']
// //             }
// //         ]
// //     }
// // ]
// //
// // export default function ProductsPage() {
// //     const [selectedServices, setSelectedServices] = useState<string[]>([])
// //
// //     const handleWhatsApp = () => {
// //         const selectedItems = selectedServices
// //             .map(slug => services
// //                 .flatMap(cat => cat.items)
// //                 .find(item => item.slug === slug)
// //             )
// //             .filter(Boolean)
// //             .map(service => `*${service?.title}*`)
// //             .join('\n')
// //
// //         const message = `¡Hola! Me interesan los siguientes servicios:\n\n${selectedItems}\n\n¿Podrían darme más información?`
// //         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`)
// //     }
// //
// //     const toggleService = (slug: string) => {
// //         setSelectedServices(prev =>
// //             prev.includes(slug)
// //                 ? prev.filter(id => id !== slug)
// //                 : [...prev, slug]
// //         )
// //     }
// //
// //     return (
// //         <>
// //             <Navbar />
// //             <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
// //                 {/* Hero/Promo Banner */}
// //                 <section className="py-12 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <div className="text-center max-w-3xl mx-auto">
// //                             <motion.div
// //                                 initial={{ opacity: 0, y: 20 }}
// //                                 whileInView={{ opacity: 1, y: 0 }}
// //                                 transition={{ duration: 0.6 }}
// //                                 viewport={{ once: true }}
// //                             >
// //                                 <Sparkles className="w-12 h-12 mx-auto mb-6 text-accent-red dark:text-accent-yellow" />
// //                                 <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
// //                                     Servicios Digitales Profesionales
// //                                 </h1>
// //                                 <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
// //                                     Desde landing pages hasta aplicaciones empresariales complejas.
// //                                     Soluciones digitales que hacen crecer tu negocio.
// //                                 </p>
// //                             </motion.div>
// //                         </div>
// //                     </div>
// //                 </section>
// //
// //                 {/* Services Grid */}
// //                 <section className="py-20">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         {services.map((category, categoryIndex) => (
// //                             <div key={category.category} className="mb-20">
// //                                 <motion.h2
// //                                     initial={{ opacity: 0, y: 20 }}
// //                                     whileInView={{ opacity: 1, y: 0 }}
// //                                     transition={{ duration: 0.6 }}
// //                                     viewport={{ once: true }}
// //                                     className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white"
// //                                 >
// //                                     {category.category}
// //                                 </motion.h2>
// //
// //                                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                                     {category.items.map((service, index) => (
// //                                         <motion.div
// //                                             key={service.slug}
// //                                             initial={{ opacity: 0, y: 20 }}
// //                                             whileInView={{ opacity: 1, y: 0 }}
// //                                             transition={{ duration: 0.6, delay: index * 0.1 }}
// //                                             viewport={{ once: true }}
// //                                             whileHover={{ y: -5 }}
// //                                             className={`relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 h-full ${
// //                                                 service.isPromo ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
// //                                             }`}
// //                                         >
// //                                             {service.isPromo && (
// //                                                 <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
// //                           Promo
// //                         </span>
// //                                             )}
// //
// //                                             <service.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
// //                                             <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
// //                                                 {service.title}
// //                                             </h3>
// //                                             <p className="text-gray-600 dark:text-gray-400 mb-4">
// //                                                 {service.description}
// //                                             </p>
// //                                             <ul className="mb-4 space-y-2">
// //                                                 {service.features.map((feature) => (
// //                                                     <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
// //                                                         <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mr-2" />
// //                                                         {feature}
// //                                                     </li>
// //                                                 ))}
// //                                             </ul>
// //                                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
// //                         <span className="text-2xl font-bold text-accent-red dark:text-accent-yellow">
// //                           desde ${service.price}
// //                         </span>
// //                                                 <button
// //                                                     onClick={() => toggleService(service.slug)}
// //                                                     className={`px-4 py-2 rounded-lg transition-colors ${
// //                                                         selectedServices.includes(service.slug)
// //                                                             ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
// //                                                             : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
// //                                                     }`}
// //                                                 >
// //                                                     {selectedServices.includes(service.slug) ? 'Seleccionado' : 'Seleccionar'}
// //                                                 </button>
// //                                             </div>
// //                                             <div className="flex flex-wrap gap-2 mt-4">
// //                                                 {service.tags.map((tag) => (
// //                                                     <span
// //                                                         key={tag}
// //                                                         className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow"
// //                                                     >
// //                             {tag}
// //                           </span>
// //                                                 ))}
// //                                             </div>
// //                                         </motion.div>
// //                                     ))}
// //                                 </div>
// //                             </div>
// //                         ))}
// //
// //                         {selectedServices.length > 0 && (
// //                             <motion.div
// //                                 initial={{ opacity: 0, y: 20 }}
// //                                 animate={{ opacity: 1, y: 0 }}
// //                                 className="fixed bottom-8 right-8 z-50"
// //                             >
// //                                 <button
// //                                     onClick={handleWhatsApp}
// //                                     className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
// //                                 >
// //                                     <span>Consultar Seleccionados ({selectedServices.length})</span>
// //                                 </button>
// //                             </motion.div>
// //                         )}
// //                     </div>
// //                 </section>
// //             </main>
// //             <Footer />
// //         </>
// //     )
// // }
//
// // page.tsx
// 'use client'
//
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//     Globe,
//     Smartphone,
//     Database,
//     Building2,
//     Sparkles,
//     MessageSquareMore
// } from 'lucide-react'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
//
// const solutions = [
//     {
//         icon: Globe,
//         title: 'Necesito una página web',
//         description: 'Ideal para negocios que buscan presencia online',
//         options: [
//             {
//                 name: 'Promo Web + Diseño',
//                 price: 199,
//                 features: ['Diseño UI/UX', 'WordPress', '5 días', 'SEO básico'],
//                 isPromo: true,
//                 slug: 'promo-web'
//             },
//             {
//                 name: 'E-commerce',
//                 price: 399,
//                 features: ['Tienda online', 'Pagos', 'Productos', 'Admin'],
//                 slug: 'ecommerce'
//             },
//             {
//                 name: 'Web App Pro',
//                 price: 599,
//                 features: ['React/Next.js', 'APIs', 'Dashboard', 'Escalable'],
//                 slug: 'webapp'
//             }
//         ]
//     },
//     {
//         icon: Building2,
//         title: 'Necesito un sistema personalizado',
//         description: 'Para empresas que requieren automatizar procesos',
//         options: [
//             {
//                 name: 'Sistema Empresarial',
//                 price: 499,
//                 features: ['Software a medida', 'Base de datos', 'Usuarios', 'Reportes'],
//                 slug: 'business'
//             },
//             {
//                 name: 'Base de Datos',
//                 price: 399,
//                 features: ['Diseño BD', 'SQL/NoSQL', 'Migración', 'Optimización'],
//                 slug: 'database'
//             }
//         ]
//     },
//     {
//         icon: Smartphone,
//         title: 'Quiero una app móvil',
//         description: 'Apps nativas para iOS y Android',
//         options: [
//             {
//                 name: 'App Multiplataforma',
//                 price: 999,
//                 features: ['iOS + Android', 'Flutter', 'Backend', 'APIs'],
//                 slug: 'mobile'
//             }
//         ]
//     },
//     {
//         icon: MessageSquareMore,
//         title: 'Busco consultoría técnica',
//         description: 'Asesoría especializada para tu proyecto',
//         options: [
//             {
//                 name: 'Consultoría IT',
//                 price: 149,
//                 features: ['Auditoría', 'Optimización', 'Arquitectura', 'DevOps'],
//                 slug: 'consulting'
//             }
//         ]
//     }
// ]
//
// export default function ProductsPage() {
//     const [selectedServices, setSelectedServices] = useState<string[]>([])
//     const [expandedCategory, setExpandedCategory] = useState<number | null>(null)
//
//     const handleWhatsApp = () => {
//         const selectedItems = selectedServices
//             .map(slug => solutions
//                 .flatMap(cat => cat.options)
//                 .find(item => item.slug === slug)
//             )
//             .filter(Boolean)
//             .map(service => `*${service?.name}* (desde $${service?.price})`)
//             .join('\n')
//
//         const message = `¡Hola! Me interesan estos servicios:\n\n${selectedItems}\n\n¿Podrían darme más información?`
//         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`)
//     }
//
//     const toggleService = (slug: string) => {
//         setSelectedServices(prev =>
//             prev.includes(slug)
//                 ? prev.filter(id => id !== slug)
//                 : [...prev, slug]
//         )
//     }
//
//     return (
//         <>
//             <Navbar />
//             <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
//                 {/* Promo Banner */}
//                 <section className="py-12 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="max-w-3xl mx-auto text-center"
//                         >
//                             <Sparkles className="w-12 h-12 mx-auto mb-6 text-accent-red dark:text-accent-yellow" />
//                             <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-red to-red-500 dark:from-accent-yellow dark:to-yellow-500 bg-clip-text text-transparent">
//                                 ¿Qué solución digital necesitas?
//                             </h1>
//                             <p className="text-lg text-gray-600 dark:text-gray-400">
//                                 Selecciona la opción que mejor se adapte a tu negocio
//                             </p>
//                         </motion.div>
//                     </div>
//                 </section>
//
//                 {/* Solutions Grid */}
//                 <section className="py-20">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <div className="grid md:grid-cols-2 gap-8">
//                             {solutions.map((solution, index) => (
//                                 <motion.div
//                                     key={solution.title}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     className="relative"
//                                 >
//                                     <button
//                                         onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
//                                         className="w-full text-left"
//                                     >
//                                         <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//                                             <solution.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
//                                             <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                                 {solution.title}
//                                             </h2>
//                                             <p className="text-gray-600 dark:text-gray-400">
//                                                 {solution.description}
//                                             </p>
//                                             <span className="text-sm text-accent-red dark:text-accent-yellow mt-2 block">
//                         {expandedCategory === index ? 'Ver menos ↑' : 'Ver opciones ↓'}
//                       </span>
//                                         </div>
//                                     </button>
//
//                                     {expandedCategory === index && (
//                                         <motion.div
//                                             initial={{ opacity: 0, height: 0 }}
//                                             animate={{ opacity: 1, height: 'auto' }}
//                                             exit={{ opacity: 0, height: 0 }}
//                                             className="mt-4 space-y-4"
//                                         >
//                                             {solution.options.map((option) => (
//                                                 <motion.div
//                                                     key={option.slug}
//                                                     initial={{ opacity: 0, x: -20 }}
//                                                     animate={{ opacity: 1, x: 0 }}
//                                                     className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md ${
//                                                         option.isPromo ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
//                                                     }`}
//                                                 >
//                                                     {option.isPromo && (
//                                                         <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
//                               Promo
//                             </span>
//                                                     )}
//
//                                                     <div className="flex justify-between items-start mb-4">
//                                                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                                                             {option.name}
//                                                         </h3>
//                                                         <span className="text-xl font-bold text-accent-red dark:text-accent-yellow">
//                               desde ${option.price}
//                             </span>
//                                                     </div>
//
//                                                     <ul className="mb-4 space-y-2">
//                                                         {option.features.map((feature) => (
//                                                             <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                                                                 <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mr-2" />
//                                                                 {feature}
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//
//                                                     <button
//                                                         onClick={() => toggleService(option.slug)}
//                                                         className={`w-full py-2 rounded-lg transition-colors ${
//                                                             selectedServices.includes(option.slug)
//                                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                                 : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
//                                                         }`}
//                                                     >
//                                                         {selectedServices.includes(option.slug) ? 'Seleccionado' : 'Seleccionar'}
//                                                     </button>
//                                                 </motion.div>
//                                             ))}
//                                         </motion.div>
//                                     )}
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* Floating Action Button */}
//                 {selectedServices.length > 0 && (
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="fixed bottom-8 right-8 z-50"
//                     >
//                         <button
//                             onClick={handleWhatsApp}
//                             className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
//                         >
//                             <span>Consultar ({selectedServices.length})</span>
//                         </button>
//                     </motion.div>
//                 )}
//             </main>
//             <Footer />
//         </>
//     )
// }

// layout.tsx permanece igual

// page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Globe,
    Smartphone,
       Building2,
    Sparkles,
    MessageSquareMore,

    Server
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'


const solutions = [
    {
        icon: Globe,
        title: 'Páginas Web',
        tagline: 'Presencia online profesional',
        description: 'Sitios web optimizados para convertir visitantes en clientes',
        image: 'https://images.pexels.com/photos/8171308/pexels-photo-8171308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tags: ['SEO', 'Responsive', 'WordPress', 'E-commerce'],
        options: [
            {
                name: 'Promo Web + Diseño',
                price: 150,
                description: 'Página web profesional con diseño personalizado y optimización SEO',
                features: ['Diseño UI/UX', 'WordPress', '5 días', 'SEO básico'],
                isPromo: true,
                slug: 'promo-web',
                tags: ['WordPress', 'SEO', 'Responsive']
            },
            {
                name: 'WordPress Pro',
                price: 199,
                description: 'Solución completa para negocios que necesitan más funcionalidades',
                features: ['Multilenguaje', 'WooCommerce', 'APIs', 'Optimización'],
                slug: 'wordpress-pro',
                tags: ['WordPress', 'E-commerce', 'APIs'],
                isPromo: false,
            },
            {
                name: 'Web App React',
                price: 299,
                description: 'Aplicaciones web modernas y escalables para proyectos complejos',
                features: ['React/Next.js', 'Full Stack', 'Dashboard', 'Escalable'],
                slug: 'webapp',
                tags: ['React', 'Next.js', 'APIs'],
                isPromo: false,
            }
        ]
    },
    {
        icon: Building2,
        title: 'Software Empresarial',
        tagline: 'Soluciones a medida',
        description: 'Automatización de procesos y sistemas personalizados',
        image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tags: ['Software', 'Automatización', 'Bases de Datos'],
        options: [
            {
                name: 'Sistema Personalizado',
                description: 'Software a medida para necesidades específicas de tu empresa',
                features: ['Software a medida', 'Base de datos', 'Usuarios', 'Panel Admin'],
                slug: 'custom',
                tags: ['Custom', 'Software', 'Enterprise'],
                isPromo: false,
            },
            {
                name: 'Base de Datos',
                price: 399,
                description: 'Diseño e implementación de bases de datos empresariales',
                features: ['Diseño BD', 'SQL/NoSQL', 'Migración', 'Optimización'],
                slug: 'database',
                tags: ['SQL', 'NoSQL', 'Data'],
                isPromo: false,
            },
            {
                name: 'APIs & Automatización',
                price: 299,
                description: 'Integración y automatización de procesos empresariales, adaptados a distintos modelos de negocio',
                features: ['REST APIs', 'Webhooks', 'Scripts', 'Integraciones'],
                slug: 'apis',
                tags: ['APIs', 'Integration', 'Automation'],
                isPromo: false,
            }
        ]
    },
    {
        icon: Smartphone,
        title: 'Apps Móviles',
        tagline: 'Multiplataforma',
        description: 'Apps nativas iOS y Android con experiencias únicas',
        image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tags: ['iOS', 'Android', 'Flutter', 'UI/UX'],
        options: [
            {
                name: 'App Básica',
                price: 399,
                description: 'Aplicación móvil con funcionalidades esenciales',
                features: ['iOS + Android', 'Flutter', 'Backend', 'APIs'],
                slug: 'mobile-basic',
                tags: ['Flutter', 'Mobile', 'MVP'],
                isPromo: false,
            },
            {
                name: 'App Avanzada',
                price: 599,
                description: 'App completa con funcionalidades avanzadas y analíticas',
                features: ['Auth', 'Pagos', 'Push', 'Analytics'],
                slug: 'mobile-pro',
                tags: ['Premium', 'Full Stack', 'Analytics'],
                isPromo: false,
            }
        ]
    },
    {
        icon: MessageSquareMore,
        title: 'Consultoría',
        tagline: 'Asesoría experta',
        description: 'Orientación estratégica para tu transformación digital',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tags: ['Estrategia', 'IT', 'DevOps', 'Cloud'],
        options: [
            {
                name: 'Consultoría IT',
                description: 'Asesoría técnica y planificación estratégica de proyectos',
                features: ['Auditoría', 'Optimización', 'Arquitectura', 'DevOps'],
                slug: 'consulting',
                tags: ['IT', 'Strategy', 'Planning']

            },
            {
                name: 'Migración & Soporte',
                description: 'Servicios de migración y soporte técnico continuo',
                price: 49,
                features: ['Migración datos', 'Mantenimiento', 'Backups', 'Monitoreo'],
                slug: 'support',
                tags: ['Support', 'Migration', 'Maintenance'],
                isPromo: true,
            }
        ]
    }
]

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [selectedServices, setSelectedServices] = useState<string[]>([])

    interface Option {
        name: string;
        description: string;
        features: string[];
        slug: string;
        tags: string[];
        isPromo?: boolean;
        price?: number;
    }

    interface Solution {
        icon: any;
        title: string;
        tagline: string;
        description: string;
        image: string;
        tags: string[];
        options: Option[];
    }

    const handleWhatsApp = () => {
        const selectedItems = selectedServices
            .map(slug => {
                const allOptions = solutions.flatMap((cat: Solution) => cat.options);
                return allOptions.find((item: Option) => item.slug === slug);
            })
            .filter((item): item is Option => Boolean(item))
            .map(service => service.price
                ? `*${service.name}* (desde $${service.price})`
                : `*${service.name}*`
            )
            .join('\n');

        const message = `¡Hola! Me interesan estos servicios:\n\n${selectedItems}\n\n¿Podrían darme más información?`;
        window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    };

    const toggleService = (slug: string) => {
        setSelectedServices(prev =>
            prev.includes(slug)
                ? prev.filter(id => id !== slug)
                : [...prev, slug]
        )
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
                {/* Hero Section */}
                <section
                    className="py-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <Sparkles className="w-16 h-16 mx-auto mb-8 text-accent-red dark:text-accent-yellow"/>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                Soluciones Digitales Profesionales
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                Desarrollo de software, páginas web y aplicaciones a medida
                                adaptadas a las necesidades de tu negocio
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">

                        {/* Grid de categorías */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                            {solutions.map((solution, index) => (
                                <motion.button
                                    key={solution.title}
                                    onClick={() => setSelectedCategory(index)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative text-left rounded-xl overflow-hidden aspect-[4/5]"
                                >
                                    {/* Imagen de fondo */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 ${
                                            selectedCategory === index
                                                ? 'bg-accent-red/90'
                                                : 'bg-gradient-to-t from-gray-900/90 to-gray-900/40 hover:from-accent-red/80 hover:to-accent-red/40'
                                        } transition-colors`}/>
                                    </div>

                                    {/* Contenido */}
                                    <div className="relative h-full p-6 flex flex-col justify-end">
                                        <solution.icon className="w-12 h-12 mb-4 text-white" />
                                        <h2 className="text-xl font-semibold mb-2 text-white">
                                            {solution.title}
                                        </h2>
                                        <p className="text-white/90 mb-4">
                                            {solution.tagline}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {solution.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
                                                >
              {tag}
            </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Opciones */}
                        <AnimatePresence mode="wait">
                            {selectedCategory !== null && (
                                <motion.div
                                    key={selectedCategory}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="grid md:grid-cols-3 gap-6"
                                >
                                    {solutions[selectedCategory].options.map((option) => (
                                        <motion.div
                                            key={option.slug}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className={`relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg ${
                                                option.isPromo ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
                                            }`}
                                        >
                                            {option?.isPromo && (
                                                <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
              Promo
            </span>
                                            )}

                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {option.name}
                                                </h3>
                                                {option.price ? (
                                                    <span className="text-xl font-bold text-accent-red dark:text-accent-yellow">
                desde ${option.price}
              </span>
                                                ) : (
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                Consultar
              </span>
                                                )}
                                            </div>

                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                {option.description}
                                            </p>

                                            <ul className="mb-6 space-y-2">
                                                {option.features.map((feature) => (
                                                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mr-2"/>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {option.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow"
                                                    >
                {tag}
              </span>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => toggleService(option.slug)}
                                                className={`w-full py-2 rounded-lg transition-colors ${
                                                    selectedServices.includes(option.slug)
                                                        ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
                                                        : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
                                                }`}
                                            >
                                                {selectedServices.includes(option.slug) ? 'Seleccionado' : 'Seleccionar'}
                                            </button>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>




                    </div>

                </section>

                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            viewport={{once: true}}
                            className="text-center mb-12"
                        >
                            <Server className="w-12 h-12 mx-auto mb-4 text-accent-red dark:text-accent-yellow"/>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                Hosting & Dominio
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Nos adaptamos a tus necesidades, ya sea que necesites una solución completa o
                                tengas tu propio hosting
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.6}}
                                viewport={{once: true}}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    ¿No tienes hosting?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Incluimos 1 año de hosting profesional a precio preferencial con todos nuestros planes</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Asesoría en compra de dominio .com</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>SSL gratuito incluido</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Correos empresariales profesionales</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Soporte técnico incluido</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, x: 20}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.6}}
                                viewport={{once: true}}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    ¿Ya tienes hosting?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Trabajamos con tu hosting actual sin problema</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Asistencia en la migración si lo necesitas</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Optimización de recursos existentes</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Configuración de correos y DNS</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60 mt-2"/>
                                        <span>Asesoría en la elección del mejor plan</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            viewport={{once: true}}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                ¿No encuentras lo que buscas?
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Cuéntanos sobre tu proyecto y encontremos la mejor solución juntos
                            </p>
                            <motion.a
                                href="mailto:info@torisoftt.com"
                                className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                Contactar Ahora
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* Floating Action Button */}
                {selectedServices.length > 0 && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        className="fixed bottom-8 right-8 z-50"
                    >
                        <button
                            onClick={handleWhatsApp}
                            className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
                        >
                            <span>Consultar Selección ({selectedServices.length})</span>
                        </button>
                    </motion.div>
                )}
            </main>
            <Footer/>
        </>
    )
}