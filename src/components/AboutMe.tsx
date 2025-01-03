// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Code2, Palette, Laptop, GraduationCap, MapPin, Clock } from 'lucide-react';
//
// export default function AboutMe() {
//     const skills = [
//         { name: 'Frontend Development', icon: Code2 },
//         { name: 'Backend Development', icon: Laptop },
//         { name: 'UI/UX Design', icon: Palette }
//     ];
//
//     const experiences = [
//         {
//             year: '2016-Presente',
//             title: 'Desarrollo Frontend y Backend',
//             description: 'Especializado en crear experiencias web excepcionales y sistemas robustos'
//         },
//         {
//             year: '2018-Presente',
//             title: 'Diseño Gráfico y UI/UX',
//             description: 'Diseño de interfaces intuitivas y materiales visuales atractivos'
//         }
//     ];
//
//     return (
//         <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-900">
//             <div className="max-w-7xl mx-auto px-6">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                         Sobre Mí
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Desarrollador de software apasionado por crear soluciones digitales innovadoras
//                     </p>
//                 </motion.div>
//
//                 <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="space-y-6"
//                     >
//                         <div className="flex items-start gap-4">
//                             <MapPin className="w-6 h-6 text-accent-red dark:text-accent-yellow flex-shrink-0" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                                     Ubicación
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-gray-400">
//                                     Cuenca, Ecuador
//                                 </p>
//                             </div>
//                         </div>
//
//                         <div className="flex items-start gap-4">
//                             <GraduationCap className="w-6 h-6 text-accent-red dark:text-accent-yellow flex-shrink-0" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                                     Formación
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-gray-400">
//                                     Desarrollo de Software
//                                 </p>
//                             </div>
//                         </div>
//
//                         <div className="flex items-start gap-4">
//                             <Clock className="w-6 h-6 text-accent-red dark:text-accent-yellow flex-shrink-0" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 dark:text-white">
//                                     Experiencia
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-gray-400">
//                                     +8 años en desarrollo web y diseño
//                                 </p>
//                             </div>
//                         </div>
//
//                         <p className="text-gray-600 dark:text-gray-400 mt-6">
//                             Con más de 8 años de experiencia en el desarrollo web, me especializo en crear
//                             soluciones digitales que combinan funcionalidad y diseño atractivo. Mi formación
//                             en desarrollo de software y mi experiencia en diseño gráfico me permiten abordar
//                             los proyectos desde una perspectiva integral.
//                         </p>
//                     </motion.div>
//
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="space-y-8"
//                     >
//                         <div>
//                             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                                 Especialidades
//                             </h3>
//                             <div className="grid grid-cols-2 gap-4">
//                                 {[
//                                     "React/Next.js",
//                                     "Node.js",
//                                     "TypeScript",
//                                     "WordPress",
//                                     "UI/UX Design",
//                                     "Tailwind CSS",
//                                     "PHP",
//                                     "MySQL"
//                                 ].map((skill) => (
//                                     <motion.div
//                                         key={skill}
//                                         className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"
//                                         whileHover={{ scale: 1.05 }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         <p className="text-accent-red dark:text-accent-yellow font-medium">
//                                             {skill}
//                                         </p>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//
//                         <div>
//                             <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                                 Servicios Principales
//                             </h3>
//                             <div className="space-y-4">
//                                 {[
//                                     {
//                                         title: "Desarrollo Web Full Stack",
//                                         description: "Aplicaciones web completas y escalables"
//                                     },
//                                     {
//                                         title: "Diseño UI/UX",
//                                         description: "Interfaces intuitivas y experiencias de usuario efectivas"
//                                     },
//                                     {
//                                         title: "Desarrollo WordPress",
//                                         description: "Sitios personalizados y optimizados"
//                                     }
//                                 ].map((service, index) => (
//                                     <motion.div
//                                         key={index}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         transition={{ delay: index * 0.1 }}
//                                         viewport={{ once: true }}
//                                         className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
//                                     >
//                                         <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
//                                             {service.title}
//                                         </h4>
//                                         <p className="text-gray-600 dark:text-gray-400 text-sm">
//                                             {service.description}
//                                         </p>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="mt-16 text-center"
//                 >
//                     <Link
//                         href="#contacto"
//                         className="inline-block px-8 py-4 bg-accent-red dark:bg-accent-yellow
//                                  text-white dark:text-gray-900 rounded-lg font-medium
//                                  hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
//                                  transition-colors duration-300"
//                     >
//                         ¿Listo para trabajar juntos?
//                     </Link>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2,
    Palette,
    Laptop,
    GraduationCap,
    MapPin,
    Clock,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

export default function AboutMe() {
    const [isExpanded, setIsExpanded] = useState(false);

    const skills = [
        "React/Next.js",
        "Node.js",
        "TypeScript",
        "WordPress",
        "UI/UX Design",
        "Tailwind CSS",
        "PHP",
        "MySQL"
    ];

    const services = [
        {
            title: "Desarrollo Web Full Stack",
            description: "Aplicaciones web completas y escalables"
        },
        {
            title: "Diseño UI/UX",
            description: "Interfaces intuitivas y experiencias de usuario efectivas"
        },
        {
            title: "Desarrollo WordPress",
            description: "Sitios personalizados y optimizados"
        }
    ];

    return (
        <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Sobre Mí
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Desarrollador de software apasionado por crear soluciones digitales innovadoras
                    </p>
                </motion.div>

                {/* Resumen Siempre Visible */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8"
                >
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-accent-red dark:text-accent-yellow flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Ubicación
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Cuenca, Ecuador
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <GraduationCap className="w-6 h-6 text-accent-red dark:text-accent-yellow flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Formación
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Desarrollo de Software
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Clock className="w-6 h-6 text-accent-red dark:text-accent-yellow flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Experiencia
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    +8 años en desarrollo web y diseño
                                </p>
                            </div>
                        </div>
                    </div>

                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-6 mx-auto flex items-center gap-2 px-4 py-2 text-accent-red
                                 dark:text-accent-yellow hover:bg-accent-red/5 dark:hover:bg-accent-yellow/5
                                 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isExpanded ? (
                            <>
                                Ver menos
                                <ChevronUp className="w-5 h-5" />
                            </>
                        ) : (
                            <>
                                Ver más
                                <ChevronDown className="w-5 h-5" />
                            </>
                        )}
                    </motion.button>
                </motion.div>

                {/* Contenido Expandible */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Con más de 8 años de experiencia en el desarrollo web, me especializo
                                        en crear soluciones digitales que combinan funcionalidad y diseño
                                        atractivo. Mi formación en desarrollo de software y mi experiencia
                                        en diseño gráfico me permiten abordar los proyectos desde una
                                        perspectiva integral.
                                    </p>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                            Servicios Principales
                                        </h3>
                                        <div className="space-y-4">
                                            {services.map((service, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                                                >
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                        {service.title}
                                                    </h4>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                        {service.description}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                        Especialidades
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {skills.map((skill, index) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"
                                            >
                                                <p className="text-accent-red dark:text-accent-yellow font-medium">
                                                    {skill}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-12 text-center"
                            >
                                <Link
                                    href="#contacto"
                                    className="inline-block px-8 py-4 bg-accent-red dark:bg-accent-yellow
                                             text-white dark:text-gray-900 rounded-lg font-medium
                                             hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90
                                             transition-colors duration-300"
                                >
                                    ¿Listo para trabajar juntos?
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}