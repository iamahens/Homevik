import React, { useState, useEffect, useRef } from 'react';

import localVideo from '/vdo1.mp4'; // <-- Add this line

// Hero Section Component - Fullscreen Video Design
const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const staggeredText = "The Magic of a Home That Listens.".split(" ").map((word, index) => (
        <span key={index} className="inline-block mr-4">
            {word.split("").map((char, charIndex) => (
                <span 
                    key={charIndex} 
                    className="animate-letter-reveal inline-block" 
                    style={{ animationDelay: `${0.5 + (index * 0.2) + (charIndex * 0.03)}s` }}
                >
                    {char}
                </span>
            ))}
        </span>
    ));

    return (
        <section 
            className="relative h-screen bg-slate-900 text-white overflow-hidden flex items-center justify-center" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Fullscreen Video Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover" 
                    // NOTE: The video 'src' must be a direct URL to a video file. 
                    // Local files cannot be imported this way in this environment.
                    // Replace this URL with a link to your own hosted video.
                    src={localVideo}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Increased Opacity Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Centered Content */}
            <div className="container mx-auto px-6 text-center z-20">
                <div className="max-w-3xl mx-auto">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 tracking-widest uppercase">
                            YOUR HOME'S NEW SUPERPOWER
                        </h2>
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
                            {staggeredText}
                        </h1>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                        <p className="text-lg md:text-xl text-gray-300 mb-8">
                            Imagine lights that dim for movie night, music that follows you from room to room, and a thermostat that knows your perfect temperature. This isn't the future—it's your new reality with Homevik.
                        </p>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                        <a 
                            href="#contact" 
                            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-12 rounded-full text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50"
                        >
                            Unlock the Magic
                        </a>
                    </div>
                </div>
            </div>

            {/* Interactive Mouse Follow Gradient (Subtle) */}
            <div 
                className="absolute inset-0 z-20 pointer-events-none" 
                style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 220, 255, 0.1), transparent 40%)` }}
            >
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                @keyframes letter-reveal {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .animate-letter-reveal {
                    opacity: 0;
                    animation: letter-reveal 0.5s forwards ease-out;
                }
            `}</style>
        </section>
    );
};

export default Hero;
