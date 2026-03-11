'use client';

import { Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { getWhatsAppCartUrl } from '@/lib/whatsapp';
import { formatPrice } from '@/lib/formatters';

export default function CartSummary() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const getTotal = useCartStore((s) => s.getTotal);
  const getItemCount = useCartStore((s) => s.getItemCount);

  const total = getTotal();
  const count = getItemCount();

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="font-heading text-xl text-charcoal">Order Summary</h3>

      <div className="mt-4 space-y-3 border-b border-border pb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-warm-gray">Total Items</span>
          <span className="font-medium">{count}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-warm-gray">Subtotal</span>
          <span className="font-medium">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>

      <p className="mt-3 text-xs text-warm-gray">
        Final confirmation and payment details will be shared over WhatsApp.
      </p>

      <div className="mt-6 space-y-3">
        <a
          href={getWhatsAppCartUrl(items)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-green-700"
        >
          Proceed on WhatsApp
        </a>
        <button
          onClick={clearCart}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm text-warm-gray transition-colors hover:border-red-300 hover:text-red-500"
        >
          <Trash2 size={16} /> Clear Cart
        </button>
      </div>
    </div>
  );
}
