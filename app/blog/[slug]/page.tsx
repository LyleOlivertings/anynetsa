import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { notFound } from 'next/navigation'; // Import notFound
import BlogPostLayout from '@/components/BlogPostLayout';

// Define the Frontmatter type for type-safety
interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image: string;
}

// This function is now more robust
const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), 'posts');
  const file = path.join(folder, `${slug}.md`);

  try {
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    // If the file doesn't exist or there's a read error, return null
    return null;
  }
};

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostContent(params.slug);

  // If post doesn't exist, don't generate metadata
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.data.title} - AnyNet SA Blog`,
    description: post.data.excerpt,
  };
}

// This function generates static pages for each blog post at build time
export const generateStaticParams = async () => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);
    // Ensure we only process markdown files
    const mdFilenames = filenames.filter(file => file.endsWith('.md'));

    return mdFilenames.map(filename => ({
        slug: filename.replace('.md', ''),
    }));
};


const PostPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostContent(slug);

  // If the post doesn't exist, trigger the 404 page
  if (!post) {
    notFound();
  }

  const { data, content } = post;

  return (
    <div className="bg-background">
      <BlogPostLayout frontmatter={data as Frontmatter} content={content} />
    </div>
  );
};

export default PostPage;