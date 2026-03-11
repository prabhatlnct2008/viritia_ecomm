'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/cart-store';
import CartList from '@/components/cart/cart-list';
import CartSummary from '@/components/cart/cart-summary';
import EmptyCart from '@/components/cart/empty-cart';

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-cream pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h1 className="font-heading text-4xl text-charcoal">Your Cart</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-28 pb-16 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-heading text-3xl text-charcoal md:text-4xl">Your Cart</h1>
          <Link
            href="/collections"
            className="text-sm text-gold transition-colors hover:text-gold-light"
          >
            Continue Shopping →
          </Link>
        </div>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CartList />
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
