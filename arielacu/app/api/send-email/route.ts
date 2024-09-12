import { NextResponse } from 'next/server';
import { sendMail } from '@/app/lib/send-mail';
export async function POST(request: Request) {
    const body = await request.json();

    const { nombre, correo, mensaje } = body;

    try {
        const mailResponse = await sendMail({
            email: correo,
            subject: `New message from ${nombre}`,
            text: `\n Sender : ${correo} ${mensaje}\n sent by ${correo}`,
        });
        
        return NextResponse.json({ success: true, mailResponse });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 });
    }
}
