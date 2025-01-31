// components/TawkToChat.tsx
'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        Tawk_API?: any;
        Tawk_LoadStart?: Date;
    }
}

export default function TawkToChat() {
    useEffect(() => {
        // Configuración inicial de Tawk_API
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        // Configurar el mensaje de saludo
        window.Tawk_API.onLoad = function() {
            window.Tawk_API.setAttributes({
                name: 'Visitante',
            }, function(error: any) {
                // callback después de establecer los atributos
            });

            window.Tawk_API.onChatStarted = function(){
                window.Tawk_API.sendMessage('¡Hola! 👋 Bienvenido a Torisoftt. Soy Santiago, ¿en qué puedo ayudarte hoy? 🚀', {
                    callback: function() {
                        // mensaje enviado
                    }
                });
            };
        };

        // Cargar el script de Tawk.to con tu nuevo ID
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];

        s1.async = true;
        s1.src = 'https://embed.tawk.to/679d24d13a842732607853b4/1iiutfkok';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');

        if (s0 && s0.parentNode) {
            s0.parentNode.insertBefore(s1, s0);
        }

        // Limpieza
        return () => {
            if (s1 && s1.parentNode) {
                s1.parentNode.removeChild(s1);
            }
        };
    }, []);

    return null;
}