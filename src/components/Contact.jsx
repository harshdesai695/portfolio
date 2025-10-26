import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <motion.div
        className="section-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Get In Touch</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          I'm always open to discussing new projects and opportunities.
        </p>
        <div className="contact-links">
          <a href="mailto:harshdesai.hd123@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/harshdesaihd/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/harshdesai695" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/harshdesai695/" target="_blank" rel= "noopener noreferrer">LeetCode</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;