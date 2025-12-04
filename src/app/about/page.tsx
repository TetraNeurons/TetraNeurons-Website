import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to solve real-world problems.',
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering high-quality solutions that exceed expectations.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
    },
    {
      title: 'Sustainability',
      description: 'We build solutions that are environmentally and socially responsible.',
    },
  ];

  const hackathonWins = [
    {
      year: '2025',
      title: 'Ballerina Competition 2025',
      achievement: 'Finalist - TOP 10',
      description: 'Reached Final 15 in a highly competitive event organized by IEEE Student Branch.',
    },
    {
      year: '2025',
      title: 'TechSpire 2025',
      achievement: 'Best Achievers\' Award',
      description: 'Recognized for excellence and outstanding achievements in technology projects.',
    },
    {
      year: '2024',
      title: '72-Hour Hackathon',
      achievement: 'Web3 Healthcare Winner',
      description: 'Built a Web3.0 ecosystem for sustainable healthcare with participation from 16 states.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About TetraNeurons
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A team of passionate innovators dedicated to building the future of software with AI and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                To empower businesses and individuals by creating innovative, AI-driven software solutions that streamline workflows, enhance productivity, and drive meaningful impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe in the transformative power of technology and are committed to leveraging it responsibly and sustainably.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                To be a leading force in AI-driven software innovation, recognized for building solutions that are not only technologically advanced but also sustainable and socially responsible.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We envision a future where technology serves as a bridge between innovation and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold mb-3 text-blue-600">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Hackathon Achievements</h2>
          <div className="space-y-8">
            {hackathonWins.map((win, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold rounded-full text-sm mb-3">
                      {win.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{win.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{win.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg">
                      {win.achievement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Our team is a collective of passionate software engineers, AI specialists, and innovators driven by a shared vision to solve complex problems and build the future of technology.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We thrive in hackathons, collaborate seamlessly, and are committed to delivering cutting-edge solutions that make a real impact.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
