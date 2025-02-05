//
//
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Sun, Moon, ChevronDown, MessageSquareMore, Layout, Globe, Server, Code2, Box, Search,  Mail  } from 'lucide-react';
// import { useTheme } from '@/components/providers/ThemeProvider';
//
// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isServicesOpen, setIsServicesOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const { theme, toggleTheme } = useTheme();
//     const pathname = usePathname();
//
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 0);
//             if (pathname === '/') {
//                 const sections = ['inicio', 'servicios', 'proyectos', 'contacto'];
//                 sections.forEach(section => {
//                     const element = document.getElementById(section);
//                     if (element) {
//                         const { offsetTop, offsetHeight } = element;
//                         if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + offsetHeight - 100) {
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
//     const [activeSection, setActiveSection] = useState('inicio');
//
//     useEffect(() => {
//         setIsMobileMenuOpen(false);
//         setIsServicesOpen(false);
//     }, [pathname]);
//
//     const handleWhatsApp = () => {
//         const message = "¡Hola! Me interesa conocer más sobre sus servicios.";
//         window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
//     };
//
//     const navItems = [
//         { name: 'Inicio', path: '/' },
//         { name: 'Servicios', path: '/#servicios', hasSubmenu: true },
//         { name: 'Proyectos', path: '/#proyectos' },
//         { name: 'Contacto', path: '/#contacto' },
//         { name: 'Blog', path: '/blog' }
//     ];
//
//     const services = [
//         {
//             name: 'UI/UX Design',
//             href: '/services/uiux-design',
//             icon: Layout,
//             description: 'Diseño de interfaces y experiencias'
//         },
//         {
//             name: 'Correos Corporativos',
//             href: '/services/correos-corporativos',
//             icon: Mail,
//             description: 'Email empresarial profesional'
//         },
//         {
//             name: 'Frontend',
//             href: '/services/frontend-development',
//             icon: Globe,
//             description: 'Desarrollo web moderno'
//         },
//         {
//             name: 'Backend',
//             href: '/services/backend-development',
//             icon: Server,
//             description: 'Desarrollo de APIs y servicios'
//         },
//         {
//             name: 'WordPress',
//             href: '/services/wordpress',
//             icon: Code2,
//             description: 'Sitios web profesionales'
//         },
//         {
//             name: 'Software',
//             href: '/services/software-architecture',
//             icon: Box,
//             description: 'Soluciones empresariales'
//         },
//         {
//             name: 'SEO',
//             href: '/services/seo-y-posicionamiento',
//             icon: Search,
//             description: 'Posicionamiento web'
//         }
//     ];
//
//     const isActive = (path: string) => {
//         if (path === '/') return pathname === '/';
//         if (path.startsWith('/#')) {
//             const section = path.slice(2);
//             return pathname === '/' && activeSection === section;
//         }
//         return pathname === path;
//     };
//
//     // const isActive = (path: string) => {
//     //     if (path === '/') return pathname === '/';
//     //     if (path.startsWith('/#')) {
//     //         const section = path.slice(2);
//     //         return pathname === '/' && activeSection === section;
//     //     }
//     //     return pathname === path;
//     // };
//
//
//
//     return (
//         <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//             isScrolled
//                 ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
//                 : 'bg-accent-red dark:bg-gray-900'
//         }`}>
//             <nav className="max-w-7xl mx-auto px-6 py-4">
//                 <div className="flex items-center justify-between">
//                     {/* Left Section */}
//                     <div className="flex items-center gap-12">
//                         <Link href="/" className={`text-2xl font-bold transition-colors ${
//                             isScrolled
//                                 ? 'text-accent-red dark:text-accent-yellow'
//                                 : 'text-white dark:text-accent-yellow'
//                         }`}>
//                             Torisoftt
//                         </Link>
//
//                         <div className="hidden md:flex items-center gap-8">
//                             {navItems.map((item) => (
//                                 <div
//                                     key={item.name}
//                                     className="relative"
//                                     onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
//                                     onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
//                                 >
//                                     <Link
//                                         href={item.path}
//                                         className={`group px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1
//                                             ${isActive(item.path)
//                                             ? (isScrolled
//                                                 ? 'text-accent-red dark:text-accent-yellow'
//                                                 : 'text-white dark:text-accent-yellow bg-white/20 dark:bg-gray-800 rounded-lg')
//                                             : (isScrolled
//                                                 ? 'text-gray-900 hover:text-accent-red dark:text-white dark:hover:text-accent-yellow'
//                                                 : 'text-white/90 hover:text-white dark:text-white/90 dark:hover:text-accent-yellow')
//                                         }`}
//                                     >
//                                         {item.name}
//                                         {item.hasSubmenu && (
//                                             <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
//                                         )}
//                                     </Link>
//
//                                     {item.hasSubmenu && isServicesOpen && (
//                                         <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
//                                             {services.map((service) => (
//                                                 <Link
//                                                     key={service.name}
//                                                     href={service.href}
//                                                     className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 last:border-0"
//                                                 >
//                                                     <service.icon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
//                                                     <div>
//                                                         <span className="block font-medium text-gray-900 dark:text-white">
//                                                             {service.name}
//                                                         </span>
//                                                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                                                             {service.description}
//                                                         </span>
//                                                     </div>
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//
//                     {/* Right Section */}
//                     <div className="hidden md:flex items-center gap-6">
//                         <Link
//                             href="/web"
//                             className={`text-sm font-medium transition-colors ${
//                                 isScrolled
//                                     ? 'text-gray-900 hover:text-accent-red dark:text-white dark:hover:text-accent-yellow'
//                                     : 'text-white/90 hover:text-white dark:text-white/90 dark:hover:text-accent-yellow'
//                             }`}
//                         >
//                             Páginas Web
//                         </Link>
//
//                         <button
//                             onClick={handleWhatsApp}
//                             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
//                                 isScrolled
//                                     ? 'bg-accent-red hover:bg-red-700 text-white'
//                                     : 'bg-white/20 hover:bg-white/30 dark:bg-accent-red dark:hover:bg-red-700 text-white'
//                             }`}
//                         >
//                             <MessageSquareMore size={16} />
//                             <span>Escríbenos</span>
//                         </button>
//
//                         <button
//                             onClick={toggleTheme}
//                             className={`p-2 rounded-lg transition-all ${
//                                 isScrolled
//                                     ? 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-accent-red dark:text-accent-yellow'
//                                     : 'bg-white/20 hover:bg-white/30 dark:bg-gray-800 text-white dark:text-accent-yellow'
//                             }`}
//                             aria-label="Toggle theme"
//                         >
//                             {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                         </button>
//                     </div>
//
//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         className={`md:hidden p-2 rounded-lg transition-colors ${
//                             isScrolled
//                                 ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow'
//                                 : 'text-white dark:text-accent-yellow hover:bg-white/20 dark:hover:bg-gray-800'
//                         }`}
//                     >
//                         <span className="sr-only">Menu</span>
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 </div>
//
//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden">
//                         <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
//                         <div className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 p-6 z-50 overflow-y-auto">
//                             <div className="flex justify-between items-center mb-8">
//                                 <button
//                                     onClick={toggleTheme}
//                                     className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
//                                 >
//                                     {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                                 </button>
//                                 <button
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                     className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow"
//                                 >
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//
//                             <div className="flex flex-col gap-4">
//                                 {navItems.map((item) => (
//                                     <div key={item.name}>
//                                         <Link
//                                             href={item.path}
//                                             className={`block px-3 py-2 rounded-lg text-lg transition-colors ${
//                                                 isActive(item.path)
//                                                     ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800'
//                                                     : 'text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow'
//                                             }`}
//                                             onClick={() => !item.hasSubmenu && setIsMobileMenuOpen(false)}
//                                         >
//                                             {item.name}
//                                         </Link>
//
//                                         {item.hasSubmenu && (
//                                             <div className="ml-4 mt-2 space-y-2">
//                                                 {services.map((service) => (
//                                                     <Link
//                                                         key={service.name}
//                                                         href={service.href}
//                                                         className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
//                                                         onClick={() => setIsMobileMenuOpen(false)}
//                                                     >
//                                                         <service.icon size={16} />
//                                                         {service.name}
//                                                     </Link>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//
//                                 <Link
//                                     href="/web"
//                                     className="block px-3 py-2 rounded-lg text-lg transition-colors text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     Páginas Web
//                                 </Link>
//
//                                 <button
//                                     onClick={() => {
//                                         handleWhatsApp();
//                                         setIsMobileMenuOpen(false);
//                                     }}
//                                     className="flex items-center justify-center gap-2 px-4 py-3 bg-accent-red dark:bg-accent-red text-white rounded-lg hover:bg-red-700 transition-colors text-sm mt-4"
//                                 >
//                                     <MessageSquareMore size={16} />
//                                     <span className="font-medium">Escríbenos</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </nav>
//         </header>
//     );
// }


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, ChevronDown, MessageSquareMore, Layout, Globe, Server, Code2, Box, Search, Mail } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        if (isMobileMenuOpen) {
            setScrollPosition(window.scrollY);
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollPosition);
        }
    }, [isMobileMenuOpen, scrollPosition]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
            if (pathname === '/') {
                const sections = ['inicio', 'servicios', 'proyectos', 'contacto'];
                sections.forEach(section => {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (window.scrollY >= offsetTop - 100 && window.scrollY < offsetTop + offsetHeight - 100) {
                            setActiveSection(section);
                        }
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    const handleWhatsApp = () => {
        const message = "¡Hola! Me interesa conocer más sobre sus servicios.";
        window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    };

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/#servicios', hasSubmenu: true },
        { name: 'Proyectos', path: '/#proyectos' },
        { name: 'Contacto', path: '/#contacto' },
        // { name: 'Blog', path: '/blog' }

    ];

    const services = [
        {
            name: 'UI/UX Design',
            href: '/services/uiux-design',
            icon: Layout,
            description: 'Diseño de interfaces y experiencias'
        },
        {
            name: 'Correos Corporativos',
            href: '/services/correos-corporativos',
            icon: Mail,
            description: 'Email empresarial profesional'
        },
        {
            name: 'Frontend',
            href: '/services/frontend-development',
            icon: Globe,
            description: 'Desarrollo web moderno'
        },
        {
            name: 'Backend',
            href: '/services/backend-development',
            icon: Server,
            description: 'Desarrollo de APIs y servicios'
        },
        {
            name: 'WordPress',
            href: '/services/wordpress',
            icon: Code2,
            description: 'Sitios web profesionales'
        },
        {
            name: 'Software',
            href: '/services/software-architecture',
            icon: Box,
            description: 'Soluciones empresariales'
        },
        {
            name: 'SEO',
            href: '/services/seo-y-posicionamiento',
            icon: Search,
            description: 'Posicionamiento web'
        }
    ];

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        if (path.startsWith('/#')) {
            const section = path.slice(2);
            return pathname === '/' && activeSection === section;
        }
        return pathname === path;
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
                : 'bg-accent-red dark:bg-gray-900'
        }`}>
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Section */}
                    <div className="flex items-center gap-12">
                        <Link href="/" className={`text-2xl font-bold transition-colors ${
                            isScrolled
                                ? 'text-accent-red dark:text-accent-yellow'
                                : 'text-white dark:text-accent-yellow'
                        }`}>
                            Torisoftt
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
                                    onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
                                >
                                    <Link
                                        href={item.path}
                                        className={`group px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1
                                            ${isActive(item.path)
                                            ? (isScrolled
                                                ? 'text-accent-red dark:text-accent-yellow'
                                                : 'text-white dark:text-accent-yellow bg-white/20 dark:bg-gray-800 rounded-lg')
                                            : (isScrolled
                                                ? 'text-gray-900 hover:text-accent-red dark:text-white dark:hover:text-accent-yellow'
                                                : 'text-white/90 hover:text-white dark:text-white/90 dark:hover:text-accent-yellow')
                                        }`}
                                    >
                                        {item.name}
                                        {item.hasSubmenu && (
                                            <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                        )}
                                    </Link>

                                    {item.hasSubmenu && isServicesOpen && (
                                        <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 last:border-0"
                                                >
                                                    <service.icon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                                    <div>
                                                        <span className="block font-medium text-gray-900 dark:text-white">
                                                            {service.name}
                                                        </span>
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                                            {service.description}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/web"
                            className={`text-sm font-medium transition-colors ${
                                isScrolled
                                    ? 'text-gray-900 hover:text-accent-red dark:text-white dark:hover:text-accent-yellow'
                                    : 'text-white/90 hover:text-white dark:text-white/90 dark:hover:text-accent-yellow'
                            }`}
                        >
                            Páginas Web
                        </Link>

                        <button
                            onClick={handleWhatsApp}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                                isScrolled
                                    ? 'bg-accent-red hover:bg-red-700 text-white'
                                    : 'bg-white/20 hover:bg-white/30 dark:bg-accent-red dark:hover:bg-red-700 text-white'
                            }`}
                        >
                            <MessageSquareMore size={16} />
                            <span>Escríbenos</span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all ${
                                isScrolled
                                    ? 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-accent-red dark:text-accent-yellow'
                                    : 'bg-white/20 hover:bg-white/30 dark:bg-gray-800 text-white dark:text-accent-yellow'
                            }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${
                            isScrolled
                                ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow'
                                : 'text-white dark:text-accent-yellow hover:bg-white/20 dark:hover:bg-gray-800'
                        }`}
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div
                            className="fixed inset-0 bg-black/50 z-40"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <div
                            className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 overflow-y-auto h-screen"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-accent-red dark:text-accent-yellow"
                                    >
                                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                    </button>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent-red dark:text-accent-yellow"
                                    >
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
                                                    isActive(item.path)
                                                        ? 'text-accent-red dark:text-accent-yellow bg-gray-100 dark:bg-gray-800'
                                                        : 'text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow'
                                                }`}
                                                onClick={() => !item.hasSubmenu && setIsMobileMenuOpen(false)}
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
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <service.icon size={16} />
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    <Link
                                        href="/web"
                                        className="block px-3 py-2 rounded-lg text-lg transition-colors text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Páginas Web
                                    </Link>

                                    <button
                                        onClick={() => {
                                            handleWhatsApp();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="flex items-center justify-center gap-2 px-4 py-3 bg-accent-red dark:bg-accent-red text-white rounded-lg hover:bg-red-700 transition-colors text-sm mt-4"
                                    >
                                        <MessageSquareMore size={16} />
                                        <span className="font-medium">Escríbenos</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}