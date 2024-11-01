// // src/app/layout.tsx
// import { ThemeProvider } from '@/components/providers/ThemeProvider'
// import './globals.css'
// import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react';
//
// export const metadata: Metadata = {
//   title: 'Roger Rojas - Software Architect & Full Stack Developer',
//   description: 'Portfolio personal de Roger Rojas, Software Architect y Full Stack Developer especializado en crear experiencias digitales excepcionales.',
// }
//
// export default function RootLayout({
//                                      children,
//                                    }: {
//   children: React.ReactNode
// }) {
//   return (
//       <html lang="es" suppressHydrationWarning>
//       <body>
//       <ThemeProvider>
//         {children}
//           <Analytics />
//       </ThemeProvider>
//       </body>
//       </html>
//   )
// }

//
// // src/app/layout.tsx
// import { ThemeProvider } from '@/components/providers/ThemeProvider'
// import './globals.css'
// import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react';
// import Script from 'next/script'
//
// export const metadata: Metadata = {
//     title: 'Torisoftt - Software Architect & Full Stack Developer',
//     description: 'Portfolio personal de Roger Rojas, Software Architect y Full Stack Developer especializado en crear experiencias digitales excepcionales.',
// }
//
// export default function RootLayout({
//                                        children,
//                                    }: {
//     children: React.ReactNode
// }) {
//     return (
//         <html lang="es" suppressHydrationWarning>
//         <head>
//             <Script
//                 src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
//                 strategy="afterInteractive"
//             />
//             <Script id="google-analytics" strategy="afterInteractive">
//                 {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-8RTG6CG3GF');
//           `}
//             </Script>
//         </head>
//         <body>
//         <ThemeProvider>
//             {children}
//             <Analytics />
//         </ThemeProvider>
//         </body>
//         </html>
//     )
// }


// src/app/layout.tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});
 

export const metadata: Metadata = {
    title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
    description: 'Agencia de desarrollo de software especializada en crear soluciones digitales robustas y escalables. Expertos en aplicaciones web, móviles y sistemas empresariales personalizados.',
    keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales, sitios web, e-commerce, desarrollo móvil, diseño ui ux, diseño web, Ecuador, Cuenca',
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    openGraph: {
        title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
        description: 'Agencia de desarrollo de software especializada en crear soluciones digitales robustas y escalables. Expertos en aplicaciones web, móviles y sistemas empresariales.',
        url: 'https://torisoftt.com',
        siteName: 'Torisoftt',
        images: [
            {
                url: 'https://torisoftt.com/tori.jpeg',
                width: 960,
                height: 1280,
                alt: 'Torisoftt Logo'
            }
        ],
        locale: 'es_EC',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Torisoftt | Desarrollo de Software',
        description: 'Soluciones digitales robustas y escalables',
        images: ['https://torisoftt.com/tori.jpeg'],
    }
}

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            lang="es"
            suppressHydrationWarning
            className={`${inter.variable} ${montserrat.variable}`}
        >
        <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8RTG6CG3GF', {
                            page_path: window.location.pathname,
                            debug_mode: ${process.env.NODE_ENV === 'development'}
                        });
                    `}
            </Script>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <meta name="theme-color" content="#ffffff" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </head>
        <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
            <main>{children}</main>
            <Analytics />
        </ThemeProvider>

        <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Torisoftt",
                    "url": "https://torisoftt.com",
                    "logo": "https://torisoftt.com/logo.png",
                    "description": "Empresa líder en desarrollo web y software en Ecuador",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "EC"
                    },
                    "sameAs": [
                        "https://twitter.com/torisoftt",
                        "https://linkedin.com/company/torisoftt",
                        "https://github.com/torisoftt"
                    ]
                })
            }}
        />
        </body>
        </html>
    )
}