import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Languages": ["JavaScript", "Java", "Dart", "Python", "SQL", "Shell"],
  "Frameworks": ["Spring Boot", "Spring Security", "React.js", "Node.js", "Next.js"],
  "AI Frameworks": ["LangChain", "N8N"],
  "Cloud & Containers": ["Microsoft Azure", "Docker", "Kubernetes", "Istio", "Firebase"],
  "Databases": ["OracleDB", "MongoDB"],
  "CI/CD": ["Jenkins", "Gradle", "Helm", "Github Actions", "ArgoCD"],
  "Monitoring": ["ELK Stack", "Prometheus", "Grafana", "Zipkin"],
  "Other Tools": ["Apache Kafka", "Apache Camel", "Git", "Github Copilot"]
};

const Skills = () => {
  return (
    <section className="section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Skills</h2>
        <div className="skills-container">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="skill-category">
              <h3 style={{ fontSize: '1.2rem' }}>{category}</h3>
              <ul style={{ listStyle: 'none' }}>
                {list.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;