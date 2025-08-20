"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Github size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-primary border-t border-gray-800 pt-16 pb-8">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent mb-4">AnyNet SA</h3>
            <p className="text-text-secondary">
              Crafting modern, high-performance websites to elevate your digital presence. Based in Cape Town, South Africa.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-text-secondary hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/what-we-do" className="text-text-secondary hover:text-accent transition-colors">What We Do</Link></li>
              <li><Link href="/our-work" className="text-text-secondary hover:text-accent transition-colors">Our Work</Link></li>
              <li><Link href="/#contact" className="text-text-secondary hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-accent" />
                <span>info@anynetsa.co.za</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-accent" />
                <span>+27 (0)21 123 4567</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-3 text-accent" />
                <span>Cape Town, South Africa</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary p-3 rounded-full text-text-secondary hover:bg-accent hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-text-secondary">
          <p>&copy; {currentYear} AnyNet SA. All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;