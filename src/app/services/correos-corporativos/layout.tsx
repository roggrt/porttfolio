// src/app/services/corporate-email/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Correos Corporativos Ecuador | Email Empresarial | Torisoftt',
  description: 'Servicio de correos corporativos profesionales en Ecuador. Correos empresariales con su dominio personalizado. Migración gratuita y soporte técnico incluido.',
  keywords: 'correos corporativos ecuador, email empresarial, correo profesional, google workspace ecuador, microsoft 365 ecuador',
  openGraph: {
    title: 'Correos Corporativos Profesionales | Torisoftt',
    description: 'Correos empresariales profesionales con tu dominio. Incluye migración y soporte.',
    url: 'https://torisoftt.com/services/corporate-email',
    siteName: 'Torisoftt',
    images: [{
      url: 'https://torisoftt.com/images/email-services-ecuador.jpg',
      width: 1200,
      height: 630,
      alt: 'Servicios de Correo Corporativo en Ecuador'
    }],
    locale: 'es_EC',
    type: 'website',
  },
  alternates: {
    canonical: 'https://torisoftt.com/services/corporate-email'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}