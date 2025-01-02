// src/app/services/frontend-development/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desarrollo Frontend Profesional | React y Next.js | Torisoftt',
  description: 'Servicios de desarrollo frontend en Ecuador y Latinoamérica. Expertos en React, Next.js y aplicaciones web modernas. Creamos interfaces de usuario dinámicas y eficientes para empresas en Cuenca, Ecuador y toda América Latina.',
  keywords: [
    // Términos globales
    'desarrollo frontend profesional',
    'react developer',
    'nextjs developer',
    'desarrollo aplicaciones web',
    // Términos locales y regionales
    'desarrollo frontend ecuador',
    'desarrollo web cuenca',
    'desarrollo frontend latinoamerica',
    'aplicaciones react latinoamerica',
    // Tecnologías
    'react next.js typescript',
    'desarrollo frontend moderno',
    'aplicaciones web react'
  ].join(', '),
  openGraph: {
    title: 'Desarrollo Frontend Profesional | Torisoftt',
    description: 'Servicios de desarrollo frontend profesional con React y Next.js. Soluciones web modernas para empresas en Ecuador y Latinoamérica.',
    url: 'https://torisoftt.com/services/frontend-development',
    siteName: 'Torisoftt',
    images: [{
      url: 'https://torisoftt.com/images/frontend-services.jpg',
      width: 1200,
      height: 630,
      alt: 'Servicios de Desarrollo Frontend Profesional'
    }],
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://torisoftt.com/services/frontend-development'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo Frontend Profesional | Torisoftt',
    description: 'Expertos en desarrollo frontend con React y Next.js. Servicios profesionales para empresas en Latinoamérica.',
    images: ['https://torisoftt.com/images/frontend-services.jpg']
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}