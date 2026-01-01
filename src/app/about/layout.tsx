import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TetraNeurons - a team of passionate developers and innovators from Sri Lanka building award-winning software solutions in AI, disaster management, and sustainable agriculture.',
  keywords: ['About TetraNeurons', 'Sri Lanka Tech Team', 'Software Developers', 'AI Innovation Team', 'Hackathon Winners'],
  openGraph: {
    title: 'About TetraNeurons - Our Story & Mission',
    description: 'Meet the award-winning team behind TetraNeurons. Passionate developers building innovative solutions for disaster management, agriculture, and heritage preservation.',
    url: 'https://www.tetraneurons.online/about',
    type: 'website',
  },
  twitter: {
    title: 'About TetraNeurons',
    description: 'Meet the award-winning team behind TetraNeurons - passionate developers building innovative solutions.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
