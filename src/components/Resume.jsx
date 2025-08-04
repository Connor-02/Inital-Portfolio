import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-gray-900 text-center">
      <h2 className="text-3xl text-accent font-bold mb-6">My Resume</h2>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="/src/assets/Connor_Murray_Resume.pdf"
          title="Connor Murray Resume"
          className="w-full h-[700px] border-2 border-gray-700 rounded"
        />
        <a
          href="/src/assets/Connor_Murray_Resume.pdf"
          download
          className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded hover:bg-accent transition"
        >
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}

export default Resume;
