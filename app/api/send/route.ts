import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import ThankYouEmail from "@/email/ThankYouEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    // Send email to your personal inbox
    await resend.emails.send({
      from: "The AnyNetSA Team <onboarding@resend.dev>", // Updated sender name
      to: "oliverlyle29@gmail.com", // CHANGE THIS to your personal email
      subject: `New message from ${name}`,
      react: ContactFormEmail({ name, email, message }),
    });

    // Send thank you email to the user
    await resend.emails.send({
      from: "The AnyNetSA Team <onboarding@resend.dev>", // Updated sender name
      to: email,
      subject: "Thank you for contacting us!",
      react: ThankYouEmail({ name }),
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