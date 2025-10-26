import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2>About Me</h2>
        <p>
          👋 Hey there! I'm a Full Stack Developer with expertise in 
          <strong> Java, JavaScript</strong>, and a suite of modern frameworks like 
          <strong> Spring Boot, React.js, and Kubernetes</strong>. 
          Whether it's backend optimizations, microservices, or frontend development, 
          I thrive on building scalable, high-performance applications.
        </p>
        <br />
        <p>
          Currently at <strong>Oracle</strong>, I am involved in the end-to-end 
          implementation of the <strong>Oracle Banking Routing Hub</strong>, exploring 
          multiple proof of concepts (POCs) to enhance efficiency and innovation. 
          From optimizing system performance to architecting microservices, 
          I enjoy solving complex technical challenges that drive business impact.
        </p>
        <br />
        <p>
          I’m always excited to tackle new challenges, collaborate with dynamic teams, 
          and explore cutting-edge solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;