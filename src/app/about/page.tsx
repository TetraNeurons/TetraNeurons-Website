'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries through hackathons, innovation challenges, and national-level competitions.',
      icon: '💡',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Impact',
      description: 'We build solutions with social, environmental, and economic impact in areas like disaster management, agriculture, and tourism.',
      icon: '🌍',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Teamwork',
      description: 'We believe in the power of collaboration, leadership, and technical excellence.',
      icon: '🤝',
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering scalable, intelligent digital solutions that exceed expectations.',
      icon: '⭐',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const hackathonWins = [
    {
      year: '2025',
      title: 'Innovative Nation Sri Lanka (INSL)',
      achievement: '🥇 1st Place Winner',
      description: 'TetraNeurons Disaster Management Application - IEEE Sri Lanka (IEEE Main Branch)',
    },
    {
      year: '2025',
      title: 'GreenExe 3.0',
      achievement: '🥈 1st Runner-Up',
      description: 'Agrilanka project - Association of Software Engineering, NSBM Green University',
    },
    {
      year: '2025',
      title: 'Innovate with Ballerina (WSO2)',
      achievement: '🌟 Top 10 Finalist',
      description: 'Baminithiya Disaster Management Application - Cloud-native integration & APIs',
    },
    {
      year: '2025',
      title: 'IntelliHack',
      achievement: 'Participant',
      description: 'TetraNeurons Disaster Management Application - AI-assisted disaster response',
    },
    {
      year: '2025',
      title: 'SaaS Sprint',
      achievement: 'Participant',
      description: 'Agrilanka - SaaS platforms and digital marketplaces',
    },
    {
      year: '2025',
      title: 'NBQSA (National Best Quality Software Awards)',
      achievement: 'Submitted',
      description: 'Heritage Lanka - Travel Guide Platform - Software Innovation / Web Applications',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a1628] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 hero-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 animate-fade-in-down">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🚀 Innovation-Driven Team</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">TetraNeurons</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-fade-in-up">
            An innovation-driven software team focused on building <span className="text-blue-600 dark:text-blue-400 font-semibold">impact-oriented</span>, <span className="text-cyan-600 dark:text-cyan-400 font-semibold">scalable</span>, and <span className="text-green-600 dark:text-green-400 font-semibold">intelligent</span> digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="scroll-animate opacity-0 translate-y-10 p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl mb-6 shadow-lg">👁️</div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To become a leading Sri Lankan technology team that builds <span className="text-blue-600 dark:text-blue-400 font-semibold">meaningful, human-centered software solutions</span> using modern technologies.
              </p>
            </div>
            <div className="scroll-animate opacity-0 translate-y-10 p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl mb-6 shadow-lg">🎯</div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <ul className="text-lg text-gray-600 dark:text-gray-300 space-y-3">
                <li className="flex items-start gap-3"><span className="text-blue-500">✦</span> Build real-world problem-solving software through innovation</li>
                <li className="flex items-start gap-3"><span className="text-blue-500">✦</span> Compete and excel in hackathons and tech competitions</li>
                <li className="flex items-start gap-3"><span className="text-blue-500">✦</span> Promote teamwork, leadership, and technical excellence</li>
                <li className="flex items-start gap-3"><span className="text-blue-500">✦</span> Deliver solutions with <span className="text-green-600 dark:text-green-400 font-semibold">social, environmental, and economic impact</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">What Drives Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="scroll-animate opacity-0 translate-y-10 group p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Achievements */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-[#0a1628] dark:to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">🏆 Our Achievements</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hackathon <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Victories</span>
            </h2>
          </div>
          <div className="space-y-6">
            {hackathonWins.map((win, index) => (
              <div key={index} className="scroll-animate opacity-0 translate-y-10 group p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold rounded-full text-sm mb-3">
                      {win.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{win.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{win.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30">
                      {win.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-float"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 translate-y-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Our team is a collective of passionate software engineers and innovators driven by a shared vision to solve complex problems and build the future of technology.
            </p>
            <Link href="/team" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
              <span>View Our Team</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
