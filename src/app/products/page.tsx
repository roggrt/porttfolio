
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

import DomainProviders from '@/components/DomainProviders'

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
                features: ['Diseño UI/UX', 'WordPress/PHP', '5 días', 'SEO básico'],
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


                {/*<DomainProviders />*/}


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
                            <span>Consultar la Selección ({selectedServices.length})</span>
                        </button>
                    </motion.div>
                )}
            </main>
            <Footer/>
        </>
    )
}