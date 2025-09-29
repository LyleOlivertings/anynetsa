"use client";

import PortfolioCard from "@/components/PortfolioCard";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the type for a single portfolio item
interface PortfolioItem {
  title: string;
  description: string;
  liveUrl: string;
  imageUrl?: string;
}

// Define the props for our new client component
interface OurWorkClientPageProps {
  portfolioData: PortfolioItem[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const OurWorkClientPage: React.FC<OurWorkClientPageProps> = ({ portfolioData }) => {
  return (
    <div className="bg-background text-text min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 md:py-32 text-center bg-primary"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-accent mb-4"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            We take pride in our work. Here are some of the projects we've recently launched for our amazing clients.
          </motion.p>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {portfolioData.map((project) => (
                <PortfolioCard key={project.title} {...project} imageUrl={project.imageUrl ?? ""} />
            ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-primary">
          <div className="container mx-auto px-4">
              <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-4"
              >
                  Like What You See?
              </motion.h2>
              <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-text-secondary mb-8 max-w-xl mx-auto"
              >
                  Let's turn your idea into the next success story. Reach out to us today for a free consultation.
              </motion.p>
              <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
              >
                   <Link
                      href="/#contact"
                      className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 inline-block"
                  >
                      Start Your Project
                  </Link>
              </motion.div>
          </div>
      </section>
    </div>
  );
};

export default OurWorkClientPage;