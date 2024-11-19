//
// 'use client';
//
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sun, Moon } from 'lucide-react';
// import { useTheme } from '@/components/providers/ThemeProvider';
//
// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('inicio');
//     const [isScrolled, setIsScrolled] = useState(false);
//     const { theme, toggleTheme } = useTheme();
//     const pathname = usePathname();
//
//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = ['inicio', 'sobre-mi', 'servicios', 'proyectos', 'contacto'];
//             const scrollPosition = window.scrollY;
//
//             setIsScrolled(scrollPosition > 0);
//
//             // Solo activar la detección de sección si estamos en la página principal
//             if (pathname === '/') {
//                 sections.forEach(section => {
//                     const element = document.getElementById(section);
//                     if (element) {
//                         const { offsetTop, offsetHeight } = element;
//                         if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
//                             setActiveSection(section);
//                         }
//                     }
//                 });
//             }
//         };
//
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [pathname]);
//
//     const navItems = [
//         { name: 'Inicio', path: '/' },
//         { name: 'Servicios', path: '/#servicios' },
//         { name: 'Proyectos', path: '/#proyectos' },
//         { name: 'Blog', path: '/blog' },
//         { name: 'Contacto', path: '/#contacto' }
//     ];
//
//     // Resto de las animaciones...
//     const navbarVariants = {
//         hidden: { y: -100 },
//         visible: {
//             y: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20
//             }
//         }
//     };
//
//     const isActive = (path: string) => {
//         if (path === '/') return pathname === '/';
//         if (path.startsWith('/#')) return pathname === '/' && activeSection === path.slice(2);
//         return pathname === path;
//     };
//
//     return (
//         <motion.header
//             initial="hidden"
//             animate="visible"
//             variants={navbarVariants}
//             className={`fixed top-0 left-0 right-0 z-50 ${
//                 isScrolled
//                     ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
//                     : 'bg-transparent'
//             }`}
//         >
//             <nav className="max-w-7xl mx-auto px-6 py-4">
//                 <div className="flex items-center justify-between">
//                     <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <Link
//                             href="/"
//                             className="text-2xl font-bold text-accent-red dark:text-accent-yellow"
//                         >
//                             Torisoftt
//                         </Link>
//                     </motion.div>
//
//                     <div className="hidden md:flex items-center gap-8">
//                         {navItems.map((item) => (
//                             <motion.div
//                                 key={item.name}
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 <Link
//                                     href={item.path}
//                                     className={`text-sm transition-colors relative group ${
//                                         isActive(item.path)
//                                             ? 'text-accent-red dark:text-accent-yellow'
//                                             : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
//                                     }`}
//                                 >
//                                     {item.name}
//                                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red dark:bg-accent-yellow group-hover:w-full transition-all duration-300" />
//                                 </Link>
//                             </motion.div>
//                         ))}
//
//                         {/* Theme toggle button */}
//                         <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={toggleTheme}
//                             className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
//                             aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//                         >
//                             <AnimatePresence mode='wait' initial={false}>
//                                 <motion.div
//                                     key={theme}
//                                     initial={{ y: -20, opacity: 0 }}
//                                     animate={{ y: 0, opacity: 1 }}
//                                     exit={{ y: 20, opacity: 0 }}
//                                     transition={{ duration: 0.2 }}
//                                 >
//                                     {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                                 </motion.div>
//                             </AnimatePresence>
//                         </motion.button>
//                     </div>
//
//                     {/* Mobile menu button */}
//                     <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <span className="sr-only">Menu</span>
//                         <svg
//                             className="w-6 h-6 text-accent-red dark:text-accent-yellow"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M4 6h16M4 12h16M4 18h16"
//                             />
//                         </svg>
//                     </motion.button>
//                 </div>
//             </nav>
//
//             {/* Mobile menu */}
//             <AnimatePresence>
//                 {isMenuOpen && (
//                     <>
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 bg-black/50 z-40 md:hidden"
//                             onClick={() => setIsMenuOpen(false)}
//                         />
//                         <motion.nav
//                             initial={{ x: "100%" }}
//                             animate={{ x: 0 }}
//                             exit={{ x: "100%" }}
//                             transition={{ type: "spring", damping: 20 }}
//                             className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6 z-50 md:hidden"
//                         >
//                             <div className="flex justify-between items-center mb-8">
//                                 <motion.button
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                     onClick={toggleTheme}
//                                     className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
//                                 >
//                                     {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                                 </motion.button>
//                                 <motion.button
//                                     whileHover={{ scale: 1.1 }}
//                                     whileTap={{ scale: 0.9 }}
//                                     onClick={() => setIsMenuOpen(false)}
//                                     className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow"
//                                 >
//                                     <svg
//                                         className="w-6 h-6"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M6 18L18 6M6 6l12 12"
//                                         />
//                                     </svg>
//                                 </motion.button>
//                             </div>
//                             <div className="flex flex-col gap-4">
//                                 {navItems.map((item) => (
//                                     <motion.div
//                                         key={item.name}
//                                         initial={{ x: 20, opacity: 0 }}
//                                         animate={{ x: 0, opacity: 1 }}
//                                         transition={{ delay: 0.1 }}
//                                     >
//                                         <Link
//                                             href={item.path}
//                                             className={`text-lg ${
//                                                 isActive(item.path)
//                                                     ? 'text-accent-red dark:text-accent-yellow'
//                                                     : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
//                                             }`}
//                                             onClick={() => setIsMenuOpen(false)}
//                                         >
//                                             {item.name}
//                                         </Link>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.nav>
//                     </>
//                 )}
//             </AnimatePresence>
//         </motion.header>
//     );
// }


'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sun,
    Moon,
    Palette,
    Layout,
    Server,
    Code2,
    Box,
    Search,
    Boxes
} from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);

            // Solo verifica secciones en la página principal
            if (pathname === '/') {
                const sections = ['inicio', 'sobre-mi', 'servicios', 'proyectos', 'contacto'];
                sections.forEach(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        const scrollPosition = window.scrollY;
                        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
                            setActiveSection(section);
                        }
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // Reset states on pathname change
    useEffect(() => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    const services = [
        { name: 'UI/UX Design', href: '/services/uiux-design', icon: Palette },
        { name: 'Frontend', href: '/services/frontend-development', icon: Layout },
        { name: 'Backend', href: '/services/backend-development', icon: Server },
        { name: 'WordPress', href: '/services/wordpress', icon: Code2 },
        { name: 'Arquitectura', href: '/services/software-architecture', icon: Box },
        { name: 'Design Systems', href: '/services/design-systems', icon: Boxes },
        { name: 'SEO', href: '/services/seo-y-posicionamiento', icon: Search }
    ];

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/#servicios', hasSubmenu: true },
        { name: 'Proyectos', path: '/#proyectos' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacto', path: '/#contacto' }
    ];

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        if (path.startsWith('/#')) return pathname === '/' && activeSection === path.slice(2);
        return pathname === path;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity"
                    >
                        Torisoftt
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative">
                                <div
                                    onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
                                    onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="relative"
                                >
                                    <Link
                                        href={item.path}
                                        className={`px-3 py-2 rounded-lg text-sm transition-all relative group hover:bg-gray-100 dark:hover:bg-gray-800 ${
                                            isActive(item.path)
                                                ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800'
                                                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Services Submenu - Desktop */}
                                    {item.hasSubmenu && isServicesOpen && (
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 py-2"
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                                >
                                                    <service.icon size={16} />
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="w-6 h-6 text-accent-red dark:text-accent-yellow"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <div
                        className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6 z-50 md:hidden overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={`block px-3 py-2 rounded-lg text-lg transition-colors ${
                                            isActive(item.path)
                                                ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800'
                                                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                        onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>

                                    {/* Services Submenu - Mobile */}
                                    {item.hasSubmenu && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <service.icon size={16} />
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}