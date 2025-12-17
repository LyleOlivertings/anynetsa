"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  DatabaseZap,
  ShoppingCart,
  Rocket,
  Search,
  Code,
  CheckCircle,
  BarChart3,
  Globe,
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import React from "react";

// --- Data Definitions ---

const services = [
  {
    icon: <LayoutTemplate size={32} className="text-white" />,
    title: "Custom Web Design",
    description: "We don't use generic templates. We build bespoke digital experiences tailored to your brand identity, ensuring you stand out from the competition.",
    tags: ["UI/UX Design", "Responsive", "Figma"]
  },
  {
    icon: <Rocket size={32} className="text-white" />,
    title: "Technical SEO & Speed",
    description: "A beautiful site is useless if it's slow. We obsess over Core Web Vitals, ensuring lightning-fast load times and structure that Google loves.",
    tags: ["Core Web Vitals", "Meta Optimization", "Speed"]
  },
  {
    icon: <ShoppingCart size={32} className="text-white" />,
    title: "eCommerce Growth",
    description: "Turn visitors into buyers. We build secure, scalable online stores with seamless payment gateways and inventory management systems.",
    tags: ["Shopify", "WooCommerce", "Stripe/PayFast"]
  },
  {
    icon: <DatabaseZap size={32} className="text-white" />,
    title: "CMS Integration",
    description: "Take full control. We integrate powerful Content Management Systems like Sanity, Strapi, or WordPress, so you can update content without writing code.",
    tags: ["Headless CMS", "Content Mgmt", "Dynamic"]
  },
];

const seoFeatures = [
    {
        icon: <Zap size={24} className="text-accent" />,
        title: "Lightning Fast",
        text: "Sub-second load times using Next.js static generation."
    },
    {
        icon: <Search size={24} className="text-primary" />,
        title: "Google Optimized",
        text: "Semantic HTML5 structure and automated sitemaps."
    },
    {
        icon: <Globe size={24} className="text-accent" />,
        title: "Global CDN",
        text: "Content delivered from servers closest to your users."
    }
];

const processSteps = [
    { 
        num: "01",
        title: "Discovery & Strategy", 
        description: "We dive deep into your business goals, target audience, and competitors to craft a roadmap for success." 
    },
    { 
        num: "02", 
        title: "Design & Prototype", 
        description: "We create interactive mockups of your site. You get to see the look and feel before we write a single line of code." 
    },
    { 
        num: "03", 
        title: "Development & SEO", 
        description: "Our engineers build your site using modern frameworks, baking in SEO best practices from the ground up." 
    },
    { 
        num: "04", 
        title: "Launch & Growth", 
        description: "We deploy your site to a global CDN, configure analytics, and hand over the keys. We support you as you grow." 
    }
];

// --- Components ---

const WhatWeDoClientPage = () => {
  return (
    <div className="bg-background text-text min-h-screen overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-semibold mb-6 backdrop-blur-sm">
                Comprehensive Digital Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                We Build Digital Products that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Perform</span>.
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-10">
                From simple landing pages to complex web applications, our focus is always on speed, security, and ranking #1.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-surface/30 border border-white/5 hover:border-primary/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/20 transition-all duration-300">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-text-muted mb-6 leading-relaxed">
                        {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5 text-text-muted">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEO Focus Section */}
      <section className="py-24 bg-surface/20 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Dominate the <span className="text-primary">Search Results</span>.
                    </h2>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        Most agencies build websites that look good but perform poorly. We code with SEO in mind from day one. Clean code, semantic structure, and optimized assets mean Google loves your site as much as your customers do.
                    </p>
                    
                    <div className="space-y-6">
                        {seoFeatures.map((feat, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-white/5 h-fit border border-white/5">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">{feat.title}</h4>
                                    <p className="text-sm text-text-muted">{feat.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 relative"
                >
                    {/* Visual representation of SEO/Stats */}
                    <div className="relative p-8 rounded-3xl bg-background border border-white/10 shadow-2xl">
                        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-xs text-text-muted">Performance Audit</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Performance", val: "99" },
                                { label: "Accessibility", val: "100" },
                                { label: "Best Practices", val: "100" },
                                { label: "SEO", val: "100" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4 rounded-xl bg-surface/50 border border-white/5">
                                    <div className="text-3xl font-bold text-green-400 mb-1">{stat.val}</div>
                                    <div className="text-sm text-text-muted">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 4. Process Timeline */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
                <p className="text-text-muted">How we bring your vision to life, step by step.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                    >
                        <div className="text-6xl font-bold text-white/5 absolute top-4 right-4 pointer-events-none">
                            {step.num}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 text-accent">{step.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
            <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10 backdrop-blur-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale?</h2>
                    <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
                        Stop losing customers to slow websites. Let's build a platform that converts.
                    </p>
                    <Link href="/#contact" className="inline-flex items-center px-8 py-4 bg-white text-background font-bold rounded-full hover:bg-gray-100 transition-colors">
                        Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  );
};

export default WhatWeDoClientPage;