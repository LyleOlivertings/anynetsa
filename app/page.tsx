import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ANYNET - Future-Proof Web Development',
  description: 'AnyNet SA (Pty) Ltd - Custom, modern web development solutions. Elevate your business with fast, secure, and responsive websites.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Section Order:
        1. Hero: Grab attention
        2. Services: Show what you do (Icons)
        3. About: Build trust (Text + Stats)
        4. Pricing: Show value (Cards)
        5. Contact: Call to action
      */}
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Contact />
    </main>
  );
}