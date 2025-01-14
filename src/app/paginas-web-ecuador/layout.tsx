// src/app/servicios/desarrollo-web/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Desarrollo y Diseño de Páginas Web en Ecuador | Torisoftt',
    description: 'Desarrollo profesional de páginas web en Ecuador. Creamos sitios web modernos, responsivos y optimizados para SEO. Expertos en WordPress, eCommerce y aplicaciones web. ¡Cotiza gratis!',
    keywords: 'desarrollo web ecuador, páginas web ecuador, diseño web ecuador, desarrollo wordpress ecuador, empresa desarrollo web ecuador, diseño web quito, diseño web guayaquil, diseño web cuenca',
    openGraph: {
        title: 'Desarrollo de Páginas Web en Ecuador | Torisoftt',
        description: 'Creamos sitios web profesionales que impulsan tu negocio. Desarrollo web con diseño moderno y optimización SEO en Ecuador.',
        url: 'https://torisoftt.com/servicios/desarrollo-web',
        siteName: 'Torisoftt',
        images: [{
            url: 'https://torisoftt.com/images/desarrollo-web-ecuador.png',
            width: 1200,
            height: 630,
            alt: 'Servicios de Desarrollo Web en Ecuador'
        }],
        locale: 'es_EC',
        type: 'website',
    },
    alternates: {
        canonical: 'https://torisoftt.com/paginas-web-ecuador'
    }
}

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return <>{children}</>
}