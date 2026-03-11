'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '@/lib/products';
import { resolveProductImage } from '@/lib/images';
import { formatPrice, getProductUrl } from '@/lib/formatters';
import OptimizedImage from '@/components/shared/optimized-image';
import SectionHeading from '@/components/shared/section-heading';
import PriceDisplay from '@/components/shared/price-display';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Curated Selection"
          title="Featured Products"
          subtitle="Handpicked favorites from our premium collections."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => {
            const imageSrc = resolveProductImage(product.imageKeys[0]);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  href={getProductUrl(product.slug)}
                  className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <OptimizedImage
                      src={imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
                      {product.collection}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-warm-gray">{product.collection}</p>
                    <h3 className="mt-1 font-heading text-lg text-charcoal">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-warm-gray">
                      {product.color} · {product.size}
                    </p>
                    <div className="mt-2">
                      <PriceDisplay
                        sellingPrice={product.selling_price}
                        mrp={product.mrp}
                        size="sm"
                      />
                    </div>
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
