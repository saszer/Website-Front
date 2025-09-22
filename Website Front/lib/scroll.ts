"use client";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function getHeaderOffset(): number {
	const root = document.documentElement;
	const val = getComputedStyle(root).getPropertyValue("--header-height");
	const px = parseInt(val || "72", 10);
	return Number.isNaN(px) ? 72 : px;
}

export function animateToHash(hash: string) {
	if (!hash || hash === "#") return;
	const el = document.querySelector(hash);
	if (!el) return;
	const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - getHeaderOffset();
	gsap.to(window, { duration: 0.6, ease: "power2.out", scrollTo: { y, autoKill: true } });
	history.pushState(null, "", hash);
}

export function scrollToInitialHash() {
	if (location.hash) {
		requestAnimationFrame(() => animateToHash(location.hash));
	}
} 