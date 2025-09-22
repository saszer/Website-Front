import type { TrackItem } from "@/components/sections/HorizontalTrack";

export const trackAItems: TrackItem[] = [
	{ title: "Edge-rendered", content: "Fast SSR on Cloudflare Pages", bg: "linear-gradient(135deg,#eef2ff,#e0e7ff)" },
	{ title: "Buttery animations", content: "GSAP + Framer Motion", bg: "linear-gradient(135deg,#fff7ed,#ffedd5)" },
	{ title: "SEO-first", content: "Schema, sitemaps, and more", bg: "linear-gradient(135deg,#ecfeff,#cffafe)" },
];

export const sections = [
	{
		id: "seo",
		title: "SEO that works",
		subtitle: "Metadata, JSON-LD, and indexable content",
		body: "<p>We render content on the server and include canonical tags, OpenGraph, Twitter cards, and JSON-LD.</p>",
		image: { src: "/images/seo.png", alt: "SEO illustration" },
	},
	{
		id: "performance",
		title: "Performance obsessed",
		subtitle: "Lazy images, font optimization, and reduced motion",
		body: "<ul><li>AVIF/WebP images</li><li>next/font with display swap</li><li>Respects prefers-reduced-motion</li></ul>",
	},
	{
		id: "accessibility",
		title: "Accessible by default",
		body: "<p>Keyboard navigation, focus states, and semantic HTML.</p>",
	},
	{
		id: "blog",
		title: "Pluggable blog",
		body: "<p>Switch between Ghost and WordPress with an env flag. Falls back to demo content.</p>",
	},
	{
		id: "cloudflare",
		title: "Cloudflare native",
		body: "<p>Optimized for Cloudflare Pages and Functions with Edge SSR where needed.</p>",
	},
];

export const trackBItems: TrackItem[] = [
	{ title: "Gallery", content: "Showcase your work", bg: "linear-gradient(135deg,#f0f9ff,#e0f2fe)" },
	{ title: "Testimonials", content: "What users say", bg: "linear-gradient(135deg,#f7fee7,#ecfccb)" },
	{ title: "Get started", content: "Try it today", bg: "linear-gradient(135deg,#fdf2f8,#fce7f3)" },
]; 