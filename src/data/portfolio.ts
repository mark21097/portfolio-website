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
  { name: 'Team Work', rank: 4, rankLabel: 'Supportive', description: 'Debugging, deployment, DevOps' },
  { name: 'Adaptability', rank: 5, rankLabel: 'Transcendent', description: 'Python, C++, React, full stack' },
  { name: 'Analytical', rank: 4, rankLabel: 'Attention to Detail', description: 'Teamwork, mentoring, community' },
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
  { title: 'ZotRoute', desc: 'Multi-Transit Recommendation Engine for UCI (FastAPI/Docker)' },
  { title: 'KapeChat', desc: 'Matching and auth systems for 100+ users (React/Firebase)' },
  { title: 'Sudoku AI Agent', desc: 'MCTS-based AI agent using C++ and UCT formula' },
  { title: 'ChurnSight', desc: 'Context-aware recommendation engine (Next.js/Pinecone)' },
  { title: 'Search Engine Architecture', desc: 'High-Performance Web Crawler and Inverted Index' },
  { title: 'Personal Blog', desc: 'WordPress site deployed on Oracle Cloud Infrastructure' },
];

// ---- Nav Items ----
export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'stats', label: 'STATS' },
  { id: 'showcase', label: 'SHOWCASE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'resume', label: 'RESUME' },
];
