import React from 'react';

export default function Intro() {
return (
<section id="intro" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center">
<div className="container mx-auto px-6 text-center">
<h1 className="text-6xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight">
Build blazing-fast sites
<br />
<span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
on the edge
</span>
</h1>
<p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
SEO-first, buttery animations, and Cloudflare Pages ready.
</p>
<a 
href="#track-a" 
className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
>
Explore features
</a>
</div>
</section>
);
}
