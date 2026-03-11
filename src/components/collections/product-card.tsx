import Link from 'next/link';
import { resolveProductImage } from '@/lib/images';
import { getProductUrl } from '@/lib/formatters';
import OptimizedImage from '@/components/shared/optimized-image';
import PriceDisplay from '@/components/shared/price-display';
import type { Product } from '@/types';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const imageSrc = resolveProductImage(product.imageKeys[0]);

  return (
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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-charcoal/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
            {product.collection}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-charcoal">
            {product.sheet_type}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl text-charcoal">{product.name}</h3>
        <p className="mt-1 text-xs text-warm-gray">
          {product.color} · {product.size} · {product.dimensions}
        </p>
        <div className="mt-3">
          <PriceDisplay
            sellingPrice={product.selling_price}
            mrp={product.mrp}
            size="md"
          />
        </div>
      </div>
    </Link>
  );
}
