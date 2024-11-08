// src/app/services/uiux-design/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diseño UI/UX en Cuenca | Servicios de Diseño Web Ecuador | Torisoftt',
  description: 'Empresa de diseño UI/UX en Cuenca, Ecuador. Creamos interfaces web y móviles que aumentan conversiones. Diseño web profesional con enfoque en resultados. ¡Contáctanos!',
  keywords: 'diseño ui ux cuenca, diseño web ecuador, diseño interfaces cuenca, ux design ecuador, ui designer cuenca',
  openGraph: {
    title: 'Diseño UI/UX en Cuenca | Torisoftt',
    description: 'Servicios profesionales de diseño UI/UX en Cuenca. Mejora la experiencia de tus usuarios.',
    url: 'https://torisoftt.com/services/uiux-design',
    siteName: 'Torisoftt',
    images: [{
      url: 'https://torisoftt.com/images/uiux-services-cuenca.jpg',
      width: 1200,
      height: 630,
      alt: 'Servicios de Diseño UI/UX en Cuenca'
    }],
    locale: 'es_EC',
    type: 'website',
  },
  alternates: {
    canonical: 'https://torisoftt.com/services/uiux-design'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}