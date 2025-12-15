'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="TetraNeurons Logo" className="h-8 w-auto dark:invert" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-500 transition-colors">
              Projects
            </Link>
            <Link href="/team" className="hover:text-blue-500 transition-colors">
              Team
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
              About
            </Link>
            <Link href="/projects" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
              Projects
            </Link>
            <Link href="/team" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
              Team
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
