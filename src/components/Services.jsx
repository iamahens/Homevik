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
        security: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
        lighting: <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
        entertainment: <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        climate: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m8-6h2M4 12H2m15.364-5.364l1.414-1.414M4.222 19.778l1.414-1.414m12.728 0l-1.414-1.414M5.636 5.636l-1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z" />,
        voice: <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
        energy: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            {icons[name]}
        </svg>
    );
};

// A new card component for the services section
const ServiceCard = ({ icon, title, description, image, isVisible, delay, isHighlighted }) => {
    return (
        <div
            ref={useOnScreen({ threshold: 0.1 })[0]}
            className={`service-card relative rounded-2xl p-8 transition-all duration-700 ease-in-out transform overflow-hidden group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: delay }}
        >
            <div className={`absolute inset-0 transition-colors duration-500 ${isHighlighted ? 'bg-blue-600' : 'bg-slate-800'}`}></div>
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            />
            <div className="relative z-10">
                <div className={`p-3 rounded-lg inline-block mb-4 transition-colors duration-500 ${isHighlighted ? 'bg-blue-700' : 'bg-slate-700'}`}>
                    <Icon name={icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className={`${isHighlighted ? 'text-blue-200' : 'text-gray-400'}`}>{description}</p>
                <a href="#" className={`inline-flex items-center mt-4 font-semibold transition-colors duration-300 ${isHighlighted ? 'text-white hover:text-blue-200' : 'text-cyan-400 hover:text-cyan-300'}`}>
                    Learn More <span>&rarr;</span>
                </a>
            </div>
        </div>
    );
};

// Services Section Component
const Services = () => {
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
            { threshold: 0.1 }
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

    const services = [
        { icon: 'security', title: 'Security Systems', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop', isHighlighted: true },
        { icon: 'lighting', title: 'Smart Lighting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop' },
        { icon: 'entertainment', title: 'Home Entertainment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop' },
        { icon: 'climate', title: 'Climate Control', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop' },
        { icon: 'voice', title: 'Voice Integration', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop' },
        { icon: 'energy', title: 'Energy Management', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop' },
    ];

    return (
        <section id="services" ref={sectionRef} className="py-24 bg-slate-900 text-white relative">
            <div
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop)` }}
            ></div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Heading placed above the grid */}
                <div className={`text-center mb-12 transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.2s' }}>
                    <h3 className="text-cyan-400 font-semibold tracking-widest mb-2 uppercase">Our Smart Home Services</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Our Highlight Key Services Smart Home Solution For You.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                {/* Services Grid below the heading */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            isVisible={isVisible}
                            delay={`${0.4 + index * 0.1}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;