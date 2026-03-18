"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingOptions = [
  {
    title: "Starter",
    price: "R2,500",
    description: "Perfect for small businesses establishing an online presence.",
    features: ["3 Page Website", "Responsive Design", "Contact Form", "Basic SEO", "Fast Hosting Setup"],
    highlight: false,
  },
  {
    title: "Business + CMS",
    price: "R5,500",
    description: "For growing companies that need to manage their own content.",
    features: ["5+ Pages", "Content Management System", "Blog Functionality", "Analytics Dashboard", "Social Media Integration", "1 Month Support"],
    highlight: true, 
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Complex web applications and e-commerce solutions.",
    features: ["Full E-Commerce", "Custom API Integration", "User Authentication", "Advanced Security", "Priority 24/7 Support", "Cloud Infrastructure"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-32 bg-white border-t border-dashed border-zinc-200" id="pricing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-zinc-950">Transparent <span className="text-zinc-400 font-serif italic normal-case">Pricing</span></h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-light">
            Choose the package that fits your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div key={index} className={`relative ${option.highlight ? 'z-10' : ''}`}>
              {/* RGB Glow behind the highlighted card */}
              {option.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 rounded-[2rem] blur opacity-30"></div>
              )}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative h-full p-10 rounded-3xl transition-all duration-300 flex flex-col ${
                  option.highlight 
                    ? "bg-zinc-950 text-white scale-105" 
                    : "bg-zinc-50 border border-zinc-200 text-zinc-950"
                }`}
              >
                {option.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-zinc-950 px-6 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg shadow-white/10">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{option.title}</h3>
                <div className="flex items-baseline mb-4 mt-6">
                  <span className="text-5xl font-extrabold tracking-tighter">{option.price}</span>
                </div>
                <p className={`mb-8 text-sm leading-relaxed font-light pb-8 border-b ${option.highlight ? 'border-zinc-800 text-zinc-400' : 'border-zinc-200 text-zinc-500'}`}>
                  {option.description}
                </p>
                
                <ul className="space-y-5 mb-10 flex-grow">
                  {option.features.map((feature, i) => (
                    <li key={i} className={`flex items-center text-sm font-medium ${option.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      <div className={`mr-4 p-1 rounded-full ${option.highlight ? 'bg-white text-zinc-950' : 'bg-zinc-200 text-zinc-950'}`}>
                          <Check size={14} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/contact?subject=${encodeURIComponent(option.title + " Plan")}`}
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    option.highlight 
                      ? "bg-white hover:bg-zinc-200 text-zinc-950" 
                      : "bg-zinc-950 hover:bg-zinc-800 text-white"
                  }`}
                >
                  Choose Plan
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;