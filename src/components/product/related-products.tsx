import { getRelatedProducts } from '@/lib/products';
import ProductCard from '@/components/collections/product-card';
import SectionHeading from '@/components/shared/section-heading';
import type { Product } from '@/types';

type Props = {
  product: Product;
};

export default function RelatedProducts({ product }: Props) {
  const related = getRelatedProducts(product, 3);
  if (related.length === 0) return null;

  return (
    <section className="bg-light-beige py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="You May Also Like"
          title="Related Products"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
