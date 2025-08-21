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

// A new component for the numbered list items
const StepItem = ({ number, title, description, isVisible, delay }) => {
    return (
        <div 
            className={`step-item relative pl-12 transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: delay }}
        >
            <span className="absolute left-0 top-0 text-3xl font-bold text-slate-700">{`0${number}.`}</span>
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

// Bento Box Component for the image grid
const BentoBox = ({ className, imageUrl, altText, isVisible, delay }) => {
     const [ref, isCardVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div 
            ref={ref}
            className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out transform ${isCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className}`}
            style={{ transitionDelay: delay }}
        >
            <img 
                src={imageUrl} 
                alt={altText} 
                className="w-full h-full object-cover"
            />
        </div>
    );
};


// Why Us Section Component
const HowItWorks = () => {
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
        { title: 'Discovery', description: 'A deep dive into your lifestyle to architect a solution thats uniquely you.' },
        { title: 'integration', description: 'Our expert technicians ensure every component is installed and calibrated to perfection' },
        { title: 'empowerment', description: "We don't just hand you the keys. We empower you to master your new smart home ecosystem." },
        { title: 'Ongoing Support', description: "Our relationship doesn't end at installation. We provide lifetime support to ensure your smart home always runs smoothly." },
    ];

    return (
        <section id="why-us" ref={sectionRef} className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Bento Grid of Images */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[500px]">
                        <BentoBox 
                            className="col-span-1 row-span-2"
                            imageUrl="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1974&auto=format&fit=crop" 
                            altText="Couple using a smart home device"
                            isVisible={isVisible}
                            delay="0.2s"
                        />
                        <BentoBox 
                            className="col-span-1 row-span-1"
                            imageUrl="/phone.jpg" 
                            altText="Woman controlling smart home on her phone"
                            isVisible={isVisible}
                            delay="0.4s"
                        />
                        <BentoBox 
                            className="col-span-1 row-span-1"
                            imageUrl="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1887&auto=format&fit=crop" 
                            altText="Close up of a smart home interface"
                            isVisible={isVisible}
                            delay="0.6s"
                        />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-left">
                        <div 
                            className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <h3 className="text-cyan-400 font-semibold tracking-widest mb-2 uppercase">How We Work</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Experience Unparalleled Service And Cutting-Edge Technology.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                At Homevik, we believe in creating homes that are not just smart, but intelligent. Our mission is to simplify your life through state-of-the-art automation, tailored to your unique needs.
                            </p>
                        </div>
                        
                        <div className="bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-slate-700/50">
                             <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <StepItem 
                                        key={benefit.title} 
                                        number={index + 1}
                                        {...benefit}
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

export default HowItWorks;
