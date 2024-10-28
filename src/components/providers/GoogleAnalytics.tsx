// src/components/providers/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
    const GA_MEASUREMENT_ID = 'G-8RTG6CG3GF';

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `
                }}
            />
        </>
    )
}