'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Users,
    Code,
    Palette,
    Search,
    Globe,
    Server,
    Mail,
    Shield,
    Rocket,
    Award,
    Check,
    CheckCircle,
    ArrowRight,
    Settings,
    BarChart,
    Heart,
    Clock,
    DollarSign,
    MessageCircle,
    Building
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';



const contacto = "/#contacto";

const services = [
    {
        icon: Search,
        title: "SEO",
        description: "Servicios de posicionamiento white label",
        features: [
            "Auditorías técnicas",
            "Optimización on-page",
            "Link building",
            "SEO Local",
            "Informes personalizados"
        ],
        price: "Desde $299/mes"
    },
    {
        icon: Code,
        title: "Desarrollo Web",
        description: "Soluciones web personalizadas",
        features: [
            "Sitios WordPress desde $149",
            "Desarrollo frontend",
            "Aplicaciones web",
            "eCommerce",
            "Web apps"
        ],
        price: "Desde $149"
    },
    {
        icon: Palette,
        title: "Diseño UI/UX",
        description: "Diseño de interfaces y experiencias",
        features: [
            "Diseño web",
            "Prototipos",
            "Design systems",
            "Mobile first",
            "User research"
        ],
        price: "Desde $199"
    },
    {
        icon: Server,
        title: "Servicios Técnicos",
        description: "Soporte técnico especializado",
        features: [
            "Hosting optimizado",
            "Migraciones",
            "Correos corporativos",
            "SSL y seguridad",
            "Mantenimiento"
        ],
        price: "Desde $29/mes"
    }
];

const benefits = [
    {
        icon: DollarSign,
        title: "Precios Preferenciales",
        description: "Tarifas especiales para partners que te permiten maximizar tus márgenes"
    },
    {
        icon: Award,
        title: "White Label",
        description: "Todos los servicios y reportes bajo tu marca"
    },
    {
        icon: Clock,
        title: "Soporte Prioritario",
        description: "Atención preferencial y tiempos de respuesta garantizados"
    },
    {
        icon: Heart,
        title: "Account Manager",
        description: "Ejecutivo de cuenta dedicado para tus proyectos"
    },
    {
        icon: BarChart,
        title: "Dashboard",
        description: "Panel de control exclusivo para gestionar proyectos"
    },
    {
        icon: Shield,
        title: "Confidencialidad",
        description: "Acuerdos de confidencialidad para proteger tu negocio"
    }
];

const tiers = [
    {
        name: "Silver Partner",
        description: "Ideal para agencias emergentes",
        price: "Sin costo de entrada",
        features: [
            "Descuentos del 10% en todos los servicios",
            "Soporte prioritario",
            "Dashboard de partners",
            "Informes white label",
            "Materiales de marketing"
        ],
        requirement: "Facturación mensual mínima de $500"
    },
    {
        name: "Gold Partner",
        description: "Para agencias en crecimiento",
        price: "Sin costo de entrada",
        features: [
            "Descuentos del 20% en todos los servicios",
            "Account manager dedicado",
            "API de integración",
            "Capacitación mensual",
            "Prioridad en la cola de proyectos"
        ],
        requirement: "Facturación mensual mínima de $2000",
        highlighted: true
    },
    {
        name: "Platinum Partner",
        description: "Para agencias establecidas",
        price: "Sin costo de entrada",
        features: [
            "Descuentos del 30% en todos los servicios",
            "Equipo dedicado",
            "Desarrollos personalizados",
            "Soporte 24/7",
            "Condiciones especiales de pago"
        ],
        requirement: "Facturación mensual mínima de $5000"
    }
];

export default function PartnersPage() {
    const [selectedService, setSelectedService] = useState(null);

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
                                    Programa de
                                    <span className="block text-accent-red dark:text-accent-yellow">
                                        Partners
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                    Expande tu agencia con servicios white label de primera clase.
                                    Precios preferenciales y soporte dedicado.
                                </p>

                                <motion.a
                                 href={contacto}
                                        target="_blank"
                                 
                                    
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-accent-red dark:bg-accent-yellow text-white
                                    dark:text-gray-900 rounded-xl font-medium inline-flex items-center gap-2"
                                >
                                    <Building className="w-5 h-5" />
                                    Aplicar Ahora
                                </motion.a>
                            </div>
                            <div className="flex-1 relative">
                                <Image
                                    src="/partners-hero.png"
                                    alt="Partners Program"
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Beneficios del Programa
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Únete a nuestro programa de partners y accede a beneficios exclusivos
                                para hacer crecer tu agencia.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
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

                {/* Services Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Servicios Disponibles
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Amplía tu cartera de servicios con soluciones profesionales white label.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                   
                                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg
                                    hover:shadow-xl transition-shadow cursor-pointer"
                                >
                                    <service.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                        {service.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-lg font-semibold text-accent-red dark:text-accent-yellow">
                                        {service.price}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tiers Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Niveles de Partnership
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Elige el nivel que mejor se adapte a tu agencia y comienza a crecer.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {tiers.map((tier, index) => (
                                <motion.div
                                    key={tier.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl
                                    ${tier.highlighted ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''}`}
                                >
                                    {tier.highlighted && (
                                        <span className="absolute -top-4 left-1/2 transform -translate-x-1/2
                                        bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900
                                        px-4 py-1 rounded-full text-sm font-medium">
                                            Recomendado
                                        </span>
                                    )}
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {tier.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {tier.description}
                                    </p>
                                    <p className="text-xl font-bold text-accent-red dark:text-accent-yellow mb-6">
                                        {tier.price}
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {tier.features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <Check className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                        {tier.requirement}
                                    </p>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}

 href={contacto}
                                        target="_blank"


                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 rounded-xl font-medium inline-flex items-center 
                                        justify-center gap-2 ${tier.highlighted ? 
                                        'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900' : 
                                        'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}`}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                        Comenzar Ahora
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                ¿Cómo Funciona?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Proceso simple para empezar a trabajar juntos.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Aplica",
                                    description: "Completa el formulario de aplicación con los detalles de tu agencia",
                                    icon: Building
                                },
                                {
                                    step: "02",
                                    title: "Evaluación",
                                    description: "Revisaremos tu aplicación y te contactaremos en 24-48 horas",
                                    icon: CheckCircle
                                },
                                {
                                    step: "03",
                                    title: "Onboarding",
                                    description: "Configuración de tu cuenta y capacitación inicial",
                                    icon: Rocket
                                },
                                {
                                    step: "04",
                                    title: "¡Comienza!",
                                    description: "Empieza a ofrecer nuevos servicios a tus clientes",
                                    icon: Award
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center 
                                    justify-center mx-auto mb-4">
                                        <step.icon className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                                    </div>
                                    <div className="text-xl font-bold text-accent-red dark:text-accent-yellow mb-2">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
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
                                Todo lo que necesitas saber sobre nuestro programa de partners.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    question: "¿Cómo funciona el modelo de precios preferenciales?",
                                    answer: "Los precios preferenciales se basan en tu nivel de partnership. Ofrecemos descuentos del 10% al 30% sobre nuestras tarifas estándar, dependiendo del volumen mensual de servicios."
                                },
                                {
                                    question: "¿Qué incluye el servicio white label?",
                                    answer: "Todos los entregables, informes y comunicaciones llevarán tu marca. Proporcionamos templates personalizables y un panel de control branded para gestionar los proyectos."
                                },
                                {
                                    question: "¿Hay un compromiso mínimo de permanencia?",
                                    answer: "No hay compromiso de permanencia, pero los niveles de partnership están basados en la facturación mensual. Puedes subir o bajar de nivel según tu volumen de servicios."
                                },
                                {
                                    question: "¿Cómo funciona el soporte técnico?",
                                    answer: "Contarás con soporte prioritario por email, chat y teléfono. Los partners Gold y Platinum tienen además un account manager dedicado y soporte 24/7."
                                },
                                {
                                    question: "¿Puedo ofrecer servicios individuales?",
                                    answer: "Sí, puedes elegir qué servicios ofrecer a tus clientes. No hay obligación de contratar paquetes completos."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto px-4"
                    >
                        <div className="bg-gradient-to-r from-accent-red to-accent-red/80 dark:from-accent-yellow 
                        dark:to-accent-yellow/80 p-12 rounded-2xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white dark:text-gray-900">
                                Únete a Nuestro Programa de Partners
                            </h2>
                            <p className="text-xl text-white/90 dark:text-gray-900/90 mb-8 max-w-2xl mx-auto">
                                Expande tu agencia con servicios profesionales white label y precios preferenciales.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                 href={contacto}
                                        target="_blank"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-white dark:bg-gray-900 text-accent-red 
                                    dark:text-accent-yellow rounded-xl font-medium inline-flex items-center 
                                    justify-center gap-2"
                                >
                                    <Building className="w-5 h-5" />
                                    Aplicar Ahora
                                </motion.a>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-transparent border-2 border-white dark:border-gray-900 
                                    text-white dark:text-gray-900 rounded-xl font-medium inline-flex items-center 
                                    justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Agendar Llamada
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}