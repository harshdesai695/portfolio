import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  Languages: ['JavaScript', 'Java', 'Dart', 'Python', 'SQL', 'Shell'],
  Frameworks: [
    'Spring Boot',
    'Spring Security',
    'React.js',
    'Node.js',
    'Next.js',
  ],
  'AI Frameworks': ['LangChain', 'N8N'],
  'Cloud & Containers': [
    'Microsoft Azure',
    'Docker',
    'Kubernetes',
    'Istio',
    'Firebase',
  ],
  Databases: ['OracleDB', 'MongoDB'],
  'CI/CD': ['Jenkins', 'Gradle', 'Helm', 'Github Actions', 'ArgoCD'],
  Monitoring: ['ELK Stack', 'Prometheus', 'Grafana', 'Zipkin'],
  'Other Tools': ['Apache Kafka', 'Apache Camel', 'Git', 'Github Copilot'],
};

const allSkills = Object.values(skillsData).flat();

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, 
    },
  },
};


const skillTagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
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

        <motion.div
          className="skills-tag-container"
          variants={skillsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
        >
          {allSkills.map((skill) => (
            <motion.div
              key={skill}
              className="skill-tag"
              variants={skillTagVariants}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'var(--accent-color)',
                color: 'var(--primary-color)',
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;