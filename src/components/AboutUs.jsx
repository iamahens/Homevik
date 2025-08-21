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

// Bento Box Component with scroll animation
const BentoBox = ({ className, imageUrl, altText, bgColor, delay }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

    const boxContent = imageUrl ? (
        <img 
            src={imageUrl} 
            alt={altText} 
            className="w-full h-full object-cover"
        />
    ) : null;

    return (
        <div 
            ref={ref}
            className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ backgroundColor: bgColor, animationDelay: delay }}
        >
            {boxContent}
        </div>
    );
};


// About Us Section Component
const AboutUs = () => {
    return (
        <section id="about-us" className="py-24 bg-white text-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* LEFT COLUMN: Text Content */}
                    <div className="text-center md:text-left">
                        <p className="text-cyan-400 text-2xl md:text-2xl font-bold mb-4">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            With The Latest Technological Intelligence
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            At <strong>Homevik</strong>, our system integrates with a wide variety of devices and systems, including lights, locks, thermostats, and security cameras, giving you a comprehensive and customizable smart home experience. Plus, with advanced features like voice control, you can manage your home hands-free, making it even more convenient to use.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Bento Box Collage with a 5-column, 4-row grid for more flexibility */}
                    <div className="grid grid-cols-5 grid-rows-4 gap-4 h-[500px]">
                        <BentoBox 
                            className="col-span-3 row-span-3" 
                            imageUrl="/banner.jpg" 
                            altText="Smart home speaker on a table"
                            delay="0.2s"
                        />
                        <BentoBox 
                            className="col-span-2 row-span-2" 
                            imageUrl="/kitchen.jpg" 
                            altText="Smart security camera on a wall"
                            delay="0.4s"
                        />
                        <BentoBox 
                            className="col-span-2 row-span-1" 
                            bgColor="#2C2C2C" // Dark color block - now shorter
                            delay="0.6s"
                        />
                        <BentoBox 
                            className="col-span-2 row-span-1" 
                            imageUrl="phone.jpg" 
                            altText="Smart fan"
                            delay="0.8s"
                        />
                        <BentoBox 
                            className="col-span-1 row-span-1" 
                            bgColor="#0052FF" // Blue box
                            delay="1s"
                        />
                        <BentoBox 
                            className="col-span-2 row-span-1" 
                            imageUrl="/switch.jpg" 
                            altText="Smart thermostat on a wall"
                            delay="1.2s"
                        />
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default AboutUs;