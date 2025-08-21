import React from 'react';

// Reusable card for this section with a uniform style and hover effect
const ControlCard = ({ icon, title, description }) => {
    // Updated hover effect to a pink-to-purple gradient
    const cardClasses = `p-8 rounded-lg text-center flex flex-col items-center transition-all duration-300 bg-slate-800/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600`;

    return (
        <div className={cardClasses}>
            <img src={icon} alt={title} className="h-24 mb-4"/>
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};

// Main Control Options Section Component
export default function ControlOptions() {
    const controls = [
        {
            icon: 'https://placehold.co/100x100/334155/FFFFFF?text=Remote',
            title: 'Remote Control',
            description: 'Traditional remote control provides maximum convenience in controlling your switches.'
        },
        {
            icon: 'https://placehold.co/100x100/FFFFFF/000000?text=App',
            title: 'App Control',
            description: 'Use our mobile app to control your lights and fans from anywhere. Wherever you go, your home is in your control.'
        },
        {
            icon: 'https://placehold.co/100x100/3B82F6/FFFFFF?text=Glass',
            title: 'Tempered Glass',
            description: 'A durable tempered glass panel with rounded edges resists heat, smudges, and fingerprints.'
        },
        {
            icon: 'https://placehold.co/100x100/E5E7EB/000000?text=Voice',
            title: 'Voice Control',
            description: 'Our Touch Switch lets you control devices with Amazon Alexa or Google Home.'
        }
    ];

    return (
        <section id="control-options" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {controls.map((control) => (
                        <ControlCard key={control.title} {...control} />
                    ))}
                </div>
            </div>
        </section>
    );
};
