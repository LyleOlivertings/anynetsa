import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    // Send email to your personal inbox
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "oliverlyle29@gmail.com", // CHANGE THIS to your personal email
      subject: `New message from ${name}`,
      html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    });

    // Send thank you email to the user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thank you for contacting us!",
      html: `<p>Hi ${name},</p><p>Thank you for reaching out. We have received your message and will get back to you shortly.</p><p>Best regards,<br/>The AnyNet SA Team</p>`,
    });

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send emails." },
      { status: 500 }
    );
  }
}