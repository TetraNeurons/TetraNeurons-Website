import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TetraNeurons - AI-Driven Software Innovation | Award-Winning Team",
  description: "Empowering businesses with AI-driven software and agentic innovation. Award-winning hackathon team building cutting-edge solutions in Web3, sustainable tech, and enterprise applications.",
  keywords: "AI, Software Development, Innovation, Hackathon, Web3, Sustainable Technology, Enterprise Solutions, Next.js, TypeScript, Tailwind CSS, Agentic AI",
  authors: [{ name: "TetraNeurons" }],
  metadataBase: new URL('https://tetraneurons.com'), // Placeholder for canonical URL
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TetraNeurons - AI-Driven Software Innovation | Award-Winning Team",
    description: "Empowering businesses with AI-driven software and agentic innovation. Award-winning hackathon team building cutting-edge solutions.",
    url: 'https://tetraneurons.com',
    siteName: 'TetraNeurons Software Company',
    images: [
      {
        url: '/og-image.jpg', // Placeholder for social media image
        width: 1200,
        height: 630,
        alt: 'TetraNeurons - AI-Driven Software Innovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TetraNeurons - AI-Driven Software Innovation | Award-Winning Team",
    description: "Empowering businesses with AI-driven software and agentic innovation. Award-winning hackathon team building cutting-edge solutions.",
    creator: '@TetraNeurons', // Placeholder for Twitter handle
    images: ['/og-image.jpg'], // Placeholder for social media image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('color-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
