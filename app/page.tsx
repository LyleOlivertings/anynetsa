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
    <div className="flex flex-col min-h-screen bg-white text-zinc-950 overflow-x-hidden selection:bg-zinc-950 selection:text-white font-sans">
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}