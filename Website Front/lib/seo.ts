export function jsonLdBreadcrumb(breadcrumbs: Array<{name: string; url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateSEOMetadata(title: string, description: string, url: string, image?: string) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image ? [image] : []
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : []
    }
  };
}
