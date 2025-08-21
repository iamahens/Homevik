import React from 'react';
import GlassCard from './GlassCard';

// Testimonials Section Component
const Testimonials = () => {
    const testimonials = [
        { name: 'Jane Smith', location: 'San Francisco, CA', text: "It's like living in the future. The system is so intuitive, it feels like an extension of our family. The installation was clean and professional.", avatar: 'JS' },
        { name: 'Michael Davis', location: 'Austin, TX', text: 'The energy savings were immediate and substantial. Being able to control everything from my phone gives me incredible peace of mind.', avatar: 'MD' },
        { name: 'Emily White', location: 'Miami, FL', text: 'The security system is phenomenal. It\'s robust, reliable, and the interface is beautiful. I feel safer than ever before. Worth every penny.', avatar: 'EW' }
    ];
    return (
        <section id="testimonials" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Stories from Our Smart Homes</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <GlassCard key={testimonial.name} className="p-8 rounded-xl border-l-4 border-cyan-400">
                            <p className="text-gray-300 mb-6 text-lg">"{testimonial.text}"</p>
                            <div className="flex items-center">
                                <img src={`https://placehold.co/50x50/1E293B/94A3B8?text=${testimonial.avatar}`} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
