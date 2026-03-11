import HeroSection from '@/components/home/hero-section';
import FeaturedCollections from '@/components/home/featured-collections';
import BrandValues from '@/components/home/brand-values';
import FeaturedProducts from '@/components/home/featured-products';
import Testimonials from '@/components/home/testimonials';
import CtaSection from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <BrandValues />
      <FeaturedProducts />
      <Testimonials />
      <CtaSection />
    </>
  );
}
