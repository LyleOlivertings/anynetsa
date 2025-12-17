"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";
import { PortfolioItem, Category } from "@/app/our-work/page";

interface OurWorkClientPageProps {
  portfolioData: PortfolioItem[];
}

const categories: Category[] = ["All", "Corporate", "Schools", "Internal"];

const OurWorkClientPage: React.FC<OurWorkClientPageProps> = ({ portfolioData }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredData = portfolioData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="bg-background text-text min-h-screen relative overflow-hidden">
       {/* Background Ambience */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Masterpieces</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12"
        >
          We build robust, scalable, and user-friendly digital solutions. 
          <br />
          <span className="text-accent font-semibold">Note:</span> All projects below include a custom CMS for easy client management.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
        >
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                        activeCategory === cat 
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/25 scale-105" 
                        : "bg-surface/50 border-white/10 text-text-muted hover:bg-surface hover:text-white"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-6 relative z-10 container mx-auto">
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