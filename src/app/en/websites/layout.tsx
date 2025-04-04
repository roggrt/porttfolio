import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Professional Web Design | Custom Websites Worldwide | Torisoftt',
    description: 'Custom web design services at affordable prices. Responsive websites optimized for SEO, with hosting included and technical support. Starting at $250. Contact us today!',
    keywords: 'web design, website development, custom websites, responsive design, affordable web design, SEO optimization',
    openGraph: {
        title: 'Professional Web Design | Torisoftt',
        description: 'Custom websites that convert visitors into customers. Professional web design service.',
        url: 'https://torisoftt.com/services/web-design',
        siteName: 'Torisoftt',
        images: [{
            url: 'https://torisoftt.com/images/web-design-services.jpg',
            width: 1200,
            height: 630,
            alt: 'Web Design Services'
        }],
        locale: 'en_US',
        type: 'website',
    },
    alternates: {
        canonical: 'https://torisoftt.com/services/web-design'
    }
}

const webDesignSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Professional Web Design',
    'provider': {
        '@type': 'Organization',
        'name': 'Torisoftt',
        'url': 'https://torisoftt.com'
    },
    'areaServed': {
        '@type': 'Country',
        'name': 'Worldwide'
    },
    'description': 'Professional web design and development services for businesses of all sizes',
    'offers': {
        '@type': 'Offer',
        'price': '250',
        'priceCurrency': 'USD'
    },
    'serviceType': 'Web Design'
}

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webDesignSchema) }}
            />
            {children}
        </>
    )
}