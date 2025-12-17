"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Share2, Clock, Calendar } from "lucide-react";
import Link from "next/link";

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

const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ frontmatter, content }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen relative">
        {/* Glowing Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-surface/50 backdrop-blur-sm">
            <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                style={{ scaleX, transformOrigin: "0%" }}
            />
        </div>

        {/* Back Button */}
        <div className="fixed top-24 left-6 z-40 hidden xl:block">
            <Link href="/blog" className="p-3 rounded-full bg-surface/50 border border-white/10 text-text-muted hover:text-white hover:bg-primary/20 transition-all backdrop-blur-md flex items-center justify-center group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>
        </div>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 max-w-4xl py-24 md:py-32"
      >
        {/* Header */}
        <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-text-muted mb-6">
                <span className="flex items-center gap-1 bg-surface/50 px-3 py-1 rounded-full border border-white/5">
                    <Calendar size={14} /> 
                    {new Date(frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1 bg-surface/50 px-3 py-1 rounded-full border border-white/5">
                    <Clock size={14} /> 
                    {calculateReadingTime(content)} min read
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                {frontmatter.title}
            </h1>
            
            <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {frontmatter.author.charAt(0)}
                </div>
                <div className="text-left">
                    <p className="text-sm font-bold text-white">{frontmatter.author}</p>
                    <p className="text-xs text-primary">Author</p>
                </div>
            </div>
        </header>

        {/* Hero Image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video w-full overflow-hidden rounded-2xl mb-16 border border-white/10 shadow-2xl shadow-black/50"
        >
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="relative">
            {/* Share Button (Mobile/Tablet) */}
            <div className="xl:hidden flex justify-end mb-6">
                <button className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors">
                    <Share2 size={16} /> Share Post
                </button>
            </div>

            <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                prose-p:text-text-muted prose-p:leading-8
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-surface/30 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                prose-code:text-accent prose-code:bg-surface/50 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                prose-img:rounded-xl prose-img:border prose-img:border-white/10
                ">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
        
        {/* Footer of Article */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            <Link href="/blog" className="text-text-muted hover:text-white transition-colors flex items-center gap-2">
                <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex gap-4">
                {/* Mock Social Shares */}
                <button className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Share2 size={18} />
                </button>
            </div>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPostLayout;