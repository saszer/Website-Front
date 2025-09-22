import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-light text-white mb-6">
          Get results
          <br />
          <span className="font-semibold">anytime, anywhere</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Available on Web, Mobile, and Desktop. Start building faster today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@embracingearth.space" 
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start for free
          </a>
          <a
            href="#intro"
            className="inline-flex items-center px-8 py-4 border border-slate-600 text-white font-semibold rounded-full hover:border-slate-500 transition-all duration-300"
          >
            Learn more
          </a>
        </div>
        <div className="mt-8 text-slate-500 text-sm">
          embracingearth.space - Building the future
        </div>
      </div>
    </section>
  );
}
