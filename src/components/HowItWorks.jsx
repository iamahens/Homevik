import React, { useState, useEffect, useRef } from 'react';

// SVG Icons Component
const Icon = ({ name, className }) => {
    const icons = {
        discovery: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
        integration: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
        empowerment: <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1.258a1 1 0 01-.97-1.243l1.263-6.318a1 1 0 01.97-.757H7M15 7V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0h6" />,
        support: <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {icons[name]}
        </svg>
    );
};

// A new, more visually appealing card component for this section
const StepCard = ({ icon, number, title, description, isVisible, delay }) => {
    return (
        <div 
            className={`step-card relative pl-16 transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="icon-wrapper absolute top-0 left-0 w-12 h-12 flex items-center justify-center bg-slate-800 rounded-full border-2 border-slate-700">
                <Icon name={icon} className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};

// How It Works Section Component
const HowItWorks = () => {
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

    const steps = [
        { icon: 'discovery', number: 1, title: 'Discovery', description: "A deep dive into your lifestyle to architect a solution that's uniquely you." },
        { icon: 'integration', number: 2, title: 'Flawless Integration', description: 'Our expert technicians ensure every component is installed and calibrated to perfection.' },
        { icon: 'empowerment', number: 3, title: 'Empowerment', description: "We don't just hand you the keys. We empower you to master your new smart home ecosystem." },
        { icon: 'support', number: 4, title: 'Ongoing Support', description: "Our relationship doesn't end at installation. We provide lifetime support to ensure your smart home always runs smoothly." }
    ];
    return (
        <section id="how-it-works" ref={sectionRef} className="py-24 bg-slate-900/70">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 transition-all duration-700 ease-in-out transform"
                     style={{ transitionDelay: '0.2s', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-cyan-400 font-semibold tracking-widest mb-2">OUR PROCESS</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Your Journey to a Smarter Home</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A seamless, white-glove experience from concept to completion.</p>
                </div>
                
                <div className="relative max-w-2xl mx-auto">
                    {/* The connecting line */}
                    <div className="timeline-connector absolute top-0 left-6 w-0.5 h-full bg-slate-700"></div>
                    
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <StepCard 
                                key={step.number} 
                                {...step}
                                isVisible={isVisible}
                                delay={`${0.4 + index * 0.2}s`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                .step-card:hover .icon-wrapper {
                    border-color: #22d3ee; /* cyan-400 */
                    box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
                    transform: scale(1.1);
                }
                .icon-wrapper {
                    transition: all 0.3s ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
