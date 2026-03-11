'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Check } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { getWhatsAppProductUrl } from '@/lib/whatsapp';
import { getCollectionFilterUrl } from '@/lib/formatters';
import PriceDisplay from '@/components/shared/price-display';
import type { Product } from '@/types';

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="text-xs text-warm-gray">
        <Link href="/" className="hover:text-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections" className="hover:text-gold">Collections</Link>
        <span className="mx-2">/</span>
        <Link href={getCollectionFilterUrl(product.collectionKey)} className="hover:text-gold">
          {product.collection}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
          {product.collection}
        </p>
        <h1 className="mt-2 font-heading text-3xl text-charcoal md:text-4xl">
          {product.name}
        </h1>
      </div>

      <PriceDisplay sellingPrice={product.selling_price} mrp={product.mrp} size="lg" />

      <p className="text-sm leading-relaxed text-warm-gray">{product.description}</p>

      {/* Details */}
      <div className="grid grid-cols-2 gap-3 rounded-xl bg-light-beige p-5 text-sm">
        <div><span className="text-warm-gray">SKU:</span> <span className="font-medium">{product.sku}</span></div>
        <div><span className="text-warm-gray">Size:</span> <span className="font-medium">{product.size}</span></div>
        <div><span className="text-warm-gray">Color:</span> <span className="font-medium">{product.color}</span></div>
        <div><span className="text-warm-gray">Fabric:</span> <span className="font-medium">{product.fabric}</span></div>
        <div><span className="text-warm-gray">Weave:</span> <span className="font-medium">{product.weave}</span></div>
        <div><span className="text-warm-gray">Thread Count:</span> <span className="font-medium">{product.thread_count}</span></div>
        <div><span className="text-warm-gray">Sheet Type:</span> <span className="font-medium">{product.sheet_type}</span></div>
        <div><span className="text-warm-gray">Dimensions:</span> <span className="font-medium">{product.dimensions}</span></div>
      </div>

      {/* Features */}
      <div>
        <h3 className="mb-3 text-xs font-medium uppercase tracking-wide text-gold">Features</h3>
        <ul className="grid grid-cols-2 gap-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-charcoal">
              <Check size={14} className="shrink-0 text-gold" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleAddToCart}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium uppercase tracking-wide transition-colors ${
            added
              ? 'bg-green-600 text-white'
              : 'bg-charcoal text-white hover:bg-charcoal-soft'
          }`}
        >
          {added ? (
            <>
              <Check size={18} /> Added to Cart
            </>
          ) : (
            <>
              <ShoppingBag size={18} /> Add to Cart
            </>
          )}
        </button>
        <a
          href={getWhatsAppProductUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-green-700"
        >
          Buy on WhatsApp
        </a>
      </div>
    </div>
  );
}
