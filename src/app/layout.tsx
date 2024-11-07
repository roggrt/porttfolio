
// src/app/layout.tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'
import { Inter, Montserrat } from 'next/font/google'

import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});
 

export const metadata: Metadata = {
    title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
    description: 'Desarrollo de software y páginas web en Ecuador especializada en crear soluciones digitales robustas y escalables. Expertos en aplicaciones web, móviles y sistemas empresariales personalizados.',
    keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales, sitios web, e-commerce, desarrollo móvil, diseño ui ux, diseño web, Ecuador, Cuenca',
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    openGraph: {
        title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
        description: 'Agencia de desarrollo de software especializada en crear soluciones digitales robustas y escalables. Expertos en aplicaciones web, móviles y sistemas empresariales.',
        url: 'https://torisoftt.com',
        siteName: 'Torisoftt',
        images: [
            {
                url: 'https://torisoftt.com/tori.jpeg',
                width: 960,
                height: 1280,
                alt: 'Torisoftt Logo'
            }
        ],
        locale: 'es_EC',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Torisoftt | Desarrollo de Software',
        description: 'Soluciones digitales robustas y escalables',
        images: ['https://torisoftt.com/tori.jpeg'],
    }
}

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            lang="es"
            suppressHydrationWarning
            className={`${inter.variable} ${montserrat.variable}`}
        >
        {/*<head>*/}
        {/*<link rel="icon" href="/favicon.png" type="image/png" />*/}
        {/*    <Script*/}
        {/*        src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"*/}
        {/*        strategy="afterInteractive"*/}
        {/*    />*/}
        {/*    <Script id="google-analytics" strategy="afterInteractive">*/}
        {/*        {`*/}
        {/*                window.dataLayer = window.dataLayer || [];*/}
        {/*                function gtag(){dataLayer.push(arguments);}*/}
        {/*                gtag('js', new Date());*/}
        {/*                gtag('config', 'G-8RTG6CG3GF', {*/}
        {/*                    page_path: window.location.pathname,*/}
        {/*                    debug_mode: ${process.env.NODE_ENV === 'development'}*/}
        {/*                });*/}
        {/*            `}*/}
        {/*    </Script>*/}

        {/*    <link rel="preconnect" href="https://fonts.googleapis.com" />*/}
        {/*    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />*/}

        {/*    <meta name="theme-color" content="#ffffff" />*/}
        {/*    <meta name="apple-mobile-web-app-capable" content="yes" />*/}
        {/*    <meta name="apple-mobile-web-app-status-bar-style" content="black" />*/}
        {/*</head>*/}
        <head>
            {/* Básicos */}
            <link rel="icon" href="/favicon.png" type="image/png"/>
            <title>Torisoftt | Desarrollo de Software & Páginas Web</title>
            <meta
                name="description"
                content="Desarrollo de software y páginas web en Ecuador especializada en crear soluciones digitales robustas y escalables. Expertos en aplicaciones web, móviles y sistemas empresariales personalizados."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://torisoftt.com/"/>
            <meta property="og:title" content="Torisoftt | Desarrollo de Software & Páginas Web"/>
            <meta
                property="og:description"
                content="Desarrollo de software y páginas web en Ecuador especializada en crear soluciones digitales robustas y escalables."
            />
            <meta property="og:image" content="https://torisoftt.com/tori.jpeg"/>
            <meta property="og:site_name" content="Torisoftt"/>

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Torisoftt | Desarrollo de Software & Páginas Web"/>
            <meta
                name="twitter:description"
                content="Desarrollo de software y páginas web en Ecuador especializada en crear soluciones digitales robustas y escalables."
            />
            <meta name="twitter:image" content="https://torisoftt.com/tori.jpeg"/>

            {/* Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RTG6CG3GF', {
                page_path: window.location.pathname,
                debug_mode: ${process.env.NODE_ENV === 'development'}
            });
        `}
            </Script>

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

            {/* PWA */}
            <meta name="theme-color" content="#ffffff"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        </head>


        <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
            <main>{children}</main>

            <SpeedInsights/>

            <Analytics/>
        </ThemeProvider>


        <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Torisoftt",
                    "url": "https://torisoftt.com",
                    "logo": "https://torisoftt.com/logo.png",
                    "description": "Global software development and web solutions company specializing in cutting-edge digital experiences",
                    // Múltiples ubicaciones para presencia internacional
                    "location": [
                        {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "US",
                                "availableLanguage": ["en"]
                            }
                        },
                        {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "ES",
                                "availableLanguage": ["es"]
                            }
                        },
                        {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "EC",
                                "availableLanguage": ["es"]
                            }
                        }
                    ],
                    // Idiomas soportados
                    "availableLanguage": [
                        {
                            "@type": "Language",
                            "name": "English",
                            "alternateName": "en"
                        },
                        {
                            "@type": "Language",
                            "name": "Español",
                            "alternateName": "es"
                        }
                    ],
                    // Áreas de servicio global
                    "areaServed": [
                        {
                            "@type": "GeoCircle",
                            "name": "Global Services"
                        }
                    ],
                    // Redes sociales y presencia online
                    "sameAs": [
                        "https://twitter.com/torisoftt",
                        "https://linkedin.com/company/torisoftt",
                        "https://github.com/roggrt",
                        "https://instagram.com/torisoftt"
                    ],
                    // Servicios ofrecidos internacionalmente
                    "knowsAbout": [
                        "Web Development",
                        "Software Architecture",
                        "UI/UX Design",
                        "Mobile Development",
                        "Cloud Solutions",
                        "Digital Transformation"
                    ],
                    // Información de contacto internacional
                    "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "availableLanguage": ["en", "es"],
                            "email": "info@torisoftt.com"
                        },
                        {
                            "@type": "ContactPoint",
                            "contactType": "technical support",
                            "availableLanguage": ["en", "es"],
                            "email": "info@torisoftt.com"
                        }
                    ],
                    // Horas de operación globales
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "00:00",
                        "closes": "23:59",
                        "description": "24/7 Global Operations"
                    }
                })
            }}
        />


        </body>
        </html>
    )
}