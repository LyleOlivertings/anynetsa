"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary/95 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-2xl font-bold text-accent">
              AnyNet SA
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg text-text-secondary hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Link
              href="/#contact"
              className="hidden md:inline-block bg-accent hover:bg-accent-hover text-white font-bold py-2 px-5 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-primary/95 backdrop-blur-lg md:hidden"
            onClick={toggleMenu}
          >
            {navItems.map((item) => (
              <motion.div variants={linkVariants} key={item.name}>
                <Link
                  href={item.href}
                  className="text-3xl font-semibold text-text hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
             <motion.div variants={linkVariants} className="pt-8">
                <Link
                  href="/#contact"
                  className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                >
                  Get a Quote
                </Link>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;