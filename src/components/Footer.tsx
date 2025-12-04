'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/tetraneurons/', icon: 'in' },
    { name: 'Facebook', url: 'https://www.facebook.com/p/TetraNeurons-61579161331157/', icon: 'f' },
    { name: 'Instagram', url: 'https://www.instagram.com/tetra_neurons/', icon: 'ig' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@tetra.neurons', icon: 'tt' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCNgwCDYf-UsstDY2ffe9BWg', icon: 'yt' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TetraNeurons
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering businesses with AI-driven software and agentic innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors flex items-center justify-center"
                  title={link.name}
                >
                  <span className="text-sm font-bold">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} TetraNeurons. All rights reserved.</p>
            <p>Built with Next.js, React, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
