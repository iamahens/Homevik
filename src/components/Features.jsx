import React, { useState, useEffect, useRef } from 'react';

// SVG Icons Component
const Icon = ({ name, className }) => {
    const icons = {
        light: <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
        climate: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m8-6h2M4 12H2m15.364-5.364l1.414-1.414M4.222 19.778l1.414-1.414m12.728 0l-1.414-1.414M5.636 5.636l-1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z" />,
        security: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {icons[name]}
        </svg>
    );
};

// A new, more visually appealing card component for this section
const FeatureCard = ({ icon, title, description, isVisible, delay }) => {
    return (
        <div 
            className={`feature-card bg-slate-800/40 backdrop-blur-lg p-8 rounded-2xl text-center border border-slate-700/50 transition-all duration-700 ease-in-out relative transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="icon-container mb-6 inline-block p-4 rounded-full transition-all duration-300 ease-in-out" style={{ transformStyle: 'preserve-3d' }}>
                <Icon name={icon} className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};

// Features Section Component
const Features = () => {
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
                root: null,
                rootMargin: '0px',
                threshold: 0.2 // Trigger when 20% of the section is visible
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

    const features = [
        { icon: 'light', title: 'Dynamic Ambiance', description: 'Lighting that syncs with your day, from sunrise hues to focused work light, all automated.' },
        { icon: 'climate', title: 'Predictive Comfort', description: 'Climate control that learns your patterns, saving energy while perfecting your environment.' },
        { icon: 'security', title: 'Vigilant Security', description: 'Proactive security that monitors, alerts, and gives you control from anywhere in the world.' }
    ];

    return (
        <section id="features" ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] section-bg-pattern"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 transition-all duration-700 ease-in-out transform"
                     style={{ transitionDelay: '0.2s', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-cyan-400 font-semibold tracking-widest mb-2">CORE PILLARS</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">The Epicenter of Your Smart World</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">One intuitive system to orchestrate every aspect of your home environment, from anywhere on the globe.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                            isVisible={isVisible}
                            delay={`${0.4 + index * 0.2}s`}
                        />
                    ))}
                </div>
            </div>
            <style>{`
                .feature-card .icon-container {
                    background: radial-gradient(circle, rgba(0, 220, 255, 0.1) 0%, rgba(0, 220, 255, 0) 70%);
                }
                .feature-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                }
                .feature-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 1rem; /* rounded-2xl */
                    padding: 2px;
                    background: linear-gradient(45deg, rgba(0, 220, 255, 0), rgba(0, 220, 255, 0.5), rgba(0, 220, 255, 0));
                    -webkit-mask: 
                        linear-gradient(#fff 0 0) content-box, 
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                .feature-card:hover::before {
                    opacity: 1;
                }
                .feature-card:hover .icon-container {
                    transform: scale(1.1) translateZ(20px);
                }
                .section-bg-pattern {
                    background-image: radial-gradient(circle at 1px 1px, #475569 1px, transparent 0);
                    background-size: 30px 30px;
                }
            `}</style>
        </section>
    );
};

export default Features;