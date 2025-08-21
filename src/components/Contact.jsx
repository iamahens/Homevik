import React from 'react'
import GlassCard from './GlassCard'
import Icon from './Icon'
const Contact = () => {
  return (
    <div>
       <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
            <GlassCard className="rounded-xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Evolve Your Home?</h2>
                    <p className="text-gray-400 mb-8">Let's talk. Our experts are ready to design a bespoke automation system that fits your life perfectly. Get a free, no-obligation consultation today.</p>
                    <p className="flex items-center mb-4 text-lg"><Icon name="phone" className="w-5 h-5 mr-3 text-cyan-400" /> (555) 123-4567</p>
                    <p className="flex items-center text-lg"><Icon name="email" className="w-5 h-5 mr-3 text-cyan-400" /> contact@smarthome.com</p>
                </div>
                <GlassCard className="p-8 rounded-lg bg-slate-900/50">
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
    </section>
    </div>
  )
}

export default Contact
