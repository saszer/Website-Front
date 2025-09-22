import React from 'react';

type Feature = {
id: string;
title: string;
subtitle?: string;
body: string;
image?: { src: string; alt: string; width?: number; height?: number };
};

export default function VerticalFeatures({ id, features }: { id: string; features: Feature[] }) {
return (
<section id={id} className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl font-light text-slate-900 mb-6">
Features that
<br />
<span className="font-semibold">actually work</span>
</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
Everything you need to build fast, accessible, and SEO-optimized websites.
</p>
</div>
<div className="space-y-20">
{features.map((f, index) => (
<article key={f.id} className={grid md:grid-cols-12 gap-12 items-center }>
<div className={md:col-span-7 }>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
<h3 className="text-2xl font-semibold text-slate-900 mb-3">{f.title}</h3>
{f.subtitle && <p className="text-slate-600 mb-4 font-medium">{f.subtitle}</p>}
<div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: f.body }} />
</div>
</div>
{f.image && (
<div className={md:col-span-5 }>
<div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
<img
src={f.image.src}
alt={f.image.alt}
width={f.image.width || 800}
height={f.image.height || 500}
loading="lazy"
className="rounded-2xl shadow-lg w-full h-auto"
/>
</div>
</div>
)}
</article>
))}
</div>
</div>
</section>
);
}
