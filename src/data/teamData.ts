export interface TeamMember {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  avatarType: 'leader' | 'developer';
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
    name: 'SAMSUDEEN ASHAD',
    role: 'Team Lead | Software Engineering Undergraduate',
    expertise: ['Leadership', 'Software Engineering', 'Project Management', 'Full Stack Development'],
    bio: 'Leading TetraNeurons with a vision to build meaningful, human-centered software solutions.',
    avatarType: 'leader',
    email: 'samsudeenashad@gmail.com',
    phone: '0705390110',
    slug: 'samsudeen-ashad',
    description: 'Samsudeen Ashad is the Team Lead of TetraNeurons, a Software Engineering Undergraduate who leads the team with a vision to build meaningful, human-centered software solutions. Under his leadership, TetraNeurons has achieved 1st Place in Innovative Nation Sri Lanka (INSL) and 1st Runner-Up in GreenExe 3.0.',
    achievements: [
      'Led TetraNeurons to 1st Place in INSL',
      'Achieved 1st Runner-Up in GreenExe 3.0',
      'Led team to Top 10 in Innovate with Ballerina (WSO2)',
      'Coordinated multiple award-winning projects',
    ],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/samsudeen-ashad-90b281255/',
    },
  },
  {
    id: 2,
    name: 'ISARA MADUNIKA',
    role: 'Software Developer',
    expertise: ['Python', 'TensorFlow', 'Machine Learning', 'LLMs', 'Data Science'],
    bio: 'Focused on developing intelligent solutions using cutting-edge AI technologies.',
    avatarType: 'developer',
    email: 'isharamadunika9@gmail.com',
    phone: '0770264992',
    slug: 'isara-madunika',
    description: 'Isara is a passionate Software Developer with expertise in building intelligent systems. With a strong background in Python and TensorFlow, Isara has contributed significantly to the Agrilanka project, particularly in developing the GemiLib AI library for intelligent search and recommendations.',
    achievements: [
      'Developed GemiLib AI library for Agrilanka',
      'Built AI-powered chat and query systems',
      'Implemented machine learning models for agricultural data analysis',
      'Contributed to hackathon-winning projects',
    ],
  },
  {
    id: 3,
    name: 'THIRAMITHU KULASOORIYA',
    role: 'Software Developer',
    expertise: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Full Stack Development'],
    bio: 'Passionate about building scalable web applications with modern technologies.',
    avatarType: 'developer',
    email: 'kulasoooriyaa@gmail.com',
    phone: '0785866652',
    slug: 'thiramithu-kulasooriya',
    description: 'Thiramithu is a Software Developer with extensive experience in building modern web applications. Leading the development of the Agrilanka web platform, Thiramithu combines frontend expertise with backend knowledge to create seamless user experiences.',
    achievements: [
      'Led development of Agrilanka web platform',
      'Built responsive UI with React and Tailwind CSS',
      'Implemented backend APIs with Node.js',
      'Architected scalable application structure',
    ],
  },
  {
    id: 4,
    name: 'KAVINDU DESHAPRIYA',
    role: 'Software Developer',
    expertise: ['Ballerina', 'Node.js', 'PostgreSQL', 'REST API', 'Backend Development'],
    bio: 'Ensuring scalable, secure, and reliable infrastructure for all projects.',
    avatarType: 'developer',
    email: 'ksdeshappriya.official@gmail.com',
    phone: '0710559795',
    slug: 'kavindu-deshapriya',
    description: 'Kavindu is a Software Developer and backend specialist with deep expertise in Ballerina and Node.js. As the primary backend architect for Agrilanka, Kavindu designed the MCP Server and implemented secure, scalable backend systems that power the platform.',
    achievements: [
      'Architected Agrilanka backend with Ballerina',
      'Implemented MCP Server for AI integration',
      'Designed secure PostgreSQL database structure',
      'Built REST APIs for multi-channel integration',
    ],
  },
  {
    id: 5,
    name: 'SADESHA JAYAWEERA',
    role: 'Software Developer',
    expertise: ['Agile', 'Scrum', 'Business Analysis', 'Strategic Planning', 'Full Stack Development'],
    bio: 'Coordinating teams and ensuring successful project delivery.',
    avatarType: 'developer',
    email: 'sadeesha.jayaweera@gmail.com',
    phone: '0774928297',
    slug: 'sadesha-jayaweera',
    description: 'Sadesha is a skilled Software Developer and team coordinator who ensures projects are delivered on time and within scope. With expertise in Agile methodologies, Sadesha plays a crucial role in bridging the gap between business requirements and technical implementation.',
    achievements: [
      'Managed cross-functional teams',
      'Implemented Agile processes',
      'Coordinated hackathon projects',
      'Ensured successful project deliveries',
    ],
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

export function getAllTeamSlugs(): string[] {
  return teamMembers.map((member) => member.slug);
}

