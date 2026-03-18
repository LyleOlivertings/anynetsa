"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-50 border-t border-zinc-200">
      
      {/* Animated Marquee Banner - Dark accent */}
      <div className="w-full bg-zinc-950 text-white py-5 mb-24 flex overflow-hidden whitespace-nowrap shadow-[0_0_30px_rgba(6,182,212,0.1)]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-10 font-bold tracking-widest uppercase text-sm"
        >
          {Array(10).fill("DIGITAL EXCELLENCE • STRATEGIC DESIGN • FUTURE PROOF CODE • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight relative z-10 text-zinc-950">
              More Than <br/> Just <span className="text-zinc-400 italic font-serif text-5xl md:text-7xl">Code.</span>
            </h2>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed font-light">
              At <span className="text-zinc-950 font-semibold">ANYNET</span>, we believe that a website is your most powerful business tool. We don't just build pages; we build digital experiences that drive growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-8 rounded-2xl bg-zinc-950 text-white border-b-4 border-cyan-500 shadow-xl">
                <h4 className="text-5xl font-extrabold mb-2 tracking-tighter">50<span className="text-cyan-500">+</span></h4>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Projects</p>
              </div>
              <div className="p-8 rounded-2xl bg-zinc-950 text-white border-b-4 border-fuchsia-500 shadow-xl">
                <h4 className="text-5xl font-extrabold mb-2 tracking-tighter">100<span className="text-fuchsia-500">%</span></h4>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-12 sm:mt-0">
              <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:-translate-y-2 transition-transform">
                <Code className="w-8 h-8 text-zinc-950 mb-6" />
                <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-950">Clean Code</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">Optimized for peak performance and strict search engines.</p>
              </div>
              <div className="p-8 rounded-3xl bg-zinc-100 border border-zinc-200 hover:-translate-y-2 transition-transform">
                <Cpu className="w-8 h-8 text-zinc-950 mb-6" />
                <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-950">Modern Tech</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">Engineered with Next.js, React, and Tailwind CSS.</p>
              </div>
            </div>
            <div className="space-y-4 sm:mt-12">
              <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:-translate-y-2 transition-transform relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-[50px] rounded-full"></div>
                <Globe className="w-8 h-8 text-zinc-950 mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-950 relative z-10">Global Standard</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed relative z-10">World-class design standards brought to local businesses.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;