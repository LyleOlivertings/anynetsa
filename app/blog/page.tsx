import BlogList from "@/components/BlogList";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog & Insights - AnyNet SA',
    description: 'Read the latest insights on web development, SEO, and digital strategy from the AnyNet SA team.',
};

// Data Structure (Match this to your Markdown frontmatter)
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

// TODO: Replace this with your actual Markdown/CMS fetching logic
const dummyPosts: BlogPost[] = [
  {
    slug: "first-post",
    title: "The Future of Web Development in 2026",
    excerpt: "Discover the cutting-edge technologies shaping the future of high-performance web applications and digital experiences.",
    date: "March 18, 2026",
    category: "Development",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "second-post",
    title: "Mastering Core Web Vitals for SEO",
    excerpt: "A comprehensive guide to optimizing your Next.js application to achieve perfect Lighthouse scores and dominate search rankings.",
    date: "March 12, 2026",
    category: "SEO",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  }
];

export default function BlogPage() {
  return <BlogList posts={dummyPosts} />;
}