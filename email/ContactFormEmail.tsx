import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Message from your AnyNet SA Website</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Section style={section}>
          <Text style={text}>
            You've received a new message from your website's contact form.
          </Text>
          <Text style={text}>
            <strong>From:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
        </Section>
        <Section style={messageSection}>
          <Heading as="h2" style={h2}>
            Message:
          </Heading>
          <Text style={text}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

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

const h1 = {
  color: "#004AAD",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const h2 = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px 0 10px",
};

const text = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
};

const section = {
  padding: "0 48px",
};

const messageSection = {
  padding: "0 48px",
  borderTop: "1px solid #e6ebf1",
  marginTop: "20px",
  paddingTop: "20px",
};