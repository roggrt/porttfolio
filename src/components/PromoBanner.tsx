// // const PromoBanner = () => {
// //     return (
// //         <div className="w-full bg-gradient-to-r from-accent-red/90 to-accent-red dark:from-accent-yellow/90 dark:to-accent-yellow text-white dark:text-gray-900 py-6 px-4 sm:px-6 lg:px-8">
// //             <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
// //                 <div className="flex items-center gap-4">
// //                     <div className="hidden sm:block">
// //                         <span className="text-4xl">🚀</span>
// //                     </div>
// //                     <div>
// //                         <h2 className="text-xl sm:text-2xl font-bold mb-1">¡OFERTA ESPECIAL EN DISEÑO WEB!</h2>
// //                         <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm sm:text-base">
// //               <span className="flex items-center gap-2">
// //                 ✓ Diseño Web Profesional
// //               </span>
// //                             <span className="flex items-center gap-2">
// //                 ✓ Maquetación Responsive
// //               </span>
// //                             <span className="flex items-center gap-2">
// //                 ✓ Asesoría Personalizada
// //               </span>
// //                         </div>
// //                     </div>
// //                 </div>
// //
// //                 <div className="flex flex-col sm:flex-row items-center gap-4">
// //                     <div className="font-bold text-xl sm:text-2xl">
// //                         Solo $150
// //                     </div>
// //                     <a
// //                         href={`https://wa.me/593984264910?text=${encodeURIComponent("¡Hola! Me interesa la promoción de diseño web. ¿Podrían darme más información?")}`}
// //                         className="bg-white dark:bg-gray-900 text-accent-red dark:text-accent-yellow hover:bg-opacity-90 font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105"
// //                     >
// //                         ¡Contáctanos!
// //                     </a>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default PromoBanner;
//
// 'use client';
//
// import { motion } from 'framer-motion';
// import { Code2, Rocket, Palette, ChevronRight } from 'lucide-react';
//
// const PromoBanner = () => {
//     const containerVariants = {
//         hidden: { opacity: 0, y: -20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 staggerChildren: 0.1
//             }
//         }
//     };
//
//     const itemVariants = {
//         hidden: { opacity: 0, x: -20 },
//         visible: { opacity: 1, x: 0 }
//     };
//
//     return (
//         <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="w-full bg-gradient-to-r from-accent-red/90 to-accent-red dark:from-accent-yellow/90 dark:to-accent-yellow text-white dark:text-gray-900 py-6 px-4 sm:px-6 lg:px-8"
//         >
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//                     <motion.div variants={itemVariants} className="flex items-center gap-4">
//                         <motion.div
//                             animate={{ rotate: [0, -10, 10, -10, 0] }}
//                             transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
//                             className="hidden sm:block"
//                         >
//                             <Rocket className="w-10 h-10" />
//                         </motion.div>
//                         <div>
//                             <h2 className="text-xl sm:text-2xl font-bold mb-2">¡OFERTA ESPECIAL EN DISEÑO + DESARROLLO!</h2>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
//                                 <motion.div
//                                     variants={itemVariants}
//                                     className="flex items-center gap-2"
//                                 >
//                                     <Palette className="w-4 h-4" />
//                                     <span>Diseño UI/UX Pro</span>
//                                 </motion.div>
//                                 <motion.div
//                                     variants={itemVariants}
//                                     className="flex items-center gap-2"
//                                 >
//                                     <Code2 className="w-4 h-4" />
//                                     <span>Desarrollo Full Stack</span>
//                                 </motion.div>
//                                 <motion.div
//                                     variants={itemVariants}
//                                     className="flex items-center gap-2"
//                                 >
//                                     <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
//                                         <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"/>
//                                     </svg>
//                                     <span>Soporte 24/7</span>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </motion.div>
//
//                     <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
//                         <motion.div
//                             animate={{ scale: [1, 1.1, 1] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                             className="font-bold text-2xl sm:text-3xl"
//                         >
//                             $150
//                             <span className="text-sm line-through ml-2 opacity-75">$300</span>
//                         </motion.div>
//                         <motion.a
//                             href={`https://wa.me/593984264910?text=${encodeURIComponent("¡Hola! Me interesa la promoción de diseño + desarrollo web. ¿Podrían darme más información?")}`}
//                             className="group flex items-center gap-2 bg-white dark:bg-gray-900 text-accent-red dark:text-accent-yellow hover:bg-opacity-90 font-bold py-2 px-6 rounded-lg transition-all"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             ¡Contáctanos!
//                             <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </motion.a>
//                     </motion.div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };
//
// export default PromoBanner;

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Rocket, Palette, ChevronRight, Gift } from 'lucide-react';

const PromoBanner = () => {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                style={{ scale, opacity }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-accent-red dark:border-accent-yellow"
            >
                {/* Decorative top bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-accent-red via-red-400 to-accent-red dark:from-accent-yellow dark:via-yellow-400 dark:to-accent-yellow" />

                <div className="p-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <motion.div
                            className="flex items-start gap-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="hidden sm:block"
                                animate={{
                                    rotate: [0, -10, 10, -10, 0],
                                    scale: [1, 1.1, 1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <Gift className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
                            </motion.div>

                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                        ¡OFERTA ESPECIAL!
                                    </h2>
                                    <p className="text-accent-red/90 dark:text-accent-yellow/90 font-semibold">
                                        Diseño + Desarrollo Web Profesional
                                    </p>
                                </motion.div>

                                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                                    {[
                                        { icon: Palette, text: 'Diseño UI/UX Premium' },
                                        { icon: Code2, text: 'Desarrollo Full Stack' },
                                        { icon: Rocket, text: 'Deploy Incluido' }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={item.text}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl"
                                        >
                                            <item.icon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="text-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-4xl font-bold text-accent-red dark:text-accent-yellow"
                                >
                                    $150
                                </motion.div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    <span className="line-through">$300</span>
                                    <span className="ml-2">50% OFF</span>
                                </div>
                            </div>

                            <motion.a
                                href={`https://wa.me/593984264910?text=${encodeURIComponent("¡Hola! Me interesa la promoción de diseño + desarrollo web.")}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-2 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 hover:bg-opacity-90 font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
                            >
                                ¡Aprovechar Oferta!
                                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PromoBanner;