'use client'

import { useState } from 'react'
import {
    Globe,
    Lock,
    ShoppingCart,
    Smartphone,
    LineChart,
    Shield,
    MessageSquare,
    Headphones,
    Clock,
    DollarSign,
    CheckCircle,
    Phone,
    Mail,
    Award, ArrowRight,
    Users,
    Heart
} from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import FAQEcuador from '@/components/FAQ-ecuador'

import Image from 'next/image'

interface Service {
    icon: any;
    title: string;
    description: string;
    features: string[];
}

interface FAQ {
    question: string;
    answer: string;
}

const services: Service[] = [
    {
        icon: Globe,
        title: 'Sitios Web Corporativos',
        description: 'Páginas web profesionales que representan la identidad de tu empresa.',
        features: [
            'Diseño personalizado y moderno',
            'Optimización para móviles',
            'Integración con redes sociales',
            'Panel de administración fácil de usar',
            'Hosting profesional incluido'
        ]
    },
    {
        icon: ShoppingCart,
        title: 'Tiendas en Línea',
        description: 'Plataformas eCommerce completas para vender tus productos.',
        features: [
            'Catálogo de productos',
            'Carrito de compras',
            'Pasarelas de pago ecuatorianas',
            'Gestión de inventario',
            'Seguimiento de pedidos'
        ]
    },
    {
        icon: Smartphone,
        title: 'Aplicaciones Web',
        description: 'Sistemas web personalizados para tu negocio.',
        features: [
            'Desarrollo a medida',
            'Interfaz intuitiva',
            'Integración con APIs',
            'Escalabilidad garantizada',
            'Soporte técnico continuo'
        ]
    }
]

const faqs: FAQ[] = [
    {
        question: '¿Cuánto cuesta crear una página web en Ecuador?',
        answer: 'El costo varía según las necesidades específicas de cada proyecto. Una página web informativa básica puede costar desde $400 en promedio en varias agencias a nivel nacional, mientras que un eCommerce completo puede partir desde $1500. Ofrecemos presupuestos personalizados gratuitos para ajustarnos a tu inversión.'
    },
    {
        question: '¿Cuánto tiempo toma desarrollar mi sitio web?',
        answer: 'El tiempo de desarrollo promedio es de 3 a 6 semanas, dependiendo de la complejidad del proyecto. Sitios web básicos pueden estar listos en 2-3 semanas, mientras que proyectos más complejos como eCommerce pueden tomar 6-8 semanas.'
    },
    {
        question: '¿Incluyen dominio y hosting?',
        answer: 'Sí, todos nuestros paquetes incluyen dominio .com o .ec y hosting profesional por el primer año. También ofrecemos mantenimiento y soporte técnico continuo para garantizar el óptimo funcionamiento de tu sitio.'
    },
    {
        question: '¿Hacen páginas web autoadministrables?',
        answer: 'Sí, desarrollamos sitios web con sistemas de gestión de contenido (CMS) como WordPress, que te permiten actualizar fácilmente el contenido de tu página sin conocimientos técnicos.'
    },
    {
        question: '¿Optimizan las páginas web para SEO?',
        answer: 'Absolutamente. Todos nuestros sitios web se desarrollan siguiendo las mejores prácticas de SEO para mejorar tu posicionamiento en Google. Incluimos optimización de velocidad, estructura de URLs, meta tags y más.'
    },
    {
        question: '¿Por qué hay tanta diferencia de precios en el mercado ecuatoriano?',
        answer: 'Encontrarás páginas web desde $100 hasta miles de dólares. Las ofertas muy económicas generalmente utilizan plantillas prediseñadas con personalizaciones mínimas, pueden tener problemas de rendimiento, seguridad vulnerable y código no optimizado. Además, suelen carecer de soporte post-lanzamiento y documentación técnica. Nuestros proyectos son desarrollados desde cero, siguiendo estándares de la industria, con código limpio y escalable, pensando en el crecimiento futuro de tu negocio.'
    },
    {
        question: '¿Qué riesgos implica contratar servicios web muy económicos?',
        answer: 'Los servicios web extremadamente baratos suelen presentar varios riesgos: sitios web vulnerables a hackeos por falta de actualizaciones de seguridad, pérdida de información por no contar con backups regulares, diseños no adaptables a móviles, carga lenta que afecta el SEO, y abandono del proyecto por falta de soporte técnico. Además, muchos utilizan hostings gratuitos o de baja calidad que pueden tener caídas frecuentes.'
    },
    {
        question: '¿Por qué debería invertir en un sitio web profesional?',
        answer: 'Un sitio web profesional es una inversión en la credibilidad y crecimiento de tu negocio. Ofrecemos soluciones escalables que crecen con tu empresa, código limpio y documentado para futuras mejoras, optimización SEO profesional, servidores de alta disponibilidad, copias de seguridad automáticas, y un equipo dedicado de soporte. Tu sitio web es la primera impresión de tu negocio en internet - una buena impresión genera confianza y convierte visitantes en clientes.'
    },
    {
        question: '¿Ofrecen garantía por sus servicios?',
        answer: 'Sí, todos nuestros proyectos incluyen garantía de funcionamiento por 6 meses. Además, documentamos todo el proceso de desarrollo, entregamos manuales de uso, y ofrecemos capacitación para que puedas administrar tu sitio. Trabajamos con contratos claros que especifican todos los entregables y mantenemos comunicación constante durante todo el proyecto.'
    },
    {
        question: '¿Puedo ver ejemplos de sus trabajos anteriores?',
        answer: 'Por supuesto. Contamos con un portafolio extenso de proyectos exitosos en diversos sectores. Podemos mostrarte casos de éxito específicos en tu industria y ponerte en contacto con clientes actuales que pueden compartir su experiencia trabajando con nosotros.'
    },
    {
        question: '¿Qué sucede si necesito modificaciones después del lanzamiento?',
        answer: 'Desarrollamos todos nuestros sitios de manera modular y escalable, lo que facilita futuras modificaciones y ampliaciones. Ofrecemos paquetes de mantenimiento mensual que incluyen actualizaciones de contenido, mejoras de seguridad y optimizaciones de rendimiento. También puedes solicitar modificaciones puntuales según tus necesidades.'
    }
]

const benefits = [
    {
        icon: Clock,
        title: 'Entrega Puntual',
        description: 'Cumplimos con los plazos establecidos'
    },
    {
        icon: Shield,
        title: 'Seguridad Garantizada',
        description: 'Protección contra vulnerabilidades web'
    },
    {
        icon: LineChart,
        title: 'Optimización SEO',
        description: 'Mejor posicionamiento en Google'
    },
    {
        icon: DollarSign,
        title: 'Precios Competitivos',
        description: 'La mejor relación calidad-precio'
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

export default function WebDevelopmentPage() {
    const [activeTab, setActiveTab] = useState(0)
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

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
                                Desarrollo de Sitios Web en Ecuador
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600 dark:text-gray-400 mb-12"
                                variants={itemVariants}
                            >
                                Creamos sitios web modernos y efectivos que impulsan tu negocio.
                                Expertos en desarrollo web en Cuenca, Ecuador con más de 10 años de experiencia.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row justify-center gap-4"
                                variants={itemVariants}
                            >
                                <motion.a
                                    href="#contacto"
                                    className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Cotizar Mi Proyecto
                                </motion.a>
                                <motion.a
                                    href="#servicios"
                                    className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Ver Servicios
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                                        variants={itemVariants}
                                    >
                                        <Icon className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="py-24 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image Column */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-full blur-2xl" />
                                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-full blur-2xl" />
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/torisoftt-desarrollo-paginas-web.jpg"
                                        alt="Equipo de desarrollo web Torisoftt"
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-[500px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center gap-4 text-white">
                                            <div className="p-2 bg-accent-red dark:bg-accent-yellow rounded-lg">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">Experiencia Comprobada</p>
                                                <p className="text-sm opacity-90">+10 años en desarrollo web</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Column */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10">
                                    <Users className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                                    <span className="text-sm font-medium text-accent-red dark:text-accent-yellow">
            Nuestro Equipo
          </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                    Un Equipo con Experiencia en las Mejores Empresas del Ecuador
                                </h2>

                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Somos un grupo de profesionales apasionados que hemos trabajado en las principales
                                    consultoras, agencias de marketing y estudios de diseño del país. Nuestra experiencia
                                    en empresas líderes nos ha dado una perspectiva única sobre cómo crear soluciones
                                    web que verdaderamente impactan.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-red/10 dark:bg-accent-yellow/10">
                                            <Shield className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                Compromiso Total
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                Nos comprometemos con cada proyecto como si fuera nuestro propio negocio,
                                                garantizando confidencialidad y dedicación exclusiva.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-red/10 dark:bg-accent-yellow/10">
                                            <Heart className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                Lo Que Nos Hace Diferentes
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                No solo creamos sitios web, construimos relaciones duraderas con
                                                nuestros clientes, ofreciendo soporte continuo y asesoría personalizada.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-accent-red dark:bg-accent-yellow rounded-lg">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                Nuestro Compromiso Contigo
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="flex items-start gap-3">
                                                    <Lock className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                                    <span className="text-gray-600 dark:text-gray-400">Confidencialidad total</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <MessageSquare className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                                    <span className="text-gray-600 dark:text-gray-400">Comunicación clara</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Clock className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                                    <span className="text-gray-600 dark:text-gray-400">Cumplimiento de plazos</span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Headphones className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                                    <span className="text-gray-600 dark:text-gray-400">Soporte técnico garantizado</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>



                {/* eCommerce Section */}
                <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            className="text-center max-w-3xl mx-auto mb-16"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                                variants={itemVariants}
                            >
                                eCommerce en Ecuador
                            </motion.h2>
                            <motion.h3
                                className="text-xl md:text-2xl font-semibold mb-4 text-accent-red dark:text-accent-yellow"
                                variants={itemVariants}
                            >
                                Expertos en eCommerce en Cuenca
                            </motion.h3>
                            <motion.p
                                className="text-lg text-gray-600 dark:text-gray-400"
                                variants={itemVariants}
                            >
                                Desarrollamos plataformas de comercio electrónico adaptadas al mercado ecuatoriano,
                                integrando pasarelas de pago locales y optimizando la experiencia de compra para el
                                consumidor nacional.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-red/10 dark:bg-accent-yellow/10 mb-6">
                                    <DollarSign className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                </div>
                                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    Pasarelas de Pago Locales
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Integración con <a href="https://www.payphone.app/" target="_blank" rel="noopener noreferrer" className="text-accent-red dark:text-accent-yellow hover:underline">PayPhone</a></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Soporte para <a href="https://www.kushkipagos.com/" target="_blank" rel="noopener noreferrer" className="text-accent-red dark:text-accent-yellow hover:underline">Kushki</a></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span><a href="https://www.datafast.com.ec/" target="_blank" rel="noopener noreferrer" className="text-accent-red dark:text-accent-yellow hover:underline">Datafast</a> y otras pasarelas nacionales</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-red/10 dark:bg-accent-yellow/10 mb-6">
                                    <ShoppingCart className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                </div>
                                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    Optimización para Ecuador
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Sistema de envíos nacionales</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Facturación electrónica <a href="https://www.sri.gob.ec/facturacion-electronica" target="_blank" rel="noopener noreferrer" className="text-accent-red dark:text-accent-yellow hover:underline">SRI</a></span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Adaptado al consumidor ecuatoriano</span>
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-red/10 dark:bg-accent-yellow/10 mb-6">
                                    <LineChart className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                </div>
                                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    Análisis y Crecimiento
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Reportes de ventas en tiempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Análisis de comportamiento</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span>Estrategias de optimización</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>


                {/* Services Section */}
                <section id="servicios" className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInVariants}
                            viewport={{ once: true }}
                        >
                            Nuestros Servicios de Desarrollo Web
                        </motion.h2>
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            {services.map((service, index) => {
                                const Icon = service.icon
                                return (
                                    <motion.div
                                        key={index}
                                        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                {/*<section className="py-20 bg-gray-50 dark:bg-gray-800/50">*/}
                {/*    <div className="max-w-4xl mx-auto px-6">*/}
                {/*        <motion.h2*/}
                {/*            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"*/}
                {/*            initial="hidden"*/}
                {/*            whileInView="visible"*/}
                {/*            variants={fadeInVariants}*/}
                {/*            viewport={{ once: true }}*/}
                {/*        >*/}
                {/*            Preguntas Frecuentes*/}
                {/*        </motion.h2>*/}
                {/*        <motion.div*/}
                {/*            className="space-y-4"*/}
                {/*            initial="hidden"*/}
                {/*            whileInView="visible"*/}
                {/*            variants={containerVariants}*/}
                {/*            viewport={{ once: true }}*/}
                {/*        >*/}
                {/*            {faqs.map((faq, index) => (*/}
                {/*                <motion.div*/}
                {/*                    key={index}*/}
                {/*                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"*/}
                {/*                    variants={itemVariants}*/}
                {/*                >*/}










                {/*                    <button*/}
                {/*                        className="w-full flex items-center justify-between p-6 text-left"*/}
                {/*                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}*/}
                {/*                    >*/}
                {/*                        <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>*/}
                {/*                        {openFAQ === index ? (*/}
                {/*                            <ChevronUp className="w-5 h-5 text-gray-500" />*/}
                {/*                        ) : (*/}
                {/*                            <ChevronDown className="w-5 h-5 text-gray-500" />*/}
                {/*                        )}*/}
                {/*                    </button>*/}
                {/*                    {openFAQ === index && (*/}
                {/*                        <motion.div*/}
                {/*                            initial={{ height: 0, opacity: 0 }}*/}
                {/*                            animate={{ height: "auto", opacity: 1 }}*/}
                {/*                            exit={{ height: 0, opacity: 0 }}*/}
                {/*                            transition={{ duration: 0.3 }}*/}
                {/*                            className="px-6 pb-6"*/}
                {/*                        >*/}
                {/*                            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>*/}
                {/*                        </motion.div>*/}
                {/*                    )}*/}
                {/*                </motion.div>*/}
                {/*            ))}*/}
                {/*        </motion.div>*/}
                {/*    </div>*/}
                {/*</section>*/}



                {/* FAQ Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInVariants}
                            viewport={{ once: true }}
                        >
                            Preguntas Frecuentes
                        </motion.h2>
                        <FAQEcuador />
                    </div>
                </section>







                {/* Stats Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                            >
                                <div className="text-4xl font-bold text-accent-red dark:text-accent-yellow mb-2">+200</div>
                                <div className="text-gray-600 dark:text-gray-400">Proyectos Completados</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                            >
                                <div className="text-4xl font-bold text-accent-red dark:text-accent-yellow mb-2">98%</div>
                                <div className="text-gray-600 dark:text-gray-400">Clientes Satisfechos</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                            >
                                <div className="text-4xl font-bold text-accent-red dark:text-accent-yellow mb-2">10+</div>
                                <div className="text-gray-600 dark:text-gray-400">Años de Experiencia</div>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={itemVariants}
                            >
                                <div className="text-4xl font-bold text-accent-red dark:text-accent-yellow mb-2">24/7</div>
                                <div className="text-gray-600 dark:text-gray-400">Soporte Técnico</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInVariants}
                            viewport={{ once: true }}
                        >
                            Tecnologías que Utilizamos
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            {['wordpress.svg', 'react.svg', 'tailwind.svg', 'nextjs.svg', 'php.svg', 'mysql.svg'].map((tech) => (
                                <motion.div
                                    key={tech}
                                    className="flex flex-col items-center"
                                    variants={itemVariants}
                                >
                                    <Image
                                        src={`/tech/${tech}`}
                                        alt={`${tech.split('.')[0]} logo`}
                                        width={60}
                                        height={60}
                                        className="mb-4"
                                    />
                                    <span className="text-gray-600 dark:text-gray-400 capitalize">
                    {tech.split('.')[0]}
                  </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contacto" className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(220,38,38,0.05),transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(234,179,8,0.05),transparent)]" />
                    <div className="max-w-3xl mx-auto px-6 relative">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                                variants={itemVariants}
                            >
                                ¿Listo para digitalizar tu negocio?
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-600 dark:text-gray-400 mb-10"
                                variants={itemVariants}
                            >
                                Da el primer paso hacia tu transformación digital.
                                Conversemos sobre tu proyecto y hagámoslo realidad.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8"
                            >
                                <motion.a
                                    href="tel:+593984264910"
                                    className="flex items-center justify-center gap-2 bg-accent-red dark:bg-accent-yellow text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-all group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Phone className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                                    <span>Llamar Ahora</span>
                                </motion.a>

                                <motion.a
                                    href="https://wa.me/593984264910?text=Hola,%20me%20interesa%20crear%20una%20página%20web%20para%20mi%20negocio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 border-2 border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-6 py-4 rounded-xl font-medium hover:bg-accent-red/5 dark:hover:bg-accent-yellow/5 transition-all group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg
                                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <span>WhatsApp</span>
                                </motion.a>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <p className="text-gray-500 dark:text-gray-400 mb-2">
                                    O escríbenos a
                                </p>
                                <motion.a
                                    href="mailto:info@torisoftt.com"
                                    className="text-accent-red dark:text-accent-yellow font-medium hover:underline inline-flex items-center gap-1 group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    info@torisoftt.com
                                </motion.a>
                            </motion.div>

                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}












