import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        if (window._iub && window._iub.csConfiguration) {
            setIsVisible(false);
        }
    };

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                    Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrar publicidad
                    relacionada con tus preferencias. Si continúas navegando, consideramos que aceptas su uso.
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 bg-accent-red hover:bg-accent-red/90 dark:bg-accent-yellow
                     dark:hover:bg-accent-yellow/90 text-white dark:text-gray-900 rounded-lg
                     transition-colors text-sm font-medium"
                    >
                        Aceptar
                    </button>
                    <a
                        href="/privacy"
                        className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400
                     hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        Más información
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default CookieBanner;