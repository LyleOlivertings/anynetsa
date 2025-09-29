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
  MessageSquareText,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// Data can be defined here or passed as props if it becomes dynamic
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

const processSteps = [
    { icon: <Search size={24} />, title: "1. Discovery & Strategy", description: "We start by understanding your business and goals to create a tailored strategy." },
    { icon: <PenTool size={24} />, title: "2. Design & Prototyping", description: "We design a visually stunning and user-friendly interface, providing mockups for your approval." },
    { icon: <Code size={24} />, title: "3. Development & Coding", description: "Our developers bring the design to life with clean, efficient code using the latest technologies." },
    { icon: <CheckCircle size={24} />, title: "4. Launch & Optimization", description: "After rigorous testing, we deploy your website and monitor its performance for continuous improvement." }
];

const partnershipSteps = [
    { icon: <MessageSquareText size={40} className="text-accent"/>, title: "Initial Contact", description: "Reach out to us with your project idea. We'll schedule a free consultation to discuss your vision, goals, and requirements in detail." },
    { icon: <LayoutDashboard size={40} className="text-accent"/>, title: "Live Demo Development", description: "We build a functional demo of your website (up to 70% complete). This allows you to see and interact with the design before full commitment." },
    { icon: <ShieldCheck size={40} className="text-accent"/>, title: "Monthly Maintenance", description: "Starting from R500/month, we provide continuous support including Service Level Agreements (SLAs), security, and UI updates to keep your site fresh." }
];

const WhatWeDoClientPage = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <div className="bg-background text-text min-h-screen">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-20 md:py-32 text-center bg-primary">
        <div className="container mx-auto px-4">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-6xl font-extrabold text-accent mb-4">What We Do</motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">We transform ideas into digital reality, delivering high-quality web solutions that drive results.</motion.p>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-secondary p-8 rounded-lg border border-gray-700 transition-all duration-300 hover:border-accent hover:-translate-y-2">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Technical Process</h2>
            <div className="relative">
                <div className="hidden md:block absolute w-0.5 h-full bg-gray-700 top-0 left-1/2 -translate-x-1/2"></div>
                {processSteps.map((step, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="mb-12 md:mb-8">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className={`hidden md:flex w-5/12 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>{index % 2 === 0 && <div className="p-6 bg-secondary rounded-lg w-full max-w-sm text-right">{step.description}</div>}</div>
                            <div className="relative z-10"><div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">{step.icon}</div></div>
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:order-first'}`}>
                                <h3 className="font-bold text-xl mb-2 mt-4 md:mt-0">{step.title}</h3>
                                <p className="md:hidden text-text-secondary">{step.description}</p>
                                {index % 2 !== 0 && <div className="hidden md:block p-6 bg-secondary rounded-lg w-full max-w-sm">{step.description}</div>}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
        </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {partnershipSteps.map((step, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-secondary p-8 rounded-lg border border-gray-700 flex flex-col items-center">
                        <div className="mb-4">{step.icon}</div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-text-secondary flex-grow">{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      <section className="py-20 text-center bg-primary">
        <div className="container mx-auto px-4">
            <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4">Have a project in mind?</motion.h2>
            <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-text-secondary mb-8 max-w-xl mx-auto">Let's work together to create something amazing. Contact us for a free, no-obligation quote.</motion.p>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                 <Link href="/#contact" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 inline-block">Get in Touch</Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoClientPage;