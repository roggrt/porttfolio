// src/app/layout.tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import GoogleAnalytics from '@/components/providers/GoogleAnalytics'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: 'Roger Rojas - Software Architect & Full Stack Developer',
    description: 'Portfolio personal de Roger Rojas, Software Architect y Full Stack Developer especializado en crear experiencias digitales excepcionales.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body>
        <ThemeProvider>
            {children}
            <Analytics />
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                <GoogleAnalytics
                    GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
                />
            )}
        </ThemeProvider>
        </body>
        </html>
    )
}