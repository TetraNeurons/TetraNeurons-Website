'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Professional SVG Icons
const BookOpenIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const UsersGroupIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

// Team member avatar icons
const LeaderIcon = () => (
  <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const DeveloperIcon = () => (
  <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export default function Team() {
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

  const teamMembers = [
    {
      id: 1,
      name: 'SAMSUDEEN ASHAD',
      role: 'Project Manager | Frontend Developer',
      expertise: ['Project Management', 'Frontend Development', 'React', 'Next.js'],
      bio: 'Leading TetraNeurons with a vision to build meaningful, human-centered software solutions.',
      avatarType: 'developer',
      email: 'samsudeenashad@gmail.com',
      phone: '0705390110',
      slug: 'samsudeen-ashad',
    },
    {
      id: 2,
      name: 'ISARA MADUNIKA',
      role: 'AI / ML Developer',
      expertise: ['Python', 'TensorFlow', 'Machine Learning', 'LLMs'],
      bio: 'Focused on developing intelligent solutions using cutting-edge AI technologies.',
      avatarType: 'developer',
      email: 'isharamadunika9@gmail.com',
      phone: '0770264992',
      slug: 'isara-madunika',
    },
    {
      id: 3,
      name: 'THIRAMITHU KULASOORIYA',
      role: 'Fullstack Developer',
      expertise: ['Next.js', 'React', 'Node.js', 'TypeScript'],
      bio: 'Passionate about building scalable web applications with modern technologies.',
      avatarType: 'developer',
      email: 'kulasoooriyaa@gmail.com',
      phone: '0785866652',
      slug: 'thiramithu-kulasooriya',
    },
    {
      id: 4,
      name: 'KAVINDU DESHAPRIYA',
      role: 'Backend Developer',
      expertise: ['Ballerina', 'Node.js', 'PostgreSQL', 'REST API'],
      bio: 'Ensuring scalable, secure, and reliable infrastructure for all projects.',
      avatarType: 'developer',
      email: 'ksdeshappriya.official@gmail.com',
      phone: '0710559795',
      slug: 'kavindu-deshapriya',
    },
    {
      id: 5,
      name: 'SADESHA JAYAWEERA',
      role: 'Business Analyst | Developer',
      expertise: ['Agile', 'Scrum', 'Business Analysis', 'Full Stack'],
      bio: 'Coordinating teams and ensuring successful project delivery.',
      avatarType: 'developer',
      email: 'sadeesha.jayaweera@gmail.com',
      phone: '0774928297',
      slug: 'sadesha-jayaweera',
    },
    {
      id: 6,
      name: 'SAJANI SAUNDARAJAN',
      role: 'Quality Assurance (QA)',
      expertise: ['Quality Assurance', 'Testing', 'Test Automation', 'Documentation'],
      bio: 'Ensuring the highest quality standards for all TetraNeurons projects.',
      avatarType: 'developer',
      email: 'sajani.saundarajan@gmail.com',
      phone: '',
      slug: 'sajani-saundarajan',
    },
  ];

  const values: { title: string; description: string; icon: ReactNode; color: string }[] = [
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage continuous learning and skill development.',
      icon: <BookOpenIcon />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Collaboration',
      description: 'We believe in open communication and collaborative problem-solving.',
      icon: <UsersGroupIcon />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and are not afraid to experiment with new ideas.',
      icon: <LightBulbIcon />,
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Accountability',
      description: 'We take ownership of our work and deliver results with integrity.',
      icon: <CheckBadgeIcon />,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a1628] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 hero-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 animate-fade-in-down">
            <UserGroupIcon />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Our Amazing Team</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="text-gray-900 dark:text-white">Meet </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Our Team</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            A diverse group of talented professionals united by a passion for <span className="text-blue-600 dark:text-blue-400 font-semibold">innovation</span> and <span className="text-cyan-600 dark:text-cyan-400 font-semibold">excellence</span>.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} className={`scroll-animate opacity-0 translate-y-10 group bg-white dark:bg-[#0f172a] rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-900/30 hover:border-transparent transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20`}>
                {/* Avatar */}
                <div className={`h-40 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-125 transition-transform duration-500 border border-white/30">
                    {member.avatarType === 'leader' ? <LeaderIcon /> : <DeveloperIcon />}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{member.bio}</p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-gray-700 dark:text-gray-300">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/team/${member.slug}`} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group-hover:-translate-y-1">
                    <span>View Profile</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Our Team <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Culture</span>
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

      {/* Team Achievements */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-[#0a1628] dark:to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">🏆 Our Success</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Team <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-animate opacity-0 translate-y-10 p-8 rounded-2xl bg-white/50 dark:bg-[#0f172a]/50 backdrop-blur-xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">6+</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Competitions</h3>
              <p className="text-gray-600 dark:text-gray-400">Awards and recognitions in prestigious hackathons and tech competitions.</p>
            </div>

            <div className="scroll-animate opacity-0 translate-y-10 p-8 rounded-2xl bg-white/50 dark:bg-[#0f172a]/50 backdrop-blur-xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">4+</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Major Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">Impact-driven projects in disaster management, agriculture, and tourism.</p>
            </div>

            <div className="scroll-animate opacity-0 translate-y-10 p-8 rounded-2xl bg-white/50 dark:bg-[#0f172a]/50 backdrop-blur-xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">100%</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Dedication</h3>
              <p className="text-gray-600 dark:text-gray-400">Committed to excellence in every project we undertake.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-float"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate opacity-0 translate-y-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about innovation and technology.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
              <span>Get In Touch</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


