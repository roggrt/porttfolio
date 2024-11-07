// import { MetadataRoute } from 'next'

// export default function robots(): MetadataRoute.Robots {
//     return {
//         rules: {
//             userAgent: '*',
//             allow: '/',
//             disallow: '/api/', 
//         },
//         sitemap: 'https://torisoftt/sitemap.xml',
//     }
// }


import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',                    // Página principal que contiene todas las secciones
                    '/blog/*',              // Blog y sus posts
                    '/services/*',          // Páginas de servicios individuales
                    '/privacy',             // Política de privacidad
                    '/terms',               // Términos de servicio
                ],
                disallow: [
                    '/api/*',               // API endpoints
                ],
            },

            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 1,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                crawlDelay: 1,
            },
            {
                userAgent: 'Yandex',
                allow: '/',
                crawlDelay: 1,
            },
            {
                userAgent: 'Baiduspider',
                allow: '/',
                crawlDelay: 1,
            },


            
        ],
        sitemap: 'https://torisoftt.com/sitemap.xml',
        host: 'https://torisoftt.com'
    }
}







