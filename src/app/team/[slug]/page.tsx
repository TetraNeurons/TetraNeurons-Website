import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getTeamMemberBySlug, getAllTeamSlugs } from '@/data/teamData';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllTeamSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function TeamMemberProfile({ params }: Props) {
  const member = getTeamMemberBySlug(params.slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/team" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8">
            <span>←</span>
            <span>Back to Team</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-8xl flex-shrink-0">
              {member.avatar}
            </div>

            {/* Member Info */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2">{member.name}</h1>
              <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">{member.role}</p>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-400">📧</span>
                  <a href={`mailto:${member.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-400">📱</span>
                  <a href={`tel:${member.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {member.phone}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a href={`mailto:${member.email}`} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                  Send Email
                </a>
                <a href={`tel:${member.phone}`} className="px-6 py-3 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">About {member.name.split(' ')[0]}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {member.description}
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Expertise & Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 text-xl mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Collaborating?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get in touch with {member.name.split(' ')[0]} to discuss your project or collaboration opportunities.
          </p>
          <a href={`mailto:${member.email}`} className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
            Contact {member.name.split(' ')[0]}
          </a>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Rest of Our Team</h2>
          <div className="text-center">
            <Link href="/team" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              View All Team Members
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
