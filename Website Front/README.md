# Graphigxs - Brain.fm-Inspired Next.js Website

A modern, minimalist, and zen-inspired landing page built with Next.js, featuring a clean design inspired by Brain.fm's aesthetic. This project showcases high-performance web development with SEO optimization, smooth animations, and a professional user experience.

##  Features

###  Design & UX
- **Brain.fm-inspired minimalist design** with zen aesthetics
- **Glassmorphism navigation** with backdrop blur effects
- **Smooth scrolling** and elegant transitions
- **Responsive design** optimized for all devices
- **Gradient backgrounds** with subtle animations
- **Professional typography** with proper hierarchy

###  Performance
- **Next.js 13+** with App Router
- **Server-Side Rendering (SSR)** and Static Site Generation (SSG)
- **Cloudflare Pages** ready for deployment
- **SEO optimized** with metadata and structured data
- **Fast loading** with optimized images and code splitting

###  Technical Stack
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **GSAP** for smooth animations
- **Framer Motion** for route transitions
- **Lenis** for smooth scrolling
- **Next.js** with App Router

##  Project Structure

\\\
Website Front/
 app/                    # Next.js App Router
    layout.tsx         # Root layout
    page.tsx           # Home page
    blog/              # Blog pages
 components/            # React components
    sections/          # Page sections
    ui/               # UI components
    Navigation.tsx    # Navigation component
 lib/                  # Utilities and configurations
    cms/              # CMS integrations
    seo.ts            # SEO utilities
 content/              # Content data
 public/               # Static assets
 styles/               # Global styles
\\\

##  Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \\\ash
   git clone <repository-url>
   cd "Website Front"
   \\\

2. **Install dependencies**
   \\\ash
   npm install
   \\\

3. **Start development server**
   \\\ash
   npm run dev
   \\\

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

##  Available Scripts

- \
pm run dev\ - Start development server
- \
pm run build\ - Build for production
- \
pm run start\ - Start production server
- \
pm run lint\ - Run ESLint
- \
pm run lighthouse:ci\ - Run Lighthouse CI

##  Sections

###  Homepage Sections
1. **Hero Section** - Full-screen introduction with gradient text
2. **Features** - Vertical features with alternating layouts
3. **How It Works** - 3-step process explanation
4. **Pricing** - 3-tier pricing plans
5. **Testimonials** - User testimonials
6. **Track Sections** - Horizontal scrolling showcases
7. **Call-to-Action** - Contact and conversion section
8. **Footer** - Links and social media

###  Design System
- **Colors**: Slate and blue gradient palette
- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: Consistent padding and margins
- **Shadows**: Soft, subtle shadows for depth
- **Borders**: Rounded corners (2xl radius)
- **Animations**: Smooth transitions and hover effects

##  Configuration

### Environment Variables
Create a \.env.local\ file:

\\\env
# CMS Configuration
CMS_PROVIDER=ghost
GHOST_CONTENT_API_URL=your_ghost_url
GHOST_CONTENT_API_KEY=your_ghost_key

# Or for WordPress
CMS_PROVIDER=wordpress
WP_BASE_URL=your_wp_url
WP_GRAPHQL_URL=your_graphql_url
\\\

### Tailwind Configuration
The project uses Tailwind CSS with custom configuration in \	ailwind.config.ts\.

##  Deployment

### Cloudflare Pages
1. Connect your repository to Cloudflare Pages
2. Set build command: \
pm run build\
3. Set output directory: \.next\
4. Configure environment variables
5. Deploy!

### Vercel
1. Import project to Vercel
2. Configure environment variables
3. Deploy automatically on push

##  Customization

### Colors
Update the color palette in \	ailwind.config.ts\:

\\\	ypescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
\\\

### Content
- Update content in \content/sections.ts\
- Modify components in \components/sections/\
- Add new sections by creating new components

### Styling
- Global styles in \styles/\
- Component-specific styles with Tailwind classes
- Custom CSS in \pp/globals.css\

##  Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

##  Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Optimized for Cloudflare Pages

##  SEO Features

- **Metadata**: Dynamic meta tags
- **Structured Data**: JSON-LD breadcrumbs
- **Sitemap**: Auto-generated sitemap
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter sharing optimization

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

##  License

This project is licensed under the MIT License.

##  Acknowledgments

- **Brain.fm** for design inspiration
- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for hosting and deployment tools

##  Support

For support, email [hello@embracingearth.space](mailto:hello@embracingearth.space) or create an issue in the repository.

---

**Built with  by [embracingearth.space](https://embracingearth.space)**
