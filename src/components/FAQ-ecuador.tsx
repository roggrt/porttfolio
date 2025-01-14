// 'use client'
//
// import { useState } from 'react'
// import { ChevronDown, ChevronUp, Plus } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
//
// interface FAQ {
//     id: string;
//     question: string;
//     answer: string;
//     tags: string[];
// }
//
// // FAQs Principales
// const mainFaqs: FAQ[] = [
//     {
//         id: 'cost',
//         question: '¿Cuánto cuesta crear una página web en Ecuador?',
//         answer: 'El costo varía según las necesidades específicas de cada proyecto. Una página web informativa básica puede costar desde $400 en promedio en varias agencias a nivel nacional, mientras que un eCommerce completo puede partir desde $1500. Ofrecemos presupuestos personalizados gratuitos para ajustarnos a tu inversión.',
//         tags: ['precios', 'costos', 'inversión']
//     },
//     {
//         id: 'time',
//         question: '¿Cuánto tiempo toma desarrollar mi sitio web?',
//         answer: 'El tiempo de desarrollo promedio es de 3 a 6 semanas, dependiendo de la complejidad del proyecto. Sitios web básicos pueden estar listos en 2-3 semanas, mientras que proyectos más complejos como eCommerce pueden tomar 6-8 semanas.',
//         tags: ['tiempo', 'desarrollo', 'plazos']
//     },
//     {
//         id: 'hosting',
//         question: '¿Incluyen dominio y hosting?',
//         answer: 'Sí, todos nuestros paquetes incluyen dominio .com o .ec y hosting profesional por el primer año. También ofrecemos mantenimiento y soporte técnico continuo para garantizar el óptimo funcionamiento de tu sitio.',
//         tags: ['hosting', 'dominio', 'mantenimiento']
//     },
//     {
//         id: 'cms',
//         question: '¿Hacen páginas web autoadministrables?',
//         answer: 'Sí, desarrollamos sitios web con sistemas de gestión de contenido (CMS) como WordPress, que te permiten actualizar fácilmente el contenido de tu página sin conocimientos técnicos.',
//         tags: ['cms', 'wordpress', 'autoadministrable']
//     },
//     {
//         id: 'seo',
//         question: '¿Optimizan las páginas web para SEO?',
//         answer: 'Absolutamente. Todos nuestros sitios web se desarrollan siguiendo las mejores prácticas de SEO para mejorar tu posicionamiento en Google. Incluimos optimización de velocidad, estructura de URLs, meta tags y más.',
//         tags: ['seo', 'optimización', 'google']
//     }
// ]
//
// // FAQs Relacionadas
// const relatedFaqs: FAQ[] = [
//     {
//         id: 'price-difference',
//         question: '¿Por qué hay tanta diferencia de precios en el mercado ecuatoriano?',
//         answer: 'Encontrarás páginas web desde $100 hasta miles de dólares. Las ofertas muy económicas generalmente utilizan plantillas prediseñadas con personalizaciones mínimas, pueden tener problemas de rendimiento, seguridad vulnerable y código no optimizado. Además, suelen carecer de soporte post-lanzamiento y documentación técnica. Nuestros proyectos son desarrollados desde cero, siguiendo estándares de la industria, con código limpio y escalable, pensando en el crecimiento futuro de tu negocio.',
//         tags: ['precios', 'costos', 'calidad']
//     },
//     {
//         id: 'cheap-risks',
//         question: '¿Qué riesgos implica contratar servicios web muy económicos?',
//         answer: 'Los servicios web extremadamente baratos suelen presentar varios riesgos: sitios web vulnerables a hackeos por falta de actualizaciones de seguridad, pérdida de información por no contar con backups regulares, diseños no adaptables a móviles, carga lenta que afecta el SEO, y abandono del proyecto por falta de soporte técnico. Además, muchos utilizan hostings gratuitos o de baja calidad que pueden tener caídas frecuentes.',
//         tags: ['precios', 'riesgos', 'seguridad']
//     },
//     {
//         id: 'modifications',
//         question: '¿Qué sucede si necesito modificaciones después del lanzamiento?',
//         answer: 'Desarrollamos todos nuestros sitios de manera modular y escalable, lo que facilita futuras modificaciones y ampliaciones. Ofrecemos paquetes de mantenimiento mensual que incluyen actualizaciones de contenido, mejoras de seguridad y optimizaciones de rendimiento. También puedes solicitar modificaciones puntuales según tus necesidades.',
//         tags: ['mantenimiento', 'modificaciones', 'soporte']
//     },
//     {
//         id: 'portfolio',
//         question: '¿Puedo ver ejemplos de sus trabajos anteriores?',
//         answer: 'Por supuesto. Contamos con un portafolio extenso de proyectos exitosos en diversos sectores. Podemos mostrarte casos de éxito específicos en tu industria y ponerte en contacto con clientes actuales que pueden compartir su experiencia trabajando con nosotros.',
//         tags: ['portfolio', 'ejemplos', 'experiencia']
//     },
//     {
//         id: 'guarantee',
//         question: '¿Ofrecen garantía por sus servicios?',
//         answer: 'Sí, todos nuestros proyectos incluyen garantía de funcionamiento por 6 meses. Además, documentamos todo el proceso de desarrollo, entregamos manuales de uso, y ofrecemos capacitación para que puedas administrar tu sitio. Trabajamos con contratos claros que especifican todos los entregables y mantenemos comunicación constante durante todo el proyecto.',
//         tags: ['garantía', 'soporte', 'documentación']
//     },
//     {
//         id: 'redesign',
//         question: '¿También rediseñan sitios web existentes?',
//         answer: 'Sí, ofrecemos servicios de rediseño y modernización de sitios web existentes. Analizamos tu sitio actual, identificamos áreas de mejora y proponemos soluciones para optimizar la experiencia del usuario, mejorar el rendimiento y actualizar el diseño según las últimas tendencias. El proceso incluye migración segura de contenido y redirecciones SEO para mantener tu posicionamiento.',
//         tags: ['rediseño', 'modernización', 'actualización']
//     }
// ]
//
// export default function FAQSection() {
//     const [openFAQ, setOpenFAQ] = useState<string | null>(null)
//     const [showingRelated, setShowingRelated] = useState<FAQ[]>([])
//
//     const handleFAQClick = (faq: FAQ) => {
//         setOpenFAQ(openFAQ === faq.id ? null : faq.id)
//
//         if (openFAQ !== faq.id) {
//             // Encuentra FAQs relacionadas basadas en tags
//             const related = relatedFaqs
//                 .filter(relatedFaq =>
//                     relatedFaq.tags.some(tag => faq.tags.includes(tag)) &&
//                     !showingRelated.some(showing => showing.id === relatedFaq.id)
//                 )
//                 .slice(0, 2)
//
//             setShowingRelated(prev => [...prev, ...related])
//         }
//     }
//
//     return (
//         <div className="space-y-4">
//             {/* FAQs Principales */}
//             {mainFaqs.map((faq) => (
//                 <motion.div
//                     key={faq.id}
//                     className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
//                     initial={false}
//                 >
//                     <button
//                         className="w-full flex items-center justify-between p-6 text-left"
//                         onClick={() => handleFAQClick(faq)}
//                     >
//             <span className="text-lg font-medium text-gray-900 dark:text-white">
//               {faq.question}
//             </span>
//                         {openFAQ === faq.id ? (
//                             <ChevronUp className="w-5 h-5 text-gray-500" />
//                         ) : (
//                             <ChevronDown className="w-5 h-5 text-gray-500" />
//                         )}
//                     </button>
//                     <AnimatePresence>
//                         {openFAQ === faq.id && (
//                             <motion.div
//                                 initial={{ height: 0 }}
//                                 animate={{ height: "auto" }}
//                                 exit={{ height: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="overflow-hidden"
//                             >
//                                 <div className="p-6 pt-0">
//                                     <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
//                                 </div>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </motion.div>
//             ))}
//
//             {/* FAQs Relacionadas */}
//             {showingRelated.length > 0 && (
//                 <div className="mt-8">
//                     <div className="flex items-center gap-2 mb-4">
//                         <Plus className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
//                         <h3 className="text-lg font-medium text-gray-900 dark:text-white">
//                             Preguntas relacionadas
//                         </h3>
//                     </div>
//                     <div className="space-y-4">
//                         {showingRelated.map((faq) => (
//                             <motion.div
//                                 key={faq.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
//                             >
//                                 <button
//                                     className="w-full flex items-center justify-between p-6 text-left"
//                                     onClick={() => handleFAQClick(faq)}
//                                 >
//                   <span className="text-lg font-medium text-gray-900 dark:text-white">
//                     {faq.question}
//                   </span>
//                                     {openFAQ === faq.id ? (
//                                         <ChevronUp className="w-5 h-5 text-gray-500" />
//                                     ) : (
//                                         <ChevronDown className="w-5 h-5 text-gray-500" />
//                                     )}
//                                 </button>
//                                 <AnimatePresence>
//                                     {openFAQ === faq.id && (
//                                         <motion.div
//                                             initial={{ height: 0 }}
//                                             animate={{ height: "auto" }}
//                                             exit={{ height: 0 }}
//                                             transition={{ duration: 0.3 }}
//                                             className="overflow-hidden"
//                                         >
//                                             <div className="p-6 pt-0">
//                                                 <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Plus, MinusCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
    id: string;
    question: string;
    answer: string;
    tags: string[];
}

const mainFaqs: FAQ[] = [
    {
        id: 'cost',
        question: '¿Cuánto cuesta crear una página web en Ecuador?',
        answer: 'El costo varía según las necesidades específicas de cada proyecto. Una página web informativa básica puede costar desde $400 en promedio en varias agencias a nivel nacional, mientras que un eCommerce completo puede partir desde $1500. Ofrecemos presupuestos personalizados gratuitos para ajustarnos a tu inversión.',
        tags: ['precios', 'costos', 'inversión']
    },
    // En mainFaqs, después de la primera pregunta sobre costos:
    {
        id: 'international',
        question: '¿Trabajan con clientes fuera de Ecuador?',
        answer: 'Sí, trabajamos con clientes de todo el mundo. Tenemos experiencia desarrollando proyectos para empresas en Latinoamérica, Europa y Norteamérica. Gracias a nuestra metodología de trabajo remoto y herramientas de colaboración en línea, podemos gestionar proyectos eficientemente sin importar la ubicación geográfica. Ofrecemos la misma calidad de servicio, soporte y atención personalizada a todos nuestros clientes internacionales.',
        tags: ['internacional', 'global', 'remoto']
    },
    {
        id: 'time',
        question: '¿Cuánto tiempo toma desarrollar mi sitio web?',
        answer: 'El tiempo de desarrollo promedio es de 3 a 6 semanas, dependiendo de la complejidad del proyecto. Sitios web básicos pueden estar listos en 2-3 semanas, mientras que proyectos más complejos como eCommerce pueden tomar 6-8 semanas.',
        tags: ['tiempo', 'desarrollo', 'plazos']
    },
    {
        id: 'hosting',
        question: '¿Incluyen dominio y hosting?',
        answer: 'Sí, todos nuestros paquetes incluyen dominio .com o .ec y hosting profesional por el primer año. También ofrecemos mantenimiento y soporte técnico continuo para garantizar el óptimo funcionamiento de tu sitio.',
        tags: ['hosting', 'dominio', 'mantenimiento']
    },
    {
        id: 'cms',
        question: '¿Hacen páginas web autoadministrables?',
        answer: 'Sí, desarrollamos sitios web con sistemas de gestión de contenido (CMS) como WordPress, que te permiten actualizar fácilmente el contenido de tu página sin conocimientos técnicos.',
        tags: ['cms', 'wordpress', 'autoadministrable']
    },
    {
        id: 'seo',
        question: '¿Optimizan las páginas web para SEO?',
        answer: 'Absolutamente. Todos nuestros sitios web se desarrollan siguiendo las mejores prácticas de SEO para mejorar tu posicionamiento en Google. Incluimos optimización de velocidad, estructura de URLs, meta tags y más.',
        tags: ['seo', 'optimización', 'google']
    }
]

const relatedFaqs: FAQ[] = [
    {
        id: 'price-difference',
        question: '¿Por qué hay tanta diferencia de precios en el mercado ecuatoriano?',
        answer: 'Encontrarás páginas web desde $100 hasta miles de dólares. Las ofertas muy económicas generalmente utilizan plantillas prediseñadas con personalizaciones mínimas, pueden tener problemas de rendimiento, seguridad vulnerable y código no optimizado. Además, suelen carecer de soporte post-lanzamiento y documentación técnica. Nuestros proyectos son desarrollados desde cero, siguiendo estándares de la industria, con código limpio y escalable, pensando en el crecimiento futuro de tu negocio.',
        tags: ['precios', 'costos', 'calidad']
    },
    {
        id: 'cheap-risks',
        question: '¿Qué riesgos implica contratar servicios web muy económicos?',
        answer: 'Los servicios web extremadamente baratos suelen presentar varios riesgos: sitios web vulnerables a hackeos por falta de actualizaciones de seguridad, pérdida de información por no contar con backups regulares, diseños no adaptables a móviles, carga lenta que afecta el SEO, y abandono del proyecto por falta de soporte técnico. Además, muchos utilizan hostings gratuitos o de baja calidad que pueden tener caídas frecuentes.',
        tags: ['precios', 'riesgos', 'seguridad']
    },
    {
        id: 'modifications',
        question: '¿Qué sucede si necesito modificaciones después del lanzamiento?',
        answer: 'Desarrollamos todos nuestros sitios de manera modular y escalable, lo que facilita futuras modificaciones y ampliaciones. Ofrecemos paquetes de mantenimiento mensual que incluyen actualizaciones de contenido, mejoras de seguridad y optimizaciones de rendimiento. También puedes solicitar modificaciones puntuales según tus necesidades.',
        tags: ['mantenimiento', 'modificaciones', 'soporte']
    },
    {
        id: 'portfolio',
        question: '¿Puedo ver ejemplos de sus trabajos anteriores?',
        answer: 'Por supuesto. Contamos con un portafolio extenso de proyectos exitosos en diversos sectores. Podemos mostrarte casos de éxito específicos en tu industria y ponerte en contacto con clientes actuales que pueden compartir su experiencia trabajando con nosotros.',
        tags: ['portfolio', 'ejemplos', 'experiencia']
    },
    {
        id: 'guarantee',
        question: '¿Ofrecen garantía por sus servicios?',
        answer: 'Sí, todos nuestros proyectos incluyen garantía de funcionamiento por 6 meses. Además, documentamos todo el proceso de desarrollo, entregamos manuales de uso, y ofrecemos capacitación para que puedas administrar tu sitio. Trabajamos con contratos claros que especifican todos los entregables y mantenemos comunicación constante durante todo el proyecto.',
        tags: ['garantía', 'soporte', 'documentación']
    },
    {
        id: 'redesign',
        question: '¿También rediseñan sitios web existentes?',
        answer: 'Sí, ofrecemos servicios de rediseño y modernización de sitios web existentes. Analizamos tu sitio actual, identificamos áreas de mejora y proponemos soluciones para optimizar la experiencia del usuario, mejorar el rendimiento y actualizar el diseño según las últimas tendencias. El proceso incluye migración segura de contenido y redirecciones SEO para mantener tu posicionamiento.',
        tags: ['rediseño', 'modernización', 'actualización']
    }
]

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<string | null>(null)
    const [showingRelated, setShowingRelated] = useState<FAQ[]>([])
    const [showRelatedSection, setShowRelatedSection] = useState(false)

    const handleFAQClick = (faq: FAQ) => {
        setOpenFAQ(openFAQ === faq.id ? null : faq.id)

        if (openFAQ !== faq.id) {
            // Encuentra FAQs relacionadas basadas en tags
            const related = relatedFaqs
                .filter(relatedFaq =>
                    relatedFaq.tags.some(tag => faq.tags.includes(tag)) &&
                    !showingRelated.some(showing => showing.id === relatedFaq.id)
                )
                .slice(0, 2)

            if (related.length > 0) {
                setShowingRelated(prev => {
                    const newRelated = [...prev, ...related];
                    // Mantener solo las últimas 4 preguntas relacionadas
                    return newRelated.slice(-4);
                });
                setShowRelatedSection(true);
            }
        }
    }

    const FAQItem = ({ faq }: { faq: FAQ }) => (
        <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            initial={false}
        >
            <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => handleFAQClick(faq)}
            >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {faq.question}
        </span>
                {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                )}
            </button>
            <AnimatePresence>
                {openFAQ === faq.id && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0">
                            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )

    return (
        <div className="space-y-6">
            {/* FAQs Principales */}
            <div className="space-y-4">
                {mainFaqs.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                ))}
            </div>

            {/* FAQs Relacionadas */}
            {showingRelated.length > 0 && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8"
                    >
                        <button
                            onClick={() => setShowRelatedSection(!showRelatedSection)}
                            className="flex items-center gap-2 mb-6 text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity"
                        >
                            {showRelatedSection ? (
                                <MinusCircle className="w-5 h-5" />
                            ) : (
                                <Plus className="w-5 h-5" />
                            )}
                            <span className="text-lg font-medium">
                {`${showingRelated.length} preguntas relacionadas`}
              </span>
                        </button>

                        <AnimatePresence>
                            {showRelatedSection && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {showingRelated.map((faq) => (
                                        <FAQItem key={faq.id} faq={faq} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}