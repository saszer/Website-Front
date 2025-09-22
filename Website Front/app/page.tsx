import React from 'react';
import Navigation from '@/components/Navigation';
import Intro from '@/components/sections/Intro';
import HorizontalTrack from '@/components/sections/HorizontalTrack';
import VerticalFeatures from '@/components/sections/VerticalFeatures';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';
import { trackAItems, trackBItems, sections } from '@/content/sections';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <main>
        <Intro />
        <HorizontalTrack id="track-a" items={trackAItems} />
        <VerticalFeatures id="features" features={sections} />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <HorizontalTrack id="track-b" items={trackBItems} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
