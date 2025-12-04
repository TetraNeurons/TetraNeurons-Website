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
  title: "TetraNeurons - AI-Driven Software Innovation",
  description: "Empowering businesses with AI-driven software and agentic innovation. Award-winning hackathon team building cutting-edge solutions.",
  keywords: "AI, Software Development, Innovation, Hackathon, Web3, Sustainable Technology",
  authors: [{ name: "TetraNeurons" }],
  openGraph: {
    title: "TetraNeurons - AI-Driven Software Innovation",
    description: "Empowering businesses with AI-driven software and agentic innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
