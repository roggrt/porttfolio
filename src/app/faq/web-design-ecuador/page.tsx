// // 'use client'

// // import { useState } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
// // import Navbar from '@/components/layout/Navbar'
// // import Footer from '@/components/layout/Footer'

// // interface FAQCategory {
// //     title: string;
// //     description: string;
// //     questions: {
// //         question: string;
// //         answer: string | React.ReactNode;
// //     }[];
// // }

// // const faqCategories: FAQCategory[] = [
// //     {
// //         title: "Creación de Páginas Web",
// //         description: "Información básica sobre cómo comenzar tu presencia en línea",
// //         questions: [
// //             {
// //                 question: "¿Cómo puedo crear mi página web para mi negocio?",
// //                 answer: (
// //                     <div className="space-y-4">
// //                         <p>Para crear una página web profesional para tu negocio, te recomendamos seguir estos pasos:</p>
// //                         <ol className="list-decimal pl-5 space-y-2">
// //                             <li>Define los objetivos y necesidades de tu sitio web</li>
// //                             <li>Elige un dominio que represente tu marca</li>
// //                             <li>Selecciona un hosting confiable</li>
// //                             <li>Diseña la estructura y contenido de tu sitio</li>
// //                             <li>Desarrolla con tecnologías modernas y responsivas</li>
// //                             <li>Optimiza para motores de búsqueda (SEO)</li>
// //                         </ol>
// //                         <p>En Torisoftt nos encargamos de todo el proceso, desde el registro del dominio hasta el desarrollo y mantenimiento de tu sitio web.</p>
// //                     </div>
// //                 )
// //             },
// //             {
// //                 question: "¿Dónde hacer una página web gratis para mi negocio?",
// //                 answer: (
// //                     <div className="space-y-4">
// //                         <p>Aunque existen plataformas gratuitas para crear páginas web, estas tienen limitaciones importantes:</p>
// //                         <ul className="list-disc pl-5 space-y-2">
// //                             <li>Funcionalidades básicas y limitadas</li>
// //                             <li>No tienes un dominio propio profesional</li>
// //                             <li>Publicidad de terceros en tu sitio</li>
// //                             <li>Limitaciones de personalización</li>
// //                             <li>Poco control sobre SEO y rendimiento</li>
// //                         </ul>
// //                         <p>Para un negocio serio, recomendamos invertir en una solución profesional que te brinde control total y una imagen profesional. Nuestros planes comienzan desde $199 con dominio incluido.</p>
// //                     </div>
// //                 )
// //             }
// //         ]
// //     },
// //     {
// //         title: "Dominios y Hosting",
// //         description: "Todo sobre dominios web y alojamiento para tu sitio",
// //         questions: [
// //             {
// //                 question: "¿Dónde puedo crear una página web con dominio propio?",
// //                 answer: (
// //                     <div className="space-y-4">
// //                         <p>En Torisoftt te ofrecemos una solución completa que incluye:</p>
// //                         <ul className="list-disc pl-5 space-y-2">
// //                             <li>Registro de dominio personalizado</li>
// //                             <li>Hosting premium con alto rendimiento</li>
// //                             <li>Certificado SSL gratuito</li>
// //                             <li>Correos corporativos</li>
// //                             <li>Soporte técnico especializado</li>
// //                         </ul>
// //                         <p>Nos encargamos de toda la configuración técnica para que tu sitio esté en línea rápidamente.</p>
// //                     </div>
// //                 )
// //             },
// //             {
// //                 question: "¿Cómo crear una página web con dominio propio?",
// //                 answer: (
// //                     <div className="space-y-4">
// //                         <p>El proceso de crear una página web con dominio propio incluye:</p>
// //                         <ol className="list-decimal pl-5 space-y-2">
// //                             <li>Seleccionar y registrar tu dominio (.com, .ec, etc.)</li>
// //                             <li>Contratar un servicio de hosting confiable</li>
// //                             <li>Configurar los DNS y nameservers</li>
// //                             <li>Instalar certificado SSL</li>
// //                             <li>Desarrollar y publicar tu sitio web</li>
// //                         </ol>
// //                         <p>Con nuestros servicios, nos encargamos de todo el proceso técnico mientras tú te enfocas en tu negocio.</p>
// //                     </div>
// //                 )
// //             }
// //         ]
// //     }
// // ]

// // interface FAQItemProps {
// //     question: string;
// //     answer: string | React.ReactNode;
// //     isOpen: boolean;
// //     toggleOpen: () => void;
// // }

// // const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => (
// //     <div className="border-b border-gray-200 dark:border-gray-700">
// //         <button
// //             onClick={toggleOpen}
// //             className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
// //         >
// //             <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
// //             {isOpen ? (
// //                 <ChevronUp className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// //             ) : (
// //                 <ChevronDown className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// //             )}
// //         </button>
// //         <AnimatePresence initial={false}>
// //             {isOpen && (
// //                 <motion.div
// //                     initial={{ height: 0, opacity: 0 }}
// //                     animate={{ height: "auto", opacity: 1 }}
// //                     exit={{ height: 0, opacity: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     className="overflow-hidden"
// //                 >
// //                     <div className="pb-4 text-gray-600 dark:text-gray-400">
// //                         {answer}
// //                     </div>
// //                 </motion.div>
// //             )}
// //         </AnimatePresence>
// //     </div>
// // )

// // export default function FAQPage() {
// //     const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({})

// //     const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
// //         const key = `${categoryIndex}-${questionIndex}`
// //         setOpenQuestions(prev => ({
// //             ...prev,
// //             [key]: !prev[key]
// //         }))
// //     }

// //     const isQuestionOpen = (categoryIndex: number, questionIndex: number) => {
// //         const key = `${categoryIndex}-${questionIndex}`
// //         return openQuestions[key] || false
// //     }

// //     return (
// //         <>
// //             <Navbar />
// //             <main className="min-h-screen bg-white dark:bg-gray-900">
// //                 {/* Hero Section */}
// //                 <section className="pt-40 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
// //                     <div className="max-w-7xl mx-auto px-6">
// //                         <motion.div
// //                             initial={{opacity: 0, y: 20}}
// //                             animate={{opacity: 1, y: 0}}
// //                             className="max-w-3xl mx-auto text-center"
// //                         >
// //                             <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
// //                                 Preguntas Frecuentes sobre Diseño Web
// //                             </h1>
// //                             <p className="text-xl text-gray-600 dark:text-gray-400">
// //                                 Resolvemos tus dudas sobre cómo crear tu presencia profesional en línea
// //                             </p>
// //                         </motion.div>
// //                     </div>
// //                 </section>

// //                 {/* FAQ Categories */}
// //                 <section className="py-20">
// //                     <div className="max-w-4xl mx-auto px-6">
// //                         {faqCategories.map((category, categoryIndex) => (
// //                             <motion.div
// //                                 key={category.title}
// //                                 initial={{ opacity: 0, y: 20 }}
// //                                 whileInView={{ opacity: 1, y: 0 }}
// //                                 viewport={{ once: true }}
// //                                 className="mb-16"
// //                             >
// //                                 <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
// //                                     {category.title}
// //                                 </h2>
// //                                 <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
// //                                     {category.description}
// //                                 </p>
// //                                 <div className="space-y-4">
// //                                     {category.questions.map((item, questionIndex) => (
// //                                         <FAQItem
// //                                             key={questionIndex}
// //                                             question={item.question}
// //                                             answer={item.answer}
// //                                             isOpen={isQuestionOpen(categoryIndex, questionIndex)}
// //                                             toggleOpen={() => toggleQuestion(categoryIndex, questionIndex)}
// //                                         />
// //                                     ))}
// //                                 </div>
// //                             </motion.div>
// //                         ))}
// //                     </div>
// //                 </section>

// //                 {/* CTA Section */}
// //                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
// //                     <div className="max-w-3xl mx-auto px-6 text-center">
// //                         <motion.div
// //                             initial={{ opacity: 0, y: 20 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true }}
// //                             className="space-y-8"
// //                         >
// //                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
// //                                 ¿Necesitas ayuda con tu proyecto web?
// //                             </h2>
// //                             <p className="text-xl text-gray-600 dark:text-gray-400">
// //                                 Nuestro equipo está listo para ayudarte a crear tu presencia profesional en línea.
// //                                 Aquí algunas razones para elegirnos:
// //                             </p>
// //                             <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
// //                                 <div className="space-y-4">
// //                                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// //                                         Por qué elegirnos
// //                                     </h3>
// //                                     <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
// //                                         <li>Más de 5 años de experiencia en desarrollo web</li>
// //                                         <li>Equipo profesional especializado</li>
// //                                         <li>Diseños personalizados y únicos</li>
// //                                         <li>Soporte técnico garantizado</li>
// //                                         <li>Precios competitivos en el mercado</li>
// //                                         <li>Entrega puntual de proyectos</li>
// //                                     </ul>
// //                                 </div>
// //                                 <div className="space-y-4">
// //                                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
// //                                         Beneficios Incluidos
// //                                     </h3>
// //                                     <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
// //                                         <li>Hosting premium por 1 año</li>
// //                                         <li>Dominio .com gratuito</li>
// //                                         <li>Certificado SSL incluido</li>
// //                                         <li>Optimización SEO básica</li>
// //                                         <li>Integración con redes sociales</li>
// //                                         <li>Capacitación de uso básico</li>
// //                                     </ul>
// //                                 </div>
// //                             </div>
                            
// //                             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
// //                                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
// //                                     Proceso de Trabajo Simplificado
// //                                 </h3>
// //                                 <ol className="list-decimal pl-5 text-left space-y-2 text-gray-600 dark:text-gray-400">
// //                                     <li>Consulta inicial gratuita para entender tus necesidades</li>
// //                                     <li>Propuesta detallada y presupuesto transparente</li>
// //                                     <li>Diseño y desarrollo según tus requerimientos</li>
// //                                     <li>Revisiones y ajustes según feedback</li>
// //                                     <li>Pruebas exhaustivas antes del lanzamiento</li>
// //                                     <li>Capacitación y soporte post-lanzamiento</li>
// //                                 </ol>
// //                             </div>
// //                             </p>
// //                             <div className="space-y-4">
// //                                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
// //                                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
// //                                         Garantías de Nuestro Servicio
// //                                     </h3>
// //                                     <ul className="grid md:grid-cols-2 gap-4 text-left">
// //                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// //                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
// //                                             Satisfacción garantizada
// //                                         </li>
// //                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// //                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
// //                                             Soporte prioritario
// //                                         </li>
// //                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// //                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
// //                                             Tiempo de respuesta <24h
// //                                         </li>
// //                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
// //                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
// //                                             Mantenimiento mensual
// //                                         </li>
// //                                     </ul>
// //                                 </div>
// //                             </div>

// //                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //                                 <a
// //                                     href="/web"
// //                                     className="inline-flex items-center justify-center bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
// //                                 >
// //                                     Ver Nuestros Planes
// //                                 </a>
// //                                 <a
// //                                     href="https://wa.me/593984264910"
// //                                     className="inline-flex items-center justify-center border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
// //                                 >
// //                                     Contactar por WhatsApp
// //                                 </a>
// //                             </div>


// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { ChevronDown, ChevronUp, ExternalLink, Code, Smartphone, Settings, MessageSquare, Search, Shield, Globe } from 'lucide-react'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'

// // Types
// interface FAQCategory {
//     title: string;
//     description: string;
//     questions: {
//         question: string;
//         answer: string | React.ReactNode;
//     }[];
// }

// // FAQ Categories Data
// const faqCategories: FAQCategory[] = [
//     {
//         title: "Creación de Páginas Web",
//         description: "Información básica sobre cómo comenzar tu presencia en línea",
//         questions: [
//             {
//                 question: "¿Cómo puedo crear mi página web para mi negocio?",
//                 answer: (
//                     <div className="space-y-4">
//                         <p>Para crear una página web profesional para tu negocio, te recomendamos seguir estos pasos:</p>
//                         <ol className="list-decimal pl-5 space-y-2">
//                             <li>Define los objetivos y necesidades de tu sitio web</li>
//                             <li>Elige un dominio que represente tu marca</li>
//                             <li>Selecciona un hosting confiable</li>
//                             <li>Diseña la estructura y contenido de tu sitio</li>
//                             <li>Desarrolla con tecnologías modernas y responsivas</li>
//                             <li>Optimiza para motores de búsqueda (SEO)</li>
//                         </ol>
//                         <p>En Torisoftt nos encargamos de todo el proceso, desde el registro del dominio hasta el desarrollo y mantenimiento de tu sitio web.</p>
//                     </div>
//                 )
//             },
//             {
//                 question: "¿Dónde hacer una página web gratis para mi negocio?",
//                 answer: (
//                     <div className="space-y-4">
//                         <p>Aunque existen plataformas gratuitas para crear páginas web, estas tienen limitaciones importantes:</p>
//                         <ul className="list-disc pl-5 space-y-2">
//                             <li>Funcionalidades básicas y limitadas</li>
//                             <li>No tienes un dominio propio profesional</li>
//                             <li>Publicidad de terceros en tu sitio</li>
//                             <li>Limitaciones de personalización</li>
//                             <li>Poco control sobre SEO y rendimiento</li>
//                         </ul>
//                         <p>Para un negocio serio, recomendamos invertir en una solución profesional que te brinde control total y una imagen profesional. Nuestros planes comienzan desde $199 con dominio incluido.</p>
//                     </div>
//                 )
//             },
//             {
//                 question: "¿Dónde puedo crear una página web con dominio propio?",
//                 answer: (
//                     <div className="space-y-4">
//                         <p>En Torisoftt te ofrecemos una solución completa que incluye:</p>
//                         <ul className="list-disc pl-5 space-y-2">
//                             <li>Registro de dominio personalizado</li>
//                             <li>Hosting premium con alto rendimiento</li>
//                             <li>Certificado SSL gratuito</li>
//                             <li>Correos corporativos</li>
//                             <li>Soporte técnico especializado</li>
//                         </ul>
//                         <p>Nos encargamos de toda la configuración técnica para que tu sitio esté en línea rápidamente.</p>
//                     </div>
//                 )
//             },
//             {
//                 question: "¿Cómo crear una página web con dominio propio?",
//                 answer: (
//                     <div className="space-y-4">
//                         <p>El proceso de crear una página web con dominio propio incluye:</p>
//                         <ol className="list-decimal pl-5 space-y-2">
//                             <li>Seleccionar y registrar tu dominio (.com, .ec, etc.)</li>
//                             <li>Contratar un servicio de hosting confiable</li>
//                             <li>Configurar los DNS y nameservers</li>
//                             <li>Instalar certificado SSL</li>
//                             <li>Desarrollar y publicar tu sitio web</li>
//                         </ol>
//                         <p>Con nuestros servicios, nos encargamos de todo el proceso técnico mientras tú te enfocas en tu negocio.</p>
//                     </div>
//                 )
//             }
//         ]
//     },
//     {
//         title: "Características y Beneficios",
//         description: "Descubre las ventajas de nuestros servicios web",
//         questions: [
//             {
//                 question: "¿Qué incluye el servicio de desarrollo web?",
//                 answer: (
//                     <div className="space-y-4">
//                         <p>Nuestro servicio de desarrollo web incluye:</p>
//                         <ul className="list-disc pl-5 space-y-2">
//                             <li>Diseño web personalizado y responsive</li>
//                             <li>Dominio .com gratuito por un año</li>
//                             <li>Hosting premium incluido</li>
//                             <li>Certificado SSL gratuito</li>
//                             <li>Optimización SEO básica</li>
//                             <li>Integración con redes sociales</li>
//                             <li>Soporte técnico</li>
//                         </ul>
//                     </div>
//                 )
//             },
//             {
//                 question: "¿Qué tipos de páginas web desarrollan?",
//                 answer: (
//                     <div className="space-y-4">
//                         <p>Desarrollamos diversos tipos de sitios web:</p>
//                         <ul className="list-disc pl-5 space-y-2">
//                             <li>Landing Pages profesionales</li>
//                             <li>Sitios web corporativos</li>
//                             <li>Tiendas online (E-commerce)</li>
//                             <li>Blogs y portales de contenido</li>
//                             <li>Catálogos digitales</li>
//                             <li>Páginas web personales</li>
//                         </ul>
//                     </div>
//                 )
//             }
//         ]
//     }
// ];

// // FAQ Item Component
// interface FAQItemProps {
//     question: string;
//     answer: string | React.ReactNode;
//     isOpen: boolean;
//     toggleOpen: () => void;
// }

// const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => (
//     <div className="border-b border-gray-200 dark:border-gray-700">
//         <button
//             onClick={toggleOpen}
//             className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
//         >
//             <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
//             {isOpen ? (
//                 <ChevronUp className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
//             ) : (
//                 <ChevronDown className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
//             )}
//         </button>
//         <AnimatePresence initial={false}>
//             {isOpen && (
//                 <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                 >
//                     <div className="pb-4 text-gray-600 dark:text-gray-400">
//                         {answer}
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     </div>
// );

// // Main Page Component
// export default function FAQPage() {
//     const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

//     const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
//         const key = `${categoryIndex}-${questionIndex}`;
//         setOpenQuestions(prev => ({
//             ...prev,
//             [key]: !prev[key]
//         }));
//     };

//     const isQuestionOpen = (categoryIndex: number, questionIndex: number) => {
//         const key = `${categoryIndex}-${questionIndex}`;
//         return openQuestions[key] || false;
//     };

//     return (
//         <>
//             <Navbar />
//             <main className="min-h-screen bg-white dark:bg-gray-900">
//                 {/* Hero Section */}
//                 <section className="pt-40 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.div
//                             initial={{opacity: 0, y: 20}}
//                             animate={{opacity: 1, y: 0}}
//                             className="max-w-3xl mx-auto text-center"
//                         >
//                             <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
//                                 Preguntas Frecuentes sobre Diseño Web
//                             </h1>
//                             <p className="text-xl text-gray-600 dark:text-gray-400">
//                                 Resolvemos tus dudas sobre cómo crear tu presencia profesional en línea
//                             </p>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* FAQ Categories */}
//                 <section className="py-20">
//                     <div className="max-w-4xl mx-auto px-6">
//                         {faqCategories.map((category, categoryIndex) => (
//                             <motion.div
//                                 key={category.title}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 className="mb-16"
//                             >
//                                 <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
//                                     {category.title}
//                                 </h2>
//                                 <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
//                                     {category.description}
//                                 </p>
//                                 <div className="space-y-4">
//                                     {category.questions.map((item, questionIndex) => (
//                                         <FAQItem
//                                             key={questionIndex}
//                                             question={item.question}
//                                             answer={item.answer}
//                                             isOpen={isQuestionOpen(categoryIndex, questionIndex)}
//                                             toggleOpen={() => toggleQuestion(categoryIndex, questionIndex)}
//                                         />
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-3xl mx-auto px-6 text-center">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="space-y-8"
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
//                                 ¿Necesitas ayuda con tu proyecto web?
//                             </h2>
//                             <p className="text-xl text-gray-600 dark:text-gray-400">
//                                 Nuestro equipo está listo para ayudarte a crear tu presencia profesional en línea.
//                                 Aquí algunas razones para elegirnos:
//                             </p>

//                             {/* Por qué elegirnos y Beneficios */}
//                             <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
//                                 <div className="space-y-4">
//                                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                         Por qué elegirnos
//                                     </h3>
//                                     <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
//                                         <li>Más de 5 años de experiencia en desarrollo web</li>
//                                         <li>Equipo profesional especializado</li>
//                                         <li>Diseños personalizados y únicos</li>
//                                         <li>Soporte técnico garantizado</li>
//                                         <li>Precios competitivos en el mercado</li>
//                                         <li>Entrega puntual de proyectos</li>
//                                     </ul>
//                                 </div>
//                                 <div className="space-y-4">
//                                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                         Beneficios Incluidos
//                                     </h3>
//                                     <ul className="space-y-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
//                                         <li>Hosting premium por 1 año</li>
//                                         <li>Dominio .com gratuito</li>
//                                         <li>Certificado SSL incluido</li>
//                                         <li>Optimización SEO básica</li>
//                                         <li>Integración con redes sociales</li>
//                                         <li>Capacitación de uso básico</li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             {/* Proceso de Trabajo */}
//                             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
//                                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                                     Proceso de Trabajo Simplificado
//                                 </h3>
//                                 <ol className="list-decimal pl-5 text-left space-y-2 text-gray-600 dark:text-gray-400">
//                                     <li>Consulta inicial gratuita para entender tus necesidades</li>
//                                     <li>Propuesta detallada y presupuesto transparente</li>
//                                     <li>Diseño y desarrollo según tus requerimientos</li>
//                                     <li>Revisiones y ajustes según feedback</li>
//                                     <li>Pruebas exhaustivas antes del lanzamiento</li>
//                                     <li>Capacitación y soporte post-lanzamiento</li>
//                                 </ol>
//                             </div>

//                             {/* Garantías */}
//                             <div className="space-y-4">
//                                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
//                                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//                                         Garantías de Nuestro Servicio
//                                     </h3>
//                                     <ul className="grid md:grid-cols-2 gap-4 text-left">
//                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
//                                             Satisfacción garantizada
//                                         </li>
//                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
//                                             Soporte prioritario
//                                         </li>
//                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
//                                             Tiempo de respuesta menos de 24h
//                                         </li>
//                                         <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                             <span className="text-accent-red dark:text-accent-yellow">✓</span>
//                                             Mantenimiento mensual
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                 <a
//                                     href="/web"
//                                     className="inline-flex items-center justify-center bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                                 >
//                                     Ver Nuestros Planes
//                                 </a>
//                                 <a
//                                     href="https://wa.me/593984264910?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20de%20desarrollo%20web"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center justify-center border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                                 >
//                                     Contactar por WhatsApp
//                                 </a>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* Related Services Section */}
//                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-3xl mx-auto px-6">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="space-y-8"
//                         >
//                             <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
//                                 Servicios Relacionados
//                             </h2>
//                             <div className="grid md:grid-cols-3 gap-6">
//                                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
//                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                         Desarrollo E-commerce
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                         Crea tu tienda online y vende en internet
//                                     </p>
//                                     <a href="/web#planes" 
//                                        className="text-accent-red dark:text-accent-yellow hover:underline">
//                                         Más información →
//                                     </a>
//                                 </div>
//                                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
//                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                         Marketing Digital
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                         Promociona tu sitio web y aumenta ventas
//                                     </p>
//                                     <a href="/marketing" 
//                                        className="text-accent-red dark:text-accent-yellow hover:underline">
//                                         Más información →
//                                     </a>
//                                 </div>
//                                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
//                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                         Mantenimiento Web
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                         Mantén tu sitio actualizado y seguro
//                                     </p>
//                                     <a href="/mantenimiento" 
//                                        className="text-accent-red dark:text-accent-yellow hover:underline">
//                                         Más información →
//                                     </a>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* Contact Section */}
//                 <section className="py-20">
//                     <div className="max-w-3xl mx-auto px-6 text-center">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
//                         >
//                             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//                                 ¿Aún tienes dudas?
//                             </h2>
//                             <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
//                                 Nuestro equipo está listo para responder todas tus preguntas y ayudarte a crear tu presencia en línea.
//                             </p>
//                             <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                                         Horario de Atención
//                                     </h3>
//                                     <ul className="space-y-2 text-gray-600 dark:text-gray-400">
//                                         <li>Lunes a Viernes: 9:00 - 18:00</li>
//                                         <li>Sábados: 9:00 - 13:00</li>
//                                         <li>Domingos: Cerrado</li>
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                                         Medios de Contacto
//                                     </h3>
//                                     <ul className="space-y-2 text-gray-600 dark:text-gray-400">
//                                         <li>WhatsApp: +593 98 426 4910</li>
//                                         <li>Email: info@torisoftt.com</li>
//                                         <li>Cuenca, Ecuador</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                 <a
//                                     href="https://wa.me/593984264910?text=Hola%2C%20tengo%20algunas%20dudas%20sobre%20sus%20servicios%20web"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center justify-center bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                                 >
//                                     Contactar por WhatsApp
//                                 </a>
//                                 <a
//                                     href="mailto:info@torisoftt.com"
//                                     className="inline-flex items-center justify-center border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                                 >
//                                     Enviar Email
//                                 </a>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </>
//     );
// }


'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    ChevronDown, 
    ChevronUp,
    Users,
    Server,
    Search,
    Rocket,
    Mail,
    Shield,
    Code,
    Smartphone,
    Settings,
    MessageSquare,
    CheckCircle,
    Clock,
    Award,
    Target,
    Heart,
    Globe
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

// Animation Variants
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

// Interfaces
interface FAQQuestion {
    question: string;
    answer: string | React.ReactNode;
}

interface FAQCategory {
    title: string;
    description: string;
    questions: FAQQuestion[];
}

interface ProcessStep {
    icon: React.ElementType;
    title: string;
    description: string;
    progress: number;
    details: string[];
}

interface Tool {
    name: string;
    icon: string;
}

interface BenefitData {
    icon: React.ElementType;
    title: string;
    items: string[];
}

interface FAQItemProps {
    question: string;
    answer: string | React.ReactNode;
    isOpen: boolean;
    toggleOpen: () => void;
}

interface ProcessCardProps {
    step: ProcessStep;
}

interface BenefitsCardProps {
    data: BenefitData;
}

// Data
const tools: Tool[] = [
    { name: 'Figma', icon: '/tools/figma.svg' },
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'Next.js', icon: '/tech/nextjs.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Tailwind', icon: '/tech/tailwind.svg' }
]

const benefitsData: BenefitData[] = [
    {
        icon: Award,
        title: 'Por qué elegirnos',
        items: [
            'Más de 5 años de experiencia en desarrollo web',
            'Equipo profesional especializado',
            'Diseños personalizados y únicos',
            'Soporte técnico garantizado',
            'Precios competitivos en el mercado',
            'Entrega puntual de proyectos'
        ]
    },
    {
        icon: Target,
        title: 'Beneficios Incluidos',
        items: [
            'Hosting premium por 1 año',
            'Dominio .com gratuito',
            'Certificado SSL incluido',
            'Optimización SEO básica',
            'Integración con redes sociales',
            'Capacitación de uso básico'
        ]
    }
]

const processSteps: ProcessStep[] = [
    {
        icon: Search,
        title: 'Descubrimiento',
        description: 'Análisis inicial y planificación',
        progress: 20,
        details: [
            'Reunión de kickoff',
            'Análisis de requerimientos',
            'Definición de objetivos',
            'Planificación del proyecto'
        ]
    },
    {
        icon: Code,
        title: 'Desarrollo',
        description: 'Construcción de tu sitio web',
        progress: 40,
        details: [
            'Diseño de interfaces',
            'Desarrollo frontend',
            'Integración de funcionalidades',
            'Control de calidad'
        ]
    },
    {
        icon: Shield,
        title: 'Pruebas',
        description: 'Verificación y optimización',
        progress: 60,
        details: [
            'Testing exhaustivo',
            'Optimización de rendimiento',
            'Ajustes de seguridad',
            'Validación de funciones'
        ]
    },
    {
        icon: Rocket,
        title: 'Lanzamiento',
        description: 'Despliegue y configuración',
        progress: 80,
        details: [
            'Configuración de hosting',
            'Despliegue del sitio',
            'Pruebas finales',
            'Entrega al cliente'
        ]
    },
    {
        icon: Heart,
        title: 'Soporte',
        description: 'Mantenimiento continuo',
        progress: 100,
        details: [
            'Monitoreo constante',
            'Actualizaciones de seguridad',
            'Soporte técnico',
            'Mejoras continuas'
        ]
    }
]

const faqCategories: FAQCategory[] = [
    {
        title: "Desarrollo Web",
        description: "Respuestas sobre nuestros servicios de desarrollo web",
        questions: [
            {
                question: "¿Cómo puedo crear mi página web para mi negocio?",
                answer: (
                    <div className="space-y-4">
                        <p>Para crear una página web profesional para tu negocio, te recomendamos seguir estos pasos:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Define los objetivos y necesidades de tu sitio web</li>
                            <li>Elige un dominio que represente tu marca</li>
                            <li>Selecciona un hosting confiable</li>
                            <li>Diseña la estructura y contenido de tu sitio</li>
                            <li>Desarrolla con tecnologías modernas y responsivas</li>
                            <li>Optimiza para motores de búsqueda (SEO)</li>
                        </ol>
                        <p>En Torisoftt nos encargamos de todo el proceso, desde el registro del dominio hasta el desarrollo y mantenimiento de tu sitio web.</p>
                    </div>
                )
            },
            {
                question: "¿Dónde hacer una página web gratis para mi negocio?",
                answer: (
                    <div className="space-y-4">
                        <p>Aunque existen plataformas gratuitas para crear páginas web, estas tienen limitaciones importantes:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Funcionalidades básicas y limitadas</li>
                            <li>No tienes un dominio propio profesional</li>
                            <li>Publicidad de terceros en tu sitio</li>
                            <li>Limitaciones de personalización</li>
                            <li>Poco control sobre SEO y rendimiento</li>
                        </ul>
                        <p>Para un negocio serio, recomendamos invertir en una solución profesional que te brinde control total y una imagen profesional. Nuestros planes comienzan desde $199 con dominio incluido.</p>
                    </div>
                )
            }
        ]
    },
    {
        title: "Planes y Servicios",
        description: "Información detallada sobre nuestros planes y servicios",
        questions: [
            {
                question: "¿Qué incluyen los planes de desarrollo web?",
                answer: (
                    <div className="space-y-4">
                        <p>Nuestros planes incluyen:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Diseño web personalizado y responsivo</li>
                            <li>Dominio .com gratuito por un año</li>
                            <li>Hosting premium incluido</li>
                            <li>Certificado SSL gratuito</li>
                            <li>Optimización SEO básica</li>
                            <li>Soporte técnico</li>
                        </ul>
                    </div>
                )
            },
            {
                question: "¿Ofrecen mantenimiento web?",
                answer: (
                    <div className="space-y-4">
                        <p>Sí, ofrecemos servicios de mantenimiento que incluyen:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Actualizaciones de seguridad</li>
                            <li>Backups regulares</li>
                            <li>Monitoreo de rendimiento</li>
                            <li>Soporte técnico continuo</li>
                            <li>Actualizaciones de contenido</li>
                        </ul>
                    </div>
                )
            }
        ]
    }
]

// Components
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => (
    <div className="border-b border-gray-200 dark:border-gray-700">
        <button
            onClick={toggleOpen}
            className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
            {isOpen ? (
                <ChevronUp className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
            ) : (
                <ChevronDown className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
            )}
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="pb-4 text-gray-600 dark:text-gray-400">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
)

const ProcessCard: React.FC<ProcessCardProps> = ({ step }) => {
    const Icon = step.icon
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${step.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent-red dark:bg-accent-yellow"
                        />
                    </div>
                </div>
                <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                            <CheckCircle className="w-4 h-4 text-accent-red dark:text-accent-yellow flex-shrink-0" />
                            <span>{detail}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}



const BenefitsCard: React.FC<BenefitsCardProps> = ({ data }) => {
    const Icon = data.icon;
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {data.title}
                </h3>
            </div>
            <ul className="space-y-3">
                {data.items.map((item, idx) => (
                    <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

const FAQPage: React.FC = () => {
    const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

    const toggleQuestion = (categoryIndex: number, questionIndex: number): void => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenQuestions(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const isQuestionOpen = (categoryIndex: number, questionIndex: number): boolean => {
        const key = `${categoryIndex}-${questionIndex}`;
        return openQuestions[key] || false;
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900">
                {/* Hero Section */}
                <section className="pt-40 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                                Preguntas Frecuentes sobre Diseño Web
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                Resolvemos tus dudas sobre cómo crear tu presencia profesional en línea
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Tools Section */}
                <section className="py-10 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-center items-center gap-12 flex-wrap">
                            {tools.map((tool) => (
                                <div key={tool.name} className="text-center">
                                    <Image
                                        src={tool.icon}
                                        alt={`${tool.name} icon`}
                                        width={40}
                                        height={40}
                                        className="mx-auto mb-2 dark:filter dark:brightness-200"
                                    />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{tool.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Por qué Trabajar con Nosotros
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {benefitsData.map((benefit, index) => (
                                <BenefitsCard key={index} data={benefit} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Nuestro Proceso de Trabajo
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {processSteps.map((step, index) => (
                                <ProcessCard key={index} step={step} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            className="space-y-8"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: true }}
                        >
                            {faqCategories.map((category, categoryIndex) => (
                                <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                        {category.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {category.description}
                                    </p>
                                    <div className="space-y-4">
                                        {category.questions.map((item, questionIndex) => (
                                            <FAQItem
                                                key={questionIndex}
                                                question={item.question}
                                                answer={item.answer}
                                                isOpen={isQuestionOpen(categoryIndex, questionIndex)}
                                                toggleOpen={() => toggleQuestion(categoryIndex, questionIndex)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
                    <div className="max-w-3xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                                ¿Aún tienes dudas?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
                                Nuestro equipo está listo para responder todas tus preguntas y ayudarte a crear tu presencia en línea.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Horario de Atención
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Clock className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                                            Lunes a Viernes: 9:00 - 18:00
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Clock className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                                            Sábados: 9:00 - 13:00
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Clock className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                                            Domingos: Cerrado
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Medios de Contacto
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <MessageSquare className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                                            WhatsApp: +593 98 426 4910
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Mail className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                                            Email: info@torisoftt.com
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                            <Globe className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                                            Cuenca, Ecuador
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="https://wa.me/593984264910?text=Hola%2C%20tengo%20algunas%20dudas%20sobre%20sus%20servicios%20web"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <MessageSquare className="w-5 h-5 mr-2" />
                                    Contactar por WhatsApp
                                </motion.a>
                                <motion.a
                                    href="mailto:info@torisoftt.com"
                                    className="inline-flex items-center justify-center border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Enviar Email
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FAQPage;