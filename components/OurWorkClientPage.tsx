"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { PortfolioItem, Category } from "@/app/our-work/page";

interface OurWorkClientPageProps {
  portfolioData: PortfolioItem[];
}

const categories: Category[] = ["All", "Corporate", "Schools", "NGO", "Internal"];

const OurWorkClientPage: React.FC<OurWorkClientPageProps> = ({ portfolioData }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredData = portfolioData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="bg-zinc-50 text-zinc-950 min-h-screen relative overflow-hidden font-sans">
      {/* Background Ambience (Performance Optimized: Radial Gradients instead of CSS Blur) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(255,255,255,0) 70%)' }}
        ></div>
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, rgba(255,255,255,0) 70%)' }}
        ></div>
        <div 
          className="absolute top-[20%] left-[60%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(255,255,255,0) 70%)' }}
        ></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04]"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-16 text-center relative z-10 px-6">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block py-1.5 px-4 rounded-full border border-zinc-200 bg-white/50 text-zinc-600 text-xs tracking-widest uppercase font-semibold mb-6 backdrop-blur-md shadow-sm"
        >
          Our Portfolio
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.9]"
        >
          OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-600 to-zinc-400">MASTERPIECES</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          We engineer robust, scalable, and stunning digital experiences. 
          <br className="hidden md:block" />
          <span className="text-zinc-900 font-medium">Note:</span> All projects below are powered by a custom CMS.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
        >
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-200 border backdrop-blur-md ${
                        activeCategory === cat 
                        ? "bg-zinc-950 border-zinc-950 text-white shadow-lg shadow-zinc-950/20 scale-105" 
                        : "bg-white/60 border-zinc-200 text-zinc-500 hover:bg-white hover:border-zinc-300 hover:text-zinc-950 hover:shadow-sm"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 px-6 relative z-10 container mx-auto max-w-7xl">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
                {filteredData.map((project) => (
                    <PortfolioCard key={project.title} {...project} />
                ))}
            </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default OurWorkClientPage;