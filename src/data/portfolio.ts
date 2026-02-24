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
  { name: 'Knowledge', rank: 5, rankLabel: 'Erudite', description: 'CS fundamentals, ML, algorithms' },
  { name: 'Guts', rank: 4, rankLabel: 'Lionhearted', description: 'Debugging, deployment, DevOps' },
  { name: 'Proficiency', rank: 5, rankLabel: 'Transcendent', description: 'Python, C++, React, full stack' },
  { name: 'Kindness', rank: 4, rankLabel: 'Selfless', description: 'Teamwork, mentoring, community' },
  { name: 'Charm', rank: 4, rankLabel: 'Debonair', description: 'UI/UX, communication, design' },
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
    desc: 'Multi-Transit Recommendation Engine',
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
    title: "Lucifer's Colosseum",
    desc: 'Action RPG Built in Godot',
    longDesc: 'A custom action RPG featuring hand-crafted hitbox/hurtbox combat systems, enemy AI state machines, and dynamic level progression. A passion project blending game design with software engineering.',
    tech: ['Godot', 'GDScript', 'Game Design', 'AI'],
    link: '#',
  },
];

// ---- All Completed Projects ----
export const completedProjects: Project[] = [
  { title: 'ZotRoute', desc: 'Multi-Transit Recommendation Engine for UCI (FastAPI/Docker)' },
  { title: 'KapeChat', desc: 'Matching and auth systems for 100+ users (React/Firebase)' },
  { title: "Lucifer's Colosseum", desc: 'Godot Action RPG featuring custom Hitbox/Hurtbox systems' },
  { title: 'Checkers AI Agent', desc: 'MCTS-based AI agent using C++ and UCT formula' },
  { title: 'HealthSync AI', desc: 'Context-aware recommendation engine (Next.js/Pinecone)' },
  { title: 'DiaPredict', desc: 'Hospital Readmission ML Classification Suite (Python/PyTorch)' },
  { title: 'Symphony In Slime', desc: 'Precision Rhythm Engine and Scoring Logic in Unity/C#' },
  { title: 'Search Engine Architecture', desc: 'High-Performance Web Crawler and Inverted Index' },
  { title: 'SamaSama', desc: 'Centralized Community Platform (React/Node.js/Supabase)' },
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
