import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Agriලංකා',
      category: 'Marketplace Platform',
      description: 'A comprehensive digital marketplace platform designed specifically for the Sri Lankan agriculture sector. This platform connects farmers with buyers, provides access to resources, and streamlines the agricultural supply chain.',
      features: [
        'Digital marketplace for agricultural products',
        'Farmer-to-buyer direct connection',
        'Resource management system',
        'Supply chain optimization',
        'Mobile-responsive design',
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: '🌾',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Web3.0 Sustainable Healthcare Ecosystem',
      category: 'Hackathon Project',
      description: 'Built during a 72-hour hackathon with participation from 16 states, this Web3.0 ecosystem focuses on creating sustainable healthcare solutions using blockchain technology and decentralized architecture.',
      features: [
        'Decentralized healthcare records',
        'Blockchain-based data security',
        'Smart contracts for healthcare transactions',
        'Sustainable practices integration',
        'Cross-state collaboration platform',
      ],
      technologies: ['Web3.js', 'Solidity', 'Ethereum', 'React', 'IPFS'],
      image: '🏥',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Ballerina Competition Platform',
      category: 'Competition Project',
      description: 'An innovative platform that reached the Final 15 in the Ballerina Competition 2025, organized by IEEE Student Branch. Showcasing our technical excellence and innovative approach to solving complex challenges.',
      features: [
        'Advanced algorithm implementation',
        'Real-time data processing',
        'Performance optimization',
        'Scalable architecture',
        'User-friendly interface',
      ],
      technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
      image: '💃',
      status: 'In Development',
    },
    {
      id: 4,
      title: 'AI-Powered CRM System',
      category: 'Enterprise Solution',
      description: 'A comprehensive Customer Relationship Management system powered by artificial intelligence. Features project management, invoice generation, and workflow automation to help businesses streamline operations.',
      features: [
        'Project management dashboard',
        'Invoice & estimate generation',
        'AI-powered customer insights',
        'Workflow automation',
        'Real-time analytics',
      ],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'TensorFlow', 'Stripe API'],
      image: '⚙️',
      status: 'Active',
    },
    {
      id: 5,
      title: 'Agentic AI Assistant',
      category: 'AI Innovation',
      description: 'An autonomous AI agent designed to streamline business workflows and increase productivity. The agent learns from user interactions and continuously improves its performance.',
      features: [
        'Natural language processing',
        'Autonomous task execution',
        'Machine learning integration',
        'Real-time decision making',
        'Continuous learning capability',
      ],
      technologies: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'PostgreSQL'],
      image: '🤖',
      status: 'Active',
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Optimization',
      category: 'DevOps Project',
      description: 'A cloud infrastructure optimization solution that helps businesses reduce costs and improve performance. Includes monitoring, auto-scaling, and resource allocation optimization.',
      features: [
        'Cloud cost analysis',
        'Auto-scaling configuration',
        'Performance monitoring',
        'Resource optimization',
        'Multi-cloud support',
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Python'],
      image: '☁️',
      status: 'Active',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing our award-winning projects and innovations that demonstrate our expertise in AI, Web3, and enterprise solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-5xl">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      project.status === 'Active'
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : project.status === 'Completed'
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We&apos;re always looking for exciting new projects and collaborations. Let&apos;s build something amazing together.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-block">
            Start a Project
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
