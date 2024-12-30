//pagina principal
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
  Search,
  Palette,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PriceCalculator from '@/components/PriceCalculator';
import AboutMe from '@/components/AboutMe';

import ContactForm from '@/components/ContactForm';

import PromoPopup from '@/components/PromoPopup';
import PromoBanner from "@/components/PromoBanner";



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
  },
  {
    icon: Search,
    title: "SEO y Posicionamiento",
    description: "Optimización para motores de búsqueda y estrategias de posicionamiento para mayor visibilidad online.",
    tags: ["SEO Técnico", "Keywords Research", "Google Analytics", "Link Building"]
  }
];


export default function Page() {



  return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Hero Section */}
    {/* Hero Section */}

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
          Diseño de Páginas Web & Desarrollo de Software
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Diseñamos y desarrollamos soluciones web, arquitectura de software para tu negocio, a tu medida
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
          En Torisoftt somos un equipo de desarrolladores Full Stack & UI/UX designers especializados en páginas web, sistemas de gestión y desarrollo de software empresarial.
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
              className="group px-6 py-3 text-white bg-accent-red hover:bg-accent-red/90 border-2 border-accent-red
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
              Ver proyectos
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
          alt="Torisoftt - Diseño Web y Desarrollo de Software Profesional"
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

          {/*<PromoBanner />*/}
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

                           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <PromoPopup />
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
        ¿Tienes un proyecto en mente? Cuéntame más sobre él y veamos cómo puedo ayudarte, o envíanos un correo al info@torisoftt.com
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

          <AboutMe />

        </main>
        <Footer />
      </>
  );
}