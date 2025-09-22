"use client";
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type TrackItem = { title: string; content?: ReactNode; bg?: string };

export default function HorizontalTrack({ id, items }: { id: string; items: TrackItem[] }) {
const containerRef = useRef<HTMLDivElement | null>(null);
const trackRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
const container = containerRef.current;
const track = trackRef.current;
if (!container || !track) return;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
if (reduceMotion || isMobile) return;

const sections = Array.from(track.children) as HTMLElement[];
const totalWidth = sections.reduce((acc, el) => acc + el.offsetWidth, 0);
gsap.set(track, { width: totalWidth });

const ctx = gsap.context(() => {
const tween = gsap.to(track, {
x: () => -(totalWidth - container.clientWidth),
ease: "none",
scrollTrigger: {
trigger: container,
start: "top top",
end: () => "+=" + (totalWidth - container.clientWidth),
scrub: true,
pin: true,
anticipatePin: 1,
invalidateOnRefresh: true,
},
});
return () => tween.scrollTrigger?.kill();
}, track);

return () => ctx.revert();
}, [items.length]);

return (
<section id={id} ref={containerRef} className="relative w-full bg-slate-50">
<div
ref={trackRef}
className="flex md:flex-row flex-col md:h-[90vh] h-auto md:[&>*]:min-w-[100vw] md:[&>*]:h-full [&>*]:snap-start md:snap-x md:snap-mandatory"
>
{items.map((item, idx) => (
<article
key={idx}
className="flex items-center justify-center p-10"
style={{ background: item.bg || "linear-gradient(135deg, #f8fafc, #e2e8f0)" }}
>
<div className="container max-w-4xl text-center">
<div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/20">
<h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
{item.title}
</h3>
{item.content && (
<div className="text-xl text-slate-600 font-light leading-relaxed">
{item.content}
</div>
)}
</div>
</div>
</article>
))}
</div>
</section>
);
}
