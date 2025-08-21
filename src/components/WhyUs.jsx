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

// A new card component for the "Why Us" section
const BenefitCard = ({ icon, title, description, isVisible, delay }) => {
    return (
        <div 
            className={`benefit-card group transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <Icon name={icon} className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-bold text-slate-900">{title}</h4>
                    </div>
                </div>
                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out pt-0 group-hover:pt-4">
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
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

    const benefits = [
        { icon: 'solution', title: 'Innovative Technology', description: 'We use the latest tech to create a seamless smart home experience.' },
        { icon: 'expert', title: 'Customer-Centric Approach', description: 'Your needs are at the heart of everything we design and install.' },
        { icon: 'future', title: 'Future-Proof Systems', description: 'Our scalable solutions grow with you and your family’s needs.' },
        { icon: 'support', title: 'Lifetime Support', description: 'We are your long-term partner, offering dedicated support for life.' }
    ];

    return (
        <section id="why-us" ref={sectionRef} className="py-24 bg-white text-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div 
                        className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[550px]">
                            <img 
                                src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1974&auto=format&fit=crop" 
                                alt="Couple using a smart home device" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-left">
                        <div 
                            className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <h3 className="text-blue-600 font-semibold tracking-widest mb-2 uppercase">Why Choose Us</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Discover Our Commitment To Smart Living.
                            </h2>
                            <p className="text-slate-600 text-lg mb-8">
                                At Homevik, we believe in creating homes that are not just smart, but intelligent. Our mission is to simplify your life through state-of-the-art automation, tailored to your unique needs.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <BenefitCard 
                                    key={benefit.title} 
                                    {...benefit}
                                    isVisible={isVisible}
                                    delay={`${0.6 + index * 0.2}s`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
