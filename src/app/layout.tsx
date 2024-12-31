


import { ThemeProvider } from '@/components/providers/ThemeProvider'
import HotjarProvider from '@/components/HotjarProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { Inter, Montserrat } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
    description: 'Desarrollo de software y páginas web en Ecuador especializada en crear soluciones digitales robustas y escalables.',
    keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales',
    icons: {
        icon: '/favicon1.png',
        shortcut: '/favicon1.png',
        apple: '/favicon1.png',
    },
    openGraph: {
        title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
        description: 'Agencia de desarrollo de software especializada en crear soluciones digitales.',
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
        description: 'Soluciones de software robustas y escalables',
        images: ['https://torisoftt.com/tori.jpeg'],
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="es"
            suppressHydrationWarning
            className={`${inter.variable} ${montserrat.variable}`}
        >
        <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
            <HotjarProvider />
            <main>{children}</main>
            <SpeedInsights />
            <Analytics />
        </ThemeProvider>

        {/* Google Analytics */}
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
        </body>
        </html>
    )
}