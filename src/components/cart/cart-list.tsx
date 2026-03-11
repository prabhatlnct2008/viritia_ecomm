'use client';

import { X } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { resolveProductImage } from '@/lib/images';
import { formatPrice } from '@/lib/formatters';
import OptimizedImage from '@/components/shared/optimized-image';
import QuantityStepper from './quantity-stepper';

export default function CartList() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const imageSrc = resolveProductImage(item.imageKey);
        return (
          <div
            key={item.productId}
            className="flex gap-5 rounded-xl bg-white p-5 shadow-sm"
          >
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg">
              <OptimizedImage
                src={imageSrc}
                alt={item.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-lg text-charcoal">{item.name}</h3>
                    <p className="text-xs text-warm-gray">
                      {item.collection} · {item.color} · {item.size}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-warm-gray transition-colors hover:text-red-500"
                    aria-label="Remove item"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <QuantityStepper
                  quantity={item.quantity}
                  onChange={(qty) => updateQuantity(item.productId, qty)}
                />
                <span className="font-semibold text-charcoal">
                  {formatPrice(item.selling_price * item.quantity)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
