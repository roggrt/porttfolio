// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Code, HandCoins, Award, Zap, ChevronRight, Heart } from 'lucide-react';

// const WhyUsSection = () => {
//     // Ventajas diferenciadoras
//     const advantages = [
//         {
//             icon: Code,
//             title: 'Desarrolladores reales',
//             description: 'Expertos en código, no instaladores de plantillas'
//         },
//         {
//             icon: HandCoins,
//             title: 'Precio directo',
//             description: 'Sin intermediarios que inflen los costos'
//         },
//         {
//             icon: Award,
//             title: 'Calidad garantizada',
//             description: 'Conocimiento y experiencia en grandes proyectos'
//         }
//     ];

//     return (
//         <section className="py-16 bg-white dark:bg-gray-900">
//             <div className="max-w-6xl mx-auto px-6">
//                 {/* Título principal */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
//                         ¿Por qué <span className="text-accent-red dark:text-accent-red">Torisoftt</span> es diferente?
//                     </h2>
//                     <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Desarrolladores profesionales, sin intermediarios, a precios justos
//                     </p>
//                 </div>

//                 {/* Contenido principal - Layout reorganizado */}
//                 <div className="grid md:grid-cols-12 gap-8 mb-8">
//                     {/* Imagen vertical a la izquierda - 4 columnas, misma altura que el texto */}
//                     <div className="md:col-span-4 flex justify-center">
//                         <div className="relative w-full h-full min-h-[520px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
//                             <Image 
//                                 src="/tori-y-leo.jpeg" 
//                                 alt="Nuestros gatos Tori y Leo"
//                                 fill
//                                 style={{ objectFit: 'cover', objectPosition: 'center' }}
//                                 className="transition-transform duration-500 hover:scale-105"
//                                 priority
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                             <div className="absolute bottom-0 left-0 right-0 p-5">
//                                 <div className="flex items-center gap-2 mb-1">
//                                     <Heart className="w-5 h-5 text-accent-red" fill="#ff3e00" />
//                                     <p className="text-white text-sm font-medium">Tori & Leo, nuestros compañeros</p>
//                                 </div>
//                                 <p className="text-white/80 text-xs">Amantes de los gatos y el buen código</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Texto explicativo - 8 columnas */}
//                     <div className="md:col-span-8">
//                         <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//                             La verdad sobre el desarrollo web
//                         </h3>
                        
//                         <div className="space-y-4 mb-6">
//                             <p className="text-gray-700 dark:text-gray-300">
//                                 Después de años trabajando en <strong>agencias y empresas de desarrollo</strong>, descubrimos una realidad del mercado: la mayoría de agencias <strong>subcontratan o tercerizan</strong> el desarrollo web porque no es su especialidad.
//                             </p>
                            
//                             <p className="text-gray-700 dark:text-gray-300">
//                                 Muchas veces hacen que diseñadores sin experiencia en programación instalen plantillas, o contratan freelancers externos pagándoles una <strong>fracción del valor</strong> que cobran al cliente final.
//                             </p>
                            
//                             <p className="text-gray-700 dark:text-gray-300">
//                                 En Torisoftt <strong>somos los desarrolladores directos</strong> de tu proyecto. Al eliminar intermediarios, ofrecemos la misma calidad profesional a un precio justo y accesible para emprendedores y empresas.
//                             </p>

//                             <p className="text-gray-700 dark:text-gray-300 italic">
//                                 Y sí, nos apasionan los gatos y los animales en general. Creemos que ese mismo cuidado y atención que les damos a nuestras mascotas lo trasladamos a cada proyecto que desarrollamos.
//                             </p>

//                             <p className="text-gray-700 dark:text-gray-300">
//                                 Estamos trabajando <strong>constantemente para ofrecer el mejor servicio</strong> a nuestros clientes, buscando siempre la excelencia en cada detalle y la satisfacción total con el resultado final.
//                             </p>
//                         </div>
                        
//                         <Link
//                             href="/nosotros"
//                             className="inline-flex items-center text-accent-red dark:text-accent-red hover:text-red-700 dark:hover:text-red-400 font-medium transition-colors mb-8"
//                         >
//                             <span>Más sobre nosotros</span>
//                             <ChevronRight className="ml-1 w-5 h-5" />
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Ventajas en cards - Ahora ocupan todo el ancho horizontal */}
//                 <div className="grid md:grid-cols-3 gap-6 mb-8">
//                     {advantages.map((advantage) => (
//                         <div
//                             key={advantage.title}
//                             className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full"
//                         >
//                             <div className="w-12 h-12 rounded-full bg-accent-red/10 dark:bg-accent-red/10 flex items-center justify-center mb-4">
//                                 <advantage.icon className="w-6 h-6 text-accent-red dark:text-accent-red" />
//                             </div>
//                             <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{advantage.title}</h3>
//                             <p className="text-gray-600 dark:text-gray-400">{advantage.description}</p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Llamado a la acción - mismo estilo que las cards de arriba */}
//                 <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700">
//                     <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//                         ¿Cansado de precios inflados y resultados mediocres?
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                         Aprovecha nuestra promoción especial y obtén un sitio web profesional desarrollado por expertos.
//                     </p>
//                     <button 
//                         onClick={() => {
//                             const message = "¡Hola! Me interesa la promoción de desarrollo por $150. ¿Podría obtener más información?";
//                             window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
//                         }}
//                         className="inline-flex items-center justify-center px-6 py-3 bg-accent-red hover:bg-red-700 dark:bg-accent-red dark:hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200"
//                     >
//                         <Zap className="w-5 h-5 mr-2" />
//                         Desarrollo web por solo $150
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhyUsSection;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Code, HandCoins, Award, Zap, ChevronRight, Heart, Users } from 'lucide-react';

const WhyUsSection = () => {
    // Ventajas diferenciadoras
    const advantages = [
        {
            icon: Code,
            title: 'Desarrolladores reales',
            description: 'Expertos en código, no instaladores de plantillas'
        },
        {
            icon: HandCoins,
            title: 'Precio directo',
            description: 'Sin intermediarios que inflen los costos'
        },
        {
            icon: Award,
            title: 'Calidad garantizada',
            description: 'Conocimiento y experiencia en grandes proyectos'
        }
    ]; 

    // Texto recuperado del Hero original
    const originalHeroText = "Desarrolladores profesionales, sin intermediarios, a precios justos";

    return (
        <section id="sobre-nosotros" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                {/* Título principal */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                        ¿Por qué <span className="text-accent-red dark:text-accent-red">Torisoftt</span> es diferente?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    En Torisoftt somos un equipo de desarrolladores Full Stack & UI/UX designers especializados en páginas web, sistemas de gestión y desarrollo de software empresarial.
                    </p>
                </div>

                {/* Contenido principal - Layout reorganizado */}
                <div className="grid md:grid-cols-12 gap-8 mb-8">
                    {/* Imagen vertical a la izquierda - 4 columnas, misma altura que el texto */}
                    <div className="md:col-span-4 flex justify-center">
                        <div className="relative w-full h-full min-h-[520px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
                            <Image 
                                src="/tori-y-leo.jpeg" 
                                alt="Nuestros gatos Tori y Leo"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                className="transition-transform duration-500 hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <div className="flex items-center gap-2 mb-1">
                                    <Heart className="w-5 h-5 text-accent-red" fill="#ff3e00" />
                                    <p className="text-white text-sm font-medium">Tori & Leo, nuestros compañeros</p>
                                </div>
                                <p className="text-white/80 text-xs">Amantes de los gatos y el buen código</p>
                            </div>
                        </div>
                    </div>

                    {/* Texto explicativo - 8 columnas */}
                    <div className="md:col-span-8">
                        {/* Etiqueta superior - Sobre nosotros */}
                        {/* <Link 
                            href="#sobre-nosotros"
                            className="inline-flex items-center mb-6 text-gray-900 dark:text-white text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <Users className="mr-2 w-4 h-4 text-accent-red dark:text-accent-red" />
                            <span>Sobre nosotros</span>
                        </Link> */}

                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            La verdad sobre el desarrollo web
                        </h3>
                        
                        {/* Texto original del Hero recuperado */}
                        <p className="text-gray-700 dark:text-gray-300 mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-accent-red dark:border-accent-red">
                            {originalHeroText}
                        </p>
                        
                        <div className="space-y-4 mb-6">
                            <p className="text-gray-700 dark:text-gray-300">
                                Después de años trabajando en <strong>agencias y empresas de desarrollo</strong>, descubrimos una realidad del mercado: la mayoría de agencias <strong>subcontratan o tercerizan</strong> el desarrollo web porque no es su especialidad.
                            </p>
                            
                            <p className="text-gray-700 dark:text-gray-300">
                                Muchas veces hacen que diseñadores sin experiencia en programación instalen plantillas, o contratan freelancers externos pagando una <strong>fracción del valor</strong> que cobran al cliente final.
                            </p>
                            
                            <p className="text-gray-700 dark:text-gray-300">
                                En Torisoftt <strong>somos los desarrolladores directos</strong> de tu proyecto. Al eliminar intermediarios, ofrecemos la misma calidad profesional a un precio justo y accesible para emprendedores y empresas.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300 italic">
                                Y sí, nos apasionan los gatos y los animales en general. Creemos que ese mismo cuidado y atención que les damos a nuestras mascotas lo trasladamos a cada proyecto que desarrollamos.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                Estamos trabajando <strong>constantemente para ofrecer el mejor servicio</strong> a nuestros clientes, buscando siempre la excelencia en cada detalle y la satisfacción total con el resultado final.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link
                                href="/"
                                className="inline-flex items-center text-accent-red dark:text-accent-red hover:text-red-700 dark:hover:text-red-400 font-medium transition-colors"
                            >
                                <span>Más sobre nosotros</span>
                                <ChevronRight className="ml-1 w-5 h-5" />
                            </Link>
                            
                            <Link
                                href="#contacto"
                                className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                            >
                                <span>Contactar ahora</span>
                                <ChevronRight className="ml-1 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Ventajas en cards - Ahora ocupan todo el ancho horizontal */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {advantages.map((advantage) => (
                        <div
                            key={advantage.title}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 h-full"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent-red/10 dark:bg-accent-red/10 flex items-center justify-center mb-4">
                                <advantage.icon className="w-6 h-6 text-accent-red dark:text-accent-red" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{advantage.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{advantage.description}</p>
                        </div>
                    ))}
                </div>

                {/* Llamado a la acción - mismo estilo que las cards de arriba */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        ¿Cansado de precios inflados y resultados mediocres?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Aprovecha nuestra promoción especial y obtén un sitio web profesional desarrollado por expertos.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button 
                            onClick={() => {
                                const message = "¡Hola! Me interesa la promoción de desarrollo por $150. ¿Podría obtener más información?";
                                window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
                            }}
                            className="inline-flex items-center justify-center px-6 py-3 bg-accent-red hover:bg-red-700 dark:bg-accent-red dark:hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-200"
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            Desarrollo web por solo $150
                        </button>
                        
                        <Link
                            href="#contacto"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-all duration-200"
                        >
                            Contactar ahora
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;