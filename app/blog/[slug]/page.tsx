import BlogPostLayout from "@/components/BlogPostLayout";
import { Metadata } from "next";

// TODO: Replace with your actual fetching logic (e.g., fetching by slug from local markdown or CMS)
const fetchPostBySlug = (slug: string) => {
  return {
    title: "The Future of Web Development in 2026",
    date: "March 18, 2026",
    category: "Development",
    readTime: "5 min read",
    content: `
      <p>This is where your compiled HTML or markdown content will go. To keep the premium aesthetic, ensure you use the <strong>prose</strong> classes provided in the layout component.</p>
      <h2>Why Speed Matters More Than Ever</h2>
      <p>In 2026, user attention spans are shorter than ever, and Google's ranking algorithms heavily penalize slow applications. Building with Next.js and React Server Components ensures your payload is minimal and your Time to Interactive is immediate.</p>
      <h3>Core Web Vitals are Non-Negotiable</h3>
      <p>If your website takes more than 2 seconds to load, you are actively losing money. We focus on optimizing Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) to guarantee a buttery smooth experience for every user.</p>
      <blockquote>"The web of the future is fast, accessible, and deeply integrated with modern CMS architectures."</blockquote>
      <p>By leveraging edge networks and static generation, we push the boundaries of what is possible in the browser.</p>
    `
  };
};

// 1. Update params type to be a Promise and await it
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = fetchPostBySlug(resolvedParams.slug);
  
  return {
    title: `${post.title} | AnyNet SA Blog`,
  };
}

// 2. Make the page async, update the params type, and await it
export default async function SinglePostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const post = fetchPostBySlug(resolvedParams.slug);

  return <BlogPostLayout post={post} />;
}