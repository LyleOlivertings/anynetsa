"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "@/app/our-work/page";

const PortfolioCard = ({ title, description, liveUrl, features }: PortfolioItem) => {
  // Use a placeholder service for visual consistency if no specific image is provided.
  // In production, replace 'imageUrl' in your data with actual paths to screenshots in /public
  const placeholderImage = `https://placehold.co/600x400/1E293B/3B82F6?text=${encodeURIComponent(title)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-surface/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <Image
          unoptimized
          src={placeholderImage}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
        
        {/* Live Site Button (appears on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white"
            >
                Visit Website <ExternalLink size={16} />
            </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        
        {/* Features / Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            {features?.map((feature, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-text-muted">
                    {feature === "CMS Integrated" ? <Database size={10} className="text-accent" /> : <Layout size={10} />}
                    {feature}
                </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;