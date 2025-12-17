import ContactPage from "@/components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - AnyNet SA | Let's Start a Project",
  description: "Get in touch with AnyNet SA. We are ready to help you with web development, SEO, and digital strategy. Call us at +27 65 284 5981.",
};

const Page = () => {
  return <ContactPage />;
};

export default Page;