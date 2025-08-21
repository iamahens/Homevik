import React, { useState, useEffect, useRef } from 'react';

// SVG Icon for the quotation mark
const QuoteIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
    </svg>
);

// A new card component for the static grid layout
const TestimonialCard = ({ testimonial, isVisible, delay }) => {
    const cardClasses = `
        testimonial-card bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl h-full flex flex-col justify-between border border-slate-700/50 transition-all duration-700 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `;

    return (
        <div 
            className={cardClasses}
            style={{ transitionDelay: delay }}
        >
            <QuoteIcon className="w-16 h-16 text-slate-700/50 absolute top-6 left-6" />
            <p className="text-gray-300 text-lg italic z-10 relative">"{testimonial.text}"</p>
            <div className="flex items-center mt-6 z-10">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-slate-700"/>
                <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
            </div>
        </div>
    );
};

// Testimonials Section Component
const Testimonials = () => {
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

    const testimonials = [
        { name: 'Jane Smith', location: 'San Francisco, CA', text: "It's like living in the future. The system is so intuitive, it feels like an extension of our family. The installation was clean and professional.", avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Michael Davis', location: 'Austin, TX', text: 'The energy savings were immediate and substantial. Being able to control everything from my phone gives me incredible peace of mind.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Emily White', location: 'Miami, FL', text: 'The security system is phenomenal. It\'s robust, reliable, and the interface is beautiful. I feel safer than ever before. Worth every penny.', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop' }
    ];

    return (
        <section id="testimonials" ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] section-bg-pattern"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 transition-all duration-700 ease-in-out transform"
                     style={{ transitionDelay: '0.2s', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-cyan-400 font-semibold tracking-widest mb-2">CLIENT STORIES</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Loved By Homeowners Everywhere</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">We deliver an experience, not just a product. Our commitment is to quality, innovation, and your complete satisfaction.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard 
                            key={testimonial.name}
                            testimonial={testimonial}
                            isVisible={isVisible}
                            delay={`${0.4 + index * 0.2}s`}
                        />
                    ))}
                </div>
            </div>
            <style>{`
                .section-bg-pattern {
                    background-image: radial-gradient(circle at 1px 1px, #475569 1px, transparent 0);
                    background-size: 30px 30px;
                }
                .testimonial-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(0, 220, 255, 0.3);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
