

'use client'

import { useState } from 'react'
import { 
  Layers, 
  Users, 
  Sparkles, 
  LayoutGrid, 
  Brain,
  Search,
  Pencil,
  Monitor,
  TestTube,
  Rocket,
  Globe,
  Heart
} from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'

interface ProcessStep {
  icon: any;
  title: string;
  description: string;
  details: string[];
}

interface Feature {
  icon: any;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'Diseños Centrados en Personas',
    description: 'Creamos diseños pensando en tus usuarios, haciendo que cada interacción sea natural y agradable.'
  },
  {
    icon: Heart,
    title: 'Experiencias Memorables',
    description: 'Desarrollamos interfaces que conectan emocionalmente con tus usuarios y fortalecen tu marca.'
  },
  {
    icon: Layers,
    title: 'Diseños que Funcionan',
    description: 'Probamos cada detalle para asegurar que tu sitio web sea fácil de usar y efectivo.'
  },
  {
    icon: LayoutGrid,
    title: 'Diseño Web Moderno',
    description: 'Creamos sitios web atractivos y actuales que destacan tu marca en el mundo digital.'
  },
  {
    icon: Brain,
    title: 'Soluciones Creativas',
    description: 'Combinamos creatividad y estrategia para resolver los desafíos de tu negocio digital.'
  },
  {
    icon: Globe,
    title: 'Presencia Global',
    description: 'Diseñamos pensando en tu audiencia local y en tu potencial de crecimiento internacional.'
  }
]

const tools = [
  {
    name: 'Figma',
    icon: '/tools/figma.svg'
  },
  {
    name: 'Illustrator',
    icon: '/tools/illustrator.svg'
  }
]

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Conocemos tu Negocio',
    description: 'Entendemos tus objetivos y a tu público.',
    details: [
      'Análisis de tu mercado',
      'Estudio de tu competencia',
      'Conversaciones con usuarios',
      'Identificación de necesidades',
      'Definición de objetivos'
    ]
  },
  {
    icon: Pencil,
    title: 'Planificación',
    description: 'Diseñamos la mejor estructura para tu sitio.',
    details: [
      'Organización del contenido',
      'Diseño de navegación',
      'Bocetos iniciales',
      'Revisión contigo',
      'Ajustes según feedback'
    ]
  },
  {
    icon: Monitor,
    title: 'Diseño Visual',
    description: 'Creamos el aspecto de tu sitio web.',
    details: [
      'Diseño atractivo',
      'Colores de marca',
      'Elementos visuales',
      'Versión móvil',
      'Animaciones suaves'
    ]
  },
  {
    icon: TestTube,
    title: 'Pruebas',
    description: 'Nos aseguramos que todo funcione bien.',
    details: [
      'Pruebas con usuarios',
      'Revisión de usabilidad',
      'Pruebas en dispositivos',
      'Control de calidad',
      'Mejoras finales'
    ]
  },
  {
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Ponemos tu sitio en marcha.',
    details: [
      'Preparación final',
      'Revisión completa',
      'Publicación',
      'Monitoreo inicial',
      'Soporte continuo'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

interface ProcessStepProps {
  step: ProcessStep;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStep = ({ step, isActive, onClick }: ProcessStepProps) => {
  return (
    <motion.div
      className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-accent-red dark:bg-accent-yellow text-white' 
          : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <step.icon className={`w-8 h-8 ${
          isActive 
            ? 'text-white' 
            : 'text-accent-red dark:text-accent-yellow'
        }`} />
        <h3 className={`text-xl font-semibold ${
          isActive 
            ? 'text-white' 
            : 'text-gray-900 dark:text-white'
        }`}>
          {step.title}
        </h3>
      </div>
      <p className={`mb-4 ${
        isActive 
          ? 'text-white/90' 
          : 'text-gray-600 dark:text-gray-400'
      }`}>
        {step.description}
      </p>
      {isActive && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2 ml-4"
        >
          {step.details.map((detail, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white/90">{detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  )
}

export default function UIUXDesignPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                Diseño Web Profesional en Ecuador | Páginas Web que Venden
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 mb-12"
                variants={itemVariants}
              >
                Creamos sitios web hermosos y efectivos que atraen más clientes. 
                Diseño web personalizado en Cuenca y toda Latinoamérica, pensado 
                para hacer crecer tu negocio online.
              </motion.p>
              <motion.div 
                className="flex justify-center gap-4"
                variants={itemVariants}
              >
                <motion.a 
                  href="#contacto" 
                  className="bg-accent-red dark:bg-accent-yellow text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Presupuesto Gratis
                </motion.a>
                <motion.a 
                  href="#portfolio" 
                  className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-6 py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Proyectos
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-10 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center gap-12">
              {tools.map((tool) => (
                <div key={tool.name} className="text-center">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    width={40}
                    height={40}
                    className="mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true }}
            >
              Servicios de Diseño Web
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              viewport={{ once: true }}
            >
              ¿Cómo Trabajamos?
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  step={step}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                ¿Listo para tener un sitio web profesional?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 mb-8"
                variants={itemVariants}
              >
                Agenda una llamada gratuita y conversemos sobre tu proyecto
              </motion.p>
              <motion.a 
                href="mailto:info@torisoftt.com" 
                className="bg-accent-red dark:bg-accent-yellow text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity inline-block"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar Ahora
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}