import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Pricing />
      <Contact />
    </div>
  );
}