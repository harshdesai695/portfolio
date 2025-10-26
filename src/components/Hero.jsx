import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-h1">
          Hi, I'm <span style={{ color: 'var(--accent-color)' }}>Harsh Desai</span>
        </h1>
        <p className="hero-p">
          I'm a Software Developer specializing in building robust, <br />
          scalable systems and innovative AI solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;