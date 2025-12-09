"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">
              More Than Just <span className="text-primary">Code</span>.
            </h2>
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              At <span className="text-white font-semibold">ANYNET</span>, we believe that a website is your most powerful business tool. We don't just build pages; we build digital experiences that drive growth, engagement, and results.
            </p>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Our team combines technical expertise with creative vision to deliver solutions that are fast, secure, and scalable. Whether you are a startup or an established enterprise, we have the tools to take you further.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-surface border border-white/5">
                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                <p className="text-sm text-text-muted">Projects Completed</p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-white/5">
                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                <p className="text-sm text-text-muted">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Visual/Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="space-y-6 mt-12 sm:mt-0">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Code className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                <p className="text-sm text-text-muted">Optimized for performance and search engines.</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-md">
                <Cpu className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Modern Tech</h3>
                <p className="text-sm text-text-muted">Built with Next.js, React, and Tailwind CSS.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-surface border border-white/5 shadow-xl">
                <Globe className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Standard</h3>
                <p className="text-sm text-text-muted">World-class design standards for local businesses.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;