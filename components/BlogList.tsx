"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, Clock, ArrowUpRight } from 'lucide-react';

interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image: string;
}

interface Post {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

interface BlogListProps {
  posts: Post[];
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.frontmatter.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-10 relative max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-text-muted" />
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl leading-5 bg-surface/50 text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out backdrop-blur-sm"
        />
      </div>

      {/* Blog Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                <motion.div
                    layout
                    key={post.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                >
                    <Link href={`/blog/${post.slug}`} className="group h-full block">
                    <div className="h-full bg-surface/30 rounded-2xl border border-white/5 overflow-hidden backdrop-blur-sm flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                        {/* Image Container */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={post.frontmatter.image}
                                alt={post.frontmatter.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            
                            {/* Floating Category Badge (Optional/Mock) */}
                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                Article
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-center text-xs text-text-muted mb-3">
                                <span>{new Date(post.frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                <span className="flex items-center gap-1"><Clock size={12}/> {calculateReadingTime(post.content)} min</span>
                            </div>
                            
                            <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {post.frontmatter.title}
                            </h2>
                            
                            <p className="text-text-muted text-sm line-clamp-3 mb-6 flex-grow">
                                {post.frontmatter.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <span className="text-sm font-medium text-text">Read More</span>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </motion.div>
                ))
            ) : (
                <div className="col-span-full text-center py-20 text-text-muted">
                    No posts found matching your search.
                </div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BlogList;