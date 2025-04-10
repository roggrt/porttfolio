
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Globe,
    Server,
    Search,
    Rocket,
    Mail,
    Shield,
    Code,
    Smartphone,
    Settings,
    MessageSquare,
    CheckCircle
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const features = [
    {
        icon: Globe,
        title: 'Dominios',
        description: 'Te ayudamos con todo lo relacionado a tu dominio web',
        image: 'https://img1.wsimg.com/cdnassets/transform/c502bc73-bdb3-49f5-97db-f731fda682c4/Mega_MRQ_Domains',
        details: [
            'Asesoría en la elección del mejor dominio',
            'Gestión completa de la compra si lo necesitas',
            'Configuración DNS y conexión con hosting existente',
            'Renovación y mantenimiento del dominio'
        ]
    },
    {
        icon: Server,
        title: 'Hosting Premium',
        description: 'Alojamiento web profesional con máximo rendimiento',
        image: 'https://img1.wsimg.com/cdnassets/transform/fc524f9d-e34b-44d7-9ab3-d824e96c6083/gd-websitebuilder-marquee-desktop',
        details: [
            'Migración gratuita desde tu hosting actual',
            'Backups diarios automáticos',
            '99.9% de tiempo de actividad garantizado',
            'Panel de control intuitivo'
        ]
    },
    {
        icon: Mail,
        title: 'Correos Corporativos',
        description: 'Correos profesionales para tu empresa',
        image: 'https://img1.wsimg.com/cdnassets/transform/739d195b-22b8-47f4-8919-1f8321ba18c9/mega-ox-pro-email-int-es_xl',
        details: [
            'Correos @tuempresa.com',
            'Integración con Gmail y Outlook',
            'Capacidad de almacenamiento flexible',
            'Soporte técnico incluido'
        ]
    },
    {
        icon: Shield,
        title: 'Seguridad Total',
        description: 'Protección completa para tu sitio web',
        image: 'https://img1.wsimg.com/cdnassets/transform/d080bfb5-4ece-4e5d-add2-25f32a27222a/FOSMO-96642_Mega-Mrq-Image-Test_Email-Category-SLP',
        details: [
            'Certificado SSL gratuito',
            'Firewall de aplicaciones web',
            'Protección contra malware',
            'Monitoreo 24/7'
        ]
    }
]

const plans = [
    {
        name: 'Landing Page',
        price: 199,
        description: 'Ideal para presentar tu negocio online',
        features: [
            'Diseño One Page',
            'Asesoría en dominio',
            'Hosting 1 año',
            '1 correo corporativo',
            'SSL gratuito',
            'Formulario de contacto'
        ],
        recommended: false
    },
    {
        name: 'Profesional',
        price: 299,
        description: 'Para negocios que necesitan más funcionalidades',
        features: [
            'Hasta 5 páginas',
            'WordPress Premium',
            'Blog incluido',
            '3 correos corporativos',
            'Chat WhatsApp',
            'Google Analytics',
            'Mantenimiento básico'
        ],
        recommended: true
    },
    {
        name: 'E-commerce',
        price: 399,
        description: 'Tienda online completa para vender en línea',
        features: [
            'WooCommerce Pro',
            'Productos ilimitados',
            'Pagos en línea',
            '5 correos corporativos',
            'Certificado SSL Premium',
            'Integración redes sociales',
            'Capacitación incluida'
        ],
        recommended: false
    }
]

const process = [
    {
        title: 'Planificación',
        description: 'Definimos objetivos y estructura del sitio',
        steps: [
            'Análisis de requerimientos',
            'Arquitectura de información',
            'Wireframes y mockups',
            'Selección de tecnologías'
        ]
    },
    {
        title: 'Diseño',
        description: 'Creamos la identidad visual de tu sitio',
        steps: [
            'Diseño UI/UX personalizado',
            'Paleta de colores',
            'Tipografías y elementos',
            'Responsive design'
        ]
    },
    {
        title: 'Desarrollo',
        description: 'Programación y configuración del sitio',
        steps: [
            'Desarrollo frontend/backend',
            'Integración CMS',
            'Optimización SEO',
            'Testing y ajustes'
        ]
    },
    {
        title: 'Lanzamiento',
        description: 'Configuración final y publicación',
        steps: [
            'Configuración hosting/dominio',
            'Migración y DNS',
            'Pruebas finales',
            'Monitoreo inicial'
        ]
    }
]

const support = [
    {
        icon: Settings,
        title: 'Mantenimiento',
        description: 'Actualizaciones de seguridad, backups y monitoreo continuo'
    },
    {
        icon: MessageSquare,
        title: 'Soporte Técnico',
        description: 'Asistencia por ticket, email o WhatsApp en horario laboral'
    },
    {
        icon: Code,
        title: 'Actualizaciones',
        description: 'Modificaciones menores y ajustes incluidos en el plan mensual'
    }
]

interface Feature {
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
    details: string[];
}

interface FeatureCardProps {
    feature: Feature;
    isSelected: boolean;
    onClick: () => void;
}

const FeatureCard = ({ feature, isSelected, onClick }: FeatureCardProps) => (
// const FeatureCard = ({ feature, isSelected, onClick }) => (
    <motion.div
        onClick={onClick}
        className={`cursor-pointer p-4 rounded-lg transition-colors ${
            isSelected
                ? 'bg-accent-red/10 dark:bg-accent-yellow/10'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
        } shadow-sm`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        <feature.icon className={`w-6 h-6 mb-2 ${
            isSelected
                ? 'text-accent-red dark:text-accent-yellow'
                : 'text-gray-600 dark:text-gray-400'
        }`} />
        <h4 className={`font-medium ${
            isSelected
                ? 'text-accent-red dark:text-accent-yellow'
                : 'text-gray-900 dark:text-white'
        }`}>
            {feature.title}
        </h4>
    </motion.div>
)

export default function WebDevelopmentPage() {
    const [selectedFeature, setSelectedFeature] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedFeature((prev) => (prev + 1) % features.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    const handleContactWhatsApp = (plan: string = '') => {
        const message = plan
            ? `¡Hola! Me interesa el plan ${plan} para desarrollo web. ¿Podrían darme más información?`
            : '¡Hola! Me interesa el servicio de desarrollo web. ¿Podrían darme más información?';
        window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900">
                {/* Hero Section */}
                <section className="pt-40 mb-8 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                                 Diseño Web Profesional y Landing Pages de Alto Impacto
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Creamos páginas web en Ecuador, que convierten visitantes en clientes.
                                Diseño personalizado, hosting premium y soporte técnico incluido.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <motion.button
                                    onClick={() => handleContactWhatsApp()}
                                    className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    Cotizar Ahora
                                </motion.button>
                                <motion.a
                                    href="#planes"
                                    className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    Ver Planes
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Tenemos todo lo que necesitas para tu sitio web
                        </motion.h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <FeatureCard
                                    key={feature.title}
                                    feature={feature}
                                    isSelected={selectedFeature === index}
                                    onClick={() => setSelectedFeature(index)}
                                />
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {features.map((feature, index) => (
                                selectedFeature === index && (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                                    >
                                        <div className="flex-1 space-y-6">
                                            <feature.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                                {feature.description}
                                            </p>
                                            {feature.details && (
                                                <ul className="space-y-3">
                                                    {feature.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                                            <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-80 object-cover rounded-lg"
                                            />
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                                 {/* Plans Section */}
                                 <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
                                     <div className="max-w-7xl mx-auto px-6">
                                         <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Planes de Desarrollo Web
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {plans.map((plan, index) => (
                                <motion.div
                                    key={plan.name}
                                    className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
                                        plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
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
                                    <div className="flex items-baseline mb-4">
                                        <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
                                            ${plan.price}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 ml-2">USD</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {plan.description}
                                    </p>
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
                                        className={`w-full py-2 rounded-lg transition-colors ${
                                            plan.recommended
                                                ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
                                                : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
                                        }`}
                                    >
                                        Solicitar Plan
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Banner de Pagos con Tarjeta */}
                <section className="py-12 relative overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: "url('https://cdn.prod.website-files.com/66041f2aa7176fac4965cba4/66e862cc5f7217432ab4d4cf_Header%20largo%20TAP.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.85
                        }}
                    />
                    <div className="absolute inset-0 bg-black/40 z-0" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center py-10"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                ¡Ahora aceptamos pagos con tarjeta!
                            </h2>
                            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                                Paga tu proyecto web de forma segura con tarjetas de crédito o débito en línea.
                                Contáctanos para recibir tu link de pago personalizado.
                            </p>

                            <div className="flex justify-center gap-6 mb-8">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-12 bg-white p-2 rounded-lg" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-12 bg-white p-2 rounded-lg" />
                            </div>

                            <motion.button
                                onClick={() => handleContactWhatsApp("Pago con tarjeta")}
                                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Solicitar Link de Pago
                            </motion.button>
                        </motion.div>
                    </div>
                </section>

                {/* Sección de Métodos de Pago Alternativos */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Métodos de Pago Alternativos
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Transferencias Bancarias */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                    Transferencias o Depósitos
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Realiza tu pago mediante transferencia bancaria o depósito en cualquiera de nuestros bancos asociados.
                                    Contáctanos para recibir los datos bancarios y completar tu pago.
                                </p>
                                <br/>



                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                                        <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-banco-pichinca.png" alt="Banco Pichincha" className="h-10 object-contain" />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                                        <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-banco-guayaquil.png" alt="Banco Guayaquil" className="h-10 object-contain" />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                                        <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-jep.png" alt="JEP Cooperativa" className="h-10 object-contain" />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                                        <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-jardin-azuayo.png" alt="Jardín Azuayo" className="h-10 object-contain" />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                                        <img src="https://puntozmart.com/wp-content/uploads/sites/26/2021/02/Banco-del-Pacifico.png" alt="Banco Pacífico" className="h-10 object-contain" />
                                    </div>
                                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                                        <img src="https://www.produbanco.com.ec/media/713976/web.png?format=webp" alt="Produbanco" className="h-10 object-contain" />
                                    </div>
                                </div>

                                <motion.button
                                    onClick={() => handleContactWhatsApp("Transferencia bancaria")}
                                    className="w-full border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Solicitar Datos Bancarios
                                </motion.button>
                            </motion.div>

                            {/* Plazos de entrega */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                    Plazos de Entrega
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Nos comprometemos a entregar tu sitio web en el menor tiempo posible, manteniendo la más alta calidad.
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tiempo de Desarrollo</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            El desarrollo promedio y entrega de un sitio web es de <span className="font-semibold">5 a 7 días hábiles</span>, dependiendo de la complejidad del proyecto.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Proceso de Desarrollo</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Durante el proceso, mantendremos una comunicación constante para asegurar que el resultado final sea lo que necesitas.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Soporte Post-lanzamiento</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Después del lanzamiento, proporcionamos soporte técnico para asegurar que todo funcione perfectamente.
                                        </p>
                                    </div>
                                </div>

                                <motion.button
                                    onClick={() => handleContactWhatsApp("Consulta sobre plazos")}
                                    className="w-full bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Consultar Disponibilidad
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Proceso de Desarrollo
                        </motion.h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-8 h-8 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {step.steps.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                                <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Support Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Soporte y Mantenimiento
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                Nos encargamos de mantener tu sitio web actualizado, seguro y funcionando perfectamente
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {support.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <item.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                ¿Listo para empezar tu proyecto web?
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Contáctanos hoy y obtén una cotización personalizada para tu sitio web
                            </p>
                            <motion.button
                                onClick={() => handleContactWhatsApp()}
                                className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contactar Ahora
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

//
// 'use client'
//
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Script from 'next/script'
// import {
//     Globe,
//     Server,
//     Search,
//     Rocket,
//     Mail,
//     Shield,
//     Code,
//     Smartphone,
//     Settings,
//     MessageSquare,
//     CheckCircle
// } from 'lucide-react'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'
//
// const features = [
//     {
//         icon: Globe,
//         title: 'Dominios',
//         description: 'Te ayudamos con todo lo relacionado a tu dominio web',
//         image: 'https://img1.wsimg.com/cdnassets/transform/c502bc73-bdb3-49f5-97db-f731fda682c4/Mega_MRQ_Domains',
//         details: [
//             'Asesoría en la elección del mejor dominio',
//             'Gestión completa de la compra si lo necesitas',
//             'Configuración DNS y conexión con hosting existente',
//             'Renovación y mantenimiento del dominio'
//         ]
//     },
//     {
//         icon: Server,
//         title: 'Hosting Premium',
//         description: 'Alojamiento web profesional con máximo rendimiento',
//         image: 'https://img1.wsimg.com/cdnassets/transform/fc524f9d-e34b-44d7-9ab3-d824e96c6083/gd-websitebuilder-marquee-desktop',
//         details: [
//             'Migración gratuita desde tu hosting actual',
//             'Backups diarios automáticos',
//             '99.9% de tiempo de actividad garantizado',
//             'Panel de control intuitivo'
//         ]
//     },
//     {
//         icon: Mail,
//         title: 'Correos Corporativos',
//         description: 'Correos profesionales para tu empresa',
//         image: 'https://img1.wsimg.com/cdnassets/transform/739d195b-22b8-47f4-8919-1f8321ba18c9/mega-ox-pro-email-int-es_xl',
//         details: [
//             'Correos @tuempresa.com',
//             'Integración con Gmail y Outlook',
//             'Capacidad de almacenamiento flexible',
//             'Soporte técnico incluido'
//         ]
//     },
//     {
//         icon: Shield,
//         title: 'Seguridad Total',
//         description: 'Protección completa para tu sitio web',
//         image: 'https://img1.wsimg.com/cdnassets/transform/d080bfb5-4ece-4e5d-add2-25f32a27222a/FOSMO-96642_Mega-Mrq-Image-Test_Email-Category-SLP',
//         details: [
//             'Certificado SSL gratuito',
//             'Firewall de aplicaciones web',
//             'Protección contra malware',
//             'Monitoreo 24/7'
//         ]
//     }
// ]
//
// const plans = [
//     {
//         name: 'Landing Page',
//         price: 199,
//         description: 'Ideal para presentar tu negocio online',
//         features: [
//             'Diseño One Page',
//             'Asesoría en dominio',
//             'Hosting 1 año',
//             '1 correo corporativo',
//             'SSL gratuito',
//             'Formulario de contacto'
//         ],
//         recommended: false
//     },
//     {
//         name: 'Profesional',
//         price: 299,
//         description: 'Para negocios que necesitan más funcionalidades',
//         features: [
//             'Hasta 5 páginas',
//             'WordPress Premium',
//             'Blog incluido',
//             '3 correos corporativos',
//             'Chat WhatsApp',
//             'Google Analytics',
//             'Mantenimiento básico'
//         ],
//         recommended: true
//     },
//     {
//         name: 'E-commerce',
//         price: 399,
//         description: 'Tienda online completa para vender en línea',
//         features: [
//             'WooCommerce Pro',
//             'Productos ilimitados',
//             'Pagos en línea',
//             '5 correos corporativos',
//             'Certificado SSL Premium',
//             'Integración redes sociales',
//             'Capacitación incluida'
//         ],
//         recommended: false
//     }
// ]
//
// const process = [
//     {
//         title: 'Planificación',
//         description: 'Definimos objetivos y estructura del sitio',
//         steps: [
//             'Análisis de requerimientos',
//             'Arquitectura de información',
//             'Wireframes y mockups',
//             'Selección de tecnologías'
//         ]
//     },
//     {
//         title: 'Diseño',
//         description: 'Creamos la identidad visual de tu sitio',
//         steps: [
//             'Diseño UI/UX personalizado',
//             'Paleta de colores',
//             'Tipografías y elementos',
//             'Responsive design'
//         ]
//     },
//     {
//         title: 'Desarrollo',
//         description: 'Programación y configuración del sitio',
//         steps: [
//             'Desarrollo frontend/backend',
//             'Integración CMS',
//             'Optimización SEO',
//             'Testing y ajustes'
//         ]
//     },
//     {
//         title: 'Lanzamiento',
//         description: 'Configuración final y publicación',
//         steps: [
//             'Configuración hosting/dominio',
//             'Migración y DNS',
//             'Pruebas finales',
//             'Monitoreo inicial'
//         ]
//     }
// ]
//
// const support = [
//     {
//         icon: Settings,
//         title: 'Mantenimiento',
//         description: 'Actualizaciones de seguridad, backups y monitoreo continuo'
//     },
//     {
//         icon: MessageSquare,
//         title: 'Soporte Técnico',
//         description: 'Asistencia por ticket, email o WhatsApp en horario laboral'
//     },
//     {
//         icon: Code,
//         title: 'Actualizaciones',
//         description: 'Modificaciones menores y ajustes incluidos en el plan mensual'
//     }
// ]
//
// interface Feature {
//     icon: React.ElementType;
//     title: string;
//     description: string;
//     image: string;
//     details: string[];
// }
//
// interface FeatureCardProps {
//     feature: Feature;
//     isSelected: boolean;
//     onClick: () => void;
// }
//
// const FeatureCard = ({ feature, isSelected, onClick }: FeatureCardProps) => (
//     <motion.div
//         onClick={onClick}
//         className={`cursor-pointer p-4 rounded-lg transition-colors ${
//             isSelected
//                 ? 'bg-accent-red/10 dark:bg-accent-yellow/10'
//                 : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
//         } shadow-sm`}
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//     >
//         <feature.icon className={`w-6 h-6 mb-2 ${
//             isSelected
//                 ? 'text-accent-red dark:text-accent-yellow'
//                 : 'text-gray-600 dark:text-gray-400'
//         }`} />
//         <h4 className={`font-medium ${
//             isSelected
//                 ? 'text-accent-red dark:text-accent-yellow'
//                 : 'text-gray-900 dark:text-white'
//         }`}>
//             {feature.title}
//         </h4>
//     </motion.div>
// )
//
// export default function WebDevelopmentPage() {
//     const [selectedFeature, setSelectedFeature] = useState(0)
//
//     // Función para enviar evento de GTM con navegación retrasada
//     const gtagSendEvent = (url: string, eventName: string, eventCategory: string, eventLabel: string, eventValue: number = 0) => {
//         if (typeof window === 'undefined' || !window.gtag) {
//             // Si no estamos en el navegador o no hay gtag, abrimos directamente la URL
//             window.open(url, '_blank');
//             return false;
//         }
//
//         const callback = function() {
//             if (typeof url === 'string') {
//                 window.open(url, '_blank');
//             }
//         };
//
//         window.gtag('event', eventName, {
//             'event_category': eventCategory,
//             'event_label': eventLabel,
//             'value': eventValue,
//             'send_to': 'G-8RTG6CG3GF',
//             'event_callback': callback,
//             'event_timeout': 2000
//         });
//
//         // Fallback en caso de que el callback no se ejecute
//         setTimeout(callback, 2000);
//         return false;
//     };
//
//     // Función para manejar el contacto de WhatsApp con seguimiento de GTM
//     const handleContactWhatsApp = (plan: string = '') => {
//         const message = plan
//             ? `¡Hola! Me interesa el plan ${plan} para desarrollo web. ¿Podrían darme más información?`
//             : '¡Hola! Me interesa el servicio de desarrollo web. ¿Podrían darme más información?';
//
//         const whatsappUrl = `https://wa.me/593984264910?text=${encodeURIComponent(message)}`;
//
//         // Determinamos el nombre del evento y etiqueta según el contexto
//         let eventName = 'web_whatsapp_contact';
//         let eventLabel = 'Consulta General Web';
//         let eventValue = 1;
//
//         if (plan) {
//             if (plan === "Pago con tarjeta") {
//                 eventName = 'payment_link_request';
//                 eventLabel = 'Solicitud Link de Pago';
//                 eventValue = 5; // Mayor valor para solicitudes de pago
//             } else if (plan === "Transferencia bancaria") {
//                 eventName = 'payment_info_request';
//                 eventLabel = 'Solicitud Datos Bancarios';
//                 eventValue = 5;
//             } else {
//                 eventName = 'web_plan_inquiry';
//                 eventLabel = `Plan: ${plan}`;
//                 eventValue = 3; // Valor intermedio para consultas de planes específicos
//             }
//         }
//
//         return gtagSendEvent(
//             whatsappUrl,
//             eventName,
//             'Lead',
//             eventLabel,
//             eventValue
//         );
//     };
//
//     useEffect(() => {
//         // Registrar vista de página
//         if (typeof window !== 'undefined' && window.gtag) {
//             window.gtag('event', 'page_view', {
//                 'page_title': 'Desarrollo Web',
//                 'page_location': window.location.href,
//                 'page_path': window.location.pathname,
//                 'send_to': 'G-8RTG6CG3GF'
//             });
//         }
//
//         const interval = setInterval(() => {
//             setSelectedFeature((prev) => (prev + 1) % features.length)
//         }, 6000)
//
//         return () => clearInterval(interval)
//     }, [])
//
//     // Seguimiento de sección visible
//     const handleSectionView = (sectionName: string) => {
//         if (typeof window !== 'undefined' && window.gtag) {
//             window.gtag('event', 'section_view', {
//                 'event_category': 'Engagement',
//                 'event_label': `Sección: ${sectionName}`,
//                 'send_to': 'G-8RTG6CG3GF'
//             });
//         }
//     };
//
//     return (
//         <>
//             <Navbar />
//             <main className="min-h-screen bg-white dark:bg-gray-900">
//                 {/* Hero Section */}
//                 <section className="pt-40 mb-8 pb-20 bg-gradient-to-br from-accent-red/10 to-accent-red/5 dark:from-accent-yellow/10 dark:to-accent-yellow/5">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.div
//                             initial={{opacity: 0, y: 20}}
//                             animate={{opacity: 1, y: 0}}
//                             className="max-w-3xl mx-auto text-center"
//                         >
//                             <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
//                                 Diseño Web Profesional y Landing Pages de Alto Impacto
//                             </h1>
//                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
//                                 Creamos páginas web en Ecuador, que convierten visitantes en clientes.
//                                 Diseño personalizado, hosting premium y soporte técnico incluido.
//                             </p>
//                             <div className="flex flex-col sm:flex-row justify-center gap-4">
//                                 <motion.button
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         handleContactWhatsApp();
//                                     }}
//                                     className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                                     whileHover={{scale: 1.05}}
//                                     whileTap={{scale: 0.95}}
//                                 >
//                                     Cotizar Ahora
//                                 </motion.button>
//                                 <motion.a
//                                     href="#planes"
//                                     onClick={() => {
//                                         if (typeof window !== 'undefined' && window.gtag) {
//                                             window.gtag('event', 'view_plans_click', {
//                                                 'event_category': 'Navigation',
//                                                 'event_label': 'Click en Ver Planes',
//                                                 'send_to': 'G-8RTG6CG3GF'
//                                             });
//                                         }
//                                     }}
//                                     className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                                     whileHover={{scale: 1.05}}
//                                     whileTap={{scale: 0.95}}
//                                 >
//                                     Ver Planes
//                                 </motion.a>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>
//
//                 {/* Features Section */}
//                 <section className="py-20">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             onViewportEnter={() => handleSectionView('features')}
//                         >
//                             Tenemos todo lo que necesitas para tu sitio web
//                         </motion.h2>
//
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//                             {features.map((feature, index) => (
//                                 <FeatureCard
//                                     key={feature.title}
//                                     feature={feature}
//                                     isSelected={selectedFeature === index}
//                                     onClick={() => setSelectedFeature(index)}
//                                 />
//                             ))}
//                         </div>
//
//                         <AnimatePresence mode="wait">
//                             {features.map((feature, index) => (
//                                 selectedFeature === index && (
//                                     <motion.div
//                                         key={feature.title}
//                                         initial={{ opacity: 0, x: 20 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         exit={{ opacity: 0, x: -20 }}
//                                         transition={{ duration: 0.5 }}
//                                         className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
//                                     >
//                                         <div className="flex-1 space-y-6">
//                                             <feature.icon className="w-12 h-12 text-accent-red dark:text-accent-yellow" />
//                                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                                                 {feature.title}
//                                             </h3>
//                                             <p className="text-lg text-gray-600 dark:text-gray-400">
//                                                 {feature.description}
//                                             </p>
//                                             {feature.details && (
//                                                 <ul className="space-y-3">
//                                                     {feature.details.map((detail, i) => (
//                                                         <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                                             <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                                                             <span>{detail}</span>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             )}
//                                         </div>
//                                         <div className="flex-1">
//                                             <img
//                                                 src={feature.image}
//                                                 alt={feature.title}
//                                                 className="w-full h-80 object-cover rounded-lg"
//                                             />
//                                         </div>
//                                     </motion.div>
//                                 )
//                             ))}
//                         </AnimatePresence>
//                     </div>
//                 </section>
//
//                 {/* Plans Section */}
//                 <section id="planes" className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             onViewportEnter={() => handleSectionView('planes')}
//                         >
//                             Planes de Desarrollo Web
//                         </motion.h2>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {plans.map((plan, index) => (
//                                 <motion.div
//                                     key={plan.name}
//                                     className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ${
//                                         plan.recommended ? 'ring-2 ring-accent-red dark:ring-accent-yellow' : ''
//                                     }`}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     {plan.recommended && (
//                                         <span className="absolute -top-3 -right-3 bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
//                                             Recomendado
//                                         </span>
//                                     )}
//                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                         {plan.name}
//                                     </h3>
//                                     <div className="flex items-baseline mb-4">
//                                         <span className="text-3xl font-bold text-accent-red dark:text-accent-yellow">
//                                             ${plan.price}
//                                         </span>
//                                         <span className="text-gray-500 dark:text-gray-400 ml-2">USD</span>
//                                     </div>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-6">
//                                         {plan.description}
//                                     </p>
//                                     <ul className="space-y-3 mb-8">
//                                         {plan.features.map((feature) => (
//                                             <li key={feature} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                                 <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                                                 <span>{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     <button
//                                         onClick={(e) => {
//                                             e.preventDefault();
//                                             handleContactWhatsApp(plan.name);
//                                         }}
//                                         className={`w-full py-2 rounded-lg transition-colors ${
//                                             plan.recommended
//                                                 ? 'bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900'
//                                                 : 'border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10'
//                                         }`}
//                                     >
//                                         Solicitar Plan
//                                     </button>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* Banner de Pagos con Tarjeta */}
//                 <section className="py-12 relative overflow-hidden">
//                     <div
//                         className="absolute inset-0 z-0"
//                         style={{
//                             backgroundImage: "url('https://cdn.prod.website-files.com/66041f2aa7176fac4965cba4/66e862cc5f7217432ab4d4cf_Header%20largo%20TAP.jpg')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                             opacity: 0.85
//                         }}
//                     />
//                     <div className="absolute inset-0 bg-black/40 z-0" />
//
//                     <div className="max-w-7xl mx-auto px-6 relative z-10">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             onViewportEnter={() => handleSectionView('pagos-tarjeta')}
//                             className="text-center py-10"
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//                                 ¡Ahora aceptamos pagos con tarjeta!
//                             </h2>
//                             <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
//                                 Paga tu proyecto web de forma segura con tarjetas de crédito o débito en línea.
//                                 Contáctanos para recibir tu link de pago personalizado.
//                             </p>
//
//                             <div className="flex justify-center gap-6 mb-8">
//                                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-12 bg-white p-2 rounded-lg" />
//                                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-12 bg-white p-2 rounded-lg" />
//                             </div>
//
//                             <motion.button
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     handleContactWhatsApp("Pago con tarjeta");
//                                 }}
//                                 className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 Solicitar Link de Pago
//                             </motion.button>
//                         </motion.div>
//                     </div>
//                 </section>
//
//                 {/* Sección de Métodos de Pago Alternativos */}
//                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             onViewportEnter={() => handleSectionView('pagos-alternativos')}
//                         >
//                             Métodos de Pago Alternativos
//                         </motion.h2>
//
//                         <div className="grid md:grid-cols-2 gap-8">
//                             {/* Transferencias Bancarias */}
//                             <motion.div
//                                 className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                             >
//                                 <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
//                                     Transferencias o Depósitos
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-gray-400 mb-6">
//                                     Realiza tu pago mediante transferencia bancaria o depósito en cualquiera de nuestros bancos asociados.
//                                     Contáctanos para recibir los datos bancarios y completar tu pago.
//                                 </p>
//                                 <br/>
//
//                                 <div className="grid grid-cols-2 gap-4 mb-8">
//                                     <div className="bg-white p-4 rounded-lg flex items-center justify-center">
//                                         <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-banco-pichinca.png" alt="Banco Pichincha" className="h-10 object-contain" />
//                                     </div>
//                                     <div className="bg-white p-4 rounded-lg flex items-center justify-center">
//                                         <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-banco-guayaquil.png" alt="Banco Guayaquil" className="h-10 object-contain" />
//                                     </div>
//                                     <div className="bg-white p-4 rounded-lg flex items-center justify-center">
//                                         <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-jep.png" alt="JEP Cooperativa" className="h-10 object-contain" />
//                                     </div>
//                                     <div className="bg-white p-4 rounded-lg flex items-center justify-center">
//                                         <img src="https://www.cbvision.net.ec/wp-content/uploads/2023/11/logo-jardin-azuayo.png" alt="Jardín Azuayo" className="h-10 object-contain" />
//                                     </div>
//                                     <div className="bg-white p-4 rounded-lg flex items-center justify-center">
//                                         <img src="https://puntozmart.com/wp-content/uploads/sites/26/2021/02/Banco-del-Pacifico.png" alt="Banco Pacífico" className="h-10 object-contain" />
//                                     </div>
//                                     <div className="bg-white p-4 rounded-lg flex items-center justify-center">
//                                         <img src="https://www.produbanco.com.ec/media/713976/web.png?format=webp" alt="Produbanco" className="h-10 object-contain" />
//                                     </div>
//                                 </div>
//
//                                 <motion.button
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         handleContactWhatsApp("Transferencia bancaria");
//                                     }}
//                                     className="w-full border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                 >
//                                     Solicitar Datos Bancarios
//                                 </motion.button>
//                             </motion.div>
//
//                             {/* Plazos de entrega */}
//                             <motion.div
//                                 className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
//                                 initial={{ opacity: 0, x: 20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                             >
//                                 <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
//                                     Plazos de Entrega
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-gray-400 mb-6">
//                                     Nos comprometemos a entregar tu sitio web en el menor tiempo posible, manteniendo la más alta calidad.
//                                 </p>
//
//                                 <div className="space-y-6 mb-8">
//                                     <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
//                                         <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tiempo de Desarrollo</h4>
//                                         <p className="text-gray-600 dark:text-gray-400">
//                                             El desarrollo promedio y entrega de un sitio web es de <span className="font-semibold">5 a 7 días hábiles</span>, dependiendo de la complejidad del proyecto.
//                                         </p>
//                                     </div>
//
//                                     <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
//                                         <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Proceso de Desarrollo</h4>
//                                         <p className="text-gray-600 dark:text-gray-400">
//                                             Durante el proceso, mantendremos una comunicación constante para asegurar que el resultado final sea lo que necesitas.
//                                         </p>
//                                     </div>
//
//                                     <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
//                                         <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Soporte Post-lanzamiento</h4>
//                                         <p className="text-gray-600 dark:text-gray-400">
//                                             Después del lanzamiento, proporcionamos soporte técnico para asegurar que todo funcione perfectamente.
//                                         </p>
//                                     </div>
//                                 </div>
//
//                                 <motion.button
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         handleContactWhatsApp("Consulta sobre plazos");
//                                     }}
//                                     className="w-full bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                 >
//                                     Consultar Disponibilidad
//                                 </motion.button>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* Process Section */}
//                 <section className="py-20">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             onViewportEnter={() => handleSectionView('proceso')}
//                         >
//                             Proceso de Desarrollo
//                         </motion.h2>
//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {process.map((step, index) => (
//                                 <motion.div
//                                     key={step.title}
//                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <div className="flex items-center gap-4 mb-4">
//                        <span className="w-8 h-8 bg-accent-red/10 dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow rounded-full flex items-center justify-center font-bold">
//                            {index + 1}
//                        </span>
//                                         <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                                             {step.title}
//                                         </h3>
//                                     </div>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                         {step.description}
//                                     </p>
//                                     <ul className="space-y-2">
//                                         {step.steps.map((item) => (
//                                             <li key={item} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
//                                                 <CheckCircle className="w-5 h-5 text-accent-red dark:text-accent-yellow shrink-0 mt-0.5" />
//                                                 <span>{item}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* Support Section */}
//                 <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
//                     <div className="max-w-7xl mx-auto px-6">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             onViewportEnter={() => handleSectionView('soporte')}
//                             className="text-center max-w-3xl mx-auto mb-12"
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//                                 Soporte y Mantenimiento
//                             </h2>
//                             <p className="text-xl text-gray-600 dark:text-gray-400">
//                                 Nos encargamos de mantener tu sitio web actualizado, seguro y funcionando perfectamente
//                             </p>
//                         </motion.div>
//
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {support.map((item, index) => (
//                                 <motion.div
//                                     key={item.title}
//                                     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <item.icon className="w-12 h-12 mb-4 text-accent-red dark:text-accent-yellow" />
//                                     <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                                         {item.title}
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-400">
//                                         {item.description}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//
//                 {/* CTA Section */}
//                 <section className="py-20">
//                     <div className="max-w-3xl mx-auto px-6 text-center">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             onViewportEnter={() => handleSectionView('cta')}
//                         >
//                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//                                 ¿Listo para empezar tu proyecto web?
//                             </h2>
//                             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
//                                 Contáctanos hoy y obtén una cotización personalizada para tu sitio web
//                             </p>
//                             <motion.button
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     handleContactWhatsApp();
//                                 }}
//                                 className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 Contactar Ahora
//                             </motion.button>
//                         </motion.div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//
//             {/* Script para seguimiento global */}
//             <Script id="gtag-tracking-helper" strategy="afterInteractive">
//                 {`
//    // Función para enviar eventos de conversión con navegación retrasada
//    function gtagSendEvent(url, eventType, eventLabel, category = 'Conversion') {
//        var callback = function() {
//            if (typeof url === 'string') {
//                window.open(url, '_blank');
//            }
//        };
//
//        gtag('event', eventType, {
//            'event_category': category,
//            'event_label': eventLabel,
//            'send_to': 'G-8RTG6CG3GF',
//            'event_callback': callback,
//            'event_timeout': 2000
//        });
//
//        // Fallback
//        setTimeout(callback, 2000);
//
//        return false;
//    }
// `}
//             </Script>
//         </>
//     )
// }