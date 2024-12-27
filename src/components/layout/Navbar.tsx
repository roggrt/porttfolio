// //
// //
// // 'use client';
// //
// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {
// //     Sun,
// //     Moon,
// //     Palette,
// //     Layout,
// //     Server,
// //     Code2,
// //     Box,
// //     Search,
// //     Boxes
// // } from 'lucide-react';
// // import { useTheme } from '@/components/providers/ThemeProvider';
// //
// // export default function Navbar() {
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// //     const [activeSection, setActiveSection] = useState('inicio');
// //     const [isScrolled, setIsScrolled] = useState(false);
// //     const [isServicesOpen, setIsServicesOpen] = useState(false);
// //     const { theme, toggleTheme } = useTheme();
// //     const pathname = usePathname();
// //
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             setIsScrolled(window.scrollY > 0);
// //
// //             // Solo verifica secciones en la página principal
// //             if (pathname === '/') {
// //                 const sections = ['inicio', 'sobre-mi', 'servicios', 'proyectos', 'contacto'];
// //                 sections.forEach(section => {
// //                     const element = document.getElementById(section);
// //                     if (element) {
// //                         const { offsetTop, offsetHeight } = element;
// //                         const scrollPosition = window.scrollY;
// //                         if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
// //                             setActiveSection(section);
// //                         }
// //                     }
// //                 });
// //             }
// //         };
// //
// //         window.addEventListener('scroll', handleScroll);
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, [pathname]);
// //
// //     // Reset states on pathname change
// //     useEffect(() => {
// //         setIsMenuOpen(false);
// //         setIsServicesOpen(false);
// //     }, [pathname]);
// //
// //     const services = [
// //         { name: 'UI/UX Design', href: '/services/uiux-design', icon: Palette },
// //         { name: 'Frontend', href: '/services/frontend-development', icon: Layout },
// //         { name: 'Backend', href: '/services/backend-development', icon: Server },
// //         { name: 'WordPress', href: '/services/wordpress', icon: Code2 },
// //         { name: 'Arquitectura', href: '/services/software-architecture', icon: Box },
// //         { name: 'Design Systems', href: '/services/design-systems', icon: Boxes },
// //         { name: 'SEO', href: '/services/seo-y-posicionamiento', icon: Search }
// //     ];
// //
// //     const navItems = [
// //         { name: 'Inicio', path: '/' },
// //         { name: 'Servicios', path: '/#servicios', hasSubmenu: true },
// //         { name: 'Proyectos', path: '/#proyectos' },
// //         { name: 'Blog', path: '/blog' },
// //         { name: 'Contacto', path: '/#contacto' }
// //     ];
// //
// //     const isActive = (path: string) => {
// //         if (path === '/') return pathname === '/';
// //         if (path.startsWith('/#')) return pathname === '/' && activeSection === path.slice(2);
// //         return pathname === path;
// //     };
// //
// //     return (
// //         <header
// //             className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
// //                 isScrolled
// //                     ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
// //                     : 'bg-transparent'
// //             }`}
// //         >
// //             <nav className="max-w-7xl mx-auto px-6 py-4">
// //                 <div className="flex items-center justify-between">
// //                     {/* Logo */}
// //                     <Link
// //                         href="/"
// //                         className="text-2xl font-bold text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity"
// //                     >
// //                         Torisoftt
// //                     </Link>
// //
// //                     {/* Desktop Navigation */}
// //                     <div className="hidden md:flex items-center gap-8">
// //                         {navItems.map((item) => (
// //                             <div key={item.name} className="relative">
// //                                 <div
// //                                     onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
// //                                     onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
// //                                     onClick={() => setIsServicesOpen(false)}
// //                                     className="relative"
// //                                 >
// //                                     <Link
// //                                         href={item.path}
// //                                         className={`px-3 py-2 rounded-lg text-sm transition-all relative group hover:bg-gray-100 dark:hover:bg-gray-800 ${
// //                                             isActive(item.path)
// //                                                 ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800'
// //                                                 : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
// //                                         }`}
// //                                     >
// //                                         {item.name}
// //                                     </Link>
// //
// //                                     {/* Services Submenu - Desktop */}
// //                                     {item.hasSubmenu && isServicesOpen && (
// //                                         <div
// //                                             className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 py-2"
// //                                             onMouseEnter={() => setIsServicesOpen(true)}
// //                                             onMouseLeave={() => setIsServicesOpen(false)}
// //                                         >
// //                                             {services.map((service) => (
// //                                                 <Link
// //                                                     key={service.name}
// //                                                     href={service.href}
// //                                                     className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
// //                                                 >
// //                                                     <service.icon size={16} />
// //                                                     {service.name}
// //                                                 </Link>
// //                                             ))}
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                         ))}
// //
// //                         {/* Theme Toggle */}
// //                         <button
// //                             onClick={toggleTheme}
// //                             className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity"
// //                             aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
// //                         >
// //                             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
// //                         </button>
// //                     </div>
// //
// //                     {/* Mobile Menu Button */}
// //                     <button
// //                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// //                         onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                     >
// //                         <span className="sr-only">Menu</span>
// //                         <svg
// //                             className="w-6 h-6 text-accent-red dark:text-accent-yellow"
// //                             fill="none"
// //                             stroke="currentColor"
// //                             viewBox="0 0 24 24"
// //                         >
// //                             <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth={2}
// //                                 d="M4 6h16M4 12h16M4 18h16"
// //                             />
// //                         </svg>
// //                     </button>
// //                 </div>
// //             </nav>
// //
// //             {/* Mobile Menu */}
// //             {isMenuOpen && (
// //                 <>
// //                     <div
// //                         className="fixed inset-0 bg-black/50 z-40 md:hidden"
// //                         onClick={() => setIsMenuOpen(false)}
// //                     />
// //                     <div
// //                         className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6 z-50 md:hidden overflow-y-auto"
// //                     >
// //                         <div className="flex justify-between items-center mb-8">
// //                             <button
// //                                 onClick={toggleTheme}
// //                                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
// //                             >
// //                                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
// //                             </button>
// //                             <button
// //                                 onClick={() => setIsMenuOpen(false)}
// //                                 className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow"
// //                             >
// //                                 <svg
// //                                     className="w-6 h-6"
// //                                     fill="none"
// //                                     stroke="currentColor"
// //                                     viewBox="0 0 24 24"
// //                                 >
// //                                     <path
// //                                         strokeLinecap="round"
// //                                         strokeLinejoin="round"
// //                                         strokeWidth={2}
// //                                         d="M6 18L18 6M6 6l12 12"
// //                                     />
// //                                 </svg>
// //                             </button>
// //                         </div>
// //                         <div className="flex flex-col gap-4">
// //                             {navItems.map((item) => (
// //                                 <div key={item.name}>
// //                                     <Link
// //                                         href={item.path}
// //                                         className={`block px-3 py-2 rounded-lg text-lg transition-colors ${
// //                                             isActive(item.path)
// //                                                 ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800'
// //                                                 : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
// //                                         }`}
// //                                         onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
// //                                     >
// //                                         {item.name}
// //                                     </Link>
// //
// //                                     {/* Services Submenu - Mobile */}
// //                                     {item.hasSubmenu && (
// //                                         <div className="ml-4 mt-2 space-y-2">
// //                                             {services.map((service) => (
// //                                                 <Link
// //                                                     key={service.name}
// //                                                     href={service.href}
// //                                                     className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
// //                                                     onClick={() => setIsMenuOpen(false)}
// //                                                 >
// //                                                     <service.icon size={16} />
// //                                                     {service.name}
// //                                                 </Link>
// //                                             ))}
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </>
// //             )}
// //         </header>
// //     );
// // }
//
// 'use client';
//
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Sun, Moon, Palette, Layout, Server,
//     Code2, Box, Search, Boxes, MessageCircle
// } from 'lucide-react';
// import { useTheme } from '@/components/providers/ThemeProvider';
//
// export default function Navbar() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('inicio');
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isServicesOpen, setIsServicesOpen] = useState(false);
//     const { theme, toggleTheme } = useTheme();
//     const pathname = usePathname();
//
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 0);
//             if (pathname === '/') {
//                 const sections = ['inicio', 'sobre-mi', 'servicios', 'proyectos', 'contacto'];
//                 sections.forEach(section => {
//                     const element = document.getElementById(section);
//                     if (element) {
//                         const { offsetTop, offsetHeight } = element;
//                         const scrollPosition = window.scrollY;
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
//     useEffect(() => {
//         setIsMenuOpen(false);
//         setIsServicesOpen(false);
//     }, [pathname]);
//
//     const handleWhatsApp = () => {
//         const message = "¡Hola! Me interesa conocer más sobre sus servicios de desarrollo web.";
//         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
//     };
//
//     const services = [
//         { name: 'UI/UX Design', href: '/services/uiux-design', icon: Palette },
//         { name: 'Frontend', href: '/services/frontend-development', icon: Layout },
//         { name: 'Backend', href: '/services/backend-development', icon: Server },
//         { name: 'WordPress', href: '/services/wordpress', icon: Code2 },
//         { name: 'Arquitectura', href: '/services/software-architecture', icon: Box },
//         { name: 'Design Systems', href: '/services/design-systems', icon: Boxes },
//         { name: 'SEO', href: '/services/seo-y-posicionamiento', icon: Search }
//     ];
//
//     const navItems = [
//         { name: 'Inicio', path: '/' },
//         { name: 'Servicios', path: '/#servicios', hasSubmenu: true },
//         { name: 'Proyectos', path: '/#proyectos' },
//         { name: 'Blog', path: '/blog' },
//         { name: 'Contacto', path: '/#contacto' }
//     ];
//
//     const isActive = (path: string) => {
//         if (path === '/') return pathname === '/';
//         if (path.startsWith('/#')) return pathname === '/' && activeSection === path.slice(2);
//         return pathname === path;
//     };
//
//     return (
//         <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
//             isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
//         }`}>
//             <nav className="max-w-7xl mx-auto px-6 py-4">
//                 <div className="flex items-center justify-between">
//                     <Link href="/" className="text-2xl font-bold text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity">
//                         Torisoftt
//                     </Link>
//
//                     <div className="hidden md:flex items-center gap-8">
//                         {navItems.map((item) => (
//                             <div key={item.name} className="relative">
//                                 <div
//                                     onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
//                                     onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
//                                     onClick={() => setIsServicesOpen(false)}
//                                     className="relative"
//                                 >
//                                     <Link
//                                         href={item.path}
//                                         className={`px-3 py-2 rounded-lg text-sm transition-all relative group hover:bg-gray-100 dark:hover:bg-gray-800 ${
//                                             isActive(item.path) ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
//                                         }`}
//                                     >
//                                         {item.name}
//                                     </Link>
//
//                                     {item.hasSubmenu && isServicesOpen && (
//                                         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 py-2">
//                                             {services.map((service) => (
//                                                 <Link
//                                                     key={service.name}
//                                                     href={service.href}
//                                                     className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
//                                                 >
//                                                     <service.icon size={16} />
//                                                     {service.name}
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//
//                         <button
//                             onClick={handleWhatsApp}
//                             className="flex items-center gap-2 px-4 py-2 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
//                         >
//                             <MessageCircle size={18} />
//                             <span className="font-medium">Escríbenos</span>
//                         </button>
//
//                         <button
//                             onClick={toggleTheme}
//                             className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity"
//                             aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
//                         >
//                             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                         </button>
//                     </div>
//
//                     <button
//                         className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         <span className="sr-only">Menu</span>
//                         <svg className="w-6 h-6 text-accent-red dark:text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>
//             </nav>
//
//             {isMenuOpen && (
//                 <>
//                     <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
//                     <div className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6 z-50 md:hidden overflow-y-auto">
//                         <div className="flex justify-between items-center mb-8">
//                             <button
//                                 onClick={toggleTheme}
//                                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
//                             >
//                                 {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                             </button>
//                             <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="flex flex-col gap-4">
//                             {navItems.map((item) => (
//                                 <div key={item.name}>
//                                     <Link
//                                         href={item.path}
//                                         className={`block px-3 py-2 rounded-lg text-lg transition-colors ${
//                                             isActive(item.path) ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
//                                         }`}
//                                         onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
//                                     >
//                                         {item.name}
//                                     </Link>
//
//                                     {item.hasSubmenu && (
//                                         <div className="ml-4 mt-2 space-y-2">
//                                             {services.map((service) => (
//                                                 <Link
//                                                     key={service.name}
//                                                     href={service.href}
//                                                     className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//                                                     onClick={() => setIsMenuOpen(false)}
//                                                 >
//                                                     <service.icon size={16} />
//                                                     {service.name}
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//
//                             <button
//                                 onClick={() => {
//                                     handleWhatsApp();
//                                     setIsMenuOpen(false);
//                                 }}
//                                 className="flex items-center gap-2 px-4 py-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity mt-4"
//                             >
//                                 <MessageCircle size={20} />
//                                 <span className="font-medium">Escríbenos por WhatsApp</span>
//                             </button>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </header>
//     );
// }

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sun, Moon, Palette, Layout, Server,
    Code2, Box, Search, Boxes
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

    useEffect(() => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    const handleWhatsApp = () => {
        const message = "¡Hola! Me interesa conocer más sobre sus servicios de desarrollo web.";
        window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    };

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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
            isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'
        }`}>
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity">
                        Torisoftt
                    </Link>

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
                                            isActive(item.path) ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>

                                    {item.hasSubmenu && isServicesOpen && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 py-2">
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

                        <button
                            onClick={handleWhatsApp}
                            className="flex items-center gap-2 px-3 py-2 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity text-sm"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-4 h-4 fill-current"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            <span className="font-medium">Escríbenos</span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow hover:opacity-80 transition-opacity"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6 text-accent-red dark:text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
                    <div className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6 z-50 md:hidden overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={`block px-3 py-2 rounded-lg text-lg transition-colors ${
                                            isActive(item.path) ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                        onClick={() => !item.hasSubmenu && setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>

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

                            <button
                                onClick={() => {
                                    handleWhatsApp();
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center justify-center gap-2 px-3 py-2 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity text-sm mt-4"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 fill-current"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                <span className="font-medium">Escríbenos por WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}