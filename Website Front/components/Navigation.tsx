import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl shadow-blue-500/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">
            Graphigxs
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              How it Works
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors duration-200 font-medium">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
