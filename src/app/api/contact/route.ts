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



export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Email to site owner
    await transporter.sendMail({
      from: 'info@torisoftt.com',
      to: 'hostingcuenca@gmail.com',
      subject: `Torisoft Page Requerimiento: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: 'info@torisoftt.com',
      to: email,
      subject: 'Recibimos tu mensaje - Torisoft',
      html: `
        <h2>Gracias por contactarnos</h2>
        <p>Hola ${name},</p>
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
        <p>Detalles de tu mensaje:</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
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