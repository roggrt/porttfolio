// src/app/services/uiux-design/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Figma, Users, Sparkles, LayoutGrid, Brain } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const features = [
  {
    icon: Figma,
    title: 'Diseño de Interfaces',
    description: 'Creación de interfaces intuitivas y atractivas que mejoran la experiencia del usuario.'
  },
  {
    icon: Users,
    title: 'Investigación UX',
    description: 'Análisis profundo del comportamiento del usuario para crear soluciones centradas en sus necesidades.'
  },
  {
    icon: Layers,
    title: 'Prototipado',
    description: 'Desarrollo de prototipos interactivos para validar conceptos y flujos de usuario.'
  },
  {
    icon: LayoutGrid,
    title: 'Design Systems',
    description: 'Creación de sistemas de diseño escalables y consistentes para productos digitales.'
  },
  {
    icon: Brain,
    title: 'UX Strategy',
    description: 'Definición de estrategias de experiencia de usuario alineadas con objetivos de negocio.'
  },
  {
    icon: Sparkles,
    title: 'UI Animation',
    description: 'Diseño de microinteracciones y animaciones que mejoran el engagement.'
  }
];

export default function UIUXDesignPage() {
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
                UI/UX Design
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Creando experiencias digitales excepcionales que conectan con tus usuarios
                y potencian tu negocio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-6">
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

        {/* Process Section */}
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
                Proceso de Diseño
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Un enfoque sistemático para crear soluciones de diseño efectivas
              </p>
            </motion.div>
            
            {/* Add process steps here */}
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Descubrimiento e Investigación',
                  description: 'Análisis profundo de necesidades, usuarios y competencia'
                },
                {
                  step: '02',
                  title: 'Ideación y Wireframing',
                  description: 'Desarrollo de conceptos y estructura básica de la interfaz'
                },
                {
                  step: '03',
                  title: 'Diseño Visual y Prototipado',
                  description: 'Creación de interfaces detalladas y prototipos interactivos'
                },
                {
                  step: '04',
                  title: 'Pruebas y Refinamiento',
                  description: 'Validación con usuarios y mejora iterativa del diseño'
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <span className="text-4xl font-bold text-accent-red dark:text-accent-yellow">
                    {process.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}