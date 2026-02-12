"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* OPTIMIZED BACKGROUND BLOBS:
        1. Removed 'mix-blend-screen' (High GPU cost on mobile)
        2. Reduced blur to 'blur-3xl'
        3. Added 'transform-gpu' for hardware acceleration
        4. Lowered opacity slightly to maintain aesthetic without blend modes
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-blob transform-gpu opacity-70"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000 transform-gpu opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-4000 transform-gpu opacity-70"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      </div>

      {/* Content Container - z-10 ensures it's clickable and visible */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Faster animation (0.5s vs 0.8s)
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
            Future-Proof Web Development
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 pb-2">
            Elevate Your <br className="hidden md:block" />
            <span className="text-primary">Digital Presence</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            We craft high-performance, stunning websites that convert visitors into customers. 
            Fast, secure, and tailored to your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-full transition-all backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;