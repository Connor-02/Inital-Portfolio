import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-center">
      <h2 className="text-3xl text-accent font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 text-lg">Reach out via <a href="mailto:connor@example.com" className="text-primary underline">email</a> or connect on <a href="https://github.com/Connor-02" className="text-primary underline" target="_blank">GitHub</a> / <a href="https://linkedin.com/in/connormurray" className="text-primary underline" target="_blank">LinkedIn</a>.</p>
    </section>
  );
}

export default Contact;
