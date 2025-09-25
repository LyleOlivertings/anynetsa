"use client";

import PortfolioCard from "@/components/PortfolioCard";
import { motion } from "framer-motion";
import Link from "next/link";

const portfolioData = [
  {
    title: "Scottsdene High School",
    description: "A modern, comprehensive informational hub for students, parents, and staff, featuring a clean design and easy navigation.",
    liveUrl: "https://scottsdenehigh.vercel.app/",
  },
  {
    title: "SD Content Management System",
    description: "A custom-built CMS empowering school staff to manage website content, news, and events effortlessly.",
    liveUrl: "https://sd-cms.vercel.app/",
  },
  {
    title: "Muizenberg High School",
    description: "A professional and engaging website serving as a central source for school information, admissions, and community updates.",
    liveUrl: "https://www.muizenberghigh.org/",
  },
  {
    title: "St James Primary School",
    description: "A vibrant and welcoming website for St James R.C. Primary, providing essential information for parents and showcasing the school's ethos.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=St+James+Primary",
    liveUrl: "https://st-james-primary-school.vercel.app/",
  },
  {
    title: "MDT Inc.",
    description: "A sleek, corporate site for a community-focused trust, effectively communicating their mission, projects, and impact.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=MDT+Inc.",
    liveUrl: "https://mdtinc.vercel.app/",
  },
  {
    title: "FLAFSA",
    description: "A dedicated web portal for a professional forum that facilitates communication, shares resources, and promotes events.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=FLAFSA",
    liveUrl: "https://flafsa.vercel.app/",
  },
  {
    title: "AGFLC",
    description: "An informational website for a faith-based organization, providing a clear and accessible platform for their vision and programs.",
    imageUrl: "https://placehold.co/600x400/1E1E1E/E0E0E0?text=AGFLC",
    liveUrl: "https://agflc.vercel.app/",
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const OurWorkPage = () => {
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
                <PortfolioCard key={project.title} {...project} />
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

export default OurWorkPage;