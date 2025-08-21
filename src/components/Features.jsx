import React, { useState, useEffect, useRef } from 'react';

// Custom hook for detecting when an element is in the viewport
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isIntersecting];
};

// SVG Icon for the checkmark
const CheckIcon = () => (
    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

// A new component for the feature list items to match the inspiration
const FeaturePill = ({ title, description, isVisible, delay }) => {
    return (
        <div 
            className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <div className="bg-slate-800 p-2 rounded-full">
                        <CheckIcon />
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">{title}</h4>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
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
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
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
        { title: 'Automation Systems', description: 'Lighting, climate, and security that work in harmony.' },
        { title: 'Enhanced Comfort', description: 'Your home adapts to your needs, creating the perfect environment.' },
        { title: 'Security & Efficiency', description: 'Peace of mind and energy savings, seamlessly integrated.' },
    ];

    return (
        <section id="features" ref={sectionRef} className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column: Image */}
                    <div 
                        className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] transition-transform duration-300 hover:scale-105">
                            <img 
                                src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1887&auto=format&fit=crop" 
                                alt="Man interacting with a smart home device" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-left relative">
                        <div 
                            className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <div className="p-8">
                                <h3 className="text-cyan-400 font-semibold tracking-widest mb-2 uppercase">About Automated Home Solutions</h3>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    We Specialize In Designing And Installing State-Of-The-Art Home Automation Systems.
                                </h2>
                                <p className="text-gray-400 text-lg mb-8">
                                    Our system integrates with a variety of devices and systems, including lights, locks, thermostat, and security cameras, giving you a comprehensive and customizable smart home experience.
                                </p>
                            </div>
                        </div>
                        
                        <div className={`bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-slate-700/50 transition-all duration-700 ease-in-out transform md:-ml-54 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.6s' }}>
                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <FeaturePill 
                                        key={feature.title} 
                                        {...feature}
                                        isVisible={isVisible}
                                        delay={`${0.8 + index * 0.2}s`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
