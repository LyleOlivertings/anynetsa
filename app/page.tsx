import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AnyNet SA - Custom Website Development in Cape Town',
  description: 'Affordable, modern websites for your business. Starting from R2500. We are a web development company based in Cape Town, South Africa.',
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Pricing />
      <Contact />
    </div>
  );
}