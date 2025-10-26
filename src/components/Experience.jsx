import React from 'react';
import { motion } from 'framer-motion';

const experience = {
  company: "Oracle", 
  role: "Software Developer", 
  duration: "June 2023 - Current", 
  points: [
    "Played a pivotal role in shaping the architecture of the Oracle Banking Routing Hub for HDFC Bank, leading to a successful implementation with 0 critical defects.", 
    "Migrated 700+ REST and SOAP services to a new platform efficiently using Agentic AI.",
    "Engineered a secure Role-Based Access Control (RBAC) system for 15+ screens.", 
    "Implemented logging and monitoring with the ELK Stack, reducing debug time by 80%.", 
    "Enhanced codebase performance by 75% through caching and optimized parsing techniques.", 
    "Received the highest rating of 'Outstanding' (5/5).", 
  ]
};

const Experience = () => {
  return (
    <section className="section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Experience</h2>
        <div>
          <h3>{experience.role} - <strong>{experience.company}</strong></h3>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{experience.duration}</p>
          <ul style={{ listStylePosition: 'inside', paddingLeft: '1rem' }}>
            {experience.points.map((point, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;