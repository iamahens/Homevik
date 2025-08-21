import React from 'react';

// Hero Section Component
const Hero = () => (
  <section className="text-white min-h-screen flex items-center" style={{background: "linear-gradient(rgba(13, 17, 23, 0.8), rgba(21, 26, 33, 0.8)), url('/banner.jpg') no-repeat center center/cover"}}>
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Your Home, <span className="text-cyan-400" style={{textShadow: '0 0 8px rgba(0, 220, 255, 0.7)'}}>Intelligently Reimagined.</span>
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-400">Step into the future with seamless automation that anticipates your needs. Experience true comfort, security, and efficiency.</p>
      <a href="#contact" className="bg-cyan-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-cyan-600 transition duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">Begin Your Transformation</a>
    </div>
  </section>
);

export default Hero;
