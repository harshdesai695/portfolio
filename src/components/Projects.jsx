import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const projects = [
  {
    name: 'k8s-agent',
    description:
      'An agentic AI made with Python using the LangChain framework that helps to manage Kubernetes resources using natural language.',
    tech: ['Python', 'LangChain', 'Kubernetes'],
    url: 'https://github.com/harshdesai695/k8s-agent',
  },
  {
    name: 'MyKart',
    description:
      'Designed and developed Spring Boot microservices with service discovery (Eureka) and centralized configuration management. Deployed on a Kubernetes environment on an Azure VM.',
    tech: ['React', 'Spring Boot', 'Docker', 'MongoDB', 'Kubernetes', 'Azure'],
    url: 'https://github.com/harshdesai695/My-Kart_Backend',
  },
  {
    name: 'Budget Tracker',
    description:
      'A Flutter-based personal finance app that helps users track expenses and manage budgets. Features Google Sign-In, category-based tracking, and real-time data sync with Firebase.',
    tech: ['Flutter', 'Firebase', 'Google Sign-In'],
    url: 'https://github.com/harshdesai695/budget_tracker',
  },
];


const ProjectCard = ({ project, variants }) => (
  <motion.div
    className="project-card"
    variants={variants}
    whileHover={{ scale: 1.03 }} 
  >
    <h3>
      {project.name}
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </h3>
    <p>{project.description}</p>
    <div className="project-tech">
      {project.tech.map((t) => (
        <span key={t} className="project-tech-tag">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="section">
      <div className="section-container">
        <h2>Projects</h2>
       
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;