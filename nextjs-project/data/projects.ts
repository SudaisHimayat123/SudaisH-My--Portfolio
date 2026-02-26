/**
 * Projects Data
 * AI projects are listed first (featured: true)
 */

export type ProjectCategory = 'ai' | 'web' | 'java'

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  category: ProjectCategory
  featured: boolean
  emoji: string
  bgClass: string
  github: string
  demo?: string
}

export const projects: Project[] = [
  // =================== FEATURED AI PROJECTS ===================
  {
    id: 'tts',
    title: 'Text To Speech System',
    description:
      'AI-powered TTS application that converts text to natural-sounding speech using deep learning models with multiple voice options and language support.',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'NLP'],
    category: 'ai',
    featured: true,
    emoji: '🎙️',
    bgClass: 'from-[#1a1a2e] to-[#16213e]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'room-scan',
    title: 'AI Room Scan & Interior Styling',
    description:
      'Computer Vision system that scans room images, detects objects, and suggests intelligent interior styling recommendations using AI-powered analysis.',
    tech: ['Python', 'OpenCV', 'Keras', 'ResNet', 'Streamlit'],
    category: 'ai',
    featured: true,
    emoji: '🏠',
    bgClass: 'from-[#0a1628] to-[#1a2744]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'score-prediction',
    title: 'Student Score Prediction',
    description:
      'ML system that predicts student academic performance using regression models, analyzing study patterns, attendance, and historical data with high accuracy.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    category: 'ai',
    featured: true,
    emoji: '📊',
    bgClass: 'from-[#0d1f17] to-[#162e1f]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'movie-rec',
    title: 'Movie Recommendation System',
    description:
      'Collaborative filtering-based recommendation engine that suggests personalized movies using user behavior analysis and content-based filtering algorithms.',
    tech: ['Python', 'Pandas', 'NumPy', 'scikit-learn'],
    category: 'ai',
    featured: true,
    emoji: '🎬',
    bgClass: 'from-[#1e1020] to-[#2d1a35]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'image-classifier',
    title: 'AI Image Classifier',
    description:
      'Deep learning CNN classifier trained with VGG16 & ResNet architectures achieving 92%+ validation accuracy for multi-class image recognition tasks.',
    tech: ['Python', 'TensorFlow', 'VGG16', 'ResNet', 'Keras'],
    category: 'ai',
    featured: true,
    emoji: '🖼️',
    bgClass: 'from-[#1a0f0f] to-[#2e1a1a]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'chat-app',
    title: 'Chat Application',
    description:
      'Real-time AI-powered chat application with intelligent response generation, conversation history, and natural language processing capabilities.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'AI API', 'MongoDB'],
    category: 'ai',
    featured: true,
    emoji: '💬',
    bgClass: 'from-[#0f1a1e] to-[#1a2e35]',
    github: 'https://github.com/SudaisHimayat123',
  },
  // =================== OTHER PROJECTS ===================
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    description:
      'Full-featured MERN Stack e-commerce platform with product listings, cart management, user authentication, and payment integration.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    category: 'web',
    featured: false,
    emoji: '🛒',
    bgClass: 'from-[#1a1500] to-[#2e2400]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'cpu-scheduler',
    title: 'CPU Scheduling Simulator',
    description:
      'Java-based OS simulation tool implementing FCFS, SJF, Round Robin, and Priority scheduling algorithms with visual Gantt charts.',
    tech: ['Java', 'JavaFX', 'OOP', 'Data Structures'],
    category: 'java',
    featured: false,
    emoji: '⚙️',
    bgClass: 'from-[#1a0f05] to-[#2e1a0a]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'car-rental',
    title: 'Car Rental System',
    description:
      'Java-based car rental management system with MySQL database, booking management, customer tracking, and inventory management.',
    tech: ['Java', 'MySQL', 'JDBC', 'OOP'],
    category: 'java',
    featured: false,
    emoji: '🚗',
    bgClass: 'from-[#0a1a10] to-[#0f2d1a]',
    github: 'https://github.com/SudaisHimayat123',
  },
  {
    id: 'food-finder',
    title: 'Food Finder App',
    description:
      'Java application that connects to food APIs to help users find nearby restaurants, filter by cuisine, view menus, and get directions.',
    tech: ['Java', 'REST API', 'JSON', 'JavaFX'],
    category: 'java',
    featured: false,
    emoji: '🍕',
    bgClass: 'from-[#1a100a] to-[#2d1a0f]',
    github: 'https://github.com/SudaisHimayat123',
  },
]
