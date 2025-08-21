import React from 'react';
import GlassCard from './GlassCard';

// Project Showcase Section Component
const ProjectShowcase = () => {
    const projects = [
        { image: '/banner.jpg', title: 'Living Room Automation', description: 'Automated lighting, blinds, and entertainment system.' },
        { image: '/kitchen.jpg', title: 'Intelligent Kitchen', description: 'Voice-controlled appliances and dynamic lighting.' },
        { image: 'cinema.jpg', title: 'Cinema Experience', description: 'One-touch control for projection, sound, and seating.' },
        { image: 'camera.jpg', title: 'Secure Exteriors', description: 'Smart cameras, locks, and landscape lighting.' },
    ];
    return (
        <section id="showcase" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">See Our Solutions in Action</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We transform houses into intelligent homes. Explore some of our recent projects.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(project => (
                        <GlassCard key={project.title} className="rounded-xl overflow-hidden group">
                            <div className="relative">
                                <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-gray-300">{project.description}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
