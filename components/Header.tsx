"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Our Work", href: "/our-work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Staggered animation variants for the mobile menu
const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2,
      type: "spring" as const,
      damping: 25,
      stiffness: 200
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: 50 },
  open: { opacity: 1, x: 0 }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // The context is dark ONLY if we are on the homepage AND haven't scrolled down yet
  const isHome = pathname === "/";
  const isDarkContext = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Check initial scroll position on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          isScrolled ? "top-4 px-4" : "top-0 px-0"
        }`}
      >
        <div 
          className={`w-full transition-all duration-500 flex items-center justify-between ${
            isScrolled 
              ? "max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-zinc-200 shadow-sm rounded-full px-6 h-16" 
              : "container mx-auto px-6 h-24 bg-transparent"
          }`}
        >
          {/* Logo Branding */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            {/* Image Logo */}
            <div className="relative w-9 h-9 md:w-11 md:h-11 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Image 
                src="/logo5.png"
                alt="AnyNet SA Logo"
                fill
                className={`object-contain transition-all duration-500 ${
                  isDarkContext || isOpen ? "filter brightness-0 invert" : "filter brightness-0"
                }`} 
                priority
              />
            </div>
            
            {/* Text Branding */}
            <div className={`text-xl md:text-2xl font-black tracking-tighter flex items-center transition-colors duration-500 ${
              isDarkContext || isOpen ? "text-white" : "text-zinc-950"
            }`}>
              <span>ANY</span>
              <span className={`font-serif italic ml-0.5 transition-colors duration-500 ${
                isDarkContext || isOpen ? "text-zinc-500" : "text-zinc-500"
              }`}>NET</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 relative group ${
                  isDarkContext 
                    ? "text-zinc-300 hover:text-white" 
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  isDarkContext ? "bg-white" : "bg-zinc-950"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className={`relative group overflow-hidden px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-sm block ${
                isDarkContext 
                  ? "bg-white text-zinc-950" 
                  : "bg-zinc-950 text-white hover:bg-zinc-800"
              }`}
            >
              {/* RGB Hover Glow inside button */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-full transition-colors duration-500 ${
                isDarkContext || isOpen ? "text-white" : "text-zinc-950"
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-2xl flex flex-col justify-center items-center space-y-8"
          >
            {/* Decorative RGB Orbs for Mobile Menu */}
            <div 
              className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(255,255,255,0) 70%)' }}
            ></div>
            <div 
              className="absolute bottom-20 right-10 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.15) 0%, rgba(255,255,255,0) 70%)' }}
            ></div>

            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="text-4xl md:text-5xl font-black text-white hover:text-zinc-400 uppercase tracking-tighter transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants} className="pt-8">
              <Link
                href="/#contact"
                className="relative group px-10 py-4 bg-white text-zinc-950 font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105 overflow-hidden block"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative z-10">Get a Quote</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;