import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Desarrollo Web en Ecuador | Páginas Web Profesionales | Torisoftt',
    description: 'Creamos páginas web profesionales en Ecuador. Diseño web optimizado para SEO, hosting incluido y soporte técnico. Desde $199 con dominio gratis. ¡Contáctanos!',
    keywords: 'desarrollo web ecuador, paginas web cuenca, diseño web profesional, hosting ecuador, dominios ecuador',
    alternates: {
        canonical: 'https://torisoftt.com/services/web-development'
    },
    openGraph: {
        title: 'Desarrollo Web Profesional | Torisoftt',
        description: 'Páginas web que convierten visitantes en clientes. Diseño web profesional en Ecuador.',
        url: 'https://torisoftt.com/services/web-development',
        siteName: 'Torisoftt',
        locale: 'es_EC',
        type: 'website',
    }
}

const webServicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Desarrollo Web Profesional',
    'provider': {
        '@type': 'Organization',
        'name': 'Torisoftt',
        'url': 'https://torisoftt.com'
    },
    'areaServed': 'Ecuador',
    'description': 'Servicios profesionales de desarrollo web y diseño de páginas web en Ecuador',
    'offers': {
        '@type': 'Offer',
        'price': '199',
        'priceCurrency': 'USD'
    },
    'serviceType': 'Web Development'
}

export default function WebServicesLayout({
                                              children,
                                          }: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webServicesSchema) }}
            />
            {children}
        </>
    )
}