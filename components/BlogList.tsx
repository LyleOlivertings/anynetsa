"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the type for a single post's frontmatter
interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image: string; // Add image property
}

// Define the type for a single post, including the slug
interface Post {
  slug: string;
  frontmatter: Frontmatter;
}

// Define the props for the BlogList component
interface BlogListProps {
  posts: Post[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    },
  },
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={itemVariants}>
          <Link href={`/blog/${post.slug}`} className="group">
            <div className="bg-secondary rounded-lg border border-gray-700 h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.frontmatter.image}
                  alt={`Cover image for ${post.frontmatter.title}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-text-secondary mb-2">
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="text-2xl font-bold mb-3 ">{post.frontmatter.title}</h2>
                <p className="text-text-secondary flex-grow">{post.frontmatter.excerpt}</p>
                <span className="mt-4 font-semibold text-accent group-hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogList;
