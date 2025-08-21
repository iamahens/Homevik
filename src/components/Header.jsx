import React from 'react';
import Icon from './Icon';

// Header Component
const Header = () => {
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Why Us?', href: '#why-us' },
    { name: 'Showcase', href: '#showcase'},
    { name: 'Process', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="bg-slate-900/50 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* <a href="#" className="text-2xl font-bold text-white" style={{textShadow: '0 0 8px rgba(0, 220, 255, 0.7)'}}>SmartHome</a> */}
        <img src="/logo.png" alt="" className='w-[160px] h-[70px]' />
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-cyan-400 transition duration-300">{link.name}</a>
          ))}
          <a href="#contact" className="bg-cyan-500 text-white py-2 px-5 rounded-lg font-semibold hover:bg-cyan-600 shadow-lg shadow-cyan-500/20 transition duration-300">Schedule a Demo</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <Icon name="menu" className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
