"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  DatabaseZap,
  ShoppingCart,
  Rocket,
  Search,
  Globe,
  Zap,
  ArrowRight,
  Activity
} from "lucide-react";
import Link from "next/link";
import React from "react";

// --- Data Definitions ---

const services = [
  {
    icon: <LayoutTemplate size={26} className="text-zinc-950" />,
    title: "Custom Web Design",
    description: "We don't use generic templates. We build bespoke digital experiences tailored to your brand identity, ensuring you stand out from the competition.",
    tags: ["UI/UX Design", "Responsive", "Figma"]
  },
  {
    icon: <Rocket size={26} className="text-zinc-950" />,
    title: "Technical SEO & Speed",
    description: "A beautiful site is useless if it's slow. We obsess over Core Web Vitals, ensuring lightning-fast load times and structure that Google loves.",
    tags: ["Core Web Vitals", "Meta Optimization", "Speed"]
  },
  {
    icon: <ShoppingCart size={26} className="text-zinc-950" />,
    title: "eCommerce Growth",
    description: "Turn visitors into buyers. We build secure, scalable online stores with seamless payment gateways and inventory management systems.",
    tags: ["Shopify", "WooCommerce", "Stripe/PayFast"]
  },
  {
    icon: <DatabaseZap size={26} className="text-zinc-950" />,
    title: "CMS Integration",
    description: "Take full control. We integrate powerful Content Management Systems like Sanity, Strapi, or WordPress, so you can update content without writing code.",
    tags: ["Headless CMS", "Content Mgmt", "Dynamic"]
  },
];

const seoFeatures = [
    {
        icon: <Zap size={22} className="text-zinc-300 group-hover:text-white transition-colors" />,
        title: "Lightning Fast",
        text: "Sub-second load times using Next.js static generation."
    },
    {
        icon: <Search size={22} className="text-zinc-300 group-hover:text-white transition-colors" />,
        title: "Google Optimized",
        text: "Semantic HTML5 structure and automated sitemaps."
    },
    {
        icon: <Globe size={22} className="text-zinc-300 group-hover:text-white transition-colors" />,
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
    <div className="font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION (DARK) - Accommodates transparent header */}
      <section className="relative pt-40 pb-32 px-6 bg-zinc-950 text-white min-h-[80vh] flex items-center justify-center">
        {/* Performance Optimized Background Glows */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div 
            className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(255,255,255,0) 70%)' }}
          ></div>
          <div 
            className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.15) 0%, rgba(255,255,255,0) 70%)' }}
          ></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] invert"></div>
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs tracking-widest uppercase font-semibold mb-8 backdrop-blur-md">
                Comprehensive Digital Services
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                WE BUILD DIGITAL PRODUCTS THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">PERFORM.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
                From high-converting landing pages to complex web applications, our focus is always on speed, security, and ranking first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID (LIGHT) */}
      <section className="py-32 relative bg-zinc-50 text-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">OUR EXPERTISE</h2>
            <p className="text-zinc-600 font-light max-w-xl mx-auto">Everything you need to dominate your digital landscape, built from the ground up.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group relative p-10 rounded-3xl bg-white/80 border border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-xl shadow-zinc-200/50 backdrop-blur-md"
              >
                <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-zinc-600 mb-8 leading-relaxed font-light">
                        {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {service.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-500">
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

      {/* 3. SEO FOCUS SECTION (DARK) */}
      <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        {/* Ambient Dark Glows */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)' }}></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] invert"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
                        DOMINATE THE <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">SEARCH RESULTS.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                        Most agencies build websites that look good but perform poorly. We code with SEO in mind from day one. Clean code, semantic structure, and optimized assets mean Google loves your site as much as your customers do.
                    </p>
                    
                    <div className="space-y-4">
                        {seoFeatures.map((feat, i) => (
                            <div key={i} className="flex gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                                <div className="mt-1 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1 tracking-wide">{feat.title}</h4>
                                    <p className="text-sm text-zinc-400 font-light">{feat.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 w-full"
                >
                    {/* Visual representation of Lighthouse/Audit Dashboard */}
                    <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                        {/* Dashboard Top Bar */}
                        <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-6">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-500">
                                <Activity size={14} /> Performance Audit
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Performance", val: "99" },
                                { label: "Accessibility", val: "100" },
                                { label: "Best Practices", val: "100" },
                                { label: "SEO", val: "100" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                                      {stat.val}
                                      <span className="text-2xl text-zinc-600 ml-1">%</span>
                                    </div>
                                    <div className="text-xs font-semibold tracking-widest uppercase text-zinc-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 4. PROCESS TIMELINE (LIGHT) */}
      <section className="py-32 relative bg-zinc-50 text-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">OUR PROCESS</h2>
                <p className="text-zinc-600 font-light max-w-xl mx-auto">How we bring your vision to life, step by exact step.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="relative p-8 rounded-3xl bg-white border border-zinc-200 shadow-lg shadow-zinc-200/40 hover:border-zinc-300 transition-all duration-300 overflow-hidden group"
                    >
                        {/* Massive background number watermark */}
                        <div className="text-8xl font-black text-zinc-50 absolute -top-4 -right-2 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                            {step.num}
                        </div>
                        <div className="relative z-10 pt-8">
                            <h3 className="text-xl font-bold mb-4 tracking-tight text-zinc-950">{step.title}</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed font-light">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. CTA (DARK) */}
      <section className="py-32 text-center bg-zinc-950 text-white relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] invert"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            <div className="p-12 md:p-20 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)' }}></div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">READY TO SCALE?</h2>
                    <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
                        Stop losing customers to slow, outdated websites. Let&apos;s build a digital platform that actively grows your business.
                    </p>
                    <Link href="/#contact" className="group relative overflow-hidden px-8 py-4 bg-white text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-full transition-all hover:scale-105 flex items-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <span className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 flex items-center">
                          Start Your Project <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  );
};

export default WhatWeDoClientPage;