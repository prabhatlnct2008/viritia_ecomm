'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import collectionsData from '@/data/collections.json';
import { resolveProductImage } from '@/lib/images';
import { getProductsByCollection } from '@/lib/products';
import { getCollectionFilterUrl } from '@/lib/formatters';
import OptimizedImage from '@/components/shared/optimized-image';
import SectionHeading from '@/components/shared/section-heading';

export default function FeaturedCollections() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our Collections"
          title="Curated for Refined Living"
          subtitle="Explore our signature collections, each crafted with a distinct character and premium quality."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {collectionsData.map((col, i) => {
            const products = getProductsByCollection(col.key);
            const primaryImage = products[0]?.imageKeys[0];
            const imageSrc = primaryImage ? resolveProductImage(primaryImage) : '';

            return (
              <motion.div
                key={col.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={getCollectionFilterUrl(col.key)}
                  className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {imageSrc && (
                      <OptimizedImage
                        src={imageSrc}
                        alt={col.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-charcoal">{col.name}</h3>
                    <p className="mt-1 text-sm text-warm-gray">{col.description}</p>
                    <span className="mt-4 inline-block text-xs font-medium uppercase tracking-wide text-gold">
                      Explore Collection →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
