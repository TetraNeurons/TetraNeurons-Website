export interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  avatar: string;
  email: string;
  phone: string;
  slug: string;
  description?: string;
  achievements?: string[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'ISARA MADUNIKA',
    role: 'AI & ML Developer',
    expertise: ['Python', 'TensorFlow', 'Machine Learning', 'LLMs', 'Data Science'],
    bio: 'Focused on developing intelligent solutions using cutting-edge AI technologies.',
    avatar: '👨‍💻',
    email: 'isharamadunika9@gmail.com',
    phone: '0770264992',
    slug: 'isara-madunika',
    description: 'Isara is a passionate AI and Machine Learning developer with expertise in building intelligent systems. With a strong background in Python and TensorFlow, Isara has contributed significantly to the AgriLanka project, particularly in developing the GemiLib AI library for intelligent search and recommendations.',
    achievements: [
      'Developed GemiLib AI library for AgriLanka',
      'Built AI-powered chat and query systems',
      'Implemented machine learning models for agricultural data analysis',
      'Contributed to hackathon-winning projects',
    ],
  },
  {
    id: 2,
    name: 'THIRAMITHU KULASOORIYA',
    role: 'Full-stack Developer',
    expertise: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Full Stack Development'],
    bio: 'Passionate about building scalable web applications with modern technologies.',
    avatar: '🤖',
    email: 'kulasoooriyaa@gmail.com',
    phone: '0785866652',
    slug: 'thiramithu-kulasooriya',
    description: 'Thiramithu is a full-stack developer with extensive experience in building modern web applications. Leading the development of the AgriLanka web platform, Thiramithu combines frontend expertise with backend knowledge to create seamless user experiences.',
    achievements: [
      'Led development of AgriLanka web platform',
      'Built responsive UI with React and Tailwind CSS',
      'Implemented backend APIs with Node.js',
      'Architected scalable application structure',
    ],
  },
  {
    id: 3,
    name: 'SADESHA JAYAWEERA',
    role: 'Business Analyst',
    expertise: ['Agile', 'Scrum', 'Team Management', 'Strategic Planning', 'Business Analysis'],
    bio: 'Coordinating teams and ensuring successful project delivery.',
    avatar: '📊',
    email: 'sadeesha.jayaweera@gmail.com',
    phone: '0774928297',
    slug: 'sadesha-jayaweera',
    description: 'Sadesha is a skilled business analyst and team coordinator who ensures projects are delivered on time and within scope. With expertise in Agile methodologies, Sadesha plays a crucial role in bridging the gap between business requirements and technical implementation.',
    achievements: [
      'Managed cross-functional teams',
      'Implemented Agile processes',
      'Coordinated 72-hour hackathon project',
      'Ensured successful project deliveries',
    ],
  },
  {
    id: 4,
    name: 'KAVINDU DESHAPRIYA',
    role: 'Backend Developer',
    expertise: ['Ballerina', 'Node.js', 'PostgreSQL', 'REST API', 'Backend Development'],
    bio: 'Ensuring scalable, secure, and reliable infrastructure for all projects.',
    avatar: '☁️',
    email: 'ksdeshappriya.official@gmail.com',
    phone: '0710559795',
    slug: 'kavindu-deshapriya',
    description: 'Kavindu is a backend specialist with deep expertise in Ballerina and Node.js. As the primary backend architect for AgriLanka, Kavindu designed the MCP Server and implemented secure, scalable backend systems that power the platform.',
    achievements: [
      'Architected AgriLanka backend with Ballerina',
      'Implemented MCP Server for AI integration',
      'Designed secure PostgreSQL database structure',
      'Built REST APIs for multi-channel integration',
    ],
  },
  {
    id: 5,
    name: 'SAMSUDEEN ASHAD',
    role: 'Frontend Developer',
    expertise: ['Figma', 'UI Design', 'UX Research', 'Tailwind CSS', 'React'],
    bio: 'Creating beautiful and intuitive user experiences that users love.',
    avatar: '🎨',
    email: 'samsudeenashad@gmail.com',
    phone: '0705390110',
    slug: 'samsudeen-ashad',
    description: 'Samsudeen is a talented frontend developer and UI/UX designer who focuses on creating beautiful, intuitive interfaces. With expertise in Figma and modern frontend technologies, Samsudeen ensures that every user interaction is smooth and delightful.',
    achievements: [
      'Designed AgriLanka user interface',
      'Created responsive mobile-first designs',
      'Implemented Tailwind CSS styling',
      'Conducted UX research and user testing',
    ],
  },
  {
    id: 6,
    name: 'Project Manager',
    role: 'Team Lead',
    expertise: ['Agile', 'Scrum', 'Team Management', 'Strategic Planning', 'Leadership'],
    bio: 'Coordinating teams and ensuring successful project delivery.',
    avatar: '👨‍💼',
    email: 'placeholder@tetraneurons.com',
    phone: 'N/A',
    slug: 'project-manager',
    description: 'Our project manager ensures that all projects are delivered successfully by coordinating teams, managing timelines, and maintaining clear communication with stakeholders.',
    achievements: [
      'Managed multiple concurrent projects',
      'Led cross-functional teams',
      'Ensured on-time project delivery',
      'Maintained high team morale',
    ],
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

export function getAllTeamSlugs(): string[] {
  return teamMembers.map((member) => member.slug);
}
