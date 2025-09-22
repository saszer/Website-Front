export async function getPosts({ page = 1, pageSize = 10 }: { page?: number; pageSize?: number }) {
  return [
    { slug: "sample-post-1" },
    { slug: "sample-post-2" }
  ];
}

export async function getPostBySlug(slug: string) {
  return {
    title: "Sample Post",
    excerpt: "This is a sample blog post",
    slug: slug,
    publishedAt: new Date().toISOString(),
    html: "<p>This is sample content for the blog post.</p>",
    image: null
  };
}
