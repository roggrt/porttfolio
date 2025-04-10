// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@torisoftt.com',
    pass: 'Wn0968653953.'
  }
});

// Asume que la imagen está disponible públicamente
const imageUrl = 'https://torisoftt.com/oktori.png';

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Email to site owner
    await transporter.sendMail({
      from: 'info@torisoftt.com',
      to: 'hostingcuenca@gmail.com',
      subject: `Torisoft Page Requerimiento: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    // Auto-reply to sender with styled email including the image
    await transporter.sendMail({
      from: 'info@torisoftt.com',
      to: email,
      subject: 'Recibimos tu mensaje - Torisoft',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${imageUrl}" alt="Torisoft" style="max-width: 200px;">
          </div>
          
          <h2 style="color: #333; text-align: center;">¡Gracias por contactarnos!</h2>
          
          <p style="color: #555; font-size: 16px;">Hola ${name},</p>
          
          <p style="color: #555; font-size: 16px;">Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto. En Torisoft valoramos tu interés y nos esforzamos por brindarte una respuesta rápida y eficiente.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #555; font-size: 14px; margin: 5px 0;"><strong>Asunto:</strong> ${subject}</p>
            <p style="color: #555; font-size: 14px; margin: 10px 0;"><strong>Tu mensaje:</strong></p>
            <p style="color: #555; font-size: 14px; margin: 0; font-style: italic;">${message}</p>
          </div>
          
          <p style="color: #555; font-size: 16px;">Mientras tanto, puedes visitar nuestra web para conocer más sobre nuestros servicios y proyectos.</p>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://torisoftt.com" style="background-color: #6366f1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visitar sitio web</a>
          </div>
          
          <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">© ${new Date().getFullYear()} Torisoft. Todos los derechos reservados.</p>
        </div>
      `
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
        { message: 'Error sending email' },
        { status: 500 }
    );
  }
}