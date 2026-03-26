export interface Project {
  title: string;
  desc: string;
  longDesc?: string;
  tech?: string[];
  link?: string;
  school?: boolean;
  wip?: boolean;
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

// ---- NeetCode 150 Progress ----
export interface NeetCodeStats {
  completed: number;
  inProgress: number;
  total: number;
  categories: { name: string; completed: number; total: number }[];
}

export const neetcodeStats: NeetCodeStats = {
  completed: 15,
  inProgress: 0,
  total: 150,
  categories: [
    { name: 'Arrays & Hashing', completed: 4, total: 9 },
    { name: 'Two Pointers', completed: 5, total: 5 },
    { name: 'Sliding Window', completed: 0, total: 6 },
    { name: 'Stack', completed: 2, total: 7 },
    { name: 'Binary Search', completed: 2, total: 7 },
    { name: 'Linked List', completed: 2, total: 11 },
    { name: 'Trees', completed: 0, total: 15 },
    { name: 'Heap / Priority Queue', completed: 0, total: 7 },
    { name: 'Backtracking', completed: 0, total: 9 },
    { name: 'Tries', completed: 0, total: 3 },
    { name: 'Graphs', completed: 0, total: 13 },
    { name: 'Advanced Graphs', completed: 0, total: 6 },
    { name: '1-D DP', completed: 0, total: 12 },
    { name: '2-D DP', completed: 0, total: 11 },
    { name: 'Greedy', completed: 0, total: 8 },
    { name: 'Intervals', completed: 0, total: 6 },
    { name: 'Math & Geometry', completed: 0, total: 8 },
    { name: 'Bit Manipulation', completed: 0, total: 7 },
  ],
};

// ---- Stats  ----
export const stats: Stat[] = [
  { name: 'Innovative', rank: 5, rankLabel: 'Trailblazer', description: 'Novel solutions, first-principles thinking' },
  { name: 'Team Work', rank: 4, rankLabel: 'Supportive', description: 'Collaboration, mentoring, Agile workflows' },
  { name: 'Adaptability', rank: 5, rankLabel: 'Transcendent', description: 'Python, C++, React, full stack' },
  { name: 'Analytical', rank: 4, rankLabel: 'Attention to Detail', description: 'Debugging, data analysis, problem solving' },
  { name: 'Driven', rank: 5, rankLabel: 'Visionary', description: 'UI/UX, communication, design' },
];

// ---- About Me ----
export const aboutInfo: AboutItem[] = [
  { label: 'SCHOOL', value: 'University of California, Irvine' },
  { label: 'MAJOR', value: 'Computer Science Specializing in Intelligent Systems' },
  { label: 'INTERESTS', value: 'Full Stack Development & Machine Learning' },
  { label: 'Favorites', value: 'Python, TypeScript, PostgreSQL, React, FastAPI' },
  { label: 'OBJECTIVE', value: 'Using data to drive impactful solutions to real-world problems' },
];

// ---- Showcase (Top 3 projects) ----
export const showcaseProjects: Project[] = [
  { // Project 1
    title: 'KapeChat',
    desc: 'Mentorship and Matching System for Students',
    longDesc: 'A full-stack recommendation engine that helps UCI students navigate multi-transit routes. Built with FastAPI backend and containerized with Docker for scalable deployment.',
    tech: ['FastAPI', 'Docker', 'Python', 'REST API'],
    link: 'https://github.com/Jollibuilders/FIP_Project',
  },

  { // Project 2
    title: 'ZotSwap',
    desc: 'Context-Aware Recommendation Engine',
    longDesc: 'A skillshare-style platform that matches UCI students based on shared interests and complementary skills. Built with Next.js and Firebase, it features real-time chat and personalized recommendations using machine learning algorithms.',
    tech: ['Next.js', 'React', 'Firebase', 'TypeScript'],
    link: 'https://github.com/Bennables/ZotSwap',
  },

  { // Project 3
    title: "TalentLens",
    desc: 'End-to-End NLP Job Market Analysis',
    longDesc: 'Built a data science pipeline analyzing over 100,000 job postings to identify hiring trends and skill demands. Performed data cleaning and feature engineering on unstructured text to extract skill keywords, and trained supervised NLP classification models to predict job role categories with 85%+ accuracy',
    tech: ['Python', 'SQL', 'Natural Language Processing', 'Machine Learning', 'Data Analysis'],
    link: 'https://github.com/mark21097/TalentLens',
  },
];

// ---- All Completed Projects ----
export const completedProjects: Project[] = [
  // ── Personal / Work projects ──
  { title: 'ZotSwap', desc: 'Matching System for UCI Students to swap skills (React/Firebase)', longDesc: 'A skillshare-style platform that matches UCI students based on shared interests and complementary skills. Features real-time chat and personalized recommendations.', link: 'https://github.com/Bennables/ZotSwap' },
  { title: 'KapeChat', desc: 'Matching and auth systems for 100+ users (React/Firebase)', longDesc: 'A mentorship platform connecting UCI students with mentors. Includes authentication, profile matching algorithms, and real-time messaging for 100+ active users.', link: 'https://github.com/Jollibuilders/FIP_Project' },
  { title: 'ChurnSight', desc: 'Context-aware recommendation engine (Next.js/Pinecone)', longDesc: 'A context-aware recommendation engine that predicts customer churn using vector embeddings stored in Pinecone, with a Next.js frontend for interactive dashboards.', wip: true },
  { title: 'TalentLens', desc: 'End-to-end NLP job market analysis pipeline (Python/SQL)', longDesc: 'Analyzed 100,000+ job postings to identify hiring trends. Trained NLP classification models to predict job role categories with 85%+ accuracy.', link: 'https://github.com/mark21097/TalentLens' },
  { title: 'IntelliApply', desc: 'AI-powered resume tailor, cover letter & recruiter message generator', longDesc: 'Paste a job description and let AI tailor your resume, generate a targeted cover letter, and craft a personalized recruiter message — all in one workflow.', tech: ['Python', 'LLM / AI', 'FastAPI', 'TypeScript'], link: 'https://github.com/mark21097/IntelliApply' },
  { title: 'IG Unfollow Tracker', desc: 'Python script that detects Instagram accounts that unfollowed you', longDesc: "Compares your followers vs. following lists to surface accounts that don't follow you back. Tracks changes over time with a simple CLI interface.", tech: ['Python', 'Instagram API'], link: 'https://github.com/mark21097/instagram-unfollow-check' },
  { title: 'Personal Portfolio', desc: 'Responsive portfolio website built with Astro and Tailwind CSS', longDesc: 'This very website! Built with Astro and Tailwind CSS, themed after Persona 5 Royal with custom animations, radar charts, and interactive elements.', link: 'https://github.com/mark21097/portfolio-website' },
  // ── School projects (GitHub restricted) ──
  { title: 'Sudoku AI Agent', desc: 'MCTS-based AI agent using Python and UCT formula', longDesc: 'An intelligent Sudoku solver using Monte Carlo Tree Search with Upper Confidence Trees. Explores solution spaces efficiently to solve puzzles of varying difficulty.', school: true },
  { title: 'Custom Search Engine', desc: 'High-Performance Web Crawler and Inverted Index', longDesc: 'A high-performance web crawler and search engine with an inverted index for fast query lookups. Handles large-scale document indexing and ranked retrieval.', school: true },
  { title: 'Columns in Python', desc: 'Tetris-style game implemented with Pygame', longDesc: 'A Tetris-style puzzle game built with Pygame featuring falling columns, color matching mechanics, score tracking, and increasing difficulty levels.', school: true },
  { title: 'Senti-IMDB of Movie Reviews', desc: 'NLP project using NLTK and scikit-learn to classify movie reviews', longDesc: 'A sentiment analysis project using NLTK for text preprocessing and scikit-learn for classification. Trained on IMDB movie reviews to predict positive/negative sentiment.', school: true },
];

// ---- Nav Items ----
export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'schedule', label: 'SCHEDULE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'stats', label: 'STATS' },
  { id: 'showcase', label: 'SHOWCASE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'resume', label: 'CONTACT' },
];
