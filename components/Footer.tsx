"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050914] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/logo5.png" 
                  alt="AnyNet SA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-2xl font-bold tracking-tighter">
                <span className="text-primary">ANY</span><span className="text-white">NET</span>
              </div>
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
          {/* Official Registered Name */}
          <p className="text-text-muted text-sm mb-4 md:mb-0">
            &copy; {currentYear} ANYNET SA (Pty) Ltd. All rights reserved.
          </p>
          

        </div>
      </div>
    </footer>
  );
};

export default Footer;