"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/app/blog/page";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION (DARK) - Accommodates transparent header */}
      <section className="relative pt-40 pb-32 px-6 bg-zinc-950 text-white min-h-[60vh] flex items-center justify-center">
        {/* Performance Optimized Background Glows */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div 
            className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(255,255,255,0) 70%)' }}
          ></div>
          <div 
            className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.15) 0%, rgba(255,255,255,0) 70%)' }}
          ></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] invert"></div>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs tracking-widest uppercase font-semibold mb-8 backdrop-blur-md">
                News & Insights
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">THOUGHTS.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-light">
                Deep dives into web development, SEO strategies, and the future of digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. BLOG GRID (LIGHT) */}
      <section className="py-32 relative bg-zinc-50 text-zinc-950 min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div 
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all duration-300 flex flex-col h-full shadow-xl shadow-zinc-200/50 will-change-transform"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden z-10 bg-zinc-100">
                  <Image
                    unoptimized
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200 text-xs font-bold uppercase tracking-widest text-zinc-950 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-white/50">
                  <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-zinc-950 group-hover:text-zinc-600 transition-colors duration-300 tracking-tight leading-snug">
                    <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-grow font-light">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-5 border-t border-zinc-100 flex items-center text-sm font-bold text-zinc-950 uppercase tracking-widest group-hover:text-zinc-600 transition-colors">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default BlogList;