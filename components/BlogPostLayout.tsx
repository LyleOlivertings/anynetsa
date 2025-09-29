"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Define the types for the component's props
interface Frontmatter {
  title: string;
  date: string;
  author: string;
  image: string;
}

interface BlogPostLayoutProps {
  frontmatter: Frontmatter;
  content: string;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ frontmatter, content }) => {
  // Hook to track scroll progress
  const { scrollYProgress } = useScroll();
  // Spring animation for the progress bar for a smoother effect
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-[0%]"
        style={{ scaleX }}
      />

      <motion.article
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 max-w-3xl py-12 md:py-20"
      >
        {/* Post Header */}
        <motion.header variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-accent mb-4 leading-tight">
            {frontmatter.title}
          </h1>
          <div className="text-text-secondary mb-8">
            <span>By {frontmatter.author}</span> | <span>{new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}</span>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          variants={itemVariants}
          className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-12 shadow-2xl"
        >
          <Image
            src={frontmatter.image}
            alt={`Hero image for ${frontmatter.title}`}
            fill
            className="object-cover"
            priority // Load this image first
          />
        </motion.div>

        {/* Post Content */}
        <motion.div
          variants={itemVariants}
          className="prose prose-invert prose-lg max-w-none 
                     prose-h2:text-accent prose-a:text-accent prose-a:transition-colors hover:prose-a:text-accent-hover
                     prose-strong:text-text prose-blockquote:border-accent"
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </motion.div>
      </motion.article>
    </>
  );
};

export default BlogPostLayout;
