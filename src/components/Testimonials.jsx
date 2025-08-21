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

// Star Rating Component
const StarRating = ({ rating = 5 }) => (
    <div className="flex text-yellow-400">
        {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);


// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonial-card flex-shrink-0 w-full sm:w-80 bg-blue-600 p-6 rounded-2xl shadow-lg">
            <StarRating />
            <p className="text-blue-200 my-4">"{testimonial.text}"</p>
            <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover"/>
                <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-blue-200">CLIENTS</p>
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

    const testimonials = [
        { name: 'Jane Smith', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Michael Davis', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Emily White', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop' },
        { name: 'John Doe', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
    ];
    
    // Duplicate testimonials for a seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" ref={sectionRef} className="py-24 bg-white text-slate-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div 
                        className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[550px]">
                            <img 
                                src="/kitchen.jpg" 
                                alt="Woman relaxing in a smart home" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text and Carousel */}
                    <div className="text-left">
                        <div 
                            className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <h3 className="text-blue-600 font-semibold tracking-widest mb-2 uppercase">Client Reviews</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Take A Look Our Best Review Feedback From Clients.
                            </h2>
                            <p className="text-slate-600 text-lg mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        
                        {/* Looping Carousel */}
                        <div className="relative h-64 overflow-hidden">
                            <div className="flex animate-scroll">
                                {duplicatedTestimonials.map((testimonial, index) => (
                                    <div key={index} className="px-4">
                                        <TestimonialCard testimonial={testimonial} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${testimonials.length * 352}px); } /* 320px card width + 32px gap */
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
