"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

// Framer Motion Variants for the staggered text effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time between each letter animating
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { 
      type: "spring" as const, 
      damping: 12, 
      stiffness: 200 
    }
  },
};

const Hero = () => {
  const highlightWord = "PRESENCE";

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 bg-zinc-950 text-white perspective-[1000px]">
      {/* Subtle RGB Glows & Grid Texture */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-500/15 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
        <div className="absolute top-[20%] left-[60%] w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[6000ms]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] invert"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-10 left-10 hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
        >
          <Star className="w-4 h-4 text-white fill-white" />
          <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Premium Agency</span>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block py-1.5 px-4 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs tracking-widest uppercase font-semibold mb-8 backdrop-blur-md"
          >
            Future-Proof Web Development
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 text-white leading-[0.9] flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              ELEVATE YOUR
            </motion.span>
            
            {/* Animated Staggered Letters */}
            <motion.span 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex overflow-hidden pb-4"
            >
              {highlightWord.split("").map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            We engineer high-performance, stunning digital experiences that convert visitors into loyal customers. Fast, secure, and built for scale.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#contact"
              className="group relative px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 font-bold rounded-full transition-all flex items-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 font-bold rounded-full transition-all backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;