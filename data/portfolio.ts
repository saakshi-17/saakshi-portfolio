import { Project, Skill, Education } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "MERN To-Do Application",
    description: "Full-stack CRUD application built with React frontend, Node.js/Express backend, MongoDB database, and JWT-based user authentication. Features include task creation, editing, deletion, and user management.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "CSS3"],
    featured: true
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Responsive portfolio website built with React and CSS to showcase projects and skills. Optimized for performance with image loading optimization and fast page speeds.",
    technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
    featured: true
  },
  {
    id: 3,
    title: "Educational Landing Page Clone",
    description: "Pixel-perfect clone of a modern landing page design focusing on responsive layout, cross-browser compatibility, and modern CSS techniques.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS3", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "Responsive Design", level: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 50, category: "backend" },
  { name: "Express.js", level: 50, category: "backend" },
  { name: "MongoDB", level: 50, category: "backend" },
  { name: "REST APIs", level: 50, category: "backend" },
  
  // Tools
  { name: "Git", level: 80, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  
  // Soft Skills
  { name: "Problem Solving", level: 85, category: "soft" },
  { name: "Collaboration", level: 90, category: "soft" },
  { name: "Communication", level: 85, category: "soft" },
  { name: "Learning Agility", level: 95, category: "soft" }
];

export const education: Education = {
  degree: "B.Tech in Computer Science",
  institution: "SIR M. Visvesvaraya Institute of Technology",
  location: "Bengaluru, India",
  year: "2022-2026",
  status: "Currently in 3rd year"
};



export const personalInfo = {
  name: "Saakshi",
  title: "MERN Stack Developer",
  location: "Bengaluru, India",
  email: "aradhyasaakshi2004@gmail.com",
  phone: "+91 8709841850",
  summary: "Enthusiastic Computer Science undergraduate (3rd year) eager to launch a career as a Web Development Intern. Familiar with HTML, CSS, JavaScript, and React; with basic exposure to Node.js, Express, and MongoDB. Strong problem-solving skills and committed to writing clean code and learning best practices in a fast-paced, remote dev team."
};