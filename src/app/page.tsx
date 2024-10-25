// // 'use client';
// //
// // import React, { useState, useEffect } from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { motion } from 'framer-motion';
// // import { Twitter, Github, Youtube, Instagram, Linkedin, Code, Figma, Terminal, Globe, Layers, Palette } from 'lucide-react';
// //
// // export default function Page() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [activeSection, setActiveSection] = useState('inicio');
// //
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const sections = ['inicio', 'sobre-mi', 'servicios', 'proyectos', 'blog', 'contacto'];
// //       const scrollPosition = window.scrollY;
// //
// //       sections.forEach(section => {
// //         const element = document.getElementById(section);
// //         if (element) {
// //           const { offsetTop, offsetHeight } = element;
// //           if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
// //             setActiveSection(section);
// //           }
// //         }
// //       });
// //     };
// //
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);
// //
// //   const socialLinks = [
// //     { href: 'https://twitter.com/roggertzy', icon: Twitter, label: 'Twitter' },
// //     { href: 'https://github.com/roggrt', icon: Github, label: 'GitHub' },
// //     { href: 'https://www.youtube.com/@RogerRojas96', icon: Youtube, label: 'YouTube' },
// //     { href: 'https://www.instagram.com/roggertzy', icon: Instagram, label: 'Instagram' },
// //     { href: 'https://www.linkedin.com/in/roggrt/', icon: Linkedin, label: 'LinkedIn' }
// //   ];
// //
// //   const services = [
// //     {
// //       icon: Figma,
// //       title: 'UI/UX Design',
// //       description: 'Diseño de interfaces intuitivas y experiencias de usuario excepcionales desde Figma hasta el código final.',
// //       tags: ['Figma', 'Diseño UI', 'Prototipado', 'Design System']
// //     },
// //     {
// //       icon: Code,
// //       title: 'Desarrollo Frontend',
// //       description: 'Implementación pixel-perfect de diseños con las últimas tecnologías web.',
// //       tags: ['Next.js', 'React', 'TailwindCSS', 'TypeScript']
// //     },
// //     {
// //       icon: Terminal,
// //       title: 'Desarrollo Backend',
// //       description: 'Arquitecturas robustas y APIs escalables para tus aplicaciones.',
// //       tags: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL']
// //     },
// //     {
// //       icon: Globe,
// //       title: 'Desarrollo WordPress',
// //       description: 'Sitios web profesionales y landing pages optimizadas para conversión.',
// //       tags: ['WordPress', 'WooCommerce', 'Elementor', 'Custom Themes']
// //     },
// //     {
// //       icon: Layers,
// //       title: 'Arquitectura Software',
// //       description: 'Diseño de sistemas escalables y mantenibles para productos digitales.',
// //       tags: ['Microservicios', 'Cloud Native', 'DevOps', 'AWS']
// //     },
// //     {
// //       icon: Palette,
// //       title: 'Design System',
// //       description: 'Creación de sistemas de diseño coherentes y documentados para equipos.',
// //       tags: ['Componentes', 'Guías de Estilo', 'Tokens', 'Documentación']
// //     }
// //   ];
// //
// //   const projects = [
// //     {
// //       title: 'E-commerce Platform',
// //       description: 'Plataforma completa de comercio electrónico con gestión de inventario y análisis.',
// //       image: '/projects/ecommerce.jpg',
// //       tags: ['Next.js', 'Python', 'PostgreSQL', 'AWS'],
// //       link: '#'
// //     },
// //     {
// //       title: 'Design System',
// //       description: 'Sistema de diseño completo con componentes reutilizables y documentación.',
// //       image: '/projects/design-system.jpg',
// //       tags: ['React', 'Storybook', 'Figma', 'TypeScript'],
// //       link: '#'
// //     },
// //     {
// //       title: 'SaaS Dashboard',
// //       description: 'Panel de control para análisis de datos en tiempo real con visualizaciones.',
// //       image: '/projects/dashboard.jpg',
// //       tags: ['React', 'D3.js', 'FastAPI', 'WebSocket'],
// //       link: '#'
// //     }
// //   ];
// //
// //   return (
// //       <main className="min-h-screen bg-white dark:bg-gray-900">
// //         {/* Header */}
// //         <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
// //           <nav className="max-w-7xl mx-auto px-6 py-4">
// //             <div className="flex items-center justify-between">
// //               <Link
// //                   href="#inicio"
// //                   className="text-2xl font-bold text-gray-900 dark:text-white"
// //               >
// //                 roggrt.dev
// //               </Link>
// //
// //               <div className="hidden md:flex gap-8">
// //                 {['Inicio', 'Servicios', 'Proyectos', 'Blog', 'Contacto'].map((item) => (
// //                     <Link
// //                         key={item}
// //                         href={`#${item.toLowerCase()}`}
// //                         className={`text-sm transition-colors ${
// //                             activeSection === item.toLowerCase()
// //                                 ? 'text-blue-600 dark:text-blue-400'
// //                                 : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
// //                         }`}
// //                     >
// //                       {item}
// //                     </Link>
// //                 ))}
// //               </div>
// //
// //               <button
// //                   className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
// //                   onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               >
// //                 <span className="sr-only">Menu</span>
// //                 <svg
// //                     className="w-6 h-6"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6h16M4 12h16M4 18h16"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>
// //           </nav>
// //         </header>
// //
// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //             <div className="fixed inset-0 z-40 md:hidden">
// //               <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
// //               <nav className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6">
// //                 <div className="flex justify-end mb-8">
// //                   <button
// //                       onClick={() => setIsMenuOpen(false)}
// //                       className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
// //                   >
// //                     <svg
// //                         className="w-6 h-6"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           strokeWidth={2}
// //                           d="M6 18L18 6M6 6l12 12"
// //                       />
// //                     </svg>
// //                   </button>
// //                 </div>
// //                 <div className="flex flex-col gap-4">
// //                   {['Inicio', 'Servicios', 'Proyectos', 'Blog', 'Contacto'].map((item) => (
// //                       <Link
// //                           key={item}
// //                           href={`#${item.toLowerCase()}`}
// //                           className={`text-lg ${
// //                               activeSection === item.toLowerCase()
// //                                   ? 'text-blue-600 dark:text-blue-400'
// //                                   : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
// //                           }`}
// //                           onClick={() => setIsMenuOpen(false)}
// //                       >
// //                         {item}
// //                       </Link>
// //                   ))}
// //                 </div>
// //               </nav>
// //             </div>
// //         )}
// //
// //         {/* Hero Section */}
// //         <section id="inicio" className="pt-28 pb-20">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <div className="grid md:grid-cols-2 gap-12 items-center">
// //               <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.6 }}
// //               >
// //                 <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
// //                   Roger Rojas
// //                 </h1>
// //                 <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
// //                   Software Architect & Full Stack Developer
// //                   <span className="block mt-2">UI/UX Designer</span>
// //                 </h2>
// //                 <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
// //                   Creando experiencias digitales excepcionales a través del diseño intuitivo
// //                   y desarrollo robusto.
// //                 </p>
// //                 <div className="flex flex-wrap gap-4">
// //                   <Link
// //                       href="#contacto"
// //                       className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
// //                   >
// //                     Hablemos de tu proyecto
// //                   </Link>
// //                   <Link
// //                       href="#proyectos"
// //                       className="px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors"
// //                   >
// //                     Ver proyectos
// //                   </Link>
// //                 </div>
// //               </motion.div>
// //
// //               <motion.div
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   transition={{ duration: 0.6, delay: 0.2 }}
// //                   className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800"
// //               >
// //                 {/*<Image*/}
// //                 {/*    src="/tori.jpeg"*/}
// //                 {/*    alt="Roger Rojas"*/}
// //                 {/*    fill*/}
// //                 {/*    className="object-cover"*/}
// //                 {/*    priority*/}
// //                 {/*/>*/}
// //
// //                 <Image
// //                     src="/tori.jpeg"
// //                     alt="Roger Rojas"
// //                     width={500}
// //                     height={500}
// //                     className="object-cover w-full h-full rounded-3xl"
// //                     priority
// //                 />
// //
// //
// //
// //               </motion.div>
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Services Section */}
// //         <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-800/50">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //                 viewport={{ once: true }}
// //                 className="text-center mb-16"
// //             >
// //               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
// //                 Servicios
// //               </h2>
// //               <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// //                 Ofrezco soluciones completas desde el diseño hasta la implementación,
// //                 asegurando productos digitales de alta calidad.
// //               </p>
// //             </motion.div>
// //
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {services.map((service, index) => (
// //                   <motion.div
// //                       key={service.title}
// //                       initial={{ opacity: 0, y: 20 }}
// //                       whileInView={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.6, delay: index * 0.1 }}
// //                       viewport={{ once: true }}
// //                   >
// //                     <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 h-full">
// //                       <service.icon className="w-12 h-12 mb-4 text-blue-600" />
// //                       <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
// //                         {service.title}
// //                       </h3>
// //                       <p className="text-gray-600 dark:text-gray-400 mb-4">
// //                         {service.description}
// //                       </p>
// //                       <div className="flex flex-wrap gap-2 mt-auto">
// //                         {service.tags.map((tag) => (
// //                             <span
// //                                 key={tag}
// //                                 className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
// //                             >
// //                         {tag}
// //                       </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Projects Section */}
// //         <section id="proyectos" className="py-20">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //                 viewport={{ once: true }}
// //                 className="text-center mb-16"
// //             >
// //               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
// //                 Proyectos Destacados
// //               </h2>
// //               <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// //                 Una selección de proyectos que demuestran mi experiencia en diseño y desarrollo.
// //               </p>
// //             </motion.div>
// //
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {projects.map((project, index) => (
// //                   <motion.div
// //                       key={project.title}
// //                       initial={{ opacity: 0, y: 20 }}
// //                       whileInView={{ opacity: 1, y: 0 }}
// //                       transition={{ duration: 0.6, delay: index * 0.1 }}
// //                       viewport={{ once: true }}
// //                   >
// //                     <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-900/50">
// //                       <div className="aspect-video relative">
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //                         <Image
// //                             src={project.image}
// //                             alt={project.title}
// //                             fill
// //                             className="object-cover"
// //                         />
// //                       </div>
// //                       <div className="p-6">
// //                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// //                           {project.title}
// //                         </h3>
// //                         <p className="text-gray-600 dark:text-gray-400 mb-4">
// //                           {project.description}
// //                         </p>
// //                         <div className="flex flex-wrap gap-2 mb-4">
// //                           {project.tags.map((tag) => (
// //                               <span
// //                                   key={tag}
// //                                   className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
// //                               >
// //                           {tag}
// //                         </span>
// //                           ))}
// //                         </div>
// //                         <Link
// //                             href={project.link}
// //                             className="block w-full text-center px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
// //                         >
// //                           Ver proyecto
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Contact Section */}
// //         <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-800/50">
// //           <div className="max-w-3xl mx-auto px-6">
// //             <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //                 viewport={{ once: true }}
// //                 className="text-center mb-16"
// //             >
// //               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
// //                 Hablemos de tu proyecto
// //               </h2>
// //               <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// //                 ¿Tienes un proyecto en mente? Cuéntame más sobre él y veamos cómo puedo ayudarte.
// //               </p>
// //             </motion.div>
// //
// //             <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6">
// //               <form className="space-y-6">
// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
// //                       Nombre
// //                     </label>
// //                     <input
// //                         type="text"
// //                         placeholder="Tu nombre"
// //                         className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
// //                       Email
// //                     </label>
// //                     <input
// //                         type="email"
// //                         placeholder="tu@email.com"
// //                         className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
// //                     Asunto
// //                   </label>
// //                   <input
// //                       type="text"
// //                       placeholder="Asunto de tu mensaje"
// //                       className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
// //                     Mensaje
// //                   </label>
// //                   <textarea
// //                       placeholder="Cuéntame sobre tu proyecto"
// //                       rows={4}
// //                       className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>
// //                 <button
// //                     type="submit"
// //                     className="w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
// //                 >
// //                   Enviar mensaje
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </section>
// //
// //         {/* Footer */}
// //         <footer className="py-16 border-t border-gray-200 dark:border-gray-800">
// //           <div className="max-w-7xl mx-auto px-6">
// //             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
// //               <div className="col-span-1 md:col-span-2">
// //                 <Link
// //                     href="#inicio"
// //                     className="text-2xl font-bold text-gray-900 dark:text-white"
// //                 >
// //                   roggrt.dev
// //                 </Link>
// //                 <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6 max-w-md">
// //                   Software Architect, Full Stack Developer y UI/UX Designer especializado
// //                   en crear productos digitales excepcionales que combinan diseño intuitivo
// //                   con implementación robusta.
// //                 </p>
// //                 <div className="flex gap-4">
// //                   {socialLinks.map((social) => (
// //                       <Link
// //                           key={social.href}
// //                           href={social.href}
// //                           target="_blank"
// //                           rel="noopener noreferrer"
// //                           className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
// //                           aria-label={social.label}
// //                       >
// //                         <social.icon size={20} />
// //                       </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //
// //               <div>
// //                 <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
// //                   Servicios
// //                 </h4>
// //                 <ul className="space-y-2">
// //                   {[
// //                     'UI/UX Design',
// //                     'Desarrollo Frontend',
// //                     'Desarrollo Backend',
// //                     'WordPress',
// //                     'Arquitectura Software',
// //                     'Design Systems'
// //                   ].map((service) => (
// //                       <li key={service}>
// //                         <Link
// //                             href="#servicios"
// //                             className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
// //                         >
// //                           {service}
// //                         </Link>
// //                       </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //
// //               <div>
// //                 <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
// //                   Enlaces
// //                 </h4>
// //                 <ul className="space-y-2">
// //                   {[
// //                     'Inicio',
// //                     'Servicios',
// //                     'Proyectos',
// //                     'Blog',
// //                     'Contacto'
// //                   ].map((item) => (
// //                       <li key={item}>
// //                         <Link
// //                             href={`#${item.toLowerCase()}`}
// //                             className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
// //                         >
// //                           {item}
// //                         </Link>
// //                       </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //
// //             <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
// //               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
// //                 <p className="text-gray-600 dark:text-gray-400 text-sm">
// //                   © {new Date().getFullYear()} Roger Rojas. Todos los derechos reservados.
// //                 </p>
// //                 <div className="flex items-center gap-8">
// //                   <Link
// //                       href="/privacy"
// //                       className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
// //                   >
// //                     Política de Privacidad
// //                   </Link>
// //                   <Link
// //                       href="/terms"
// //                       className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
// //                   >
// //                     Términos de Servicio
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </footer>
// //       </main>
// //   );
// // }
//
//
// // src/app/page.tsx
// 'use client';
//
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Code, Figma, Terminal, Globe, Layers, Palette } from 'lucide-react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
//
// import PriceCalculator from '@/components/PriceCalculator';
// import AboutMe from '@/components/AboutMe';
//
// // Componentes de sección que podrías separar más adelante
// import { services } from '@/data/services';
// import { projects } from '@/data/projects';
//
// export default function Page() {
//   return (
//       <>
//         <Navbar />
//         <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//           {/* Hero Section */}
//           <section id="inicio" className="pt-28 pb-20">
//             <div className="max-w-7xl mx-auto px-6">
//               <div className="grid md:grid-cols-2 gap-12 items-center">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                   <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
//                     Roger Rojas
//                   </h1>
//                   <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
//                     Software Architect & Full Stack Developer
//                     <span className="block mt-2">UI/UX Designer</span>
//                   </h2>
//                   <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
//                     Creando experiencias digitales excepcionales a través del diseño intuitivo
//                     y desarrollo robusto.
//                   </p>
//                   <motion.div
//                       className="flex flex-wrap gap-4"
//                       variants={{
//                         hidden: { opacity: 0, y: 20 },
//                         visible: {
//                           opacity: 1,
//                           y: 0,
//                           transition: {
//                             staggerChildren: 0.1
//                           }
//                         }
//                       }}
//                       initial="hidden"
//                       animate="visible"
//                   >
//                     <motion.div
//                         variants={{
//                           hidden: { opacity: 0, y: 20 },
//                           visible: { opacity: 1, y: 0 }
//                         }}
//                     >
//                       <Link
//                           href="#contacto"
//                           className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors inline-block"
//                       >
//                         Hablemos de tu proyecto
//                       </Link>
//                     </motion.div>
//
//
//
//                     <motion.div
//                         variants={{
//                           hidden: { opacity: 0, y: 20 },
//                           visible: { opacity: 1, y: 0 }
//                         }}
//                     >
//                       <Link
//                           href="#proyectos"
//                           className="px-6 py-3 text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors inline-block"
//                       >
//                         Ver proyectos
//                       </Link>
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>
//
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800"
//                 >
//                   <Image
//                       src="/tori.jpeg"
//                       alt="Roger Rojas"
//                       width={500}
//                       height={500}
//                       className="object-cover w-full h-full rounded-3xl"
//                       priority
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </section>
//
//           {/* Services Section */}
//           <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//             <div className="max-w-7xl mx-auto px-6">
//               <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="text-center mb-16"
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                   Servicios
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                   Ofrezco soluciones completas desde el diseño hasta la implementación,
//                   asegurando productos digitales de alta calidad.
//                 </p>
//               </motion.div>
//
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {services.map((service, index) => (
//                     <motion.div
//                         key={service.title}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                         whileHover={{ y: -5 }}
//                     >
//                       <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg  dark:shadow-gray-900/50 h-full transform transition-all duration-300 hover:shadow-xl">
//                         <service.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
//                         <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//                           {service.title}
//                         </h3>
//                         <p className="text-gray-600 dark:text-gray-400 mb-4">
//                           {service.description}
//                         </p>
//                         <div className="flex flex-wrap gap-2 mt-auto">
//                           {service.tags.map((tag) => (
//                               <span
//                                   key={tag}
//                                   className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10
//                                    text-accent-red dark:text-accent-yellow"
//                               >
//                           {tag}
//                         </span>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//
//           {/* Projects Section */}
//           <section id="proyectos" className="py-20">
//             <div className="max-w-7xl mx-auto px-6">
//               <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="text-center mb-16"
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                   Proyectos Destacados
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                   Una selección de proyectos que demuestran mi experiencia en diseño y desarrollo.
//                 </p>
//               </motion.div>
//
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects.map((project, index) => (
//                     <motion.div
//                         key={project.title}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.1 }}
//                         viewport={{ once: true }}
//                         whileHover={{ y: -5 }}
//                         className="group"
//                     >
//                       <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg
//                                dark:shadow-gray-900/50 transform transition-all duration-300 hover:shadow-xl">
//                         <div className="aspect-video relative overflow-hidden">
//                           <div className="absolute inset-0 bg-accent-red/10 dark:bg-accent-yellow/10
//                                     group-hover:bg-transparent transition-all duration-300 z-10" />
//                           <Image
//                               src={project.image}
//                               alt={project.title}
//                               width={600}
//                               height={400}
//                               className="object-cover w-full h-full transform transition-transform duration-300
//                                  group-hover:scale-105"
//                           />
//                         </div>
//                         <div className="p-6">
//                           <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                             {project.title}
//                           </h3>
//                           <p className="text-gray-600 dark:text-gray-400 mb-4">
//                             {project.description}
//                           </p>
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             {project.tags.map((tag) => (
//                                 <span
//                                     key={tag}
//                                     className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10
//                                      text-accent-red dark:text-accent-yellow"
//                                 >
//                             {tag}
//                           </span>
//                             ))}
//                           </div>
//                           <Link
//                               href={project.link}
//                               className="block w-full text-center px-4 py-2 text-accent-red dark:text-accent-yellow
//                                  hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 rounded-lg transition-colors"
//                           >
//                             Ver proyecto
//                           </Link>
//                         </div>
//                       </div>
//                     </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//
//           {/* Contact Section */}
//           <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//             <div className="max-w-3xl mx-auto px-6">
//               <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ once: true }}
//                   className="text-center mb-16"
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                   Hablemos de tu proyecto
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                   ¿Tienes un proyecto en mente? Cuéntame más sobre él y veamos cómo puedo ayudarte.
//                 </p>
//               </motion.div>
//
//               <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6">
//                 <form className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Nombre
//                       </label>
//                       <input
//                           type="text"
//                           placeholder="Tu nombre"
//                           className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                                focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow focus:border-transparent
//                                transition-all duration-300"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                         Email
//                       </label>
//                       <input
//                           type="email"
//                           placeholder="tu@email.com"
//                           className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                                bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                                focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow focus:border-transparent
//                                transition-all duration-300"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                       Asunto
//                     </label>
//                     <input
//                         type="text"
//                         placeholder="Asunto de tu mensaje"
//                         className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                              bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                              focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow focus:border-transparent
//                              transition-all duration-300"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                       Mensaje
//                     </label>
//                     <textarea
//                         placeholder="Cuéntame sobre tu proyecto"
//                         rows={4}
//                         className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700
//                              bg-white dark:bg-gray-800 text-gray-900 dark:text-white
//                              focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow focus:border-transparent
//                              transition-all duration-300"
//                     />
//                   </div>
//                   <motion.button
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       type="submit"
//                       className="w-full px-6 py-3 text-white bg-accent-red hover:bg-accent-red/90
//                            dark:bg-accent-yellow dark:hover:bg-accent-yellow/90
//                            rounded-lg font-medium transition-colors"
//                   >
//                     Enviar mensaje
//                   </motion.button>
//                 </form>
//               </div>
//             </div>
//           </section>
//         </main>
//         <Footer />
//       </>
//   );
// }




'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code,
  Figma,
  Terminal,
  Globe,
  Layers,
  Palette,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PriceCalculator from '@/components/PriceCalculator';
import AboutMe from '@/components/AboutMe';

import ContactForm from '@/components/ContactForm';
import BlogPostContent from "@/components/BlogPostContent";
import BlogCard from "@/components/BlogCard";


// Actualiza la constante de proyectos al inicio del archivo
const projects = [
  {
    title: "Dashboard Analytics Pro",
    description: "Panel de control avanzado para análisis de datos empresariales con múltiples vistas y gráficos interactivos",
    image: "/projects/dashboard-analytics.jpg", // adminlte hero-pic
    tags: ["Angular", "TypeScript", "Chart.js", "Material UI"],
    category: "Dashboard"
  },
  {
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma integral para la gestión de recursos, reportes y analíticas en tiempo real",
    image: "/projects/business-dashboard.jpg", // architectui angular
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    category: "Aplicación Web"
  },
  {
    title: "E-commerce Calzado",
    description: "Tienda en línea especializada en calzado con sistema de inventario y pasarela de pagos",
    image: "/projects/shoe-store.jpg", // shoe-store-yoast
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    category: "E-commerce"
  },
  {
    title: "Portfolio Artístico",
    description: "Galería digital para artistas con diseño minimalista y optimización SEO",
    image: "/projects/artist-portfolio.jpg", // artist-portfolio
    tags: ["WordPress", "CSS3", "JavaScript", "SEO"],
    category: "Portfolio"
  }, 
  {
    title: "App Móvil Financiera",
    description: "Aplicación móvil para educación financiera y seguimiento de inversiones",
    image: "/projects/finance-app.jpg", // flutter
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    category: "App Móvil"
  },
  {
    title: "Landing Page Legal",
    description: "Página de aterrizaje para despacho de abogados con sistema de citas",
    image: "/projects/legal-landing.jpg", // hubspot
    tags: ["HTML5", "CSS3", "JavaScript", "API Integration"],
    category: "Landing Page"
  }
];

const services = [
  {
    icon: Globe,
    title: "Desarrollo WordPress",
    description: "Sitios web profesionales y personalizados con WordPress, optimizados para rendimiento y SEO.",
    tags: ["Temas Personalizados", "WooCommerce", "Optimización"]
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables utilizando las últimas tecnologías.",
    tags: ["React", "Next.js", "Node.js", "API REST"]
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Diseño de interfaces intuitivas y experiencias de usuario excepcionales.",
    tags: ["Figma", "Design Systems", "Prototyping"]
  }
];


export default function Page() {



  return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Hero Section */}
          <section id="inicio" className="pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-accent-red dark:text-accent-yellow">
                    Roger Rojas
                  </h1>
                  <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                    Software Architect & Full Stack Developer
                    <span className="block mt-2">UI/UX Designer</span>
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                    Creando experiencias digitales excepcionales a través del diseño intuitivo
                    y desarrollo robusto.
                  </p>
                  <motion.div
                      className="flex flex-wrap gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                  >
                    <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                    >
                      <Link
                          href="#cotizador"
                          className="group px-6 py-3 text-white bg-accent-red hover:bg-accent-red/90
                                                     dark:bg-accent-yellow dark:hover:bg-accent-yellow/90
                                                     dark:text-gray-900 rounded-lg font-medium transition-colors
                                                     inline-flex items-center gap-2"
                      >
                        Cotizar Proyecto
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                    <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                    >
                      <Link
                          href="#proyectos"
                          className="group px-6 py-3 text-accent-red dark:text-accent-yellow
                                                     border-2 border-accent-red dark:border-accent-yellow
                                                     hover:bg-accent-red/5 dark:hover:bg-accent-yellow/5
                                                     rounded-lg font-medium transition-colors inline-flex
                                                     items-center gap-2"
                      >
                        Ver proyectos de software
                        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1
                                                                   group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative aspect-square rounded-3xl overflow-hidden border-2
                                         border-accent-red dark:border-accent-yellow shadow-2xl"
                >
                  <Image
                      src="/tori.jpeg"
                      alt="Roger Rojas"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full rounded-3xl transform
                                             transition-transform duration-500 hover:scale-110"
                      priority
                  />
                </motion.div>
              </div>
            </div>
          </section>



          {/* Services Section */}
                     <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-800/50">
                      <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.6 }}
                               viewport={{ once: true }}
                              className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                              Servicios
                            </h2>
                           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                              Ofrezco soluciones completas desde el diseño hasta la implementación,
                               asegurando productos digitales de alta calidad.
                            </p>
                           </motion.div>

                           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {services.map((service, index) => (
                                 <motion.div
                                     key={service.title}
                                     initial={{ opacity: 0, y: 20 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.6, delay: index * 0.1 }}
                                     viewport={{ once: true }}
                                     whileHover={{ y: -5 }}
                                 >
                                   <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg  dark:shadow-gray-900/50 h-full transform transition-all duration-300 hover:shadow-xl">
                                     <service.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                                     <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                       {service.title}
                                     </h3>
                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
                                      {service.description}
                                    </p>
                                     <div className="flex flex-wrap gap-2 mt-auto">
                                      {service.tags.map((tag) => (
                                           <span
                                               key={tag}
                                               className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10
                                                text-accent-red dark:text-accent-yellow"
                                           >
                                      {tag}
                                    </span>
                                       ))}
                                     </div>
                                   </div>
                                 </motion.div>
                             ))}
                           </div>
                        </div>
                       </section>

          {/* Price Calculator Section */}
          <PriceCalculator />

{/* Projects Section */}
<section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Proyectos Destacados
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Una selección de proyectos que demuestran mi experiencia en diseño y desarrollo.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg 
                        dark:shadow-gray-900/50 transition-all duration-300
                        hover:shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-red/10 dark:bg-accent-yellow/10 
                           group-hover:bg-transparent transition-all duration-300 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transform transition-transform 
                         duration-300 group-hover:scale-105"
                priority={index < 3} // Priorizar la carga de las primeras 3 imágenes
              />
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 
                           px-3 py-1 rounded-full text-xs font-medium 
                           text-accent-red dark:text-accent-yellow z-20">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-accent-red/10 
                             dark:bg-accent-yellow/10 text-accent-red 
                             dark:text-accent-yellow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* Contact Section */}
<section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-3xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Hablemos de tu proyecto
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        ¿Tienes un proyecto en mente? Cuéntame más sobre él y veamos cómo puedo ayudarte.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8"
    >
      <ContactForm />
    </motion.div>
  </div>
</section>






          


          {/* About Me Section */}
          <AboutMe />

          {/* Blog Section */}
          {/*<Blog />*/}
          {/*<BlogCard />*/}

            {/* contenido del post */}


        </main>
        <Footer />
      </>
  );
}