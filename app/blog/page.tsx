import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BlogList from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Blog - AnyNet SA',
  description: 'Read our latest articles on web development, design, and SEO.',
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
}

const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace('.md', ''),
      frontmatter: data as Frontmatter,
    };
  });

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};

const BlogPage = () => {
  const allPosts = getPosts();
  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <div className="bg-background text-text min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-accent mb-4">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Insights on web development, design trends, and performance optimization.
          </p>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Latest Post</h2>
          <Link href={`/blog/${featuredPost.slug}`} className="group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-secondary p-8 rounded-lg border border-gray-700 items-center transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10">
              <div className="relative h-80 w-full overflow-hidden rounded-md">
                <Image
                  src={featuredPost.frontmatter.image}
                  alt={`Cover image for ${featuredPost.frontmatter.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-text-secondary mb-2">
                  {new Date(featuredPost.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </p>
                <h3 className="text-4xl font-bold mb-4">{featuredPost.frontmatter.title}</h3>
                <p className="text-text-secondary text-lg mb-6">{featuredPost.frontmatter.excerpt}</p>
                <span className="mt-4 font-semibold text-accent text-lg group-hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Other Posts */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">More Posts</h2>
            {/* Pass the other posts to the animated client component */}
            <BlogList posts={otherPosts} />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;