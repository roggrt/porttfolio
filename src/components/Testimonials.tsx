'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
    Quote,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    MapPin
} from 'lucide-react';

type Testimonial = {
    id: number;
    clientName: string;
    role: string;
    location: string;
    website: string;
    websiteUrl: string;
    quote: string;
    image: string;
};

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            clientName: "CEMAPO",
            role: "Institución Educativa",
            location: "Ambato",
            website: "cemapoedu.ec",
            websiteUrl: "https://cemapoedu.ec/",
            quote: "El diseño de nuestro sitio web ha superado nuestras expectativas. La navegación intuitiva y el diseño moderno han mejorado significativamente la experiencia de nuestros estudiantes y profesores.",
            image: "/testimonials/cemapo-hero.png"
        },
        {
            id: 2,
            clientName: "Finsmart Solutions",
            role: "Servicios Financieros",
            location: "Guayaquil",
            website: "finsmartsolutions.info",
            websiteUrl: "https://finsmartsolutions.info/",
            quote: "Nuestra plataforma financiera necesitaba transmitir confianza y profesionalismo. El equipo entendió perfectamente nuestros requisitos y nos entregó un producto que no solo se ve excepcional sino que también ha mejorado significativamente nuestras conversiones.",
            image: "/testimonials/finsmart-hero.png"
        },
        {
            id: 3,
            clientName: "Ministerio de Agricultura",
            role: "Sector Público",
            location: "Santo Domingo",
            website: "desarrolloagropecuarioecuador.com",
            websiteUrl: "https://desarrolloagropecuarioecuador.com/",
            quote: "La plataforma desarrollada ha permitido mejorar significativamente la distribución de información y recursos para el sector agropecuario. La interfaz intuitiva ha sido elogiada por usuarios de todas las edades.",
            image: "/testimonials/agricultura-hero.png"
        },
        {
            id: 4,
            clientName: "Glamour",
            role: "Decoración y Comercio",
            location: "Cuenca",
            website: "glamourpersianasycortinas.com",
            websiteUrl: "https://www.glamourpersianasycortinas.com/",
            quote: "Nuestro catálogo digital ha aumentado las ventas online en un 45%. El diseño elegante refleja perfectamente la calidad de nuestros productos y ha mejorado la percepción de nuestra marca.",
            image: "/testimonials/glamour-hero.png"
        },
        {
            id: 5,
            clientName: "Hotel Sigsig",
            role: "Hotelería y Turismo",
            location: "Sigsig",
            website: "hotelsigsig.com",
            websiteUrl: "https://hotelsigsig.com/",
            quote: "La implementación del sistema de reservas ha optimizado nuestra operación diaria. El diseño atractivo y la facilidad de uso han generado comentarios muy positivos de nuestros huéspedes.",
            image: "/testimonials/sigsig-hero.png"
        }
    ];

    // Función para cambiar testimonio automaticamente cada 8 segundos
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (autoplay) {
            interval = setInterval(() => {
                setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
            }, 8000);
        }
        return () => clearInterval(interval);
    }, [current, autoplay, testimonials.length]);

    const next = () => {
        setAutoplay(true);
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    const prev = () => {
        setAutoplay(true);
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    // Función para ir a un testimonio en particular
    const goTo = (index: number) => {
        setAutoplay(true);
        setCurrent(index);
    };

    return (
        <section id="testimonios" className="py-16 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                        Casos de Éxito
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Descubre cómo hemos ayudado a empresas e instituciones a transformar su presencia digital
                        con soluciones efectivas y a medida.
                    </p>
                </motion.div>

                <div className="relative overflow-hidden">
                    {/* Slider principal con animación y efecto de zoom out */}
                    <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 mb-6">
                        <AnimatePresence mode="wait">
                            {testimonials.map((testimonial, index) => (
                                current === index && (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col md:flex-row"
                                    >
                                        {/* Sección de imagen */}
                                        <div className="w-full md:w-3/5 bg-white dark:bg-gray-900">
                                            <div className="relative w-full h-64 md:h-96">
                                                <motion.div
                                                    // Efecto de zoom out: se inicia con scale 1.1 (más grande) y se reduce hasta 1,
                                                    // y al salir se reduce levemente a 0.95 para dar dinamismo.
                                                    initial={{ scale: 1.1, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.95, opacity: 0 }}
                                                    transition={{ duration: 0.7 }}
                                                    className="w-full h-full"
                                                >
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={`${testimonial.clientName} - Diseño web en ${testimonial.location}, Ecuador`}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 60vw"
                                                        className="object-contain"
                                                        priority={index === 0}
                                                    />
                                                </motion.div>
                                                <a
                                                    href={testimonial.websiteUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 py-1.5 px-3 rounded-full text-sm font-medium text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 transition-colors shadow-sm"
                                                >
                                                    <span>{testimonial.website}</span>
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Sección de contenido del testimonio */}
                                        <div className="w-full md:w-2/5 bg-white dark:bg-gray-900 p-6 md:p-8 flex flex-col justify-center">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <Quote className="w-8 h-8 text-accent-red/20 dark:text-accent-yellow/20 mb-3" />
                                                <blockquote className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-5 italic">
                                                    {testimonial.quote}
                                                </blockquote>
                                                <div className="flex flex-col mt-auto">
                                                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.clientName}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{testimonial.role}</p>
                                                    <div className="flex items-center text-sm text-accent-red dark:text-accent-yellow">
                                                        <MapPin className="w-3.5 h-3.5 mr-1" />
                                                        <span>{testimonial.location}, Ecuador</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>

                        {/* Botones de navegación izquierda y derecha */}
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 transition-colors shadow-sm"
                            aria-label="Anterior testimonio"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 transition-colors shadow-sm"
                            aria-label="Siguiente testimonio"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Navegación con miniaturas */}
                    <div className="flex justify-center space-x-2">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                onClick={() => goTo(index)}
                                className={`relative rounded-full transition-all ${
                                    current === index
                                        ? 'bg-accent-red dark:bg-accent-yellow w-6 h-2'
                                        : 'bg-gray-300 dark:bg-gray-700 w-2 h-2 hover:bg-gray-400 dark:hover:bg-gray-600'
                                }`}
                                aria-label={`Ir al testimonio de ${testimonial.clientName}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Grid de logos o clientes */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {testimonials.map((testimonial) => (
                        <motion.a
                            key={testimonial.id}
                            href={testimonial.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: testimonial.id * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                            className="bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
                        >
                            <div className="relative w-full h-28 mb-2 rounded overflow-hidden bg-gray-50 dark:bg-gray-800">
                                <Image
                                    src={testimonial.image}
                                    alt={`${testimonial.clientName} - Diseño web en ${testimonial.location}, Ecuador`}
                                    fill
                                    className="object-contain p-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                                {testimonial.clientName}
                            </h3>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                                <MapPin className="w-3 h-3 mr-0.5" />
                                <span>{testimonial.location}</span>
                            </div>
                            <p className="text-xs text-accent-red dark:text-accent-yellow flex items-center gap-0.5 group-hover:underline mt-1">
                                <span>Ver sitio</span>
                                <ExternalLink className="w-3 h-3" />
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* CTA: Botón para cotizar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="#cotizador"
                        className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white dark:text-gray-900 bg-accent-red dark:bg-accent-yellow rounded-lg shadow-sm hover:shadow-md transition-all duration-300 gap-2 hover:gap-3"
                    >
                        <span>Cotiza tu proyecto ahora</span>
                        <span aria-hidden="true" className="text-lg">→</span>
                    </a>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        Únete a nuestra lista de casos de éxito
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
