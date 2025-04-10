// // src/app/api/contact/route.ts
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
//
// const transporter = nodemailer.createTransport({
//   host: 'smtp.hostinger.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'info@torisoftt.com',
//     pass: 'Wn0968653953.'
//   }
// });
//
// // Asume que la imagen está disponible públicamente
// const imageUrl = 'https://torisoftt.com/oktori.png';
//
// export async function POST(request: Request) {
//   try {
//     const { name, email, phone, subject, message } = await request.json();
//
//     // Email to site owner
//     await transporter.sendMail({
//       from: 'info@torisoftt.com',
//       to: 'hostingcuenca@gmail.com',
//       subject: `Torisoft Page Requerimiento: ${subject}`,
//       html: `
//         <h2>Nuevo mensaje de contacto</h2>
//         <p><strong>Nombre:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
//         <p><strong>Asunto:</strong> ${subject}</p>
//         <p><strong>Mensaje:</strong></p>
//         <p>${message}</p>
//       `
//     });
//
//     // Auto-reply to sender with styled email including the image
//     await transporter.sendMail({
//       from: 'info@torisoftt.com',
//       to: email,
//       subject: 'Recibimos tu mensaje - Torisoft',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
//           <div style="text-align: center; margin-bottom: 20px;">
//             <img src="${imageUrl}" alt="Torisoft" style="max-width: 200px;">
//           </div>
//
//           <h2 style="color: #333; text-align: center;">¡Gracias por contactarnos!</h2>
//
//           <p style="color: #555; font-size: 16px;">Hola ${name},</p>
//
//           <p style="color: #555; font-size: 16px;">Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto. En Torisoft valoramos tu interés y nos esforzamos por brindarte una respuesta rápida y eficiente.</p>
//
//           <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
//             <p style="color: #555; font-size: 14px; margin: 5px 0;"><strong>Asunto:</strong> ${subject}</p>
//             <p style="color: #555; font-size: 14px; margin: 10px 0;"><strong>Tu mensaje:</strong></p>
//             <p style="color: #555; font-size: 14px; margin: 0; font-style: italic;">${message}</p>
//           </div>
//
//           <p style="color: #555; font-size: 16px;">Mientras tanto, puedes visitar nuestra web para conocer más sobre nuestros servicios y proyectos.</p>
//
//           <div style="text-align: center; margin-top: 30px;">
//             <a href="https://torisoftt.com" style="background-color: #6366f1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visitar sitio web</a>
//           </div>
//
//           <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">© ${new Date().getFullYear()} Torisoft. Todos los derechos reservados.</p>
//         </div>
//       `
//     });
//
//     return NextResponse.json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//         { message: 'Error sending email' },
//         { status: 500 }
//     );
//   }
// }


// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@torisoftt.com',
    pass: 'Wn0968653953.'
  }
});

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validación básica del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
          { message: 'Dirección de correo inválida' },
          { status: 400 }
      );
    }

    // Preparando datos para los correos con formato de fecha para Ecuador
    const currentDate = new Date().toLocaleDateString('es-EC', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Guayaquil' // Zona horaria de Ecuador
    });

    // Email al propietario del sitio con mejores prácticas anti-spam
    const ownerMailOptions = {
      from: {
        name: 'Torisoftt Contacto',
        address: 'info@torisoftt.com'
      },
      to: 'hostingcuenca@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto: ${subject}`,
      text: `
        Nuevo mensaje de contacto
        
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No proporcionado'}
        Asunto: ${subject}
        Mensaje: ${message}
        
        Recibido el: ${currentDate}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Nombre:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Teléfono:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || 'No proporcionado'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Asunto:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <strong>Mensaje:</strong>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #777; font-size: 12px; margin-top: 30px;">Recibido el: ${currentDate}</p>
        </div>
      `,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'High',
        'X-Mailer': 'Torisoftt Contact System'
      }
    };

    // Email de auto-respuesta al remitente
    const userMailOptions = {
      from: {
        name: 'Torisoftt',
        address: 'info@torisoftt.com'
      },
      to: email,
      subject: '✅ Hemos recibido tu mensaje - Torisoftt',
      text: `
        Gracias por contactarnos
        
        Hola ${name},
        
        Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
        
        Detalles de tu mensaje:
        Asunto: ${subject}
        Mensaje: ${message}
        
        Atentamente,
        Equipo de Torisoftt
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="cid:companyLogo" alt="Torisoftt" style="max-width: 200px;">
          </div>
          
          <h2 style="color: #333; text-align: center;">¡Gracias por contactarnos!</h2>
          
          <p style="color: #555; font-size: 16px;">Hola ${name},</p>
          
          <p style="color: #555; font-size: 16px;">Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto. En Torisoftt valoramos tu interés y nos esforzaremos por brindarte una respuesta rápida y eficiente.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #555; font-size: 14px; margin: 5px 0;"><strong>Asunto:</strong> ${subject}</p>
            <p style="color: #555; font-size: 14px; margin: 10px 0;"><strong>Tu mensaje:</strong></p>
            <p style="color: #555; font-size: 14px; margin: 0; font-style: italic;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="color: #555; font-size: 16px;">Mientras tanto, puedes visitar nuestra web para conocer más sobre nuestros servicios y proyectos.</p>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://torisoftt.com" style="background-color: #6366f1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visitar sitio web</a>
          </div>
          
          <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">© ${new Date().getFullYear()} Torisoftt. Todos los derechos reservados.</p>
        </div>
      `,
      headers: {
        'X-Mailer': 'Torisoftt Auto-Reply System'
      },
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(process.cwd(), 'public', 'oktori.png'),
          cid: 'companyLogo' // Mismo que se usa en la etiqueta <img>
        }
      ]
    };

    // Envío de ambos correos
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
        { message: 'Error sending email' },
        { status: 500 }
    );
  }
}