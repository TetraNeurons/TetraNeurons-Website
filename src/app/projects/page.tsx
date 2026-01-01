'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { AlertIcon, GlobeIcon, MapPinIcon, LeafIcon, TrophyIcon, FireIcon, StarIcon } from '@/components/Icons';

// Professional project icons
const DisasterIcon = () => (
  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285zm0 13.036h.008v.008H12v-.008z" />
  </svg>
);

const TourismIcon = () => (
  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
);

const AgriIcon = () => (
  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

export default function Projects() {
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

  const projects: { id: number; title: string; category: string; description: string; features: string[]; technologies: string[]; icon: ReactNode; gradient: string; status: string; achievement: string }[] = [
    {
      id: 1,
      title: 'TetraNeurons Disaster Management Application',
      category: 'Disaster Management',
      description: 'A comprehensive disaster management platform designed to support early warnings, emergency response, and post-disaster coordination. 2nd Runner-Up at IntelliHack organized by IEEE Computational Intelligence Society Sri Lanka Section.',
      features: [
        'Real-time disaster alerts',
        'Location-based notifications',
        'Emergency contact access',
        'Shelter & resource mapping',
        'Community reporting system',
      ],
      technologies: ['React', 'Flutter', 'Node.js', 'Express', 'Firebase', 'MongoDB', 'Google Maps API'],
      icon: <DisasterIcon />,
      gradient: 'from-red-500 via-orange-500 to-amber-500',
      status: 'Active',
      achievement: '2nd Runner-Up - IntelliHack',
    },
    {
      id: 2,
      title: 'Agrilanka (Ballerina)',
      category: 'Agri-Tech',
      description: 'An agri-tech marketplace connecting farmers, buyers, and service providers. Built with Ballerina for cloud-native integration. Recognized at Innovate with Ballerina competition organized by WSO2.',
      features: [
        'Farmer marketplace',
        'Crop advisory & weather alerts',
        'Supply chain visibility',
        'Cloud-native APIs',
        'Multi-language Interface',
      ],
      technologies: ['Ballerina', 'React', 'Node.js', 'REST APIs', 'Cloud-native', 'PostgreSQL'],
      icon: <AgriIcon />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      status: 'Active',
      achievement: 'WSO2 - Innovate with Ballerina',
    },
    {
      id: 3,
      title: 'Agrilanka (Next.js)',
      category: 'Agri-Tech / SaaS',
      description: 'An enhanced agri-tech marketplace platform built with Next.js. 1st Place Winner at Innovative Nation Sri Lanka (INSL) organized by IEEE Sri Lanka.',
      features: [
        'Advanced farmer marketplace',
        'Real-time crop advisory',
        'Supply chain management',
        'Community discussion forums',
        'Multi-language Interface (Sinhala, Tamil, English)',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Appwrite', 'Tailwind CSS'],
      icon: <AgriIcon />,
      gradient: 'from-amber-500 via-yellow-500 to-lime-500',
      status: 'Active',
      achievement: '1st Place - INSL',
    },
    {
      id: 4,
      title: 'Heritage Lanka – Travel Guide Platform',
      category: 'Tourism / SaaS',
      description: 'A digital travel guide that highlights Sri Lanka\'s cultural heritage, historical landmarks, and tourism destinations. Participant at SaaS Sprint competition.',
      features: [
        'Interactive destination map',
        'Cultural & historical content',
        'Suggested travel itineraries',
        'Local recommendations',
        'Digital storytelling',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Google Maps API'],
      icon: <TourismIcon />,
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      status: 'Active',
      achievement: 'SaaS Sprint Participant',
    },
    {
      id: 5,
      title: 'Baminithiya Disaster Management Application',
      category: 'Disaster Management',
      description: 'A community-focused disaster preparedness and response system that empowers citizens and volunteers. Submitted to NBQSA (National Best Quality Software Awards) and achieved 1st Runner-Up at GreenExe 3.0 organized by NSBM Green University.',
      features: [
        'Disaster preparedness guides',
        'Incident reporting',
        'Volunteer coordination',
        'AI-assisted help chatbot',
        'Community resilience tools',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'REST APIs', 'PostgreSQL'],
      icon: <DisasterIcon />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      status: 'Active',
      achievement: 'NBQSA & 1st Runner-Up GreenExe 3.0',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a1628] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 hero-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 animate-fade-in-down">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">🚀 Award-Winning Solutions</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="text-gray-900 dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Showcasing our award-winning projects in <span className="text-blue-600 dark:text-blue-400 font-semibold">disaster management</span>, <span className="text-green-600 dark:text-green-400 font-semibold">agriculture</span>, and <span className="text-amber-600 dark:text-amber-400 font-semibold">tourism</span>.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="scroll-animate opacity-0 translate-y-10 group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900/30 hover:border-transparent transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-125 transition-transform duration-500 border border-white/30">
                    {project.icon}
                  </div>
                  {project.achievement && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 dark:bg-[#0f172a]/90 text-gray-900 dark:text-white text-sm font-bold rounded-xl shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {project.achievement}
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                    <span className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full ${
                      project.status === 'Active'
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-gray-700 dark:text-gray-300">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-gray-700 dark:text-gray-300">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            ))}
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Interested in Working Together?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for exciting new projects and collaborations. Let&apos;s build something amazing together.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
              <span>Start a Project</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
