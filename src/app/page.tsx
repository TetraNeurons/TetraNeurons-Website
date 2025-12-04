import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'AI-Driven Solutions',
      description: 'Leveraging cutting-edge AI and machine learning to solve complex business challenges.',
      icon: '🤖',
    },
    {
      title: 'Agentic Innovation',
      description: 'Building autonomous agents that streamline workflows and increase productivity.',
      icon: '⚙️',
    },
    {
      title: 'Award-Winning Team',
      description: 'Hackathon champions with proven expertise in building scalable solutions.',
      icon: '🏆',
    },
    {
      title: 'Web3 & Sustainability',
      description: 'Creating sustainable and decentralized solutions for the future.',
      icon: '🌍',
    },
  ];

  const projects = [
    {
      title: 'Agriලංකා',
      description: 'A comprehensive digital marketplace platform designed specifically for the Sri Lankan agriculture sector, connecting farmers with buyers and resources.',
      category: 'Marketplace',
      image: '🌾',
    },
    {
      title: 'Sustainable Healthcare Web3 Ecosystem',
      description: 'A Web3.0 ecosystem for sustainable healthcare built during a 72-hour hackathon with participation from 16 states.',
      category: 'Hackathon Winner',
      image: '🏥',
    },
    {
      title: 'Ballerina Competition Platform',
      description: 'Reached Final 15 in the Ballerina Competition 2025, organized by IEEE Student Branch, showcasing our innovative technical approach.',
      category: 'Competition',
      image: '💃',
    },
  ];

  const achievements = [
    { number: '3+', label: 'Major Projects' },
    { number: '5+', label: 'Hackathon Wins' },
    { number: '72h', label: 'Fastest Build' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Empowering Businesses with AI-Driven Innovation
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              TetraNeurons is a team of passionate developers and innovators building cutting-edge software solutions powered by artificial intelligence and agentic technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                Explore Our Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose TetraNeurons?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Showcasing our award-winning projects and innovations that have made an impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link
                    href="/projects"
                    className="text-blue-500 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s collaborate and build something amazing together.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all inline-block hover:scale-105 transform"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
