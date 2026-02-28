export interface Project {
  title: string;
  desc: string;
  longDesc?: string;
  tech?: string[];
  link?: string;
}

export interface Stat {
  name: string;
  rank: number;
  rankLabel: string;
  description: string;
}

export interface AboutItem {
  label: string;
  value: string;
}

// ---- Social Stats (P5R style) ----
export const stats: Stat[] = [
  { name: 'Knowledge', rank: 5, rankLabel: 'Advanced', description: 'CS fundamentals, ML, algorithms' },
  { name: 'Team Work', rank: 4, rankLabel: 'Supportive', description: 'Collaboration, mentoring, Agile workflows' },
  { name: 'Adaptability', rank: 5, rankLabel: 'Transcendent', description: 'Python, C++, React, full stack' },
  { name: 'Analytical', rank: 4, rankLabel: 'Attention to Detail', description: 'Debugging, data analysis, problem solving' },
  { name: 'Driven', rank: 5, rankLabel: 'Visionary', description: 'UI/UX, communication, design' },
];

// ---- About Me ----
export const aboutInfo: AboutItem[] = [
  { label: 'SCHOOL', value: 'University of California, Irvine' },
  { label: 'MAJOR', value: 'Computer Science Specializing in Intelligent Systems' },
  { label: 'SPECIALTY', value: 'Full Stack Development & Machine Learning' },
  { label: 'WEAPONS', value: 'Python, TypeScript, PostgreSQL, React, FastAPI' },
  { label: 'OBJECTIVE', value: 'Using data to drive impactful solutions to real-world problems' },
];

// ---- Showcase (Top 3 projects) ----
export const showcaseProjects: Project[] = [
  { // Project 1
    title: 'KapeChat',
    desc: 'Mentorship and Matching System for Students',
    longDesc: 'A full-stack recommendation engine that helps UCI students navigate multi-transit routes. Built with FastAPI backend and containerized with Docker for scalable deployment.',
    tech: ['FastAPI', 'Docker', 'Python', 'REST API'],
    link: '#',
  },

  { // Project 2
    title: 'ZotSwap',
    desc: 'Context-Aware Recommendation Engine',
    longDesc: 'A skillshare-style platform that matches UCI students based on shared interests and complementary skills. Built with Next.js and Firebase, it features real-time chat and personalized recommendations using machine learning algorithms.',
    tech: ['Next.js', 'React', 'Firebase', 'TypeScript'],
    link: '#',
  },

  { // Project 3
    title: "TalentLens",
    desc: 'End-to-End NLP Job Market Analysis',
    longDesc: 'Built a data science pipeline analyzing over 100,000 job postings to identify hiring trends and skill demands. Performed data cleaning and feature engineering on unstructured text to extract skill keywords, and trained supervised NLP classification models to predict job role categories with 85%+ accuracy',
    tech: ['Python', 'SQL', 'Natural Language Processing', 'Machine Learning', 'Data Analysis'],
    link: '#',
  },
];

// ---- All Completed Projects ----
export const completedProjects: Project[] = [
  { title: 'ZotSwap', desc: 'Matching System for UCI Students to swap skills(React/Firebase)' },
  { title: 'KapeChat', desc: 'Matching and auth systems for 100+ users (React/Firebase)' },
  { title: 'Sudoku AI Agent', desc: 'MCTS-based AI agent using C++ and UCT formula' },
  { title: 'ChurnSight', desc: 'Context-aware recommendation engine (Next.js/Pinecone)' },
  { title: 'Search Engine Architecture', desc: 'High-Performance Web Crawler and Inverted Index' },
  { title: 'Personal Blog', desc: 'WordPress site deployed on Oracle Cloud Infrastructure' },
  { title: 'TalentLens', desc: 'End-to-end NLP job market analysis pipeline (Python/SQL)' },
  { title: 'Personal Portfolio', desc: 'Responsive portfolio website built with Astro and Tailwind CSS' },
  { title: 'Columns in Python', desc: 'Tetris-style game implemented with Pygame' },
  { title: 'Senti-IDMB of Movie Reviews', desc: 'NLP project using NLTK and scikit-learn to classify movie reviews as positive or negative' },
];

// ---- Nav Items ----
export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'stats', label: 'STATS' },
  { id: 'showcase', label: 'SHOWCASE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'resume', label: 'CONTACT' },
];
