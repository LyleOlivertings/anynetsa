"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface BlogPostLayoutProps {
  post: {
    title: string;
    date: string;
    category: string;
    readTime: string;
    content: string;
  };
}

const BlogPostLayout = ({ post }: BlogPostLayoutProps) => {
  return (
    <div className="font-sans antialiased bg-zinc-50 min-h-screen pb-32">
      
      {/* 1. ARTICLE HERO (DARK) */}
      <section className="relative pt-40 pb-48 px-6 bg-zinc-950 text-white flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, rgba(255,255,255,0) 70%)' }}></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] invert"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 backdrop-blur-md">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-4">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. ELEVATED READER UI CARD (LIGHT) */}
      <section className="px-6 relative z-20 -mt-24 md:-mt-32">
        <div className="container mx-auto max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-zinc-200/60 border border-zinc-100 p-8 md:p-16 lg:p-20 relative overflow-hidden"
          >
            {/* Very subtle noise/texture inside the reading card for a "paper" feel */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: "url('/grid.svg')" }}></div>

            <div className="mb-12 relative z-10">
              <Link href="/blog" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors group px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 hover:border-zinc-200">
                <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Articles
              </Link>
            </div>

            {/* Custom Raw HTML Styling 
              This replaces the need for the typography plugin and guarantees perfect readability 
            */}
            <article 
              className="relative z-10 max-w-none text-lg md:text-xl text-zinc-800 leading-relaxed font-light
                         [&>p]:mb-8 
                         [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-black [&>h2]:text-zinc-950 [&>h2]:mb-6 [&>h2]:mt-16 [&>h2]:tracking-tight
                         [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-bold [&>h3]:text-zinc-950 [&>h3]:mb-4 [&>h3]:mt-12 [&>h3]:tracking-tight
                         [&>strong]:font-bold [&>strong]:text-zinc-950
                         [&>a]:text-cyan-600 [&>a]:font-semibold [&>a]:hover:underline
                         [&>blockquote]:border-l-4 [&>blockquote]:border-cyan-500 [&>blockquote]:bg-zinc-50 [&>blockquote]:py-5 [&>blockquote]:px-8 [&>blockquote]:rounded-r-2xl [&>blockquote]:my-10 [&>blockquote]:text-zinc-950 [&>blockquote]:font-medium [&>blockquote]:text-xl [&>blockquote]:leading-snug
                         [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3
                         [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3
                         [&_img]:rounded-3xl [&_img]:shadow-xl [&_img]:my-12 [&_img]:w-full"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Bottom Divider & Share CTA inside the card */}
            <div className="mt-20 pt-12 border-t border-zinc-100 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-zinc-950 mb-4">Ready to build something amazing?</h3>
              <p className="text-zinc-500 font-light mb-8 max-w-md">Take these insights and apply them to your own high-performance digital presence.</p>
              
              <Link href="/#contact" className="inline-block px-8 py-4 bg-zinc-950 text-white font-bold text-sm uppercase tracking-widest rounded-full transition-all hover:scale-105 hover:bg-zinc-800 shadow-xl shadow-zinc-950/20">
                Start Your Project
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
      
    </div>
  );
};

export default BlogPostLayout;