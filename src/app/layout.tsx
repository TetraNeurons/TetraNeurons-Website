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
  title: {
    default: "TetraNeurons - AI-Driven Software Innovation | Award-Winning Team",
    template: "%s | TetraNeurons",
  },
  description: "TetraNeurons is a team of passionate developers and innovators building cutting-edge software solutions. Award-winning hackathon champions specializing in AI, disaster management, sustainable agriculture, and heritage preservation technology.",
  keywords: [
    "TetraNeurons",
    "AI Software Development",
    "Machine Learning Solutions",
    "Sri Lanka Tech Startup",
    "Hackathon Champions",
    "Disaster Management App",
    "Agrilanka",
    "Heritage Lanka",
    "Web Development",
    "Next.js Development",
    "React Development",
    "TypeScript",
    "Software Innovation",
    "Agentic AI",
    "Enterprise Solutions",
    "IntelliHack Winners",
    "INSL Winners",
  ],
  authors: [{ name: "TetraNeurons", url: "https://www.tetraneurons.online" }],
  creator: "TetraNeurons",
  publisher: "TetraNeurons",
  metadataBase: new URL('https://www.tetraneurons.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TetraNeurons - AI-Driven Software Innovation | Award-Winning Team",
    description: "TetraNeurons is a team of passionate developers and innovators building cutting-edge software solutions in AI, disaster management, agriculture, and heritage preservation.",
    url: 'https://www.tetraneurons.online',
    siteName: 'TetraNeurons',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TetraNeurons - AI-Driven Software Innovation',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TetraNeurons - AI-Driven Software Innovation",
    description: "Award-winning team building cutting-edge AI solutions for disaster management, agriculture, and heritage preservation.",
    creator: '@TetraNeurons',
    site: '@TetraNeurons',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TetraNeurons",
    "description": "TetraNeurons is a team of passionate developers and innovators building cutting-edge software solutions in AI, disaster management, agriculture, and heritage preservation.",
    "url": "https://www.tetraneurons.online",
    "logo": "https://www.tetraneurons.online/logo.png",
    "sameAs": [
      "https://github.com/TetraNeurons",
      "https://linkedin.com/company/tetraneurons"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "tetraneurons@gmail.com",
      "contactType": "customer service"
    },
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Samsudeen Ashad"
      }
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Disaster Management Systems",
      "Agricultural Technology",
      "Heritage Preservation"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TetraNeurons",
    "url": "https://www.tetraneurons.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.tetraneurons.online/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon for Google Search and browsers */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('color-theme');
                  // Default to light mode for first-time visitors (no stored theme)
                  var isDark = theme === 'dark';
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0a1628] text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
