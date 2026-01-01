import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented team behind TetraNeurons - skilled engineers, developers, and innovators building cutting-edge software solutions in Sri Lanka.',
  keywords: ['TetraNeurons Team', 'Software Engineers', 'AI Developers', 'Sri Lanka Developers', 'Tech Team'],
  openGraph: {
    title: 'Meet Our Team - TetraNeurons',
    description: 'Meet the talented engineers and developers behind TetraNeurons award-winning projects.',
    url: 'https://www.tetraneurons.online/team',
    type: 'website',
  },
  twitter: {
    title: 'TetraNeurons Team',
    description: 'Meet the talented team behind our award-winning software solutions.',
  },
  alternates: {
    canonical: '/team',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
