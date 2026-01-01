import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest articles from TetraNeurons on AI, machine learning, web development, TypeScript, cloud architecture, and software engineering best practices.',
  keywords: ['TetraNeurons Blog', 'Tech Blog', 'AI Articles', 'Web Development Blog', 'Software Engineering', 'TypeScript', 'Next.js'],
  openGraph: {
    title: 'TetraNeurons Blog - Tech Insights & Tutorials',
    description: 'Latest articles on AI, machine learning, web development, and software engineering from the TetraNeurons team.',
    url: 'https://www.tetraneurons.online/blog',
    type: 'website',
  },
  twitter: {
    title: 'TetraNeurons Blog',
    description: 'Tech insights and tutorials from the TetraNeurons team.',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
