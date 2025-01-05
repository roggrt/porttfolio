

// src/app/services/frontend-development/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Zap, Shield, BarChart, Smartphone, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const technologies = [
  {
    name: 'React/Next.js',
    description: 'Desarrollo de aplicaciones web modernas y escalables'
  },
  {
    name: 'TypeScript',
    description: 'Código más seguro y mantenible con tipado estático'
  },
  {
    name: 'Tailwind CSS',
    description: 'Diseños responsivos y personalizados con utilidades CSS'
  },
  {
    name: 'Framer Motion',
    description: 'Animaciones fluidas y microinteracciones'
  }
];

const features = [
  {
    icon: Laptop,
    title: 'Desarrollo Web Moderno',
    description: 'Aplicaciones web rápidas y escalables usando las últimas tecnologías.'
  },
  {
    icon: Zap,
    title: 'Rendimiento Optimizado',
    description: 'Optimización de carga y rendimiento para una experiencia fluida.'
  },
  {
    icon: Shield,
    title: 'Mejores Prácticas',
    description: 'Código limpio y mantenible siguiendo estándares de la industria.'
  },
  {
    icon: BarChart,
    title: 'SEO y Analytics',
    description: 'Implementación de mejores prácticas SEO y seguimiento de métricas.'
  },
  {
    icon: Code,
    title: 'Integración API',
    description: 'Conexión seamless con backends y servicios externos.'
  },
  {
    icon: Smartphone,
    title: 'Diseño Responsivo',
    description: 'Interfaces adaptables a todos los dispositivos y tamaños de pantalla.'
  }
];

const hostingFeatures = [
  'SSL Gratuito',
  'Dominio Gratis por 1 año',
  'Email Profesional',
  'Backup Diario',
  'Soporte 24/7',
  'Panel de Control Intuitivo'
];

export default function FrontendDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Desarrollo Frontend
              </h1>
           
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
  Empresa de desarrollo Frontend en Cuenca, Ecuador. Expertos en React y Next.js. 
  Construimos interfaces modernas y eficientes que impulsan la experiencia de tus usuarios y el crecimiento de 
  tu negocio.
</p>
            </motion.div>
          </div>
        </section>

        {/* WordPress Promo Banner */}






        {/* Technologies Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Tecnologías
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Utilizamos las herramientas más modernas y eficientes del desarrollo frontend en Ecuador
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2 text-accent-red dark:text-accent-yellow">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Características
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Desarrollo frontend de alta calidad con enfoque en rendimiento y experiencia de usuario
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <feature.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>











{/* Technical Development Section */}
<section className="py-20 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Code Preview Side - Ahora a la izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative order-2 lg:order-1"
      >
        {/* Code Editor */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">page.tsx</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded text-xs bg-accent-red/20 dark:bg-accent-yellow/20
                           text-accent-red dark:text-accent-yellow">
                Next.js 14
              </span>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-4 font-mono text-sm">
            <pre className="text-gray-800 dark:text-gray-300">
              <code>{`// Modern Next.js implementation
import { Suspense } from 'react'

export default async function Page() {
  const data = await fetchData()

  return (
    <main className="container">
      <Suspense fallback={<Loading />}>
        <UserDashboard data={data} />
      </Suspense>
      
      <section className="grid">
        {/* Components */}
      </section>
    </main>
  )
}`}</code>
            </pre>
          </div>

          {/* Floating Cards */}
          <motion.div
            className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg
                     border border-gray-200 dark:border-gray-700"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-3">
              <BarChart className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Performance</p>
                <p className="text-accent-red dark:text-accent-yellow font-bold">100%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg
                     border border-gray-200 dark:border-gray-700"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Build Time</p>
                <p className="text-accent-red dark:text-accent-yellow font-bold">2.3s</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-red/20 dark:bg-accent-yellow/20
                     rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent-red/10 dark:bg-accent-yellow/10
                     rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Content Side - Ahora a la derecha */}
      <div className="relative z-10 order-1 lg:order-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl
                         bg-accent-red/10 dark:bg-accent-yellow/10">
              <Image
                src="/next.svg"
                alt="Next.js"
                width={24}
                height={24}
                className="w-6 h-6 dark:invert"
              />
            </div>
            <span className="text-accent-red dark:text-accent-yellow font-medium">
              Desarrollo Moderno
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Arquitectura Avanzada con{' '}
            <span className="text-accent-red dark:text-accent-yellow">Next.js</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Implementamos soluciones escalables utilizando las últimas tecnologías
            y mejores prácticas del desarrollo web.
          </p>

          <div className="space-y-6 mb-8">
            {[
              {
                title: "Server Components & RSC",
                description: "Renderizado híbrido para máximo rendimiento",
                icon: Code
              },
              {
                title: "Edge Computing",
                description: "Despliegue global con mínima latencia",
                icon: Zap
              },
              {
                title: "Type-Safe Development",
                description: "Código robusto y mantenible con TypeScript",
                icon: Shield
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-red/10 dark:bg-accent-yellow/10
                             flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90
                         dark:bg-accent-yellow dark:hover:bg-accent-yellow/90
                         text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium
                         transition-colors"
              >
                Iniciar proyecto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>







{/* Animated Promo Banner */}
<section className="py-12">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      className="relative overflow-hidden rounded-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
          {/* Content Side */}
          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-red/10 dark:bg-accent-yellow/10">
                <Image
                  src="/wordpress.svg"
                  alt="WordPress"
                  width={32}
                  height={32}
                  className="w-8 h-8 dark:invert" // Invertir color en modo oscuro
                />
              </div>
              <motion.span
                className="text-accent-red dark:text-accent-yellow font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                WordPress Premium
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Impulsa tu Negocio con{' '}
                <span className="text-accent-red dark:text-accent-yellow">
                  WordPress Premium
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
                Obtén un sitio web profesional con todas las características premium que necesitas para destacar en línea.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                'Tema Premium Personalizado',
                'Optimización SEO',
                'Hosting de Alto Rendimiento',
                'SSL de Por Vida',
                'Dominio Gratuito',
                'Soporte Premium 24/7'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-red/20 dark:bg-accent-yellow/20
                               flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-red dark:text-accent-yellow" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/services/wordpress"
                className="group inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90
                         dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white dark:text-gray-900
                         px-6 py-3 rounded-xl font-medium transition-all duration-300"
              >
                Descubre más
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-gray-900/10 hover:bg-gray-900/20
                           dark:bg-white/10 dark:hover:bg-white/20
                           text-gray-900 dark:text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  Cotizar ahora
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Illustration Side */}
          <motion.div
            className="relative lg:h-full min-h-[300px] z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0">
              {/* Animated Floating Elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-red/20 dark:bg-accent-yellow/20
                         rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-accent-red/30 dark:bg-accent-yellow/30
                         rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Dashboard Preview */}
            <motion.div
              className="relative z-20 bg-gray-100 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-4 shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/wordpress-dashboard.jpg"
                alt="WordPress Dashboard"
                width={600}
                height={400}
                className="rounded-lg"
                priority
              />

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <BarChart className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Rendimiento</p>
                    <p className="text-accent-red dark:text-accent-yellow font-bold">99%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Optimizado</p>
                    <p className="text-accent-red dark:text-accent-yellow font-bold">SEO Ready</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

        {/* Pricing CTA */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                ¿Listo para comenzar?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Contáctanos para discutir tu proyecto y obtener una cotización personalizada.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90
                dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white dark:text-gray-900
                px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}