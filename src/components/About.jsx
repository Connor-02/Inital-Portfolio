import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl text-accent font-bold mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-300 text-lg">
        I'm a Computer Science graduate from the University of Newcastle with a passion for crafting smart and practical software. I specialize in developing full-stack applications and building cybersecurity tools for real-world use.
      </p>
    </motion.section>
  );
}

export default About;
