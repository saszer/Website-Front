"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { animateToHash } from "@/lib/scroll";
import nav from "@/content/nav";
import clsx from "clsx";

export default function Header() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		function onHashLinkClick(e: MouseEvent) {
			const target = e.target as HTMLElement | null;
			if (!target) return;
			const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
			if (!anchor) return;
			e.preventDefault();
			setOpen(false);
			animateToHash(anchor.getAttribute("href") || "");
		}
		document.addEventListener("click", onHashLinkClick);
		return () => document.removeEventListener("click", onHashLinkClick);
	}, []);

	return (
		<header className={clsx("glass-header sticky top-0 z-40", "supports-[backdrop-filter]:bg-white/60")}
			role="banner"
		>
			<div className="container flex h-[var(--header-height)] items-center justify-between">
				<Link href="/" className="font-semibold text-neutral-900 dark:text-white">Graphigxs</Link>
				<nav aria-label="Primary" className="hidden md:flex items-center gap-6">
					{nav.items.map((item) => (
						<a key={item.href} href={item.href} className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 rounded">
							{item.label}
						</a>
					))}
					<Link href="/blog" className="text-sm font-medium text-neutral-900 dark:text-white">Blog</Link>
				</nav>
				<button
					className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
					aria-expanded={open}
					aria-controls="mobile-nav"
					aria-label="Toggle menu"
					onClick={() => setOpen((v) => !v)}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
						{open ? (
							<path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						) : (
							<path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						)}
					</svg>
				</button>
			</div>
			<div
				id="mobile-nav"
				className={clsx("md:hidden border-t border-white/20 dark:border-white/10", open ? "block" : "hidden")}
				role="navigation"
				aria-label="Mobile"
			>
				<div className="container py-3 space-y-2">
					{nav.items.map((item) => (
						<a key={item.href} href={item.href} className="block py-2 text-base">{item.label}</a>
					))}
					<Link href="/blog" className="block py-2 text-base font-medium">Blog</Link>
				</div>
			</div>
		</header>
	);
} 