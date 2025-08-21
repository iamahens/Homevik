import React, { useState, useEffect, useRef } from 'react';

// A placeholder component for GlassCard, since its code wasn't provided.
// In a real application, you would import the actual GlassCard component.
const GlassCard = ({ children, className }) => (
    <div className={`p-8 rounded-xl bg-slate-800/50 backdrop-blur-lg ${className}`}>
        {children}
    </div>
);

// SVG Icons Component
const Icon = ({ name, className }) => {
    const icons = {
        phone: <path d="M21 16.42a1 1 0 01-.22.56l-3.21 3.21a2 2 0 01-2.83 0L10.36 15.6a.5.5 0 01-.1-.13l-4.5-4.5a2 2 0 010-2.83L8.32 5.2a1 1 0 01.56-.22h2.56c.46 0 .84.38.84.84v2.84a1 1 0 01-.13.43l-1.3 2.14a.5.5 0 00.1.66l2.12 2.12a.5.5 0 00.66.1l2.14-1.3a1 1 0 01.43-.13h2.84c.46 0 .84.38.84.84v2.56z" />,
        email: <path d="M3 8l7.89 5.26c.3.2.68.2.98 0L21 8m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {icons[name]}
        </svg>
    );
};

// Main Contact Section Component
const Contact = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Use IntersectionObserver to detect when the section enters the viewport
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

    // Helper for applying animation classes based on isVisible state
    const animateClasses = `transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] section-bg-pattern"></div>
            <div className="container mx-auto px-6 relative z-10">
                <GlassCard className={`rounded-xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${animateClasses}`} style={{ transitionDelay: '0.2s' }}>
                    <div>
                        <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${animateClasses}`} style={{ transitionDelay: '0.4s' }}>Ready to Evolve Your Home?</h2>
                        <p className={`text-gray-400 mb-8 ${animateClasses}`} style={{ transitionDelay: '0.6s' }}>Let's talk. Our experts are ready to design a bespoke automation system that fits your life perfectly. Get a free, no-obligation consultation today.</p>
                        <p className={`flex items-center mb-4 text-lg ${animateClasses}`} style={{ transitionDelay: '0.8s' }}><Icon name="phone" className="w-5 h-5 mr-3 text-cyan-400" /> (555) 123-4567</p>
                        <p className={`flex items-center text-lg ${animateClasses}`} style={{ transitionDelay: '1.0s' }}><Icon name="email" className="w-5 h-5 mr-3 text-cyan-400" /> contact@smarthome.com</p>
                    </div>
                    <GlassCard className={`p-8 rounded-lg bg-slate-900/50 ${animateClasses}`} style={{ transitionDelay: '0.6s' }}>
                        <form>
                            <div className="mb-5">
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 text-white" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 text-white" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">How can we help?</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 text-white"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-cyan-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg shadow-cyan-500/30">Send Inquiry</button>
                        </form>
                    </GlassCard>
                </GlassCard>
            </div>
            <style>{`
                .section-bg-pattern {
                    background-image: radial-gradient(circle at 1px 1px, #475569 1px, transparent 0);
                    background-size: 30px 30px;
                }
            `}</style>
        </section>
    );
};

export default Contact;
