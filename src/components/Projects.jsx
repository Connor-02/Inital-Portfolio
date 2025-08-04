import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-center">
      <h2 className="text-3xl text-accent font-bold mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary">Scam Email Detector</h3>
          <p className="text-gray-300 mt-2">Electron app that scans IMAP inboxes and flags phishing emails using trained ML classifiers.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary">Offline Volunteer Check-In</h3>
          <p className="text-gray-300 mt-2">Built using PowerApps and SQL for offline/online data sync at Science Challenge events.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
