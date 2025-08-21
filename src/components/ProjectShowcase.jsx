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


// SVG Icon for the "View Project" link
const ArrowIcon = () => (
    <svg className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
);

// A new, more visually appealing card component for this section
const ProjectCard = ({ project, className, isVisible, delay }) => {
    const [ref, isCardVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div 
            ref={ref}
            className={`project-card relative rounded-2xl overflow-hidden group transform transition-all duration-700 ease-in-out ${isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={{ transitionDelay: delay }}
        >
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300"></div>
            
            <div className="absolute bottom-0 left-0 p-8 text-white w-full transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="description-container max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <a href="#" className="inline-flex items-center font-semibold text-blue-400 group">
                        View Project <ArrowIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

// Project Showcase Section Component
const ProjectShowcase = () => {
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
                threshold: 0.1 // Trigger when 10% of the section is visible
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

    const projects = [
        { image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop', title: 'Living Room Automation', description: 'Automated lighting, blinds, and entertainment system.' },
        { image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop', title: 'Intelligent Kitchen', description: 'Voice-controlled appliances and dynamic lighting.' },
        { image: '/kitchen.jpg', title: 'Cinema Experience', description: 'One-touch control for projection, sound, and seating.' },
        { image: '/banner.jpg', title: 'Secure Exteriors', description: 'Smart cameras, locks, and landscape lighting.' },
    ];

    return (
        <section id="showcase" ref={sectionRef} className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 transition-all duration-700 ease-in-out transform"
                     style={{ transitionDelay: '0.2s', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-blue-600 font-semibold tracking-widest mb-2">OUR WORK</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">See Our Solutions in Action</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We transform houses into intelligent homes. Explore some of our recent projects.</p>
                </div>
                
                {/* Asymmetric and Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <ProjectCard project={projects[0]} className="h-96" isVisible={isVisible} delay="0.4s" />
                    </div>
                    <ProjectCard project={projects[1]} className="h-96" isVisible={isVisible} delay="0.6s" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                     <ProjectCard project={projects[2]} className="h-96" isVisible={isVisible} delay="0.8s" />
                     <div className="lg:col-span-2">
                          <ProjectCard project={projects[3]} className="h-96" isVisible={isVisible} delay="1s" />
                     </div>
                </div>
            </div>
            <style>{`
                .project-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 1rem;
                    border: 2px solid transparent;
                    transition: border-color 0.3s ease-in-out;
                }
                .project-card:hover::after {
                    border-color: rgba(59, 130, 246, 0.5);
                }
            `}</style>
        </section>
    );
};

export default ProjectShowcase;
