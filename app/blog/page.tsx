import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import BlogList from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Blog - AnyNet SA | Tech Insights & News',
  description: 'Explore the latest insights on web development, SEO, and digital strategy.',
};

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
  content: string; // Added content to calculate reading time
}

const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace('.md', ''),
      frontmatter: data as Frontmatter,
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const BlogPage = () => {
  const allPosts = getPosts();
  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <div className="bg-background text-text min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Insights</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
          Deep dives into code, design, and the future of the web.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-accent rounded-full"></span>
              Latest Article
            </h2>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-3xl bg-surface/30 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={featuredPost.frontmatter.image}
                      alt={featuredPost.frontmatter.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/20" />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(featuredPost.frontmatter.date).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {calculateReadingTime(featuredPost.content)} min read
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                        {featuredPost.frontmatter.title}
                    </h3>
                    <p className="text-text-muted text-lg mb-8 leading-relaxed line-clamp-3">
                        {featuredPost.frontmatter.excerpt}
                    </p>
                    
                    <div className="flex items-center text-accent font-bold group-hover:translate-x-2 transition-transform duration-300">
                      Read Article <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts with Interactive List */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 mt-8">All Articles</h2>
            <BlogList posts={otherPosts} />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;