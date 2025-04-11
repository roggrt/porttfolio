// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
// import TechScroll from './TechScroll';
// import CodeEditor from './CodeEditor';

// // Ejemplos de código simplificados (4 muestras)
// const codeExamples = [
//     {
//         language: 'React',
//         filename: 'App.tsx',
//         code: `import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div className="container">
//       <h1>Torisoftt</h1>
//       <p>Contador: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Incrementar
//       </button>
//     </div>
//   );
// }`
//     },
//     {
//         language: 'PHP',
//         filename: 'index.php',
//         code: `<?php
// $host = "localhost";
// $user = "root";
// $password = "";
// $database = "proyectos";

// $conexion = mysqli_connect($host, $user, $password, $database);

// if (!$conexion) {
//     die("Error de conexión: " . mysqli_connect_error());
// }

// $sql = "SELECT * FROM proyectos WHERE estado = 'activo'";
// $resultado = mysqli_query($conexion, $sql);

// if (mysqli_num_rows($resultado) > 0) {
//     while($fila = mysqli_fetch_assoc($resultado)) {
//         echo "<h3>" . $fila["nombre"] . "</h3>";
//     }
// }
// ?>`
//     },
//     {
//         language: 'JavaScript',
//         filename: 'script.js',
//         code: `// Configuración de la aplicación
// const config = {
//   apiUrl: 'https://api.torisoftt.com',
//   timeout: 5000
// };

// // Función para obtener datos
// async function fetchProjects() {
//   try {
//     const response = await fetch(\`\${config.apiUrl}/projects\`);
    
//     if (!response.ok) {
//       throw new Error('Error al obtener proyectos');
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// }`
//     },
//     {
//         language: 'CSS',
//         filename: 'styles.css',
//         code: `.container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
//   font-family: 'Inter', sans-serif;
// }

// .header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 2rem;
//   border-bottom: 1px solid #eaeaea;
// }

// .button {
//   background-color: #ff3e00;
//   color: white;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 4px;
//   cursor: pointer;
// }`
//     }
// ];

// const HeroSection = () => {
//     return (
//         <>
//             <section className="pt-32 pb-24 relative w-full overflow-hidden transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
//                 {/* Fondo con gradiente y cuadrícula */}
//                 <div className="absolute inset-0 z-0">
//                     {/* Gradiente sutil */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>

//                     {/* Cuadrícula */}
//                     <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
//                 </div>

//                 {/* Contenedor principal con margen adecuado */}
//                 <div className="max-w-7xl mx-auto px-6 relative z-10">
//                     <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
//                         {/* Lado izquierdo: Contenido de texto */}
//                         <motion.div
//                             initial={{opacity: 0, y: 20}}
//                             animate={{opacity: 1, y: 0}}
//                             transition={{duration: 0.6}}
//                             className="text-gray-900 dark:text-white"
//                         >
//                             {/* Etiqueta superior */}
//                             <Link
//                                 href="#contacto"
//                                 className="inline-flex items-center mb-6 text-accent-red dark:text-accent-yellow text-sm border border-accent-red dark:border-accent-yellow px-3 py-1 rounded-full hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                             >
//                                 <span>Contáctanos</span>
//                                 <ChevronRight className="ml-1 w-4 h-4" />
//                             </Link>

//                             {/* Título principal corregido para que esté en máximo 3 líneas */}
//                             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
//                 <span className="text-gray-900 dark:text-white">
//                   Diseño de Páginas Web <span className="text-accent-red dark:text-accent-yellow"> & </span>
//                 </span>
//                                 <span className="text-accent-red dark:text-accent-yellow">
//                   Desarrollo de Software
//                 </span>
//                             </h1>

//                             {/* Subtítulo */}
//                             <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-6">
//                                 Diseñamos y desarrollamos soluciones web, arquitectura de software para tu negocio, a tu medida
//                             </h2>

//                             {/* Descripción */}
//                             <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
//                                 En Torisoftt somos un equipo de desarrolladores Full Stack & UI/UX designers especializados en
//                                 páginas web, sistemas de gestión y desarrollo de software empresarial.
//                             </p>

//                             {/* Botones de acción */}
//                             <div className="flex flex-wrap gap-4">
//                                 <Link
//                                     href="#cotizador"
//                                     className="group px-6 py-3 bg-accent-red dark:bg-accent-yellow hover:bg-accent-red/90 dark:hover:bg-accent-yellow/90 text-white dark:text-gray-900 rounded-md font-medium transition-colors inline-flex items-center gap-2"
//                                 >
//                                     Cotizar Proyecto
//                                     <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
//                                 </Link>

//                                 <Link
//                                     href="#proyectos"
//                                     className="group px-6 py-3 text-gray-900 dark:text-white bg-transparent border border-gray-300 dark:border-gray-700 hover:border-accent-red/50 dark:hover:border-accent-yellow/50 rounded-md font-medium transition-colors inline-flex items-center gap-2"
//                                 >
//                                     Ver proyectos
//                                     <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
//                                 </Link>
//                             </div>
//                         </motion.div>

//                         {/* Lado derecho: Componente CodeEditor */}
//                         <motion.div
//                             initial={{opacity: 0, x: 20}}
//                             animate={{opacity: 1, x: 0}}
//                             transition={{duration: 0.6, delay: 0.3}}
//                             className="hidden md:block relative"
//                         >
//                             <CodeEditor
//                                 codeExamples={codeExamples}
//                                 initialIndex={0}
//                                 height="280px"
//                                 autoChangeInterval={15000}
//                             />
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* Componente de scroll de tecnologías */}
//             <TechScroll />
//         </>
//     );
// };

// export default HeroSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, ChevronRight, MessageSquare } from 'lucide-react';
import TechScroll from './TechScroll';
import CodeEditor from './CodeEditor';

// Ejemplos de código simplificados (4 muestras)
const codeExamples = [
    {
        language: 'React',
        filename: 'App.tsx',
        code: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <h1>Torisoftt</h1>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}`
    },
    {
        language: 'PHP',
        filename: 'index.php',
        code: `<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "proyectos";

$conexion = mysqli_connect($host, $user, $password, $database);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

$sql = "SELECT * FROM proyectos WHERE estado = 'activo'";
$resultado = mysqli_query($conexion, $sql);

if (mysqli_num_rows($resultado) > 0) {
    while($fila = mysqli_fetch_assoc($resultado)) {
        echo "<h3>" . $fila["nombre"] . "</h3>";
    }
}
?>`
    },
    {
        language: 'JavaScript',
        filename: 'script.js',
        code: `// Configuración de la aplicación
const config = {
  apiUrl: 'https://api.torisoftt.com',
  timeout: 5000
};

// Función para obtener datos
async function fetchProjects() {
  try {
    const response = await fetch(\`\${config.apiUrl}/projects\`);
    
    if (!response.ok) {
      throw new Error('Error al obtener proyectos');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}`
    },
    {
        language: 'CSS',
        filename: 'styles.css',
        code: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eaeaea;
}

.button {
  background-color: #ff3e00;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}`
    }
];

const HeroSection = () => {
    const handleWhatsAppPromo = () => {
        const message = "¡Hola! Me interesa la promoción de desarrollo por $150. ¿Podría obtener más información?";
        window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    };

    return (
        <>
            <section className="pt-32 pb-24 relative w-full overflow-hidden transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
                {/* Fondo con gradiente y cuadrícula */}
                <div className="absolute inset-0 z-0">
                    {/* Gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black"></div>

                    {/* Cuadrícula */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>

                {/* Banner de promoción */}
                <motion.div 
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.4}}
                    className="absolute top-0 left-0 right-0 bg-accent-red dark:bg-accent-red py-2 z-20"
                >
                    <div className="max-w-7xl mx-auto px-6 flex items-center justify-center md:justify-between">
                        <p className="text-sm font-medium text-white">¡OFERTA ESPECIAL! Desarrollo web profesional por solo $150</p>
                        <button
                            onClick={handleWhatsAppPromo}
                            className="hidden md:flex items-center gap-2 bg-white dark:bg-gray-900 text-accent-red dark:text-accent-red px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <span>Solicitar ahora</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                {/* Contenedor principal con margen adecuado */}
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Lado izquierdo: Contenido de texto */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            className="text-gray-900 dark:text-white"
                        >
                            {/* Etiqueta superior */}
                            <Link
                                href="#sobre-nosotros"
                                className="inline-flex items-center mb-6 text-accent-red dark:text-white text-sm border border-accent-red dark:border-white px-3 py-1 rounded-full hover:bg-accent-red/10 dark:hover:bg-white/10 transition-colors"
                            >
                                <span>Sobre Torisoftt, ¿Quienes somos?</span>
                                <ChevronRight className="ml-1 w-4 h-4" />
                            </Link>

                            {/* Título principal */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                                <span className="text-gray-900 dark:text-white">
                                    Diseño de Páginas Web <span className="text-accent-red dark:text-accent-red"> & </span>
                                </span>
                                <span className="text-accent-red dark:text-accent-red">
                                    Desarrollo de Software
                                </span>
                            </h1>

                            {/* Subtítulo */}
                            <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                                Diseñamos y desarrollamos sitios web, aplicaciones móviles y arquitectura de software para tu negocio, a tu medida
                            </h2>

                            {/* Promoción destacada */}
                            <div className="mb-8 p-4 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold text-accent-red dark:text-accent-red">
                                    ¡APROVECHA NUESTRA PROMOCIÓN!
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    Desarrollo web profesional por solo <span className="font-bold">$150</span>. Oferta por tiempo limitado.
                                </p>
                                <button
                                    onClick={handleWhatsAppPromo}
                                    className="w-full group px-4 py-3 bg-accent-red hover:bg-red-700 dark:bg-accent-red dark:hover:bg-red-700 text-white rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Solicitar información por WhatsApp
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
                                </button>
                            </div>

                            {/* Botones de acción */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#contacto"
                                    className="group px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-md font-medium transition-colors inline-flex items-center gap-2"
                                >
                                    Cotizar Proyecto
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"/>
                                </Link>

                                <Link
                                    href="#proyectos"
                                    className="group px-6 py-3 text-gray-700 dark:text-gray-300 bg-transparent border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-md font-medium transition-colors inline-flex items-center gap-2"
                                >
                                    Ver proyectos
                                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Lado derecho: Componente CodeEditor */}
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="hidden md:block relative"
                        >
                            <div className="absolute -top-6 right-4 z-20 bg-accent-red text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                                ¡Oferta $150!
                            </div>
                            <CodeEditor
                                codeExamples={codeExamples}
                                initialIndex={0}
                                height="280px"
                                autoChangeInterval={15000}
                            />
                            <div className="mt-4 text-center">
                                <button
                                    onClick={handleWhatsAppPromo}
                                    className="inline-flex items-center gap-2 text-accent-red dark:text-accent-red font-medium hover:underline"
                                >
                                    Menciona la promoción al contactarnos
                                    <MessageSquare className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Componente de scroll de tecnologías */}
            <TechScroll />
        </>
    );
};

export default HeroSection;