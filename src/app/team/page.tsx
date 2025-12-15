import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'ISARA MADUNIKA',
      role: 'AI & ML Developer',
      expertise: ['Python', 'TensorFlow', 'Machine Learning', 'LLMs'],
      bio: 'Focused on developing intelligent solutions using cutting-edge AI technologies.',
      avatar: '👨‍💻',
      email: 'isharamadunika9@gmail.com',
      phone: '0770264992',
      slug: 'isara-madunika',
    },
    {
      id: 2,
      name: 'THIRAMITHU KULASOORIYA',
      role: 'Full-stack Developer',
      expertise: ['Next.js', 'React', 'Node.js', 'TypeScript'],
      bio: 'Passionate about building scalable web applications with modern technologies.',
      avatar: '🤖',
      email: 'kulasoooriyaa@gmail.com',
      phone: '0785866652',
      slug: 'thiramithu-kulasooriya',
    },
    {
      id: 3,
      name: 'SADESHA JAYAWEERA',
      role: 'Business Analyst',
      expertise: ['Agile', 'Scrum', 'Team Management', 'Strategic Planning'],
      bio: 'Coordinating teams and ensuring successful project delivery.',
      avatar: '📊',
      email: 'sadeesha.jayaweera@gmail.com',
      phone: '0774928297',
      slug: 'sadesha-jayaweera',
    },
    {
      id: 4,
      name: 'KAVINDU DESHAPRIYA',
      role: 'Backend Developer',
      expertise: ['Ballerina', 'Node.js', 'PostgreSQL', 'REST API'],
      bio: 'Ensuring scalable, secure, and reliable infrastructure for all projects.',
      avatar: '☁️',
      email: 'ksdeshappriya.official@gmail.com',
      phone: '0710559795',
      slug: 'kavindu-deshapriya',
    },
    {
      id: 5,
      name: 'SAMSUDEEN ASHAD',
      role: 'Frontend Developer',
      expertise: ['Figma', 'UI Design', 'UX Research', 'Tailwind CSS'],
      bio: 'Creating beautiful and intuitive user experiences that users love.',
      avatar: '🎨',
      email: 'samsudeenashad@gmail.com',
      phone: '0705390110',
      slug: 'samsudeen-ashad',
    },
    {
      id: 6,
      name: 'Project Manager',
      role: 'Team Lead',
      expertise: ['Agile', 'Scrum', 'Team Management', 'Strategic Planning'],
      bio: 'Coordinating teams and ensuring successful project delivery.',
      avatar: '👨‍💼',
      email: 'placeholder@tetraneurons.com',
      phone: 'N/A',
      slug: 'project-manager',
    },
  ];

  const values = [
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage continuous learning and skill development.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in open communication and collaborative problem-solving.',
    },
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and are not afraid to experiment with new ideas.',
    },
    {
      title: 'Accountability',
      description: 'We take ownership of our work and deliver results with integrity.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse group of talented professionals united by a passion for innovation and excellence.
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                {/* Avatar */}
                <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl">
                  {member.avatar}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/team/${member.slug}`} className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Team Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                5+
              </div>
              <h3 className="text-xl font-bold mb-2">Hackathon Wins</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Multiple awards and recognitions in prestigious hackathons.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                16+
              </div>
              <h3 className="text-xl font-bold mb-2">States Collaborated</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cross-state collaboration in major hackathon events.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-200 dark:border-blue-800 text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                100%
              </div>
              <h3 className="text-xl font-bold mb-2">Dedication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to excellence in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 opacity-90">
            We&apos;re always looking for talented individuals who are passionate about innovation and technology.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all inline-block hover:scale-105 transform">
            View Open Positions
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
