'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/80 dark:bg-[#0a1628]/90 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-blue-100 dark:border-blue-900/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img src="/logo.png" alt="TetraNeurons Logo" className="relative h-10 w-auto dark:invert transition-transform duration-300 group-hover:scale-110" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hidden sm:block">
              TetraNeurons
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Projects' },
              { href: '/team', label: 'Team' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Get Started</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-xl bg-gray-100 dark:bg-blue-900/30 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-300"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-1 bg-white/80 dark:bg-[#0a1628]/90 backdrop-blur-xl rounded-2xl mb-4 border border-blue-100 dark:border-blue-900/30">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Projects' },
              { href: '/team', label: 'Team' },
              { href: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
