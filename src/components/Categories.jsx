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

// A new component for the category items
const CategoryCard = ({ title, imageUrl, delay }) => {
    const [ref, isCardVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div 
            ref={ref}
            className={`category-card text-center transition-all duration-700 ease-in-out transform ${isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: delay }}
        >
            <div className="relative w-40 h-40 mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-slate-800/50 rounded-full"></div>
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="absolute inset-0 w-full h-full object-cover rounded-full p-2"
                />
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
    );
};

// Categories Section Component
const Categories = () => {
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

    const categories = [
        { title: 'Smart Lighting', imageUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop' },
        { title: 'Security Cameras', imageUrl: 'https://images.unsplash.com/photo-1620004859892-1c8ae7f0b257?q=80&w=1964&auto=format&fit=crop' },
        { title: 'Smart Speakers', imageUrl: 'https://images.unsplash.com/photo-1588058708433-217a9c7316d3?q=80&w=1974&auto=format&fit=crop' },
        { title: 'Thermostats', imageUrl: 'https://images.unsplash.com/photo-1617103996533-5187af88b8a3?q=80&w=1964&auto=format&fit=crop' },
    ];

    return (
        <section id="categories" ref={sectionRef} className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 transition-all duration-700 ease-in-out transform"
                     style={{ transitionDelay: '0.2s', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
                    <h3 className="text-cyan-400 font-semibold tracking-widest mb-2">PRODUCT CATEGORIES</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Explore Our Smart Devices</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <CategoryCard 
                            key={category.title} 
                            {...category}
                            delay={`${0.4 + index * 0.2}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
