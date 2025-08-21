import React, { useState, useRef } from 'react';

// Helper for Tailwind class names
const cx = (...classes) => classes.filter(Boolean).join(' ');

// SVG Icons Component - Only including the chevron icon needed for the FAQ
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
const FaqItem = ({ question, answer, delay }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div 
            className="faq-item animate-fade-in-up bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-lg transition-all duration-300 ease-in-out"
            style={{ animationDelay: delay }}
        >
            <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg p-6 text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${question.replace(/\s+/g, '-')}`}
            >
                <span>{question}</span>
                <Icon name="chevronDown" className={cx('h-5 w-5 transition-transform duration-300', isOpen && 'rotate-180')} />
            </button>
            <div
                ref={contentRef}
                id={`faq-content-${question.replace(/\s+/g, '-')}`}
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
            >
                <p className="text-gray-400 px-6 pb-6">{answer}</p>
            </div>
        </div>
    );
};

// Main FAQ Section Component
export default function FAQ() {
    const faqs = [
        { q: 'How much does a smart home system cost?', a: 'Costs vary widely based on the size of your home and the features you want. We offer a free consultation to provide a custom quote with no obligation. Our packages can start from a few thousand dollars for a basic setup to comprehensive systems for larger homes.' },
        { q: 'Can you integrate with my existing devices?', a: "Absolutely. We specialize in creating cohesive systems that work with a wide range of popular smart devices from brands like Google, Amazon, Apple, Sonos, and more. During our consultation, we'll assess your current tech and build a seamless integration plan." },
        { q: 'How long does installation take?', a: 'Installation time depends on the complexity of the project. A simple system might take a single day, while a full-home automation project could take several days. We always provide a clear timeline upfront and work efficiently to minimize disruption to your routine.' }
    ];

    return (
        <section id="faq" className="py-24 bg-slate-900/70 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] section-bg-pattern"></div>
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h3 className="text-cyan-400 font-semibold tracking-widest mb-2">HAVE QUESTIONS?</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FaqItem 
                            key={i} 
                            question={faq.q} 
                            answer={faq.a} 
                            delay={`${0.4 + i * 0.15}s`}
                        />
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                .section-bg-pattern {
                    background-image: radial-gradient(circle at 1px 1px, #475569 1px, transparent 0);
                    background-size: 30px 30px;
                }
                .faq-item:hover {
                    border-color: rgba(0, 220, 255, 0.3);
                    transform: translateY(-5px);
                }
            `}</style>
        </section>
    );
};
