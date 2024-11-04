// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import { motion, Variants } from 'framer-motion'
// import { Home, ArrowLeft } from 'lucide-react'

// export default function NotFound() {
//   const containerVariants: Variants = {
//     initial: { opacity: 0 },
//     animate: { 
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   }

//   const catVariants: Variants = {
//     initial: { rotate: 0 },
//     animate: { 
//       rotate: [-5, 5, -5, 5, 0],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         repeatType: "reverse" as const
//       }
//     }
//   }

//   const floatingVariants: Variants = {
//     initial: { y: 0 },
//     animate: {
//       y: [-5, 5, -5],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         repeatType: "reverse" as const
//       }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6 py-12">
//       <motion.div
//         variants={containerVariants}
//         initial="initial"
//         animate="animate"
//         className="max-w-2xl w-full text-center"
//       >
//         {/* SVG Gato perdido animado */}
//         <motion.div
//           variants={floatingVariants}
//           initial="initial"
//           animate="animate"
//           className="w-64 h-64 mx-auto mb-8"
//         >
//           <svg
//             viewBox="0 0 200 200"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-full"
//           >
//             <motion.g
//               variants={catVariants}
//               initial="initial"
//               animate="animate"
//             >
//               {/* Cuerpo del gato */}
//               <circle
//                 cx="100"
//                 cy="120"
//                 r="40"
//                 className="fill-accent-red dark:fill-accent-yellow"
//               />
//               {/* Ojos */}
//               <circle cx="85" cy="110" r="5" fill="currentColor" className="text-white dark:text-gray-900" />
//               <circle cx="115" cy="110" r="5" fill="currentColor" className="text-white dark:text-gray-900" />
//               {/* Hocico */}
//               <motion.path
//                 d="M95 125q5 5 10 0"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 className="text-white dark:text-gray-900"
//               />
//               {/* Orejas */}
//               <motion.path
//                 d="M75 90l-15-15M125 90l15-15"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 className="text-white dark:text-gray-900"
//               />
//               {/* Cola animada */}
//               <motion.path
//                 d="M135 140c10 10 20 10 30 0"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 className="text-white dark:text-gray-900"
//                 animate={{
//                   d: [
//                     "M135 140c10 10 20 10 30 0",
//                     "M135 140c10 -10 20 -10 30 0",
//                     "M135 140c10 10 20 10 30 0"
//                   ]
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatType: "reverse"
//                 }}
//               />
//             </motion.g>
//           </svg>
//         </motion.div>

//         {/* Mensaje divertido */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="space-y-4"
//         >
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//             ¡Miau! Página no encontrada
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-400">
//             Parece que nuestro gato Tori se ha perdido jugando con esta URL 🐱
//           </p>
//           <p className="text-gray-500 dark:text-gray-500">
//             Error 404 - ¡Ayúdanos a encontrar el camino de vuelta!
//           </p>
//         </motion.div>

//         {/* Botones de acción */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
//         >
//           <Link
//             href="/"
//             className="inline-flex items-center justify-center gap-2 px-6 py-3 
//                      text-white bg-accent-red hover:bg-accent-red/90 
//                      dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 
//                      dark:text-gray-900 rounded-lg font-medium transition-colors
//                      group"
//           >
//             <Home className="w-4 h-4 group-hover:rotate-12 transition-transform" />
//             Llevar a Tori a casa
//           </Link>
          
//           <button
//             onClick={() => window.history.back()}
//             className="inline-flex items-center justify-center gap-2 px-6 py-3 
//                      text-accent-red dark:text-accent-yellow 
//                      border-2 border-accent-red dark:border-accent-yellow 
//                      hover:bg-accent-red/5 dark:hover:bg-accent-yellow/5 
//                      rounded-lg font-medium transition-colors
//                      group"
//           >
//             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//             Volver al camino anterior
//           </button>
//         </motion.div>

//         {/* Enlaces útiles */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-8 text-sm text-gray-500 dark:text-gray-400"
//         >
//           ¿Perdido? Puedes intentar buscar en nuestro{' '}
//           <Link 
//             href="/sitemap" 
//             className="text-accent-red dark:text-accent-yellow hover:underline"
//           >
//             mapa del sitio
//           </Link>
//           {' '}o{' '}
//           <Link 
//             href="/contact" 
//             className="text-accent-red dark:text-accent-yellow hover:underline"
//           >
//             contactarnos
//           </Link>
//         </motion.p>
//       </motion.div>
//     </div>
//   )
// }



'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const imageVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const floatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6 py-12">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="max-w-2xl w-full text-center"
      >
        {/* Imagen de Tori animada */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="mb-8 relative w-64 h-64 mx-auto"
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-red 
                     dark:border-accent-yellow shadow-xl"
          >
            <Image
              src="/tori404.jpeg"
              alt="Tori el gato perdido"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Mensaje divertido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            ¡Oh No! Página no encontrada
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Parece que nuestra gata Tori se ha perdido jugando con esta URL 🐱
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Error 404
          </p>
        </motion.div>

        {/* Botón de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 
                     text-white bg-accent-red hover:bg-accent-red/90 
                     dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 
                     dark:text-gray-900 rounded-lg font-medium transition-colors
                     group"
          >
            <Home className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Llevar a Tori a casa
          </Link>
        </motion.div>

        {/* Enlace de contacto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          ¿Necesitas ayuda? Puedes{' '}
          <Link 
            href="/contact" 
            className="text-accent-red dark:text-accent-yellow hover:underline"
          >
            contactarnos
          </Link>
        </motion.p>
      </motion.div>
    </div>
  )
}