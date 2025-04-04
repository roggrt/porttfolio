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
    CheckCircle,
    Users,
    Heart,
    Layers,
    LayoutGrid,
    Brain,
    Pencil,
    Monitor,
    TestTube,
    ArrowRight,
    Database,
    PieChart
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import Link from 'next/link'

const features = [
    {
        icon: Users,
        title: 'User-Centered Design',
        description: 'We create designs with your users in mind, making every interaction natural and pleasant.',
        image: 'https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        details: [
            'Intuitive navigation structure',
            'Clear call-to-actions',
            'Optimized user flows',
            'Consistent design elements'
        ]
    },
    {
        icon: Heart,
        title: 'Memorable Experiences',
        description: 'We develop interfaces that emotionally connect with your users and strengthen your brand.',
        image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80',
        details: [
            'Engaging visual elements',
            'Brand-aligned design language',
            'Emotional connection points',
            'Attention to details'
        ]
    },
    {
        icon: Layers,
        title: 'Functional Design',
        description: 'We test every detail to ensure your website is easy to use and effective.',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        details: [
            'Usability testing',
            'Performance optimization',
            'Cross-browser compatibility',
            'Accessibility compliance'
        ]
    },
    {
        icon: LayoutGrid,
        title: 'Modern Web Design',
        description: 'We create attractive and current websites that highlight your brand in the digital world.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
        details: [
            'Contemporary aesthetics',
            'Trendy visual elements',
            'Cutting-edge technologies',
            'Responsive layouts'
        ]
    }
]

const plans = [
    {
        name: 'Landing Page',
        price: 250,
        description: 'Ideal for introducing your business online',
        features: [
            'Up to 4 pages design',
            'Domain assistance',
            '1-year hosting',
            // '1 professional email',
            'Free SSL certificate',
            'Contact form'
        ],
        recommended: false
    },
    {
        name: 'Professional',
        price: 399,
        description: 'For businesses that need more functionality',
        features: [
            'Up to 5 pages',
            'Premium WordPress',
            // 'Blog included',
            '3 professional emails',
            'WhatsApp chat',
            'Social media integration',
            'Google Analytics',
            'Basic maintenance'
        ],
        recommended: true
    },
    {
        name: 'E-commerce',
        price: 599,
        description: 'Complete online store to sell your products',
        features: [
            'WooCommerce Pro',
            'Unlimited products',
            'Online payments',
            '5 professional emails',
            'Premium SSL certificate',
            'Social media integration',
            'Training included'
        ],
        recommended: false
    }
]

const processSteps = [
    {
        icon: Search,
        title: 'Discovery',
        description: 'We understand your business and your audience',
        details: [
            'Market analysis',
            'Competitor research',
            'User interviews',
            'Needs identification',
            'Goal definition'
        ]
    },
    {
        icon: Pencil,
        title: 'Planning',
        description: 'We design the best structure for your site',
        details: [
            'Content organization',
            'Navigation design',
            'Initial sketches',
            'Review with you',
            'Adjustments based on feedback'
        ]
    },
    {
        icon: Brain,
        title: 'Strategy',
        description: 'We develop a roadmap for success',
        details: [
            'Conversion optimization',
            'SEO planning',
            'Technical requirements',
            'Timeline creation',
            'Key performance indicators'
        ]
    },
    {
        icon: Monitor,
        title: 'Visual Design',
        description: 'We create the look and feel of your website',
        details: [
            'Attractive design',
            'Brand colors',
            'Visual elements',
            'Mobile version',
            'Smooth animations'
        ]
    },
    {
        icon: Code,
        title: 'Development',
        description: 'We bring the designs to life with code',
        details: [
            'Clean coding',
            'Performance optimization',
            'Responsive implementation',
            'CMS integration',
            'Advanced functionality'
        ]
    },
    {
        icon: Rocket,
        title: 'Launch',
        description: 'We get your site up and running',
        details: [
            'Final testing',
            'Complete review',
            'Deployment',
            'Initial monitoring',
            'Ongoing support'
        ]
    }
]

const support = [
    {
        icon: Settings,
        title: 'Maintenance',
        description: 'Security updates, backups, and continuous monitoring'
    },
    {
        icon: MessageSquare,
        title: 'Technical Support',
        description: 'Assistance via ticket, email, or WhatsApp during business hours'
    },
    {
        icon: Code,
        title: 'Updates',
        description: 'Minor modifications and adjustments included in the monthly plan'
    }
]

const technologies = [
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'Next.js', icon: '/tech/nextjs.svg' },
    { name: 'WordPress', icon: '/tech/wordpress.svg' },
    { name: 'Tailwind', icon: '/tech/tailwind.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Node.js', icon: '/tech/nodejs.svg' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg' },
    { name: 'MySQL', icon: '/tech/mysql.svg' }
]

const stats = [
    {
        number: '10+',
        label: 'Years of expertise delivering innovative web solutions'
    },
    {
        number: '6.8',
        label: 'Average ROI achieved for our clients\' digital marketing campaigns'
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
    step: {
        icon: React.ElementType;
        title: string;
        description: string;
        details: string[];
    };
    isActive: boolean;
    onClick: () => void;
}

interface FeatureCardProps {
    feature: {
        icon: React.ElementType;
        title: string;
        description: string;
        image: string;
        details: string[];
    };
    isSelected: boolean;
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

const FeatureCard = ({ feature, isSelected, onClick }: FeatureCardProps) => (
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

export default function WebDesignPage() {
    const [activeStep, setActiveStep] = useState(0)
    const [selectedFeature, setSelectedFeature] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedFeature((prev) => (prev + 1) % features.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    const handleContactWhatsApp = (plan: string = '') => {
        const message = plan
            ? `Hello! I'm interested in the ${plan} plan for web design. Could you give me more information?`
            : `Hello! I'm interested in your web design services. Could you give me more information?`;
            window.open(`https://wa.me/593984264910?text=${encodeURIComponent(message)}`);
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900">
                {/* Modern Hero Section */}
                {/* Modern Hero Section */}
                <section className="pt-32 pb-20 bg-gradient-to-br from-accent-red/5 to-white dark:from-accent-yellow/5 dark:to-gray-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                                >
                                    We don't just build websites, we build experiences
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xl text-gray-600 dark:text-gray-300"
                                >
                                    We create connections that drive real-world results.
                                    Turning bold ideas into interactive digital solutions.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <motion.button
                                        onClick={() => handleContactWhatsApp()}
                                        className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Request an appointment
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                    <motion.a
                                        href="#plans"
                                        className="border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow px-8 py-4 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Plans
                                    </motion.a>
                                </motion.div>

                                {/* Stats */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
                                >
                                    {stats.map((stat, index) => (
                                        <div key={index}>
                                            <div className="text-5xl font-bold text-accent-red dark:text-accent-yellow mb-2">
                                                {stat.number}
                                            </div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="relative"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/20 to-transparent dark:from-accent-yellow/20 z-10"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Team collaborating on web design"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Inset smaller image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 z-20"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Happy client"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="py-10 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
                            {technologies.map((tech) => (
                                <div key={tech.name} className="text-center">
                                    <Image
                                        src={tech.icon}
                                        alt={`${tech.name} icon`}
                                        width={40}
                                        height={40}
                                        className="mx-auto mb-2 filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{tech.name}</p>
                                </div>
                            ))}
                        </div>
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
                            Everything You Need for Your Website
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
                <section id="plans" className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Web Design Plans
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
                      Recommended
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
                                        Request This Plan
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInVariants}
                            viewport={{ once: true }}
                        >
                            How We Work
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
                                Support and Maintenance
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                We take care of keeping your website updated, secure, and working perfectly
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

                {/* Payment Methods Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Payment Methods
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Credit Card Payments */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                    Credit Card Payments
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Securely pay for your web project with credit or debit cards online.
                                    Contact us to receive your personalized payment link.
                                </p>

                                <div className="flex justify-center gap-6 mb-8">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-12 bg-white p-2 rounded-lg" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-12 bg-white p-2 rounded-lg" />
                                </div>

                                <motion.button
                                    onClick={() => handleContactWhatsApp("Credit card payment")}
                                    className="w-full bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Request Payment Link
                                </motion.button>
                            </motion.div>

                            {/* Wire Transfers & Digital Payments */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                                    Wire Transfers & Digital Payments
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Make your payment via bank transfer or through various digital payment methods.
                                    Contact us to receive our banking details or digital payment options.
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">International Wire Transfers</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            We accept international wire transfers in USD from any country.
                                            No additional fees on our end.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Digital Wallets</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            We accept payments through PayPal, Wise, and other digital payment platforms
                                            for your convenience.
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-accent-red dark:border-accent-yellow pl-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Payment Plans</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            For larger projects, we offer flexible payment schedules with 50% upfront
                                            and the remainder upon completion.
                                        </p>
                                    </div>
                                </div>

                                <motion.button
                                    onClick={() => handleContactWhatsApp("Payment options")}
                                    className="w-full border border-accent-red dark:border-accent-yellow text-accent-red dark:text-accent-yellow py-3 rounded-lg font-medium hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Request Payment Details
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Delivery Timeline Section */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Delivery Timeline
                        </motion.h2>

                        <motion.div
                            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Rocket className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                            Fast Turnaround Time
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            We're committed to delivering your website in the shortest time possible while maintaining the highest quality.
                                            The average development and delivery time is <span className="font-semibold">5-7 business days</span>, depending on the project complexity.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                            Transparent Communication
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Throughout the process, we maintain constant communication to ensure the final result meets your needs.
                                            Our project management approach keeps you informed at every stage.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Settings className="w-6 h-6 text-accent-red dark:text-accent-yellow" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                            Post-Launch Support
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            After launch, we provide technical support to ensure everything works perfectly.
                                            Our support plans include regular maintenance and updates to keep your site secure and performing optimally.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <motion.button
                                    onClick={() => handleContactWhatsApp("Availability inquiry")}
                                    className="w-full bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Check Current Availability
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Global Service Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                    Working Globally, From Ecuador to the World
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                    Based in Ecuador, we leverage our unique position to offer high-quality web design services at competitive prices to clients worldwide.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">Global Experience:</span> We've worked with clients across North America, Europe, and Latin America.
            </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">Multilingual Support:</span> Our team communicates fluently in English and Spanish.
            </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-accent-red dark:text-accent-yellow mt-0.5" />
                                        <span className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">Convenient Scheduling:</span> We align with your time zone for meetings and updates.
            </span>
                                    </li>
                                </ul>
                                <motion.button
                                    onClick={() => handleContactWhatsApp()}
                                    className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Your Global Project
                                </motion.button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="Global web design services"
                                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-accent-red/20 to-transparent dark:from-accent-yellow/20"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-accent-red/10 dark:bg-accent-yellow/10">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Ready to Start Your Web Project?
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Contact us today and get a personalized quote for your website
                            </p>
                            <motion.button
                                onClick={() => handleContactWhatsApp()}
                                className="bg-accent-red dark:bg-accent-yellow text-white dark:text-gray-900 px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Now
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}