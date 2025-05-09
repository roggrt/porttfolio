// 'use client';
//
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//     Code,
//     Globe,
//     Search, Monitor, ShoppingCart,
//     Palette,
//     ArrowRight,
//     ExternalLink,
// } from 'lucide-react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
// import PriceCalculator from '@/components/PriceCalculator';
// import AboutMe from '@/components/AboutMe';
// import ContactForm from '@/components/ContactForm';
// import HeroSection from '@/components/HeroSection';
// import IdeaSection from "@/components/IdeaSection";
// import ProjectsSection from "@/components/ProjectSection";
// import TestimonialsSection from "@/components/Testimonials"; // Import the new hero component
//
// const projects = [
//     {
//         title: "Dashboard Analytics Pro",
//         description: "Panel de control avanzado para análisis de datos empresariales con múltiples vistas y gráficos interactivos",
//         image: "/projects/dashboard-analytics.jpg", // adminlte hero-pic
//         tags: ["Angular", "TypeScript", "Chart.js", "Material UI"],
//         category: "Dashboard"
//     },
//     {
//         title: "Sistema de Gestión Empresarial",
//         description: "Plataforma integral para la gestión de recursos, reportes y analíticas en tiempo real",
//         image: "/projects/business-dashboard.jpg", // architectui angular
//         tags: ["React", "Node.js", "MongoDB", "Redux"],
//         category: "Aplicación Web"
//     },
//     {
//         title: "E-commerce Calzado",
//         description: "Tienda en línea especializada en calzado con sistema de inventario y pasarela de pagos",
//         image: "/projects/shoe-store.jpg", // shoe-store-yoast
//         tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
//         category: "E-commerce"
//     },
//     {
//         title: "Portfolio Artístico",
//         description: "Galería digital para artistas con diseño minimalista y optimización SEO",
//         image: "/projects/artist-portfolio.jpg", // artist-portfolio
//         tags: ["WordPress", "CSS3", "JavaScript", "SEO"],
//         category: "Portfolio"
//     },
//     {
//         title: "App Móvil Financiera",
//         description: "Aplicación móvil para educación financiera y seguimiento de inversiones",
//         image: "/projects/finance-app.jpg", // flutter
//         tags: ["Flutter", "Dart", "Firebase", "REST API"],
//         category: "App Móvil"
//     },
//     {
//         title: "Landing Page Legal",
//         description: "Página de aterrizaje para despacho de abogados con sistema de citas",
//         image: "/projects/legal-landing.jpg", // hubspot
//         tags: ["HTML5", "CSS3", "JavaScript", "API Integration"],
//         category: "Landing Page"
//     }
// ];
//
// const servicesList = [
//     {
//         title: "Desarrollo WordPress",
//         description: "Sitios web profesionales y personalizados con WordPress, optimizados para rendimiento y SEO.",
//         icon: Monitor,
//         image: '/ilustraciones/create-illustrations-for-wordpress-development-fea__30685.png',
//         tags: ["WordPress", "PHP", "WooCommerce", "Elementor"],
//         whatsappMessage: `¡Hola! Me interesa el servicio de desarrollo WordPress. Me gustaría obtener más información sobre precios y características.`,
//         delay: 0.1
//     },
//     {
//         title: "Desarrollo Web",
//         description: "Aplicaciones web modernas y escalables utilizando las últimas tecnologías y mejores prácticas.",
//         icon: Code,
//         image: '/ilustraciones/create-an-image-of-an-asian-female-developer-colla__30686.png',
//         tags: ["React", "Next.js", "Node.js", "TypeScript"],
//         whatsappMessage: `¡Hola! Me gustaría consultar sobre el servicio de desarrollo web personalizado. Necesito más detalles sobre el proceso y costos.`,
//         delay: 0.2
//     },
//     {
//         title: "Desarrollo para E-Commerce",
//         description: "Tiendas online completas con gestión de productos, pagos y características avanzadas.",
//         icon: ShoppingCart,
//         image: '/ilustraciones/design-an-illustration-of-a-black-male-developer-s__30687.png',
//         tags: ["WooCommerce", "Shopify", "PrestaShop", "Pagos"],
//         whatsappMessage: `¡Hola! Me interesa crear una tienda online. ¿Podrían brindarme información sobre las opciones disponibles y precios?`,
//         delay: 0.3
//     },
//     {
//         title: "Diseño de Interfaces UI/UX",
//         description: "Diseño profesional de interfaces y experiencias de usuario centradas en conversión.",
//         icon: Palette,
//         image: '/ilustraciones/a-professional-setting-with-three-asian-women-and-__30689.png',
//         tags: ["Figma", "Adobe XD", "UI", "UX"],
//         whatsappMessage: `¡Hola! Me interesa el servicio de diseño UI/UX. ¿Podrían mostrarme algunos trabajos previos y costos aproximados?`,
//         delay: 0.4
//     }
// ];
//
// const WhatsAppIcon = () => (
//     <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//     </svg>
// );
//
// export default function Page() {
//     return (
//         <>
//             <Navbar />
//
//             <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
//
//                 {/* New Hero Section Component */}
//                 <HeroSection />
//                 <IdeaSection />
//
//                 <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.div
//                             initial={{opacity: 0, y: 20}}
//                             whileInView={{opacity: 1, y: 0}}
//                             transition={{duration: 0.6}}
//                             viewport={{once: true}}
//                             className="text-center mb-16"
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                                 Servicios Profesionales
//                             </h2>
//                             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                                 Soluciones digitales completas y páginas web en Ecuador y Latinoamérica personalizadas para hacer crecer tu negocio online.
//                                 Desde el diseño hasta la implementación, garantizando calidad y resultados.
//                             </p>
//                         </motion.div>
//
//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {servicesList.map((service, index) => (
//                                 <motion.div
//                                     key={service.title}
//                                     initial={{opacity: 0, y: 20}}
//                                     whileInView={{opacity: 1, y: 0}}
//                                     transition={{duration: 0.6, delay: service.delay}}
//                                     viewport={{once: true}}
//                                     whileHover={{y: -5}}
//                                 >
//                                     <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900/50 h-full flex flex-col">
//                                         <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
//                                             <Image
//                                                 src={service.image}
//                                                 alt={service.title}
//                                                 fill
//                                                 className="object-cover transition-transform duration-300 hover:scale-110"
//                                             />
//                                         </div>
//                                         <div className="flex items-center gap-3 mb-4">
//                                             <service.icon className="w-8 h-8 text-accent-red dark:text-accent-yellow"/>
//                                             <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                                 {service.title}
//                                             </h3>
//                                         </div>
//                                         <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
//                                             {service.description}
//                                         </p>
//                                         <div className="space-y-4">
//                                             <div className="flex flex-wrap gap-2">
//                                                 {service.tags.map((tag) => (
//                                                     <span
//                                                         key={tag}
//                                                         className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow"
//                                                     >
//                             {tag}
//                           </span>
//                                                 ))}
//                                             </div>
//                                             <a
//                                                 href={`https://wa.me/593984264910?text=${encodeURIComponent(service.whatsappMessage)}`}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium
//                             text-accent-red dark:text-accent-yellow border-2 border-accent-red dark:border-accent-yellow
//                             rounded-lg hover:bg-accent-red hover:dark:bg-accent-yellow hover:text-white
//                             dark:hover:text-gray-900 transition-colors duration-300 gap-2"
//                                             >
//                                                 <WhatsAppIcon />
//                                                 Consultar servicio
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//
//                         <motion.div
//                             initial={{opacity: 0, y: 20}}
//                             whileInView={{opacity: 1, y: 0}}
//                             transition={{delay: 0.3}}
//                             className="text-center mt-16"
//                         >
//                             <Link
//                                 href="/products"
//                                 className="inline-flex items-center justify-center px-8 py-3 text-base font-medium
//                     text-white dark:text-gray-900 bg-accent-red dark:bg-accent-yellow rounded-lg
//                     shadow-lg hover:opacity-90 transition-all duration-300 gap-2 hover:gap-3"
//                             >
//                                 Ver todos los servicios
//                                 <span aria-hidden="true" className="text-lg">→</span>
//                             </Link>
//                         </motion.div>
//                     </div>
//                 </section>
//
//                 <PriceCalculator/>
//
//                 <ProjectsSection />
//
//                 <TestimonialsSection />
//                 {/* Contact Section */}
//                 <section id="contacto" className="py-10 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-3xl mx-auto px-6">
//                         <motion.div
//                             initial={{opacity: 0, y: 20}}
//                             whileInView={{opacity: 1, y: 0}}
//                             transition={{duration: 0.6}}
//                             viewport={{once: true}}
//                             className="text-center mb-16"
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                                 Hablemos de tu proyecto
//                             </h2>
//                             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                                 ¿Tienes un proyecto en mente? Cuéntame más sobre él y veamos cómo puedo ayudarte, o envíanos un correo
//                                 al info@torisoftt.com
//                             </p>
//                         </motion.div>
//
//                         <motion.div
//                             initial={{opacity: 0, y: 20}}
//                             whileInView={{opacity: 1, y: 0}}
//                             transition={{duration: 0.6, delay: 0.2}}
//                             viewport={{once: true}}
//                             className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8"
//                         >
//                             <ContactForm/>
//                         </motion.div>
//                     </div>
//                 </section>
//
//                 <AboutMe/>
//
//             </main>
//             <Footer/>
//         </>
//     );
// }


'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
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
import HeroSection from '@/components/HeroSection';
import IdeaSection from "@/components/IdeaSection";
import ProjectsSection from "@/components/ProjectSection";
import TestimonialsSection from "@/components/Testimonials";
import WhyUsSection from '@/components/WhyUsSection';

const projects = [
    {
        title: "Dashboard Analytics Pro",
        description: "Panel de control avanzado para análisis de datos empresariales con múltiples vistas y gráficos interactivos",
        image: "/projects/dashboard-analytics.jpg",
        tags: ["Angular", "TypeScript", "Chart.js", "Material UI"],
        category: "Dashboard"
    },
    {
        title: "Sistema de Gestión Empresarial",
        description: "Plataforma integral para la gestión de recursos, reportes y analíticas en tiempo real",
        image: "/projects/business-dashboard.jpg",
        tags: ["React", "Node.js", "MongoDB", "Redux"],
        category: "Aplicación Web"
    },
    {
        title: "E-commerce Calzado",
        description: "Tienda en línea especializada en calzado con sistema de inventario y pasarela de pagos",
        image: "/projects/shoe-store.jpg",
        tags: ["WordPress", "WooCommerce", "PHP", "MySQL"],
        category: "E-commerce"
    },
    {
        title: "Portfolio Artístico",
        description: "Galería digital para artistas con diseño minimalista y optimización SEO",
        image: "/projects/artist-portfolio.jpg",
        tags: ["WordPress", "CSS3", "JavaScript", "SEO"],
        category: "Portfolio"
    },
    {
        title: "App Móvil Financiera",
        description: "Aplicación móvil para educación financiera y seguimiento de inversiones",
        image: "/projects/finance-app.jpg",
        tags: ["Flutter", "Dart", "Firebase", "REST API"],
        category: "App Móvil"
    },
    {
        title: "Landing Page Legal",
        description: "Página de aterrizaje para despacho de abogados con sistema de citas",
        image: "/projects/legal-landing.jpg",
        tags: ["HTML5", "CSS3", "JavaScript", "API Integration"],
        category: "Landing Page"
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
    // Función para seguimiento de eventos con navegación retrasada
    const trackConversion = (url: string, eventType: string, eventLabel: string, category: string = 'Conversion') => {
        // Verificar que estamos en el navegador y gtag está disponible
        if (typeof window !== 'undefined' && window.gtag) {
            const callback = function() {
                if (typeof url === 'string') {
                    window.open(url, '_blank');
                }
            };

            window.gtag('event', eventType, {
                'event_category': category,
                'event_label': eventLabel,
                'send_to': 'G-8RTG6CG3GF',
                'event_callback': callback,
                'event_timeout': 2000
            });

            // Fallback si el callback no se ejecuta
            setTimeout(callback, 2000);
        } else {
            // Si gtag no está disponible, simplemente abrir la URL
            if (typeof url === 'string') {
                window.open(url, '_blank');
            }
        }
        return false;
    };

    // Función específica para seguimiento de WhatsApp
    const trackWhatsAppService = (service: any) => {
        const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(service.whatsappMessage)}`;
        return trackConversion(
            whatsappUrl,
            'whatsapp_service_inquiry',
            `Servicio: ${service.title}`,
            'Lead'
        );
    };

    // Registrar vista de página
    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            // Registrar la vista de página como evento
            window.gtag('event', 'page_view', {
                page_title: 'Home Page',
                page_location: window.location.href,
                page_path: window.location.pathname,
                send_to: 'G-8RTG6CG3GF'
            });
        }
    }, []);

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                {/* Hero Section Component */}
                <HeroSection />
                <IdeaSection />

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
                                                {service.tags.map((tag: string) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs px-2 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
<a
                                            href="#"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            return trackWhatsAppService(service);
                                        }}
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
                                onClick={() => {
                                    if (typeof window !== 'undefined' && window.gtag) {
                                        window.gtag('event', 'view_all_services', {
                                            'event_category': 'Navigation',
                                            'event_label': 'Ver todos los servicios',
                                            'send_to': 'G-8RTG6CG3GF'
                                        });
                                    }
                                }}
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

                <PriceCalculator/>

                <ProjectsSection />

                <WhyUsSection />

                <TestimonialsSection />

                {/* Contact Section */}
                <section id="contacto" className="py-10 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-3xl mx-auto px-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            viewport={{once: true}}
                            className="text-center mb-16"
                            onViewportEnter={() => {
                                if (typeof window !== 'undefined' && window.gtag) {
                                    window.gtag('event', 'view_contact_section', {
                                        'event_category': 'Engagement',
                                        'event_label': 'Vista sección contacto',
                                        'send_to': 'G-8RTG6CG3GF'
                                    });
                                }
                            }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                Hablemos de tu proyecto
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                ¿Tienes un proyecto en mente? Cuéntame más sobre él y veamos cómo puedo ayudarte, o envíanos un correo
                                al <a
                                href="mailto:info@torisoftt.com"
                                onClick={() => {
                                    if (typeof window !== 'undefined' && window.gtag) {
                                        window.gtag('event', 'email_click', {
                                            'event_category': 'Lead',
                                            'event_label': 'Click en email',
                                            'send_to': 'G-8RTG6CG3GF'
                                        });
                                    }
                                }}
                                className="text-accent-red dark:text-accent-yellow hover:underline"
                            >
                                info@torisoftt.com
                            </a>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            viewport={{once: true}}
                            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8"
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </section>

                <AboutMe/>

            </main>
            <Footer/>

            {/* Script para seguimiento global */}
            <Script id="gtag-tracking-helper" strategy="afterInteractive">
                {`
                    // Función para enviar eventos de conversión con navegación retrasada
                    function gtagSendEvent(url, eventType, eventLabel, category = 'Conversion') {
                        var callback = function() {
                            if (typeof url === 'string') {
                                window.open(url, '_blank');
                            }
                        };
                        
                        gtag('event', eventType, {
                            'event_category': category,
                            'event_label': eventLabel,
                            'send_to': 'G-8RTG6CG3GF',
                            'event_callback': callback,
                            'event_timeout': 2000
                        });
                        
                        // Fallback
                        setTimeout(callback, 2000);
                        
                        return false;
                    }

                    // Escuchar eventos de envío de formulario
                    document.addEventListener('DOMContentLoaded', function() {
                        const contactForm = document.getElementById('contactForm');
                        if (contactForm) {
                            contactForm.addEventListener('submit', function() {
                                gtag('event', 'form_submission', {
                                    'event_category': 'Lead',
                                    'event_label': 'Formulario de contacto',
                                    'send_to': 'G-8RTG6CG3GF'
                                });
                            });
                        }
                    });
                `}
            </Script>
        </>
    );
}