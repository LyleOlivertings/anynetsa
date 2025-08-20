"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingOptions = [
  {
    title: "Basic Website",
    price: "R2500",
    features: [
      "Up to 3 Pages",
      "Modern & Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "Fast Loading Speeds",
    ],
  },
  {
    title: "Basic + CMS",
    price: "R5500",
    features: [
      "All Basic Features",
      "Content Management System (CMS)",
      "You Can Update Your Own Content",
      "Blog/News Section",
      "1 Hour of Training Included",
    ],
  },
  {
    title: "Custom Project",
    price: "Contact Us",
    features: [
      "eCommerce Solutions",
      "Advanced Functionality",
      "Custom API Integrations",
      "Tailored to Your Needs",
      "Ongoing Support Available",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary rounded-lg p-8 flex flex-col border border-gray-700 hover:border-accent transition-colors"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">{option.title}</h3>
              <p className="text-4xl font-extrabold mb-6">{option.price}</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="text-accent mr-3 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded-lg text-center transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;