"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050914] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              <span className="text-primary">ANY</span><span className="text-white">NET</span>
            </Link>
            <p className="text-text-muted max-w-sm leading-relaxed">
              Empowering businesses with modern, scalable, and secure web solutions. 
              Built for the future of the web.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-text-muted">
              <li><Link href="#" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">E-Commerce</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">SEO Optimization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-text-muted">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* OFFICIAL REGISTRATION NAME USED HERE ONLY */}
          <p className="text-text-muted text-sm mb-4 md:mb-0">
            &copy; {currentYear} ANYNET SA (Pty) Ltd. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-text-muted hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-text-muted hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-text-muted hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;