import React, { useState, useEffect, useRef } from 'react';

// SVG Icons Component
const Icon = ({ name, className }) => {
    const icons = {
        solution: <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414M19.778 19.778l-1.414-1.414M19.778 5.636l-1.414 1.414M5.636 19.778l-1.414-1.414M12 12a6 6 0 110-12 6 6 0 010 12z" />,
        expert: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
        support: <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        future: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {icons[name]}
        </svg>
    );
};

// A new, more visually appealing card component for this section
const WhyUsCard = ({ icon, title, description, isVisible, delay }) => {
    return (
        <div 
            className={`why-us-card bg-slate-800/40 backdrop-blur-lg p-8 rounded-2xl text-left border border-slate-700/50 transition-all duration-700 ease-in-out relative overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="flex items-center mb-4">
                <div className="icon-container mr-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                    <Icon name={icon} className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">{description}</p>
            <div className="glow-effect absolute top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl opacity-0 transition-opacity duration-500"></div>
        </div>
    );
};

// Why Us Section Component
const WhyUs = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once it's visible
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const points = [
        { icon: 'solution', title: 'Bespoke Solutions', description: 'No cookie-cutter systems. We design a solution that is perfectly tailored to your home and lifestyle.' },
        { icon: 'expert', title: 'Expert Technicians', description: 'Our certified team is passionate about technology and dedicated to a flawless installation.' },
        { icon: 'support', title: 'Lifetime Support', description: "We're your long-term partner, offering dedicated support and system updates for life." },
        { icon: 'future', title: 'Future-Proof Tech', description: 'We use scalable, open-platform technology that grows with you and your home.' }
    ];

    return (
        <section id="why-us" ref={sectionRef} className="py-24 bg-slate-900/70">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 transition-all duration-700 ease-in-out transform"
                     style={{ transitionDelay: '0.2s', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-cyan-400 font-semibold tracking-widest mb-2">OUR PROMISE</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Homevik?</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We deliver an experience, not just a product. Our commitment is to quality, innovation, and your complete satisfaction.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, index) => (
                        <WhyUsCard
                            key={point.title}
                            {...point}
                            isVisible={isVisible}
                            delay={`${0.4 + index * 0.2}s`}
                        />
                    ))}
                </div>
            </div>
            <style>{`
                .why-us-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    border-color: rgba(0, 220, 255, 0.3);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }
                .why-us-card:hover .glow-effect {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(2);
                }
            `}</style>
        </section>
    );
};

export default WhyUs;