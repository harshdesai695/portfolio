import React from 'react';
import { motion } from 'framer-motion';


const projects = [
  {
    name: "k8s-agent",
    description: "An agentic AI made with Python using the LangChain framework that helps to manage Kubernetes resources using natural language.",
    tech: ["Python", "LangChain", "Kubernetes"],
    url: "https://github.com/harshdesai695/k8s-agent"
  },
  {
    name: "MyKart",
    description: "Designed and developed Spring Boot microservices with service discovery (Eureka) and centralized configuration management. Deployed on a Kubernetes environment on an Azure VM.",
    tech: ["React", "Spring Boot", "Docker", "MongoDB", "Kubernetes", "Azure"],
    url: "https://github.com/harshdesai695/MyKart"
  },
  {
    name: "Budget Tracker",
    description: "A Flutter-based personal finance app that helps users track expenses and manage budgets. Features Google Sign-In, category-based tracking, and real-time data sync with Firebase.",
    tech: ["Flutter", "Firebase", "Google Sign-In"],
    url: "https://github.com/harshdesai695/budget_tracker"
  }
];

const ProjectCard = ({ project }) => (
  <div style={{
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem'
  }}>
    <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
      {project.name}
      <a href={project.url} target="_blank" rel="noopener noreferrer">GitHub</a>
    </h3>
    <p>{project.description}</p>
    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {project.tech.map(t => (
        <span key={t} style={{
          background: 'var(--accent-color)',
          color: 'var(--primary-color)',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Projects</h2>
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;