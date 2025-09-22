import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Template",
      description: "Select from our curated collection of high-performance templates designed for speed and SEO.",
      icon: ""
    },
    {
      number: "02", 
      title: "Customize & Deploy",
      description: "Customize your design with our intuitive tools and deploy instantly to Cloudflare Pages.",
      icon: ""
    },
    {
      number: "03",
      title: "Scale & Optimize", 
      description: "Monitor performance with built-in analytics and optimize for even better results.",
      icon: ""
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            How it
            <br />
            <span className="font-semibold">works</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Three simple steps to get your high-performance website live in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-white rounded-3xl shadow-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
