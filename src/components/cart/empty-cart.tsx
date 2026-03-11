import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function EmptyCart() {
  return (
    <div className="py-20 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-light-beige">
        <ShoppingBag size={32} className="text-warm-gray" />
      </div>
      <h2 className="font-heading text-3xl text-charcoal">Your Cart is Empty</h2>
      <p className="mx-auto mt-3 max-w-md text-warm-gray">
        Discover our premium collections and find the perfect bedsheets for your home.
      </p>
      <Link
        href="/collections"
        className="mt-8 inline-flex items-center bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-gold-light"
      >
        Explore Collections
      </Link>
    </div>
  );
}
