// // // // src/components/PromoPopup.jsx
// // // 'use client';
// // //
// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { X } from 'lucide-react';
// // //
// // // const PromoPopup = () => {
// // //     const [isVisible, setIsVisible] = useState(true);
// // //
// // //     useEffect(() => {
// // //         const timer = setTimeout(() => {
// // //             if (!localStorage.getItem('promoPopupClosed')) {
// // //                 setIsVisible(true);
// // //             }
// // //         }, 5000);
// // //
// // //         return () => clearTimeout(timer);
// // //     }, []);
// // //
// // //     const handleClose = () => {
// // //         setIsVisible(false);
// // //         localStorage.setItem('promoPopupClosed', 'true');
// // //     };
// // //
// // //     const handleWhatsApp = () => {
// // //         const message = "¡Hola! Me interesa la promoción de diseño web por $150. ¿Podrían darme más información?";
// // //         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
// // //         handleClose();
// // //     };
// // //
// // //     return (
// // //         <AnimatePresence>
// // //             {isVisible && (
// // //                 <motion.div
// // //                     initial={{ opacity: 0, scale: 0.9 }}
// // //                     animate={{ opacity: 1, scale: 1 }}
// // //                     exit={{ opacity: 0, scale: 0.9 }}
// // //                     className="fixed bottom-4 right-4 z-50 max-w-sm"
// // //                 >
// // //                     <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 border border-accent-red dark:border-accent-yellow">
// // //                         <button
// // //                             onClick={handleClose}
// // //                             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// // //                         >
// // //                             <X className="w-5 h-5" />
// // //                         </button>
// // //
// // //                         <h3 className="text-xl font-bold mb-2 text-accent-red dark:text-accent-yellow">
// // //                             ¡Oferta Especial!
// // //                         </h3>
// // //
// // //                         <p className="text-gray-600 dark:text-gray-400 mb-4">
// // //                             Diseño web profesional por solo $150. Incluye maquetación y asesoría personalizada.
// // //                         </p>
// // //
// // //                         <button
// // //                             onClick={handleWhatsApp}
// // //                             className="w-full bg-accent-red hover:bg-accent-red/90 dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white dark:text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors"
// // //                         >
// // //                             Consultar por WhatsApp
// // //                         </button>
// // //                     </div>
// // //                 </motion.div>
// // //             )}
// // //         </AnimatePresence>
// // //     );
// // // };
// // //
// // // export default PromoPopup;
// //
// // 'use client';
// //
// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { X, Maximize2 } from 'lucide-react';
// //
// // const PromoPopup = () => {
// //     const [isVisible, setIsVisible] = useState(false);
// //     const [isMinimized, setIsMinimized] = useState(false);
// //
// //     useEffect(() => {
// //         const timer = setTimeout(() => {
// //             if (!localStorage.getItem('promoPopupDismissed')) {
// //                 setIsVisible(true);
// //             } else if (localStorage.getItem('promoPopupMinimized') === 'true') {
// //                 setIsMinimized(true);
// //                 setIsVisible(true);
// //             }
// //         }, 5000);
// //
// //         return () => clearTimeout(timer);
// //     }, []);
// //
// //     const handleClose = () => {
// //         setIsMinimized(true);
// //         localStorage.setItem('promoPopupDismissed', 'true');
// //         localStorage.setItem('promoPopupMinimized', 'true');
// //     };
// //
// //     const handleMaximize = () => {
// //         setIsMinimized(false);
// //     };
// //
// //     const handleWhatsApp = () => {
// //         const message = "¡Hola! Me interesa la promoción de diseño web por $150. ¿Podrían darme más información?";
// //         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
// //     };
// //
// //     return (
// //         <AnimatePresence>
// //             {isVisible && (
// //                 <motion.div
// //                     initial={isMinimized ? { opacity: 0, x: 100 } : { opacity: 0, scale: 0.9 }}
// //                     animate={isMinimized ? { opacity: 1, x: 0 } : { opacity: 1, scale: 1 }}
// //                     exit={{ opacity: 0, scale: 0.9 }}
// //                     className={`fixed bottom-4 right-4 z-50 ${isMinimized ? 'w-auto' : 'max-w-sm'}`}
// //                 >
// //                     {isMinimized ? (
// //                         <button
// //                             onClick={handleMaximize}
// //                             className="flex items-center gap-2 px-4 py-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 rounded-full shadow-lg hover:opacity-90 transition-all"
// //                         >
// //                             <Maximize2 className="w-4 h-4" />
// //                             <span className="font-medium">Ver Oferta</span>
// //                         </button>
// //                     ) : (
// //                         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 border border-accent-red dark:border-accent-yellow">
// //                             <button
// //                                 onClick={handleClose}
// //                                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //                             >
// //                                 <X className="w-5 h-5" />
// //                             </button>
// //
// //                             <h3 className="text-xl font-bold mb-2 text-accent-red dark:text-accent-yellow">
// //                                 ¡Oferta Especial!
// //                             </h3>
// //
// //                             <p className="text-gray-600 dark:text-gray-400 mb-4">
// //                                 Diseño web profesional por solo $150. Incluye maquetación y asesoría personalizada.
// //                             </p>
// //
// //                             <button
// //                                 onClick={handleWhatsApp}
// //                                 className="w-full bg-accent-red hover:bg-accent-red/90 dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white dark:text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors"
// //                             >
// //                                 Consultar por WhatsApp
// //                             </button>
// //                         </div>
// //                     )}
// //                 </motion.div>
// //             )}
// //         </AnimatePresence>
// //     );
// // };
// //
// // export default PromoPopup;
//
//
// 'use client';
//
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Maximize2, ChevronRight, Sparkles } from 'lucide-react';
// import Image from 'next/image';
//
// const PromoPopup = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [isMinimized, setIsMinimized] = useState(false);
//
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (!localStorage.getItem('promoPopupDismissed')) {
//                 setIsVisible(true);
//             } else if (localStorage.getItem('promoPopupMinimized') === 'true') {
//                 setIsMinimized(true);
//                 setIsVisible(true);
//             }
//         }, 5000);
//
//         return () => clearTimeout(timer);
//     }, []);
//
//     const handleClose = () => {
//         setIsMinimized(true);
//         localStorage.setItem('promoPopupDismissed', 'true');
//         localStorage.setItem('promoPopupMinimized', 'true');
//     };
//
//     const handleMaximize = () => {
//         setIsMinimized(false);
//     };
//
//     const handleWhatsApp = () => {
//         const message = "¡Hola! Me interesa la promoción de diseño web por $150. ¿Podrían darme más información?";
//         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
//     };
//
//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     initial={isMinimized ? { opacity: 0, x: 100 } : { opacity: 0, y: 50 }}
//                     animate={isMinimized ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     className={`fixed bottom-4 right-4 z-50 ${isMinimized ? 'w-auto' : 'w-[400px]'}`}
//                 >
//                     {isMinimized ? (
//                         <motion.button
//                             onClick={handleMaximize}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-red to-accent-red/80 dark:from-accent-yellow dark:to-accent-yellow/80 text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                         >
//                             <Sparkles className="w-4 h-4 animate-pulse" />
//                             <span className="font-medium">¡Oferta Especial!</span>
//                             <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </motion.button>
//                     ) : (
//                         <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl p-8 border border-accent-red/20 dark:border-accent-yellow/20 backdrop-blur-sm">
//                             <button
//                                 onClick={handleClose}
//                                 className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                             >
//                                 <X className="w-5 h-5" />
//                             </button>
//
//                             <div className="relative mb-6">
//                                 <Sparkles className="absolute -top-2 -left-2 w-6 h-6 text-accent-red dark:text-accent-yellow animate-pulse" />
//                                 <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-red to-accent-red/80 dark:from-accent-yellow dark:to-accent-yellow/80 text-transparent bg-clip-text">
//                                     ¡Oferta de Lanzamiento!
//                                 </h3>
//                             </div>
//
//                             <div className="space-y-4 mb-6">
//                                 <div className="flex items-center gap-3">
//                                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 flex items-center justify-center">
//                                         <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-red dark:text-accent-yellow">
//                                             <path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
//                                         </svg>
//                                     </div>
//                                     <p className="text-gray-600 dark:text-gray-300 font-medium">
//                                         Diseño web profesional por solo <span className="text-accent-red dark:text-accent-yellow font-bold">$150</span>
//                                     </p>
//                                 </div>
//
//                                 <div className="pl-12 space-y-2">
//                                     <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                                         <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60" />
//                                         Maquetación responsive incluida
//                                     </p>
//                                     <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                                         <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60" />
//                                         Asesoría personalizada
//                                     </p>
//                                     <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
//                                         <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60" />
//                                         Entrega en 5 días
//                                     </p>
//                                 </div>
//                             </div>
//
//                             <motion.button
//                                 onClick={handleWhatsApp}
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className="w-full group bg-gradient-to-r from-accent-red to-accent-red/80 dark:from-accent-yellow dark:to-accent-yellow/80 text-white dark:text-gray-900 font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
//                             >
//                                 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
//                                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
//                                 </svg>
//                                 <span>Consultar por WhatsApp</span>
//                                 <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                             </motion.button>
//
//                             <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">
//                                 *Oferta válida hasta agotar disponibilidad
//                             </p>
//                         </div>
//                     )}
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// };
//
// export default PromoPopup;

'use client';

import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronRight, Gift, PartyPopper } from 'lucide-react';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!localStorage.getItem('promoPopupDismissed')) {
                setIsVisible(true);
            } else if (localStorage.getItem('promoPopupMinimized') === 'true') {
                setIsMinimized(true);
                setIsVisible(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsMinimized(true);
        localStorage.setItem('promoPopupDismissed', 'true');
        localStorage.setItem('promoPopupMinimized', 'true');
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    const handleWhatsApp = () => {
        const message = "¡Hola! Me interesa la promoción de diseño web por $150. ¿Podrían darme más información?";
        window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={isMinimized ? { opacity: 0, x: 100 } : { opacity: 0, y: 50 }}
                    animate={isMinimized ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`fixed bottom-4 right-4 z-50 ${isMinimized ? 'w-auto' : 'w-[400px]'}`}
                >
                    {isMinimized ? (
                        <motion.button
                            onClick={handleMaximize}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-red via-red-500 to-accent-red/80 dark:from-accent-yellow dark:via-yellow-400 dark:to-accent-yellow/80 text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <motion.div
                                animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <Gift className="w-5 h-5" />
                            </motion.div>
                            <span className="font-medium">¡Oferta Especial!</span>
                            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    ) : (
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl p-8 border border-accent-red/20 dark:border-accent-yellow/20 backdrop-blur-sm">
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="relative mb-6">
                                <motion.div
                                    className="absolute -top-2 -left-2"
                                    animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <Gift className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                </motion.div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-red via-red-500 to-accent-red/80 dark:from-accent-yellow dark:via-yellow-400 dark:to-accent-yellow/80 text-transparent bg-clip-text pl-6">
                                    ¡Oferta de Lanzamiento!
                                </h3>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 flex items-center justify-center">
                                        <PartyPopper className="w-6 h-6 text-accent-red dark:text-accent-yellow"/>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                                        Diseño web profesional + Desarrollo por solo <span
                                        className="text-accent-red dark:text-accent-yellow font-bold">$150</span>
                                    </p>
                                </div>

                                <div className="pl-12 space-y-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60" />
                                        Maquetación responsive incluida
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60" />
                                        Asesoría personalizada
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-red/60 dark:bg-accent-yellow/60" />
                                        Entrega en 5 días
                                    </p>
                                </div>
                            </div>

                            <motion.button
                                onClick={handleWhatsApp}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full group bg-gradient-to-r from-accent-red via-red-500 to-accent-red/80 dark:from-accent-yellow dark:via-yellow-400 dark:to-accent-yellow/80 text-white dark:text-gray-900 font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                <span>Consultar por WhatsApp</span>
                                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">
                                *Oferta limitada - Aplican restricciones
                            </p>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromoPopup;