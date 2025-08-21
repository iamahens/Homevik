import React from 'react';
import GlassCard from './GlassCard';

// Why Us Section Component
const WhyUs = () => {
    const points = [
        { title: 'Bespoke Solutions', description: 'No cookie-cutter systems. We design a solution that is perfectly tailored to your home and lifestyle.' },
        { title: 'Expert Technicians', description: 'Our certified team is passionate about technology and dedicated to a flawless installation.' },
        { title: 'Lifetime Support', description: "We're your long-term partner, offering dedicated support and system updates for life." },
        { title: 'Future-Proof Tech', description: 'We use scalable, open-platform technology that grows with you and your home.' }
    ];
    return (
        <section id="why-us" className="py-24 bg-slate-900/70">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Why SmartHome?</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We deliver an experience, not just a product. Our commitment is to quality, innovation, and your complete satisfaction.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map(point => (
                        <GlassCard key={point.title} className="p-6 rounded-xl text-center">
                            <h3 className="text-lg font-semibold mb-2 text-cyan-400">{point.title}</h3>
                            <p className="text-gray-400 text-sm">{point.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
