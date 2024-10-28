
// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Twitter, Github, Youtube, Instagram, Linkedin } from 'lucide-react';

// export default function Footer() {
//     const socialLinks = [
//         { href: 'https://twitter.com/roggertzy', icon: Twitter, label: 'Twitter' },
//         { href: 'https://github.com/roggrt', icon: Github, label: 'GitHub' },
//         { href: 'https://www.youtube.com/@RogerRojas96', icon: Youtube, label: 'YouTube' },
//         { href: 'https://www.instagram.com/roggertzy', icon: Instagram, label: 'Instagram' },
//         { href: 'https://www.linkedin.com/in/roggrt/', icon: Linkedin, label: 'LinkedIn' }
//     ];

//     const services = [
//         'UI/UX Design',
//         'Desarrollo Frontend',
//         'Desarrollo Backend',
//         'WordPress',
//         'Arquitectura Software',
//         'Design Systems'
//     ];

//     const links = ['Inicio', 'Servicios', 'Proyectos', 'Blog', 'Contacto'];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1
//         }
//     };

//     return (
//         <footer className="py-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
//             <motion.div
//                 className="max-w-7xl mx-auto px-6"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//             >
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//                     <motion.div
//                         className="col-span-1 md:col-span-2"
//                         variants={itemVariants}
//                     >
//                         <motion.div
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="inline-block"
//                         >
//                             <Link
//                                 href="#inicio"
//                                 className="text-2xl font-bold text-accent-red dark:text-accent-yellow"
//                             >
//                                 roggrt.dev
//                             </Link>
//                         </motion.div>
//                         <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6 max-w-md">
//                             Software Architect, Full Stack Developer y UI/UX Designer especializado
//                             en crear productos digitales excepcionales que combinan diseño intuitivo
//                             con implementación robusta.
//                         </p>
//                         <div className="flex gap-4">
//                             {/*{socialLinks.map((social) => (*/}
//                             {/*    <motion.div*/}
//                             {/*        key={social.href}*/}
//                             {/*        whileHover={{*/}
//                             {/*            scale: 1.2,*/}
//                             {/*            rotate: 5,*/}
//                             {/*            color: 'var(--accent-color)',*/}
//                             {/*        }}*/}
//                             {/*        whileTap={{ scale: 0.9 }}*/}
//                             {/*        style={{*/}
//                             {/*            '--accent-color': 'rgb(239, 68, 68)',*/}
//                             {/*        }}*/}
//                             {/*    >*/}
//                             {/*        <Link*/}
//                             {/*            href={social.href}*/}
//                             {/*            target="_blank"*/}
//                             {/*            rel="noopener noreferrer"*/}
//                             {/*            className="text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow transition-colors"*/}
//                             {/*            aria-label={social.label}*/}
//                             {/*        >*/}
//                             {/*            <social.icon size={20} />*/}
//                             {/*        </Link>*/}
//                             {/*    </motion.div>*/}
//                             {/*))}*/}





//                             {socialLinks.map((social) => (
//                                 <motion.div
//                                     key={social.href}
//                                     whileHover={{
//                                         scale: 1.2,
//                                         rotate: 5,
//                                     }}
//                                     whileTap={{ scale: 0.9 }}
//                                 >
//                                     <Link
//                                         href={social.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-warm
//                 transition-colors duration-300"
//                                         aria-label={social.label}
//                                     >
//                                         <social.icon size={20} />
//                                     </Link>
//                                 </motion.div>
//                             ))}







//                         </div>
//                     </motion.div>

//                     <motion.div variants={itemVariants}>
//                         <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
//                             Servicios
//                         </h4>
//                         <ul className="space-y-2">
//                             {services.map((service) => (
//                                     <motion.li
//                                         key={service}
//                                         whileHover={{ x: 5 }}
//                                         className="relative group"
//                                         >
//                                 <Link
//                                     href="#servicios"
//                                     className="text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow transition-colors inline-block"
//                                 >
//                             {service}
//                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red dark:bg-accent-yellow group-hover:w-full transition-all duration-300" />
//                         </Link>
//                     </motion.li>
//                     ))}
//                 </ul>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//                 <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
//                     Enlaces
//                 </h4>
//                 <ul className="space-y-2">
//                     {links.map((item) => (
//                         <motion.li
//                             key={item}
//                             whileHover={{ x: 5 }}
//                             className="relative group"
//                         >
//                             <Link
//                                 href={`#${item.toLowerCase()}`}
//                                 className="text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow transition-colors inline-block"
//                             >
//                                 {item}
//                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red dark:bg-accent-yellow group-hover:w-full transition-all duration-300" />
//                             </Link>
//                         </motion.li>
//                     ))}
//                 </ul>
//             </motion.div>
//         </div>

//     <motion.div
//         variants={itemVariants}
//         className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8"
//     >
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-600 dark:text-gray-400 text-sm">
//                 © {new Date().getFullYear()} Roger Rojas. Todos los derechos reservados.
//             </p>
//             <div className="flex items-center gap-8">
//                 <motion.div whileHover={{ y: -2 }}>
//                     <Link
//                         href="/privacy"
//                         className="text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow transition-colors"
//                     >
//                         Política de Privacidad
//                     </Link>
//                 </motion.div>
//                 <motion.div whileHover={{ y: -2 }}>
//                     <Link
//                         href="/terms"
//                         className="text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow transition-colors"
//                     >
//                         Términos de Servicio
//                     </Link>
//                 </motion.div>
//             </div>
//         </div>
//     </motion.div>
// </motion.div>
// </footer>
// );
// }



'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Github, Youtube, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { href: 'https://twitter.com/roggertzy', icon: Twitter, label: 'Twitter' },
        { href: 'https://github.com/roggrt', icon: Github, label: 'GitHub' },
        { href: 'https://www.youtube.com/@RogerRojas96', icon: Youtube, label: 'YouTube' },
        { href: 'https://www.instagram.com/roggertzy', icon: Instagram, label: 'Instagram' },
        { href: 'https://www.linkedin.com/in/roggrt/', icon: Linkedin, label: 'LinkedIn' }
    ];

    const services = [
        { name: 'UI/UX Design', href: '/services/uiux-design' },
        { name: 'Desarrollo Frontend', href: '/services/frontend-development' },
        { name: 'Desarrollo Backend', href: '/services/backend-development' },
        { name: 'WordPress', href: '/services/wordpress' },
        { name: 'Arquitectura Software', href: '/services/software-architecture' },
        { name: 'Design Systems', href: '/services/design-systems' }
    ];

    const links = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/#servicios' },
        { name: 'Proyectos', href: '/#proyectos' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/#contacto' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <footer className="py-16 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <motion.div
                className="max-w-7xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <motion.div
                        className="col-span-1 md:col-span-2"
                        variants={itemVariants}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Link
                                href="/"
                                className="text-2xl font-bold text-accent-red dark:text-accent-yellow"
                            >
                                Torisoftt
                            </Link>
                        </motion.div>
                        <p className="text-gray-600 dark:text-gray-400 mt-4 mb-6 max-w-md">
                            Software Architect, Full Stack Developer y UI/UX Designer especializado
                            en crear productos digitales excepcionales que combinan diseño intuitivo
                            con implementación robusta.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.div
                                    key={social.href}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow
                                        transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                            Servicios
                        </h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <motion.li
                                    key={service.name}
                                    whileHover={{ x: 5 }}
                                    className="relative group"
                                >
                                    <Link
                                        href={service.href}
                                        className="text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow 
                                        transition-colors inline-block"
                                    >
                                        {service.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red dark:bg-accent-yellow 
                                        group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                            Enlaces
                        </h4>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 5 }}
                                    className="relative group"
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-accent-red dark:text-gray-400 dark:hover:text-accent-yellow 
                                        transition-colors inline-block"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red dark:bg-accent-yellow 
                                        group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} Roger Rojas. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-8">
                            <motion.div whileHover={{ y: -2 }}>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 
                                    dark:hover:text-accent-yellow transition-colors"
                                >
                                    Política de Privacidad
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ y: -2 }}>
                                <Link
                                    href="/terms"
                                    className="text-sm text-gray-600 hover:text-accent-red dark:text-gray-400 
                                    dark:hover:text-accent-yellow transition-colors"
                                >
                                    Términos de Servicio
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}