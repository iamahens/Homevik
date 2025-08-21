import React from 'react';
import GlassCard from './GlassCard';
import Icon from './Icon';

// Features Section Component
const Features = () => {
    const features = [
        { icon: 'light', title: 'Dynamic Ambiance', description: 'Lighting that syncs with your day, from sunrise hues to focused work light, all automated.' },
        { icon: 'climate', title: 'Predictive Comfort', description: 'Climate control that learns your patterns, saving energy while perfecting your environment.' },
        { icon: 'security', title: 'Vigilant Security', description: 'Proactive security that monitors, alerts, and gives you control from anywhere in the world.' }
    ];
    return (
        <section id="features" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">The Epicenter of Your Smart World</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">One intuitive system to orchestrate every aspect of your home environment, from anywhere on the globe.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(feature => (
                        <GlassCard key={feature.title} className="p-8 rounded-xl text-center">
                            <div className="flex justify-center mb-4">
                                <Icon name={feature.icon} className="w-12 h-12 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
