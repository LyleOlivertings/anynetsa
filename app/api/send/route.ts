import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactFormEmail from "@/email/ContactFormEmail";
import ThankYouEmail from "@/email/ThankYouEmail";

// Create a transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Use the Gmail service
  auth: {
    user: process.env.EMAIL_SERVER_USER, // Your Gmail address from .env
    pass: process.env.EMAIL_SERVER_PASSWORD, // Your App Password from .env
  },
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    // Render the React components to HTML strings
    const contactEmailHtml = await render(
      ContactFormEmail({ name, email, message })
    );
    const thankYouEmailHtml = await render(ThankYouEmail({ name }));

    // 1. Send email to your personal inbox
    const contactMailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_SERVER_USER}>`,
      to: "oliverlyle29@gmail.com",
      subject: `New message from ${name}`,
      html: contactEmailHtml,
    };
    await transporter.sendMail(contactMailOptions);

    // 2. Send thank you email to the user
    const thankYouMailOptions = {
      from: `"The AnyNetSA Team" <${process.env.EMAIL_SERVER_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      html: thankYouEmailHtml,
    };
    await transporter.sendMail(thankYouMailOptions);

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
