"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-50 border-t border-zinc-200 pt-20 pb-10 overflow-hidden font-sans">
      {/* Subtle Background Glows (Performance Optimized with Radial Gradients) */}
      <div 
        className="absolute top-0 left-1/4 w-[400px] h-[400px] pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(255,255,255,0) 70%)' }}
      ></div>
      <div 
        className="absolute bottom-[-10%] right-1/4 w-[400px] h-[400px] pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.08) 0%, rgba(255,255,255,0) 70%)' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="relative w-9 h-9 md:w-11 md:h-11 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <Image 
                  src="/logo5.png" 
                  alt="AnyNet SA Logo"
                  fill
                  className="object-contain filter brightness-0"
                />
              </div>
              <div className="text-2xl font-black tracking-tighter text-zinc-950 flex items-center">
                <span>ANY</span>
                <span className="text-zinc-500 font-serif italic ml-0.5">NET</span>
              </div>
            </Link>
            
            <p className="text-zinc-600 max-w-sm leading-relaxed font-light mb-8">
              Empowering businesses with modern, scalable, and secure web solutions. 
              Future-proof web development built for scale.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-5">
              <a href="#" className="text-zinc-400 hover:text-zinc-950 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={22} strokeWidth={1.5} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-950 transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={22} strokeWidth={1.5} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-950 transition-colors duration-300 hover:scale-110 transform">
                <Github size={22} strokeWidth={1.5} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-zinc-950 font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-600">
              <li>
                <Link href="#" className="hover:text-zinc-950 transition-colors duration-300 relative group inline-block">
                  Web Development
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-950 transition-colors duration-300 relative group inline-block">
                  E-Commerce
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-950 transition-colors duration-300 relative group inline-block">
                  SEO Optimization
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-950 font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-600">
              <li>
                <Link href="#" className="hover:text-zinc-950 transition-colors duration-300 relative group inline-block">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-zinc-950 transition-colors duration-300 relative group inline-block">
                  Our Work
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-950 transition-colors duration-300 relative group inline-block">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 font-medium tracking-wide">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} ANYNET SA (Pty) Ltd. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-zinc-950 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-950 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;