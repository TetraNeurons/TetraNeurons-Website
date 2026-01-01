import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TetraNeurons. Contact us for software development, AI solutions, or collaboration opportunities. Based in Sri Lanka, serving globally.',
  keywords: ['Contact TetraNeurons', 'Hire Developers', 'Software Development Services', 'AI Solutions Contact', 'Sri Lanka Tech Company'],
  openGraph: {
    title: 'Contact TetraNeurons',
    description: 'Get in touch with our team for software development, AI solutions, or collaboration opportunities.',
    url: 'https://www.tetraneurons.online/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact TetraNeurons',
    description: 'Get in touch for software development and AI solutions.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
