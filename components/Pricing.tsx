"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link"; //

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
    highlight: true, // This card will pop
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
    <section className="py-24 bg-background relative" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Choose the package that fits your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                option.highlight 
                  ? "bg-white/5 border-primary/50 shadow-2xl shadow-primary/10" 
                  : "bg-surface/50 border-white/5 hover:border-white/10"
              } backdrop-blur-sm transition-all duration-300 hover:-translate-y-2`}
            >
              {option.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-white">{option.price}</span>
              </div>
              <p className="text-text-muted mb-8 text-sm leading-relaxed">{option.description}</p>
              
              <ul className="space-y-4 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-text-secondary">
                    <div className={`mr-3 p-1 rounded-full ${option.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'}`}>
                        <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href={`/contact?subject=${encodeURIComponent(option.title + " Plan")}`}
                className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${
                  option.highlight 
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;