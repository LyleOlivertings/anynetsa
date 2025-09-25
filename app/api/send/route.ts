import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import ThankYouEmail from "@/email/ThankYouEmail";

// Use the RESEND_API_KEY from your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    // Send email to your personal inbox
    await resend.emails.send({
      from: "The AnyNetSA Team <onboarding@resend.dev>",
      to: "oliverlyle29@gmail.com", // Your personal email
      subject: `New message from ${name}`,
      react: ContactFormEmail({ name, email, message }),
    });

    // Send thank you email to the user
    await resend.emails.send({
      from: "The AnyNetSA Team <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting us!",
      react: ThankYouEmail({ name }),
    });

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("A critical error occurred in the API route:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}