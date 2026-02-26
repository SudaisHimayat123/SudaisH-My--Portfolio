/**
 * Work Experience Data
 */
export interface Experience {
  id: string
  role: string
  company: string
  year: string
  accentColor: string
  glowColor: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    id: 'elevvo',
    role: 'Machine Learning Intern',
    company: 'Elevvo Pathways',
    year: '2025',
    accentColor: '#00d4aa',
    glowColor: 'rgba(0, 212, 170, 0.4)',
    bullets: [
      'Built regression & classification models for real-world datasets',
      'Developed deep learning models with TensorFlow and Keras',
      'Applied transfer learning techniques to improve model accuracy',
      'Deployed ML applications with Streamlit for interactive demos',
    ],
  },
  {
    id: 'code-sentinel',
    role: 'AI Intern',
    company: 'Code Sentinel',
    year: '2025',
    accentColor: '#0099ff',
    glowColor: 'rgba(0, 153, 255, 0.4)',
    bullets: [
      'Trained Convolutional Neural Networks using VGG16 & ResNet architectures',
      'Achieved 92% validation accuracy on image classification tasks',
      'Worked with large image datasets and data augmentation pipelines',
    ],
  },
  {
    id: 'devhub',
    role: 'Frontend Intern',
    company: 'DevelopersHub',
    year: '2025',
    accentColor: '#a78bfa',
    glowColor: 'rgba(167, 139, 250, 0.4)',
    bullets: [
      'Built responsive, pixel-perfect UI components with React.js',
      'Improved page performance by implementing lazy loading strategies',
      'Collaborated with designers to translate Figma mockups into working code',
    ],
  },
]

/**
 * Skills Data
 */
export interface SkillCategory {
  id: string
  title: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'fa-code',
    skills: ['Java', 'C++', 'C#', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'fa-globe',
    skills: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'ASP.NET', 'REST APIs'],
  },
  {
    id: 'ai',
    title: 'AI / Machine Learning',
    icon: 'fa-brain',
    skills: ['TensorFlow', 'Keras', 'scikit-learn', 'NumPy', 'Pandas', 'Streamlit'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'fa-database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    id: 'tools',
    title: 'Tools & IDEs',
    icon: 'fa-tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Jupyter', 'npm'],
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    icon: 'fa-layer-group',
    skills: ['DSA', 'OOP', 'Full-Stack', 'ML', 'Computer Vision', 'Prompt Engineering'],
  },
]

/**
 * Certifications Data
 */
export interface Certification {
  id: string
  title: string
  issuer: string
  emoji: string
}

export const certifications: Certification[] = [
  {
    id: 'hcia',
    title: 'HCIA-AI V4.0 Course',
    issuer: 'Huawei ICT Academy',
    emoji: '🤖',
  },
  {
    id: 'ai-everyone',
    title: 'AI For Everyone',
    issuer: 'Coursera · Andrew Ng',
    emoji: '🧠',
  },
  {
    id: 'python',
    title: 'Python for Everybody',
    issuer: 'Coursera',
    emoji: '🐍',
  },
  {
    id: 'prompt',
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Online Course',
    emoji: '💡',
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    issuer: 'GDSC',
    emoji: '🔧',
  },
]
