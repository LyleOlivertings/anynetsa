"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "@/app/our-work/page";

const PortfolioCard = ({ title, description, liveUrl, features, imageUrl }: PortfolioItem) => {
  const previewImage = imageUrl || `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(liveUrl)}?w=800`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-colors duration-300 flex flex-col h-full shadow-xl shadow-zinc-200/50 will-change-transform"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-60 overflow-hidden z-10 bg-zinc-100 flex items-center justify-center">
        <Image
          unoptimized
          src={previewImage}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
        />
        {/* Soft dark overlay so the white button pops, fading out on hover */}
        <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/5 transition-colors duration-300" />
        
        {/* Live Site Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20 hover:bg-zinc-800"
            >
                Visit Website <ExternalLink size={16} strokeWidth={2.5} />
            </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-white/50">
        <h3 className="text-2xl font-bold mb-3 text-zinc-950 transition-colors duration-300 tracking-tight">
          {title}
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-grow font-light">
          {description}
        </p>
        
        {/* Features / Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-zinc-100">
            {features?.map((feature, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 shadow-sm">
                    {feature.includes("CMS") ? (
                      <Database size={12} className="text-zinc-400" />
                    ) : (
                      <Layout size={12} className="text-zinc-400" />
                    )}
                    {feature}
                </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;