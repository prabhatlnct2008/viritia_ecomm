'use client';

import { Minus, Plus } from 'lucide-react';

type Props = {
  quantity: number;
  onChange: (qty: number) => void;
};

export default function QuantityStepper({ quantity, onChange }: Props) {
  return (
    <div className="flex items-center rounded-lg border border-border">
      <button
        onClick={() => onChange(quantity - 1)}
        className="px-3 py-2 text-warm-gray transition-colors hover:text-charcoal"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="min-w-[2rem] text-center text-sm font-medium">{quantity}</span>
      <button
        onClick={() => onChange(quantity + 1)}
        className="px-3 py-2 text-warm-gray transition-colors hover:text-charcoal"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
