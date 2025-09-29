import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostLayout from '@/components/BlogPostLayout';


interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image: string;
}

const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), 'posts');
  const file = path.join(folder, `${slug}.md`);

  try {
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    return null;
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostContent(resolvedParams.slug);

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

// This function is now synchronous (removed 'async')
export function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);
    const mdFilenames = filenames.filter(file => file.endsWith('.md'));

    return mdFilenames.map(filename => ({
        slug: filename.replace('.md', ''),
    }));
};

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = getPostContent(slug);

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
