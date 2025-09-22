import type { Metadata } from "next";
import { getPostBySlug, getPosts } from "@/lib/cms/ghost";
import { jsonLdBreadcrumb } from "@/lib/seo";

export const revalidate = 60;

export async function generateStaticParams() {
	const posts = await getPosts({ page: 1, pageSize: 20 });
	return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const post = await getPostBySlug(params.slug);
	return {
		title: post.title,
		description: post.excerpt,
		openGraph: { title: post.title, description: post.excerpt, images: post.image ? [post.image] : [] },
		twitter: { title: post.title, description: post.excerpt },
		alternates: { canonical: `/blog/${post.slug}` },
	};
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
	const post = await getPostBySlug(params.slug);
	return (
		<article className="container py-16 prose dark:prose-invert">
			<h1>{post.title}</h1>
			<p className="!mt-0 text-sm opacity-70">{new Date(post.publishedAt).toLocaleDateString()}</p>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
			<script type="application/ld+json" suppressHydrationWarning>
				{JSON.stringify(
					jsonLdBreadcrumb([
						{ name: "Home", url: "/" },
						{ name: "Blog", url: "/blog" },
						{ name: post.title, url: `/blog/${post.slug}` },
					])
				)}
			</script>
		</article>
	);
} 