import AboutHero from '@/components/about/about-hero';
import BrandIdentity from '@/components/about/brand-identity';
import ViritiaDifference from '@/components/about/viritia-difference';
import StatsSection from '@/components/about/stats-section';
import TestimonialsGrid from '@/components/about/testimonials-grid';
import PackagingSection from '@/components/about/packaging-section';
import CoreValues from '@/components/about/core-values';
import AboutCta from '@/components/about/about-cta';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandIdentity />
      <ViritiaDifference />
      <StatsSection />
      <TestimonialsGrid />
      <PackagingSection />
      <CoreValues />
      <AboutCta />
    </>
  );
}
