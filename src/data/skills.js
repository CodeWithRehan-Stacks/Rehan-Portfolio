import { FaReact, FaPython, FaLaravel } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiAi } from 'react-icons/si';
import { MdApi, MdShield, MdLightbulb } from 'react-icons/md';

export const SKILLS = [
  {
    id: 1,
    name: 'React',
    category: 'Frontend',
    icon: FaReact,
    proficiency: 95,
    color: '#61dafb',
  },
  {
    id: 2,
    name: 'JavaScript',
    category: 'Frontend',
    icon: SiJavascript,
    proficiency: 95,
    color: '#f7df1e',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: SiTailwindcss,
    proficiency: 90,
    color: '#06b6d4',
  },
  {
    id: 4,
    name: 'Python',
    category: 'Backend',
    icon: FaPython,
    proficiency: 85,
    color: '#3776ab',
  },
  {
    id: 5,
    name: 'Laravel',
    category: 'Backend',
    icon: FaLaravel,
    proficiency: 85,
    color: '#ff2d20',
  },
  {
    id: 6,
    name: 'AI Tools',
    category: 'AI/ML',
    icon: SiAi,
    proficiency: 80,
    color: '#00d9ff',
  },
  {
    id: 7,
    name: 'APIs',
    category: 'Integration',
    icon: MdApi,
    proficiency: 90,
    color: '#0ea5e9',
  },
  {
    id: 8,
    name: 'Cyber Security',
    category: 'Security',
    icon: MdShield,
    proficiency: 75,
    color: '#ef4444',
  },
  {
    id: 9,
    name: 'Startups',
    category: 'Entrepreneurship',
    icon: MdLightbulb,
    proficiency: 85,
    color: '#10b981',
  },
];
