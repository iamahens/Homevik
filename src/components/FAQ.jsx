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

// Helper for Tailwind class names
const cx = (...classes) => classes.filter(Boolean).join(' ');

// SVG Icons Component
const Icon = ({ name, className }) => {
  const icons = {
    chevronDown: <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      {icons[name]}
    </svg>
  );
};

// FAQ Item Component with Animation
const FaqItem = ({ faq, isOpen, onClick }) => {
    const contentRef = useRef(null);

    return (
        <div className="faq-item border border-slate-700/50 rounded-lg overflow-hidden transition-all duration-300">
            <button
                className={`w-full flex justify-between items-center text-left font-semibold text-lg p-6 transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-slate-800/50 text-white'}`}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{faq.q}</span>
                <Icon name="chevronDown" className={cx('h-5 w-5 transition-transform duration-300', isOpen && 'rotate-180')} />
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out bg-slate-800/50"
                style={{ maxHeight: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px' }}
            >
                <p className="text-gray-400 p-6">{faq.a}</p>
            </div>
        </div>
    );
};

// Main FAQ Section Component
export default function FAQ() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);

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

    const faqs = [
        { q: 'What is the typical installation time?', a: 'Installation time depends on the complexity of the project. A simple system might take a single day, while a full-home automation project could take several days. We always provide a clear timeline upfront and work efficiently to minimize disruption to your routine.' },
        { q: 'Can I upgrade my existing system in the future?', a: "Absolutely. We specialize in creating scalable systems that can grow with your needs. Whether you want to add new devices or expand to other rooms, we can seamlessly integrate new features into your existing setup." },
        { q: 'How much does a smart home system cost?', a: 'Costs vary widely based on the size of your home and the features you want. We offer a free consultation to provide a custom quote with no obligation.' },
    ];

    return (
        <section id="faq" ref={sectionRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Bento Grid */}
                    <div className="grid grid-cols-2 gap-6 h-full">
                        <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
                            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Team discussing plans" className="w-full h-full object-cover"/>
                        </div>
                        <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
                            <img src="/faq.jpg" alt="Hands using a tablet" className="w-full h-full object-cover"/>
                        </div>
                        <div className={`col-span-2 p-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
                            <h3 className="text-2xl font-bold text-white mb-2">24/7 Dedicated Team Support</h3>
                            <p className="text-cyan-100">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    
                    {/* Right Column: Text and Accordion */}
                    <div className="text-left">
                        <div className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.3s' }}>
                            <h3 className="text-cyan-400 font-semibold tracking-widest mb-2 uppercase">Service FAQs</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Asked Questions About Our Smart Home Solutions.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${0.5 + i * 0.2}s` }}>
                                    <FaqItem 
                                        faq={faq} 
                                        isOpen={openIndex === i}
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
