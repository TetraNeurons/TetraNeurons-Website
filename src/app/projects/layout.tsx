import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore TetraNeurons award-winning projects including Disaster Management App (IntelliHack 2nd Runner-Up), Agrilanka (INSL 1st Place), and Heritage Lanka tourism platform.',
  keywords: ['TetraNeurons Projects', 'Disaster Management App', 'Agrilanka', 'Heritage Lanka', 'IntelliHack', 'INSL', 'Award-Winning Software'],
  openGraph: {
    title: 'Projects - TetraNeurons Portfolio',
    description: 'Discover our award-winning projects: AI-powered disaster management, sustainable agriculture platform, and heritage tourism solutions.',
    url: 'https://www.tetraneurons.online/projects',
    type: 'website',
  },
  twitter: {
    title: 'TetraNeurons Projects',
    description: 'Award-winning projects in disaster management, agriculture, and heritage preservation.',
  },
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
