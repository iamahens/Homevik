import React, { useState, useEffect, useRef } from 'react';

// Star Rating Component (same as before)
const StarRating = ({ rating = 5 }) => (
    <div className="flex text-yellow-400">
        {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

// Testimonial Card Component (same as before)
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md h-full flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:shadow-lg">
            <div className="mb-4">
                <StarRating />
                <p className="text-gray-700 mt-4 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
            <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-500"/>
                <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Satisfied Client</p>
                </div>
            </div>
        </div>
    );
};

// Testimonials Carousel Component
const TestimonialsCarousel = () => {
    const testimonials = [
        { name: 'Michael Davis', text: "The team was professional and the installation was quick and clean. Our new security system gives us complete peace of mind, and the mobile app is incredibly easy to use.", avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Emily White', text: "We love how we can manage everything from our phones, from the lights to the thermostat. It's truly a next-level experience. Thank you, Homevik, for a great system!", avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Jane Smith', text: "Homevik transformed our house into a smart home effortlessly. The seamless integration and intuitive control make our daily life so much easier. Highly recommend their services!", avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Alex Johnson', text: "Absolutely thrilled with our new smart lighting system. The customization options are amazing, and it's a huge energy saver. Five stars for Homevik's innovation!", avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop' },
        { name: 'Sarah Lee', text: "Installation was a breeze, and the technician was incredibly knowledgeable. Everything was set up perfectly and works flawlessly with my existing devices.", avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop' },
    ];
    
    const [current, setCurrent] = useState(0);
    const carouselRef = useRef(null);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-gray-50 text-slate-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h3 className="text-blue-600 font-semibold tracking-widest mb-2 uppercase">Client Reviews</h3>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        What Our Customers Are Saying
                    </h2>
                </div>
                
                <div className="relative overflow-hidden">
                    <div 
                        ref={carouselRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * 100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevSlide} 
                        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCarousel;