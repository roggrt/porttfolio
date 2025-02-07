//pagina principal
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Code,
  Globe,
  Search, Monitor, ShoppingCart, 
  Palette,
  ArrowRight,
  ExternalLink, 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PriceCalculator from '@/components/PriceCalculator';
import AboutMe from '@/components/AboutMe';

import ContactForm from '@/components/ContactForm';

import PromoPopup from '@/components/PromoPopup';
import PromoBanner from "@/components/PromoBanner"; 

import TawkToChat from '@/components/TawkToChat';

import CookieBanner from "@/components/CookieBanner";

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
    title: "Diseño de Interfaces UI/UX",
    description: "Diseño de interfaces intuitivas y experiencias de usuario excepcionales.",
    tags: ["Figma", "Design Systems", "Prototyping"]
  },
  {
    icon: Search,
    title: "SEO y Posicionamiento",
    description: "Optimización para motores de búsqueda y estrategias de posicionamiento web para mayor visibilidad online.",
    tags: ["SEO Técnico", "Keywords Research", "Google Analytics", "Link Building"]
  }
];



const servicesList = [
  {
      title: "Desarrollo WordPress",
      description: "Sitios web profesionales y personalizados con WordPress, optimizados para rendimiento y SEO.",
      icon: Monitor,
      image: '/ilustraciones/create-illustrations-for-wordpress-development-fea__30685.png',
      tags: ["WordPress", "PHP", "WooCommerce", "Elementor"],
      whatsappMessage: `¡Hola! Me interesa el servicio de desarrollo WordPress. Me gustaría obtener más información sobre precios y características.`,
      delay: 0.1
  },
  {
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas y escalables utilizando las últimas tecnologías y mejores prácticas.",
      icon: Code,
      image: '/ilustraciones/create-an-image-of-an-asian-female-developer-colla__30686.png',
      tags: ["React", "Next.js", "Node.js", "TypeScript"],
      whatsappMessage: `¡Hola! Me gustaría consultar sobre el servicio de desarrollo web personalizado. Necesito más detalles sobre el proceso y costos.`,
      delay: 0.2
  },
  {
      title: "Desarrollo para E-Commerce",
      description: "Tiendas online completas con gestión de productos, pagos y características avanzadas.",
      icon: ShoppingCart,
      image: '/ilustraciones/design-an-illustration-of-a-black-male-developer-s__30687.png',
      tags: ["WooCommerce", "Shopify", "PrestaShop", "Pagos"],
      whatsappMessage: `¡Hola! Me interesa crear una tienda online. ¿Podrían brindarme información sobre las opciones disponibles y precios?`,
      delay: 0.3
  },
  {
      title: "Diseño de Interfaces UI/UX",
      description: "Diseño profesional de interfaces y experiencias de usuario centradas en conversión.",
      icon: Palette,
      image: '/ilustraciones/a-professional-setting-with-three-asian-women-and-__30689.png',
      tags: ["Figma", "Adobe XD", "UI", "UX"],
      whatsappMessage: `¡Hola! Me interesa el servicio de diseño UI/UX. ¿Podrían mostrarme algunos trabajos previos y costos aproximados?`,
      delay: 0.4
  }
];


const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Page() {



  return (
      <>
        <Navbar />
        <CookieBanner />
        <TawkToChat />
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">

          {/* Hero Section */}
          <section id="inicio" className="pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-accent-red dark:text-accent-yellow">
                    Diseño de Páginas Web & Desarrollo de Software
                  </h1>
                  <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                    Diseñamos y desarrollamos soluciones web, arquitectura de software para tu negocio, a tu medida
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                    En Torisoftt somos un equipo de desarrolladores Full Stack & UI/UX designers especializados en
                    páginas web, sistemas de gestión y desarrollo de software empresarial.
                  </p>
                  <motion.div
                      className="flex flex-wrap gap-4"
                      variants={{
                        hidden: {opacity: 0, y: 20},
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
                          hidden: {opacity: 0, y: 20},
                          visible: {opacity: 1, y: 0}
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
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
                      </Link>
                    </motion.div>
                    <motion.div
                        variants={{
                          hidden: {opacity: 0, y: 20},
                          visible: {opacity: 1, y: 0}
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
                                                         group-hover:-translate-y-1 transition-transform"/>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, delay: 0.2}}
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
    

     



<section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div className="max-w-7xl mx-auto px-6">
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Servicios Profesionales
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Soluciones digitales completas y páginas web en Ecuador y Latinoamérica personalizadas para hacer crecer tu negocio online.
                Desde el diseño hasta la implementación, garantizando calidad y resultados.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesList.map((service, index) => (
                <motion.div
                    key={service.title}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: service.delay}}
                    viewport={{once: true}}
                    whileHover={{y: -5}}
                >
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 h-full flex flex-col">
                        <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <service.icon className="w-8 h-8 text-accent-red dark:text-accent-yellow"/>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {service.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                            {service.description}
                        </p>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={`https://wa.me/593984264910?text=${encodeURIComponent(service.whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium 
                                    text-accent-red dark:text-accent-yellow border-2 border-accent-red dark:border-accent-yellow 
                                    rounded-lg hover:bg-accent-red hover:dark:bg-accent-yellow hover:text-white 
                                    dark:hover:text-gray-900 transition-colors duration-300 gap-2"
                            >
                                <WhatsAppIcon />
                                Consultar servicio
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className="text-center mt-16"
        >
            <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium 
                    text-white dark:text-gray-900 bg-accent-red dark:bg-accent-yellow rounded-lg 
                    shadow-lg hover:opacity-90 transition-all duration-300 gap-2 hover:gap-3"
            >
                Ver todos los servicios
                <span aria-hidden="true" className="text-lg">→</span>
            </Link>
        </motion.div>
    </div>
</section>





          {/* Se acabo la promo, porque duro mucho */}
          {/* <PromoPopup/> */}
          <PriceCalculator/>


          {/* Projects Section */}
          <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6}}
                  viewport={{once: true}}
                  className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Proyectos Destacados
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Una selección de proyectos que demuestran mi experiencia en diseño y desarrollo.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: index * 0.1}}
                        viewport={{once: true}}
                        whileHover={{y: -5}}
                        className="group"
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg
            dark:shadow-gray-900/50 transition-all duration-300
            hover:shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="aspect-video relative overflow-hidden">
                          <div className="absolute inset-0 bg-accent-red/10 dark:bg-accent-yellow/10
               group-hover:bg-transparent transition-all duration-300 z-10"/>
                          <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="object-cover w-full h-full transform transition-transform
               duration-300 group-hover:scale-105"
                              priority={index < 3}
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

              {/* CTA Button */}
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.2}}
                  viewport={{once: true}}
                  className="text-center"
              >
                <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Link
                      href="/paginas-web-ecuador"
                      className="group inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-accent-red dark:text-accent-yellow
            px-8 py-4 rounded-xl font-medium border-2 border-accent-red dark:border-accent-yellow
            hover:bg-accent-red/5 dark:hover:bg-accent-yellow/5 transition-all duration-300"
                  >
                    <span>Más información sobre desarrollo web</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Descubre cómo podemos crear tu próximo proyecto web
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="py-10 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-3xl mx-auto px-6">
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6}}
                  viewport={{once: true}}
                  className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hablemos de tu proyecto
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  ¿Tienes un proyecto en mente? Cuéntame más sobre él y veamos cómo puedo ayudarte, o envíanos un correo
                  al info@torisoftt.com
                </p>
              </motion.div>

              <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: 0.2}}
                  viewport={{once: true}}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8"
              >
                <ContactForm/>
              </motion.div>
            </div>
          </section>

          <AboutMe/>

        </main>
        <Footer/>
      </>
  );
}