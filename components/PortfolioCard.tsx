"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PortfolioCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
};

import { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  },
};

const PortfolioCard = ({ title, description, imageUrl, liveUrl }: PortfolioCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-secondary rounded-lg overflow-hidden border border-gray-700 group transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="relative overflow-hidden h-56">
        <Image
          unoptimized
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-semibold text-accent hover:text-white transition-colors"
        >
          Visit Site
          <ExternalLink className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
