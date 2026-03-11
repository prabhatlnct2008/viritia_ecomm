import { formatPrice } from '@/lib/formatters';

type Props = {
  sellingPrice: number;
  mrp: number;
  size?: 'sm' | 'md' | 'lg';
};

export default function PriceDisplay({ sellingPrice, mrp, size = 'md' }: Props) {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-baseline gap-2">
      <span className={`font-semibold text-charcoal ${sizeClasses[size]}`}>
        {formatPrice(sellingPrice)}
      </span>
      {mrp > sellingPrice && (
        <span className="text-sm text-warm-gray line-through">
          {formatPrice(mrp)}
        </span>
      )}
    </div>
  );
}
