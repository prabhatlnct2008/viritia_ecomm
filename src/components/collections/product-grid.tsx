'use client';

import { motion } from 'framer-motion';
import ProductCard from './product-card';
import type { Product } from '@/types';

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-heading text-2xl text-warm-gray">No products found</p>
        <p className="mt-2 text-sm text-warm-gray">Try selecting a different collection.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
