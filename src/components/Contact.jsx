import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaEnvelope size={30} />,
      href: "mailto:harshdesai.hd123@gmail.com",
      label: "Email",
      hoverColor: "#EA4335" // Gmail Red
    },
    {
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/harshdesaihd/",
      label: "LinkedIn",
      hoverColor: "#0A66C2" // LinkedIn Blue
    },
    {
      icon: <FaGithub size={30} />,
      href: "https://github.com/harshdesai695",
      label: "GitHub",
      hoverColor: "#ffffff" // White for GitHub on dark bg
    },
    {
      icon: <SiLeetcode size={30} />,
      href: "https://leetcode.com/u/Harsh_Desai/",
      label: "LeetCode",
      hoverColor: "#FFA116" // LeetCode Orange
    }
  ];

  return (
    <section className="section" style={{ textAlign: 'center', padding: '4rem 0' }}>
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={{ marginBottom: '1rem' }}>Get In Touch</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#ccc' }}>
          I'm always open to discussing new projects and opportunities.
        </p>

        <div 
          className="contact-links" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap' 
          }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('mailto') ? "_self" : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.1, color: link.hoverColor }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                style={{
                  padding: '1rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px'
                }}
              >
                {link.icon}
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;