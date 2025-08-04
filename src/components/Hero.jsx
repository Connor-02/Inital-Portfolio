import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-primary mb-4"
      >
        Hi, I'm Connor Murray
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-300"
      >
        Computer Science Graduate | Developer | Cybersecurity Enthusiast
      </motion.p>
    </section>
  );
}

export default Hero;
