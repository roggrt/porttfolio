// // // import React, { useState, useEffect } from 'react';
// // // import { motion } from 'framer-motion';
// // //
// // // const CookieBanner = () => {
// // //     const [isVisible, setIsVisible] = useState(false);
// // //
// // //     useEffect(() => {
// // //         const consent = localStorage.getItem('cookieConsent');
// // //         if (!consent) {
// // //             setIsVisible(true);
// // //         }
// // //     }, []);
// // //
// // //     const handleAccept = () => {
// // //         localStorage.setItem('cookieConsent', 'accepted');
// // //         if (window._iub && window._iub.csConfiguration) {
// // //             setIsVisible(false);
// // //         }
// // //     };
// // //
// // //     if (!isVisible) return null;
// // //
// // //     return (
// // //         <motion.div
// // //             initial={{ y: 100, opacity: 0 }}
// // //             animate={{ y: 0, opacity: 1 }}
// // //             className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50"
// // //         >
// // //             <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
// // //                 <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
// // //                     Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrar publicidad
// // //                     relacionada con tus preferencias. Si continúas navegando, consideramos que aceptas su uso.
// // //                 </p>
// // //                 <div className="flex gap-3">
// // //                     <button
// // //                         onClick={handleAccept}
// // //                         className="px-4 py-2 bg-accent-red hover:bg-accent-red/90 dark:bg-accent-yellow
// // //                      dark:hover:bg-accent-yellow/90 text-white dark:text-gray-900 rounded-lg
// // //                      transition-colors text-sm font-medium"
// // //                     >
// // //                         Aceptar
// // //                     </button>
// // //                     <a
// // //                         href="/privacy"
// // //                         className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400
// // //                      hover:text-gray-900 dark:hover:text-white transition-colors"
// // //                     >
// // //                         Más información
// // //                     </a>
// // //                 </div>
// // //             </div>
// // //         </motion.div>
// // //     );
// // // };
// // //
// // // export default CookieBanner;
// //
// //
// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// //
// // const CookieBanner = () => {
// //     const [isVisible, setIsVisible] = useState(false);
// //
// //     useEffect(() => {
// //         const consent = localStorage.getItem('cookieConsent');
// //         if (!consent) {
// //             setIsVisible(true);
// //         }
// //     }, []);
// //
// //     const handleAccept = () => {
// //         localStorage.setItem('cookieConsent', 'accepted');
// //         if (window._iub && window._iub.csConfiguration) {
// //             setIsVisible(false);
// //         }
// //     };
// //
// //     const handleReject = () => {
// //         localStorage.setItem('cookieConsent', 'rejected');
// //         setIsVisible(false);
// //     };
// //
// //     if (!isVisible) return null;
// //
// //     return (
// //         <motion.div
// //             initial={{ y: 100, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50"
// //         >
// //             <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
// //                 <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
// //                     Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes aceptar todas las cookies o
// //                     gestionarlas en las preferencias.
// //                 </p>
// //                 <div className="flex gap-3">
// //                     <button
// //                         onClick={handleReject}
// //                         className="px-6 py-2 border-2 border-accent-red dark:border-accent-yellow
// //                      text-accent-red dark:text-accent-yellow hover:bg-accent-red/5
// //                      dark:hover:bg-accent-yellow/5 rounded-lg transition-colors text-sm font-medium"
// //                     >
// //                         Rechazar
// //                     </button>
// //                     <button
// //                         onClick={handleAccept}
// //                         className="px-6 py-2 border-2 border-accent-red dark:border-accent-yellow
// //                      text-accent-red dark:text-accent-yellow hover:bg-accent-red/5
// //                      dark:hover:bg-accent-yellow/5 rounded-lg transition-colors text-sm font-medium"
// //                     >
// //                         Aceptar
// //                     </button>
// //                     <a
// //                         href="/politica-privacidad"
// //                         className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400
// //                      hover:text-gray-900 dark:hover:text-white transition-colors underline"
// //                     >
// //                         Más información
// //                     </a>
// //                 </div>
// //             </div>
// //         </motion.div>
// //     );
// // };
// //
// // export default CookieBanner;
//
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { ExternalLink } from 'lucide-react';
//
// const CookieBanner = () => {
//     const [isVisible, setIsVisible] = useState(false);
//
//     useEffect(() => {
//         const consent = localStorage.getItem('cookieConsent');
//         if (!consent) {
//             setIsVisible(true);
//         }
//     }, []);
//
//     const handleAccept = () => {
//         localStorage.setItem('cookieConsent', 'accepted');
//         if (window._iub && window._iub.csConfiguration) {
//             setIsVisible(false);
//         }
//     };
//
//     const handleReject = () => {
//         localStorage.setItem('cookieConsent', 'rejected');
//         setIsVisible(false);
//     };
//
//     if (!isVisible) return null;
//
//     return (
//         <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50"
//         >
//             <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
//                 <div className="flex-1 space-y-2">
//                     <h3 className="text-base font-semibold text-gray-900 dark:text-white">
//                         Tu privacidad es importante
//                     </h3>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                         Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio.
//                         Puedes aceptar todas las cookies o personalizar tus preferencias.
//                     </p>
//                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                         <Link
//                             href="/privacy"
//                             className="inline-flex items-center hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
//                         >
//                             Ver política de privacidad
//                             <ExternalLink className="w-3.5 h-3.5 ml-1" />
//                         </Link>
//                     </div>
//                 </div>
//
//                 <div className="flex flex-col sm:flex-row items-center gap-3">
//                     <button
//                         onClick={handleReject}
//                         className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300
//                      hover:text-gray-900 dark:hover:text-white hover:bg-gray-100
//                      dark:hover:bg-gray-800 rounded-lg transition-colors"
//                     >
//                         Rechazar
//                     </button>
//                     <button
//                         onClick={handleAccept}
//                         className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium bg-accent-red hover:bg-accent-red/90
//                      dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white
//                      dark:text-gray-900 rounded-lg transition-colors"
//                     >
//                         Aceptar todo
//                     </button>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };
//
// export default CookieBanner;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) return;

        // Detectar interacción del usuario
        const handleInteraction = () => {
            setHasInteracted(true);
        };

        // Agregar listeners para diferentes tipos de interacción
        window.addEventListener('scroll', handleInteraction);
        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('click', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        // Timer de 10 segundos
        const timer = setTimeout(() => {
            if (hasInteracted) {
                setIsVisible(true);
            }
        }, 10000);

        return () => {
            // Limpiar listeners
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            clearTimeout(timer);
        };
    }, [hasInteracted]);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        if (window._iub && window._iub.csConfiguration) {
            setIsVisible(false);
        }
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50"
        >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        Tu privacidad es importante
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio.
                        Puedes aceptar todas las cookies o personalizar tus preferencias.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Link
                            href="/privacy"
                            className="inline-flex items-center hover:text-accent-red dark:hover:text-accent-yellow transition-colors"
                        >
                            Ver política de privacidad
                            <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                        onClick={handleReject}
                        className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300
                     hover:text-gray-900 dark:hover:text-white hover:bg-gray-100
                     dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        Rechazar
                    </button>
                    <button
                        onClick={handleAccept}
                        className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium bg-accent-red hover:bg-accent-red/90
                     dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white
                     dark:text-gray-900 rounded-lg transition-colors"
                    >
                        Aceptar todo
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CookieBanner;