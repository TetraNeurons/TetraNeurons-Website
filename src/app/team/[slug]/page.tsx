import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getTeamMemberBySlug, getAllTeamSlugs } from '@/data/teamData';
import { notFound } from 'next/navigation';

// Professional SVG Icons
const LeaderIcon = () => (
  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const DeveloperIcon = () => (
  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

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
            <ArrowLeftIcon />
            <span>Back to Team</span>
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              {member.avatarType === 'leader' ? <LeaderIcon /> : <DeveloperIcon />}
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
