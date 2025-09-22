import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphigxs - Next.js Site",
  description: "SEO-first, animated, Cloudflare-ready Next.js site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
