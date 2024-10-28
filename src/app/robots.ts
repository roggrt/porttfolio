import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // Protege tus endpoints de API
        },
        sitemap: 'https://torisoftt.vercel.app/sitemap.xml',
    }
}