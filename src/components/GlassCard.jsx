import React from 'react';

// Helper for Tailwind class names
const cx = (...classes) => classes.filter(Boolean).join(' ');

// Glass Card Component
const GlassCard = ({ children, className, ...props }) => (
  <div 
    className={cx(
      'bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 transition-all duration-300 ease-in-out',
      'hover:bg-slate-800/70 hover:border-cyan-400/50 hover:-translate-y-1',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default GlassCard;
