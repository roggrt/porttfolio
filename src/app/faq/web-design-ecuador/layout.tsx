import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Preguntas Frecuentes sobre Diseño Web | Crear Página Web Ecuador | Torisoftt',
    description: 'Resolvemos tus dudas sobre cómo crear una página web en Ecuador. Aprende sobre dominios propios, hosting, diseño web profesional y más. ¡Comienza tu proyecto web!',
    keywords: 'crear página web ecuador, como hacer una página web, diseño web cuenca, página web gratis, dominio propio ecuador, desarrollo web ecuador',
    alternates: {
        canonical: 'https://torisoftt.com/faq'
    },
    openGraph: {
        title: 'Preguntas Frecuentes sobre Diseño Web | Torisoftt',
        description: 'Descubre cómo crear tu página web profesional en Ecuador. Guía completa sobre dominios, hosting y diseño web.',
        url: 'https://torisoftt.com/faq',
        siteName: 'Torisoftt',
        locale: 'es_EC',
        type: 'website',
    }
}

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
        {
            '@type': 'Question',
            'name': '¿Cómo puedo crear mi página web para mi negocio?',
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Para crear una página web profesional para tu negocio, recomendamos seguir estos pasos: 1) Definir objetivos y funcionalidades, 2) Elegir un dominio y hosting confiable, 3) Diseñar la estructura y contenido, 4) Desarrollar con tecnologías modernas, 5) Optimizar para SEO. En Torisoftt ofrecemos servicios completos de desarrollo web profesional desde $199.'
            }
        },
        {
            '@type': 'Question',
            'name': '¿Dónde puedo crear una página web con dominio propio?',
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'En Torisoftt te ayudamos a crear tu página web profesional con dominio propio. Nuestros planes incluyen registro de dominio, hosting premium y diseño personalizado. Te asesoramos en la elección del mejor dominio para tu marca y nos encargamos de toda la configuración técnica.'
            }
        }
        // Más preguntas serán agregadas en el FAQ Page
    ]
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {children}
        </>
    )
}