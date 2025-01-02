// src/app/services/backend-development/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desarrollo Backend en Ecuador | Servicios de Desarrollo Backend Cuenca | Torisoftt',
  description: 'Empresa de desarrollo backend en Cuenca, Ecuador. Expertos en arquitecturas escalables, APIs y microservicios. Soluciones robustas para empresas.',
  keywords: 'desarrollo backend ecuador, backend cuenca, desarrollo apis ecuador, microservicios cuenca, nodejs ecuador',
  openGraph: {
    title: 'Desarrollo Backend en Ecuador | Torisoftt',
    description: 'Servicios profesionales de desarrollo backend en Cuenca. Arquitecturas escalables y APIs robustas.',
    url: 'https://torisoftt.com/services/backend-development',
    siteName: 'Torisoftt',
    images: [{
      url: 'https://torisoftt.com/images/backend-services-cuenca.jpg',
      width: 1200,
      height: 630,
      alt: 'Servicios de Desarrollo Backend en Cuenca'
    }],
    locale: 'es_EC',
    type: 'website',
  },
  alternates: {
    canonical: 'https://torisoftt.com/services/backend-development'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}