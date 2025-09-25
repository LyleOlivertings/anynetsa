import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import ThankYouEmail from "@/email/ThankYouEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    console.log("Received request:", { name, email });

    // 1. Send email to your personal inbox
    console.log("Attempting to send contact form email...");
    const { data: contactData, error: contactError } = await resend.emails.send({
      from: "The AnyNetSA Team <onboarding@resend.dev>",
      to: "oliverlyle29@gmail.com",
      subject: `New message from ${name}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (contactError) {
      console.error("Error sending contact form email:", contactError);
      return NextResponse.json({ message: "Failed to send contact email.", error: contactError }, { status: 500 });
    }
    console.log("Contact form email sent successfully:", contactData);

    // 2. Send thank you email to the user
    console.log("Attempting to send thank you email...");
    const { data: thankYouData, error: thankYouError } = await resend.emails.send({
      from: "The AnyNetSA Team <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting us!",
      react: ThankYouEmail({ name }),
    });

    if (thankYouError) {
      console.error("Error sending thank you email:", thankYouError);
      return NextResponse.json({ message: "Failed to send thank you email.", error: thankYouError }, { status: 500 });
    }
    console.log("Thank you email sent successfully:", thankYouData);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("A critical error occurred in the API route:", error);
    // Return a generic error response, but log the detailed error on the server
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}