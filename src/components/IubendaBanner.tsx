// app/components/IubendaBanner.tsx
'use client';

import { useEffect } from 'react';

export default function IubendaBanner() {
    useEffect(() => {
        // Forzar la recarga del banner si es necesario
        if (window._iub && window._iub.csConfiguration) {
            // @ts-ignore - La función existe en iubenda pero TypeScript no la conoce
            if (typeof IubendaCS === 'object') {
                // @ts-ignore
                IubendaCS.reload();
            }
        }
    }, []);

    return (
        <a
            href="https://www.iubenda.com/privacy-policy/13487800"
            className="iubenda-cs-preferences-link"
        >
            Preferencias de Cookies
        </a>
    );
}