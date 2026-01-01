'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { AlertIcon, GlobeIcon, SparklesIcon, MapPinIcon, TrophyIcon, FireIcon, StarIcon, LeafIcon } from '@/components/Icons';

export default function Home() {
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

  const features: { title: string; description: string; icon: ReactNode; color: string }[] = [
    {
      title: 'Disaster Management',
      description: 'Building comprehensive disaster response and emergency coordination systems.',
      icon: <AlertIcon />,
      color: 'from-red-500 to-rose-600',
    },
    {
      title: 'Agricultural Solutions',
      description: 'Connecting farmers, buyers, and service providers through innovative agri-tech platforms.',
      icon: <LeafIcon />,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Award-Winning Team',
      description: 'Hackathon champions with proven expertise in building scalable solutions.',
      icon: <SparklesIcon />,
      color: 'from-amber-500 to-yellow-500',
    },
    {
      title: 'Tourism & Heritage',
      description: 'Creating digital solutions for cultural preservation and tourism.',
      icon: <MapPinIcon />,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const projects: { title: string; description: string; category: string; icon: ReactNode; gradient: string }[] = [
    {
      title: 'TetraNeurons Disaster Management',
      description: 'A comprehensive disaster management platform. 2nd Runner-Up at IntelliHack.',
      category: '2nd Runner-Up - IntelliHack',
      icon: <TrophyIcon />,
      gradient: 'from-red-500 to-rose-600',
    },
    {
      title: 'Agrilanka (Next.js)',
      description: 'An agri-tech marketplace. 1st Place Winner at INSL (IEEE Sri Lanka).',
      category: '1st Place - INSL',
      icon: <FireIcon />,
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Baminithiya',
      description: 'Community-focused disaster preparedness system. NBQSA Submission & 1st Runner-Up at GreenExe 3.0.',
      category: '1st Runner-Up - GreenExe 3.0',
      icon: <StarIcon />,
      gradient: 'from-blue-500 to-indigo-600',
    },
  ];

  const achievements = [
    { number: '5+', label: 'Major Projects' },
    { number: '10+', label: 'Competitions' },
    { number: '5+', label: 'Winnings' },
    { number: '1+', label: 'Awards' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a1628] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 hero-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-200/20 dark:border-blue-500/10 rounded-full animate-rotate opacity-50"></div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Innovation-Driven Software Team</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
              <span className="text-gray-900 dark:text-white">Building </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Impact-Oriented</span>
              <br />
              <span className="text-gray-900 dark:text-white">Digital Solutions</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up">
              TetraNeurons builds scalable digital solutions in{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">disaster management</span>,{' '}
              <span className="text-green-600 dark:text-green-400 font-semibold">agriculture</span>,{' '}
              <span className="text-amber-600 dark:text-amber-400 font-semibold">tourism</span>, and{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">SaaS platforms</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link href="/projects" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>Explore Our Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white dark:bg-[#0f172a] border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:-translate-y-1">
                Get in Touch
              </Link>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
              <div className="w-8 h-12 rounded-full border-2 border-blue-300 dark:border-blue-700 flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="scroll-animate opacity-0 translate-y-10 text-center p-8 rounded-2xl bg-white/50 dark:bg-[#0f172a]/50 backdrop-blur-xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">{achievement.number}</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">TetraNeurons</span>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We deliver solutions with social, environmental, and economic impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="scroll-animate opacity-0 translate-y-10 group p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg backdrop-blur-sm border border-white/20`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-[#0a1628] dark:to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Showcasing our award-winning projects and innovations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="scroll-animate opacity-0 translate-y-10 group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900/30 hover:border-transparent transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-125 transition-transform duration-500 border border-white/30">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                  <Link href="/projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate opacity-0 translate-y-10">
            <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <span>View All Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-float"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 translate-y-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Let&apos;s collaborate and create innovative solutions that make a real impact.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/team" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">Meet Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
