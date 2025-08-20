"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  DatabaseZap,
  ShoppingCart,
  Rocket,
  Search,
  PenTool,
  Code,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// Service data
const services = [
  {
    icon: <LayoutTemplate size={40} className="text-accent" />,
    title: "Web Design & Development",
    description: "We create stunning, responsive websites from scratch, tailored to your brand's identity and goals. Our designs are modern, intuitive, and built for performance.",
  },
  {
    icon: <DatabaseZap size={40} className="text-accent" />,
    title: "CMS Integration",
    description: "Take control of your content. We integrate powerful Content Management Systems (CMS) allowing you to update your site with ease.",
  },
  {
    icon: <ShoppingCart size={40} className="text-accent" />,
    title: "eCommerce Solutions",
    description: "Ready to sell online? We build secure and scalable eCommerce platforms with seamless payment integrations to help you grow your online business.",
  },
  {
    icon: <Rocket size={40} className="text-accent" />,
    title: "SEO & Performance",
    description: "A beautiful site is useless if no one can find it. We optimize your website for search engines (SEO) and ensure it loads lightning-fast for the best user experience.",
  },
];

// Process data
const processSteps = [
    {
        icon: <Search size={30} />,
        title: "1. Discovery & Strategy",
        description: "We start by understanding your business and goals to create a tailored strategy."
    },
    {
        icon: <PenTool size={30} />,
        title: "2. Design & Prototyping",
        description: "We design a visually stunning and user-friendly interface, providing mockups for your approval."
    },
    {
        icon: <Code size={30} />,
        title: "3. Development & Coding",
        description: "Our developers bring the design to life with clean, efficient code using the latest technologies."
    },
    {
        icon: <CheckCircle size={30} />,
        title: "4. Launch & Optimization",
        description: "After rigorous testing, we deploy your website and monitor its performance for continuous improvement."
    }
];


const WhatWeDoPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

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
            What We Do
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto"
          >
            We transform ideas into digital reality, delivering high-quality web solutions that drive results.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-secondary p-8 rounded-lg border border-gray-700 transition-all duration-300 hover:border-accent hover:-translate-y-2"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
       <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Development Process</h2>
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
                {processSteps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
                    >
                        <div className="order-1 w-5/12"></div>
                        <div className="z-10 flex items-center order-1 bg-accent shadow-xl w-14 h-14 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">{step.icon}</h1>
                        </div>
                        <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="font-bold text-white text-xl">{step.title}</h3>
                            <p className="text-sm leading-snug tracking-wide text-text-secondary text-opacity-100">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
            <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-4"
            >
                Have a project in mind?
            </motion.h2>
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-text-secondary mb-8 max-w-xl mx-auto"
            >
                Let's work together to create something amazing. Contact us for a free, no-obligation quote.
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
                    Get in Touch
                </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoPage;