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


// src/app/layout.tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'

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
        <head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RTG6CG3GF');
          `}
            </Script>
        </head>
        <body>
        <ThemeProvider>
            {children}
            <Analytics />
        </ThemeProvider>
        </body>
        </html>
    )
}