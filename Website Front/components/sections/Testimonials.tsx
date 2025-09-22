import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Peterson",
      handle: "@sarahdev",
      content: "Graphigxs + Next.js = performance cheat code. Not just templates. Not noise. SEO-optimized builds. Try it when you really need to ship fast. #WebDev",
      avatar: "SP"
    },
    {
      name: "Mike Foster", 
      handle: "@mikecodes",
      content: "I am a big fan of Graphigxs. I do not think I have found a platform on Vercel that rivals this ability to keep me in the zone.",
      avatar: "MF"
    },
    {
      name: "Jake Liu",
      handle: "@jakebuilds", 
      content: "I have tried every performance hack out there. Graphigxs is the ONLY one that actually rewired how I build. Clean code. Sites engineered for speed. Let us go.",
      avatar: "JL"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            See what developers
            <br />
            <span className="font-semibold">are saying</span>
          </h2>
          <p className="text-lg text-slate-600">
            Graphigxs users ship faster, everyday - see what they have to say!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.handle}</div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
