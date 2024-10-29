'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Search,
    BarChart,
    Globe,
    Target,
    TrendingUp,
    CheckCircle,
    Settings,
    Users,
    Building,
    ArrowUp,
    Award,
    BookOpen,
    Link,
    Share2,
    FileText,
    MessageCircle,
    Map,
    ChevronRight
} from 'lucide-react';


import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const seoServices = [
    {
        icon: Target,
        title: "SEO Estratégico",
        description: "Estrategias personalizadas para dominar los resultados de búsqueda en tu mercado."
    },
    {
        icon: BarChart,
        title: "Análisis Competitivo",
        description: "Estudio detallado de tu competencia para superar su posicionamiento."
    },
    {
        icon: FileText,
        title: "Content Marketing",
        description: "Contenido optimizado que conecta con tu audiencia y mejora tu visibilidad."
    },
    {
        icon: Link,
        title: "Link Building",
        description: "Construcción estratégica de enlaces de alta autoridad y relevancia."
    }
];

const linkBuildingTypes = [
    {
        title: "Guest Posting",
        icon: BookOpen,
        description: "Publicación de contenido en sitios de autoridad ecuatorianos",
        benefits: [
            "Exposición a nueva audiencia",
            "Enlaces naturales y relevantes",
            "Construcción de autoridad"
        ]
    },
    {
        title: "Directorios Locales",
        icon: Building,
        description: "Presencia en directorios empresariales ecuatorianos",
        platforms: [
            "Páginas Amarillas Ecuador",
            "Directorios de Cámaras de Comercio",
            "Portales empresariales locales"
        ]
    },
    {
        title: "Redes de Influencers",
        icon: Users,
        description: "Colaboraciones con influencers y expertos ecuatorianos",
        approaches: [
            "Menciones en redes sociales",
            "Reviews de productos/servicios",
            "Colaboraciones en contenido"
        ]
    },
    {
        title: "PR Digital",
        icon: Share2,
        description: "Presencia en medios digitales ecuatorianos",
        channels: [
            "Portales de noticias",
            "Blogs especializados",
            "Medios digitales locales"
        ]
    }
];

const marketStats = [
    {
        metric: "92%",
        description: "de usuarios ecuatorianos inician su búsqueda en Google"
    },
    {
        metric: "78%",
        description: "visitan el negocio dentro de las 24 horas tras la búsqueda local"
    },
    {
        metric: "65%",
        description: "de compradores investigan online antes de comprar"
    },
    {
        metric: "3.5x",
        description: "más tráfico para sitios en las primeras posiciones"
    }
];

const partners = "/services/programa-de-partners"

export default function SEOPage() {
    const fadeInUpVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Hero Section */}
                <section className="pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-7xl mx-auto px-4"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                    Posicionamiento SEO
                                    <span className="block text-accent-red dark:text-accent-yellow">
                                        en Ecuador
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                    Aumenta tu visibilidad online y alcanza a tu audiencia ideal con
                                    estrategias SEO adaptadas al mercado nacional e internacional.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                                    dark:text-gray-900 rounded-xl font-medium inline-flex items-center gap-2"
                                >
                                    <Search className="w-5 h-5" />
                                    Análisis Gratuito
                                </motion.button>
                            </div>
                            <div className="flex-1 relative">
                                <Image
                                    src="/seo-analytics.png"
                                    alt="SEO Analytics"
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-4 gap-8">
                            {marketStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <h3 className="text-4xl font-bold text-accent-red dark:text-accent-yellow mb-2">
                                        {stat.metric}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {stat.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Servicios SEO
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Estrategias personalizadas para potenciar tu presencia digital en Ecuador.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {seoServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <service.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Link Building Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Estrategia de Link Building
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Construcción estratégica de enlaces para fortalecer tu autoridad digital.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {linkBuildingTypes.map((type, index) => (
                                <motion.div
                                    key={type.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <type.icon className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {type.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {type.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {(type.benefits || type.platforms || type.approaches || type.channels).map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Proceso SEO
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Metodología probada para alcanzar resultados sostenibles.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                {
                                    step: "01",
                                    title: "Auditoría SEO",
                                    description: "Análisis completo de tu sitio y presencia digital.",
                                    icon: Search
                                },
                                {
                                    step: "02",
                                    title: "Optimización Técnica",
                                    description: "Mejoras en la estructura y rendimiento del sitio.",
                                    icon: Settings
                                },
                                {
                                    step: "03",
                                    title: "Estrategia de Contenidos",
                                    description: "Creación de contenido optimizado y relevante.",
                                    icon: FileText
                                },
                                {
                                    step: "04",
                                    title: "Link Building",
                                    description: "Construcción de autoridad mediante enlaces de calidad.",
                                    icon: Link
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <div className="text-4xl font-bold text-accent-red dark:text-accent-yellow">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {step.description}
                                        </p>
                                    </div>
                                    <step.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow ml-auto" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

               






{/* Local SEO Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                SEO Local en Ecuador
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Domina las búsquedas locales y conecta con clientes en tu área.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Map,
                                    title: "Presencia Local",
                                    description: "Optimización para Google My Business y directorios locales ecuatorianos",
                                    features: [
                                        "Perfil GMB optimizado",
                                        "Gestión de reseñas",
                                        "Citaciones locales"
                                    ]
                                },
                                {
                                    icon: Target,
                                    title: "Keywords Locales",
                                    description: "Investigación y optimización para términos de búsqueda específicos de Ecuador",
                                    features: [
                                        "Análisis de tendencias locales",
                                        "Términos regionales",
                                        "Intención de búsqueda local"
                                    ]
                                },
                                {
                                    icon: Users,
                                    title: "Contenido Localizado",
                                    description: "Contenido relevante para la audiencia ecuatoriana",
                                    features: [
                                        "Blog posts localizados",
                                        "Páginas de servicios por ciudad",
                                        "Eventos y noticias locales"
                                    ]
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <item.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {item.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {item.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Beneficios del SEO
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Ventajas de invertir en una estrategia SEO sólida.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: "Tráfico Orgánico",
                                    description: "Incrementa las visitas cualificadas a tu sitio web de forma sostenible."
                                },
                                {
                                    icon: Target,
                                    title: "ROI a Largo Plazo",
                                    description: "Inversión duradera que genera resultados consistentes en el tiempo."
                                },
                                {
                                    icon: Award,
                                    title: "Autoridad de Marca",
                                    description: "Fortalece la credibilidad y reconocimiento de tu marca en línea."
                                },
                                {
                                    icon: Users,
                                    title: "Audiencia Cualificada",
                                    description: "Alcanza usuarios con intención real de compra o contratación."
                                },
                                {
                                    icon: BarChart,
                                    title: "Datos Medibles",
                                    description: "Seguimiento detallado del rendimiento y resultados obtenidos."
                                },
                                {
                                    icon: Globe,
                                    title: "Ventaja Competitiva",
                                    description: "Supera a tu competencia en los resultados de búsqueda."
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
                                >
                                    <benefit.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>



{/* Agency Partnership Section */}
<section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-accent-red dark:text-accent-yellow text-sm font-semibold uppercase tracking-wider">
                                Servicios para Agencias
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white mt-2">
                                SEO White Label
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Potencia tu agencia con nuestros servicios SEO white label. Expande tu oferta sin aumentar tu equipo.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Para Agencias Digitales
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Servicios SEO completos bajo tu marca",
                                        "Informes personalizables con tu branding",
                                        "Soporte prioritario dedicado",
                                        "Precios especiales para agencias",
                                        "Gestión de múltiples proyectos",
                                        "Dashboard exclusivo para agencias"
                                    ].map((benefit, index) => (
                                        <li 
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-6 h-6 text-accent-red dark:text-accent-yellow flex-shrink-0 mt-1" />
                                            <span className="text-gray-600 dark:text-gray-400">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Servicios Disponibles
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        {
                                            title: "Auditorías SEO",
                                            description: "Análisis completos white label para tus clientes"
                                        },
                                        {
                                            title: "SEO Técnico",
                                            description: "Optimizaciones técnicas y resolución de problemas"
                                        },
                                        {
                                            title: "Contenido SEO",
                                            description: "Creación y optimización de contenido estratégico"
                                        },
                                        {
                                            title: "Link Building",
                                            description: "Estrategias de construcción de enlaces personalizada"
                                        },
                                        {
                                            title: "SEO Local",
                                            description: "Optimización para negocios locales"
                                        },
                                        {
                                            title: "Reportes Personalizados",
                                            description: "Informes detallados con tu marca"
                                        }
                                    ].map((service, index) => (
                                        <div 
                                            key={index}
                                            className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0"
                                        >
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                {service.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-accent-red to-accent-red/80 dark:from-accent-yellow 
                            dark:to-accent-yellow/80 p-8 rounded-2xl text-white dark:text-gray-900"
                        >
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold mb-4">
                                    ¿Listo para potenciar tu agencia?
                                </h3>
                                <p className="mb-6 opacity-90">
                                    Únete a nuestro programa de partners y empieza a ofrecer servicios SEO profesionales 
                                    a tus clientes sin preocupaciones.
                                </p>




                              
    <motion.a
     href={partners}
                                        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white dark:bg-gray-900 text-accent-red dark:text-accent-yellow 
        px-8 py-3 rounded-xl font-medium inline-flex items-center gap-2"
    >
        <MessageCircle className="w-5 h-5" />
        Programa de Partners
    </motion.a>




                            </div>
                        </motion.div>
                    </div>
                </section>







    













                {/* FAQ Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Preguntas Frecuentes
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Respuestas a las dudas más comunes sobre SEO.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {[
                                {
                                    question: "¿Cuánto tiempo toma ver resultados con SEO?",
                                    answer: "El SEO es una estrategia a medio-largo plazo. Normalmente, los primeros resultados comienzan a verse entre 3-6 meses, aunque esto puede variar según la competitividad del sector y el estado actual del sitio."
                                },
                                {
                                    question: "¿Por qué es importante el SEO local en Ecuador?",
                                    answer: "El SEO local te permite conectar con clientes en tu área geográfica cuando buscan tus productos o servicios. En Ecuador, donde el comercio local es fundamental, esto puede marcar la diferencia en tu negocio."
                                },
                                {
                                    question: "¿Qué hace diferente al SEO en Ecuador?",
                                    answer: "El SEO en Ecuador requiere entender las particularidades del mercado local, el comportamiento de búsqueda de los usuarios ecuatorianos y optimizar para términos y expresiones específicas del país."
                                },
                                {
                                    question: "¿Cómo se mide el éxito en SEO?",
                                    answer: "Medimos el éxito a través de múltiples métricas: posiciones en buscadores, tráfico orgánico, tasa de conversión, visibilidad de marca y ROI, entre otros indicadores clave."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUpVariants}
                                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto px-4 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            Mejora tu Visibilidad Online
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Descubre cómo podemos ayudarte a alcanzar tus objetivos de posicionamiento web.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                            dark:text-gray-900 rounded-xl font-medium inline-flex items-center gap-2"
                        >
                            <Search className="w-5 h-5" />
                            Solicitar Auditoría SEO
                        </motion.button>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}