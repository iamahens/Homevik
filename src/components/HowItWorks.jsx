import React from 'react';

// How It Works Section Component
const HowItWorks = () => {
    const steps = [
        { number: 1, title: 'Discovery', description: "A deep dive into your lifestyle to architect a solution that's uniquely you." },
        { number: 2, title: 'Flawless Integration', description: 'Our expert technicians ensure every component is installed and calibrated to perfection.' },
        { number: 3, title: 'Empowerment', description: "We don't just hand you the keys. We empower you to master your new smart home ecosystem." }
    ];
    return (
        <section id="how-it-works" className="py-24 bg-slate-900/70">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Your Journey to a Smarter Home</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A seamless, white-glove experience from concept to completion.</p>
                </div>
                <div className="relative flex flex-col md:flex-row justify-center items-center md:space-x-16">
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-cyan-500/30 hidden md:block"></div>
                    {steps.map(step => (
                        <div key={step.number} className="text-center max-w-xs z-10 mb-12 md:mb-0">
                            <div className="bg-slate-800 border-2 border-cyan-500 text-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 shadow-lg shadow-cyan-500/20">{step.number}</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
