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


// // // 'use client';
// // // import { useEffect } from 'react';
// // // import Script from 'next/script';

// // // declare global {
// // //     interface Window {
// // //         Tawk_API?: any;
// // //         Tawk_LoadStart?: Date;
// // //     }
// // // }

// // // export default function TawkToChat() {
// // //     useEffect(() => {
// // //         // Configuración inicial de Tawk_API
// // //         window.Tawk_API = window.Tawk_API || {};
// // //         window.Tawk_LoadStart = new Date();

// // //         // Configurar el mensaje de saludo cuando el script esté cargado
// // //         const handleLoad = () => {
// // //             if (window.Tawk_API) {
// // //                 window.Tawk_API.onLoad = function() {
// // //                     window.Tawk_API.setAttributes({
// // //                         name: 'Visitante',
// // //                     }, function(error: any) {
// // //                         if (error) {
// // //                             console.error('Error al configurar atributos:', error);
// // //                         }
// // //                     });

// // //                     window.Tawk_API.onChatStarted = function() {
// // //                         window.Tawk_API.sendMessage('¡Hola! 👋 Bienvenido a Torisoftt. Soy Santiago, ¿en qué puedo ayudarte hoy? 🚀', {
// // //                             callback: function(error: any) {
// // //                                 if (error) {
// // //                                     console.error('Error al enviar mensaje:', error);
// // //                                 }
// // //                             }
// // //                         });
// // //                     };
// // //                 };
// // //             }
// // //         };

// // //         // Llamar a handleLoad cuando el componente se monta
// // //         handleLoad();

// // //         // Limpieza cuando el componente se desmonta
// // //         return () => {
// // //             if (window.Tawk_API) {
// // //                 window.Tawk_API.onLoad = null;
// // //                 window.Tawk_API.onChatStarted = null;
// // //             }
// // //         };
// // //     }, []);

// // //     return (
// // //         <>
// // //             <Script
// // //                 id="tawk-script"
// // //                 strategy="afterInteractive"
// // //                 src="https://embed.tawk.to/679d24d13a842732607853b4/1ij3j6jk8"
// // //                 onLoad={() => {
// // //                     console.log('Script de Tawk cargado exitosamente');
// // //                 }}
// // //                 onError={(e) => {
// // //                     console.error('Error al cargar el script de Tawk:', e);
// // //                 }}
// // //             />
// // //         </>
// // //     );
// // // }

// // 'use client';

// // import Script from 'next/script';
// // import { useEffect, useState } from 'react';

// // declare global {
// //     interface Window {
// //         Tawk_API?: any;
// //         Tawk_LoadStart?: Date;
// //     }
// // }

// // export default function TawkToChat() {
// //     const [status, setStatus] = useState('Iniciando...');

// //     useEffect(() => {
// //         // Verificar si el widget se carga correctamente
// //         const checkWidget = setInterval(() => {
// //             const tawkContainer = document.getElementById('tawk-container');
// //             if (window.Tawk_API && tawkContainer) {
// //                 setStatus('Widget cargado');
// //                 clearInterval(checkWidget);
// //             }
// //         }, 1000);

// //         return () => clearInterval(checkWidget);
// //     }, []);

// //     return (
// //         <div id="tawk-container" className="fixed bottom-4 right-4 z-50 p-4 bg-white rounded-lg shadow-lg">
// //             <div className="text-sm text-gray-600 mb-2">Estado del Chat: {status}</div>
// //             <div className="text-xs text-gray-400">
// //                 La burbuja del chat debería aparecer abajo a la derecha ↘️
// //             </div>
// //             <Script strategy="lazyOnload" id="tawk-init">
// //                 {`
// //                     var Tawk_API=Tawk_API||{};
// //                     var Tawk_LoadStart=new Date();
// //                     Tawk_API.onLoad = function(){
// //                         console.log('Chat widget cargado');
// //                         document.getElementById('tawk-container').style.display = 'none';
// //                     };
// //                 `}
// //             </Script>
// //             <Script
// //                 id="tawk-widget"
// //                 strategy="lazyOnload"
// //                 src="https://embed.tawk.to/679d24d13a842732607853b4/1iiutfkok"
// //                 onLoad={() => {
// //                     console.log('Script de Tawk cargado');
// //                 }}
// //                 onError={(e) => {
// //                     console.error('Error al cargar Tawk:', e);
// //                     setStatus('Error al cargar');
// //                 }}
// //             />
// //         </div>
// //     );
// // }


// 'use client';

// export default function TawkToChat() {
//     return (
//         <script
//             dangerouslySetInnerHTML={{
//                 __html: `
//                     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//                     (function(){
//                         var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//                         s1.async=true;
//                         s1.src='https://embed.tawk.to/679d24d13a842732607853b4/1iiutfkok';
//                         s1.charset='UTF-8';
//                         s1.setAttribute('crossorigin','*');
//                         s0.parentNode.insertBefore(s1,s0);
//                     })();
//                 `
//             }}
//         />
//     );
// }