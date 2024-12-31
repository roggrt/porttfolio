import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Soluciones Digitales | Desarrollo Web, Apps y Software | Torisoftt',
    description: 'Encuentra la solución digital perfecta para tu negocio. Desarrollo web desde $199, apps móviles, sistemas personalizados y consultoría técnica en Ecuador.',
    keywords: 'desarrollo web ecuador, aplicaciones móviles, software empresarial, consultoria it cuenca, software ecuador, paginas web, agencia web',
    alternates: {
        canonical: 'https://torisoftt.com/products'
    },
    openGraph: {
        title: 'Soluciones Digitales | Torisoftt',
        description: 'Desarrollo web, apps y software empresarial en Ecuador',
        url: 'https://torisoftt.com/products',
        siteName: 'Torisoftt',
        locale: 'es_EC',
        type: 'website',
    }
}

const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Torisoftt',
    'url': 'https://torisoftt.com',
    'areaServed': 'Ecuador',
    'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Cuenca',
        'addressRegion': 'Azuay',
        'addressCountry': 'EC'
    },
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Servicios Digitales',
        'itemListElement': [
            {
                '@type': ['Service', 'Product'],
                'name': 'Página Web Profesional',
                'description': 'Diseño UI/UX + Desarrollo WordPress optimizado',
                'serviceType': 'Web Development',
                'category': 'Web Development',
                'offers': {
                    '@type': 'Offer',
                    'price': '199',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2024-12-31'
                }
            },
            {
                '@type': ['Service', 'Product'],
                'name': 'Sistema Empresarial',
                'description': 'Software personalizado para gestión y automatización',
                'serviceType': 'Business Software',
                'category': 'Business Software',
                'offers': {
                    '@type': 'Offer',
                    'price': '499',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2024-12-31'
                }
            },
            {
                '@type': ['Service', 'Product'],
                'name': 'Aplicación Móvil',
                'description': 'Apps multiplataforma iOS/Android con Flutter',
                'serviceType': 'Mobile Development',
                'category': 'Mobile Development',
                'offers': {
                    '@type': 'Offer',
                    'price': '999',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2024-12-31'
                }
            },
            {
                '@type': ['Service', 'Product'],
                'name': 'E-commerce',
                'description': 'Tienda online completa con WooCommerce',
                'serviceType': 'E-commerce',
                'category': 'E-commerce',
                'offers': {
                    '@type': 'Offer',
                    'price': '399',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2024-12-31'
                }
            },
            {
                '@type': ['Service', 'Product'],
                'name': 'Base de Datos',
                'description': 'Diseño e implementación de BD empresarial',
                'serviceType': 'Database',
                'category': 'Database',
                'offers': {
                    '@type': 'Offer',
                    'price': '399',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2024-12-31'
                }
            },
            {
                '@type': ['Service', 'Product'],
                'name': 'Consultoría IT',
                'description': 'Asesoría técnica y optimización',
                'serviceType': 'Consulting',
                'category': 'Consulting',
                'offers': {
                    '@type': 'Offer',
                    'price': '149',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2024-12-31'
                }
            }
        ]
    }
}

export default function ProductsLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            {children}
        </>
    )
}