import React from 'react';

// Card component for each control method
const ControlMethodCard = ({ title, description, bgImage }) => {
    return (
        <div 
            className="relative h-96 w-full rounded-lg overflow-hidden group cursor-pointer"
        >
            {/* Background Image using an <img> tag for better reliability */}
            <img 
                src={bgImage} 
                alt={title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            
            {/* Overlay for text readability */}
            <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out"></div>
            
            {/* Text Content Container */}
            <div className="absolute bg-black  bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-bold">{title}</h3>
                {/* Description slides up on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2">
                    <p className="text-gray-300">{description}</p>
                </div>
            </div>
        </div>
    );
};

// Main component for the section
export default function InteractiveControl() {
    const controlMethods = [
        {
            title: 'Phone',
            description: 'Full control of your home from the palm of your hand. Our intuitive app lets you manage everything, from anywhere in the world.',
            bgImage: '/phone.jpg'
        },
        {
            title: 'End Devices',
            description: 'Offers the convenience of end devices like the Magic Cube and Dash Button. Effortlessly trigger your favorite scenes or routines with a simple tap or gesture.',
            bgImage: '/samrthub.jpg'
        },
        {
            title: 'Voice Command',
            description: 'Go hands-free with seamless integration with Amazon Alexa and Google Home. Just speak to control your lights, climate, and more.',
            bgImage: '/voiceassistant.jpg'
        },
        {
            title: 'Existing Switch',
            description: 'No need to replace everything. Our smart modules work with your existing switches, giving them a smart upgrade without changing your home\'s aesthetic.',
            bgImage: '/switch.jpg'
        },
        {
            title: 'Television',
            description: 'Integrate your entertainment. Control your TV, sound system, and streaming services as part of your smart home scenes.',
            bgImage: '/tv.jpg'
        }
    ];

    return (
        <section id="interactive-control" className="bg-slate-900 py-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
                {controlMethods.map(method => (
                    <ControlMethodCard key={method.title} {...method} />
                ))}
            </div>
        </section>
    );
}
