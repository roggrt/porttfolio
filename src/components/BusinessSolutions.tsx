// src/components/BusinessSolutions.tsx

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingBag,
    Briefcase,
    GraduationCap,
    UtensilsCrossed,
    Heart,
    Home,
    Check,
    CheckCircle,
    Clock,
    Users,
    Globe,
    Building,
    Camera,
    Newspaper,
    Music,
    Truck
} from 'lucide-react';

interface BusinessNiche {
    title: string;
    icon: any;
    description: string;
    benefits: string[];
    features: string[];
    example: string;
}

interface QuizQuestion {
    id: number;
    question: string;
    options: {
        text: string;
        type: 'ecommerce' | 'blog' | 'business' | 'portfolio' | 'membership';
        points: number;
    }[];
}

const businessNiches: BusinessNiche[] = [
    {
        title: "Comercio Minorista",
        icon: ShoppingBag,
        description: "Lleva tu tienda física al mundo digital o crea una tienda completamente online.",
        benefits: [
            "Ventas 24/7",
            "Alcance global",
            "Gestión de inventario",
            "Múltiples métodos de pago"
        ],
        features: [
            "Catálogo de productos",
            "Carrito de compras",
            "Proceso de checkout",
            "Sistema de cupones"
        ],
        example: "Tiendas de ropa, electrónicos, artesanías"
    },
    {
        title: "Servicios Profesionales",
        icon: Briefcase,
        description: "Establece una presencia profesional y genera leads cualificados.",
        benefits: [
            "Credibilidad profesional",
            "Generación de leads",
            "Agenda online",
            "Testimonios de clientes"
        ],
        features: [
            "Páginas de servicios",
            "Formularios de contacto",
            "Sistema de citas",
            "Portfolio de trabajos"
        ],
        example: "Abogados, consultores, agencias creativas"
    },
    {
        title: "Educación Online",
        icon: GraduationCap,
        description: "Crea y vende cursos online o gestiona una institución educativa.",
        benefits: [
            "Alcance ilimitado",
            "Contenido multimedia",
            "Evaluaciones online",
            "Certificaciones digitales"
        ],
        features: [
            "LMS integrado",
            "Membresías",
            "Foros de discusión",
            "Progreso del estudiante"
        ],
        example: "Academias, cursos online, tutorías"
    },
    {
        title: "Medios y Publicaciones",
        icon: Newspaper,
        description: "Crea una plataforma de contenido dinámica y atractiva.",
        benefits: [
            "Publicación programada",
            "Categorización eficiente",
            "Monetización de contenido",
            "Newsletter integrado"
        ],
        features: [
            "Sistema de blogs",
            "Gestión de suscriptores",
            "Publicidad integrada",
            "Analíticas detalladas"
        ],
        example: "Revistas digitales, blogs, portales de noticias"
    },
    {
        title: "Industria Creativa",
        icon: Camera,
        description: "Muestra tu trabajo creativo y atrae nuevos clientes.",
        benefits: [
            "Galerías visuales",
            "Portafolio dinámico",
            "Integración con redes sociales",
            "Booking de servicios"
        ],
        features: [
            "Galerías multimedia",
            "Calendario de eventos",
            "Blog creativo",
            "Tienda de arte digital"
        ],
        example: "Fotógrafos, artistas, músicos, diseñadores"
    },
    {
        title: "Logística y Transporte",
        icon: Truck,
        description: "Gestiona servicios de transporte y logística eficientemente.",
        benefits: [
            "Seguimiento en tiempo real",
            "Cotizaciones automáticas",
            "Gestión de flotas",
            "Portal de clientes"
        ],
        features: [
            "Sistema de tracking",
            "Calculadora de envíos",
            "Área de clientes",
            "Informes automáticos"
        ],
        example: "Empresas de transporte, courier, mudanzas"
    }
];

const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        question: "¿Cuál es el objetivo principal de tu sitio web?",
        options: [
            {
                text: "Vender productos online",
                type: 'ecommerce',
                points: 10
            },
            {
                text: "Compartir contenido y noticias",
                type: 'blog',
                points: 8
            },
            {
                text: "Mostrar información de mi empresa",
                type: 'business',
                points: 6
            },
            {
                text: "Mostrar mi trabajo/portfolio",
                type: 'portfolio',
                points: 7
            }
        ]
    },
    {
        id: 2,
        question: "¿Qué tipo de interacción necesitas con tus usuarios?",
        options: [
            {
                text: "Procesar pagos y pedidos",
                type: 'ecommerce',
                points: 10
            },
            {
                text: "Comentarios y discusiones",
                type: 'blog',
                points: 8
            },
            {
                text: "Formularios de contacto",
                type: 'business',
                points: 6
            },
            {
                text: "Área de miembros",
                type: 'membership',
                points: 9
            }
        ]
    },
    {
        id: 3,
        question: "¿Con qué frecuencia actualizarás el contenido?",
        options: [
            {
                text: "Diariamente (blog/noticias)",
                type: 'blog',
                points: 10
            },
            {
                text: "Regularmente (productos)",
                type: 'ecommerce',
                points: 8
            },
            {
                text: "Ocasionalmente",
                type: 'business',
                points: 6
            },
            {
                text: "Principalmente estático",
                type: 'portfolio',
                points: 5
            }
        ]
    }
];

const WordPressQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Array<string>>([]);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState<string>('');

    const handleAnswer = (type: string) => {
        const newAnswers = [...answers, type];
        setAnswers(newAnswers);

        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(curr => curr + 1);
        } else {
            const types = {
                ecommerce: 0,
                blog: 0,
                business: 0,
                portfolio: 0,
                membership: 0
            };

            newAnswers.forEach(answer => {
                types[answer as keyof typeof types] += 1;
            });

            // Versión corregida
            const recommendedType = Object.entries(types).reduce((a, b) =>
                types[a[0] as keyof typeof types] > types[b[0] as keyof typeof types] ? a : b
            )[0];

            setResult(recommendedType);
            setShowResult(true);
        }
    };

    const resultMessages = {
        ecommerce: "Una tienda online WordPress con WooCommerce sería ideal para tu negocio.",
        blog: "Un blog WordPress con un tema optimizado para contenido sería la mejor opción.",
        business: "Un sitio WordPress corporativo te ayudaría a establecer tu presencia online.",
        portfolio: "Un tema WordPress tipo portfolio te permitiría mostrar tu trabajo de forma profesional.",
        membership: "Una plataforma WordPress con membresías sería perfecta para tu modelo de negocio."
    };

    return (
        <div className="max-w-2xl mx-auto">
            {!showResult ? (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">
                Pregunta {currentQuestion + 1} de {quizQuestions.length}
              </span>
                            <span className="text-sm text-accent-red dark:text-accent-yellow">
                {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
              </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                                className="bg-accent-red dark:bg-accent-yellow h-2 rounded-full transition-all"
                                style={{
                                    width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`
                                }}
                            />
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                        {quizQuestions[currentQuestion].question}
                    </h3>

                    <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAnswer(option.type)}
                                className="w-full p-4 text-left rounded-xl border-2 border-gray-200
                         dark:border-gray-700 hover:border-accent-red
                         dark:hover:border-accent-yellow transition-colors"
                            >
                                {option.text}
                            </motion.button>
                        ))}
                    </div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
                >
                    <div className="mb-6">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Recomendación
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {resultMessages[result as keyof typeof resultMessages]}
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            setCurrentQuestion(0);
                            setAnswers([]);
                            setShowResult(false);
                        }}
                        className="px-6 py-2 bg-accent-red dark:bg-accent-yellow text-white
                     dark:text-gray-900 rounded-xl font-medium hover:opacity-90
                     transition-opacity"
                    >
                        Comenzar de nuevo
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default function BusinessSolutions() {
    return (
        <>
            {/* Business Niches Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            Soluciones por Industria
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            WordPress se adapta a las necesidades específicas de cada industria.
                            Descubre cómo podemos ayudarte a destacar en tu sector.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {businessNiches.map((niche, index) => (
                            <motion.div
                                key={niche.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                            >
                                <niche.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow mb-4" />
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    {niche.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {niche.description}
                                </p>
                                <div className="mb-4">
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                        Beneficios Clave:
                                    </h4>
                                    <ul className="space-y-1">
                                        {niche.benefits.map((benefit, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                                            >
                                                <Check className="w-4 h-4 text-green-500" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                        Ejemplos:
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {niche.example}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Quiz Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            Descubre la Solución Perfecta
                        </h2>



                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Responde algunas preguntas para recibir una recomendación personalizada
              sobre el tipo de sitio WordPress que mejor se adapta a tus necesidades.
            </p>
          </motion.div>

          <WordPressQuiz />
        </div>
      </section>
    </>
  );
}