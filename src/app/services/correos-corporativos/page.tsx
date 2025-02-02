// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//   Mail,
//   Shield,
//   Globe,
//   Smartphone,
//   Settings,
//   Cloud,
//   Clock,
//   Users,
//   CheckCircle,
//   Calendar,
//   MessageSquare
// } from 'lucide-react'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'

// const features = [
//   {
//     icon: Mail,
//     title: 'Correos Profesionales',
//     description: 'Correos con tu dominio empresarial que reflejan profesionalismo',
//     details: [
//       'Dirección de correo @tuempresa.com',
//       'Capacidad personalizable',
//       'Filtros antispam avanzados',
//       'Acceso desde cualquier dispositivo'
//     ]
//   },
//   {
//     icon: Shield,
//     title: 'Máxima Seguridad',
//     description: 'Protección avanzada para tus comunicaciones empresariales',
//     details: [
//       'Cifrado de extremo a extremo',
//       'Autenticación en dos pasos',
//       'Protección contra malware',
//       'Backups automáticos'
//     ]
//   },
//   {
//     icon: Cloud,
//     title: 'Almacenamiento Cloud',
//     description: 'Espacio en la nube para todos tus archivos importantes',
//     details: [
//       'Almacenamiento expandible',
//       'Compartición segura',
//       'Sincronización automática',
//       'Acceso desde cualquier lugar'
//     ]
//   },
//   {
//     icon: Calendar,
//     title: 'Calendario Compartido',
//     description: 'Organiza reuniones y eventos de manera eficiente',
//     details: [
//       'Calendarios compartidos',
//       'Programación de reuniones',
//       'Recordatorios automáticos',
//       'Integración con apps'
//     ]
//   }
// ]

// const plans = [
//   {
//     name: 'Básico',
//     price: 4.99,
//     period: 'por usuario/mes',
//     description: 'Ideal para pequeñas empresas',
//     features: [
//       'Correo @tuempresa.com',
//       '30GB de almacenamiento',
//       'Soporte por email',
//       'Antispam básico',
//       'Apps móviles'
//     ],
//     recommended: false
//   },
//   {
//     name: 'Empresarial',
//     price: 8.99,
//     period: 'por usuario/mes',
//     description: 'Para empresas en crecimiento',
//     features: [
//       'Todo del plan Básico',
//       '100GB de almacenamiento',
//       'Soporte prioritario',
//       'Calendario compartido',
//       'Videollamadas',
//       'Seguridad avanzada'
//     ],
//     recommended: true
//   },
//   {
//     name: 'Premium',
//     price: 12.99,
//     period: 'por usuario/mes',
//     description: 'Máxima capacidad y seguridad',
//     features: [
//       'Todo del plan Empresarial',
//       'Almacenamiento ilimitado',
//       'Soporte 24/7',
//       'Archivado avanzado',
//       'eDiscovery',
//       'Administración avanzada'
//     ],
//     recommended: false
//   }
// ]

// const benefits = [
//   {
//     icon: Users,
//     title: 'Colaboración en Tiempo Real',
//     description: 'Trabaja en equipo con documentos compartidos y mensajería instantánea'
//   },
//   {
//     icon: Clock,
//     title: 'Disponibilidad 24/7',
//     description: 'Accede a tus correos y archivos en cualquier momento y lugar'
//   },
//   {
//     icon: Settings,
//     title: 'Migración Gratuita',
//     description: 'Te ayudamos a migrar desde tu proveedor actual sin costo adicional'
//   }
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// }

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5
//     }
//   }
// }

// export default function CorporateEmailPage() {
//   const handleContactWhatsApp = (plan: string = '') => {
//     const message = plan
//       ? `¡Hola! Me interesa el plan ${plan} de correo corporativo. ¿Podrían darme más información?`
//       : '¡Hola! Me interesa el servicio de correo corporativo. ¿Podrían darme más información?'
//     window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`)
//   }

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen bg-white dark:bg-gray-900">
//         {/* Hero Section */}
//         <section className="pt-40 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="max-w-3xl mx-auto text-center"
//             >
//               <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
//                 Correos Corporativos Profesionales para tu Empresa
//               </h1>
//               <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
//                 Da una imagen profesional a tu empresa con correos corporativos.
//                 Incluye migración gratuita y soporte técnico local.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <motion.button
//                   onClick={() => handleContactWhatsApp()}
//                   className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Solicitar Información
//                 </motion.button>
//                 <motion.a
//                   href="#planes"
//                   className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Ver Planes
//                 </motion.a>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               Características Premium
//             </motion.h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature) => (
//                 <motion.div
//                   key={feature.title}
//                   className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <feature.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
//                   <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4">
//                     {feature.description}
//                   </p>
//                   <ul className="space-y-2">
//                     {feature.details.map((detail, index) => (
//                       <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                         <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                         <span>{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Plans Section */}
//         <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               Planes de Correo Corporativo
//             </motion.h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {plans.map((plan) => (
//                 <motion.div
//                   key={plan.name}
//                   className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
//                     plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
//                   }`}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                 >
//                   {plan.recommended && (
//                     <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white px-3 py-1 rounded-full text-sm">
//                       Recomendado
//                     </span>
//                   )}
//                   <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                     {plan.name}
//                   </h3>
//                   <div className="flex items-baseline mb-1">
//                     <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
//                       ${plan.price}
//                     </span>
//                     <span className="text-gray-500 dark:text-gray-400 ml-2">
//                       {plan.period}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-400 mb-6">
//                     {plan.description}
//                   </p>
//                   <ul className="space-y-3 mb-8">
//                     {plan.features.map((feature) => (
//                       <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                         <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     onClick={() => handleContactWhatsApp(plan.name)}
//                     className={`w-full py-3 rounded-lg transition-colors ${
//                       plan.recommended
//                         ? 'bg-accent-red dark:bg-accent-yellow text-white'
//                         : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
//                     }`}
//                   >
//                     Contratar Ahora
//                   </button>
           
           





//                   </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               Beneficios Adicionales
//             </motion.h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {benefits.map((benefit, index) => (
//                 <motion.div
//                   key={benefit.title}
//                   className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <benefit.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
//                   <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     {benefit.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//           <div className="max-w-4xl mx-auto px-6">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               Preguntas Frecuentes
//             </motion.h2>
//             <div className="space-y-6">
//               <motion.div
//                 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
//                   ¿Puedo migrar mis correos actuales?
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   Sí, ofrecemos migración gratuita desde cualquier proveedor de correo. Nuestro equipo técnico se encarga de todo el proceso sin pérdida de información.
//                 </p>
//               </motion.div>
              
//               <motion.div
//                 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
//                   ¿Qué soporte técnico incluye?
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   Incluimos soporte técnico local en horario laboral por teléfono, WhatsApp y email. Los planes empresariales y premium tienen soporte prioritario.
//                 </p>
//               </motion.div>

//               <motion.div
//                 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
//                   ¿Necesito tener un dominio propio?
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   Si ya tienes un dominio, podemos usarlo. Si no tienes, te asesoramos en la compra y configuración de uno nuevo sin costo adicional.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20">
//           <div className="max-w-3xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//                 ¿Listo para profesionalizar tu correo empresarial?
//               </h2>
//               <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
//                 Obtén una consultoría gratuita y conoce cómo podemos ayudarte
//               </p>
//               <motion.button
//                 onClick={() => handleContactWhatsApp()}
//                 className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Contactar Ahora
//               </motion.button>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Shield,
  Globe,
  Smartphone,
  Settings,
  Cloud,
  Clock,
  Users,
  CheckCircle,
  Calendar,
  MessageSquare,
  FileText,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Zap,
  Server
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const features = [
  {
    icon: Mail,
    title: 'Correos @tuempresa.com',
    description: 'Dirección profesional que refleja tu marca',
    details: [
      'Dominio personalizado para tu empresa',
      'Múltiples alias de correo',
      'Firmas corporativas personalizadas',
      'Integración con clientes de correo'
    ]
  },
  {
    icon: Shield,
    title: 'Seguridad Empresarial',
    description: 'Protección avanzada para tus comunicaciones',
    details: [
      'Cifrado de extremo a extremo',
      'Detección de phishing y spam',
      'Autenticación en dos pasos',
      'Protección contra malware'
    ]
  },
  {
    icon: Cloud,
    title: 'Suite Colaborativa',
    description: 'Herramientas para trabajo en equipo',
    details: [
      'Almacenamiento en la nube',
      'Documentos compartidos',
      'Chat empresarial integrado',
      'Videoconferencias HD'
    ]
  },
  {
    icon: Calendar,
    title: 'Agenda Empresarial',
    description: 'Gestión eficiente del tiempo',
    details: [
      'Calendarios compartidos',
      'Programación de reuniones',
      'Sincronización multidispositivo',
      'Recordatorios automáticos'
    ]
  }
]

const setupGuide = [
  {
    title: 'Elegir tu Dominio',
    description: 'Selecciona un dominio profesional para tu empresa',
    steps: [
      'Verificar disponibilidad del dominio',
      'Registrar el dominio (.com, .ec, etc.)',
      'Configurar registros DNS',
      'Verificar propiedad del dominio'
    ]
  },
  {
    title: 'Configurar Correos',
    description: 'Crear y personalizar las cuentas de correo',
    steps: [
      'Crear cuentas para usuarios',
      'Establecer contraseñas seguras',
      'Configurar firmas corporativas',
      'Activar autenticación 2FA'
    ]
  },
  {
    title: 'Migrar Datos',
    description: 'Transferir correos y contactos existentes',
    steps: [
      'Respaldar correos actuales',
      'Importar contactos y calendarios',
      'Transferir correos históricos',
      'Verificar migración completa'
    ]
  },
  {
    title: 'Configurar Dispositivos',
    description: 'Acceder desde todos tus dispositivos',
    steps: [
      'Configurar en smartphones',
      'Instalar en computadoras',
      'Sincronizar calendarios',
      'Verificar notificaciones'
    ]
  }
]

const plans = [
  {
    name: 'Básico',
    price: 4.99,
    period: 'por usuario/mes',
    description: 'Ideal para profesionales independientes',
    storage: '30GB',
    features: [
      'Correo @tuempresa.com',
      '30GB de almacenamiento',
      'Soporte por email',
      'Antispam básico',
      'Apps móviles',
      'Calendario básico'
    ],
    recommended: false
  },
  {
    name: 'Empresarial',
    price: 8.99,
    period: 'por usuario/mes',
    description: 'Perfecto para pequeñas empresas',
    storage: '100GB',
    features: [
      'Todo del plan Básico',
      '100GB de almacenamiento',
      'Soporte prioritario',
      'Calendario compartido',
      'Videollamadas HD',
      'Chat empresarial',
      'Documentos colaborativos',
      'Administración avanzada'
    ],
    recommended: true
  },
  {
    name: 'Premium',
    price: 12.99,
    period: 'por usuario/mes',
    description: 'Para empresas que necesitan máxima capacidad',
    storage: 'Ilimitado',
    features: [
      'Todo del plan Empresarial',
      'Almacenamiento ilimitado',
      'Soporte 24/7',
      'Archivado avanzado',
      'eDiscovery',
      'Administración de dispositivos',
      'Políticas de seguridad',
      'Reportes avanzados'
    ],
    recommended: false
  }
]

const faqs = [
  {
    question: '¿Qué es un correo corporativo?',
    answer: 'Un correo corporativo es una dirección de email profesional que usa el nombre de tu empresa (ejemplo: juan@tuempresa.com). A diferencia de los correos gratuitos, estos proporcionan una imagen más profesional y vienen con características empresariales como mayor seguridad, almacenamiento y herramientas de colaboración.'
  },
  {
    question: '¿Cómo funciona la migración gratuita?',
    answer: 'Nuestro equipo técnico se encarga de todo el proceso de migración. Transferimos todos tus correos, contactos y calendarios desde tu proveedor actual sin pérdida de información. El proceso es seguro y normalmente toma entre 24-48 horas, sin interrumpir tu servicio actual.'
  },
  {
    question: '¿Puedo acceder desde mi celular?',
    answer: 'Sí, todos nuestros planes incluyen acceso desde cualquier dispositivo. Puedes configurar tu correo en la app nativa de tu iPhone o Android, o usar nuestras aplicaciones específicas que incluyen todas las funcionalidades como chat y videollamadas.'
  },
  {
    question: '¿Necesito comprar un dominio nuevo?',
    answer: 'Si ya tienes un dominio, podemos usarlo para tus correos corporativos. Si no tienes uno, te asesoramos en la compra y configuración de un nuevo dominio. Trabajamos con todos los registradores principales y extensiones (.com, .ec, etc.).'
  },
  {
    question: '¿Qué pasa si necesito más almacenamiento?',
    answer: 'Puedes aumentar el almacenamiento en cualquier momento. También puedes mezclar planes diferentes para distintos usuarios según sus necesidades. Por ejemplo, algunos usuarios con plan básico y otros con premium.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function CorporateEmailPage() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)

  const handleContactWhatsApp = (plan: string = '') => {
    const message = plan
      ? `¡Hola! Me interesa el plan ${plan} de correo corporativo. ¿Podrían darme más información?`
      : '¡Hola! Me interesa el servicio de correo corporativo. ¿Podrían darme más información?'
    window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
    {/* Hero Section */}
    <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-4 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow text-sm font-medium">
                    Correos Empresariales
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">
                    <Globe className="w-4 h-4 mr-1" />
                    Correos corporativos en Cuenca, Ecuador y Latinoamérica
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  Tu Empresa Merece un Correo Profesional
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Da el siguiente paso con correos corporativos <span className="text-accent-red dark:text-accent-yellow">@tuempresa.com</span>. 
                  Soporte técnico local y migración gratuita en toda la región.
                </p>
                <ul className="space-y-3">
                  {[
                    'Correos profesionales con tu dominio',
                    'Herramientas de colaboración',
                    'Almacenamiento en la nube',
                    'Atención personalizada en Ecuador',
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    onClick={() => handleContactWhatsApp()}
                    className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cotizar Ahora
                  </motion.button>
                  <motion.a
                    href="#guia"
                    className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Cómo Funciona
                  </motion.a>
                </div>
              </motion.div>

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://img1.wsimg.com/cdnassets/transform/d080bfb5-4ece-4e5d-add2-25f32a27222a/FOSMO-96642_Mega-Mrq-Image-Test_Email-Category-SLP"
                  alt="Email Services"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/20 to-transparent dark:from-accent-yellow/20" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-white">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-80">Uptime</div>
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Soporte</div>
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-80">Seguro</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Benefits */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Shield className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Máxima Seguridad
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Zap className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Migración Gratuita
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Server className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  99.9% Uptime
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <MessageSquare className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Soporte Local
                </span>
              </motion.div>
            </div>
          </div>
        </section>




      {/* What is Corporate Email Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1 rounded-full bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow text-sm font-medium">
                  Lo Básico
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  ¿Qué es un Correo Corporativo?
                </h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-400">
                  <p className="text-lg">
                    Un correo corporativo es una dirección de email profesional que utiliza el nombre 
                    de tu empresa <span className="text-accent-red dark:text-accent-yellow font-medium">(ejemplo: info@tuempresa.com)</span> en 
                    lugar de dominios genéricos como gmail.com o hotmail.com.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Correo Personal */}
                    <div className="p-4 bg-white dark:bg-gray-900 rounded-xl">
                      <div className="text-red-500 font-medium mb-2">❌ Correo Personal</div>
                      <div className="text-sm space-y-2 opacity-75">
                        <p>tuempresa.ventas@gmail.com</p>
                        <p>miempresa2023@hotmail.com</p>
                        <p>empresa.ecuador@outlook.com</p>
                      </div>
                    </div>
                    
                    {/* Correo Corporativo */}
                    <div className="p-4 bg-white dark:bg-gray-900 rounded-xl">
                      <div className="text-green-500 font-medium mb-2">✅ Correo Corporativo</div>
                      <div className="text-sm space-y-2 opacity-75">
                        <p>ventas@tuempresa.com</p>
                        <p>info@tuempresa.com</p>
                        <p>contacto@tuempresa.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Beneficios del Correo Corporativo
                    </h3>
                    <ul className="grid gap-3">
                      {[
                        {
                          title: 'Imagen Profesional',
                          description: 'Proyecta credibilidad y seriedad a tus clientes y proveedores'
                        },
                        {
                          title: 'Mayor Seguridad',
                          description: 'Protección avanzada contra spam, virus y ataques cibernéticos'
                        },
                        {
                          title: 'Herramientas Empresariales',
                          description: 'Calendario compartido, almacenamiento en la nube y más'
                        },
                        {
                          title: 'Control Total',
                          description: 'Administra todos los correos de tu empresa desde un solo lugar'
                        }
                      ].map((benefit, index) => (
                        <motion.li
                          key={benefit.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-1" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {benefit.title}
                            </div>
                            <div className="text-sm">
                              {benefit.description}
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://img1.wsimg.com/cdnassets/transform/a58e9151-3c99-47ea-98f2-aa19bcc85cca/mega-pro-email-intl-all-xl"
                    alt="Interfaz de Correo Corporativo"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/10 to-transparent dark:from-accent-yellow/10" />
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-lg">
                      <Shield className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Nivel de Seguridad</div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise</div>
                    </div>
                  </div>
                </motion.div>

                {/* Features Tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <Mail className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
                    <span>Incluye almacenamiento desde 1GB</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Todo lo que Necesitas para tu Comunicación Empresarial
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Suite completa de herramientas diseñadas para impulsar la productividad de tu equipo
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Guide Section */}
        <section id="guia" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Guía de Configuración
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Proceso paso a paso para configurar tu correo corporativo
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {setupGuide.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 mb-4 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.steps.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                ¿Prefieres que nosotros nos encarguemos de todo?
              </p>
              <motion.button
                onClick={() => handleContactWhatsApp()}
                className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Configuración Guiada
              </motion.button>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Planes Diseñados para tu Empresa
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Elige el plan que mejor se adapte a tus necesidades
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                    plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
                      Recomendado
                    </span>
                  )}
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-1">
                    <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Almacenamiento: <span className="font-semibold">{plan.storage}</span>
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleContactWhatsApp(plan.name)}
                    className={`w-full py-3 rounded-lg transition-colors ${
                      plan.recommended
                        ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
                        : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
                    }`}
                  >
                    Contratar Ahora
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Todo lo que necesitas saber sobre correos corporativos
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <div
                      className={`transform transition-transform ${
                        selectedFaq === index ? 'rotate-180' : ''
                      }`}
                    >
                      <ArrowRight className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                    </div>
                  </button>
                  {selectedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12">
              <motion.div
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  ¿Listo para profesionalizar tu correo empresarial?
                </h2>
           
           



                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Obtén una consultoría gratuita y descubre cómo podemos ayudarte a mejorar 
                  la comunicación de tu empresa con correos corporativos profesionales
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.button
                    onClick={() => handleContactWhatsApp()}
                    className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contactar Ahora
                  </motion.button>
                  <motion.a
                    href="#planes"
                    className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Planes y Precios
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                ¿Por qué elegirnos?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent-red/10 dark:bg-accent-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Soporte Local
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Atención personalizada en Ecuador, en tu horario y tu idioma
                </p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent-red/10 dark:bg-accent-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Migración Gratuita
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Transferimos todos tus correos sin costo adicional
                </p>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent-red/10 dark:bg-accent-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-red dark:text-accent-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Disponibilidad 24/7
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tus correos siempre disponibles cuando los necesites
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}