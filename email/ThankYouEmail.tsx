import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Img,
  Section,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ThankYouEmailProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const ThankYouEmail = ({ name }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for getting in touch!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center", padding: "20px 0" }}>
          {/* Note: You might need to host your logo online for it to appear in emails */}
          <Img
            src={`https://imgur.com/a/KPcT4pV`} // Replace with a hosted URL of your white logo
            width="150"
            alt="AnyNet SA Logo"
            style={logo}
          />
        </Section>
        <Heading style={h1}>Thank You For Your Message, {name}!</Heading>
        <Text style={text}>
          We've successfully received your message and appreciate you reaching out.
          A member of our team will review your inquiry and get back to you as soon
          as possible.
        </Text>
        <Text style={text}>
          Best regards,
          <br />
          The AnyNet SA Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          AnyNet SA | Cape Town, South Africa
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ThankYouEmail;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "8px",
};

const logo = {
  margin: "0 auto",
};

const h1 = {
  color: "#004AAD",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0 0 30px",
  padding: "0 20px",
};

const text = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center" as const,
};